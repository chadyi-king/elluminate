## Problem

Two bugs prevent the Amazing Race (and any other service using MP4 videos) `videoSection` from displaying:

1. **Video file missing at literal path.** `/videos/amazing-race.mp4` was externalized to the Lovable CDN — only `public/videos/amazing-race.mp4.asset.json` exists on disk. The raw path returns 404, so the video never loads. Same applies to `builders-cross.mp4`, `monopoly-dash.mp4`, `running-man.mp4`, `sotong-game.mp4`.
2. **`ServiceVideoSection` uses `<iframe>` for playback.** It's built for YouTube-style embeds, so even with a valid MP4 URL it can't play the file. It also has no `poster` fallback, and the thumbnail path in the data file (`/images/service-thumbnails/amazing-race-tn.png`) is correct and does exist — the thumbnail should already show. Need to confirm on preview why it's not appearing (likely the component works, but the "video coming soon" text is misleading, or the `isPlaying` click does nothing useful).

## Fix

### 1. `src/components/service-page/ServiceVideoSection.tsx`
- Detect MP4/local video URLs vs iframe-embed URLs (YouTube/Vimeo). Rule: if `videoUrl` ends in `.mp4`/`.webm`/`.mov` OR starts with `/__l5e/` OR starts with `/videos/`, render `<video controls playsInline autoPlay poster={thumbnailImage}><source src=... /></video>`. Otherwise keep the existing `<iframe>` path.
- Keep the current thumbnail + play-button overlay unchanged.

### 2. `src/data/servicesData.ts`
For each service `videoSection` whose `videoUrl` points at an externalized asset, swap the string literal for the CDN URL from the corresponding `.asset.json` pointer. Affected entries (identified by matching `videoUrl` to files that now only exist as `.asset.json`):
- `amazing-race.mp4` → CDN URL from `public/videos/amazing-race.mp4.asset.json`
- `builders-cross.mp4` → CDN URL from `public/videos/builders-cross.mp4.asset.json`
- `monopoly-dash.mp4` → CDN URL from `public/videos/monopoly-dash.mp4.asset.json`
- `running-man.mp4` → CDN URL from `public/videos/running-man.mp4.asset.json`
- `sotong-game.mp4` → CDN URL from `public/videos/sotong-game.mp4.asset.json`

`mtwi.mp4` stays as `/videos/mtwi.mp4` (still a real file on disk).

Implementation approach: import each `.asset.json` pointer at the top of `servicesData.ts` and reference `pointer.url`, matching the pattern already used by `VideoSection.tsx` for the showreel thumbnail. This keeps URLs stable if assets are ever re-uploaded.

Thumbnails (`/images/service-thumbnails/*.png|.jpg`) all exist in `public/` and don't need changes.

### 3. Verification
- `bun run build` to catch typos.
- Load `/services/amazing-race` in Playwright, screenshot to confirm the thumbnail displays and clicking the play button starts the MP4.

## Out of scope
- No redesign of `ServiceVideoSection`, no new sections, no other service data changes.
- The nested `videos?: [{ videoUrl }]` carousel field (used elsewhere) is not touched in this pass unless the same broken references appear — will handle in the same edit if found.
