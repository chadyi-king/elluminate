import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/pages/TeamBuildingHubPage.tsx", "utf8");
const modal = readFileSync("src/components/ContactModal.tsx", "utf8");
const context = readFileSync("src/contexts/ContactModalContext.tsx", "utf8");
const navbar = readFileSync("src/components/Navbar.tsx", "utf8");
const app = readFileSync("src/App.tsx", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");

const normalize = (value) => value.replace(/\s+/g, " ");

test("team building route is declared before generic service route", () => {
  const hubRouteIndex = app.indexOf('path="/services/team-building"');
  const genericRouteIndex = app.indexOf('path="/services/:slug"');

  assert.notEqual(hubRouteIndex, -1, "missing /services/team-building route");
  assert.notEqual(genericRouteIndex, -1, "missing generic service route");
  assert.ok(hubRouteIndex < genericRouteIndex, "team building route must be declared before /services/:slug");
});

test("team building landing page has one H1 and V3 message match", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(
    normalize(page),
    /Corporate Team Building in Singapore, Planned Around Your Pax, Venue And Goal/,
  );
  assert.match(page, /Corporate Physical Team Building Singapore \| Elluminate/);
  assert.match(page, /pax, date, venue, and objective/i);
});

test("team activity brief opens existing modal with context fields", () => {
  assert.match(page, /Team Activity Brief/);
  assert.match(page, /Send Brief To Contact Form/);
  assert.match(page, /expectedAttendees: brief\.pax/);
  assert.match(page, /additionalDetails: buildBriefDetails/);
  assert.match(page, /openBriefModal\("Virtual Team Building"\)/);
  assert.match(context, /expectedAttendees\?: string/);
  assert.match(context, /additionalDetails\?: string/);
  assert.match(
    modal,
    /expectedAttendees: (?:expectedAttendees|modalContext\.expectedAttendees) \?\? (?:previous|prev)\.expectedAttendees/,
  );
});

test("FAQ schema and sitemap route are present", () => {
  assert.match(page, /<FAQSchema faqs=\{faqs\}/);
  assert.match(sitemap, /https:\/\/elluminate\.sg\/services\/team-building/);
  assert.match(sitemap, /<lastmod>2026-05-23<\/lastmod>/);
});

test("navbar parent Team Building link points to landing page", () => {
  assert.match(navbar, /(?:to|parentPath)="\/services\/team-building"/);
  assert.doesNotMatch(navbar, /Team Building Overview/);
});

test("landing page avoids banned equipment and unsupported proof copy", () => {
  const bannedPageTerms = [
    "laser",
    "archery tag",
    "gelblitz",
    "gel-blitz",
    "nerfwar",
    "birthday",
    "rental",
    "school",
    "camp",
    "recommended for ads traffic",
    "sitelinks",
    "trusted",
    "best",
    "#1",
    "guaranteed",
    "guarantee",
    "1,000+",
    "100k+",
    "8+ years",
  ];

  const lowerPage = page.toLowerCase();
  for (const term of bannedPageTerms) {
    assert.equal(lowerPage.includes(term), false, `Unexpected page term: ${term}`);
  }

  const bannedModalTerms = [
    "1,000+",
    "100k+",
    "8+",
    "trusted partner",
    "typically replies",
    "within 1 business day",
  ];
  const lowerModal = modal.toLowerCase();
  for (const term of bannedModalTerms) {
    assert.equal(lowerModal.includes(term), false, `Unexpected modal term: ${term}`);
  }
});
