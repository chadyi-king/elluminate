## Plan

### 1. Reposition the main navbar

- Move the whole navbar down by about 10px so the logo and links sit slightly lower.
- Keep the logo centered as the true visual anchor.
- Align the hero headline block so the center of the hero composition matches the center of the logo.

### 2. Fix navbar behavior and styling

- Make the main desktop nav labels uppercase only.
- Fix the dropdown hover behavior so menus close naturally when the cursor leaves the nav item/menu zone, instead of getting “stuck” open.
- Keep sub-navigation content readable, but do not force all submenu items to uppercase unless needed.

### 3. Rework hero character positioning properly

- Move the **blue man** and **green woman** upward so they frame the “IGNITE THE SPARK” area. At their respective left and right sides
- Change red woman layer to be above blue guy and yellow kid layer to be above green woman
- Reposition the **red woman** and **yellow boy** lower so their visible starting areas of their head aligns around the subtitle zone (“Team building, school programmes…”), not too high. At their respective left and right sides
- Preserve the intended overlap, but make sure the bottom pair does not awkwardly sit on top of the top pair.

### 4. Refine hero character visuals

- Keep the hover interaction working reliably: duotone → original color plus matching glow.
- Soften the duotone treatment slightly so skin tones look less harsh.
- Keep or improve the lower fade/masking so cropped bottoms blend better into the page.

### 5. Tighten the contact modal branding panel

- Reduce the empty space around the wordmark.
- Shift the wordmark area further left
- Start the supporting text content sooner to the wordmark logo, right below it so the left panel feels more compact.
- Preserve the wordmark’s original aspect ratio.

### 6. Update footer branding and contact details

- Add this legal/company block directly below the footer logo and above the existing descriptive paragraph:

```text
We are the Corporate Events arm of
EXSTATIC PTE LTD
[UEN No. 202243915R]
```

- Change the visible email to `info@elluminate.sg`.
- Keep the footer logo large and properly proportioned.

### Files to update

- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/hero/HeroCharacters.tsx`
- `src/components/ContactModal.tsx`
- `src/components/Footer.tsx`

### Implementation notes

- For the dropdown bug, I’ll adjust the hover/close handling to be attached to the whole nav item region instead of only the floating panel.
- For the hero, I’ll treat the top pair and bottom pair as two distinct vertical bands so their positions follow the text layout instead of generic top/bottom screen placement.
- I’ll keep the logo, hero text, and overall homepage composition centered to the same axis.