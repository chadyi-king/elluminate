## Plan

1. **Upload the two files as Lovable CDN assets**
   - `user-uploads://csi-bones.mp4` → `public/videos/csi-bones.mp4.asset.json`
   - `user-uploads://csi-tn.png` → `public/images/service-thumbnails/csi-tn.png.asset.json`
   - Use the `lovable-assets create` CLI reading directly from `/mnt/user-uploads/` (no binary copied into the repo).

2. **Update the CSI: Bones entry in `src/data/servicesData.ts`** (lines 5953–5959)
   - Replace `videoUrl: "/videos/elluminate-showreel.mp4"` with the new CDN URL from the uploaded MP4's `.asset.json`.
   - Replace `thumbnailImage: "/images/services/csi-bones/hero.jpg"` with the new CDN URL from the uploaded thumbnail's `.asset.json`.
   - Keep all other fields (title, subtitle, layout, animations) untouched.

3. **No other changes**
   - Do not touch `ServiceVideoSection.tsx` (already handles CDN `/__l5e/` URLs correctly after the earlier fix).
   - Do not modify other service pages, FAQs, or navigation.

4. **Verify**
   - Run `bun run build` and load `/services/csi-bones` to confirm the new thumbnail appears and the video plays on click without refresh.
