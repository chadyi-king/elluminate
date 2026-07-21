# Elluminate Redesign Blueprint

Status: implementation baseline
Source baseline: Lovable-linked GitHub `main` at `f1b7e36`
Creative direction: Human Energy in Motion
Voice: 60% energetic, 40% corporate

## Product promise

Elluminate helps organisations plan team building, retreats, and facilitated training around their people, objective, venue, timing, and operating requirements.

The visitor should understand three things quickly:

1. Elluminate runs fun, creative experiences for many kinds of groups.
2. The work is supported by real event footage, attributable reviews, and an established operating history.
3. They can explore a named experience or ask Elluminate to help choose and plan one.

## Site architecture

- Home
- About
- Team Building: 12 story-led physical experiences, 4 equipment activities, and 8 virtual experiences
- Retreats: Overseas Retreats, Local Retreats, and Incentive Travel
- Training: 9 current programmes, with room to grow
- Large Scale: coming soon; do not link externally yet
- School: coming soon; do not link to ENCOMPASSE yet
- Blog route retained but hidden from navigation until content is ready
- Plan My Event: opens the global enquiry form

Each family name links directly to its own conversion landing page. Its adjacent disclosure control opens the child menu. Mobile must keep those as two distinct actions.

## Page inheritance model

### Global shell

- truly centred logo with balanced navigation
- consistent enquiry modal and conversion tracking
- proof and claim attribution
- accessible focus, keyboard, touch, reduced-motion, and responsive behaviour
- shared typography, spacing, button hierarchy, and performance budgets

### Family landing pages

Full conversion pages for Team Building, Retreats, and Training:

1. audience and outcome
2. immediate proof
3. problem and planning context
4. offer and full family scope
5. experience discovery
6. real work and demonstrations
7. alternatives or comparison
8. fit, objections, FAQs, and practical details
9. clear next-step enquiry

These pages are also the destinations for matching Google Ads campaigns. Urgency, guarantees, bonuses, prices, and capacities must only appear when supported by current business truth.

### Activity pages

Every child activity is a mini experiential landing page. The information order remains familiar while the creative world changes.

Shared bones:

- themed hero and compact proof
- what the experience feels like
- suitability facts: setting, group size, duration, energy, and objective when verified
- how it works and what Elluminate handles
- real media or project evidence
- practical details, FAQs, and related experiences
- Plan My Event conversion

Amazing Race should feel like an expedition interface. CSI-Bones should feel like a forensic case interface. The distinction must extend beyond a colour swap while preserving readability and conversion clarity.

## Homepage sequence

1. Four-character rotating-word hero
2. Immediate trust and showreel bridge: attributable Google rating, approved logos, and user-initiated video
3. Experience discovery: browse by family or ask for help choosing
4. Real work and project evidence
5. Planning process and operational scope
6. Deeper proof, gallery, and testimonials
7. FAQs
8. Closing Plan My Event CTA

## Signature moments

1. The four-character Spark arrival composition
2. A compact proof-to-showreel bridge that makes real work visible immediately
3. An outcome-led experience finder with named-service escape hatches
4. Activity-specific world transitions and facts rails
5. An enquiry acknowledgement that clearly summarises what was submitted and what happens next

Motion must tell a short brand story, never manufacture a delay. Every moment needs a static or reduced-motion treatment and a separate mobile composition where required.

## Asset rules

- Reuse the existing four characters without changing their faces or clothing.
- Reuse only the currently approved 12-logo allowlist until permissions are expanded.
- Load videos poster-first and only after user intent; do not preload the 73–86 MB files.
- Use modular layers, masks, overlays, crops, and mobile variants instead of flattened page artwork.
- Defer galleries and lower-page media.
- Treat Lovable `.asset.json` files as project-bound assets and verify them in the Lovable preview after main-branch sync.

## Truth and conversion constraints

- Preserve Supabase lead storage, attribution capture, transactional-email queueing, and post-success conversion firing.
- Keep the shared-history qualification on review and operating-history claims.
- Do not invent recent clients, participant counts, testimonials, starting prices, urgency, guarantees, or availability.
- Existing unsourced testimonial and recent-event data remains candidate content, not approved proof.
- Do not link Team Elevate or ENCOMPASSE until their sites and relationship language are approved.

## Representative implementation slice

The first controlled slice covers:

- responsive centred navigation and mobile family menus
- homepage hero and trust/showreel hierarchy
- scalable service discovery
- Team Building conversion page refinements
- Amazing Race expedition world
- CSI-Bones forensic world
- responsive global enquiry form

This slice must build successfully and pass rendered desktop/mobile QA before expansion across the remaining service catalog.
