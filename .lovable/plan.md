

## Plan: Update Minute to Win It Page Images

### Overview
Replace image sources across 6 sections in the `minute-to-win-it` entry (lines 4080–4177). Single file change.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 4083)
- Replace `heroTeamCelebration` in `backgroundImage` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361435/MTWI_2_m57wuz.jpg"`

**2. Overview background** (line 4086)
- Replace `heroTeamCelebration` with same URL

**3. "Your Game Night Flow"** — add `howItWorksImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361427/MTWI_12_vui3ae.jpg"`

**4. "Optional Add-ons"** — add `addOnsImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361426/MTWI_10_ofjakc.heic"`

**5. "Ready to Play?" CTA** — add `ctaBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361433/MTWI_4_e5fnzy.jpg"`

**6. "What Our Clients Say"** — add `testimonialBackgroundImage`:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361435/MTWI_3_hiohbs.jpg"`

**7. Mini gallery** (line 4172) — replace 3 images with 6:
  - `MTWI_1_yi4zue.heic`
  - `MTWI_11_tc1soi.jpg`
  - `MTWI_5_pzdfsb.jpg`
  - `MTWI_7_vlabzw.heic`
  - `MTWI_9_qfxt3q.heic`
  - `MTWI_6_fydbkh.jpg`

### Files modified
- `src/data/servicesData.ts` — Minute to Win It entry image updates only

