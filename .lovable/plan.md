

## Plan: Update Running Man Adventure Page Images

### Overview
Replace image sources across 6 sections in the `running-man` entry. Single file change, no layout or component modifications.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 4375)
- Replace `heroCulturalRace` in `backgroundImage` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361444/RunningMan_10_x6owst.heic"`

**2. Overview background** (line 4378)
- Replace `heroCulturalRace` with same URL

**3. "Your Running Man Journey"** — add `howItWorksImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361441/RunningMan_2_h7dp74.jpg"`

**4. "Optional Add-ons"** — add `addOnsImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599632/RunningMan_19_os8wfv.jpg"`

**5. "Ready for Running Man?" CTA** — add `ctaBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361442/RunningMan_6_esz34i.heic"`

**6. "What Our Clients Say"** — add `testimonialBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599625/RunningMan_16_tbkpld.jpg"`

**7. Mini gallery** (line 4464) — replace 3 images with 7:
  - `RunningMan_17_dfqtds.heic`
  - `RunningMan_21_ncjbhp.jpg`
  - `RunningMan_22_f0ka8y.heic`
  - `RunningMan_13_m2kg4e.jpg`
  - `RunningMan_8_afq55t.heic`
  - `RunningMan_1_rqyx9i.jpg`
  - `RunningMan_7_bqkr2b.heic`

### Files modified
- `src/data/servicesData.ts` — Running Man entry image updates only

