## Plan: Fix Logo Sizing, Character Layout, and Hover Effects

### 1. Navbar Logo — reduce to 80% and prevent clipping

- Change `h-32` to `h-24` (80% of h-32) on the logo `<img>`
- Remove `h-16` constraint on the nav container (`h-16` in line 129) — increase to `h-auto` or a taller value so the logo isn't clipped
- Ensure logo and hero content share the same center alignment (both use `container mx-auto` already) Make sure that Logo and Ignite the Spark is aligned middle

### 2. Contact Modal Logo — fix aspect ratio

- On `src/components/ContactModal.tsx` line 194, the wordmark has `h-48 w-auto` which should preserve aspect ratio. Will verify and ensure `object-contain` is added so it doesn't stretch/skew

### 3. Hero Characters — major repositioning

Current layout has all 4 characters with similar sizing and positions that cause bad overlap.

**New layout:**

- **Blue man (top-left)**: Positioned alongside "IGNITE THE SPARK" text area, left side. Large size, z-index higher than red woman
- **Green woman (top-right)**: Same vertical position as blue man, right side. z-index higher than yellow boy
- **Red woman (bottom-left)**: Shifted further left (more out of frame, e.g. `left-[-15%]`), positioned lower. z-index below blue man so blue man's body covers her cut-off
- **Yellow boy (bottom-right)**: Shifted further right (more out of frame, e.g. `right-[-15%]`), positioned lower. z-index below green woman

**Key fixes:**

- Bottom characters (red, yellow) pushed more out-of-frame to hide their straight-cut edges
- Top characters (blue, green) have higher z-index to overlap and cover bottom characters' cut areas
- Duotone filter adjusted — reduce brightness slightly so skin tones look more natural in duotone
- Hover effects already exist (duotone→full color + glow) — will verify they work correctly. Because it isnt working now.

### 4. Duotone adjustments

- Slightly reduce `saturate` and adjust `brightness` on all four characters' duotone filters for more natural-looking skin tones

### Files Modified


| File                                     | Change                                                                                               |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `src/components/Navbar.tsx`              | Logo `h-32` → `h-24`, nav height increased                                                           |
| `src/components/ContactModal.tsx`        | Add `object-contain` to wordmark img                                                                 |
| `src/components/hero/HeroCharacters.tsx` | Reposition all 4 characters, adjust z-indexes, push bottom chars out of frame, tweak duotone filters |
