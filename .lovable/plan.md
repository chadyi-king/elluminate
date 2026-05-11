## Goal

Strip all dynamic Cloudinary integration (edge function, folder fetching, URL transformation helper) from the site. Keep every existing static `res.cloudinary.com/...` URL exactly as-is so images/videos still load directly. No design, layout, copy, or section changes.

## Findings

Dynamic Cloudinary code is concentrated in three places:

1. **Edge function** — `supabase/functions/cloudinary-folder/index.ts` (calls Cloudinary API with `CLOUDINARY_*` secrets).
2. **`SocialProofSection.tsx`** — `useEffect` at lines ~414–453 calls `fetch('${supabaseUrl}/functions/v1/cloudinary-folder?folder=website/client-logo')` and overwrites `clientLogos` with matched assets. Helpers `brandToFilename`, `normalize`, `stripNoise` exist only to support that fetch.
3. **`src/lib/cloudinaryUrl.ts`** — `cld()` helper that injects `f_auto,q_auto,w_,dpr_` transformations. Used in `CaseStudiesSection.tsx`, `ExpandableActivityCard.tsx`, `GallerySection.tsx`, `SocialProofSection.tsx`. The user explicitly forbids `f_auto` / `q_auto`, so this helper is removed entirely.

All actual asset URLs (in `servicesData.ts`, `AboutPage.tsx`, `VideoSection.tsx`, `GallerySection.tsx`, `CaseStudiesSection.tsx`, `ServicesSection.tsx`, `SocialProofSection.tsx` `defaultClientLogos`) are already hardcoded `https://res.cloudinary.com/...` strings — they stay untouched.

## Changes

### 1. Delete the edge function
- Delete `supabase/functions/cloudinary-folder/` directory.
- Call `supabase--delete_edge_functions` with `["cloudinary-folder"]` to remove the deployed function.
- Cloudinary secrets (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`) are left in the secret store untouched (no code reads them anymore); user can manually delete them in Cloud settings if desired. Mention this in the closing note.

### 2. Delete the helper
- Delete `src/lib/cloudinaryUrl.ts`.

### 3. Replace `cld(url, {...})` with the raw `url` and drop the import

In each of:
- `src/components/CaseStudiesSection.tsx` — remove `import { cld } ...`; change `url(${cld(study.image, { width: 800 })})` → `url(${study.image})`.
- `src/components/ExpandableActivityCard.tsx` — remove import; change `cld(image, { width: 640 })` → `image`.
- `src/components/GallerySection.tsx` — remove import; change `cld(image.src, { width: 600 })` → `image.src`, and `cld(galleryImages[selectedImage].src, { width: 1600 })` → `galleryImages[selectedImage].src`.
- `src/components/SocialProofSection.tsx` — remove import (any `cld(...)` usages, if present, swap to raw URL).

### 4. Strip dynamic logo fetching from `SocialProofSection.tsx`
- Remove the entire `useEffect` block (lines ~414–453) that calls `fetch('/functions/v1/cloudinary-folder...')`.
- Change `useState(defaultClientLogos)` → keep state but it just initializes once; can simplify to `const clientLogos = defaultClientLogos`.
- Remove now-unused helpers: `brandToFilename`, `normalize`, `stripNoise` (only if no other reference remains — verify with a grep before deleting).
- Remove `useEffect`/`useState` from React imports if no longer used elsewhere in the file.

### 5. Verify
- Grep for `cloudinary-folder`, `cld(`, `cloudinaryUrl`, `fetchCloudinaryFolder` to confirm zero remaining matches in `src/` and `supabase/`.
- Confirm build still passes (the harness runs typecheck automatically).

## Out of scope / preserved

- All static `https://res.cloudinary.com/...` image and video URLs across the codebase remain unchanged.
- No design, layout, copy, or section removals.
- Cloudinary secrets are not deleted from the secret store by this change (just no longer referenced).
