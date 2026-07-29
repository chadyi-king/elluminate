## Plan

Same pattern as the other service videos (Amazing Race, CSI-Bones, etc.).

### Uploads (via `lovable-assets create`)
- `archery-tag.mp4` → `public/videos/archery-tag.mp4.asset.json`
- `laser-tag.mp4` → `public/videos/laser-tag.mp4.asset.json`
- `archery-tag-tn.png` → `public/images/service-thumbnails/archery-tag-tn.png.asset.json`
- `laser-tag-tn.png` → `public/images/service-thumbnails/laser-tag-tn.png.asset.json`

### Code change — `src/data/servicesData.ts`
- `archery-tag` videoSection (lines ~7472-7473): replace `videoUrl: "/videos/elluminate-showreel.mp4"` and `thumbnailImage: ".../gallery-3.jpg"` with the resolved CDN URLs from the two archery asset pointers.
- `tag-tical-laser-teambuilding` videoSection (lines ~10250-10251): same swap using the laser tag asset URLs.

No other pages, components, or styles change; `ServiceVideoSection` already handles CDN MP4 playback.