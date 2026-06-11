import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/pages/TeamBuildingHubPage.tsx", "utf8");
const app = readFileSync("src/App.tsx", "utf8");
const navbar = readFileSync("src/components/Navbar.tsx", "utf8");
const thankYou = readFileSync("src/pages/ThankYouPage.tsx", "utf8");
const prerenderSeo = readFileSync("scripts/prerender-seo.mjs", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");

const normalize = (value) => value.replace(/\s+/g, " ");
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test("team building route is declared before generic service route", () => {
  const hubRouteIndex = app.indexOf('path="/services/team-building"');
  const genericRouteIndex = app.indexOf('path="/services/:slug"');

  assert.notEqual(hubRouteIndex, -1, "missing /services/team-building route");
  assert.notEqual(genericRouteIndex, -1, "missing generic service route");
  assert.ok(hubRouteIndex < genericRouteIndex, "team building route must be declared before /services/:slug");
});

test("page uses the shared site navbar and not a page-specific header", () => {
  assert.match(page, /import \{ Navbar \} from "@\/components\/Navbar"/);
  assert.match(page, /<Navbar \/>/);
  assert.doesNotMatch(page, /<header\b/);
  assert.match(navbar, /(?:to|parentPath)="\/services\/team-building"/);
  assert.doesNotMatch(navbar, /Team Building Overview/);
});

test("V3 page has one H1, Free Planning Session offer, and route SEO", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(page, /Corporate team building in Singapore without babysitting another vendor\./);
  assert.match(page, /Start My Free Planning Session/);
  assert.match(page, /Tell Us About Your Team Event/);
  assert.match(page, /Send My Team Building Enquiry/);
  assert.match(page, /Free Planning Session Request/);
  assert.match(page, /Corporate Team Building Singapore \| Elluminate/);
  assert.match(prerenderSeo, /Corporate Team Building Singapore \| Elluminate/);
  assert.match(
    prerenderSeo,
    /Plan corporate team building in Singapore without babysitting another vendor\. Share your pax, date, venue and goal, then start a free planning session with Elluminate\./,
  );
});

test("event planning form writes to the existing contact submission and email path", () => {
  assert.match(page, /id="quote"/);
  assert.match(page, /name="name"/);
  assert.match(page, /name="email"/);
  assert.match(page, /name="pax"/);
  assert.match(page, /name="timing"/);
  assert.match(page, /name="venue"/);
  assert.match(page, /name="objective"/);
  assert.match(page, /preferredTier/);
  assert.match(page, /setPreferredTier/);
  assert.match(page, /privacyConsent/);
  assert.match(page, /honeypot/);
  assert.match(page, /team_building_quote_brief/);
  assert.match(page, /Team Building Event Planning Enquiry/);
  assert.match(page, /Free Planning Session Request/);
  assert.match(page, /Preferred planning level:/);
  assert.match(page, /supabase\.from\("contact_submissions"\)\.insert/);
  assert.match(page, /send-transactional-email/);
  assert.match(page, /contact-inquiry/);
  assert.match(page, /event_category: "Physical Team Building"/);
  assert.match(page, /additional_details: buildBriefDetails/);
});

test("V3 sections carry the packages and wow landing page narrative", () => {
  const requiredCopy = [
    "Selected organisations we have worked with",
    "You've been to that event",
    "Generic team building vs. team building planned properly",
    "Industry catalogue approach",
    "The Elluminate planning approach",
    "The Monday Test",
    "Will the silos actually mix?",
    "Will the arms-crossed crowd join in?",
    "Will there be a story on Monday?",
    "The Classic",
    "The Takeover",
    "The Signature",
    "Activity formats from $45/pax",
    "Activity pricing plus venue, food and transport quoted separately",
    "Custom quote",
    "These are the formats The Classic is built from",
    "Steal Our Run Sheet",
    "example run sheet",
    "Where Your Money Actually Goes",
    "We're Not For Everyone",
    "What teams have said",
    "Practical planning reassurance",
    "Plan the event before the activity becomes a problem.",
  ];

  for (const copy of requiredCopy) {
    assert.match(page, new RegExp(escapeRegExp(copy)));
  }

  assert.match(page, /<FAQSchema faqs=\{faqs\}/);
  assert.match(page, /<OrganizationSchema type="LocalBusiness"/);
  assert.match(sitemap, /https:\/\/elluminate\.sg\/services\/team-building/);
  assert.doesNotMatch(page, /teamMembers/);
  assert.doesNotMatch(page, /Facilitated by the Elluminate team/);
});

test("package CTAs target the quote form and record preferred tier", () => {
  assert.match(page, /handleTierCta/);
  assert.match(page, /handleTierCta\(tier\.tier/);
  assert.match(page, /href="#quote"/);
  assert.match(page, /preferredTier === tier\.tier/);
  assert.match(page, /Classic/);
  assert.match(page, /Takeover/);
  assert.match(page, /Signature/);
  assert.doesNotMatch(page, /\$XX/);
  assert.doesNotMatch(page, /most booked/i);
});

test("activity filters and CTAs support enquiry, not equipment demand", () => {
  assert.match(page, /activityFilter/);
  assert.match(page, /All/);
  assert.match(page, /Outdoor/);
  assert.match(page, /Indoor/);
  assert.match(page, /High energy/);
  assert.match(page, /Low exertion/);
  assert.match(page, /Virtual/);
  assert.match(page, /Ask if this fits my team/);
  assert.match(page, /Amazing Race/);
  assert.match(page, /Cultural Race/);
  assert.match(page, /CSI-Bones/);
  assert.match(page, /Minute To Win It/);
  assert.match(page, /Monopoly Dash/);
  assert.match(page, /Virtual Amazing Race/);
  assert.doesNotMatch(page, /getServicePrice/);
});

test("WhatsApp is visible and analytics events remain diagnostic only", () => {
  assert.match(page, /wa\.me\/6588352482/);
  assert.match(page, /WhatsApp Us/);
  assert.match(page, /WhatsApp Elluminate/);
  assert.match(page, /pushLandingEvent\("form_start"/);
  assert.match(page, /pushLandingEvent\("cta_click"/);
  assert.doesNotMatch(page, /pushLandingEvent\("form_submit"/);
  assert.doesNotMatch(page, /qualified_lead/);
});

test("V3 landing page avoids unsafe claims, placeholders, old mechanics, and orange CTA palette", () => {
  const checked = normalize([page, thankYou].join("\n")).toLowerCase();
  const banned = [
    "Ã¢â€”â€†",
    "◆",
    "$xx",
    "planning confidence",
    "until owner-approved",
    "existing elluminate",
    "source material",
    "for hr",
    "constraints",
    "3 matched",
    "50-activity",
    "send me 3 options",
    "get my free quote",
    "within 24 hours",
    "24h",
    "24-hour",
    "24 hour",
    "guarantee",
    "guaranteed",
    "within 1 business day",
    "#1",
    "best team building",
    "birthday",
    "rental",
    "real run sheet",
    "anonymised run sheet",
    "anonymized run sheet",
    "bg-[#f4730c]",
    "bg-[#c24e00]",
    "hover:bg-[#a63d00]",
    "text-[#ffc83d]",
    "bg-[#0a1b33]",
  ];

  for (const term of banned) {
    assert.equal(checked.includes(term), false, `Unexpected term: ${term}`);
  }
});
