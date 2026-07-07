Plan to fix the programme card hover collapse without redesigning the section:

1. Update `ExpandableActivityCard.tsx` to use a stable React active/open state as the only source of truth for expansion.
   - Use explicit enter/leave handlers on the full animated card wrapper.
   - Do not use `group-hover`, CSS `:hover`, `whileHover`, or `onHoverEnd` to control open/close.

2. Add a 250ms delayed close timer.
   - On pointer enter: cancel any pending close and open the card.
   - On pointer leave: start a 250ms close delay.
   - If the cursor re-enters the card or the Explore CTA before the delay ends, cancel the close.
   - Clean up the timer on unmount.

3. Keep the whole expanded card as the interactive hover area.
   - Attach pointer handlers to the same parent wrapper that contains the image, Track Record content, and Explore CTA.
   - Keep the current 220px to 380px height animation and existing visual styling.

4. Make the Explore CTA reliably clickable.
   - Ensure the CTA has `relative`, a higher `z-index`, `pointer-events-auto`, and `cursor-pointer`.
   - Ensure decorative overlays remain `pointer-events-none` so they cannot block clicks.
   - Add enter handling to the CTA itself as an extra safeguard against delayed close while moving onto the button.

5. Preserve visuals exactly.
   - No changes to layout, colours, copy, images, typography, section background, card dimensions, or animation style.
   - Remove only the card image’s `group-hover` dependency and replace it with the same transform driven by React state.

6. Test the four requested cards on the homepage.
   - DISC Assessment
   - Youth Camps
   - Wellness Events
   - Leadership Offsites
   - Verify each stays open while moving to Track Record and Explore, the button is clickable, and the card closes only after fully leaving the expanded card.