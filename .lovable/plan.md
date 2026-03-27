

## Plan: Update CSI-Bones Page Images

### Overview
Replace 6 image sources across 4 sections in the CSI-Bones service entry. Single file change, no layout or component modifications.

### Changes (`src/data/servicesData.ts`)

**1. Hero banner** (line 3235)
- Replace `heroCsiInvestigation` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361406/CSI_3_tt9yqa.jpg"`

**2. Overview background** (line 3239)
- Replace `heroCsiInvestigation` with same URL (used as overview bg too)

**3. "Your Investigation Journey" section image** — add `howItWorksImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361402/CSI_1_myrtls.jpg"`

**4. "Optional Add-ons" section image** — add `addOnsImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361411/CSI_6_y8pkaz.jpg"`

**5. Mini gallery images** (lines 3323-3327) — replace all 3:
  - `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361413/CSI_4_mezxfu.jpg"`
  - `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361409/CSI_5_t4xrjy.jpg"`
  - `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361403/CSI_2_slu6jv.jpg"`

### Files modified
- `src/data/servicesData.ts` — update image URLs in `csi-bones` entry

