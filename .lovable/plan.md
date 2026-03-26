

## Plan: Update Amazing Race Media Sources

### Overview
Replace the hero image, video URL, how-it-works image, add-ons image, and mini gallery images in the Amazing Race service data. All changes are in `src/data/servicesData.ts` — only swapping URLs, no layout or style changes.

### Changes (single file: `src/data/servicesData.ts`)

**1. Hero banner** (line ~2969)
- Change `backgroundImage` from `amazingRaceHero` to the Cloudinary URL string
- Also update `overview.backgroundImage` (line ~2973) to match

**2. Video section** (line ~3134)
- Add `videoUrl` to the existing `videoSection` object:
  `videoUrl: "https://www.youtube.com/embed/m-YiH2zCxmE"`
  (converted from youtu.be share link to embed format)

**3. "Your Race Day Journey" image** (line ~2962 area)
- Add `howItWorksImage` property to the amazing-race entry with the Cloudinary URL

**4. "Optional Add-ons" image**
- Add `addOnsImage` property with the Cloudinary URL

**5. Mini gallery "Amazing Race in Action"** (lines ~3192-3198)
- Replace the 3 existing images with the 6 provided Cloudinary URLs

### Files modified
- `src/data/servicesData.ts` — media URL replacements only

