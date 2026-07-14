import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/pages/TeamBuildingHubPage.tsx", "utf8");
const app = readFileSync("src/App.tsx", "utf8");
const navbar = readFileSync("src/components/Navbar.tsx", "utf8");
const routeSeo = readFileSync("src/data/seoRoutes.js", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");

const normalize = (value) => value.replace(/\s+/g, " ").toLowerCase();

test("canonical team-building route and redirect alias are declared before the generic service route", () => {
  const hubRouteIndex = app.indexOf('path="/services/team-building"');
  const aliasRouteIndex = app.indexOf('path="/teambuilding"');
  const genericRouteIndex = app.indexOf('path="/services/:slug"');

  assert.ok(hubRouteIndex > -1 && hubRouteIndex < genericRouteIndex);
  assert.ok(aliasRouteIndex > hubRouteIndex && aliasRouteIndex < genericRouteIndex);
  assert.match(app, /path="\/teambuilding" element=\{<Navigate to="\/services\/team-building" replace \/>\}/);
  assert.match(sitemap, /https:\/\/elluminate\.sg\/services\/team-building/);
  assert.doesNotMatch(sitemap, /https:\/\/elluminate\.sg\/teambuilding/);
});

test("page preserves the shared site navigation and footer", () => {
  assert.match(page, /import \{ Navbar \} from "@\/components\/Navbar"/);
  assert.match(page, /<Navbar \/>/);
  assert.match(page, /<Footer/);
  assert.doesNotMatch(page, /<header\b/);
  assert.match(navbar, /parentPath="\/services\/team-building"/);
  assert.doesNotMatch(navbar, /Team Building Overview/);
});

test("page has one H1, message-matched SEO, and one principal action", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(page, /Corporate Team Building in Singapore, Planned Around Your Team/);
  assert.match(page, /Share your group size, preferred date, venue and what you want the day to achieve/);
  assert.match(page, /Plan My Team Building Event/);
  assert.match(page, /Send My Team Building Enquiry/);
  assert.match(page, /getRouteSeo\("\/services\/team-building"\)/);
  assert.match(routeSeo, /Corporate Team Building Singapore \| Elluminate/);

  assert.ok((page.match(/href="#quote"/g) ?? []).length >= 3, "expected repeated CTAs to target #quote");
});

test("enquiry form requires only name, email, pax, timing, and privacy consent", () => {
  for (const field of ["name", "email", "pax", "timing"]) {
    assert.match(page, new RegExp(`name="${field}"[\\s\\S]{0,300}required`));
  }

  for (const field of ["phone", "venue", "formatPreference", "objective"]) {
    assert.match(page, new RegExp(`name="${field}"`));
  }

  assert.match(page, /privacyConsent/);
  assert.match(page, /honeypot/);
  assert.match(page, /submitLead\(\{/);
  assert.match(page, /formName: "team_building_quote_brief"/);
  assert.match(page, /Team Building Event Planning Enquiry/);
  assert.match(page, /parseExpectedDate/);
  assert.doesNotMatch(page, /supabase\.from\("contact_submissions"\)\.insert/);
});

test("landing narrative covers fit, planning difference, process, real media, proof, and FAQs", () => {
  const requiredCopy = [
    "Start with the team",
    "Where it can run",
    "How the team should feel",
    "What the event should achieve",
    "Six activity directions to start the conversation",
    "A catalogue starts with the activity. Elluminate starts with the event.",
    "What Elluminate handles",
    "From rough brief to a team-building event you can confirm",
    "Real event moments",
    "What teams have said",
    "Before you send the brief",
  ];

  for (const copy of requiredCopy) assert.match(page, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));

  assert.match(page, /Elluminate and Team Elevate are operated by EXSTATIC PTE LTD/);
  assert.match(page, /Originally published by Team Elevate/);
  assert.match(page, /<FAQSchema faqs=\{faqs\}/);
  assert.match(page, /<OrganizationSchema type="LocalBusiness"/);
});

test("six curated physical and virtual formats are present without price mechanics", () => {
  for (const title of [
    "Amazing Race",
    "Cultural Race",
    "CSI-Bones",
    "Minute To Win It",
    "Monopoly Dash",
    "Virtual Amazing Race",
  ]) {
    assert.match(page, new RegExp(title));
  }

  for (const filter of ["Outdoor", "Indoor", "High energy", "Lower intensity", "Virtual"]) {
    assert.match(page, new RegExp(filter));
  }

  assert.doesNotMatch(page, /startingPrice|price badge|\$\d+\/pax/i);
});

test("WhatsApp and CTA diagnostics are not lead conversions", () => {
  assert.match(page, /wa\.me\/6588352482/);
  assert.match(page, /WhatsApp Elluminate/);
  assert.match(page, /pushLandingEvent\("form_start"/);
  assert.match(page, /pushLandingEvent\("cta_click"/);
  assert.doesNotMatch(page, /pushLandingEvent\("form_submit"/);
  assert.doesNotMatch(page, /trackLeadConversion/);
});

test("page avoids old mechanics, unsupported claims, and off-brand palettes", () => {
  const checked = normalize(page);
  const banned = [
    "free planning session",
    "matched options",
    "3 options",
    "babysitting another vendor",
    "the classic",
    "the takeover",
    "the signature",
    "within 24 hours",
    "24h",
    "guarantee",
    "guaranteed",
    "#1",
    "best team building",
    "birthday",
    "rental",
    "archery tag",
    "gelblitz",
    "nerfwar",
    "laser tag",
    "bg-[#f4730c]",
    "text-[#ffc83d]",
    "bg-[#0a1b33]",
  ];

  for (const term of banned) assert.equal(checked.includes(term), false, `Unexpected term: ${term}`);
});
