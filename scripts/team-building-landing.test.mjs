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

test("page uses the shared site navbar and not a page-specific header", () => {
  assert.match(page, /import \{ Navbar \} from "@\/components\/Navbar"/);
  assert.match(page, /<Navbar \/>/);
  assert.doesNotMatch(page, /<header\b/);
  assert.match(navbar, /(?:to|parentPath)="\/services\/team-building"/);
  assert.doesNotMatch(navbar, /Team Building Overview/);
});

test("V6.1 page has one H1, planning-led copy, and updated SEO", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(page, /Corporate Team Building in Singapore, Planned Around Your Team/);
  assert.match(page, /Tell us your pax, date, venue preference, and event goal/);
  assert.match(page, /Plan My Team Building Event/);
  assert.match(page, /Tell Us About Your Team Event/);
  assert.match(page, /Send My Team Building Enquiry/);
  assert.match(page, /Corporate Team Building Singapore \| Elluminate/);
  assert.match(
    page,
    /Plan a facilitated corporate team building event in Singapore\. Share your pax, date, venue preference and goals, then enquire with Elluminate for a suitable activity recommendation and quote\./,
  );
  assert.match(prerenderSeo, /Corporate Team Building Singapore \| Elluminate/);
});

test("event planning form writes to the existing contact submission and email path", () => {
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
  assert.match(page, /Team Building Event Planning Enquiry/);
  assert.match(page, /supabase\.from\("contact_submissions"\)\.insert/);
  assert.match(page, /send-transactional-email/);
  assert.match(page, /contact-inquiry/);
  assert.match(page, /event_category: "Physical Team Building"/);
  assert.match(page, /additional_details: buildBriefDetails/);
});

test("V6.1 sections carry the copy-led landing page narrative", () => {
  const requiredCopy = [
    "Selected organisations we have worked with",
    "Most teams do not need more activity names. They need help choosing what will actually work for their group.",
    "Generic team building vs. team building planned properly",
    "Standard activity catalogue",
    "The Elluminate planning approach",
    "Share your event details",
    "Get a recommended activity direction",
    "Confirm the plan and run the event",
    "Activity directions",
    "Outdoor race formats",
    "Indoor challenge formats",
    "Strategy and mystery formats",
    "High-energy station games",
    "Virtual and hybrid formats",
    "What makes Elluminate different",
    "What affects the event plan and quote",
    "Facilitated by the Elluminate team",
    "Team-building moments from past events",
    "What teams have said",
    "Plan a team-building activity your people can actually get into.",
  ];

  for (const copy of requiredCopy) {
    assert.match(page, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /<FAQSchema faqs=\{faqs\}/);
  assert.match(page, /<OrganizationSchema type="LocalBusiness"/);
  assert.match(sitemap, /https:\/\/elluminate\.sg\/services\/team-building/);
});

test("activity filters and CTAs support enquiry, not price chips", () => {
  assert.match(page, /activityFilter/);
  assert.match(page, /All/);
  assert.match(page, /Outdoor/);
  assert.match(page, /Indoor/);
  assert.match(page, /High energy/);
  assert.match(page, /Low exertion/);
  assert.match(page, /Virtual/);
  assert.match(page, /Ask if this fits my team/);
  assert.match(page, /href="#quote"/);
  assert.doesNotMatch(page, /getServicePrice/);
  assert.doesNotMatch(page, /From \$\{/);
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

test("V6.1 landing page avoids internal language, off-brand offer copy, hard claims, and orange CTA palette", () => {
  const checked = normalize([page, thankYou].join("\n")).toLowerCase();
  const banned = [
    "â—†",
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
