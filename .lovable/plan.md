## SEO indexing audit — root causes

I checked the live site, your sitemap, your code, and Google Search Console. The site is reachable (every page returns 200 OK), so ad clicks **are** physically able to load the pages. The Search Console warnings come from real bugs in the code plus a normal "new site" crawl backlog.

### What's actually wrong

**1. Wrong canonical tag on most pages (biggest issue → causes "Alternative page with proper canonical tag")**

`src/components/SEO.tsx` defaults `canonical` to `https://elluminate.sg` (the homepage). Any page that doesn't pass its own `canonical` prop tells Google "I'm a duplicate of the homepage — don't index me."

Pages currently missing their canonical:
- `/` (Index.tsx) — defaults to homepage, fine by accident, but should be explicit
- `/about` (AboutPage.tsx)
- `/portfolio` (PortfolioPage.tsx)
- `/blog` (BlogPage.tsx)
- `/blog/:slug` (BlogPostPage.tsx) — every single blog post inherits the homepage canonical

Service pages and the team-building hub already set their own canonical correctly.

**2. Broken `robots` meta on Thank-You and 404 pages**

`ThankYouPage.tsx` and `NotFound.tsx` set `robots="n, nofollow"`. The `n` is a typo — it should be `noindex, nofollow`. Right now these pages are accidentally indexable.

**3. Crawl backlog (explains most "Not indexed" warnings)**

Search Console has only discovered 5 of your 32 sitemap URLs. The "28 not indexed" number on your dashboard is mostly pages Google simply hasn't crawled yet, plus the alt-canonical issue above folding /about, /portfolio, /blog into the homepage.

**4. "Page with redirect" / "Not found (404)" warnings**

These are normal and not blocking ads:
- `http://elluminate.sg/` → redirects to `https://` (correct behavior, Google just lists it)
- 404s are likely old URLs from before the rebrand (e.g. previous Team Elevate paths) — Google retains them for a while.

**5. Ads not converting to clicks — separate from indexing**

Indexing warnings do **not** stop Google Ads traffic. If users can't reach the site from ads, the cause is usually one of:
- Ad disapproved in Google Ads (check the Ads dashboard for status)
- Wrong final URL in the ad (typo, old domain)
- Tracking template appending bad parameters
- Account-level billing/suspension

I can't see inside your Google Ads account. After I fix the SEO bugs below, please share the **destination URL** of one ad that isn't getting clicks, plus the **ad status** from Google Ads — I'll diagnose from there.

---

## Fixes to apply

### A. Add explicit canonical to every page (fixes the alt-canonical warning)

| File | Add canonical |
|---|---|
| `src/pages/Index.tsx` | `https://elluminate.sg/` |
| `src/pages/AboutPage.tsx` | `https://elluminate.sg/about` |
| `src/pages/PortfolioPage.tsx` | `https://elluminate.sg/portfolio` |
| `src/pages/BlogPage.tsx` | `https://elluminate.sg/blog` |
| `src/pages/BlogPostPage.tsx` | `https://elluminate.sg/blog/${post.slug}` (dynamic) |

### B. Fix the typo on no-index pages

In `src/pages/ThankYouPage.tsx` and `src/pages/NotFound.tsx`:
- Change `robots="n, nofollow"` → `robots="noindex, nofollow"`

### C. After deploy, in Google Search Console

1. Open **Pages → "Not indexed" → "Alternative page with proper canonical tag"** — click **Validate Fix** on the affected URLs.
2. Open the **Sitemaps** report and resubmit `https://elluminate.sg/sitemap.xml` so Google re-crawls the 27 URLs it hasn't discovered yet.
3. For high-priority service pages, use the **URL Inspection** tool → **Request Indexing** (one by one, max ~10/day).

### Out of scope

- I won't touch the sitemap (it's already complete and correct).
- I won't change service-page canonicals (they're already set per-page).
- Ads troubleshooting needs info from your Google Ads dashboard — I'll do that in a follow-up once you share an ad URL and its status.
