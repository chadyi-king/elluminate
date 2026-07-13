import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (relativePath) => readFileSync(new URL(relativePath, import.meta.url), "utf8");

const handler = read("./index.ts");
const inquiryTemplate = read("../_shared/transactional-email-templates/contact-inquiry.tsx");
const confirmationTemplate = read("../_shared/transactional-email-templates/contact-confirmation.tsx");
const queueProcessor = read("../process-email-queue/index.ts");

test("public contact recipients and reply-to addresses are derived server-side", () => {
  assert.match(handler, /Deno\.env\.get\('CONTACT_NOTIFICATION_EMAIL'\)/);
  assert.match(handler, /DEFAULT_CONTACT_NOTIFICATION_EMAIL = 'info@elluminate\.sg'/);
  assert.doesNotMatch(handler, /info@exstatic\.one/);
  assert.match(handler, /recipientEmail: contactNotificationEmail/);
  assert.match(handler, /replyTo: leadEmail/);
  assert.match(handler, /replyTo: contactNotificationEmail/);
  assert.match(handler, /templateData are ignored to prevent forged inquiries and open-relay abuse/);
});

test("contact emails are ASCII-clean and do not promise a response deadline", () => {
  assert.match(inquiryTemplate, /^[\x00-\x7F]*$/);
  assert.match(confirmationTemplate, /^[\x00-\x7F]*$/);
  assert.doesNotMatch(confirmationTemplate, /within\s+(?:one|1|24)\s+(?:business\s+)?(?:day|days|hour|hours)/i);
  assert.doesNotMatch(confirmationTemplate, /24h|24-hour/i);
  assert.match(confirmationTemplate, /review your event details and follow up with helpful next steps/);
});

test("the transactional queue contract and pending log remain intact", () => {
  assert.match(handler, /queue_name: 'transactional_emails'/);
  assert.match(handler, /reply_to: effectiveReplyTo/);
  assert.match(queueProcessor, /reply_to: payload\.reply_to/);
  assert.match(handler, /status: 'pending'/);
  assert.match(handler, /status: 'queued'/);
});
