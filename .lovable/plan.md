

## Plan: Update Builders Cross Page Images

### Overview
Replace image sources across 6 sections in the `builder-cross` entry. Single file change.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 3876)
- Replace `heroAdventureChallenge` in `backgroundImage` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361397/BuilderCross_1_zkduwz.jpg"`

**2. Overview background** (line 3879)
- Replace `heroAdventureChallenge` with same URL

**3. "Your Build Journey"** — add `howItWorksImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361400/BuilderCross_5_ilekr6.heic"`

**4. "Optional Add-ons"** — add `addOnsImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361399/BuilderCross_3_xq5fkd.heic"`

**5. "Ready to Build Together?" CTA** — add `ctaBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361406/BuilderCross_6_ibyshz.jpg"`

**6. "What Our Clients Say"** — add `testimonialBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361402/BuilderCross_9_fphwj5.jpg"`

**7. Mini gallery** (line 3965) — replace 3 images with 4:
  - `BuilderCross_8_vovefn.jpg`
  - `BuilderCross_2_m6lujd.heic`
  - `BuilderCross_10_wvtpdm.jpg`
  - `BuilderCross_7_cgexuc.jpg`

### Files modified
- `src/data/servicesData.ts` — Builders Cross entry image updates only

