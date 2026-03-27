

## Plan: Add MP4 Video Support to ServiceVideoCarousel Modal

### What changes
In `src/components/service-page/ServiceVideoCarousel.tsx`, lines 195-201 — the modal currently always renders an `<iframe>`. Add a check: if the URL ends with `.mp4` (or other video file extensions), render a `<video>` element instead.

### Technical detail

Replace the single `<iframe>` block (lines 195-201) with a conditional:

```tsx
{activeVideo.videoUrl ? (
  activeVideo.videoUrl.includes('.mp4') || activeVideo.videoUrl.includes('.webm') || activeVideo.videoUrl.includes('.ogg') ? (
    <video
      src={activeVideo.videoUrl}
      className="w-full h-full"
      controls
      autoPlay
    />
  ) : (
    <iframe
      src={activeVideo.videoUrl}
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
) : (
  // existing "coming soon" fallback
)}
```

Also update the `servicesData.ts` overseas-retreats entry to add the Cloudinary MP4 `videoUrl` to the "Vietnam Adventure Recap" video item.

### Files modified
- `src/components/service-page/ServiceVideoCarousel.tsx` — conditional `<video>` vs `<iframe>` in modal
- `src/data/servicesData.ts` — add `videoUrl` to Vietnam Adventure Recap item

