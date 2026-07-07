## Scope
Replace shared `activityFaqs(...)` generator calls with dedicated inline `FAQ[]` arrays for 6 more service slugs in `src/data/serviceContentQuality.ts`. No other files, no visual/component changes.

## Slugs to update
- `csi-bones`
- `amongst-us`
- `battle-of-the-olympians`
- `minute-to-win-it`
- `running-man` (Running Man Adventure)
- `treasure-heist`

Each gets the 5 exact Q&As provided, verbatim.

## Out of scope
- FAQ accordion component, styling, animation, layout
- All other slugs (still use generators)
- `activityFaqs` helper stays (still used by remaining equipment activities)

## Verification
- `rg` confirms the 6 updated slugs no longer call `activityFaqs`
- `node --test scripts/service-content-upgrade.test.mjs` (each service still has 4–6 FAQs)
- Spot-check one page in preview
