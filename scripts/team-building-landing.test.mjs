import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");
const page = read("src/pages/TeamBuildingHubPage.tsx");
const app = read("src/App.tsx");
const navbar = read("src/components/Navbar.tsx");
const tracking = read("src/lib/tracking.ts");
const trackingConfig = read("src/lib/trackingConfig.ts");
const structuredData = read("src/components/StructuredData.tsx");
const prerenderSeo = read("scripts/prerender-seo.mjs");
const sitemap = read("public/sitemap.xml");

test("dedicated route uses the shared site navigation", () => {
  const hubRoute = app.indexOf('path="/services/team-building"');
  const genericRoute = app.indexOf('path="/services/:slug"');
  assert.ok(hubRoute > -1 && genericRoute > hubRoute);
  assert.match(page, /<Navbar \/>/);
  assert.match(page, /<Footer \/>/);
  assert.doesNotMatch(page, /<header\b/);
  assert.match(navbar, /(?:to|parentPath)="\/services\/team-building"/);
});

test("page has one message-matched H1 and a single enquiry action", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(page, /Corporate Team Building in Singapore, Planned Around Your Team/);
  assert.match(page, /Plan My Team Building Event/);
  assert.match(page, /Tell Us About Your Team Event/);
  assert.match(page, /Send My Team Building Enquiry/);
  assert.doesNotMatch(page, /Free Planning Session|The Classic|The Takeover|The Signature|three matched options/i);
});

test("short event brief keeps only the agreed required fields", () => {
  for (const name of ["name", "email", "pax", "timing", "phone", "venue", "objective"]) {
    assert.match(page, new RegExp(`name="${name}"`));
  }
  assert.match(page, /!quoteForm\.name\.trim\(\)/);
  assert.match(page, /!quoteForm\.email\.trim\(\)/);
  assert.match(page, /!quoteForm\.pax\.trim\(\)/);
  assert.match(page, /!quoteForm\.timing\.trim\(\)/);
  assert.doesNotMatch(page, /!quoteForm\.phone\.trim\(\)/);
  assert.doesNotMatch(page, /!quoteForm\.venue\.trim\(\)/);
  assert.doesNotMatch(page, /!quoteForm\.objective\.trim\(\)/);
  assert.match(page, /privacyConsent/);
  assert.match(page, /honeypot/);
});

test("form saves, queues both emails, then fires conversion", () => {
  const insert = page.indexOf('supabase.from("contact_submissions").insert');
  const inquiry = page.indexOf('templateName: "contact-inquiry"');
  const confirmation = page.indexOf('templateName: "contact-confirmation"');
  const conversion = page.indexOf("trackLeadConversion({");
  assert.ok(insert > -1 && inquiry > insert && confirmation > inquiry && conversion > confirmation);
  assert.match(page, /form_name: "team_building_quote_brief"/);
  assert.match(page, /Team Building Event Planning Enquiry/);
  assert.match(page, /event_category: "Physical Team Building"/);
});

test("conversion points to the dedicated Ads action without invented value", () => {
  assert.match(trackingConfig, /AW-704277198\/24mXCJ2Q_s8cEM7V6c8C/);
  assert.doesNotMatch(trackingConfig, /AW-18084927892/);
  assert.match(tracking, /transaction_id: lead_id/);
  assert.match(tracking, /gtag\("event", "generate_lead"/);
  assert.match(tracking, /gtag\("event", "conversion"/);
  assert.doesNotMatch(tracking, /DEFAULT_VALUE|value:\s*150/);
});

test("landing narrative covers planning, activities, logistics, proof and FAQs", () => {
  for (const copy of [
    "Generic team building vs. team building planned properly",
    "One brief. One sensible planning path.",
    "Real teams. Real movement. Real event energy.",
    "Physical first. Virtual when the team needs it.",
    "What shapes the event plan and quote",
    "What teams have said",
    "Corporate team-building FAQ",
  ]) assert.ok(page.includes(copy), `Missing page copy: ${copy}`);
  assert.match(page, /\/videos\/elluminate-showreel\.mp4/);
  assert.match(page, /<FAQSchema faqs=\{faqs\}/);
  assert.match(page, /<OrganizationSchema type="LocalBusiness"/);
  assert.match(sitemap, /https:\/\/elluminate\.sg\/services\/team-building/);
});

test("scope and claim safety are explicit", () => {
  assert.match(page, /Elluminate and Team Elevate are operated by EXSTATIC PTE LTD/);
  assert.match(page, /WhatsApp Us/);
  assert.match(page, /wa\.me\/6588352482/);
  for (const banned of [
    /laser tag/i,
    /archery tag/i,
    /gelblitz/i,
    /nerfwar/i,
    /birthday/i,
    /guarantee(?:d)?/i,
    /within 24 hours|24h/i,
    /bg-\[#f4730c\]/i,
    /existing source material/i,
  ]) assert.doesNotMatch(page, banned);
});

test("SEO and structured data use the safe public wording", () => {
  assert.match(page, /Corporate Team Building Singapore \| Elluminate/);
  assert.match(prerenderSeo, /Corporate Team Building Singapore \| Elluminate/);
  assert.match(prerenderSeo, /Plan corporate team building in Singapore around your team, objective, venue and timing/);
  assert.doesNotMatch(structuredData, /aggregateRating/);
});
