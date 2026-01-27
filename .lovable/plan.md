

## Plan: Populate 13 Physical Teambuilding Services with Scraped Website Content

### Overview
Update `src/data/servicesData.ts` to replace placeholder/generic content with actual copy from teamelevate.sg for all 13 physical game services. **Only content changes - no structural or design changes.**

---

### What Changes (Content Only)

| Field | Source | Component |
|-------|--------|-----------|
| `hero.title` | Website title (e.g., "THE AMAZING RACE") | ServiceHeroSplit |
| `hero.tagline` | First tagline from website | ServiceHeroSplit |
| `overview.description` | Incorporates second tagline where applicable | ServiceOverviewNew |
| `howItWorksFlow.items` | "What To Expect" steps from website | ServiceHowItWorksWithPricing |
| `pricing.minimumPax` | Min pax from website | Info bar |
| `pricing.duration` | "3 hours" (replacing TBD) | Info bar |
| `pricing.activityType` | Indoor / Outdoor / "hybrid" | Info bar |
| `addOns` | Standardized website prices | Add-ons section |

---

### What Stays the Same (Structure Preserved)

- Page layout and section order
- Component structure (ServiceHeroSplit, ServiceOverviewNew, etc.)
- Accent colors per service
- Divider variants per service
- Testimonials (keeping current)
- Gallery images
- CTA sections
- Perfect For sections
- Traffic Light pricing tier structure

---

### Per-Service Content Updates

| # | Slug | Title | Tagline | Steps | Min Pax | Type |
|---|------|-------|---------|-------|---------|------|
| 1 | amazing-race | THE AMAZING RACE | "Singapore is waiting for you. Good Luck. Travel Safe and Go!" | 4 steps | 10 | outdoor |
| 2 | archery-tag | ARCHERY TAG | "Be the Hawkeye that is truly in you!" | 3 steps | 12 | hybrid |
| 3 | builder-cross | BUILDERCROSS | "Build Up Your Team by Building Structures That Last" | 4 steps | 10 | indoor |
| 4 | csi-bones | CSI - BONES | "People lie. The Evidence Doesn't" | 3 steps | 10 | indoor |
| 5 | cultural-race | CULTURAL RACE | "A people without knowledge of their Origins and Culture..." | 3 steps | 10 | outdoor |
| 6 | gel-blitz | GELBLITZ | "You should be out playing GelBlitz and Being Awesome" | 3 steps | 12 | hybrid |
| 7 | minute-to-win-it | MINUTE TO WIN IT | "Hundreds of Mini Games, One Minute To Win Them All" | 3 steps | 10 | indoor |
| 8 | monopoly-dash | MONOPOLY DASH | "Own Real Life Singapore Properties..." | 3 steps | 10 | outdoor |
| 9 | nerfwar | NERFWAR | "Action Packed and High Adrenaline!" | 3 steps | 10 | hybrid |
| 10 | running-man | RUNNING MAN ADVENTURE | "A fan favorite game made for all ages!" | 3 phases | 10 | outdoor |
| 11 | sotong-game | SOTONG GAME | "Building a team in the most 'Deadly' situation..." | 4 steps | 20 | outdoor |
| 12 | tag-tical-laser-teambuilding | TAGTICAL - LASER TAG | "You should be out playing Laser Tag and Being Awesome" | 3 steps | 10 | hybrid |
| 13 | treasure-heist | TREASURE HEIST | "Rob from the Pirates! Plan the Heist..." | 3 steps | 10 | outdoor |

---

### Standardized Add-ons (All Services)

- Food: $8/pax
- Transport: $120/bus
- Prizes: $150 for medals
- Venue: Depends on requirements
- Running Man only: Name Tags $5/nametag

---

### Technical Details

**File**: `src/data/servicesData.ts`

**Changes per service entry**:
1. Update `hero.title` to website casing
2. Update `hero.tagline` to first tagline
3. Update `overview.description` (incorporate second tagline for Archery Tag, Nerfwar)
4. Replace `howItWorksFlow.items` with "What To Expect" steps
5. Update `pricing.minimumPax`, `pricing.duration` ("3 hours"), `pricing.activityType`
6. Ensure `addOns` matches website pricing

**No changes to**:
- Component files
- Page structure
- CSS/styling
- Other services (non-physical)

