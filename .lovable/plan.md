

## Plan: SEO Enhancement + Google Ads Readiness

### What's Already Done
- SEO component with meta tags on all pages (rebranded to Elluminate)
- Structured data (Organization, LocalBusiness, WebSite, Service, FAQ, Breadcrumb schemas)
- Sitemap.xml with all routes
- robots.txt with sitemap directive
- Breadcrumbs on service pages
- Service-specific keywords for all slugs

### What's Missing
1. **Google Analytics (GA4)** is not installed despite having tracking ID G-R4S0RLKQ67 in memory. No gtag script anywhere.
2. **Google Ads conversion tracking** not set up (gtag for conversions).
3. **About page** has no breadcrumbs or structured data.
4. **Blog pages** have no structured data beyond what BlogPostPage adds.
5. **NotFound page** has no SEO component (noindex needed).
6. **Missing service slugs in sitemap**: `amongst-us`, `alice-in-motherland`, `battle-of-the-olympians` and other newer physical activities not listed.
7. **No `blog` route in sitemap**.
8. **Google Ads landing page best practices**: Need clear conversion tracking on CTA clicks (contact modal opens).

### Changes

**1. Add Google Analytics 4 + Google Ads gtag (`index.html`)**
- Add GA4 script with ID `G-R4S0RLKQ67` in `<head>`
- Add gtag conversion tracking snippet for Google Ads readiness
- Add `gtag('event', 'conversion', ...)` helper

**2. Add conversion event tracking (`src/contexts/ContactModalContext.tsx`)**
- Fire a `gtag` conversion event when the contact modal opens (this is the primary CTA across the site)
- This gives Google Ads a conversion signal for optimization

**3. About page SEO (`src/pages/AboutPage.tsx`)**
- Add `<Breadcrumbs>` (Home > About Us)
- Add `<OrganizationSchema>` structured data

**4. NotFound page SEO (`src/pages/NotFound.tsx`)**
- Add `<SEO>` with `robots: "noindex, nofollow"` to prevent indexing 404 pages

**5. Update sitemap (`public/sitemap.xml`)**
- Add missing service slugs: `amongst-us`, `alice-in-motherland`, `battle-of-the-olympians`
- Add `/blog` route
- Update `lastmod` dates to `2026-03-18`

**6. SEO component enhancement (`src/components/SEO.tsx`)**
- Add optional `robots` prop (defaults to `"index, follow"`) so NotFound can pass `"noindex, nofollow"`

### Files Modified

| File | Change |
|---|---|
| `index.html` | Add GA4 + Google Ads gtag script |
| `src/components/SEO.tsx` | Add optional `robots` prop |
| `src/contexts/ContactModalContext.tsx` | Fire gtag conversion event on modal open |
| `src/pages/AboutPage.tsx` | Add Breadcrumbs + OrganizationSchema |
| `src/pages/NotFound.tsx` | Add SEO with noindex |
| `public/sitemap.xml` | Add missing slugs + blog route, update dates |

