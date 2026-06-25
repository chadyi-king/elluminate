// Post-build: emit per-route static HTML with proper title/description/canonical/OG tags.
// This makes the SPA visible to non-JS crawlers (LinkedIn, Facebook, Slack, Bingbot,
// Google's first-pass indexers, ad-quality bots, etc.) without needing Puppeteer.
//
// For each route in routeSEO[], we write dist/<route>/index.html based on dist/index.html
// with the head tags overridden. Static hosts serve /<route>/index.html for /<route>,
// then React hydrates client-side as usual.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";

const DIST = resolve("dist");
const BASE = "https://elluminate.sg";
const SITE_NAME = "Elluminate";
const DEFAULT_OG = `${BASE}/og-image.jpg`;

if (!existsSync(join(DIST, "index.html"))) {
  console.warn("[prerender-seo] dist/index.html not found — skipping");
  process.exit(0);
}
const shell = readFileSync(join(DIST, "index.html"), "utf8");

/** @typedef {{path:string,title:string,description:string,type?:string}} Route */

const services = {
  // Physical
  "team-building": { title: "Corporate Team Building Singapore | Elluminate", description: "Plan corporate team building in Singapore without babysitting another vendor. Share your pax, date, venue and goal, then start a free planning session with Elluminate." },
  "amazing-race": { title: "Amazing Race Team Building Singapore | Elluminate", description: "Singapore's most popular team building activity. City-wide Amazing Race with custom challenges, live leaderboards, and full facilitation. Book now." },
  "archery-tag": { title: "Archery Tag Singapore | Team Building Activity | Elluminate", description: "Action-packed Archery Tag battles for corporate teams. Safe, thrilling, and fully facilitated. Perfect for groups of 20–300 pax in Singapore." },
  "gel-blitz": { title: "GelBlitz Singapore | Gel Blaster Team Building | Elluminate", description: "GelBlitz gel ball blaster battles for corporate teams in Singapore. High-energy, safe, and unforgettable. Perfect for groups who want real adrenaline." },
  "nerfwar": { title: "Nerfwar Team Building Singapore | Elluminate", description: "Nerfwar foam blaster team battles for corporate groups in Singapore. Competitive, safe, and energetic. Ideal for 20–500 pax. Book with Elluminate." },
  "tag-tical-laser-teambuilding": { title: "Tag-tical Laser Tag Singapore | Team Building Activity | Elluminate", description: "Laser tag team building in Singapore. Fast-paced tactical battles that build teamwork, strategy, and communication. Fully facilitated by Elluminate." },
  "csi-bones": { title: "CSI Team Building Singapore | Forensic Mystery Activity | Elluminate", description: "Immersive CSI investigation team building in Singapore. Teams solve forensic mysteries using clues and deduction. Unique, engaging, and memorable." },
  "monopoly-dash": { title: "Monopoly Dash Team Building Singapore | Elluminate", description: "A live Monopoly-inspired team building experience in Singapore. Strategic, competitive, and perfect for corporate groups of all sizes. Book now." },
  "running-man": { title: "Running Man Team Building Singapore | Elluminate", description: "Korean Running Man-inspired team building in Singapore. Name tag ripping, missions, and hilarious challenges. Facilitated by Elluminate's expert team." },
  "builder-cross": { title: "Builder Cross Team Building Singapore | Elluminate", description: "Builder Cross, a construction and collaboration team challenge for corporate groups in Singapore. Builds communication and creative problem-solving." },
  "cultural-race": { title: "Cultural Race Singapore | Heritage Team Building | Elluminate", description: "Explore Singapore's heritage through an interactive Cultural Race. Challenges across Chinatown, Little India, and Kampong Glam. Book for your team." },
  "minute-to-win-it": { title: "Minute to Win It Singapore | Team Building Game | Elluminate", description: "Fast-paced Minute to Win It team challenges for corporate groups. One-minute games that bring out competitive spirit and laughter. Book in Singapore." },
  "sotong-game": { title: "Sotong Game Singapore | Team Building Activity | Elluminate", description: "The Sotong Game, Singapore's most entertaining team building format. High energy, hilarious, and great for all group sizes. Enquire with Elluminate." },
  "treasure-heist": { title: "Treasure Heist Team Building Singapore | Elluminate", description: "A thrilling heist-themed team building activity in Singapore. Teams compete in strategy, speed, and collaboration. Fully facilitated by Elluminate." },
  "amongst-us": { title: "Amongst Us Team Building Singapore | Social Deduction Game | Elluminate", description: "A live social-deduction team building experience in Singapore. Find the impostors before the room turns on itself. Unique, engaging, and unforgettable." },
  "alice-in-motherland": { title: "Alice in Motherland Team Building Singapore | Elluminate", description: "A whimsical story-led team building journey in Singapore. Themed stations, puzzles, and immersive team moments. Fully facilitated by Elluminate." },
  "battle-of-the-olympians": { title: "Battle of the Olympians Singapore | Team Building Event | Elluminate", description: "Epic Olympian-themed team competition in Singapore. Athletic rounds, mental games, and all-out team pride. Book for your corporate group with Elluminate." },
  // Virtual
  "amazing-race-virtual": { title: "Virtual Amazing Race Singapore | Remote Team Building | Elluminate", description: "Keep remote and hybrid teams engaged with a Virtual Amazing Race. Live digital challenges, real competition, facilitated by Elluminate from Singapore." },
  "the-gameshow-experience-virtual": { title: "Virtual Gameshow Team Building Singapore | Elluminate", description: "An interactive online game show for remote corporate teams. Fast laughs, high engagement, and easy participation. Book Singapore's top virtual host." },
  "the-nuclear-fallout-escape-room-virtual": { title: "Virtual Escape Room Singapore | Nuclear Fallout | Elluminate", description: "An immersive virtual escape room team building experience. Race to stop the nuclear fallout before time runs out. Book this online activity in Singapore." },
  "tomb-raider-king-treasure-hunt-virtual": { title: "Tomb Raider King Virtual Team Building Singapore | Elluminate", description: "A thrilling virtual adventure team building game. Solve puzzles, beat challenges, and escape the tomb together. Book this online activity with Elluminate." },
  "fit-in-your-team-virtual": { title: "Fit In Your Team Virtual Activity Singapore | Elluminate", description: "A fun and energising virtual fitness team building experience for remote corporate teams in Singapore. Boosts morale, energy, and team connection." },
  "the-great-zodiac-hunt-virtual": { title: "Great Zodiac Hunt Virtual Team Building Singapore | Elluminate", description: "A zodiac-themed virtual team challenge for corporate groups. Engaging, culturally rich, and perfect for diverse Singapore teams. Book with Elluminate." },
  "the-patriot-act-virtual": { title: "The Patriot Act Virtual Team Building Singapore | Elluminate", description: "A Singapore-themed virtual team building game full of national pride challenges and local knowledge. Perfect for National Day and cohort events." },
  "grand-christmas-delivery": { title: "Grand Christmas Delivery Virtual Team Building Singapore | Elluminate", description: "A festive virtual team building experience themed around Christmas. Perfect for year-end corporate events and remote holiday celebrations in Singapore." },
  // Retreats
  "overseas-retreats": { title: "Overseas Corporate Retreat Singapore | Team Retreat Planning | Elluminate", description: "End-to-end overseas corporate retreat planning from Singapore. Bali, Bangkok, Tokyo, and beyond. Elluminate handles everything from flights to facilitation." },
  "local-retreats": { title: "Local Corporate Retreat Singapore | Hotel Staycation Packages | Elluminate", description: "Singapore corporate retreats in 3 tiers: Staycation, Heritage, and Luxury. Fully planned, hotel-based retreats for teams of all sizes. Book now." },
  "incentive-travel": { title: "Incentive Travel Singapore | Corporate Reward Trips | Elluminate", description: "Reward your top performers with a fully managed incentive travel programme. Elluminate plans everything from criteria design to on-ground execution." },
  // Training
  "mbti": { title: "MBTI Workshop Singapore | Corporate Profiling Training | Elluminate", description: "MBTI personality profiling workshops for corporate teams in Singapore. Understand how your team thinks, communicates, and works best together." },
  "disc": { title: "DISC Assessment Singapore | Corporate Training Workshop | Elluminate", description: "DISC behavioural profiling sessions for Singapore corporate teams. Improve communication, reduce conflict, and build stronger working relationships." },
  "ocean": { title: "OCEAN Profiling Workshop Singapore | Corporate Training | Elluminate", description: "OCEAN personality model training for corporate teams in Singapore. Understand the Big Five traits and build a more self-aware, high-performing team." },
  "mass-talks": { title: "Corporate Mass Talks Singapore | Keynote & Seminar | Elluminate", description: "Engaging mass talks and keynote sessions for large corporate groups in Singapore. Motivational, insightful, and tailored to your team's goals." },
  "workshops": { title: "Corporate Workshops Singapore | Team Development Training | Elluminate", description: "Interactive corporate workshops in Singapore covering communication, leadership, collaboration, and team development. Customised for your team's goals." },
  "corporate-days": { title: "Corporate Day Singapore | Company Family Day Planning | Elluminate", description: "Full-day corporate event planning for company days and family days in Singapore. Activities, logistics, catering, and facilitation, all handled by Elluminate." },
  "youth-camps": { title: "Youth Camp Singapore | School Team Building Programme | Elluminate", description: "High-energy youth camps and school programmes in Singapore. Designed for student bonding, leadership development, and cohort-building experiences." },
  "wellness-events": { title: "Corporate Wellness Events Singapore | Elluminate", description: "Wellness days for corporate teams in Singapore. Yoga, mindfulness, nutrition, and team reset experiences. Fully facilitated by Elluminate." },
  "leadership-offsites": { title: "Leadership Offsite Singapore | Executive Team Retreat | Elluminate", description: "Strategy-focused leadership offsites for senior teams in Singapore. Premium venues, expert facilitation, and structured alignment sessions. Book with Elluminate." },
};

const blog = {
  "top-10-team-building-activities-singapore-2026": { title: "Top 10 Team Building Activities in Singapore (2026) | Elluminate", description: "The 10 best corporate team building activities in Singapore for 2026. Indoor, outdoor, and virtual ideas to engage your team." },
  "how-to-plan-amazing-race-company": { title: "How to Plan an Amazing Race for Your Company | Elluminate", description: "A practical guide to planning a successful corporate Amazing Race in Singapore. Logistics, themes, and pitfalls to avoid." },
  "indoor-vs-outdoor-team-building": { title: "Indoor vs Outdoor Team Building: Which Is Right for Your Team? | Elluminate", description: "Compare indoor vs outdoor corporate team building in Singapore. Pros, cons, and how to choose for your team's goals." },
};

/** @type {Route[]} */
const routes = [
  { path: "/", title: "Team Building Singapore | Corporate Events | Elluminate", description: "Singapore's trusted team building company. 1,000+ events for top companies, schools and government teams. Get a free quote today." },
  { path: "/about", title: "About Elluminate | Singapore's Eccentric Team Building Company", description: "Meet the eccentric team behind Singapore's most engaging corporate experiences. 1,000+ events delivered for top companies, schools, and government." },
  { path: "/portfolio", title: "Portfolio | Elluminate", description: "1,000+ corporate events in Singapore. Case studies, photos and videos of team building, dinner & dance, and awards ceremonies." },
  { path: "/blog", title: "Blog | Elluminate", description: "Insights, tips and inspiration for planning unforgettable team experiences in Singapore." },
  ...Object.entries(blog).map(([slug, v]) => ({ path: `/blog/${slug}`, type: "article", ...v })),
  ...Object.entries(services).map(([slug, v]) => ({ path: `/services/${slug}`, ...v })),
  // Redirect alias: /services/corporate-retreats consolidates to /services/overseas-retreats.
  // Canonical points to the destination so Google folds them; meta-refresh gives non-JS
  // crawlers a clear hop while the SPA <Navigate> handles JS-capable browsers.
  { path: "/services/corporate-retreats", title: services["overseas-retreats"].title, description: services["overseas-retreats"].description, redirectTo: "/services/overseas-retreats" },
];

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function renderHead(route) {
  const url = `${BASE}${route.path}`;
  const canonicalUrl = route.redirectTo ? `${BASE}${route.redirectTo}` : url;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const type = route.type || "website";
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta name="robots" content="index, follow" />`,
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
  if (route.redirectTo) {
    tags.unshift(`<meta http-equiv="refresh" content="0; url=${canonicalUrl}" />`);
  }
  return tags.join("\n    ");
}

function buildHtml(route) {
  let html = shell;
  // Strip existing tags we plan to replace so we don't ship duplicates.
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, "");
  // Inject fresh tags right after <head>.
  html = html.replace(/<head>/i, `<head>\n    ${renderHead(route)}`);
  return html;
}

let count = 0;
for (const route of routes) {
  const html = buildHtml(route);
  const outPath =
    route.path === "/"
      ? join(DIST, "index.html")
      : join(DIST, route.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  count++;
}
console.log(`[prerender-seo] wrote ${count} static HTML files with per-route SEO`);
