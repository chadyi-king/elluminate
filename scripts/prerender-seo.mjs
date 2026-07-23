// Emit crawler-readable HTML from the same route metadata used by React.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { routeSeo } from "../src/data/seoRoutes.js";

const DIST = resolve("dist");
const BASE = "https://elluminate.sg";
const SITE_NAME = "Elluminate";
const DEFAULT_OG = `${BASE}/og-image.jpg`;

if (!existsSync(join(DIST, "index.html"))) {
  console.warn("[prerender-seo] dist/index.html not found - skipping");
  process.exit(0);
}

const shell = readFileSync(join(DIST, "index.html"), "utf8");
const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function renderHead(route) {
  const canonicalPath = route.redirectTo || route.path;
  const canonicalUrl = `${BASE}${canonicalPath === "/" ? "" : canonicalPath}`;
  const includeCanonical = route.omitCanonical !== true;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const type = route.type || "website";
  const tags = [
    `<title data-rh="true">${title}</title>`,
    `<meta data-rh="true" name="description" content="${description}" />`,
    includeCanonical ? `<link data-rh="true" rel="canonical" href="${canonicalUrl}" />` : null,
    `<meta data-rh="true" name="robots" content="${route.robots || "index, follow"}" />`,
    `<meta data-rh="true" property="og:title" content="${title}" />`,
    `<meta data-rh="true" property="og:description" content="${description}" />`,
    `<meta data-rh="true" property="og:type" content="${type}" />`,
    includeCanonical ? `<meta data-rh="true" property="og:url" content="${canonicalUrl}" />` : null,
    `<meta data-rh="true" property="og:site_name" content="${SITE_NAME}" />`,
    `<meta data-rh="true" property="og:image" content="${DEFAULT_OG}" />`,
    `<meta data-rh="true" property="og:locale" content="en_SG" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${title}" />`,
    `<meta data-rh="true" name="twitter:description" content="${description}" />`,
    `<meta data-rh="true" name="twitter:image" content="${DEFAULT_OG}" />`,
    route.preloadImage ? `<link data-rh="true" rel="preload" as="image" href="${escapeHtml(route.preloadImage)}" />` : null,
  ].filter(Boolean);
  if (route.redirectTo) tags.unshift(`<meta http-equiv="refresh" content="0; url=${canonicalUrl}" />`);
  return tags.join("\n    ");
}

function buildHtml(route) {
  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, "");
  return html.replace(/<head>/i, `<head>\n    ${renderHead(route)}`);
}

for (const route of routeSeo) {
  const html = buildHtml(route);
  const outPath = route.path === "/"
    ? join(DIST, "index.html")
    : join(DIST, route.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
}

const notFoundHtml = buildHtml({
  path: "/404",
  title: "Page Not Found | Elluminate",
  description: "The page you're looking for doesn't exist.",
  robots: "noindex, nofollow",
  omitCanonical: true,
});
writeFileSync(join(DIST, "404.html"), notFoundHtml, "utf8");

console.log(`[prerender-seo] wrote ${routeSeo.length} route files and a noindex 404 fallback`);
