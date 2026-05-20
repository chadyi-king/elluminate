## Real root cause — the whole site is invisible to non-JS crawlers

I crawled all 60 sitemap URLs the way Google, Bing, LinkedIn, Facebook, and ad quality bots do (no JavaScript). Every single page returns **the same static HTML** from `index.html`:

| Check | What I found on every URL |
|---|---|
| HTTP status | ✅ 200 OK |
| `<title>` | ❌ Always "Team Building Singapore \| Corporate Events \| Elluminate" |
| `<link rel="canonical">` | ❌ Missing (never rendered) |
| `<meta name="description">` | ❌ Always the homepage description |
| `<meta name="robots">` | ❌ Missing |
| Per-page Open Graph | ❌ Missing |
| JSON-LD schema | ❌ Missing |

The per-route `<SEO>` component using `react-helmet-async` only runs **after** React hydrates in a real browser. Crawlers that don't execute JS — which includes Facebook, LinkedIn, WhatsApp, Slack, Twitter, Bingbot's first pass, and many of Google's own indexing/ads-quality bots — see 60 identical pages. Google then folds them all into "Alternative page with proper canonical tag" and refuses to index them. **This is why your ads pages aren't being read** and why the previous canonical-prop fix didn't move the needle — the canonicals are correct in code, but never make it into the served HTML.

This is the single biggest SEO problem the site has. Everything else is downstream.

## The fix — prerender every route at build time

Add a build step that visits each route in a headless browser, lets React/Helmet render, then writes the result to a real static HTML file at the matching path (`/about/index.html`, `/services/amazing-race/index.html`, etc.). After that, crawlers fetching `/about` get a fully-formed page with the correct title, canonical, description, OG tags, and JSON-LD — no JS required.

I'll use **`vite-plugin-prerender`** (Puppeteer-based, well-supported with Vite + React Helmet). The routes to prerender come straight from the sitemap so the two stay in lockstep.

### Technical changes

1. **Install** `vite-plugin-prerender` as a dev dependency.
2. **`vite.config.ts`** — add the plugin in `build` mode only, with the route list parsed from `public/sitemap.xml` so we never drift. Configure it to wait for Helmet to inject head tags before snapshotting.
3. **`src/main.tsx`** — small change: use `hydrateRoot` when prerendered HTML is present, `createRoot` otherwise. Standard react-snap-style pattern.
4. **`index.html`** — keep current head as the fallback for routes that somehow miss prerendering; no other change.
5. **Sanity check** — after the first prerendered build, re-run the same headless-curl audit. Every URL should now show its own title, canonical, description, and robots tag.

### What this fixes

- ✅ "Alternative page with proper canonical tag" in Search Console — gone, because each URL now has a unique canonical and unique content.
- ✅ LinkedIn / Facebook / Slack / WhatsApp link previews — finally show the right page title and description.
- ✅ Google Ads landing-page quality — bots can now read the actual landing page content, which can improve Quality Score and lower CPC.
- ✅ Bing indexing — Bingbot will see real pages, not 60 duplicates.
- ✅ The 28 "not indexed" URLs in GSC become indexable after the next crawl.

### Post-deploy steps (for you, in Google Search Console)

1. **Sitemaps** → resubmit `https://elluminate.sg/sitemap.xml`.
2. **Pages → "Alternative page with proper canonical tag"** → **Validate Fix**.
3. **URL Inspection** → request indexing on your top 5 ad landing pages.
4. **Re-share** any LinkedIn/Facebook ads or posts so they refetch the new OG tags (use the LinkedIn Post Inspector / Facebook Sharing Debugger to force a refresh).

### Out of scope

- Sitemap edits (already complete and accurate).
- Per-page copy/SEO content rewrites (the `<SEO>` props already exist per route — they just weren't being served).
- Google Ads dashboard troubleshooting — still need a sample ad's final URL + status from you if clicks remain low after this ships.

### Risk / things to watch

- Prerendering adds ~30–60s to the build. Worth it.
- Routes with dynamic content from Supabase (blog posts) will be snapshotted at build time. That's fine for SEO — the page rehydrates with fresh data on the client. New blog posts published between deploys will still work (just not prerendered until next deploy).
- If any route crashes during prerendering, the plugin falls back to serving the SPA shell for that one URL — no worse than today.
