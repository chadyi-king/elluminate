## Plan — Replace Amazing Race logo with SVG + fix lead_id build error

### 1. Replace the Amazing Race hero logo asset
- Delete the previously uploaded PNG pointer: `lovable-assets delete --file public/images/service-page-logos/amazing-race.png.asset.json` (removes the CDN object and the pointer file).
- Upload the new SVG from `user-uploads://amazing-race-sl.svg` as `public/images/service-page-logos/amazing-race.svg.asset.json` via `lovable-assets create`.
- Update `src/components/service-page/ServiceHeroSplit.tsx` `case "amazing-race"` to point `<img src>` at the new SVG's CDN URL (keep 280×280 footprint, `object-contain`, `alt="Amazing Race"`).

Note: the SVG is loaded via `<img>` (not inline `<use>`), which is the case the migrate-to-assets skill explicitly allows for SVGs on the Lovable CDN.

### 2. Fix the `lead_id` TS error in `src/lib/leadSubmission.ts`
The generated Supabase type for `contact_submissions` has no `lead_id` column — the row is already identified by `id` (line 89 sets `id: submissionId`). Remove line 90 (`lead_id: submissionId,`) from the `payload` object. The tracking object at lines 98–106 keeps its own `lead_id` field (it's a dataLayer event, not a DB row), so no change there.

### 3. Verify
Build should pass. `/services/amazing-race` renders the new SVG logo in the hero prop slot; other services and the lead submission flow are unchanged.
