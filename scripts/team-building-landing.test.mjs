import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("team building landing page is a dedicated route before generic service pages", () => {
  const app = read("src/App.tsx");
  const hubRouteIndex = app.indexOf('path="/services/team-building"');
  const genericRouteIndex = app.indexOf('path="/services/:slug"');

  assert.notEqual(hubRouteIndex, -1, "missing /services/team-building route");
  assert.notEqual(genericRouteIndex, -1, "missing generic service route");
  assert.ok(hubRouteIndex < genericRouteIndex, "team building route must be declared before /services/:slug");
  assert.ok(existsSync(new URL("../src/pages/TeamBuildingHubPage.tsx", import.meta.url)), "missing TeamBuildingHubPage");
});

test("team building landing page has conversion-focused buyer content without unsupported claims", () => {
  const page = read("src/pages/TeamBuildingHubPage.tsx");

  assert.match(page, /Corporate Team Building in Singapore, Planned Around Your Pax, Venue And Goal/);
  assert.match(page, /Team Activity Brief/);
  assert.match(page, /Get My Activity Recommendation/);
  assert.match(page, /Sample Recommendation/);
  assert.match(page, /For HR And Admin Planners/);
  assert.match(page, /pax/i);
  assert.match(page, /indoor/i);
  assert.match(page, /outdoor/i);
  assert.match(page, /virtual/i);
  assert.match(page, /Can this work indoors or outdoors\?/);
  assert.match(page, /FAQSchema faqs=\{faqs\}/);
  assert.doesNotMatch(
    page,
    /Built For Practical Planners|Choose the activity lane before choosing the exact game|Common physical formats companies ask about|Clear next steps without invented proof/i,
  );
  assert.doesNotMatch(page, /\bbest\b|#1|guaranteed|trusted by|1,000\+|100K\+|client logos/i);
  assert.doesNotMatch(page, /laser tag|archery tag|gelblitz|nerfwar|birthday|rental/i);
});

test("navbar makes Team Building itself a parent landing page link", () => {
  const navbar = read("src/components/Navbar.tsx");
  const siteScope = read("src/data/siteScope.ts");
  const physicalNavBlock = siteScope.match(/export const physicalTeamBuildingServices[\s\S]*?\n];/)?.[0] ?? "";

  assert.match(navbar, /parentPath\?: string/);
  assert.match(navbar, /parentPath="\/services\/team-building"/);
  assert.doesNotMatch(navbar, /Team Building Overview/);
  assert.doesNotMatch(physicalNavBlock, /archery tag|gelblitz|nerfwar|tag-tical laser/i);
  assert.match(siteScope, /equipmentActivityServices/);
});

test("contact modal supports optional event category context for CTA defaults", () => {
  const context = read("src/contexts/ContactModalContext.tsx");
  const modal = read("src/components/ContactModal.tsx");

  assert.match(context, /eventCategory\?: string/);
  assert.match(context, /expectedAttendees\?: string/);
  assert.match(context, /additionalDetails\?: string/);
  assert.match(context, /openContactModal: \(context\?: ContactModalOpenContext\) => void/);
  assert.match(modal, /modalContext/);
  assert.match(modal, /modalContext\.eventCategory/);
  assert.match(modal, /modalContext\.expectedAttendees/);
  assert.match(modal, /modalContext\.additionalDetails/);
  assert.match(modal, /Send Your Team Activity Brief/);
  assert.doesNotMatch(modal, /trusted partner|1,000\+|100K\+|Typically replies within 1 business day/i);
});
