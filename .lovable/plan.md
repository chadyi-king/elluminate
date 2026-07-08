## Plan: Upload team photos to `public/image/our_team/`

Copy the 10 uploaded team photos into a new folder `public/image/our_team/` so they're served at stable URLs you can reference on the About page.

### Files to create
- `public/image/our_team/afifah.png`
- `public/image/our_team/ayume.png`
- `public/image/our_team/edmund.png`
- `public/image/our_team/jemwell.png`
- `public/image/our_team/jencen.png`
- `public/image/our_team/lisa.png`
- `public/image/our_team/louise.png`
- `public/image/our_team/mj.png`
- `public/image/our_team/peace.png`
- `public/image/our_team/peggy.png`

### Resulting URLs (usable in About page)
- `/image/our_team/afifah.png`
- `/image/our_team/ayume.png`
- `/image/our_team/edmund.png`
- `/image/our_team/jemwell.png`
- `/image/our_team/jencen.png`
- `/image/our_team/lisa.png`
- `/image/our_team/louise.png`
- `/image/our_team/mj.png`
- `/image/our_team/peace.png`
- `/image/our_team/peggy.png`

### Notes
- Filenames normalized to lowercase (e.g. `MJ_team.png` → `mj.png`) for consistent URLs.
- No About page code changes in this step — I'll only place the files and give you the URL list. You can tell me next which member maps to which existing slot, or I can wire them up in a follow-up.
- Not using Lovable Assets CDN here since you explicitly asked for `public/image/our_team/` URLs.