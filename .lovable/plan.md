
# Hero Fix + Site-Wide Visibility Sweep

This plan covers three main areas: reverting the hero cutouts, enlarging the rotating word, and a comprehensive visibility fix across the entire site.

---

## 1. Remove DuotonePerson Cutouts from Homepage Hero

**File: `src/components/HeroSection.tsx`**

- Remove the DuotonePerson import (line 10) and the three person image imports (lines 11-13)
- Remove the entire "DuotonePerson Cutouts" block (lines 166-189) -- the `<div className="relative w-full h-48...">` with all three `<DuotonePerson>` components inside
- This reverts the hero to just: headline, subtitle, CTA buttons, then ServicePills

---

## 2. Make Rotating Word Much Bigger

The rotating word (TEAM, SCHOOL, CLASS, WORKPLACE, SELF) is currently small (inherited text size ~3-4vw). The SPARK letters are `text-[20vw]` on mobile down to `text-[14vw]` on desktop. The rotating word should match that scale.

**File: `src/components/hero/RotatingWord.tsx`**

- Change the outer `<span>` min-width from `min-w-[180px] sm:min-w-[220px] md:min-w-[280px]` to much larger values to accommodate the bigger text: `min-w-[50vw] sm:min-w-[45vw] md:min-w-[40vw]`
- Add massive font sizing to the inner `<motion.span>`: `text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw]` -- slightly smaller than SPARK but still massive
- Keep the colored background pill style but ensure it scales properly with larger padding

**File: `src/components/HeroSection.tsx`**

- Update the "WITHIN YOUR" text size to be slightly bigger to bridge the gap: change from `text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw]` to `text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw]`

---

## 3. Fix `text-metallic-gold` -- NOT DEFINED (Critical)

`text-metallic-gold` is used in **160 places across 24 files** but is NOT defined in tailwind.config.ts or index.css. This means those elements render with no color applied (inheriting default/transparent), causing invisible text in many places.

**Fix approach:** Replace all `text-metallic-gold` with `text-primary` (the brand blue) across all files. This is the correct brand color for headlines.

**Files affected (24 files):**
- `src/pages/AboutPage.tsx` (10 occurrences)
- `src/components/service-page/ServiceGallery.tsx`
- `src/components/service-page/ServiceOverview.tsx`
- `src/components/service-page/ServiceCTA.tsx`
- `src/components/service-page/ServiceHero.tsx`
- `src/components/service-page/ServiceMoments.tsx`
- `src/components/service-page/ServiceBenefits.tsx`
- `src/components/service-page/ServiceTimeline.tsx`
- `src/components/portfolio/PortfolioCTA.tsx`
- `src/components/portfolio/FeaturedCaseStudies.tsx`
- `src/components/portfolio/PhotoGallery.tsx`
- `src/pages/ServicePage.tsx`
- And ~12 more files

---

## 4. Fix `shadow-gold` Variants -- NOT DEFINED

`shadow-gold`, `shadow-gold-soft`, `shadow-gold-intense` are used in ~54 places across 5 files but are NOT defined in tailwind.config.ts. These won't cause invisible text but they should have proper shadow definitions.

**Fix in `tailwind.config.ts`:** Add shadow definitions mapped to the primary blue brand color:
- `shadow-gold` -> `0 4px 30px hsl(214, 100%, 56%, 0.15)` (same as shadow-blue)
- `shadow-gold-soft` -> `0 2px 15px hsl(214, 100%, 56%, 0.1)`
- `shadow-gold-intense` -> `0 8px 50px hsl(214, 100%, 56%, 0.25)` (same as shadow-blue-intense)

---

## 5. Fix `border-border-gold` -- NOT DEFINED

`border-border-gold/20` and `border-border-gold/30` are used in ~65 places across 5 files (AboutPage, ServiceMoments, ServiceTestimonial, OurTeam) but `border-gold` color is not defined.

**Fix in `tailwind.config.ts`:** Add the color definition:
- `"border-gold"` -> `"hsl(var(--border-accent))"` (maps to the existing blue accent border)

---

## 6. Fix CTA "Book a Consultation" Button (White on White)

**File: `src/components/CTASection.tsx`** (line 75-82)

The button uses `variant="outline"` which applies `bg-background` (white). Combined with the className `text-white`, you get white text on a white button background -- invisible!

**Fix:** Add `bg-transparent` to override the variant's default `bg-background`:
```
className="border-white text-white hover:bg-white/10 font-display font-bold bg-transparent"
```

---

## 7. Fix Accent-Color-on-Light-Background in Service Components

The `getReadableTextColor` helper was added to `ServiceHowItWorksWithPricing.tsx` but other components also display accent colors as text on white/light backgrounds.

**Files needing the same fix:**

| File | Issue | Fix |
|------|-------|-----|
| `ServicePillsSection.tsx` (line 51) | Section title uses `color: accentColor` on white bg | Import and apply `getReadableTextColor` |
| `ServiceOverviewNew.tsx` (line 56) | Heading uses accent color on light bg | Import and apply `getReadableTextColor` |
| `ServiceClientLogos.tsx` | Section title and decorative line use accent color -- already uses muted text so OK | No change needed |

**Approach:** Extract `getReadableTextColor` into a shared utility (e.g., `src/lib/colorUtils.ts`) and import it in all service components that use accent colors as text on light backgrounds.

---

## Implementation Order

1. Remove DuotonePerson cutouts from hero
2. Make rotating word bigger
3. Fix `text-metallic-gold` -> `text-primary` (bulk find-replace across 24 files)
4. Fix CTA button visibility
5. Add missing shadow/border definitions to tailwind config
6. Fix accent-on-light contrast in ServicePillsSection and ServiceOverviewNew

---

## Summary of Files Modified

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Remove DuotonePerson cutouts, adjust "WITHIN YOUR" text size |
| `src/components/hero/RotatingWord.tsx` | Massive font size increase to match SPARK |
| `tailwind.config.ts` | Add shadow-gold variants, border-gold color |
| `src/components/CTASection.tsx` | Add bg-transparent to outline button |
| `src/lib/colorUtils.ts` (new) | Extract getReadableTextColor utility |
| `src/components/service-page/ServicePillsSection.tsx` | Apply contrast helper |
| `src/components/service-page/ServiceOverviewNew.tsx` | Apply contrast helper |
| ~24 files with `text-metallic-gold` | Replace with `text-primary` |
