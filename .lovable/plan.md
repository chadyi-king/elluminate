## Move team photos into `public/images/our_team/` and wire About page

The 10 team photos currently live at `public/image/our_team/` (singular `image`). They should live under the existing `public/images/` folder alongside `about/`, `client-logos/`, `destinations/`, `services/`.

### Steps
1. Move all 10 files from `public/image/our_team/` → `public/images/our_team/`:
   - afifah.png, ayume.png, edmund.png, jemwell.png, jencen.png, lisa.png, louise.png, mj.png, peace.png, peggy.png
2. Delete the now-empty `public/image/` folder.
3. Update `src/components/OurTeam.tsx` so all 10 team members point to `/images/our_team/<name>.png` (replacing the current mix of Cloudinary URLs + the one `/image/our_team/edmund.png` reference).

### Resulting URLs
`/images/our_team/afifah.png`, `/images/our_team/ayume.png`, `/images/our_team/edmund.png`, `/images/our_team/jemwell.png`, `/images/our_team/jencen.png`, `/images/our_team/lisa.png`, `/images/our_team/louise.png`, `/images/our_team/mj.png`, `/images/our_team/peace.png`, `/images/our_team/peggy.png`

### Note on naming
Using `our_team` (underscore) to match the folder you already have. If you'd rather it be `our-team` (hyphen) to match `client-logos`, say the word and I'll switch.
