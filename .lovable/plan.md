## Plan

1. **Upload all Mass Talks images as CDN assets** (via `lovable-assets create --file /mnt/user-uploads/<name>`), writing pointer JSON to `public/images/services/mass-talks/`:
   - `hero.jpg.asset.json`
   - `how-it-works.jpg.asset.json`
   - `addons.jpg.asset.json`
   - `cta.jpg.asset.json`
   - `testimonial.jpg.asset.json`
   - `gallery-1.jpg.asset.json` through `gallery-5.jpg.asset.json`

2. **Update the `"mass-talks"` entry in `src/data/servicesData.ts`** (lines 13032–13083):
   - `hero.backgroundImage` → hero CDN URL
   - `howItWorksImage` → how-it-works CDN URL
   - `addOnsImage` → addons CDN URL
   - `ctaBackgroundImage` → cta CDN URL
   - `testimonialBackgroundImage` → testimonial CDN URL
   - `overview.backgroundImage` → hero CDN URL
   - **Populate `gallery: []`** with 5 entries pointing to gallery-1…gallery-5 CDN URLs (with descriptive alt text like "Mass talk keynote speaker addressing audience").

3. **No other changes** — copy, features, FAQs, pricing, testimonials, and flows remain untouched.

4. **Verify** — Run `bun run build` and confirm `/services/mass-talks` renders new hero, section backgrounds, and the 5-image gallery.
