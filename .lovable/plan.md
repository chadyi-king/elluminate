

## Plan: Add Poster Thumbnail for Vietnam Adventure Recap

### What
Add a `thumbnailImage` to the Vietnam Adventure Recap video item using Cloudinary's video-to-image transformation (extracting frame at 0 seconds).

### Change (single line in `src/data/servicesData.ts`, line 453)

```ts
// Before
{ title: "Vietnam Adventure Recap", videoUrl: "https://res.cloudinary.com/dw1q8nz8z/video/upload/v1774588080/Straits_Construction_1_rhyeyo.mp4" },

// After
{ title: "Vietnam Adventure Recap", videoUrl: "https://res.cloudinary.com/dw1q8nz8z/video/upload/v1774588080/Straits_Construction_1_rhyeyo.mp4", thumbnailImage: "https://res.cloudinary.com/dw1q8nz8z/video/upload/so_0,w_800,h_450,c_fill,f_auto,q_auto/v1774588080/Straits_Construction_1_rhyeyo.jpg" },
```

The `ServiceVideoCarousel` component already renders `thumbnailImage` as an `<img>` on the card when present — no component changes needed.

### Files modified
- `src/data/servicesData.ts` — add `thumbnailImage` to one video item

