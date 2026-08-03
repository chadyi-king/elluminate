import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/pages/TeamBuildingHubPage.tsx", "utf8");
const app = readFileSync("src/App.tsx", "utf8");
const navbar = readFileSync("src/components/Navbar.tsx", "utf8");
const campaignPageConfigs = readFileSync("src/data/campaignPageConfigs.ts", "utf8");
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

test("page has one H1, message-matched SEO, and the locked primary action", () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  assert.match(campaignPageConfigs, /h1:\s*"Corporate Team Building in Singapore, Planned Around Your Team"/);
  assert.match(page, /const heroHeadline = "Team Building Your People Won't Quietly Dread"/);
  assert.match(
    normalize(page),
    /you book the day hoping people will loosen up\. then comes the worry: will they join in, or politely wait for it to end\? we help you choose the experience that gets the room involved\./,
  );
  assert.match(page, /Build My Team Experience/);
  assert.match(page, /getRouteSeo\("\/services\/team-building"\)/);
  assert.match(routeSeo, /Corporate Team Building Singapore \| Elluminate/);
  assert.ok((page.match(/openPlanMyEvent\(/g) ?? []).length >= 5, "expected repeated CTAs to open Plan My Event");
});

test("hero stays simple and opens the shared Plan My Event form", () => {
  const heroStart = page.indexOf("Corporate Team Building Singapore");
  const proofStart = page.indexOf("Why organisers trust us");
  const heroSource = page.slice(heroStart, proofStart);

  assert.equal((heroSource.match(/openPlanMyEvent\("hero_primary"\)/g) ?? []).length, 1, "expected one hero CTA");
  assert.doesNotMatch(heroSource, /href="#activities"/);
  assert.doesNotMatch(heroSource, /<form\b/);
  assert.doesNotMatch(heroSource, /No payment at enquiry/);
  assert.match(heroSource, /\/images\/campaigns\/team-building\/hero-campaign-woman-v3\.webp/);
  assert.match(heroSource, /fictional adult Asian professional holding a lit sparkler/);
  assert.match(heroSource, /aria-label="Real Elluminate team-building moments"/);
});

test("page reuses the shared Plan My Event modal instead of owning a second form", () => {
  assert.match(page, /import \{ useContactModal \} from "@\/contexts\/ContactModalContext"/);
  assert.match(page, /const \{ openContactModal \} = useContactModal\(\)/);
  assert.match(page, /openContactModal\(\{[\s\S]*eventCategory: "Physical Team Building"[\s\S]*serviceSlug: "team-building"/);
  assert.doesNotMatch(page, /<form\b/);
  assert.doesNotMatch(page, /id="quote"/);
  assert.doesNotMatch(page, /submitLead/);
  assert.doesNotMatch(page, /href="#quote"/);
});

test("landing narrative follows the revised nine-section sequence", () => {
  const requiredCopy = [
    "Corporate Team Building Singapore",
    "Why organisers trust us",
    "The quiet cost of getting it wrong",
    "Why Elluminate is different",
    "The value behind the activity",
    "Find the right direction",
    "Real event moments",
    "What organisers said afterwards",
    "Is Elluminate right for your event?",
    "From rough brief to a team-building event you can confirm",
    "Before the easy choices become last-minute compromises",
  ];

  let previousIndex = -1;
  for (const copy of requiredCopy) {
    const index = page.indexOf(copy);
    assert.ok(index > previousIndex, `expected "${copy}" after the prior section`);
    previousIndex = index;
  }

  assert.doesNotMatch(page, /Originally published by Team Elevate/);
  assert.doesNotMatch(page, /owner-confirmed shared event history/i);
  assert.doesNotMatch(page, /Compare the approaches/);
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

test("proof, comparison, objections, and value scope use only the locked truth-safe claims", () => {
  for (const copy of [
    "5,000+",
    "100,000+",
    "8+ years",
    "24",
    "The wrong activity costs more than the quote.",
    "Activity-first planning starts with the package. We start with the people who have to enjoy it.",
    "A common activity-first approach",
    "The Elluminate way",
    "Our expertise sequence",
    "Make the people fit the package",
    "Make the experience fit the people",
    "A different solution may fit better if",
    "Is submitting the brief a commitment?",
    "Standard activity delivery includes",
    "Optional additions when needed",
  ]) {
    assert.match(page, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.doesNotMatch(page, /Google rating|4\.[0-9]\s*\/\s*5|respond within|same-day response/i);
  assert.doesNotMatch(page, /we guarantee|guaranteed results|guaranteed outcome/i);
});

test("real service photography is used without repeating a source image", () => {
  const images = [...page.matchAll(/\/images\/services\/[^"\s)]+\.jpg/g)].map(([image]) => image);
  assert.ok(images.length >= 15, "expected a people-led page with substantial real event photography");
  assert.equal(new Set(images).size, images.length, "expected each placed service image to be unique");
});

test("closing creates truthful urgency without fake scarcity", () => {
  assert.match(page, /The best time to fix the wrong team-building plan is before you book it\./);
  assert.match(page, /The earlier the brief is clear, the more room there is to solve participation, venue fit, pacing and/);
  assert.match(page, /Share the brief\. See a clearer direction and quote\. Decide when the fit makes sense\./);
  assert.doesNotMatch(page, /today only|limited slots|countdown|act now|last chance/i);
});

test("visible comparison, value, fit, and testimonial sections stay aligned to the revised brief", () => {
  for (const copy of [
    "Because your team&apos;s time should not be the test run.",
    "The activity fills the timetable. The value is everything that makes it worth your team&apos;s time.",
    "You do not just receive a game. You receive a direction you can explain, compare and confidently",
    'Elluminate is a strong fit if',
    'A different solution may fit better if',
    'Story-led physical experiences',
    'Equipment activities',
    'Virtual experiences',
    '<ClientTestimonialsCarousel',
    'orderingSeed="team-building-client-stories"',
  ]) {
    assert.ok(page.includes(copy), `expected locked copy: ${copy}`);
  }

  for (const extra of [
    "Built around",
    "People, not packages.",
    "One connected scope",
    "The activity, the people and the practical plan should make sense together.",
    "Practical concerns, answered",
    "Bring the unanswered questions. They belong in the planning conversation.",
    "Prefer WhatsApp?",
    "Races, mysteries, missions, and facilitated challenge formats.",
    "Action-led formats for groups that want a more physical game layer.",
    "Hosted shared challenges for remote and multi-office teams.",
  ]) {
    assert.equal(page.includes(extra), false, `unexpected non-brief microcopy: ${extra}`);
  }

  assert.doesNotMatch(page, />Step 0\{index \+ 1\}</);
  assert.doesNotMatch(page, />Approach \{approach\.number\}</);
  assert.doesNotMatch(page, /\{group\.items\.length\} experiences/);
});

test("CTA diagnostics are not lead conversions", () => {
  assert.match(page, /ctaLocation: location/);
  assert.match(page, /ctaText/);
  assert.doesNotMatch(page, /form_submit/);
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
    "#1",
    "best team building",
    "birthday",
    "archery tag",
    "gelblitz",
    "nerfwar",
    "laser tag",
    "room-change plan",
    "you don't need another activity",
    "the room changes",
    "bg-[#f4730c]",
    "text-[#ffc83d]",
    "bg-[#0a1b33]",
  ];

  for (const term of banned) assert.equal(checked.includes(term), false, `Unexpected term: ${term}`);
});
