import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => (existsSync(path) ? readFileSync(path, "utf8") : "");

const indexHtml = read("index.html");
const contactModal = read("src/components/ContactModal.tsx");
const googleTag = read("src/lib/googleTag.ts");
const leadSubmission = read("src/lib/leadSubmission.ts");
const main = read("src/main.tsx");
const tracking = read("src/lib/tracking.ts");
const trackingConfig = read("src/lib/trackingConfig.ts");
const attribution = read("src/lib/attribution.ts");
const portfolioPage = read("src/pages/PortfolioPage.tsx");
const teamBuilding = read("src/pages/TeamBuildingHubPage.tsx");
const thankYou = read("src/pages/ThankYouPage.tsx");

test("site bootstraps the environment-driven Google tag and correct Ads destination", () => {
  assert.match(main, /bootstrapGoogleTags\(\)/);
  assert.match(trackingConfig, /VITE_GA4_MEASUREMENT_ID/);
  assert.match(trackingConfig, /G-R4S0RLKQ67/);
  assert.match(trackingConfig, /AW-704277198\/24mXCJ2Q_s8cEM7V6c8C/);
  assert.doesNotMatch(trackingConfig, /AW-18084927892/);
  assert.match(googleTag, /googletagmanager\.com\/gtag\/js\?id=/);
  assert.match(googleTag, /getGoogleAdsConversionId/);
  assert.match(googleTag, /gtag\("config", googleAdsConversionId\)/);
  assert.doesNotMatch(indexHtml, /gtag\('config', 'G-R4S0RLKQ67'\)/);
});

test("lead conversion helper sends GA4 and Ads once with one transaction ID", () => {
  assert.match(tracking, /export function trackLeadConversion/);
  assert.match(tracking, /gtag\("event", "generate_lead"/);
  assert.match(tracking, /gtag\("event", "conversion"/);
  assert.match(tracking, /send_to: googleAdsSendTo/);
  assert.match(tracking, /transaction_id: lead_id/);
  assert.equal((tracking.match(/gtag\("event", "generate_lead"/g) ?? []).length, 1);
  assert.equal((tracking.match(/gtag\("event", "conversion"/g) ?? []).length, 1);
  assert.doesNotMatch(tracking, /DEFAULT_VALUE|value:\s*150/);
});

test("both enquiry surfaces use the same shared post-insert flow", () => {
  assert.match(contactModal, /submitLead\(\{/);
  assert.match(contactModal, /formName: "plan_my_event"/);
  assert.match(teamBuilding, /submitLead\(\{/);
  assert.match(teamBuilding, /formName: "team_building_quote_brief"/);
  assert.match(leadSubmission, /runLeadSubmissionFlow/);
  assert.match(leadSubmission, /supabase\.from\("contact_submissions"\)\.insert/);
  assert.match(leadSubmission, /contact-inquiry/);
  assert.match(leadSubmission, /contact-confirmation/);
  assert.match(leadSubmission, /idempotencyKey/);
});

test("shared submission payload preserves click and campaign attribution", () => {
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
    assert.match(leadSubmission, new RegExp(key));
    assert.match(tracking, new RegExp(key));
  }
});

test("portfolio CTA uses the shared contact modal conversion path", () => {
  assert.match(portfolioPage, /useContactModal/);
  assert.match(portfolioPage, /onOpenContact=\{openContactModal\}/);
  assert.doesNotMatch(portfolioPage, /components\/portfolio\/ContactModal/);
});

test("thank-you page stays diagnostic-only", () => {
  assert.match(thankYou, /thank_you_view/);
  assert.doesNotMatch(thankYou, /generate_lead|trackLeadConversion|"conversion"/);
});
