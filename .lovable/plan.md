
## Plan

### 1. Refine the hero character component
- Update `src/components/hero/HeroCharacters.tsx` so each character can be controlled more precisely instead of sharing one generic mask/box behavior.
- Add per-character options for:
  - whether the white bottom fade is shown
  - tighter interactive bounds / visible box size
  - side-specific trimming so the hover area ends closer to the character’s fingertips instead of covering empty space

### 2. Remove the unwanted white fade on the top pair
- Remove the white gradient mask from the **blue man** and **green woman** only.
- Keep the softer lower fade only where it still helps the cropped lower pair blend into the page.

### 3. Reposition the four characters
- Adjust placement to match your latest directions:
  - **Red woman:** move up about 10–15px
  - **Yellow boy:** move up about 30px and slightly left by about 5–10px
  - **Blue man:** move down about 100px
  - **Green woman:** move down about 100px
- Keep the red/yellow pair visually above the blue/green pair.

### 4. Fix hover hitboxes properly
- Tighten each character’s interactive container so hover only happens near the visible figure, not across a large invisible rectangle.
- Apply the side trims you described:
  - **Blue man:** reduce right-side box area by ~20px
  - **Green woman:** reduce left-side box area by ~15px
  - **Red woman:** reduce right-side box area by ~30px
  - **Yellow boy:** reduce left-side box area by ~20px
- This should stop the lower pair from stealing hover and make the top pair easier to trigger.

### 5. Correct hero layering
- Update `src/components/HeroSection.tsx` so the stacking order becomes:
  1. background photo wall
  2. headline/subtitle text
  3. character cutouts
  4. CTA buttons
- This matches your request that the **words sit behind the humans**, while the **buttons stay topmost**.

### Files to update
- `src/components/hero/HeroCharacters.tsx`
- `src/components/HeroSection.tsx`

### Technical details
- The current issue is not just positioning; it is also a **stacking and hitbox problem**:
  - the text layer is sitting above the characters
  - the character wrappers are still larger than the visible figures
- I’ll fix this by:
  - giving the hero text and CTA separate z-layers
  - making the character wrapper support per-figure masking and box trimming
  - keeping desktop-only character rendering intact, so mobile/tablet behavior remains unchanged
