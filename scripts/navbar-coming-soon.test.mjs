import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const navbar = readFileSync("src/components/Navbar.tsx", "utf8");
const app = readFileSync("src/App.tsx", "utf8");

test("large scale and school nav items open an on-site coming soon dialog", () => {
  assert.match(navbar, /Large Scale/);
  assert.match(navbar, /School/);
  assert.match(navbar, /This section is coming soon/);
  assert.match(navbar, /DialogContent/);
  assert.match(navbar, /DialogTitle/);
  assert.match(navbar, /ComingSoonNavButton topic="large-scale"/);
  assert.match(navbar, /ComingSoonNavButton topic="school"/);
  assert.match(navbar, /type="button"/);
  assert.match(navbar, /handleComingSoonCta/);
  assert.match(navbar, /openContactModal/);
  assert.doesNotMatch(navbar, /teamelevate\.sg/);
  assert.doesNotMatch(navbar, /encompasse\.org/);
  assert.doesNotMatch(navbar, /to=["']\/(?:large-scale|school)["']/);
  assert.doesNotMatch(navbar, /href=["'][^"']*(?:large-scale|school|teamelevate|encompasse)/);
  assert.doesNotMatch(app, /path=["']\/(?:large-scale|school)["']/);
});
