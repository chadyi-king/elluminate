# Elluminate Truth and Asset Register

## Approved implementation evidence

| Item | Current use | Status | Rule |
| --- | --- | --- | --- |
| Four hero characters | Homepage brand device | Approved to preserve | Keep faces, clothing, and family roles unchanged |
| Rotating Spark words | Homepage brand device | Approved to preserve | Maintain a readable static meaning for reduced motion |
| Existing 12-logo allowlist | Trust layer | Approved within current source | Do not expand from the 72-file archive without permission evidence |
| Elluminate showreel | Immediate trust bridge | Approved asset, heavy file | Poster-first, user-initiated playback, no eager video download |
| Service photo folders | Activity worlds and galleries | Available candidate assets | Select purposefully; do not load whole folders on entry |
| Contact modal lead flow | Primary conversion | Production-sensitive | Preserve storage, attribution, email, and conversion-event order |

## Claims requiring continued attribution

| Claim | Current qualification | Redesign rule |
| --- | --- | --- |
| 4.8/5 and 800+ Google reviews | Live Team Elevate Google Business Profile displayed 4.8 and 801 reviews on 21 July 2026 | Keep source link and relationship disclosure; reverify before future publishing rounds |
| 1,000+ events | Shared Team Elevate and Elluminate operating history under EXSTATIC PTE LTD | Keep the shared-history qualification |
| 100,000+ participants | Shared operating history | Keep qualified; reverify before publishing |
| 8+ years | Shared operating history | Keep qualified; reverify before publishing |

## Candidate-only content

- Unsourced testimonials in `servicesData.ts`
- Recent-event entries without a linked record
- Prices, guarantees, capacity limits, response times, and availability not confirmed by the owner
- Any client relationship inferred only from a stored logo file
- Current Supabase blog inventory, which has not been read back in this redesign lane

## Performance guardrails

- No video preload above the fold.
- First viewport should depend on compressed character WebPs and a limited photo set only.
- Galleries and secondary videos lazy-load.
- Provide reduced-motion behaviour for continuous photo-wall and headline motion.
- Keep mobile artwork independent enough to avoid off-screen clipping.
- Treat the current 1.79 MB JavaScript bundle as a baseline warning and avoid adding new heavy dependencies.

## Sync proof required

1. Tested commit exists in the clean redesign branch.
2. Approved work is integrated into GitHub `main` without overwriting new Lovable commits.
3. Lovable preview visibly reflects the new `main` commit.
4. The custom domain remains unchanged until the site owner republishes it.
