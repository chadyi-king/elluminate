import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";
import { routeSeo } from "../src/data/seoRoutes.js";

const read = (path) => readFileSync(resolve(path), "utf8");

test("route metadata has unique paths and a preload for the paid team-building route", () => {
  const paths = routeSeo.map((route) => route.path);
  assert.equal(new Set(paths).size, paths.length);

  const teamBuilding = routeSeo.find((route) => route.path === "/services/team-building");
  assert.equal(teamBuilding?.preloadImage, "/images/services/amazing-race/gallery-1.jpg");
});

test("sitemap contains canonical routes only and does not invent static last-modified dates", () => {
  const sitemap = read("public/sitemap.xml");
  assert.doesNotMatch(sitemap, /<loc>https:\/\/elluminate\.sg\/teambuilding<\/loc>/);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/elluminate\.sg\/services\/corporate-retreats<\/loc>/);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/elluminate\.sg\/thank-you/);

  for (const path of ["/", "/about", "/portfolio", "/services/team-building"]) {
    const loc = `https://elluminate.sg${path === "/" ? "/" : path}`;
    const block = sitemap.match(new RegExp(`<url>[\\s\\S]*?<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/loc>[\\s\\S]*?<\\/url>`))?.[0];
    assert.ok(block, `missing sitemap block for ${path}`);
    assert.doesNotMatch(block, /<lastmod>/, `static route ${path} should not claim an unverified modification date`);
  }
});

test("server redirect manifests cover canonical legacy routes", () => {
  const redirects = read("public/_redirects");
  const vercel = read("vercel.json");

  for (const [source, destination] of [
    ["/teambuilding", "/services/team-building"],
    ["/services/corporate-retreats", "/services/overseas-retreats"],
  ]) {
    assert.match(redirects, new RegExp(`${source.replaceAll("/", "\\/")} ${destination.replaceAll("/", "\\/")} 301!`));
    assert.match(vercel, new RegExp(`"source": "${source.replaceAll("/", "\\/")}"[\\s\\S]*?"destination": "${destination.replaceAll("/", "\\/")}"`));
  }
});

test("built crawler fallbacks use correct indexing signals", () => {
  assert.ok(existsSync(resolve("dist/404.html")), "run npm run build before this readiness test");

  const notFound = read("dist/404.html");
  const teamBuilding = read("dist/services/team-building/index.html");

  assert.match(notFound, /name="robots" content="noindex, nofollow"/);
  assert.doesNotMatch(notFound, /rel="canonical"/);
  assert.match(teamBuilding, /data-rh="true" rel="canonical" href="https:\/\/elluminate\.sg\/services\/team-building"/);
  assert.match(teamBuilding, /data-rh="true" rel="preload" as="image" href="\/images\/services\/amazing-race\/gallery-1\.jpg"/);
});

test("browser icons are right-sized delivery assets", () => {
  for (const [path, maxBytes] of [
    ["public/favicon.png", 200_000],
    ["public/favicon.ico", 25_000],
    ["public/apple-touch-icon.png", 100_000],
  ]) {
    assert.ok(existsSync(resolve(path)), `${path} is missing`);
    assert.ok(statSync(resolve(path)).size <= maxBytes, `${path} exceeds ${maxBytes} bytes`);
  }
});

test("conversion source and deployed schema contract stay aligned", () => {
  const sourceFiles = [
    "src/lib/trackingConfig.ts",
    "src/lib/tracking.ts",
    "src/lib/leadSubmission.ts",
    "src/components/ContactModal.tsx",
    "src/pages/TeamBuildingHubPage.tsx",
  ].map(read).join("\n");
  const migrations = [
    "supabase/migrations/20260611090000_add_conversion_tracking_fields.sql",
    "supabase/migrations/20260722083139_abdd9b1e-5df0-41ff-a362-42809b7f8588.sql",
  ].filter((path) => existsSync(resolve(path))).map(read).join("\n");

  assert.match(sourceFiles, /AW-704277198\/24mXCJ2Q_s8cEM7V6c8C/);
  assert.doesNotMatch(sourceFiles, /AW-18084927892/);
  for (const field of ["gbraid", "wbraid", "gad_source", "attribution_captured_at"]) {
    assert.match(migrations, new RegExp(`\\b${field}\\b`));
  }
});
