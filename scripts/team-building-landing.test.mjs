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

  assert.match(page, /Corporate Physical Team Building in Singapore/);
  assert.match(page, /HR\/admin|HR and admin/);
  assert.match(page, /pax/i);
  assert.match(page, /indoor/i);
  assert.match(page, /outdoor/i);
  assert.match(page, /virtual/i);
  assert.match(page, /Can this work indoors or outdoors\?/);
  assert.doesNotMatch(page, /best|#1|guaranteed|trusted by|1,000\+|100K\+|client logos/i);
  assert.doesNotMatch(page, /laser tag|archery tag|gelblitz|nerfwar|birthday|rental/i);
});

test("navbar exposes a team building overview link on desktop and mobile", () => {
  const navbar = read("src/components/Navbar.tsx");
  const siteScope = read("src/data/siteScope.ts");
  const overviewLinks = navbar.match(/Team Building Overview/g) ?? [];
  const routeLinks = navbar.match(/\/services\/team-building/g) ?? [];
  const physicalNavBlock = siteScope.match(/export const physicalTeamBuildingServices[\s\S]*?\n];/)?.[0] ?? "";

  assert.ok(overviewLinks.length >= 2, "desktop and mobile menus should name the overview link");
  assert.ok(routeLinks.length >= 2, "desktop and mobile menus should link to the overview route");
  assert.doesNotMatch(physicalNavBlock, /archery tag|gelblitz|nerfwar|tag-tical laser/i);
  assert.match(siteScope, /equipmentActivityServices/);
});

test("contact modal supports optional event category context for CTA defaults", () => {
  const context = read("src/contexts/ContactModalContext.tsx");
  const modal = read("src/components/ContactModal.tsx");

  assert.match(context, /eventCategory\?: string/);
  assert.match(context, /openContactModal: \(context\?: ContactModalOpenContext\) => void/);
  assert.match(modal, /modalContext/);
  assert.match(modal, /modalContext\?\.eventCategory/);
});
