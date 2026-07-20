## Plan — Upload 5 service logo SVGs and swap them into the hero

### Filename → service slug mapping
| Upload | Service slug in `ServiceHeroSplit.tsx` |
| --- | --- |
| `amongst-us.svg` | `amongst-us` |
| `battle-of-the-olympians.svg` | `battle-of-the-olympians` |
| `sotong-game.svg` | `sotong-game` |
| `treasure-heist.svg` | `treasure-heist` |
| `running-man.svg` | `running-man` |

### 1. Upload each SVG as a Lovable Asset
For each file:
```
lovable-assets create --file /mnt/user-uploads/<name>.svg \
  --filename <name>.svg \
  > public/images/service-page-logos/<name>.svg.asset.json
```
Pointer files land next to the existing logos (amazing-race, cultural-race, etc.). No binaries copied into the repo.

### 2. Swap the hero visual in `src/components/service-page/ServiceHeroSplit.tsx`
For each of the 5 `case` blocks, replace the current inline SVG illustration with the same `<img>` pattern used for the previously migrated logos:
- Import the new `.asset.json` pointer at the top of the file.
- Render `<img src={<pointer>.url} alt="<Service Name>" className="... object-contain" />` inside the existing illustration footprint.
- Preserve each service's existing background color, blob, and layout wrappers.

### 3. Verify
- Visit `/services/amongst-us`, `/services/battle-of-the-olympians`, `/services/sotong-game`, `/services/treasure-heist`, `/services/running-man` and confirm each hero shows the new logo with no layout regression.
- `bun run build` should still pass.
