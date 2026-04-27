/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your Elluminate verification code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar} />
        <Heading style={h1}>Confirm reauthentication</Heading>
        <Text style={text}>Use the code below to confirm your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code will expire shortly. If you didn't request this, you can
          safely ignore this email.
        </Text>
        <Text style={signature}>— The Elluminate Team</Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

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
const codeStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '28px',
  fontWeight: 'bold' as const,
  color: '#1F7CFF',
  letterSpacing: '4px',
  margin: '0 0 30px',
}
const footer = { fontSize: '13px', color: '#999999', margin: '32px 0 8px' }
const signature = { fontSize: '13px', color: '#676E7A', margin: '0' }
