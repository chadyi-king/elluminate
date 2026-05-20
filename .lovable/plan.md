## Update Google Reviews rating across the site

Change every "4.8 / 600+ Google Reviews" mention to "5.0 / 700+ Google Reviews", and add a small disclaimer noting the reviews come from our parent brand Team Elevate, linking to https://teamelevate.sg.

### Files to update

1. **src/components/SocialProofSection.tsx** (lines 489, 493)
   - `4.8 / 5.0` → `5.0 / 5.0`
   - `600+` → `700+`
   - Add disclaimer line below: *"Reviews from our parent brand, [Team Elevate](https://teamelevate.sg)"* (small, muted text, opens in new tab with `rel="noopener"`)

2. **src/components/service-page/ServiceTestimonialNew.tsx** (rating badge)
   - `4.8 / 600+ Verified Reviews` → `5.0 / 700+ Verified Reviews`
   - Add same disclaimer underneath the badge

3. **src/components/portfolio/TestimonialWall.tsx**
   - `4.8 / 600+ Verified Google Reviews` → `5.0 / 700+ Verified Google Reviews`
   - Add disclaimer below the heading

4. **src/pages/AboutPage.tsx** (lines 888, 1057)
   - `4.8` star badge → `5.0`
   - `600+ Reviews • 4.8-Star Google Rating` → `700+ Reviews • 5.0-Star Google Rating`
   - Add disclaimer near the badge

5. **src/components/StructuredData.tsx** (lines 36–37) — JSON-LD AggregateRating
   - `ratingValue: "4.8"` → `"5.0"`
   - `reviewCount: "600"` → `"700"`

### Disclaimer copy (consistent across all locations)

> *Reviews collected via our parent brand, [Team Elevate](https://teamelevate.sg).*

Rendered as small muted text (`text-xs text-muted-foreground` on light backgrounds, `text-white/60` on dark testimonial backgrounds). Link uses primary accent, `target="_blank"`, `rel="noopener noreferrer"`.

### Out of scope
No backend changes. No SEO/sitemap changes beyond the JSON-LD numeric update.