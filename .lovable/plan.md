

## Plan: Fix Destination Images, Location Tags, and Add Multi-Video Carousel

### 1. Fix incorrect destination images

**Local Retreats** — Replace Unsplash images for Sentosa Island, East Coast, Orchard/City Centre, and Changi & Jewel with accurate Singapore location photos. Also rename section title from "VENUES" to "POPULAR VENUES".

**Overseas Retreats** — Replace images for Vietnam (currently looks like Japan), Japan (incorrect), Cambodia, and Bintan with accurate destination photos from Unsplash.

**Incentive Travel** — Fix location tags from "Asia Pacific" to correct regions. The `ServiceDestinationsGrid` component hardcodes "Asia Pacific" for all cards. Will make this a per-destination field so Rome shows "Europe", Swiss Alps shows "Europe", Maldives shows "Indian Ocean", etc.

### 2. Fix region labels in ServiceDestinationsGrid

In `src/components/service-page/ServiceDestinationsGrid.tsx`, the region label is hardcoded as "Asia Pacific" (line ~85). Will:
- Add an optional `region` field to the `Destination` interface
- Render `dest.region` instead of hardcoded "Asia Pacific", defaulting to "Asia Pacific" if not provided

In `src/data/servicesData.ts`, add `region` to each incentive travel destination (e.g., "Europe" for Rome, Swiss Alps, London, Paris, Santorini; "Indian Ocean" for Maldives; "Asia Pacific" for Bali, Tokyo, Phuket).

### 3. Multi-video carousel for Overseas Retreats

Currently `ServiceVideoSection` renders a single video. Will create a new component or extend the existing one to support multiple videos.

**Approach**: Add a `videos` array field to the `videoSection` data (alongside existing single `videoUrl`). Create a new `ServiceVideoCarousel` component that renders 4-5 video thumbnails in a carousel layout (one featured + smaller thumbnails, or a horizontal carousel). Each video has a title, thumbnail, and video URL placeholder.

**Files changed**:

| File | Change |
|---|---|
| `src/components/service-page/ServiceDestinationsGrid.tsx` | Add optional `region` field to `Destination`, render dynamically instead of hardcoded "Asia Pacific" |
| `src/components/service-page/ServiceVideoCarousel.tsx` | New component: multi-video carousel with thumbnails and modal playback |
| `src/data/servicesData.ts` | Fix images for local-retreats (4 destinations), overseas-retreats (4 destinations); add `region` to incentive-travel destinations; change overseas-retreats `videoSection` to include `videos` array; rename local-retreats section title |
| `src/pages/ServicePage.tsx` | Render `ServiceVideoCarousel` when `videoSection.videos` array exists |

### Image Replacements

**Local Retreats** (Singapore-specific):
- Sentosa Island → Unsplash photo of Sentosa beach/resort area
- East Coast → Unsplash photo of East Coast Park Singapore
- Orchard / City Centre → Unsplash photo of Orchard Road Singapore
- Changi & Jewel → Unsplash photo of Jewel Changi Airport waterfall

**Overseas Retreats**:
- Vietnam → Unsplash photo of Ha Long Bay or Hoi An lanterns
- Japan → Unsplash photo of Japanese temple/cherry blossoms
- Cambodia → Unsplash photo of Angkor Wat
- Bintan → Unsplash photo of Bintan beach resort

**Incentive Travel region labels**:
- Bali → "Southeast Asia"
- Tokyo → "East Asia"
- Phuket → "Southeast Asia"
- Rome → "Europe"
- Swiss Alps → "Europe"
- Maldives → "Indian Ocean"
- London → "Europe"
- Paris → "Europe"
- Santorini → "Europe"

