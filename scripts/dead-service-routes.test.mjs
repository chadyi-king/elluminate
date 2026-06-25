import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => (existsSync(path) ? readFileSync(path, "utf8") : "");

const app = read("src/App.tsx");
const sitemapGenerator = read("scripts/generate-sitemap.mjs");
const prerenderSeo = read("scripts/prerender-seo.mjs");
const sitemap = read("public/sitemap.xml");
const redirects = read("public/_redirects");
const siteScope = read("src/data/siteScope.ts");
const publicLinkSurfaces = {
  navbar: read("src/components/Navbar.tsx"),
  footer: read("src/components/Footer.tsx"),
  teamBuildingHub: read("src/pages/TeamBuildingHubPage.tsx"),
  llms: read("public/llms.txt"),
};

const deadLargeScaleSlugs = [
  "dinner-and-dance",
  "awards-ceremonies",
  "corporate-anniversaries",
  "product-launch",
  "brand-activations",
  "client-appreciation",
  "town-halls",
  "immersive-experiences",
  "event-concept",
  "stage-production",
  "custom-themes",
  "emcee-media",
  "summits",
  "government-events",
  "private-events",
  "family-fun-days",
  "corporate-carnivals",
  "vip-gala",
  "grand-opening",
];

test("dead Large Scale service slugs are not published as live services", () => {
  for (const slug of deadLargeScaleSlugs) {
    assert.doesNotMatch(siteScope, new RegExp(`slug:\\s*["']${slug}["']`), `${slug} should not be in site scope`);
    assert.doesNotMatch(sitemapGenerator, new RegExp(`["']${slug}["']`), `${slug} should not be in sitemap generation`);
    assert.doesNotMatch(prerenderSeo, new RegExp(`["']${slug}["']`), `${slug} should not be prerendered as a live SEO page`);
    assert.doesNotMatch(sitemap, new RegExp(`/services/${slug}`), `${slug} should not be in the generated sitemap`);
  }
});

test("dead Large Scale service slugs redirect to the live portfolio surface", () => {
  assert.match(app, /quarantinedServiceSlugs/);
  assert.match(app, /QuarantinedServiceRedirect/);
  assert.match(app, /to="\/portfolio"/);

  const quarantineRouteIndex = app.indexOf("QuarantinedServiceRedirect");
  const genericServiceRouteIndex = app.indexOf('path="/services/:slug"');
  assert.ok(quarantineRouteIndex > -1, "missing app-level quarantine redirect");
  assert.ok(genericServiceRouteIndex > -1, "missing generic service route");
  assert.ok(
    quarantineRouteIndex < genericServiceRouteIndex,
    "quarantined slugs must be handled before /services/:slug",
  );

  for (const slug of deadLargeScaleSlugs) {
    assert.match(app, new RegExp(`["']${slug}["']`), `${slug} should be listed in app-level quarantine slugs`);
    assert.match(
      redirects,
      new RegExp(`^/services/${slug}\\s+/portfolio\\s+301!?$`, "m"),
      `${slug} should have a static-host 301 redirect`,
    );
  }
});

test("public navigation and discovery surfaces do not link to quarantined slugs", () => {
  for (const [surfaceName, source] of Object.entries(publicLinkSurfaces)) {
    for (const slug of deadLargeScaleSlugs) {
      assert.doesNotMatch(
        source,
        new RegExp(`/services/${slug}`),
        `${surfaceName} should not link to /services/${slug}`,
      );
    }
  }
});

test("footer does not link to unpublished service routes", () => {
  assert.doesNotMatch(publicLinkSurfaces.footer, /\/services\/student-workshops/);
});
