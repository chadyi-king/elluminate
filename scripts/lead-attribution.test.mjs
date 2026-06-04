import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const attribution = readFileSync("src/lib/attribution.ts", "utf8");
const modal = readFileSync("src/components/ContactModal.tsx", "utf8");
const thankYou = readFileSync("src/pages/ThankYouPage.tsx", "utf8");
const emailTemplate = readFileSync(
  "supabase/functions/_shared/transactional-email-templates/contact-inquiry.tsx",
  "utf8",
);
const supabaseTypes = readFileSync("src/integrations/supabase/types.ts", "utf8");

test("attribution capture includes Google Ads and UTM fields", () => {
  for (const key of [
    "gclid",
    "gbraid",
    "wbraid",
    "gad_source",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ]) {
    assert.match(attribution, new RegExp(`"${key}"`), `missing tracked key ${key}`);
    assert.match(attribution, new RegExp(`${key}\\?: string`), `missing Attribution field ${key}`);
  }

  assert.match(attribution, /COOKIE_DAYS = 90/);
  assert.match(attribution, /captured_at\?: string/);
});

test("contact submission persists complete lead attribution fields", () => {
  for (const field of [
    "lead_id",
    "brand",
    "service",
    "gbraid",
    "wbraid",
    "gad_source",
    "gclid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "referrer",
    "landing_page",
    "submission_page",
    "attribution_captured_at",
  ]) {
    assert.match(modal, new RegExp(`${field}:`), `insert payload missing ${field}`);
    assert.match(supabaseTypes, new RegExp(`${field}: string \\| null`), `types missing ${field}`);
  }

  assert.match(modal, /const FORM_NAME = "plan_my_event"/);
  assert.match(modal, /const BRAND = "elluminate"/);
  assert.match(modal, /const SERVICE = "corporate_physical_team_building"/);
  assert.match(modal, /form_name:\s*FORM_NAME/);
  assert.match(modal, /brand:\s*BRAND/);
  assert.match(modal, /service:\s*SERVICE/);
});

test("generate_lead is emitted once and only after Supabase insert succeeds", () => {
  assert.equal((modal.match(/"generate_lead"/g) ?? []).length, 1);
  assert.equal((thankYou.match(/generate_lead/g) ?? []).length, 0);

  const insertIndex = modal.indexOf('supabase.from("contact_submissions").insert');
  const errorGuardIndex = modal.indexOf("if (error) throw error");
  const leadEventIndex = modal.indexOf('"generate_lead"');

  assert.notEqual(insertIndex, -1, "missing Supabase insert");
  assert.notEqual(errorGuardIndex, -1, "missing insert error guard");
  assert.notEqual(leadEventIndex, -1, "missing generate_lead event");
  assert.ok(insertIndex < errorGuardIndex, "insert should happen before error guard");
  assert.ok(errorGuardIndex < leadEventIndex, "conversion should happen only after insert success");

  assert.doesNotMatch(modal, /event:\s*"generate_lead"/, "dataLayer must not push a duplicate generate_lead");
  assert.match(modal, /event:\s*"elluminate_lead_submitted"/, "missing diagnostic dataLayer event");
});

test("lead conversion payload includes attribution and dedupe identifiers", () => {
  for (const field of [
    "lead_id",
    "event_id",
    "form_name",
    "brand",
    "service",
    "value",
    "currency",
    "gclid",
    "gbraid",
    "wbraid",
    "gad_source",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "submission_page",
  ]) {
    assert.match(modal, new RegExp(`${field}:`), `lead payload missing ${field}`);
  }
});

test("internal email exposes submission ID and attribution fields", () => {
  for (const field of [
    "lead_id",
    "Google Click ID",
    "gbraid",
    "wbraid",
    "gad_source",
    "UTM Source",
    "UTM Medium",
    "UTM Campaign",
    "UTM Term",
    "UTM Content",
    "Landing Page",
    "Submitted From",
    "Referrer",
    "Brand",
    "Service",
  ]) {
    assert.match(emailTemplate, new RegExp(field), `email template missing ${field}`);
  }
});
