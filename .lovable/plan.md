

## Plan: Update Monopoly Dash Page Images

### Overview
Replace image sources across 6 sections in the `monopoly-dash` entry. Single file change, no layout or component modifications.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 4173)
- Replace `heroAmazingRaceAlt` in `backgroundImage` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_4_jkl1xu.jpg"`

**2. Overview background** (line 4176)
- Replace `heroAmazingRaceAlt` with same URL

**3. "Your Monopoly Dash Journey"** — add `howItWorksImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_5_msxabk.heic"`

**4. "Optional Add-ons"** — add `addOnsImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361421/MonopolyDash_2_sq8gpp.jpg"`

**5. "Ready to Dash?" CTA** — add `ctaBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361426/MonopolyDash_6_e304eq.heic"`

**6. "What Our Clients Say"** — add `testimonialBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_3_kq2pxe.heic"`

**7. Mini gallery** (line 4262) — replace 3 images with 4:
  - `MonopolyDash_1_rlwgie.jpg`
  - `MonopolyDash_9_k7krlz.jpg`
  - `MonopolyDash_7_vgqtey.heic`
  - `MonopolyDash_3_kq2pxe.heic`

### Files modified
- `src/data/servicesData.ts` — Monopoly Dash entry image updates only

