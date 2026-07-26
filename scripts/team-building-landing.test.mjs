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
    /tell us who is coming, what you want the day to achieve and where it needs to happen\. we'll help you choose an experience your team can genuinely get into\./,
  );
  assert.match(page, /Build My Team Experience/);
  assert.match(page, /Send My Team Building Enquiry/);
  assert.match(page, /getRouteSeo\("\/services\/team-building"\)/);
  assert.match(routeSeo, /Corporate Team Building Singapore \| Elluminate/);

  assert.ok((page.match(/href="#quote"/g) ?? []).length >= 4, "expected repeated CTAs to target #quote");
});

test("hero keeps one CTA and defers the single quote form", () => {
  const heroStart = page.indexOf("Corporate Team Building Singapore");
  const proofStart = page.indexOf("Shared operating history");
  const heroSource = page.slice(heroStart, proofStart);
  const quoteFormIndex = page.indexOf('id="quote"');

  assert.equal((heroSource.match(/href="#quote"/g) ?? []).length, 1, "expected one hero CTA");
  assert.doesNotMatch(heroSource, /href="#activities"/);
  assert.doesNotMatch(heroSource, /<form\b/);
  assert.match(heroSource, /\/images\/campaigns\/team-building\/hero-campaign-woman-v3\.webp/);
  assert.match(heroSource, /fictional adult Asian professional holding a lit sparkler/);
  assert.match(heroSource, /aria-label="Real Elluminate team-building moments"/);
  assert.equal((page.match(/id="quote"/g) ?? []).length, 1, "expected one quote form");
  assert.ok(quoteFormIndex > proofStart, "expected the quote form after the landing-page argument");
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

test("landing narrative follows the locked ten-section sequence", () => {
  const requiredCopy = [
    "Corporate Team Building Singapore",
    "Shared operating history",
    "The quiet cost of getting it wrong",
    "What we specialise in",
    "The value behind the activity",
    "Find the right direction",
    "Real event moments",
    "Compare the approaches",
    "Is Elluminate right for your event?",
    "From rough brief to a team-building event you can confirm",
  ];

  let previousIndex = -1;
  for (const copy of requiredCopy) {
    const index = page.indexOf(copy);
    assert.ok(index > previousIndex, `expected "${copy}" after the prior section`);
    previousIndex = index;
  }

  assert.doesNotMatch(page, /Originally published by Team Elevate/);
  assert.doesNotMatch(page, /owner-confirmed shared event history/i);
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
    "Choose a fixed activity first",
    "Build it internally",
    "Plan with Elluminate",
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

test("success state is truthful even if the email queue fails", () => {
  assert.match(page, /We have saved your enquiry\. The Elluminate team can now review the event details you shared\./);
  assert.doesNotMatch(page, /sent a confirmation to your email|confirmation email has been sent/i);
});

test("visible form and section copy stays aligned to the locked comparison brief", () => {
  for (const copy of [
    'Name <span className="text-primary">*</span>',
    'Work email <span className="text-primary">*</span>',
    'Estimated pax <span className="text-primary">*</span>',
    'Date or timing <span className="text-primary">*</span>',
    'Phone <span className="font-normal text-muted-foreground">(optional)</span>',
    'Venue preference <span className="font-normal text-muted-foreground">(optional)</span>',
    'Physical or virtual <span className="font-normal text-muted-foreground">(optional)</span>',
    'What should the event achieve? <span className="font-normal text-muted-foreground">(optional)</span>',
    '<option value="">Select a preference</option>',
    '<option value="Not sure">Not sure yet</option>',
    'I agree to Elluminate using these details to respond to my enquiry.',
    'Agree to the privacy policy',
    'Elluminate is a strong fit if',
    'A different solution may fit better if',
    'Story-led physical experiences',
    'Equipment activities',
    'Virtual experiences',
    '{review.author}, {review.role}, {review.company}',
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
