import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { routeSeo } from "../src/data/seoRoutes.js";

const read = (path) => readFileSync(path, "utf8");

const siteScope = read("src/data/siteScope.ts");
const servicePage = read("src/pages/ServicePage.tsx");
const seoComponent = read("src/components/SEO.tsx");
const sitemapGenerator = read("scripts/generate-sitemap.mjs");
const prerenderSeo = read("scripts/prerender-seo.mjs");
const checkedInSitemap = read("public/sitemap.xml");

const serviceSlugs = [...siteScope.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

test("all published service slugs are covered by sitemap and static SEO generation", () => {
  assert.ok(serviceSlugs.length > 20, "Expected live service slugs to be parsed from siteScope");

  for (const slug of serviceSlugs) {
    assert.match(sitemapGenerator, new RegExp(`"${slug}"`), `${slug} missing from sitemap generator`);
    assert.ok(routeSeo.some((route) => route.path === `/services/${slug}`), `${slug} missing from shared SEO routes`);
  }

  assert.match(servicePage, /getRouteSeo\(`\/services\/\$\{slug \|\| ""\}`\)/);
  assert.match(prerenderSeo, /import \{ routeSeo \} from "\.\.\/src\/data\/seoRoutes\.js"/);
});

test("checked-in sitemap publishes only canonical live service URLs", () => {
  for (const slug of serviceSlugs) {
    assert.match(checkedInSitemap, new RegExp(`<loc>https://elluminate\\.sg/services/${slug}</loc>`));
  }

  assert.doesNotMatch(checkedInSitemap, /\/services\/corporate-retreats<\/loc>/);
});

test("SEO component emits canonical, robots, Open Graph, and Twitter metadata", () => {
  for (const pattern of [
    /<title>\{fullTitle\}<\/title>/,
    /<meta name="description" content=\{description\}/,
    /<link rel="canonical" href=\{canonical\}/,
    /<meta name="robots" content=\{robots\}/,
    /<meta property="og:title" content=\{fullTitle\}/,
    /<meta property="og:description" content=\{description\}/,
    /<meta property="og:url" content=\{canonical\}/,
    /<meta name="twitter:card" content="summary_large_image"/,
    /<meta name="twitter:title" content=\{fullTitle\}/,
  ]) {
    assert.match(seoComponent, pattern);
  }
});

test("post-build prerender script writes per-route HTML with indexable metadata", () => {
  for (const pattern of [
    /for \(const route of routeSeo\)/,
    /<meta name="robots" content="\$\{route\.robots \|\| "index, follow"\}" \/>/,
    /<meta property="og:site_name" content="\$\{SITE_NAME\}" \/>/,
    /<meta name="twitter:card" content="summary_large_image" \/>/,
    /join\(DIST, route\.path\.replace/,
    /mkdirSync\(dirname\(outPath\), \{ recursive: true \}\)/,
    /writeFileSync\(outPath, html, "utf8"\)/,
  ]) {
    assert.match(prerenderSeo, pattern);
  }
});
