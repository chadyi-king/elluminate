## Plan

Two small media swaps. No design or component changes.

### 1. Replace Elluminate Showreel thumbnail

`src/components/VideoSection.tsx` currently uses:
- Placeholder poster overlay: `background-image: url("/images/services/amazing-race/hero.jpg")`
- HTML5 `<video poster="/videos/vid-tmbnail.png">`

Steps:
- Add uploaded image as a Lovable asset:
  `lovable-assets create --file /mnt/user-uploads/elluminate-showreel-thumbnail.png --filename elluminate-showreel-thumbnail.png > src/assets/elluminate-showreel-thumbnail.png.asset.json`
- Import the pointer in `VideoSection.tsx` and use its `.url` for both:
  - the pre-play `backgroundImage` style
  - the `<video poster={...}>` attribute
- Keep the dark overlay, play button, title text, and animations untouched.

### 2. Replace broken `overseas-retreat-edrington.mov` with the uploaded MP4

The `.mov` file downloads instead of playing in-browser. All code already references `overseas-retreat-edrington.mp4` (see `src/data/servicesData.ts:659`), so only the file on disk is wrong.

Steps:
- Copy the uploaded MP4 into place: `cp /mnt/user-uploads/overseas-retreat-edrington.mp4 public/videos/overseas-retreat-edrington.mp4`
- Delete the stale `public/videos/overseas-retreat-edrington.mov`.
- Update `LOVABLE_MEDIA_ASSET_MAP.md` line 71 to list `.mp4` instead of `.mov`.

### Out of scope
- No component redesign, no changes to other videos, no data changes beyond the doc line.
