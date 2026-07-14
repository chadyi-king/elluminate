import assert from "node:assert/strict";
import test from "node:test";
import { routeSeo } from "../src/data/seoRoutes.js";

test("indexable route metadata is unique and complete", () => {
  const indexable = routeSeo.filter((route) => !route.redirectTo);
  assert.equal(new Set(indexable.map((route) => route.path)).size, indexable.length);
  assert.equal(new Set(indexable.map((route) => route.title)).size, indexable.length);
  for (const route of indexable) {
    assert.ok(route.title.length >= 20 && route.title.length <= 70, `${route.path} title length`);
    assert.ok(route.description.length >= 70 && route.description.length <= 165, `${route.path} description length`);
    assert.doesNotMatch(route.description, /most popular|best|guarantee|within 24|24 hours/i, route.path);
  }
});

test("redirect aliases canonicalise to the live destinations", () => {
  const teamAlias = routeSeo.find((route) => route.path === "/teambuilding");
  assert.equal(teamAlias?.redirectTo, "/services/team-building");
  assert.equal(teamAlias?.robots, "noindex, follow");
});
