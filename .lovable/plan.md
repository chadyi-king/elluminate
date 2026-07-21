## Plan

Same pattern as previous service logo uploads.

### 1. Upload assets
Create CDN pointers in `public/images/service-page-logos/`:
- `overseas-retreats.svg.asset.json` (from `user-uploads://overseas-retreats.svg`)
- `local-retreats.svg.asset.json` (from `user-uploads://local-retreats.svg`)
- `incentive-travel.svg.asset.json` (from `user-uploads://incentive-travel.svg`)

Via `lovable-assets create --file /mnt/user-uploads/<name>.svg --filename <name>.svg`.

### 2. Update `src/components/service-page/ServiceHeroSplit.tsx`
- Import the 3 new `.asset.json` pointers.
- Replace the inline SVG illustrations in the `switch` cases for `overseas-retreats` (line 207), `local-retreats` (line 235), and `incentive-travel` (line 268) with `renderLogo(<url>, <alt>)`.

No other files change.