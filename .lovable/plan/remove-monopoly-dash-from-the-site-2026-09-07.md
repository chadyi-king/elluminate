# Remove Monopoly Dash from the site

Fully erase the Monopoly Dash programme, keeping all general team-building photography and every other programme untouched.

## What changes for visitors

- The Monopoly Dash page no longer exists. Anyone opening its old web address is sent to the main Team Building page instead of hitting an error.
- Monopoly Dash disappears from the activity grid, the navigation and footer lists, related-programme suggestions, the portfolio and behind-the-scenes strips, and the search/sitemap records.
- Counts on the Team Building page are corrected (24 activities becomes 23, "12 story-led physical experiences" becomes 11).
- The Monopoly Dash logo, video and its branded character/prop artwork are deleted. The general event and participant photos in its gallery folder stay in place, since other sections use that kind of imagery.

## Files touched

Data and lists
- `src/data/siteScope.ts` — remove from `physicalTeamBuildingServices` and `activityPageBatchOneSlugs`
- `src/data/servicesData.ts` — delete the whole `monopoly-dash` entry
- `src/data/serviceCardCatalog.ts`, `serviceQuickFacts.ts`, `serviceGalleryMedia.ts`, `serviceExperienceContent.ts`, `servicePageBlueprints.ts` (entries plus the three gallery-pair rows), `serviceContentQuality.ts` (own entry plus three related-slug arrays, replaced with existing sibling slugs so those lists keep their length), `serviceCommercialProfiles.js`, `serviceActorAssets.ts` (entry + three imports), `seoRoutes.js`

Pages and components
- `src/pages/ServicePage.tsx` — remove the SEO metadata row
- `src/pages/TeamBuildingHubPage.tsx` — remove the activity card, the nav link, the gallery image reference, and update the counts
- `src/components/portfolio/RealEventPortfolio.tsx`, `src/components/portfolio/BehindTheScenes.tsx` — remove the Monopoly items (use another programme's existing image where a tile would otherwise be missing, or drop the tile so the grid closes up)

Routing and SEO
- `src/App.tsx` — add `/services/monopoly-dash` → `/services/team-building` redirect above the catch-all
- `public/_redirects` — add the matching 301
- `public/sitemap.xml` and `public/llms.txt` — remove the entry

Assets deleted
- `public/images/service-page-logos/monopoly-dash.svg.asset.json`
- `public/videos/monopoly-dash.mp4.asset.json`
- `public/images/service-thumbnails/monopoly-dash-tn.jpg`
- `src/assets/service-characters/batch-01/monopoly-dash-actor-{1,2,3}.webp`, `src/assets/service-props/monopoly-dash-hero-prop.webp`

Kept: `public/images/services/monopoly-dash/*.jpg` (generic event/participant photos referenced by portfolio and hub sections). `MoneyStrip.tsx` divider stays — it is a shared strategy-theme divider, only its "Monopoly-themed" comment wording is updated.

## Verification

Re-run a full-project search for `monopoly` in all casings, run the typecheck, and load the home page, Team Building hub, portfolio page and the old Monopoly URL in the browser to confirm the redirect works and no console errors, broken images or empty cards appear.
