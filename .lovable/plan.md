## Plan

1. Upload the 3 uploaded SVGs as CDN assets in `public/images/service-page-logos/`:
   - `nuclear-fallout-escape.svg.asset.json`
   - `the-patriot-act.svg.asset.json`
   - `tomb-raider-king.svg.asset.json`

2. In `src/components/service-page/ServiceHeroSplit.tsx`:
   - Import the 3 new `.asset.json` pointers.
   - Replace the inline SVG illustrations in the `switch` cases for `the-nuclear-fallout-escape-room-virtual`, `the-patriot-act-virtual`, and `tomb-raider-king-treasure-hunt-virtual` with `renderLogo(...)` calls, matching the pattern used for the other virtual services.

No other files touched.
