## Plan

Same pattern as previous service logo uploads.

### 1. Upload assets
Create CDN pointers in `public/images/service-page-logos/` via `lovable-assets create --file /mnt/user-uploads/<name>.svg --filename <name>.svg`:
- `grand-christmas-delivery.svg.asset.json`
- `virtual-amazing-race.svg.asset.json` (for slug `amazing-race-virtual`)
- `great-zodiac-hunt.svg.asset.json` (for slug `the-great-zodiac-hunt-virtual`)
- `fit-in-your-team.svg.asset.json` (for slug `fit-in-your-team-virtual`)
- `gameshow-experience.svg.asset.json` (for slug `the-gameshow-experience-virtual`)

### 2. Update `src/components/service-page/ServiceHeroSplit.tsx`
- Import the 5 new `.asset.json` pointers.
- Replace inline SVG illustrations with `renderLogo(<url>, <alt>)` in these `switch` cases:
  - `amazing-race-virtual` (line 63)
  - `the-gameshow-experience-virtual` (line 220)
  - `fit-in-your-team-virtual` (line 242)
  - `the-great-zodiac-hunt-virtual` (line 265)
  - `grand-christmas-delivery` (line 364)

No other files change.
