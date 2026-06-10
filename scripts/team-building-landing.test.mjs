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

test("team building route is declared before generic service route", () => {
  const hubRouteIndex = app.indexOf('path="/services/team-building"');
  const genericRouteIndex = app.indexOf('path="/services/:slug"');

  assert.notEqual(hubRouteIndex, -1, "missing /services/team-building route");
  assert.notEqual(genericRouteIndex, -1, "missing generic service route");
  assert.ok(hubRouteIndex < genericRouteIndex, "team building route must be declared before /services/:slug");
});

test("V5 page has one H1, quote-brief message match, and updated SEO", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(page, /Team building your team will actually rave about on Monday\./);
  assert.match(page, /actually rave about/);
  assert.match(page, /Get My Free Quote/);
  assert.match(page, /Send Me 3 Options \+ Prices/);
  assert.match(page, /Team Building Singapore - 3 Matched Options & Prices \| Elluminate/);
  assert.match(
    page,
    /Skip the 50-activity catalogue\. Tell us your headcount, date and venue, then request 3 best-fit team building options with prices from Elluminate\./,
  );
  assert.match(prerenderSeo, /Team Building Singapore - 3 Matched Options & Prices \| Elluminate/);
});

test("quote brief form writes to the existing contact submission and email path", () => {
  assert.match(page, /id="quote"/);
  assert.match(page, /name="name"/);
  assert.match(page, /name="email"/);
  assert.match(page, /name="pax"/);
  assert.match(page, /name="timing"/);
  assert.match(page, /name="venue"/);
  assert.match(page, /name="objective"/);
  assert.match(page, /privacyConsent/);
  assert.match(page, /honeypot/);
  assert.match(page, /team_building_quote_brief/);
  assert.match(page, /supabase\.from\("contact_submissions"\)\.insert/);
  assert.match(page, /send-transactional-email/);
  assert.match(page, /contact-inquiry/);
  assert.match(page, /event_category: "Physical Team Building"/);
  assert.match(page, /additional_details: buildBriefDetails/);
});

test("landing CTAs and filter controls match the V5 conversion path", () => {
  assert.match(page, /Activities/);
  assert.match(page, /How It Works/);
  assert.match(page, /Pricing/);
  assert.match(page, /Reviews/);
  assert.match(page, /FAQ/);
  assert.match(page, /href="#quote"/);
  assert.match(page, /sticky bottom-0/);
  assert.match(page, /whatsappUrl/);
  assert.match(page, /activityFilter/);
  assert.match(page, /All/);
  assert.match(page, /Outdoor/);
  assert.match(page, /Indoor/);
  assert.match(page, /High energy/);
  assert.match(page, /Low exertion/);
  assert.match(page, /Virtual/);
  assert.match(page, /Check fit/);
});

test("page includes required V5 sections and structured data", () => {
  const requiredCopy = [
    "FOR HR & ADMIN PLANNERS",
    "How It Works",
    "MOST-BOOKED FORMATS",
    "The catalogue way vs. the Elluminate way",
    "A Friday afternoon, handled end to end",
    "Companies & MNCs",
    "Government & Statutory Boards",
    "Schools & Institutions",
    "Facilitators who can read a room",
    "Real events, real laughter",
    "Know the ballpark before you enquire",
    "Booked it. Boss-proof it.",
    "Your team's best afternoon this year starts with a 60-second brief.",
  ];

  for (const copy of requiredCopy) {
    assert.match(page, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /<FAQSchema faqs=\{faqs\}/);
  assert.match(page, /<OrganizationSchema type="LocalBusiness"/);
  assert.match(sitemap, /https:\/\/elluminate\.sg\/services\/team-building/);
});

test("analytics events are diagnostics and submit success owns the conversion truth", () => {
  assert.match(page, /pushLandingEvent\("form_start"/);
  assert.match(page, /pushLandingEvent\("cta_click"/);
  assert.doesNotMatch(page, /pushLandingEvent\("form_submit"/);
  assert.doesNotMatch(page, /qualified_lead/);
});

test("team building nav parent still links directly to landing page", () => {
  assert.match(navbar, /(?:to|parentPath)="\/services\/team-building"/);
  assert.doesNotMatch(navbar, /Team Building Overview/);
});

test("V5 landing page avoids placeholders, leaked internal copy, and hard response promises", () => {
  const checked = normalize([page, thankYou].join("\n")).toLowerCase();
  const banned = [
    "◆",
    "planning confidence",
    "until owner-approved",
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
  ];

  for (const term of banned) {
    assert.equal(checked.includes(term), false, `Unexpected term: ${term}`);
  }
});
