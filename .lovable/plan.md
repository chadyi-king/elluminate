## Plan — Amazing Race hero logo

### 1. Upload the image
Create `public/images/service-page-logos/` and add the uploaded file as `amazing-race.png` (via `lovable-assets` → `.asset.json` pointer, matching how other service images are stored).

### 2. Replace the "ROUTE CARD" SVG in the hero
File: `src/components/service-page/ServiceHeroSplit.tsx`, `ServiceProp` component (lines ~24–44).

Currently the `amazing-race`, `amazing-race-virtual`, and `cultural-race` slugs share an inline SVG (yellow envelope + "ROUTE / CARD" text + wax seal). Split that case so:
- `case "amazing-race"` returns an `<img>` (280×280, same footprint as the SVG) pointing at the new logo URL, with `alt="Amazing Race"`.
- `case "amazing-race-virtual"` and `case "cultural-race"` keep the existing route-card SVG unchanged.

No other component, layout, animation, styling, or data change.

### 3. Verify
Load `/services/amazing-race` — the banner prop should now render the uploaded logo instead of the envelope/route-card icon. `/services/cultural-race` and `/services/amazing-race-virtual` should look identical to before.
