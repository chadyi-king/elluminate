# Fix Broken Cloudinary Assets Across The Site

Cloudinary (`res.cloudinary.com/dk28ny4yj/...`) is no longer used. ~380+ broken URLs span 11 files. All replacement media now lives under `public/images/` and `public/videos/` and is organised by service slug per `LOVABLE_MEDIA_ASSET_MAP.md`.

## Scope (files touched)

| File | Cloudinary refs | Replacement strategy |
|---|---|---|
| `src/data/servicesData.ts` | 294 | Per-slug mapping to `/images/services/<slug>/{hero,how-it-works,addons,cta,testimonial,gallery-N}.jpg` |
| `src/components/SocialProofSection.tsx` | 72 | Map each logo URL to `/images/client-logos/<file>` by lowercased basename |
| `src/pages/AboutPage.tsx` | 56 | Map to `/images/about/about-1..6.jpg` + relevant service hero images |
| `src/pages/TeamBuildingHubPage.tsx` | 5 | Map to relevant `/images/services/<slug>/hero.jpg` |
| `src/components/ServicesSection.tsx` | ~18 | Each card maps to `/images/services/<slug>/hero.jpg` |
| `src/components/GallerySection.tsx` | 12 | Map to `/images/services/<slug>/gallery-N.jpg` |
| `src/components/CaseStudiesSection.tsx` | 4 | Map to `/images/services/<slug>/hero.jpg` |
| `src/components/OurTeam.tsx` | 12 | No local team photos exist → use initials avatar fallback (`ui-avatars` style data URL or an inline SVG) |
| `src/components/VideoSection.tsx` | 3 | Use `/videos/elluminate-showreel.mp4` + a local poster (`/images/services/amazing-race/hero.jpg`) |
| `index.html` | 1 | Remove `<link rel="preconnect" href="https://res.cloudinary.com">` |
| `src/lib/media.ts` | 4 | Leave helpers as no-op pass-through (already returns input when not a Cloudinary URL); no behavioural change needed |

## Mapping rules

Inside `servicesData.ts`, every service object has a `slug`. Within that block, replace by semantic role:

```text
backgroundImage / hero            → /images/services/<slug>/hero.jpg
howItWorksImage                   → /images/services/<slug>/how-it-works.jpg
addOnsImage                       → /images/services/<slug>/addons.jpg
ctaBackgroundImage                → /images/services/<slug>/cta.jpg
testimonialBackgroundImage        → /images/services/<slug>/testimonial.jpg
gallery items (array order)       → /images/services/<slug>/gallery-1.jpg … gallery-7.jpg (cycled if >7)
video thumbnailImage              → /images/services/<slug>/hero.jpg (used as poster)
videoUrl                          → mapped where a local file exists:
    Amazing Race / Decathlon         → /videos/amazing-race-decathlon.mp4
    Overseas (Batam/Bintan/KL/Edrington) → matching /videos/overseas-retreat-*.mp4
    Anything else                   → drop the videoUrl prop so the section renders the poster only
```

Client logos: extract the Cloudinary public-id (e.g. `DBS_Bank_Logo_p1zixs.png`), lowercase it, find the matching file in `public/images/client-logos/`. The folder already contains lowercased equivalents for every logo currently referenced.

## Implementation approach

Because the data file is 14k lines with 294 URLs, the edit is done by a one-shot Node script (run, then discarded) that:

1. Parses `servicesData.ts` slug-by-slug, applying the semantic-role mapping above.
2. Cycles gallery URLs in declaration order through `gallery-1.jpg`…`gallery-7.jpg`.
3. Writes the file back in place.

The smaller files (`SocialProofSection`, `GallerySection`, `CaseStudiesSection`, `ServicesSection`, `OurTeam`, `VideoSection`, `AboutPage`, `TeamBuildingHubPage`, `index.html`) are edited directly with line replacements after the script runs.

## SEO preservation

- No `alt` text, headings, meta titles/descriptions, canonicals, JSON-LD or page copy are modified.
- All `<img>` tags keep their existing `alt`, `loading`, `width`, `height` attributes.
- Sitemap and structured data are untouched.

## Verification

- `rg "res\.cloudinary\.com" src public index.html` → must return 0 hits.
- `bun run build` → must exit 0.
- Manually spot-check the preview: homepage hero/services/gallery, `/services/amazing-race`, `/services/alice-in-motherland`, `/services/minute-to-win-it`, `/about`, `/team-building` for visible images.

## Out of scope

- No new media generation, cropping, or compression.
- No layout, copy, or component refactors.
- No removal of `src/lib/media.ts` (kept as harmless pass-through for any stray future URLs).
