

## Plan: Update Overseas Retreats Media Sources

### Overview
Swap 4 image URLs in the overseas-retreats service data entry. No layout, styling, or structural changes.

### Changes (single file: `src/data/servicesData.ts`)

**1. Hero banner** (line 440) + **Overview background** (line 455)
- Replace `overseasRetreatHero` with:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579581/Overseas_5_o60d5r.jpg"`

**2. "Your Retreat Journey" image** (~line 500 area)
- Add `howItWorksImage` property to the overseas-retreats entry:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579572/Overseas_11_droxvw.jpg"`

**3. "Optional Add-ons" image**
- Add `addOnsImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579587/Overseas_6_d3fry4.jpg"`

**4. Testimonial background**
- Add `testimonialBackgroundImage` property:
  `"https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579575/Overseas_12_gvbqfw.jpg"`
- Update `ServiceTestimonialNew` component to accept an optional `backgroundImage` prop (replacing the hardcoded Unsplash URL)
- Pass it from `ServicePage.tsx`

### Files modified
- `src/data/servicesData.ts` — add image URLs to overseas-retreats entry
- `src/components/service-page/ServiceTestimonialNew.tsx` — accept optional `backgroundImage` prop
- `src/pages/ServicePage.tsx` — pass `testimonialBackgroundImage` to testimonial component

