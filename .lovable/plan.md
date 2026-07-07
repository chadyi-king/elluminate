## Scope
Replace 8 `virtualFaqs(...)` generator calls with dedicated inline `FAQ[]` arrays in `src/data/serviceContentQuality.ts`. No visual/component/layout changes. Data structure preserved.

## Slugs to update (lines)
- `amazing-race-virtual` (303)
- `fit-in-your-team-virtual` (309)
- `the-gameshow-experience-virtual` (315)
- `the-great-zodiac-hunt-virtual` (321)
- `nuclear-fallout-escape-room-virtual` (327)
- `the-patriot-act-virtual` (333)
- `tomb-raider-king-virtual` (339)
- `grand-christmas-delivery-virtual` (345)

Each gets the 5 exact provided Q&As, verbatim.

## Out of scope
- FAQ component/styling
- Any other slug

## Verification
- `rg "virtualFaqs\(" src/data/serviceContentQuality.ts` returns 0 matches
- `node --test scripts/service-content-upgrade.test.mjs` passes
