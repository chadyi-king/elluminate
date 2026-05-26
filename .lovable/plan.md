## Remove `/services/corporate-retreats` from sitemap

Redirect URLs shouldn't be in the sitemap — only canonical, indexable pages.

### Changes

1. **`scripts/generate-sitemap.mjs`** — Remove the `"corporate-retreats"` entry from the service slugs array (and its comment). Next build will regenerate without it.

2. **`public/sitemap.xml`** — Remove the `<url>` block for `/services/corporate-retreats` immediately so the live sitemap is correct before the next build.

### Unchanged

- The `<Navigate>` 301-equivalent redirect in `src/App.tsx` stays — `/services/corporate-retreats` still resolves to `/services/overseas-retreats` for any inbound traffic.
- The prerender entry in `scripts/prerender-seo.mjs` stays as a safety net for non-JS crawlers hitting the URL directly.
- `robots.txt` unchanged.

### Verification

After publish: `curl -s https://elluminate.sg/sitemap.xml | grep corporate-retreats` should return nothing. Then resubmit sitemap in Search Console.
