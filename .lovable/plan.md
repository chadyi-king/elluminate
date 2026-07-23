
## Plan

Upload the 6 uploaded SVGs to `public/images/service-page-logos/` as CDN asset pointers, then wire them into `src/components/service-page/ServiceHeroSplit.tsx` via the existing `renderLogo` helper.

### Uploads (via `lovable-assets create`)
- `disc.svg` → `disc.svg.asset.json`
- `mbti.svg` → `mbti.svg.asset.json`
- `ocean.svg` → `ocean.svg.asset.json`
- `youth-camp.svg` → `youth-camp.svg.asset.json`
- `mass-talks.svg` → `mass-talks.svg.asset.json`
- `workshops.svg` → `workshops.svg.asset.json`

### Service slug mapping
| Upload | Service slug |
|---|---|
| mbti.svg | `mbti` |
| disc.svg | `disc` |
| ocean.svg | `ocean` |
| youth-camp.svg | `youth-camps` |
| mass-talks.svg | `mass-talks` |
| workshops.svg | `workshops` |

### Code change
In `src/components/service-page/ServiceHeroSplit.tsx`:
- Import the 6 new `.asset.json` pointers.
- Replace the existing inline SVG illustrations in the switch cases for `mbti`, `disc`, `ocean`, `youth-camps`, `mass-talks`, and `workshops` with `renderLogo(<asset>.url, <alt>)`.

No other pages, data files, or styles are changed.
