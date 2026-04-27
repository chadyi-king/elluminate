import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Elluminate'
const BRAND = '#1F7CFF'

interface ContactConfirmationProps {
  name?: string
}

const ContactConfirmationEmail = ({ name }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME} — we'll be in touch shortly.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thanks, ${name}!` : 'Thanks for reaching out!'}
        </Heading>
        <Text style={lead}>
          We've received your message and our team will be in touch within{' '}
          <strong>1 business day</strong> with next steps and ideas tailored to your event.
        </Text>

        <Section style={card}>
          <Text style={cardText}>
            In the meantime, feel free to explore some of our recent work and the experiences
            we've created for teams like yours.
          </Text>
          <Button style={button} href="https://elluminate.sg/portfolio">
            See Our Recent Events
          </Button>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          Need to reach us sooner? Reply to this email or write to{' '}
          <a href="mailto:info@elluminate.sg" style={link}>info@elluminate.sg</a>.
        </Text>
        <Text style={signoff}>— The {SITE_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We received your inquiry — Elluminate',
  displayName: 'Contact form auto-reply',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }
const container = { padding: '40px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '26px', fontWeight: 700, color: BRAND, margin: '0 0 12px' }
const lead = { fontSize: '15px', color: '#334155', lineHeight: 1.6, margin: '0 0 24px' }
const card = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', margin: '0 0 24px', textAlign: 'center' as const }
const cardText = { fontSize: '14px', color: '#475569', lineHeight: 1.55, margin: '0 0 16px' }
const button = { backgroundColor: BRAND, color: '#ffffff', padding: '12px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 600 as const, textDecoration: 'none', display: 'inline-block' }
const hr = { borderColor: '#e2e8f0', margin: '24px 0' }
const footer = { fontSize: '13px', color: '#64748b', lineHeight: 1.55, margin: '0 0 8px' }
const signoff = { fontSize: '13px', color: '#475569', margin: '12px 0 0' }
const link = { color: BRAND, textDecoration: 'underline' }
