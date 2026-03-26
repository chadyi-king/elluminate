

## Plan: Replace Wikipedia Logo URLs with Cloudinary Assets

### Overview
Fetch logo images from the `website/client-logo` Cloudinary folder on mount, match them to brands by filename, and replace the hardcoded Wikipedia URLs — preserving the entire section layout, carousel, and fallback behavior.

### Steps

**1. Add a `useEffect` to fetch Cloudinary logos on mount**
- Call `supabase.functions.invoke('cloudinary-folder', { body: { folder: 'website/client-logo' } })` — wait, the function uses query params not body. Will use a direct fetch to the edge function URL with `?folder=website/client-logo`.
- Store the returned assets array in state.

**2. Match Cloudinary assets to brands by `public_id`/filename**
- For each brand in the `clientLogos` array, check if any Cloudinary asset's `public_id` contains a normalized version of the brand name (e.g., `dbs`, `ocbc`, `grab`, `singapore-airlines`, etc.).
- If a match is found, override that brand's `logo` URL with the Cloudinary `secure_url`.
- If no match is found, keep the existing Wikipedia URL as fallback.

**3. No layout/style changes**
- The grid, card design, carousel dots, spacing, grayscale hover effect, `onError` text fallback — all stay exactly the same.
- Only the `logo` URL string changes per brand where a Cloudinary match exists.

### Files modified
- `src/components/SocialProofSection.tsx` — add state + fetch logic + matching logic

### Technical details
- Matching will normalize both the brand name and the Cloudinary `public_id` (lowercase, strip spaces/hyphens) for fuzzy comparison.
- The fetch runs once on mount; logos render from existing Wikipedia URLs until the Cloudinary data arrives, then swap in seamlessly.
- Uses `VITE_SUPABASE_URL` env var to construct the edge function URL.

