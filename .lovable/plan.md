## Scope
Replace shared `trainingFaqs(...)` / `corporateFaqs(...)` generator calls with dedicated inline `FAQ[]` arrays for 9 service slugs in `src/data/serviceContentQuality.ts`. No visual/component/layout changes. The `FAQ[]` structure is preserved so future slugs can add their own arrays the same way.

## Slugs to update
- `mbti` — MBTI Profiling
- `disc` — DISC Assessment
- `ocean` — OCEAN Profiling
- `mass-talks`
- `workshops`
- `youth-camps` (verify slug exists; if not, skip and flag)
- `corporate-days`
- `wellness-events`
- `leadership-offsites`

Each gets the 5 exact Q&As provided, verbatim.

## Out of scope
- FAQ accordion component/styling/animation
- Any other slugs (still use generators)
- Generator helpers stay in place

## Verification
- `rg "trainingFaqs\|corporateFaqs" src/data/serviceContentQuality.ts` shows no matches for the 9 updated slugs
- `node --test scripts/service-content-upgrade.test.mjs` passes
