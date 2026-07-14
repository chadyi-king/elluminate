import assert from "node:assert/strict";
import test from "node:test";
import { runLeadSubmissionFlow } from "../src/lib/leadSubmissionFlow.js";

const input = {
  submissionId: "lead-123",
  payload: { id: "lead-123", email: "planner@example.com" },
  tracking: { lead_id: "lead-123", form_name: "team_building_quote_brief" },
};

test("successful save tracks once and queues both emails with the same lead ID", async () => {
  const events = [];
  const mockGtag = [];

  const result = await runLeadSubmissionFlow(input, {
    insert: async (payload) => {
      events.push(["insert", payload.id]);
      return { error: null };
    },
    track: (payload) => {
      events.push(["track", payload.lead_id]);
      mockGtag.push(["generate_lead", payload.lead_id], ["conversion", payload.lead_id]);
    },
    sendEmail: async (template, leadId) => {
      events.push([template, leadId]);
      return { error: null };
    },
  });

  assert.deepEqual(events, [
    ["insert", "lead-123"],
    ["track", "lead-123"],
    ["contact-inquiry", "lead-123"],
    ["contact-confirmation", "lead-123"],
  ]);
  assert.deepEqual(mockGtag, [["generate_lead", "lead-123"], ["conversion", "lead-123"]]);
  assert.deepEqual(result, { submissionId: "lead-123", emailQueueFailures: [] });
});

test("failed save never tracks or queues email", async () => {
  let tracked = false;
  let emailCalls = 0;

  await assert.rejects(
    runLeadSubmissionFlow(input, {
      insert: async () => ({ error: new Error("insert failed") }),
      track: () => { tracked = true; },
      sendEmail: async () => { emailCalls += 1; return { error: null }; },
    }),
    /insert failed/,
  );

  assert.equal(tracked, false);
  assert.equal(emailCalls, 0);
});

test("email queue failure is reported without losing the saved lead", async () => {
  const reported = [];

  const result = await runLeadSubmissionFlow(input, {
    insert: async () => ({ error: null }),
    track: () => undefined,
    sendEmail: async (template) => template === "contact-confirmation"
      ? { error: new Error("queue unavailable") }
      : { error: null },
    onEmailFailure: (leadId, templates) => reported.push([leadId, templates]),
  });

  assert.deepEqual(result.emailQueueFailures, ["contact-confirmation"]);
  assert.deepEqual(reported, [["lead-123", ["contact-confirmation"]]]);
});
