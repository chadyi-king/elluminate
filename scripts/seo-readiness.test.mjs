import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";
import { routeSeo } from "../src/data/seoRoutes.js";
import { serviceCommercialSlugs } from "../src/data/serviceCommercialProfiles.js";

const parentPaths = ["/services/team-building", "/services/retreats", "/services/training"];

test("all campaign parents and child services are indexable canonical routes", () => {
  for (const path of parentPaths) {
    const route = routeSeo.find((candidate) => candidate.path === path);
    assert.ok(route, path);
    assert.equal(route.indexable, true, path);
    assert.equal(route.canonicalPath, path, path);
    assert.ok(route.h1, path);
    assert.ok(route.searchIntent, path);
  }

  for (const slug of serviceCommercialSlugs) {
    const path = `/services/${slug}`;
    const route = routeSeo.find((candidate) => candidate.path === path);
    assert.ok(route, path);
    assert.equal(route.indexable, true, path);
    assert.ok(route.parentPath, path);
    assert.equal(route.commercial.slug, slug, path);
  }
});

test("indexable routes have unique canonicals, useful metadata and stable dates", () => {
  const indexable = routeSeo.filter((route) => route.indexable);
  assert.equal(new Set(indexable.map((route) => route.canonicalUrl)).size, indexable.length);
  for (const route of indexable) {
    assert.ok(route.title.length >= 50 && route.title.length <= 60, `${route.path}: ${route.title.length}`);
    assert.ok(route.description.length >= 70 && route.description.length <= 170, `${route.path}: description`);
    assert.match(route.lastmod, /^\d{4}-\d{2}-\d{2}$/, route.path);
  }
});

test("FAQ schema has one page-level owner", () => {
  const accordion = readFileSync(resolve("src/components/service-page/ServiceFAQAccordion.tsx"), "utf8");
  const page = readFileSync(resolve("src/pages/ServicePage.tsx"), "utf8");
  assert.equal(accordion.includes("application/ld+json"), false);
  assert.equal((page.match(/<FAQSchema/g) || []).length, 1);
});

test("built campaign and child pages contain crawler-visible content", { skip: !existsSync(resolve("dist/index.html")) }, () => {
  for (const path of [...parentPaths, "/services/amazing-race", "/services/overseas-retreats", "/services/workshops"]) {
    const directoryHtml = readFileSync(join(resolve("dist"), path.replace(/^\//, ""), "index.html"), "utf8");
    const extensionHtml = readFileSync(join(resolve("dist"), `${path.replace(/^\//, "")}.html`), "utf8");
    for (const html of [directoryHtml, extensionHtml]) {
      assert.match(html, /data-prerendered-content="true"/, path);
      assert.match(html, /<h1>[^<]+<\/h1>/, path);
      assert.equal(html.includes("Service Not Found"), false, path);
      assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path);
    }
  }
});
