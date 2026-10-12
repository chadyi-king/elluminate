import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";
import { routeSeo } from "../src/data/seoRoutes.js";

const pages = [
  { path: "/services/virtual-team-building", keyword: /virtual team building/i, parent: "/services/team-building" },
  { path: "/services/bintan-batam-retreats", keyword: /bintan/i, parent: "/services/retreats" },
  { path: "/services/indoor-team-building", keyword: /indoor team building/i, parent: "/services/team-building" },
];

test("keyword pages are indexable, keyword-led and linked to their hub", () => {
  for (const page of pages) {
    const route = routeSeo.find((candidate) => candidate.path === page.path);
    assert.ok(route, page.path);
    assert.equal(route.indexable, true, page.path);
    assert.match(route.title, page.keyword, page.path);
    assert.match(route.h1, page.keyword, page.path);
    assert.equal(route.parentPath, page.parent, page.path);
    assert.ok(route.relatedPaths.length >= 5, page.path);
    for (const related of route.relatedPaths) {
      assert.ok(routeSeo.some((candidate) => candidate.path === related && candidate.indexable), `${page.path} -> ${related}`);
    }
  }
});

test("keyword pages are routed before the service catch-all and appear in menus", () => {
  const app = readFileSync(resolve("src/App.tsx"), "utf8");
  const catchAll = app.indexOf('path="/services/:slug"');
  const navbar = readFileSync(resolve("src/components/Navbar.tsx"), "utf8");
  for (const page of pages) {
    const index = app.indexOf(`path="${page.path}"`);
    assert.ok(index > 0 && index < catchAll, page.path);
    assert.ok(navbar.includes(page.path.replace("/services/", "")), page.path);
  }
});

test("built keyword pages contain crawler-visible links", { skip: !existsSync(resolve("dist/index.html")) }, () => {
  for (const page of pages) {
    const html = readFileSync(join(resolve("dist"), page.path.replace(/^\//, ""), "index.html"), "utf8");
    assert.match(html, /data-prerendered-content="true"/, page.path);
    assert.match(html, page.keyword, page.path);
    assert.ok((html.match(/<li><a href="\/services\//g) || []).length >= 5, page.path);
  }
});
