# Dedicated FAQs for 7 pages

## Scope
Swap the shared FAQ generators for hand-authored FAQ arrays on the listed pages. No component, layout, styling, or copy changes elsewhere.

## Files to change

### 1. `src/data/serviceContentQuality.ts`
For each of the six service slugs below, replace the current `activityFaqs(...)` call inside the `faqs:` field with an inline literal `FAQ[]` array using the exact questions and answers you provided:

- `amazing-race`
- `cultural-race`
- `alice-in-motherland`
- `builder-cross`
- `monopoly-dash`
- `sotong-game`

All other slugs keep their existing generator calls. The `activityFaqs` helper stays in the file (still used by CSI-Bones, Amongst Us, Battle of the Olympians, Minute To Win It, Running Man, Treasure Heist, and the equipment activities).

### 2. Home page FAQ
The current `src/components/HomeFAQSection.tsx` already contains the exact 5 Q&As, title, and subtitle you specified. Verified word-for-word. No edit required — but I will re-read it during implementation to confirm no drift and leave it untouched.

## Out of scope
- FAQ accordion component, styling, animation, icons, spacing, JSON-LD wiring
- All other page content
- Other service pages that still use generators

## Verification
- `rg` to confirm the six updated slugs no longer reference `activityFaqs`
- Run `node --test scripts/service-content-upgrade.test.mjs` (asserts each live service has 4–6 FAQs, which the new arrays satisfy: 5 each)
- Spot-check one updated service page in preview to confirm the accordion renders the new questions unchanged visually
