
## Plan

Upload the 3 uploaded SVGs to `public/images/service-page-logos/` as CDN asset pointers, then wire them into `src/components/service-page/ServiceHeroSplit.tsx` via the existing `renderLogo` helper.

### Uploads (via `lovable-assets create`)
- `leadership-offsites.svg` → `leadership-offsites.svg.asset.json`
- `wellness-events.svg` → `wellness-events.svg.asset.json`
- `corporate-days.svg` → `corporate-days.svg.asset.json`

### Service slug mapping
| Upload | Service slug |
|---|---|
| leadership-offsites.svg | `leadership-offsites` |
| wellness-events.svg | `wellness-events` |
| corporate-days.svg | `corporate-days` |

### Code change
In `src/components/service-page/ServiceHeroSplit.tsx`:
- Import the 3 new `.asset.json` pointers.
- Replace the inline SVG illustrations in the switch cases for `leadership-offsites`, `wellness-events`, and `corporate-days` with `renderLogo(<asset>.url, <alt>)`.

No other pages, data files, or styles are changed.
