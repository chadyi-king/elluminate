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
const DEFAULT_CONTACT_NOTIFICATION_EMAIL = 'info@elluminate.sg'
const EMAIL_ADDRESS_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface SendRequest {
  templateName: string
  recipientEmail?: string
  idempotencyKey: string
  templateData?: Record<string, unknown>
  /** Optional override of the From name (default: "Elluminate"). Ignored for public templates. */
  fromName?: string
  /** Optional reply-to address. Ignored for public templates (derived server-side). */
  replyTo?: string
  /** For public contact templates: the contact_submissions row id. */
  submissionId?: string
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

const FIXED_FROM_NAME = 'Elluminate'

function formatSubmittedAt(iso?: string | null) {
  if (!iso) return undefined
  try {
    return new Date(iso).toISOString()
  } catch {
    return undefined
  }
}

function formatExpectedDate(iso?: string | null) {
  if (!iso) return undefined
  try {
    const parsed = new Date(iso)
    if (Number.isNaN(parsed.getTime())) return undefined
    return parsed.toLocaleDateString('en-SG', {
      timeZone: 'Asia/Singapore',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return undefined
  }
}

interface ContactSubmissionRow {
  id?: string | null
  name: string
  email: string
  phone?: string | null
  event_category?: string | null
  organisation?: string | null
  organisation_type?: string | null
  expected_attendees?: string | null
  expected_date?: string | null
  additional_customisation?: string | null
  game_customisation?: string | null
  add_on_services?: unknown
  additional_details?: string | null
  lead_id?: string | null
  brand?: string | null
  service?: string | null
  form_name?: string | null
  gclid?: string | null
  gbraid?: string | null
  wbraid?: string | null
  gad_source?: string | null
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_term?: string | null
  utm_content?: string | null
  referrer?: string | null
  landing_page?: string | null
  submission_page?: string | null
  attribution_captured_at?: string | null
  created_at?: string | null
}

function extractAdditionalDetail(details: string | null | undefined, label: string) {
  if (!details) return undefined
  const line = details.split('\n').find((item) => item.startsWith(label))
  return line?.slice(label.length).trim() || undefined
}

function getContactNotificationEmail() {
  const configuredEmail = Deno.env.get('CONTACT_NOTIFICATION_EMAIL')?.trim().toLowerCase()
  if (!configuredEmail) return DEFAULT_CONTACT_NOTIFICATION_EMAIL

  if (!EMAIL_ADDRESS_PATTERN.test(configuredEmail)) {
    console.error('Invalid CONTACT_NOTIFICATION_EMAIL; using the default contact inbox')
    return DEFAULT_CONTACT_NOTIFICATION_EMAIL
  }

  return configuredEmail
}

function buildPublicTemplateData(
  templateName: string,
  row: ContactSubmissionRow,
  contactNotificationEmail: string,
): { recipientEmail: string; replyTo?: string; templateData: Record<string, unknown> } {
  const leadEmail = String(row.email).trim().toLowerCase()

  if (templateName === 'contact-confirmation') {
    return {
      recipientEmail: leadEmail,
      replyTo: contactNotificationEmail,
      templateData: {
        name: row.name,
        eventCategory: row.event_category ?? undefined,
        expectedAttendees: row.expected_attendees ?? undefined,
        expectedDate:
          formatExpectedDate(row.expected_date) ??
          extractAdditionalDetail(row.additional_details, 'Date or timing window:'),
      },
    }
  }
  // contact-inquiry
  const td: Record<string, unknown> = {
    name: row.name,
    email: row.email,
    phone: row.phone ?? undefined,
    eventCategory: row.event_category ?? undefined,
    organisation: row.organisation ?? undefined,
    organisationType: row.organisation_type ?? undefined,
    expectedAttendees: row.expected_attendees ?? undefined,
    expectedDate: formatExpectedDate(row.expected_date),
    additionalCustomisation: row.additional_customisation ?? undefined,
    gameCustomisation: row.game_customisation ?? undefined,
    addOnServices: Array.isArray(row.add_on_services) ? row.add_on_services.join(', ') : undefined,
    additionalDetails: row.additional_details ?? undefined,
    lead_id: row.lead_id ?? row.id ?? undefined,
    brand: row.brand ?? undefined,
    service: row.service ?? undefined,
    formName: row.form_name ?? undefined,
    gclid: row.gclid ?? undefined,
    gbraid: row.gbraid ?? undefined,
    wbraid: row.wbraid ?? undefined,
    gad_source: row.gad_source ?? undefined,
    utm_source: row.utm_source ?? undefined,
    utm_medium: row.utm_medium ?? undefined,
    utm_campaign: row.utm_campaign ?? undefined,
    utm_term: row.utm_term ?? undefined,
    utm_content: row.utm_content ?? undefined,
    referrer: row.referrer ?? undefined,
    landing_page: row.landing_page ?? undefined,
    submission_page: row.submission_page ?? undefined,
    attribution_captured_at: row.attribution_captured_at ?? undefined,
    submitted_at: formatSubmittedAt(row.created_at),
  }
  return {
    recipientEmail: contactNotificationEmail,
    replyTo: leadEmail,
    templateData: td,
  }
}

// Templates that may be invoked by anonymous (unauthenticated) callers.
// These templates fetch their data server-side from contact_submissions using
// the provided submissionId; client-supplied templateData/replyTo/fromName/
// recipientEmail are ignored to prevent forged inquiries and email relay abuse.
const PUBLIC_TEMPLATES: Record<string, true> = {
  'contact-inquiry': true,
  'contact-confirmation': true,
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

async function getOrCreateUnsubscribeToken(
  supabase: ReturnType<typeof createClient>,
  email: string,
) {
  const { data: existingToken, error: existingTokenError } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token')
    .eq('email', email)
    .maybeSingle()

  if (existingTokenError) throw existingTokenError
  if (existingToken?.token) return existingToken.token

  const token = crypto.randomUUID()
  const { error: insertTokenError } = await supabase
    .from('email_unsubscribe_tokens')
    .insert({ email, token })

  if (insertTokenError) throw insertTokenError
  return token
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

  const { templateName, recipientEmail: clientRecipient, idempotencyKey, templateData: clientTemplateData, fromName: clientFromName, replyTo: clientReplyTo, submissionId } = payload

  if (!templateName || !idempotencyKey) {
    return json({ error: 'templateName and idempotencyKey are required' }, 400)
  }

  const entry = TEMPLATES[templateName]
  if (!entry) {
    return json({ error: `Unknown template: ${templateName}` }, 400)
  }

  const isPublic = PUBLIC_TEMPLATES[templateName] === true
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  let effectiveRecipient: string
  let effectiveTemplateData: Record<string, unknown>
  let effectiveReplyTo: string | undefined
  let effectiveFromName: string

  if (!isPublic) {
    // Authenticated path: require a valid bearer token; trust client inputs.
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
    if (!clientRecipient) {
      return json({ error: 'recipientEmail is required' }, 400)
    }
    effectiveRecipient = clientRecipient
    effectiveTemplateData = clientTemplateData ?? {}
    effectiveReplyTo = clientReplyTo
    effectiveFromName = clientFromName ?? FIXED_FROM_NAME
  } else {
    // Public path: rate-limit, then derive everything from the DB row
    // keyed by submissionId. Client-supplied recipient/replyTo/fromName/
    // templateData are ignored to prevent forged inquiries and open-relay abuse.
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('cf-connecting-ip') ||
      'unknown'
    if (!checkRateLimit(`${ip}:${templateName}`)) {
      return json({ error: 'Rate limit exceeded' }, 429)
    }
    if (!submissionId || typeof submissionId !== 'string' || !/^[0-9a-fA-F-]{36}$/.test(submissionId)) {
      return json({ error: 'A valid submissionId is required for this template' }, 400)
    }
    const { data: row, error: rowErr } = await supabase
      .from('contact_submissions')
      .select('*')
      .eq('id', submissionId)
      .maybeSingle()
    if (rowErr || !row) {
      return json({ error: 'Submission not found' }, 404)
    }
    const derived = buildPublicTemplateData(
      templateName,
      row,
      getContactNotificationEmail(),
    )
    effectiveRecipient = derived.recipientEmail
    effectiveTemplateData = derived.templateData
    effectiveReplyTo = derived.replyTo
    effectiveFromName = FIXED_FROM_NAME
  }

  const normalizedRecipientEmail = effectiveRecipient.trim().toLowerCase()

  // 1. Suppression check
  const { data: suppressed } = await supabase
    .from('suppressed_emails')
    .select('email')
    .eq('email', normalizedRecipientEmail)
    .maybeSingle()

  if (suppressed) {
    await supabase.from('email_send_log').insert({
      message_id: idempotencyKey,
      template_name: templateName,
      recipient_email: normalizedRecipientEmail,
      status: 'suppressed',
      error_message: 'Recipient is on suppression list',
    })
    return json({ status: 'suppressed' }, 200)
  }

  // 2. Render template
  const data = effectiveTemplateData
  const Component = entry.component
  const element = React.createElement(Component, data)
  const html = await render(element, { pretty: false })
  const text = await render(element, { plainText: true })
  const subject =
    typeof entry.subject === 'function' ? entry.subject(data) : entry.subject
  const unsubscribeToken = await getOrCreateUnsubscribeToken(supabase, normalizedRecipientEmail)

  // 3. Enqueue (process-email-queue actually sends)
  const queuePayload = {
    to: normalizedRecipientEmail,
    from: `${effectiveFromName} <noreply@${FROM_DOMAIN}>`,
    sender_domain: SENDER_DOMAIN,
    subject,
    html,
    text,
    purpose: 'transactional',
    label: templateName,
    idempotency_key: idempotencyKey,
    message_id: idempotencyKey,
    queued_at: new Date().toISOString(),
    unsubscribe_token: unsubscribeToken,
    reply_to: effectiveReplyTo,
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
    recipient_email: normalizedRecipientEmail,
    status: 'pending',
  })

  return json({ status: 'queued', messageId: idempotencyKey })
})
