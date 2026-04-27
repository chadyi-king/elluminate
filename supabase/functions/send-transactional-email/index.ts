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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !supabaseServiceKey) {
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
