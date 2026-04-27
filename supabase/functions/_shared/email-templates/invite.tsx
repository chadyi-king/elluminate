/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface InviteEmailProps {
  siteName: string
  siteUrl: string
  confirmationUrl: string
}

export const InviteEmail = ({ siteUrl, confirmationUrl }: InviteEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You've been invited to join Elluminate</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar} />
        <Heading style={h1}>You've been invited</Heading>
        <Text style={text}>
          You've been invited to join{' '}
          <Link href={siteUrl} style={link}>
            <strong>Elluminate</strong>
          </Link>
          . Click the button below to accept the invitation and create your
          account.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Accept Invitation
        </Button>
        <Text style={footer}>
          If you weren't expecting this invitation, you can safely ignore this
          email.
        </Text>
        <Text style={signature}>— The Elluminate Team</Text>
      </Container>
    </Body>
  </Html>
)

export default InviteEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px' }
const brandBar = {
  height: '4px',
  width: '56px',
  backgroundColor: '#1F7CFF',
  borderRadius: '4px',
  margin: '0 0 24px',
}
const h1 = {
  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#141A26',
  margin: '0 0 20px',
}
const text = {
  fontSize: '15px',
  color: '#676E7A',
  lineHeight: '1.6',
  margin: '0 0 20px',
}
const link = { color: '#1F7CFF', textDecoration: 'underline' }
const button = {
  backgroundColor: '#1F7CFF',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: '600' as const,
  borderRadius: '12px',
  padding: '14px 24px',
  textDecoration: 'none',
  display: 'inline-block',
}
const footer = { fontSize: '13px', color: '#999999', margin: '32px 0 8px' }
const signature = { fontSize: '13px', color: '#676E7A', margin: '0' }
