// Auto-generates public/sitemap.xml from a single source of truth.
// Runs before build (and dev) via package.json predev/prebuild hooks.
// Pulls published blog posts from Supabase at build time; if Supabase is
// unreachable, logs a warning and falls back to static routes only.

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE_URL = "https://elluminate.sg";

// Mirror src/data/siteScope.ts — keep these lists aligned. Adding a slug here
// automatically gets it into the sitemap (and Search Console once submitted).
const physicalServices = [
  "amazing-race", "csi-bones", "cultural-race", "amongst-us", "alice-in-motherland",
  "battle-of-the-olympians", "builder-cross", "minute-to-win-it", "monopoly-dash",
  "running-man", "sotong-game", "treasure-heist",
];
const equipmentServices = ["archery-tag", "gel-blitz", "nerfwar", "tag-tical-laser-teambuilding"];
const virtualServices = [
  "amazing-race-virtual", "fit-in-your-team-virtual", "the-gameshow-experience-virtual",
  "the-great-zodiac-hunt-virtual", "the-nuclear-fallout-escape-room-virtual",
  "the-patriot-act-virtual", "tomb-raider-king-treasure-hunt-virtual",
  "grand-christmas-delivery",
];
const retreatServices = ["overseas-retreats", "local-retreats", "incentive-travel"];
const trainingServices = [
  "mbti", "disc", "ocean", "mass-talks", "workshops", "youth-camps",
  "corporate-days", "wellness-events", "leadership-offsites",
];

/** @typedef {{path:string,changefreq?:string,priority?:string,lastmod?:string}} Entry */

/** @type {Entry[]} */
const staticEntries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
  { path: "/services/retreats", changefreq: "monthly", priority: "0.8" },
  { path: "/services/training", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
];

// These articles are published, indexable routes in the application. Keep
// them in the generated sitemap when a build cannot reach Supabase; live
// database results below can refresh their dates and add newer articles.
const knownPublishedBlogEntries = [
  { path: "/blog/top-10-team-building-activities-singapore-2026", lastmod: "2026-03-05", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/how-to-plan-amazing-race-company", lastmod: "2026-03-05", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/indoor-vs-outdoor-team-building", lastmod: "2026-03-05", changefreq: "monthly", priority: "0.6" },
];

const servicePriority = (slug) =>
  slug === "team-building" || slug === "amazing-race" ? "0.9"
  : retreatServices.includes(slug) ? "0.8"
  : "0.7";

const serviceEntries = [
  "team-building",
  ...physicalServices, ...equipmentServices, ...virtualServices,
  ...retreatServices, ...trainingServices,
  // Note: /services/corporate-retreats is a 301 redirect to overseas-retreats
  // and is intentionally excluded from the sitemap (only canonical pages).
].map((slug) => ({
  path: `/services/${slug}`,
  changefreq: "monthly",
  priority: servicePriority(slug),
}));

async function fetchBlogEntries() {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn("[sitemap] Supabase env vars missing — skipping blog posts");
    return [];
  }
  try {
    const res = await fetch(
      `${url}/rest/v1/blog_posts?select=slug,updated_at,published_at&is_published=eq.true`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    );
    if (!res.ok) {
      console.warn(`[sitemap] Supabase fetch failed (${res.status}) — skipping blog posts`);
      return [];
    }
    const rows = await res.json();
    return rows.map((r) => ({
      path: `/blog/${r.slug}`,
      lastmod: (r.updated_at || r.published_at || "").slice(0, 10) || undefined,
      changefreq: "monthly",
      priority: "0.6",
    }));
  } catch (e) {
    console.warn(`[sitemap] Supabase unreachable (${e.message}) — skipping blog posts`);
    return [];
  }
}

function renderXml(entries) {
  const urls = entries.map((e) => {
    return [
      "  <url>",
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      "  </url>",
    ].filter(Boolean).join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

const fetchedBlogEntries = await fetchBlogEntries();
const blogEntriesByPath = new Map(
  [...knownPublishedBlogEntries, ...fetchedBlogEntries].map((entry) => [entry.path, entry]),
);
const all = [...staticEntries, ...serviceEntries, ...blogEntriesByPath.values()];
writeFileSync(resolve("public/sitemap.xml"), renderXml(all));
console.log(`[sitemap] wrote ${all.length} URLs to public/sitemap.xml`);
