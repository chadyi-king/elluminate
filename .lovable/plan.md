

# Complete Service Page Overhaul — All 45+ Services

This plan covers **every single service page** in the site, organized into implementation rounds. Each round rewrites content, diversifies testimonials/client tickers, and improves the themed divider designs.

---

## Current State Summary

**45 total services** across 6 categories:

| Category | Services | Current Quality |
|----------|----------|----------------|
| Corporate Events (15) | team-building, dinner-and-dance, awards-ceremonies, corporate-anniversaries, leadership-offsites, product-launch, brand-activations, client-appreciation, town-halls, immersive-experiences, wellness-events, family-fun-days, corporate-carnivals, vip-gala, grand-opening | Medium — have full content but repetitive tickers and thin overviews |
| Event Services (6) | event-concept, stage-production, custom-themes, emcee-media, summits, government-events, private-events | Medium — same issues |
| Physical Activities (13) | amazing-race, csi-bones, cultural-race, archery-tag, builder-cross, gel-blitz, minute-to-win-it, monopoly-dash, nerfwar, running-man, sotong-game, tag-tical-laser-teambuilding, treasure-heist | **10 are skeleton placeholders** with 1 feature, 1 benefit, fake testimonials |
| Virtual Activities (8) | amazing-race-virtual, fit-in-your-team-virtual, the-gameshow-experience-virtual, the-great-zodiac-hunt-virtual, the-nuclear-fallout-escape-room-virtual, the-patriot-act-virtual, tomb-raider-king-treasure-hunt-virtual, grand-christmas-delivery | Medium — decent content but all use same `virtualPlaceholderHero` and `dividerVariant: "timer"` |
| Retreats (2) | overseas-retreats, local-retreats | Medium — icons instead of destination photos, thin descriptions |
| Training (7) | mbti, disc, ocean, mass-talks, workshops, youth-camps, corporate-days | Good structure but all use `dividerVariant: "blueprint"` and share testimonial authors |

---

## What Gets Fixed Across ALL Services

### A. Content Enrichment (every service)
- Rewrite overviews to 150-250 words with specific details about what participants do
- Remove all em dashes; use clean, professional copy
- 3-4 unique features and benefits per service (no more 1-liners)
- 5-6 realistic testimonials with proper names and diverse Singapore companies (no repeats across services)
- 4-5 specific FAQs per service
- 6-8 unique recent events with varied, realistic companies per service
- Unique CTA headlines per service

### B. Themed Divider Designs (visual differentiation)

Currently 12 divider variants exist. Some services reuse the same one inappropriately. Here's the plan:

| Service | Current Divider | Proposed Change |
|---------|----------------|-----------------|
| **amazing-race** | raceTrack | Keep — perfect fit |
| **cultural-race** | raceTrack | Keep — race theme fits |
| **csi-bones** | policeTape | Keep — crime theme fits |
| **archery-tag** | arrow | Keep — arrow theme fits |
| **builder-cross** | blueprint | Keep — construction theme fits |
| **gel-blitz** | gelBeads | Keep — perfect fit |
| **minute-to-win-it** | timer | Keep — countdown theme fits |
| **monopoly-dash** | money | Keep — perfect fit |
| **nerfwar** | foamDart | Keep — perfect fit |
| **running-man** | route | Keep — running route fits |
| **sotong-game** | squid | Keep — perfect fit |
| **tag-tical-laser** | laser | Keep — perfect fit |
| **treasure-heist** | vault | Keep — perfect fit |
| **All 8 virtual services** | ALL use "timer" | Differentiate: Amazing Race Virtual → raceTrack, Zodiac Hunt → route, Nuclear Fallout → vault, Patriot Act → arrow, Tomb Raider → vault, Christmas → new "gift/festive" strip, Gameshow → new "spotlight" strip, Fit In Your Team → blueprint |
| **All 4 training profiling** | ALL use "blueprint" | Keep blueprint for MBTI/DISC/OCEAN (fits). Mass Talks → new "microphone/sound wave" strip. Youth Camps → route. Corporate Days → arrow. Workshops → blueprint (keep). |
| **Retreats** | Both use "route" | Keep — travel theme fits |
| **15 corporate events** | None have dividers | Add appropriate dividers: dinner-and-dance → new "sparkle/confetti" strip, awards → new "trophy/ribbon" strip, etc. |

**New divider variants to create (4):**
1. **ConfettiStrip** — for celebrations (dinner-and-dance, corporate-carnivals, grand-opening)
2. **SpotlightStrip** — for performances/entertainment (stage-production, emcee-media, gameshow-virtual)
3. **RibbonStrip** — for awards/VIP (awards-ceremonies, vip-gala, client-appreciation)
4. **WaveStrip** — for wellness/retreats (wellness-events, corporate-anniversaries)

### C. Image/Visual Improvements
- Overseas retreats: Replace Lucide icons with Unsplash destination photos (Bali beach, KL skyline, etc.) by adding optional `image` field to FlowSection items
- Local retreats: Same — show actual hotel photos for Staycation/Heritage/Luxury tiers
- Stop reusing `heroAdventureChallenge` for 8+ physical services — assign unique Unsplash hero images per service until Cloudinary assets are ready
- Stop reusing `virtualPlaceholderHero` — assign unique virtual-themed images per service

---

## Implementation Rounds

### Round 1: Component Updates
- Add optional `image?: string` to `FlowSectionItem` interface
- Update `ServiceFlowSection.tsx` to render images when provided (instead of only icons)
- Create 4 new divider strip components (ConfettiStrip, SpotlightStrip, RibbonStrip, WaveStrip)
- Register them in `ServiceDividerStrip.tsx` and the `ServiceData` type

### Round 2: Physical Team Building (13 services)
Full content rewrite for all 13 physical activities. The 10 skeleton services (builder-cross through tag-tical-laser) get expanded from 1-line entries to full pages. Amazing Race, CSI-Bones, and Cultural Race get content refresh.

### Round 3: Corporate Events (15 services)
Content enrichment for all 15 corporate event services. Diversify all client tickers, expand overviews, add divider variants, assign unique hero images.

### Round 4: Event Services (7 services)
Content enrichment for event-concept, stage-production, custom-themes, emcee-media, summits, government-events, private-events.

### Round 5: Virtual Activities (8 services)
Content enrichment, differentiate divider variants (stop all using "timer"), assign unique hero images, expand thin content.

### Round 6: Retreats + Training (9 services)
- Overseas/Local retreats: Add destination photos, expand descriptions
- MBTI/DISC/OCEAN: Diversify testimonial authors (currently all share same names)
- Mass Talks/Workshops/Youth Camps/Corporate Days: Content polish, differentiate dividers

---

## Files Created/Modified

| File | Action |
|------|--------|
| `src/components/service-page/dividers/ConfettiStrip.tsx` | New |
| `src/components/service-page/dividers/SpotlightStrip.tsx` | New |
| `src/components/service-page/dividers/RibbonStrip.tsx` | New |
| `src/components/service-page/dividers/WaveStrip.tsx` | New |
| `src/components/service-page/dividers/ServiceDividerStrip.tsx` | Edit — register 4 new variants |
| `src/data/servicesData.ts` | Major edit — all 45 services rewritten/enriched |
| `src/components/service-page/ServiceFlowSection.tsx` | Edit — add image support to flow items |

---

## Execution

Given the massive scope (~4,600 lines in servicesData.ts alone), this will be implemented across **6 rounds** as listed above. I recommend starting with **Round 1 (components) + Round 2 (physical team building)** in the first pass, then proceeding through the remaining rounds sequentially.

