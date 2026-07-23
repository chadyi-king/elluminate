// Emit crawler-readable HTML from the same route manifest used by React.
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
const escapeHtml = (value = "") => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

function renderHead(route) {
  const canonicalUrl = route.canonicalUrl;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const type = route.type || "website";
  const tags = [
    `<title>${title}</title>`,
    `<meta data-rh="true" name="description" content="${description}" />`,
    `<link data-rh="true" rel="canonical" href="${canonicalUrl}" />`,
    `<meta data-rh="true" name="robots" content="${route.robots || "index, follow"}" />`,
    `<meta data-rh="true" property="og:title" content="${title}" />`,
    `<meta data-rh="true" property="og:description" content="${description}" />`,
    `<meta data-rh="true" property="og:type" content="${type}" />`,
    `<meta data-rh="true" property="og:url" content="${canonicalUrl}" />`,
    `<meta data-rh="true" property="og:site_name" content="${SITE_NAME}" />`,
    `<meta data-rh="true" property="og:image" content="${DEFAULT_OG}" />`,
    `<meta data-rh="true" property="og:locale" content="en_SG" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${title}" />`,
    `<meta data-rh="true" name="twitter:description" content="${description}" />`,
    `<meta data-rh="true" name="twitter:image" content="${DEFAULT_OG}" />`,
  ];
  if (route.redirectTo) tags.unshift(`<meta http-equiv="refresh" content="0; url=${canonicalUrl}" />`);
  return tags.join("\n    ");
}

function parentLinks(route) {
  const links = [];
  if (route.parentPath) {
    const parent = routeSeo.find((candidate) => candidate.path === route.parentPath);
    if (parent) links.push(parent);
  }
  if (route.family && !route.slug) {
    links.push(...routeSeo.filter((candidate) => candidate.parentPath === route.path && candidate.indexable));
  }
  return links;
}

function renderBody(route) {
  if (route.redirectTo) {
    return `<main><h1>${escapeHtml(route.title)}</h1><p>Continue to <a href="${route.canonicalUrl}">${escapeHtml(route.canonicalUrl)}</a>.</p></main>`;
  }

  const commercial = route.commercial;
  const facts = commercial ? [
    commercial.publicPrice?.label,
    `Minimum group: ${commercial.minimumGroup}`,
    `Duration: ${commercial.duration}`,
    `Setting: ${commercial.setting}`,
  ].filter(Boolean) : [];
  const related = parentLinks(route);

  return [
    '<main data-prerendered-content="true">',
    `  <h1>${escapeHtml(route.h1)}</h1>`,
    `  <p>${escapeHtml(route.description)}</p>`,
    facts.length ? `  <ul>${facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul>` : "",
    commercial?.inclusions?.length
      ? `  <section><h2>What is included</h2><ul>${commercial.inclusions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`
      : "",
    related.length
      ? `  <nav aria-label="Related services"><h2>${route.slug ? "Explore the service family" : "Explore experiences"}</h2><ul>${related.map((item) => `<li><a href="${item.path}">${escapeHtml(item.h1)}</a></li>`).join("")}</ul></nav>`
      : "",
    `  <p><a href="${route.path === "/" ? "/services/team-building" : "/"}">Explore Elluminate</a></p>`,
    "</main>",
  ].filter(Boolean).join("\n");
}

function buildHtml(route) {
  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<div id="root"><\/div>/i, `<div id="root">${renderBody(route)}</div>`);
  return html.replace(/<head>/i, `<head>\n    ${renderHead(route)}`);
}

for (const route of routeSeo) {
  const html = buildHtml(route);
  const directoryIndexPath = route.path === "/"
    ? join(DIST, "index.html")
    : join(DIST, route.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(directoryIndexPath), { recursive: true });
  writeFileSync(directoryIndexPath, html, "utf8");

  // Emit an extension-backed twin so static hosts can resolve the canonical,
  // slashless URL before their SPA fallback serves the home document.
  if (route.path !== "/") {
    const extensionPath = join(DIST, `${route.path.replace(/^\//, "")}.html`);
    mkdirSync(dirname(extensionPath), { recursive: true });
    writeFileSync(extensionPath, html, "utf8");
  }
}

console.log(`[prerender-seo] wrote ${routeSeo.length} crawler-visible route documents`);
