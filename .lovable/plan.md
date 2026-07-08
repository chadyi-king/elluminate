# Fix: Explore CTA clicks in service cards

## Goal
Make the "Explore …" button on every expandable activity card (including DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites) reliably receive clicks and navigate, without changing the hover expand behaviour or the visual design.

## Scope
Only `src/components/ExpandableActivityCard.tsx`. No design, animation, styling, spacing, layout, or content changes elsewhere.

## Changes

1. **Stop relying on `pointer-events-none` + `pointer-events-auto` toggling for the CTA.**
   - Remove `pointer-events-none` from the main content wrapper (`relative z-40 h-full flex flex-col …`).
   - Keep `pointer-events-none` only on the true decorative overlays: the background image/gradient div and the shine effect motion.div. These are the elements that must not intercept clicks; everything else in the card can safely receive them.
   - The Link/anchor keeps its explicit `z-50` and no longer needs `pointer-events-auto`, but we leave that class in as a belt-and-braces guard.

2. **Guarantee the shine overlay never sits above the CTA.**
   - Add `z-30` (below the content's `z-40`) to the shine motion.div, in addition to its existing `pointer-events-none`. This protects the click target during the 0.8s shine animation on touch devices where `elementFromPoint` can briefly hit it.

3. **Prevent the close-timer from racing navigation on tap/click.**
   - In the Link/anchor `onClick`, call `cancelClose()` and `onActivate()` so the card cannot deactivate and unmount the Link between `pointerup` and React Router navigation.
   - Also cancel the close timer on `onPointerDown` of the Link, so touch taps don't start a teardown before the click fires.

4. **Keep hover behaviour identical.**
   - No changes to `handlePointerEnter`, `handlePointerMove`, `handlePointerLeave`, the 250ms close delay, or the `isPointerInsideCard` check.
   - No changes to the outer `motion.div` animate props, min-heights, or the AnimatePresence exit timing.

## Verification
- Rerun the existing Playwright check for the four called-out cards (DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites) plus one Physical (Amazing Race) and one Virtual (Amazing Race Virtual) card:
  1. Hover to expand.
  2. Move cursor onto the Explore CTA.
  3. Click and assert `page.url` matches `/services/<slug>` and the page title loads.
- Manually verify no visual diff on the cards (screenshot before/after the two states: idle and expanded).
- Confirm no other file is modified.

## Out of scope
- FAQ data, routing, service page contents, any other component.
- Any redesign, restyle, or copy change.
