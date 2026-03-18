

## Plan: Retreat & Travel Service Pages Enhancement

### Changes Overview

**1. Overseas Retreats — Add video section & remove prices/duration from destination cards**

In `src/data/servicesData.ts` under `"overseas-retreats"`:
- Add a `videoSection` field with title like "See Our Retreats in Action" and subtitle about overseas retreat highlights (no actual video URL yet, will show "Video coming soon")
- In `destinationsGrid.destinations`, remove `priceFrom` and `duration` from all 9 destination entries

In `src/components/service-page/ServiceDestinationsGrid.tsx`:
- Make `priceFrom` and `duration` optional in the `Destination` interface
- Conditionally render the price badge and duration text only when present

**2. Local Retreats — Add destinations grid (Singapore venues)**

In `src/data/servicesData.ts` under `"local-retreats"`:
- Add a `destinationsGrid` with Singapore-based venue/location cards (e.g., Sentosa, Marina Bay, Heritage District, Changi area, Orchard/City Centre, East Coast) with Unsplash images, taglines, and activities — no prices or duration
- Remove prices from `packages` (change to "Get a Quote" or remove price field)

**3. Incentive Travel — Add destinations grid + expand testimonials to 6**

In `src/data/servicesData.ts` under `"incentive-travel"`:
- Add a `destinationsGrid` with aspirational global destinations: Southeast Asia (Bali, Thailand, Japan) plus European/Western destinations (Rome/Italy, Swiss Alps, Maldives, London, Paris) — no prices or duration
- Expand `testimonials` from 4 to 6 entries
- Remove prices from `packages` (change to "Get a Quote" or remove price field)

### Technical Details

- The `ServiceDestinationsGrid` component currently requires `priceFrom` and `duration` as mandatory fields. These will be made optional so cards render cleanly without them.
- The `videoSection` data shape already exists in the `ServiceData` interface and is rendered by `ServicePage.tsx` when present.
- All three services already have the `packages` array with explicit prices — those will be replaced with `undefined` or removed so the component falls back to a "Get a Quote" button (which the `ServiceHowItWorksWithPricing` component already supports when `price` is absent).

### Files Modified

| File | Change |
|---|---|
| `src/data/servicesData.ts` | Update overseas-retreats (add videoSection, remove prices/duration from destinations), update local-retreats (add destinationsGrid, remove package prices), update incentive-travel (add destinationsGrid with global destinations, add 2 testimonials, remove package prices) |
| `src/components/service-page/ServiceDestinationsGrid.tsx` | Make `priceFrom` and `duration` optional in interface, conditionally render |

