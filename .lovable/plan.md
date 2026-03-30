

## Plan: Update Sotong Game Page Images

### Overview
Replace image sources across 6 sections in the `sotong-game` entry (lines 4488–4585). Single file change, no layout or component modifications.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 4491)
- Replace `heroTeamCelebration` in `backgroundImage` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361478/SotongGame_7_cd8u9r.jpg"`

**2. Overview background** (line 4494)
- Replace `heroTeamCelebration` with same URL

**3. "Your Survival Journey"** — add `howItWorksImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361474/SotongGame_8_hqiimv.jpg"`

**4. "Optional Add-ons"** — add `addOnsImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361472/SotongGame_6_m15tpn.jpg"`

**5. "Ready for Sotong Game?" CTA** — add `ctaBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361469/SotongGame_5_yybybi.jpg"`

**6. "What Our Clients Say"** — add `testimonialBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361469/SotongGame_4_vphbd3.jpg"`

**7. Mini gallery** (line 4580) — replace 3 images with 5:
  - `SotongGame_19_gqbkjc.jpg`
  - `SotongGame_1_evo52u.jpg`
  - `SotongGame_13_sabaqz.jpg`
  - `SotongGame_11_r7nxph.heic`
  - `SotongGame_9_wzdts3.heic`

### Files modified
- `src/data/servicesData.ts` — Sotong Game entry image updates only

