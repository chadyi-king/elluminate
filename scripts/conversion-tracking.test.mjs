import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => (existsSync(path) ? readFileSync(path, "utf8") : "");

const indexHtml = read("index.html");
const contactModal = read("src/components/ContactModal.tsx");
const googleTag = read("src/lib/googleTag.ts");
const main = read("src/main.tsx");
const tracking = read("src/lib/tracking.ts");
const trackingConfig = read("src/lib/trackingConfig.ts");
const attribution = read("src/lib/attribution.ts");
const teamBuilding = read("src/pages/TeamBuildingHubPage.tsx");
const thankYou = read("src/pages/ThankYouPage.tsx");

test("site bootstraps a real environment-driven Google tag", () => {
  assert.match(main, /bootstrapGoogleTags\(\)/);
  assert.match(trackingConfig, /VITE_GA4_MEASUREMENT_ID/);
  assert.match(trackingConfig, /G-R4S0RLKQ67/);
  assert.match(trackingConfig, /AW-18084927892\/JP7bCOTktrscEJSzyK9D/);
  assert.match(googleTag, /googletagmanager\.com\/gtag\/js\?id=/);
  assert.match(trackingConfig, /VITE_GTM_CONTAINER_ID/);
  assert.match(googleTag, /googletagmanager\.com\/gtm\.js\?id=/);
  assert.match(googleTag, /getGoogleAdsConversionId/);
  assert.match(googleTag, /gtag\("config", googleAdsConversionId\)/);
  assert.doesNotMatch(indexHtml, /gtag\('config', 'G-R4S0RLKQ67'\)/);
});

test("lead conversion helper fires GA4, optional Google Ads, and diagnostics", () => {
  assert.match(tracking, /export function trackLeadConversion/);
  assert.match(trackingConfig, /VITE_GOOGLE_ADS_SEND_TO/);
  assert.match(tracking, /getGoogleAdsSendTo/);
  assert.match(tracking, /gtag\("event", "generate_lead"/);
  assert.match(tracking, /gtag\("event", "conversion"/);
  assert.match(tracking, /send_to: googleAdsSendTo/);
  assert.match(tracking, /transaction_id: lead_id/);
  assert.match(tracking, /elluminate_lead_submitted/);
  assert.match(tracking, /elluminate_ads_conversion_not_configured/);
  assert.doesNotMatch(tracking, /dataLayer\.push\(\{\s*event: "generate_lead"/);
});

test("shared contact modal tracks only after a successful Supabase insert", () => {
  assert.match(contactModal, /trackLeadConversion/);
  assert.match(contactModal, /form_name: "plan_my_event"/);
  assert.match(contactModal, /lead_id: submissionId/);
  assert.match(contactModal, /brand: "elluminate"/);
  assert.match(contactModal, /service: "corporate_physical_team_building"/);

  const insertIndex = contactModal.indexOf('supabase.from("contact_submissions").insert');
  const trackIndex = contactModal.indexOf("trackLeadConversion({");
  const validationIndex = contactModal.indexOf("if (!formData.privacyConsent)");
  const honeypotIndex = contactModal.indexOf("if (honeypotRef.current?.value)");

  assert.ok(insertIndex > -1, "missing Supabase insert");
  assert.ok(trackIndex > insertIndex, "conversion tracking must run after the insert call");
  assert.ok(validationIndex > -1 && validationIndex < trackIndex, "validation must happen before conversion tracking");
  assert.ok(honeypotIndex > -1 && honeypotIndex < trackIndex, "honeypot branch must happen before conversion tracking");
});

test("team building form uses the same post-insert conversion path", () => {
  assert.match(teamBuilding, /trackLeadConversion/);
  assert.match(teamBuilding, /form_name: "plan_my_event"/);
  assert.match(teamBuilding, /lead_id: submissionId/);
  assert.match(teamBuilding, /brand: "elluminate"/);
  assert.match(teamBuilding, /service: "corporate_physical_team_building"/);

  const insertIndex = teamBuilding.indexOf('supabase.from("contact_submissions").insert');
  const trackIndex = teamBuilding.indexOf("trackLeadConversion({");
  const validationIndex = teamBuilding.indexOf("!quoteForm.privacyConsent");
  const honeypotIndex = teamBuilding.indexOf("if (honeypot)");

  assert.ok(insertIndex > -1, "missing Supabase insert");
  assert.ok(trackIndex > insertIndex, "conversion tracking must run after the insert call");
  assert.ok(validationIndex > -1 && validationIndex < trackIndex, "validation must happen before conversion tracking");
  assert.ok(honeypotIndex > -1 && honeypotIndex < trackIndex, "honeypot branch must happen before conversion tracking");
});

test("thank-you page stays diagnostic-only", () => {
  assert.match(thankYou, /thank_you_view/);
  assert.doesNotMatch(thankYou, /generate_lead/);
  assert.doesNotMatch(thankYou, /"conversion"/);
  assert.doesNotMatch(thankYou, /trackLeadConversion/);
});

test("attribution captures Google click IDs and UTM fields used by conversion payloads", () => {
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
    "referrer",
    "landing_page",
  ]) {
    assert.match(attribution, new RegExp(key));
    assert.match(tracking, new RegExp(key));
  }
});
