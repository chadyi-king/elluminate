import { createClient } from 'npm:@supabase/supabase-js@2'
import * as React from 'npm:react@18.3.1'
import { render } from 'npm:@react-email/render@0.0.17'
import { TEMPLATES } from '../_shared/transactional-email-templates/registry.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const SENDER_DOMAIN = 'notify.elluminate.sg'
const FROM_DOMAIN = 'elluminate.sg'
const FROM_NAME = 'Elluminate'

interface SendRequest {
  templateName: string
  recipientEmail: string
  idempotencyKey: string
  templateData?: Record<string, any>
  /** Optional override of the From name (default: "Elluminate"). */
  fromName?: string
  /** Optional reply-to address (e.g., the submitter's email for inquiry notifications). */
  replyTo?: string
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

// Templates that may be invoked by anonymous (unauthenticated) callers.
// All other templates require a valid Authorization bearer token.
const PUBLIC_TEMPLATES: Record<string, { fixedRecipient?: string }> = {
  'contact-inquiry': { fixedRecipient: 'info@exstatic.one' },
  'contact-confirmation': {},
}

// Naive in-memory rate limiter per edge instance. Best-effort spam mitigation
// for the public contact flow; combined with template/recipient locking.
const rateBuckets = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const bucket = rateBuckets.get(key)
  if (!bucket || bucket.resetAt < now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false
  bucket.count++
  return true
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')
  if (!supabaseUrl || !supabaseServiceKey || !supabaseAnonKey) {
    console.error('Missing required environment variables')
    return json({ error: 'Server configuration error' }, 500)
  }

  let payload: SendRequest
  try {
    payload = await req.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const { templateName, recipientEmail, idempotencyKey, templateData, fromName, replyTo } = payload

  if (!templateName || !recipientEmail || !idempotencyKey) {
    return json({ error: 'templateName, recipientEmail, and idempotencyKey are required' }, 400)
  }

  const entry = TEMPLATES[templateName]
  if (!entry) {
    return json({ error: `Unknown template: ${templateName}` }, 400)
  }

  // Authorize: public allow-list templates skip auth but are recipient-locked
  // and rate-limited; everything else requires a valid bearer token.
  const publicEntry = PUBLIC_TEMPLATES[templateName]
  if (!publicEntry) {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return json({ error: 'Unauthorized' }, 401)
    }
    const authClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    })
    const token = authHeader.replace('Bearer ', '')
    const { data: claimsData, error: claimsErr } = await authClient.auth.getClaims(token)
    if (claimsErr || !claimsData?.claims) {
      return json({ error: 'Unauthorized' }, 401)
    }
  } else {
    if (
      publicEntry.fixedRecipient &&
      recipientEmail.toLowerCase() !== publicEntry.fixedRecipient.toLowerCase()
    ) {
      return json({ error: 'Recipient not allowed for this template' }, 403)
    }
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('cf-connecting-ip') ||
      'unknown'
    if (!checkRateLimit(`${ip}:${templateName}`)) {
      return json({ error: 'Rate limit exceeded' }, 429)
    }
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // 1. Suppression check
  const { data: suppressed } = await supabase
    .from('suppressed_emails')
    .select('email')
    .eq('email', recipientEmail.toLowerCase())
    .maybeSingle()

  if (suppressed) {
    await supabase.from('email_send_log').insert({
      message_id: idempotencyKey,
      template_name: templateName,
      recipient_email: recipientEmail,
      status: 'suppressed',
      error_message: 'Recipient is on suppression list',
    })
    return json({ status: 'suppressed' }, 200)
  }

  // 2. Render template
  const data = templateData ?? {}
  const Component = entry.component
  const element = React.createElement(Component, data)
  const html = await render(element, { pretty: false })
  const text = await render(element, { plainText: true })
  const subject =
    typeof entry.subject === 'function' ? entry.subject(data) : entry.subject

  // 3. Enqueue (process-email-queue actually sends)
  const queuePayload = {
    to: recipientEmail,
    from: `${fromName ?? FROM_NAME} <noreply@${FROM_DOMAIN}>`,
    sender_domain: SENDER_DOMAIN,
    subject,
    html,
    text,
    purpose: 'transactional',
    label: templateName,
    idempotency_key: idempotencyKey,
    message_id: idempotencyKey,
    queued_at: new Date().toISOString(),
    reply_to: replyTo,
  }

  const { error: enqueueErr } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: queuePayload,
  })

  if (enqueueErr) {
    console.error('Failed to enqueue email', enqueueErr)
    return json({ error: 'Failed to enqueue email' }, 500)
  }

  await supabase.from('email_send_log').insert({
    message_id: idempotencyKey,
    template_name: templateName,
    recipient_email: recipientEmail,
    status: 'pending',
  })

  return json({ status: 'queued', messageId: idempotencyKey })
})
