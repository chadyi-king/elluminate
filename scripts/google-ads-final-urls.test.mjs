import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
const seoRoutes = await readFile(new URL("../src/data/seoRoutes.js", import.meta.url), "utf8");
const campaignConfigs = await readFile(new URL("../src/data/campaignPageConfigs.ts", import.meta.url), "utf8");
const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");

const landingPages = [
  {
    name: "Team Building",
    path: "/services/team-building",
    title: "Corporate Team Building Services Singapore | Elluminate",
  },
  {
    name: "Company Retreats",
    path: "/services/retreats",
    title: "Company Retreats and Offsites Singapore | Elluminate",
  },
  {
    name: "Corporate Training",
    path: "/services/training",
    title: "Corporate Training and Workshops Singapore | Elluminate",
  },
];

for (const landingPage of landingPages) {
  test(`${landingPage.name} has a dedicated campaign Final URL`, () => {
    assert.match(app, new RegExp(`path="${landingPage.path.replaceAll("/", "\\/")}"`));
    assert.match(seoRoutes, new RegExp(`path: "${landingPage.path.replaceAll("/", "\\/")}"`));
    assert.match(seoRoutes, new RegExp(`title: "${landingPage.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.match(campaignConfigs, new RegExp(`path: "${landingPage.path.replaceAll("/", "\\/")}"`));
  });
}

test("thank-you routes stay out of search results", () => {
  assert.match(robots, /Disallow: \/thank-you-\*/);
});
