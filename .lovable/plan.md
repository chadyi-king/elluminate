## Problem

In `src/components/ExpandableActivityCard.tsx`, the card uses React state (`onMouseEnter` / `onMouseLeave` on the outer `motion.div`) to grow the inner card from 220px to 380px. Two things cause the Explore button to become unclickable on the last-row cards (DISC, Youth Camps, Wellness Events, Leadership Offsites):

1. The height animation runs on the *inner* `motion.div`, and the outer wrapper's layout height can lag one frame behind while framer-motion tweens. When the cursor moves down toward the Explore CTA, it briefly exits the outer wrapper's box, `onMouseLeave` fires, and the card collapses out from under the cursor.
2. The shine overlay (`absolute inset-0 bg-gradient-to-r...`) sits above the content stack without `pointer-events-none`, so it can intercept clicks on the Explore link near the bottom edge.

The layout, colours, images, text, typography, curved background, and animation style all stay exactly as they are — only the hover container and click layering change.

## Fix (single file: `src/components/ExpandableActivityCard.tsx`)

1. **Unify the hover container.** Move `onMouseEnter` / `onMouseLeave` off the outer wrapper and onto the same `motion.div` whose height is being animated (the visible card box). That element's DOM bounds always match the visible expanded card, so the cursor cannot fall into a "gap" between the tracked element and the visual card.
2. **Reserve layout space so grid neighbours don't reflow the cursor away.** Give the outer wrapper `style={{ minHeight: isExpanded ? 380 : 220 }}` with the same easing/duration as the inner tween, so the grid row height follows the expansion in lockstep. This prevents the row from resizing a frame late and briefly pulling the card out from under the pointer.
3. **Make the shine overlay non-blocking.** Add `pointer-events-none` to the shine `motion.div` so it never intercepts clicks on the Explore CTA or Track Record area.
4. **Lift the expanded content above overlays.** Wrap the content column (`relative h-full flex flex-col justify-between p-6 text-white`) with `z-10`, and add `relative z-20 pointer-events-auto cursor-pointer` to both the internal `<a>` and `<Link>` variants of the Explore CTA. The Icon wrapper stays visual-only.
5. **Keep everything else identical.** No changes to `ServicesSection.tsx`, no changes to card sizing, colours, typography, images, animations, or the AnimatePresence reveal of the expanded block. All four target cards inherit the fix automatically because they render through the same component.

## Verification

- Hover each of DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites → card expands, cursor can travel from top to bottom without collapse.
- Click the Explore CTA → navigates to the service route.
- Move cursor fully outside the expanded card boundary → card collapses as before.
- Confirm the other 16 cards still expand/collapse and navigate correctly (no regression).
