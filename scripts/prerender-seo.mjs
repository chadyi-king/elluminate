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
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const type = route.type || "website";
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta name="robots" content="${route.robots || "index, follow"}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:image" content="${DEFAULT_OG}" />`,
    `<meta property="og:locale" content="en_SG" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${DEFAULT_OG}" />`,
  ];
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

console.log(`[prerender-seo] wrote ${routeSeo.length} static HTML files with shared route SEO`);
