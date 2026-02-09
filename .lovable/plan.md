
# Comprehensive Website Refinement Plan

This plan addresses all the issues identified during a thorough audit of every page, covering the hero banner, About page, service pages, divider strips, company ticker, gallery, testimonials, footer, and branding.

---

## 1. Homepage Hero Banner Improvements

**Current state:** The hero has SPARK letters that change color with a rotating word, a photo wall background, and 4 lightbulb-shaped service pills at the bottom. The lightbulb icons are simple colored circles with a small trapezoid base.

**Changes needed:**
- Add three DuotonePerson cutouts (Corporate Woman/Blue, Student/Pink, Businessman/Green) from existing `src/assets/hero/` images, positioned at the bottom of the hero
- Change SPARK letter colors to a fixed rainbow gradient (S=yellow, P=orange, A=pink, R=purple, K=green) instead of syncing to the rotating word
- Improve the 4 lightbulb pills at the bottom:
  - Make them look more like actual lightbulbs (add a glass-like inner glow effect, Edison-style filament appearance)
  - Add a pulsing glow animation on hover
  - Update labels: "Corporate Teambuilding", "School Programs", "Overseas Retreats", "Focused Trainings"

**Files:** `src/components/HeroSection.tsx`, `src/components/hero/ServicePills.tsx`

---

## 2. About Us Page Overhaul

**Current state:** Says "Team Elevate" throughout, tagline is "Where Moments Become Masterpieces" (old luxury branding), references old brand identity.

**Changes needed:**
- Update all "Team Elevate" references to "Elluminate"
- New tagline: "Where Teams Come Alive" (fits the "Illuminate Your Teams" brand)
- Update SEO title and canonical URL
- Update Our Story text to reference Elluminate brand
- Update "Singapore's Premier Corporate Event Specialists" to "Singapore's Most Eccentric Team Building Company"
- Fix testimonials that say "Team Elevate" to say "Elluminate"

**Files:** `src/pages/AboutPage.tsx`

---

## 3. SEO Branding Fix (All Service Pages)

**Current state:** `ServicePage.tsx` line 66 says "Team Elevate" in SEO title, line 69 has `teamelevate.sg` as canonical URL.

**Changes:**
- Title: `{service.hero.title} | Elluminate`
- Canonical: `https://elluminate.sg/services/${slug}`

**Files:** `src/pages/ServicePage.tsx`

---

## 4. Service Page Hero - Themed Item on Left Side

**Current state:** The hero split has a background image on the left and content on the right, but no distinctive themed prop/item.

**Changes needed:** Add a floating themed graphic/icon element on the left side of each service hero. These will be large, semi-transparent SVG/icon elements that represent each activity:
- Amazing Race: A race card / finish flag
- CSI-Bones: Magnifying glass / chalk body outline
- Cultural Race: Globe / cultural landmarks
- Archery Tag: Bow and arrow with foam tip
- Monopoly Dash: Dice / game board
- GelBlitz: Gel blaster target
- Nerfwar: Foam dart
- Treasure Heist: Safe / treasure chest
- Sotong Game: Circle-triangle-square shapes
- Running Man: Running figure / name tag
- Minute To Win It: Stopwatch / timer
- Builder Cross: Building blocks / crane
- Tag-tical Laser: Laser crosshair
- MBTI/DISC/OCEAN: Brain / personality chart
- Retreats: Suitcase / palm tree
- Training services: Podium / microphone

This will be implemented as a mapping of slug-to-icon in `ServiceHeroSplit.tsx`, using Lucide icons rendered at large scale with accent color and low opacity.

**Files:** `src/components/service-page/ServiceHeroSplit.tsx`

---

## 5. Company Events Ticker - Infinite Marquee

**Current state:** The `ServiceRecentEventsTicker` uses a framer-motion animation that scrolls from 0% to -50% with doubled events. It works but runs out of items visually.

**Changes needed:**
- Triple or quadruple the events array for smoother infinite scrolling
- Add more company names to each service's `recentEvents` (aim for 8-12 entries per service)
- Ensure the animation loops seamlessly without visible gaps

**Files:** `src/components/service-page/ServiceRecentEventsTicker.tsx`, `src/data/servicesData.ts` (add more recentEvents entries)

---

## 6. Visibility Fixes (White-on-White, Yellow-on-Yellow)

**Issues found:**
- **Virtual Amazing Race:** Yellow accent color (#FFC400) used as text and background tints creates poor contrast in pricing section, package cards, and divider rails
- **Treasure Heist:** Same yellow issue (#FFD400)
- **Running Man Adventure:** Same yellow issue (#FFD400)
- **Mass Talks:** Orange accent (#F59E0B) may have contrast issues on light backgrounds

**Fix approach:** In the traffic light pricing cards and info bar, ensure accent-colored text has sufficient contrast. For yellow/orange accents, darken the text version or use the accent only for backgrounds with dark text.

**Files:** `src/components/service-page/ServiceHowItWorksWithPricing.tsx` (add contrast-aware color handling for light accent colors)

---

## 7. Divider Strip Visual Enhancement

**Current state:** All strips use CSS background patterns but most look very similar (faint lines/dots at low opacity). The user wants each to be visually distinctive and thematically relevant.

**Enhancements per strip:**

| Strip | Current | Enhancement |
|-------|---------|-------------|
| PoliceTapeStrip | Yellow/black diagonal lines | Add repeating "CAUTION DO NOT CROSS" text, increase opacity to 0.6 |
| MoneyStrip | Faint grid | Make green-tinted, add repeating "$" symbols in pattern, increase contrast |
| ArrowStrip | Diagonal lines | Add actual arrow/chevron shapes (>>>) repeating |
| VaultStrip | Diagonal lines | Add gear/dial/keyhole shapes, gold-tinted rails |
| TimerStrip | Faint tick marks | Add clock-style tick marks, countdown numbers |
| FoamDartStrip | Dotted markers | Add bullet/dart shapes, increase size/opacity |
| BlueprintStrip | Grid lines | Add heavier grid with measurement markers |
| RouteStrip | Route dots | Add checkpoint flags, dashed path pattern |
| GelBeadsStrip | Scattered dots | Make dots larger, add splatter effect, increase color |
| SquidStrip | Circle/triangle/square | Make shapes larger and bolder, increase opacity to 0.5 |
| RaceTrackStrip | Checkered flag | Already distinct - minor opacity boost |

**New strip needed:** `LaserStrip` for Tag-tical Laser Teambuilding (crosshair/beam pattern)

**Files:** All files in `src/components/service-page/dividers/`, plus `ServiceDividerStrip.tsx` for the new laser variant, and `src/data/servicesData.ts` to assign it

---

## 8. Missing Icon Mappings (Broken Add-on Icons)

**Current `iconMap` in `ServiceHowItWorksWithPricing.tsx` only has 8 icons.** Services reference 15+ icons that fall back to generic `Palette`.

**Icons to add:** `FileText`, `Video`, `Users`, `Gamepad2`, `Dumbbell`, `Mic`, `Gift`, `Moon`, `Award`, `PenTool`, `Brain`, `Shield`, `Heart`, `Target`, `Puzzle`, `GraduationCap`, `Phone`, `ClipboardList`, `Flag`, `Clock`

**Files:** `src/components/service-page/ServiceHowItWorksWithPricing.tsx`

---

## 9. Mini Gallery Expansion (3 to 7 Photos in Carousel)

**Current state:** `ServiceMiniGallery` shows only 3 images in a static grid (`images.slice(0, 3)`).

**Changes needed:**
- Convert to an embla-carousel (already installed as dependency) showing up to 7 images
- Mobile: 1 image at a time with swipe
- Desktop: 3 visible with navigation arrows, carousel loops
- Remove the `slice(0, 3)` limit

**Files:** `src/components/service-page/ServiceMiniGallery.tsx`

---

## 10. Testimonial Author Formatting

**Current state:** Full names displayed (e.g., "Michelle Goh", "David Chen").

**Changes needed:** Format as "First Name + Last Initial." (e.g., "Michelle G.", "David C.")
- Apply in `ServiceTestimonialNew.tsx` display logic (format the author string before rendering)
- Also update the About page testimonials similarly

**Files:** `src/components/service-page/ServiceTestimonialNew.tsx`, `src/pages/AboutPage.tsx`

---

## 11. Remove Social Media Links from Footer

**Current state:** Footer has Facebook, LinkedIn, Instagram icons linking to "#".

**Changes needed:** Remove the social links section entirely from the footer since no active social media accounts exist for Elluminate.

**Files:** `src/components/Footer.tsx`

---

## 12. Remove "Travel Planning" from Navbar

**Current state:** The Retreats dropdown includes "Travel Planning" which leads to a 404 page.

**Changes needed:** Remove the `travel-planning` entry from the `retreatServices` array in both desktop and mobile nav.

**Files:** `src/components/Navbar.tsx`

---

## 13. Footer Branding Update

**Current state:** Footer description says "Team Elevate" and references old messaging. Also footer copyright says "Since 2017" but About page says "Since 2019."

**Changes needed:**
- Ensure footer says "Elluminate" consistently
- Correct founding year to match (use 2017 if that's accurate)

**Files:** `src/components/Footer.tsx`

---

## Implementation Order

1. **Branding fixes first** (SEO, About page, Footer) - quick wins, high impact
2. **Icon mapping fix** - resolves broken visuals across all training/retreat pages
3. **Navbar cleanup** - removes broken link
4. **Social media removal** from footer
5. **Testimonial formatting** - simple display logic change
6. **Visibility/contrast fixes** - yellow-on-yellow and similar issues
7. **Company ticker enhancement** - more companies, smoother infinite scroll
8. **Divider strip visual enhancements** - all 11 strips + new LaserStrip
9. **Mini gallery carousel** - expand from 3 to 7 with embla-carousel
10. **Hero banner refinement** - DuotonePerson cutouts, rainbow SPARK, improved lightbulb pills
11. **Service hero themed items** - floating icons on left side of each service hero

---

## Technical Notes

- The `servicesData.ts` file is very large (4681 lines). Edits will be targeted to specific line ranges.
- Divider strips are all self-contained components, each under 50 lines - straightforward to enhance.
- The embla-carousel package is already installed and used in `src/components/ui/carousel.tsx`.
- DuotonePerson component already exists with hover effects - just needs integration into HeroSection.
- Logo generation is possible via Lovable AI image generation API but would require an edge function to call the API and store results. This can be a follow-up task.
- All About page testimonials currently reference "Team Elevate" and need to be updated to "Elluminate".
