import * as React from "npm:react@18.3.1";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "npm:@react-email/components@0.0.22";
import type { TemplateEntry } from "./registry.ts";

const SITE_NAME = "Elluminate";
const BRAND = "#1F7CFF";

interface ContactConfirmationProps {
  name?: string;
  eventCategory?: string;
  expectedAttendees?: string;
  expectedDate?: string;
}

const ContactConfirmationEmail = ({ name, eventCategory, expectedAttendees, expectedDate }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME}. We have received your enquiry.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{name ? `Thanks, ${name}!` : "Thanks for reaching out!"}</Heading>
        <Text style={lead}>
          We've received your message. Our team will review your event details and follow up with helpful next steps
          and ideas for your event.
        </Text>

        <Section style={card}>
          <Text style={cardText}>Here is the event information we received:</Text>
          {eventCategory ? <Text style={summaryLine}><strong>Event:</strong> {eventCategory}</Text> : null}
          {expectedAttendees ? <Text style={summaryLine}><strong>Group size:</strong> {expectedAttendees}</Text> : null}
          {expectedDate ? <Text style={summaryLine}><strong>Date or timing:</strong> {expectedDate}</Text> : null}
          <Button style={button} href="https://elluminate.sg/">
            See Our Recent Events
          </Button>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          You can reply to this email or write to{" "}
          <a href="mailto:info@elluminate.sg" style={link}>
            info@elluminate.sg
          </a>
          .
        </Text>
        <Text style={signoff}>- The {SITE_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: ContactConfirmationEmail,
  subject: "We received your enquiry - Elluminate",
  displayName: "Contact form auto-reply",
  previewData: {
    name: "Jane",
    eventCategory: "Physical Team Building",
    expectedAttendees: "60",
    expectedDate: "18 September 2026",
  },
} satisfies TemplateEntry;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
};
const container = { padding: "40px 28px", maxWidth: "560px", margin: "0 auto" };
const h1 = { fontSize: "26px", fontWeight: 700, color: BRAND, margin: "0 0 12px" };
const lead = { fontSize: "15px", color: "#334155", lineHeight: 1.6, margin: "0 0 24px" };
const card = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  padding: "20px",
  margin: "0 0 24px",
  textAlign: "center" as const,
};
const cardText = { fontSize: "14px", color: "#475569", lineHeight: 1.55, margin: "0 0 16px" };
const summaryLine = { fontSize: "14px", color: "#334155", lineHeight: 1.5, margin: "0 0 8px", textAlign: "left" as const };
const button = {
  backgroundColor: BRAND,
  color: "#ffffff",
  padding: "12px 22px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600 as const,
  textDecoration: "none",
  display: "inline-block",
};
const hr = { borderColor: "#e2e8f0", margin: "24px 0" };
const footer = { fontSize: "13px", color: "#64748b", lineHeight: 1.55, margin: "0 0 8px" };
const signoff = { fontSize: "13px", color: "#475569", margin: "12px 0 0" };
const link = { color: BRAND, textDecoration: "underline" };
