

## Plan: Update Gameshow Experience Virtual Page Images

### Overview
Replace image sources across 4 sections in the `the-gameshow-experience-virtual` entry (lines 4993–5063). Single file change, no layout or component modifications.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 5000)
- Replace `virtualPlaceholderHero` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579600/TheGameShow_VTB_4_weyhxy.png"`

**2. Overview background** (line 5004)
- Replace `virtualPlaceholderHero` with same URL

**3. "Your Gameshow Experience"** — add `howItWorksImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579600/TheGameShow_VTB_7_swbfoo.png"`

**4. "Optional Add-ons"** — add `addOnsImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579597/TheGameShow_VTB_11_ye3umr.png"`

**5. "What Our Clients Say"** — add `testimonialBackgroundImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579596/TheGameShow_VTB_1_mbuxzv.png"`

### Notes
- No CTA or mini gallery changes requested (service has `hideMidCta: true` and no `miniGallery`)
- Only image sources change; all text, layout, and structure remain identical

### Files modified
- `src/data/servicesData.ts` — Gameshow Experience Virtual entry only

