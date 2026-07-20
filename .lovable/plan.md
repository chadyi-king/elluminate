# Plan — Elluminate controlled redesign

The canonical blueprint is `docs/forger/ELLUMINATE_REDESIGN_BLUEPRINT.md`.

## Current milestone

Build and verify a representative vertical slice before propagating the system:

1. Centre the desktop navigation around the logo, expose Field Notes, and simplify mobile family menus.
2. Preserve and refine the four-character rotating-word hero.
3. Combine attributable Google proof, approved logos, and poster-first showreel playback immediately after the hero.
4. Improve service discovery without exposing all 36 child activities at once.
5. Refine the Team Building family conversion page.
6. Establish distinct Amazing Race and CSI-Bones page worlds on the shared activity skeleton.
7. Preserve the production lead pipeline and test the global enquiry form at desktop and mobile sizes.

## Verification gate

- `npm run build`
- desktop QA at 1440×900
- mobile QA at 390×844 and 360×800
- keyboard and reduced-motion spot checks
- no eager loading of the heavy showreel or activity videos
- no new proof claims without a source
- verify the tested `main` commit in the Lovable preview before calling the project synchronized
