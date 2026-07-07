## Scope
Replace shared `retreatFaqs(...)` generator calls with dedicated inline `FAQ[]` arrays for 3 service slugs in `src/data/serviceContentQuality.ts`. No visual/component/layout changes.

## Slugs to update
- `overseas-retreats` (line 351)
- `local-retreats` (line 357)
- `incentive-travel` (line 363)

Each receives the 5 exact Q&As provided, verbatim.

## Out of scope
- FAQ accordion component/styling/animation
- All other slugs (still use generators)
- `retreatFaqs` helper stays (still used elsewhere if referenced)

## Verification
- `rg` confirms the 3 updated slugs no longer reference `retreatFaqs`
- `node --test scripts/service-content-upgrade.test.mjs` (each service still has 4–6 FAQs)
