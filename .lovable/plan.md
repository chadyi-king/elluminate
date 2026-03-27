

## Plan: Update CSI-Bones Page — CTA Image, Testimonial Image, Gallery Expansion

### Overview
Three image updates across one data file and one component file. No layout/design changes.

### Changes

**1. `src/components/service-page/ServiceCTANew.tsx`** — Add optional `backgroundImage` prop
- Add `backgroundImage?: string` to the props interface
- Replace the hardcoded Unsplash URL (line 25) with `backgroundImage || <existing fallback>`

**2. `src/pages/ServicePage.tsx`** — Pass `backgroundImage` to `ServiceCTANew`
- Add `backgroundImage={service.ctaBackgroundImage}` to the mid-CTA render

**3. `src/data/servicesData.ts`** — CSI-Bones entry updates

| Field | Value |
|-------|-------|
| `ctaBackgroundImage` | `CSI_2_slu6jv.jpg` URL |
| `testimonialBackgroundImage` | `CSI_15_rxnuq4.heic` URL |
| 5 new gallery images | `CSI_14`, `CSI_13`, `CSI_12`, `CSI_9`, `CSI_10` URLs appended to existing 3 |

**4. `src/data/servicesData.ts`** — Add `ctaBackgroundImage` to the ServiceData interface

### Files modified
- `src/components/service-page/ServiceCTANew.tsx` — add optional `backgroundImage` prop
- `src/pages/ServicePage.tsx` — pass prop through
- `src/data/servicesData.ts` — interface + CSI-Bones data updates

