// Generate the sitemap from the same route manifest used by React and prerendering.
// Dates are explicit and stable; a build alone must never make every page look updated.
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { routeSeo } from "../src/data/seoRoutes.js";

const BASE_URL = "https://elluminate.sg";

async function fetchBlogEntries() {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn("[sitemap] Supabase env vars missing - using manifest blog routes");
    return [];
  }

  try {
    const response = await fetch(
      `${url}/rest/v1/blog_posts?select=slug,updated_at,published_at&is_published=eq.true`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    );
    if (!response.ok) {
      console.warn(`[sitemap] Supabase fetch failed (${response.status}) - using manifest blog routes`);
      return [];
    }
    const rows = await response.json();
    return rows.map((row) => ({
      path: `/blog/${row.slug}`,
      lastmod: (row.updated_at || row.published_at || "").slice(0, 10) || undefined,
      changefreq: "monthly",
      priority: "0.6",
    }));
  } catch (error) {
    console.warn(`[sitemap] Supabase unreachable (${error.message}) - using manifest blog routes`);
    return [];
  }
}

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderXml(entries) {
  const urls = entries.map((entry) => [
    "  <url>",
    `    <loc>${escapeXml(`${BASE_URL}${entry.path}`)}</loc>`,
    entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
    entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
    entry.priority ? `    <priority>${entry.priority}</priority>` : null,
    "  </url>",
  ].filter(Boolean).join("\n"));

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

const fetchedBlogEntries = await fetchBlogEntries();
const entriesByPath = new Map(
  routeSeo
    .filter((route) => route.indexable)
    .map((route) => [
      route.path,
      {
        path: route.path,
        lastmod: route.lastmod,
        changefreq: route.changefreq,
        priority: route.priority,
      },
    ]),
);

for (const entry of fetchedBlogEntries) {
  entriesByPath.set(entry.path, { ...entriesByPath.get(entry.path), ...entry });
}

const entries = [...entriesByPath.values()].sort((left, right) => left.path.localeCompare(right.path));
writeFileSync(resolve("public/sitemap.xml"), renderXml(entries));
console.log(`[sitemap] wrote ${entries.length} canonical URLs to public/sitemap.xml`);
