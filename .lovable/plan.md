

# Unified Website Refinement Plan - All Remaining Tasks

This plan combines the previously separated tasks with the service data improvements into a single comprehensive implementation.

---

## Part A: Navigation Fixes

**File: `src/components/Navbar.tsx`**

1. **Swap Team Building and Retreats order** -- In the desktop left nav (lines 175-192), move the "Team Building" NavDropdown BEFORE the "Retreats" NavDropdown. Same swap in mobile menu (lines 274-316): move "Team Building - Physical" and "Team Building - Virtual" sections before "Retreats".

2. **Shorten "Tag-tical Laser Teambuilding"** -- Line 21: change `name: "Tag-tical Laser Teambuilding"` to `name: "Tag-tical Laser"`.

3. **Fix School Events link** -- Lines 223 and 345: change `href="https://encompass.sg"` to `href="https://encompasse.org"`.

4. **Color differentiation for Physical vs Virtual** -- In the mega-menu subGroups rendering (lines 91-110), style the "PHYSICAL" header text in primary blue and the "VIRTUAL" header text in purple/teal (e.g., `text-purple-600`) to visually distinguish the two columns.

---

## Part B: Homepage Hero - DuotonePerson Cutouts

**File: `src/components/HeroSection.tsx`**

Add three DuotonePerson cutouts from existing assets, positioned at the bottom of the hero between the CTA buttons and the ServicePills:

- Import `DuotonePerson` from `./hero/DuotonePerson`
- Import person images: `person-corporate-woman.png` (left, blue), `person-student.png` (center, pink), `person-businessman.png` (right, green)
- Add a relative container div wrapping the three DuotonePerson components
- Position: left person at ~15% from left, center person at center, right person at ~15% from right
- Each person has their themed duotone color and glow, with lightbulb icons above their heads
- Adjust z-index so persons appear behind the text content but in front of the photo wall

---

## Part C: Homepage Section Color Variation

Currently nearly every homepage section is white/very faint. Add alternating blue-tinted backgrounds to break up the monotony.

**Files to modify:**

| Section | File | Current Background | New Background |
|---------|------|-------------------|----------------|
| SocialProofSection | `src/components/SocialProofSection.tsx` | `bg-gradient-to-b from-secondary/50 via-background to-secondary/30` | Keep (already has some color) |
| ServicesSection | `src/components/ServicesSection.tsx` | `bg-gradient-to-b from-secondary/30 via-background to-secondary/20` | Add stronger blue tint: `from-primary/5 via-primary/3 to-primary/5` |
| CaseStudiesSection | `src/components/CaseStudiesSection.tsx` | `bg-gradient-to-b from-secondary/30 via-background to-secondary/50` | Add blue-tinted background: `bg-gradient-to-b from-blue-50 via-primary/5 to-blue-50` |
| GallerySection | `src/components/GallerySection.tsx` | `bg-gradient-to-b from-background via-secondary/30 to-background` | Keep as-is (already has variation) |
| CTASection | `src/components/CTASection.tsx` | `bg-gradient-to-br from-primary via-primary to-sky-500` | Keep (already blue) -- verify button contrast: "Book a Consultation" has `text-white` on blue bg which is fine |

---

## Part D: About Us Hero Banner Redesign

**File: `src/pages/AboutPage.tsx`** (Section 1, lines 183-248)

Replace the current generic centered-text hero with a more dynamic split layout:

- **Left side:** Bold headline "Where Teams Come Alive" with a gradient accent bar, animated stats badges (1000+ Events, 100K+ Participants, 8 Years), and the CTA button
- **Right side:** A collage/grid of 3-4 event photos from existing assets (team celebration, outdoor team building, dinner dance, overseas retreat) with overlapping layout and subtle rotation
- Add a subtle animated gradient background (blue-to-sky gradient with floating particles instead of GoldParticles)
- Add the lightbulb brand icon as a large semi-transparent watermark behind the text

Also add alternating section backgrounds throughout the About page:
- Section 3 (Mission/Vision/Values): Add `bg-primary/[0.03]` tint
- Section 5 (Key Metrics): Add `bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent`
- Testimonials section: Add subtle blue tint

---

## Part E: Service Data Comprehensive Fixes

**File: `src/data/servicesData.ts`** (all targeted line-range edits)

### E1. Global "Team Elevate" to "Elluminate" replacement
Replace all ~75 occurrences of "Team Elevate" with "Elluminate" across all testimonials, overviews, and descriptions.

### E2. Fix hero background images for training services

| Service | Current | Fix To |
|---------|---------|--------|
| Mass Talks | `teamBuildingHero` | `summitsHero` |
| Workshops | `teamBuildingHero` | `leadershipOffsiteHero` |
| Youth Camps | `teamBuildingHero` | `familyFunDayHero` |
| Corporate Days | `teamBuildingHero` | `corporateCarnivalHero` |

### E3. Add `dividerVariant: "laser"` to Tag-tical Laser service data
Also update the `ServiceData` interface `dividerVariant` type union to include `"laser"`.

### E4. Fix GelBlitz accent color
Change `accentColor: "#2A8DFF"` to `accentColor: "#FF8A3D"` for gel-blitz entry.

### E5. Expand client logos and recent events for ALL services
Every service should have 8-12 client names in `clientLogos` and 8-12 entries in `recentEvents`. Currently many physical activities have only 1-4 entries. Will add companies like DBS, Google, Shopee, Grab, Meta, Deloitte, Amazon, Singtel, NTUC, GovTech, Microsoft, Standard Chartered, HSBC, etc.

### E6. Enrich "What to Expect" copywriting
Expand sparse step descriptions for: Archery Tag, GelBlitz, Nerfwar, Tag-tical Laser, Builder Cross, Running Man, Sotong Game, Minute To Win It. Each step gets 2-3 vivid sentences that paint a picture of the experience.

### E7. Add testimonials for sparse services
Expand from 1-3 to 5-6 testimonials per service for: Archery Tag, Builder Cross, GelBlitz, Minute To Win It, Monopoly Dash, Nerfwar, Running Man, Sotong Game, Tag-tical Laser.

### E8. Add FAQs for services with empty FAQ arrays
Add 3-5 relevant FAQs covering group size, venue, safety, customization, and duration for: CSI-Bones, Cultural Race, Archery Tag, Builder Cross, GelBlitz, Minute To Win It, Monopoly Dash, Nerfwar, Running Man, Sotong Game, Tag-tical Laser.

---

## Part F: Visibility/Contrast Fixes

**File: `src/components/service-page/ServiceHowItWorksWithPricing.tsx`**

Add a `getReadableTextColor` helper function that detects light accent colors (yellow, orange, amber) and returns a darkened version for text usage. This fixes:
- Amazing Race (#FFC400) -- yellow text invisible on light backgrounds
- Treasure Heist (#FFD400) -- same issue
- Running Man (#FFD400) -- same issue
- Tag-tical Laser (#FFC400) -- same issue
- Mass Talks (#F59E0B) -- amber contrast issues

Apply the darkened color to: section header accent text, step number badges, info bar icons/text, and any accent-colored text on light backgrounds.

### Adaptive "What to Expect" Grid Layout
Update the grid column logic to be dynamic based on `steps.length`:
- 1-2 items: `grid-cols-1 sm:grid-cols-2`
- 3 items: `grid-cols-1 sm:grid-cols-3`
- 4 items: `grid-cols-2`
- 5+ items: `grid-cols-2 sm:grid-cols-3`

---

## Part G: Elluminate Logo Concepts

Generate logo ideas using the Lovable AI image generation capability. The logo should incorporate:
- The lightbulb motif (brand = "illuminating" teams)
- The double-L in "Elluminate" as a design feature
- Primary blue (#1F7CFF) with optional yellow/gold accent
- Clean, modern, professional styling

This requires creating an edge function that calls the AI image generation model (e.g., `google/gemini-3-pro-image-preview`) to produce 3-4 logo variations. The generated images can be stored in file storage and displayed to the user for review.

**Concept directions:**
1. Lightbulb icon with "E" integrated into the filament
2. Abstract double-L forming a lightbulb silhouette
3. Minimalist "E" with a glowing spark accent at the top
4. Wordmark "Elluminate" with the dot on the "i" replaced by a lightbulb

---

## Implementation Order

1. Navigation fixes (Part A) -- quick, fixes broken links
2. Service data fixes (Part E) -- bulk content improvements
3. Contrast/visibility fixes (Part F) -- fixes unreadable text
4. Homepage color variation (Part C) -- visual improvement
5. Hero DuotonePerson cutouts (Part B) -- major hero visual
6. About Us hero redesign (Part D) -- page-level improvement
7. Logo generation (Part G) -- creative task, done last

---

## Summary of Files Modified

| File | Changes |
|------|---------|
| `src/components/Navbar.tsx` | Swap Team Building/Retreats, shorten Tag-tical, fix School Events link, Physical/Virtual color labels |
| `src/components/HeroSection.tsx` | Add 3 DuotonePerson cutouts with imports |
| `src/data/servicesData.ts` | Replace Team Elevate, fix hero images, fix GelBlitz color, add laser dividerVariant, expand clients/events/testimonials/FAQs/descriptions |
| `src/components/service-page/ServiceHowItWorksWithPricing.tsx` | Add contrast helper, dynamic grid layout |
| `src/components/ServicesSection.tsx` | Stronger blue tint background |
| `src/components/CaseStudiesSection.tsx` | Blue tint background |
| `src/pages/AboutPage.tsx` | Hero redesign with split layout, add section color tints |
| New edge function (for logo) | AI image generation for logo concepts |

