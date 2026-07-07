## Goal

Make the Explore CTA inside the four programme cards (DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites) reliably clickable. Do not touch the hover/open logic or visual design.

## Root cause

In `src/components/ExpandableActivityCard.tsx` the decorative layers stacked above the content are not fully click-transparent, and the CTA is not isolated above them:

- The background image wrapper (`<div className="absolute inset-0">` at ~L116) contains the `<img>` and the gradient color overlay. It has no `pointer-events-none`, so it can intercept clicks over the entire card surface even though content sits at `z-10`.
- The shine layer (`motion.div` at ~L223) is `absolute inset-0` and, although it has `pointer-events-none`, it lives in the same stacking context as the CTA at only `z-20`.
- The CTA is only `z-20`. Any sibling absolute layer at equal or higher stacking wins.
- The outer wrapper `motion.div` in `ServicesSection.tsx` (L328) has no `isolation`, so z-indexes leak across cards in the grid.

## Changes (single file: `src/components/ExpandableActivityCard.tsx`)

1. Add `pointer-events-none` to the background image container div (the wrapper at L116 that holds the `<img>` and the gradient overlay). Decorative only — must never catch clicks.
2. Keep `pointer-events-none` on the shine layer (already set).
3. Add `isolation: isolate` (Tailwind `isolate`) to the inner card `motion.div` at L102 so z-indexes are contained per card.
4. Bump the content column at L138 to `relative z-40 h-full pointer-events-none` and let only the interactive CTA opt back in with `pointer-events-auto`. This guarantees text/icons never swallow clicks and only the CTA is a click target inside the content area.
5. Bump the Explore CTA (`<a>` and `<Link>` variants at L194 and L205) to `relative z-50 pointer-events-auto cursor-pointer`, keep them as real `<a>` / react-router `<Link>`.
6. Leave hover/open state, timers, animation, colors, typography, layout, and copy untouched.

## Technical detail

```tsx
// Image + gradient wrapper — decorative
<div className="absolute inset-0 pointer-events-none">
  <img ... />
  <div className="absolute inset-0 ..." /> {/* gradient */}
</div>

// Content column — non-interactive by default
<div className="relative z-40 h-full flex flex-col justify-between p-6 text-white pointer-events-none">
  ...
  <Link
    to={targetHref}
    className="relative z-50 pointer-events-auto cursor-pointer inline-flex ..."
  >
    ...
  </Link>
</div>

// Shine — already pointer-events-none, keep as-is
```

## Verification

After build, drive Playwright headless against `http://localhost:8080/`, hover each of DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites, click Explore, and confirm navigation to the correct `/services/...` route for all four. Screenshot each landing page.

## Out of scope

No changes to `ServicesSection.tsx`, no changes to hover state machine, no visual/animation/color/typography edits.
