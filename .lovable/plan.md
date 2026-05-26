## SEO Crawlability Fixes — Plan

Pure infrastructure/SEO work. **Zero changes to design, UI, components, navigation, or page content.**

### Current state (verified)

- `public/sitemap.xml` — exists, 60 URLs, hand-edited
- `public/robots.txt` — exists, correct, includes `Sitemap:` directive, no harmful blocks
- Prerender script already injects per-page `<title>`, canonical, description, OG into static HTML at build time
- `/services/amazing-race`, `/services/running-man`, `/services/team-building` — already indexable
- `/services/corporate-retreats` — does **not** exist (project uses `overseas-retreats`, `local-retreats`, `incentive-travel`)

### Changes

**1. Auto-generate the sitemap** (so future pages are included automatically)

- Create `scripts/generate-sitemap.ts` that builds `public/sitemap.xml` from:
  - Static routes in `src/App.tsx` (`/`, `/about`, `/portfolio`, `/blog`)
  - Service slugs from `src/data/siteScope.ts` (single source of truth — physical, equipment, virtual, retreats, training, plus the `team-building` hub and the corporate-events slugs already in the current sitemap)
  - Blog posts pulled from Supabase at build time (filtered to published)
  - Adds the `/services/corporate-retreats` URL pointing at its own redirect entry so it can be submitted to Search Console
- Sets `<lastmod>` to today on each regenerate for freshness signals
- Output path stays `public/sitemap.xml` — same public URL, same XML shape
- Wire into `package.json`: add `predev` and `prebuild` so it runs before every dev start and every production build, before the existing prerender step

**2. Add client-side 301-equivalent redirect for `/services/corporate-retreats`**

Lovable hosting does not process server-side redirect config files (no `_redirects`, `vercel.json`, etc.), so the redirect must be handled in the SPA router.

- Add a route in `src/App.tsx`: `/services/corporate-retreats` → renders a tiny `<Navigate to="/services/overseas-retreats" replace />` component
- Include `/services/corporate-retreats` in the generated sitemap with a canonical pointing to `/services/overseas-retreats` via the prerendered head (the existing prerender script will need a one-line addition mapping that route to the overseas-retreats SEO block + a `<meta http-equiv="refresh">` fallback for non-JS crawlers, so Google sees a clear consolidation signal)

**3. Robots.txt — no change needed**

Already correct. Verified during audit:
- Allows Googlebot, Bingbot, Twitterbot, facebookexternalhit, and `*`
- Only disallows `/thank-you-*` (intentional)
- Contains `Sitemap: https://elluminate.sg/sitemap.xml`

**4. Post-deploy verification** (run after the user publishes)

```text
curl -I https://elluminate.sg/sitemap.xml     # expect 200, content-type xml
curl -I https://elluminate.sg/robots.txt      # expect 200
curl -s https://elluminate.sg/sitemap.xml | head -40   # spot-check structure
curl -s https://elluminate.sg/services/amazing-race | grep -E '<title>|canonical'
curl -s https://elluminate.sg/services/corporate-retreats | grep -E 'refresh|canonical'
```

Then prompt the user to:
- Resubmit `sitemap.xml` in Google Search Console
- Click **Validate Fix** on "Alternative page with proper canonical tag"
- Request indexing on top ad landing pages

### Files touched

- **New**: `scripts/generate-sitemap.ts`
- **Edited**: `package.json` (add `predev` + `prebuild` entries, keep existing prerender call)
- **Edited**: `src/App.tsx` (add one `<Route>` with `<Navigate>` — no UI change)
- **Edited**: `scripts/prerender-seo.mjs` (add entry for `/services/corporate-retreats` so its static HTML carries the canonical + refresh)
- **Auto-regenerated**: `public/sitemap.xml` (now produced by the generator)

### Out of scope

- robots.txt edits (already correct)
- Any design, component, navigation, or copy changes
- Creating a real `/services/corporate-retreats` landing page (redirect-only, per your choice)
- Google Ads dashboard troubleshooting

### Risks

- Build time increases by ~2–5 seconds for the Supabase fetch in the sitemap generator. If Supabase is unreachable at build time, the generator falls back to static routes only and logs a warning (build does not fail).
- The corporate-retreats redirect is client-side. JS-capable crawlers (Googlebot) follow it as a soft 301; non-JS crawlers see the `<meta refresh>` + canonical. This is the strongest signal available without server-side hosting config.