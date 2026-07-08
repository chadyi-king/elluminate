# Fix: Bottom-row Explore CTAs blocked by WaveDivider

## Root cause
`src/components/WaveDivider.tsx` renders an absolutely positioned decorative SVG at the bottom of `ServicesSection`. Its wrapper `<div>` has no `pointer-events-none`, so the SVG's bounding rectangle intercepts clicks in the last ~120px of the section. That area sits exactly over the "Explore …" CTAs of the bottom-row cards (DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites) when they expand, which is why those four in particular feel unclickable while cards higher up work.

## Fix
1. In `src/components/WaveDivider.tsx`, add `pointer-events-none` to the wrapper `<div>` of both the `top` and `bottom` variants. It is a purely decorative element and should never receive pointer events.

That's the only change required. No design, size, animation, or color changes.

## Verification
- Playwright: on the homepage, for each of DISC Assessment, Youth Camps, Wellness Events, Leadership Offsites — hover to expand without scrolling past the section, then click Explore and assert navigation to the correct `/services/<slug>`.
- Also re-test one top-row card (Amazing Race) to confirm nothing regressed.
- Visual check: wave divider still renders identically at top and bottom of the Services section.

## Out of scope
- No changes to `ExpandableActivityCard`, `ServicesSection`, FAQ data, or any other file.
