## Plan — Upload 6 service logo SVGs and swap them into the hero

### Filename → service slug mapping
| Upload | Service slug (case in `ServiceHeroSplit.tsx`) |
| --- | --- |
| `cultural-race.svg` | `cultural-race` |
| `builders-cross.svg` | `builder-cross` (note: code uses singular) |
| `csi-bones.svg` | `csi-bones` |
| `monopoly-dash.svg` | `monopoly-dash` |
| `mtwi.svg` | `minute-to-win-it` |
| `alice-in-motherland.svg` | `alice-in-motherland` |

### 1. Upload each SVG as a Lovable Asset
For each file, run from the sandbox:
```
lovable-assets create --file /mnt/user-uploads/<name>.svg \
  --filename <name>.svg \
  > public/images/service-page-logos/<name>.svg.asset.json
```
Pointer files land next to the existing `amazing-race.svg.asset.json` in `public/images/service-page-logos/`. No binaries copied into the repo — matches how Amazing Race was done last turn.

### 2. Swap the hero visual in `src/components/service-page/ServiceHeroSplit.tsx`
For each of the six `case` blocks listed above, replace the current SVG/illustration markup with the same `<img>` pattern used for `amazing-race`:
- Import the new `.asset.json` pointer at the top of the file.
- Render `<img src={<pointer>.url} alt="<Service Name>" className="... object-contain" />` inside the existing 280×280 (or equivalent) footprint, keeping surrounding wrapper / animation / positioning classes intact.
- Preserve each service's existing background color, blob, and layout — only the inner illustration changes.

### 3. Verify
- Visit `/services/cultural-race`, `/services/builder-cross`, `/services/csi-bones`, `/services/monopoly-dash`, `/services/minute-to-win-it`, `/services/alice-in-motherland` and confirm each hero shows the new logo at the correct size with no layout regression.
- `bun run build` should still pass.

### Notes / assumptions
- Slug spelling for Builder's Cross in the codebase is `builder-cross` (singular). I'll upload the pointer as `builders-cross.svg.asset.json` (matches your upload's filename) but wire it into the `case "builder-cross"` branch.
- `mtwi.svg` will be stored as `public/images/service-page-logos/mtwi.svg.asset.json` and used inside `case "minute-to-win-it"`.
- No other service pages, data files, or thumbnails are touched.
