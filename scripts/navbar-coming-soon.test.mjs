import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const navbar = readFileSync("src/components/Navbar.tsx", "utf8");
const app = readFileSync("src/App.tsx", "utf8");

test("large scale nav item opens an on-site planning dialog", () => {
  assert.match(navbar, /Large Scale/);
  assert.match(navbar, /recommend the right large-scale format/);
  assert.doesNotMatch(navbar, /coming soon/i);
  assert.match(navbar, /DialogContent/);
  assert.match(navbar, /DialogTitle/);
  assert.match(navbar, /ComingSoonNavButton topic="large-scale"/);
  assert.match(navbar, /type="button"/);
  assert.match(navbar, /handleComingSoonCta/);
  assert.match(navbar, /openContactModal/);
  assert.doesNotMatch(navbar, /teamelevate\.sg/);
  assert.doesNotMatch(navbar, /encompasse\.org/);
  assert.doesNotMatch(navbar, /to=["']\/(?:large-scale|school)["']/);
  assert.doesNotMatch(navbar, /href=["'][^"']*(?:large-scale|school|teamelevate|encompasse)/);
  assert.doesNotMatch(app, /path=["']\/(?:large-scale|school)["']/);
});

test("school nav item links to the live youth camps and school programmes page", () => {
  assert.match(navbar, /const schoolProgrammesPath = "\/services\/youth-camps"/);
  assert.equal((navbar.match(/to=\{schoolProgrammesPath\}/g) ?? []).length, 2, "expected desktop and mobile School links");
  assert.doesNotMatch(navbar, /ComingSoonNavButton[\s\S]{0,40}topic="school"/);
});
