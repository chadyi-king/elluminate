import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const edgeFunction = readFileSync("supabase/functions/send-transactional-email/index.ts", "utf8");
const confirmation = readFileSync("supabase/functions/_shared/transactional-email-templates/contact-confirmation.tsx", "utf8");
const inquiry = readFileSync("supabase/functions/_shared/transactional-email-templates/contact-inquiry.tsx", "utf8");

test("public contact emails derive recipients and reply-to addresses server-side", () => {
  assert.match(edgeFunction, /DEFAULT_CONTACT_NOTIFICATION_EMAIL = 'info@elluminate\.sg'/);
  assert.match(edgeFunction, /templateName === 'contact-confirmation'/);
  assert.match(edgeFunction, /recipientEmail: leadEmail/);
  assert.match(edgeFunction, /replyTo: contactNotificationEmail/);
  assert.match(edgeFunction, /recipientEmail: contactNotificationEmail/);
  assert.match(edgeFunction, /replyTo: leadEmail/);
  assert.match(edgeFunction, /client-supplied[\s\S]*ignored to prevent forged inquiries and email relay abuse/i);
});

test("both messages are idempotent and logged with the same submission-derived key", () => {
  assert.match(edgeFunction, /idempotency_key: idempotencyKey/);
  assert.match(edgeFunction, /message_id: idempotencyKey/);
  assert.match(edgeFunction, /from\('email_send_log'\)/);
  assert.match(edgeFunction, /submissionId/);
});

test("customer confirmation summarises the enquiry without a hard response-time promise", () => {
  assert.match(confirmation, /Group size:/);
  assert.match(confirmation, /Date or timing:/);
  assert.match(confirmation, /info@elluminate\.sg/);
  assert.doesNotMatch(confirmation, /within (one|1) business day|within 24|24 hours|guarantee/i);
  assert.doesNotMatch(inquiry, /within (one|1) business day|within 24|24 hours|guarantee/i);
});
