import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const navbar = readFileSync("src/components/Navbar.tsx", "utf8");

test("large scale and school nav items are coming soon, not external links", () => {
  assert.match(navbar, /Large Scale/);
  assert.match(navbar, /School/);
  assert.match(navbar, /Coming Soon/);
  assert.doesNotMatch(navbar, /teamelevate\.sg/);
  assert.doesNotMatch(navbar, /encompasse\.org/);
});
