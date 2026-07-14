import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Elluminate'
const BRAND = '#1F7CFF'

interface ContactInquiryProps {
  name?: string
  email?: string
  phone?: string
  eventCategory?: string
  organisation?: string
  organisationType?: string
  expectedAttendees?: string
  expectedDate?: string
  additionalCustomisation?: string
  gameCustomisation?: string
  addOnServices?: string
  additionalDetails?: string
  lead_id?: string
  brand?: string
  service?: string
  formName?: string
  // attribution
  gclid?: string
  gbraid?: string
  wbraid?: string
  gad_source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer?: string
  landing_page?: string
  submission_page?: string
  attribution_captured_at?: string
  user_agent?: string
  submitted_at?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={row}>
    <strong style={rowLabel}>{label}:</strong> {value && value.trim() ? value : 'Not provided'}
  </Text>
)

const hostFromUrl = (url?: string) => {
  if (!url) return undefined
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

const sourceSummary = (p: ContactInquiryProps) => {
  if (p.gclid) return 'Google Ads (paid click)'
  if (p.utm_source) return `${p.utm_source}${p.utm_medium ? ` / ${p.utm_medium}` : ''}${p.utm_campaign ? ` - ${p.utm_campaign}` : ''}`
  const refHost = hostFromUrl(p.referrer)
  if (refHost) return `Referral - ${refHost}`
  return 'Direct / Organic'
}

const parseUA = (ua?: string) => {
  if (!ua) return undefined
  let device = 'Desktop'
  if (/iPhone/i.test(ua)) device = 'iPhone'
  else if (/iPad/i.test(ua)) device = 'iPad'
  else if (/Android/i.test(ua)) device = /Mobile/i.test(ua) ? 'Android phone' : 'Android tablet'
  else if (/Macintosh/i.test(ua)) device = 'Mac'
  else if (/Windows/i.test(ua)) device = 'Windows'

  let browser = 'Browser'
  if (/Edg\//i.test(ua)) browser = 'Edge'
  else if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) browser = 'Chrome'
  else if (/Firefox\//i.test(ua)) browser = 'Firefox'
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari'
  return `${device} / ${browser}`
}

const formatSGTime = (iso?: string) => {
  if (!iso) return undefined
  try {
    return new Date(iso).toLocaleString('en-SG', {
      timeZone: 'Asia/Singapore',
      dateStyle: 'medium',
      timeStyle: 'short',
    }) + ' SGT'
  } catch {
    return iso
  }
}

const ContactInquiryEmail = (props: ContactInquiryProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {props.name ?? 'a website visitor'} - {sourceSummary(props)}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New {SITE_NAME} Inquiry</Heading>
        <Text style={lead}>
          You've received a new contact form submission from elluminate.sg.
        </Text>

        <Section style={card}>
          <Heading as="h2" style={h2}>Contact</Heading>
          <Row label="Name" value={props.name} />
          <Row label="Email" value={props.email} />
          <Row label="Phone" value={props.phone} />
          <Row label="Organisation" value={props.organisation} />
          <Row label="Organisation Type" value={props.organisationType} />
        </Section>

        <Section style={card}>
          <Heading as="h2" style={h2}>Event</Heading>
          <Row label="Category" value={props.eventCategory} />
          <Row label="Expected Date" value={props.expectedDate} />
          <Row label="Expected Attendees" value={props.expectedAttendees} />
          <Row label="Customisation" value={props.additionalCustomisation} />
          <Row label="Game Style" value={props.gameCustomisation} />
          <Row label="Add-ons" value={props.addOnServices} />
          {props.additionalDetails ? (
            <>
              <Text style={rowLabel}>Additional Details:</Text>
              <Text style={detailBlock}>{props.additionalDetails}</Text>
            </>
          ) : null}
        </Section>

        <Section style={attribCard}>
          <Heading as="h2" style={h2}>Marketing Attribution</Heading>
          <Text style={sourcePill}>Source: {sourceSummary(props)}</Text>
          <Row label="Lead / Submission ID" value={props.lead_id} />
          <Row label="Brand" value={props.brand} />
          <Row label="Service" value={props.service} />
          <Row label="Form" value={props.formName} />
          <Row label="Google Click ID" value={props.gclid} />
          <Row label="GBRAID" value={props.gbraid} />
          <Row label="WBRAID" value={props.wbraid} />
          <Row label="GAD Source" value={props.gad_source} />
          <Row label="UTM Source" value={props.utm_source} />
          <Row label="UTM Medium" value={props.utm_medium} />
          <Row label="UTM Campaign" value={props.utm_campaign} />
          <Row label="UTM Term" value={props.utm_term} />
          <Row label="UTM Content" value={props.utm_content} />
          <Row label="Referrer" value={props.referrer} />
          <Row label="Landing Page" value={props.landing_page} />
          <Row label="Submitted From" value={props.submission_page} />
          <Row label="Device / Browser" value={parseUA(props.user_agent)} />
          <Row label="Attribution Captured At" value={formatSGTime(props.attribution_captured_at)} />
          <Row label="Submitted At" value={formatSGTime(props.submitted_at)} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          Reply directly to this email to contact {props.name ?? 'the lead'} at {props.email ?? ''}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactInquiryEmail,
  subject: (data: Pick<ContactInquiryProps, 'name' | 'organisation'>) =>
    `New Inquiry - ${data.name ?? 'Website Lead'}${data.organisation ? ` (${data.organisation})` : ''}`,
  displayName: 'Contact form inquiry',
  previewData: {
    name: 'Jane Tan',
    email: 'jane@example.com',
    phone: '+65 9123 4567',
    eventCategory: 'Physical Team Building',
    organisation: 'Acme Pte Ltd',
    organisationType: 'Corporate / MNC',
    expectedAttendees: '50-100',
    expectedDate: 'June 12, 2026',
    additionalDetails: 'Looking for a half-day Amazing Race in Sentosa.',
    lead_id: '00000000-0000-4000-8000-000000000000',
    brand: 'elluminate',
    service: 'corporate_physical_team_building',
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'team-building-sg',
    gclid: 'Cj0KCQiA...',
    gbraid: 'test-gbraid',
    wbraid: 'test-wbraid',
    gad_source: '1',
    user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Safari/604.1',
    attribution_captured_at: new Date().toISOString(),
    submitted_at: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '620px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 700, color: BRAND, margin: '0 0 8px' }
const h2 = { fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }
const lead = { fontSize: '14px', color: '#475569', margin: '0 0 24px' }
const card = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px 20px', margin: '0 0 16px' }
const attribCard = { ...card, backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }
const sourcePill = { display: 'inline-block', backgroundColor: BRAND, color: '#ffffff', fontSize: '13px', fontWeight: 700 as const, padding: '6px 12px', borderRadius: '999px', margin: '0 0 12px' }
const row = { fontSize: '14px', color: '#0f172a', lineHeight: 1.55, margin: '0 0 6px' }
const rowLabel = { color: '#475569', fontWeight: 600 as const }
const detailBlock = { fontSize: '14px', color: '#0f172a', lineHeight: 1.55, margin: '4px 0 0', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e2e8f0', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: 0 }
