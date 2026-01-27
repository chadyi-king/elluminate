

## Plan: Create 8 Virtual Team Building Service Pages

### Overview
Add 8 new virtual/online team building service entries to `src/data/servicesData.ts` with full content scraped from teamelevate.sg. Also update Navbar references to use matching website slugs, and add two-tone gradient support to components.

---

### Services to Create (8 total, skipping Cure Or COVID)

| # | Slug | Title | Tagline | Min Pax | Max Pax | Duration |
|---|------|-------|---------|---------|---------|----------|
| 1 | `amazing-race-virtual` | AMAZING RACE VIRTUAL | "The World is waiting for you. Good Luck. Travel Safe and Go!" | 10 | 200 | 1.5-3 hours |
| 2 | `fit-in-your-team-virtual` | FIT IN YOUR TEAM | "A Fun and Competitive Workout Teambuilding Activity made for Your Team to get Energized!" | 10 | 300 | 1.5-3 hours |
| 3 | `the-gameshow-experience-virtual` | GAMESHOW EXPERIENCE | "6 in 1 Gameshows to play and challenge your colleagues" | 20 | 300 | 1.5-3 hours |
| 4 | `the-great-zodiac-hunt-virtual` | GREAT ZODIAC HUNT | "The Zodiac Animals have all escaped! It is up to you the Celestial Vanguards to get them all back!" | 10 | 200 | 1.5-3 hours |
| 5 | `the-nuclear-fallout-escape-room-virtual` | NUCLEAR FALLOUT ESCAPE ROOM | "To save the world, your team needs to work together to stop the Nuclear Countdown." | 10 | 100 | 1.5-3 hours |
| 6 | `the-patriot-act-virtual` | THE PATRIOT ACT | "Salute to our Great Nation by playing activities mixed of the old and new of Singapore" | 15 | 400 | 1.5-3 hours |
| 7 | `tomb-raider-king-treasure-hunt-virtual` | TOMB RAIDER KING | "The Grand Treasure Hunt Game made to push your team to the limit!" | 15 | 400 | 1.5-3 hours |
| 8 | `grand-christmas-delivery` | THE GRAND CHRISTMAS DELIVERY | "Santa's Village is under attack! You are the Elite Elf Force that will save Christmas!" | 15 | 400 | 1.5-3 hours |

---

### What To Expect Steps (Scraped from Website)

| Service | Step 1 | Step 2 | Step 3 |
|---------|--------|--------|--------|
| Amazing Race Virtual | Online Teambuilding Challenges | Innovative Activities for All | Thematic Values |
| Fit In Your Team | Physical Well-Being | Mental Well-Being | Social Well-Being |
| Gameshow Experience | Your Favourite Gameshows | Highest Points Wins | A Memorable Time |
| Great Zodiac Hunt | Online Teambuilding Challenges | Chinese New Year Inspired | Thematic Values |
| Nuclear Fallout Escape Room | Deep Communication Gameplay | Made for All Intellectual Types | Time is of the Essence |
| Patriot Act Virtual | Large Variety of Games | Highest Points Wins | Crazy Unforgettable Activities |
| Tomb Raider King | Hunt 5 Treasure Tombs | Highest Gold Wins | Crazy Unforgettable Activities |
| Grand Christmas Delivery | Party and Team Games | Deliver the Most Presents | Boss Battles Everywhere |

---

### Your Requested Accent Colors (Two-Tone Gradients)

| Service | Color 1 | Color 2 | Notes |
|---------|---------|---------|-------|
| Amazing Race Virtual | `#FFC400` (Amber) | - | Single color |
| Fit In Your Team | `#8B5CF6` (Purple) | - | Single color |
| Gameshow Experience | `#1F7CFF` (Blue) | - | Single color |
| Great Zodiac Hunt | `#EF4444` (Red) | - | CNY red theme |
| Nuclear Fallout Escape Room | `#26D07C` (Green) | - | Single color |
| Patriot Act Virtual | `#DC2626` (Red) | - | National/patriotic |
| Tomb Raider King | `#D97706` (Amber) | - | Treasure/ancient |
| Grand Christmas Delivery | `#DC2626` (Red) | `#26D07C` (Green) | Two-tone |

---

### Part 1: Component Changes (Two-Tone Gradient Support)

**Files to modify:**
1. `src/data/servicesData.ts` - Add optional `accentColorSecondary` field to ServiceData interface
2. `src/components/service-page/ServiceHeroSplit.tsx` - Use gradient when secondary color is provided
3. `src/components/service-page/ServiceHowItWorksWithPricing.tsx` - Add gradient glow effect
4. `src/components/service-page/ServiceOverviewNew.tsx` - Gradient accent line

**Interface change:**
```typescript
export interface ServiceData {
  accentColor: string;
  accentColorSecondary?: string;  // NEW - enables two-tone gradients
  // ... rest of interface
}
```

**Gradient implementation:**
- When `accentColorSecondary` is present, use CSS gradient between the two colors
- Hero section: gradient background glow
- Step cards: gradient border on hover
- CTA buttons: gradient background

---

### Part 2: Virtual Services Data (Content Only)

Each virtual service entry will follow the exact same structure as physical services:

```text
"slug": {
  accentColor: "#XXXXXX",
  accentColorSecondary: "#YYYYYY",  // Only for Christmas Delivery
  dividerVariant: "timer",
  hero: {
    title: "SERVICE NAME",
    subtitle: "Virtual Team Building",
    tagline: "Website tagline",
    backgroundImage: placeholder
  },
  overview: {
    description: "Website ELEVATE YOUR TEAM paragraphs combined...",
    backgroundImage: placeholder
  },
  features: [...],
  benefits: [...],
  howItWorksFlow: {
    sectionTitle: "WHAT TO EXPECT",
    sectionSubtitle: "Your Virtual Experience",
    itemsPerRow: 3,
    showNumbers: true,
    items: [/* 3 items from website */]
  },
  perfectForFlow: defaultVirtualPerfectFor,
  testimonials: [/* shared virtual testimonials from website */],
  cta: {...},
  clientLogos: [...],
  recentEvents: [...],
  pricing: {
    startingPrice: "From $25",
    unit: "per pax",
    minimumPax: X,
    duration: "1.5-3 hours",
    activityType: "indoor"
  },
  packages: trafficLightPackages("From $25/pax", "Service Name", "#accent"),
  addOns: defaultVirtualAddOns,
  hideOutcomes: true,
  hideMidCta: true,
  perfectForVariant: "pills"
}
```

---

### Part 3: Navbar Updates

Update `src/components/Navbar.tsx` virtualActivities array to match website slugs:

**Before:**
```typescript
const virtualActivities = [
  { name: "Virtual Amazing Race", slug: "virtual-amazing-race" },
  { name: "Online Escape Room", slug: "online-escape-room" },
  { name: "Virtual Team Games", slug: "virtual-team-games" },
  { name: "Remote Wellness", slug: "remote-wellness" },
];
```

**After:**
```typescript
const virtualActivities = [
  { name: "Amazing Race Virtual", slug: "amazing-race-virtual" },
  { name: "Fit In Your Team", slug: "fit-in-your-team-virtual" },
  { name: "Gameshow Experience", slug: "the-gameshow-experience-virtual" },
  { name: "Great Zodiac Hunt", slug: "the-great-zodiac-hunt-virtual" },
  { name: "Nuclear Fallout Escape Room", slug: "the-nuclear-fallout-escape-room-virtual" },
  { name: "The Patriot Act", slug: "the-patriot-act-virtual" },
  { name: "Tomb Raider King", slug: "tomb-raider-king-treasure-hunt-virtual" },
  { name: "Grand Christmas Delivery", slug: "grand-christmas-delivery" },
];
```

---

### Part 4: Shared Virtual Defaults

**defaultVirtualAddOns:**
```typescript
const defaultVirtualAddOns: AddOn[] = [
  { icon: "UtensilsCrossed", title: "Food", description: "$20/pax (delivered to homes)" },
  { icon: "Medal", title: "Prizes", description: "TBD (delivered individually)" },
];
```

**defaultVirtualPerfectFor:**
```typescript
const defaultVirtualPerfectFor: FlowSection = {
  sectionTitle: "PERFECT FOR",
  sectionSubtitle: "Virtual Events",
  itemsPerRow: 4,
  items: [
    { icon: Monitor, title: "Remote Teams", description: "Connect distributed team members across locations." },
    { icon: Home, title: "Work From Home", description: "Bring the office energy to home-based teams." },
    { icon: Globe, title: "Cross-Country Teams", description: "Unite international teams in one virtual space." },
    { icon: Users, title: "Hybrid Workplaces", description: "Bridge the gap between in-office and remote staff." },
    { icon: UserPlus, title: "Virtual Onboarding", description: "Welcome new hires with interactive team experiences." },
    { icon: Building, title: "Town Hall Add-ons", description: "Add engagement activities to virtual all-hands meetings." },
    { icon: Sparkles, title: "Year-End Celebrations", description: "Celebrate milestones with online team bonding." },
    { icon: Target, title: "Sales Kickoffs", description: "Energize sales teams with competitive virtual challenges." },
  ],
};
```

---

### Technical Implementation Summary

| File | Change |
|------|--------|
| `src/data/servicesData.ts` | Add `accentColorSecondary?` to interface, add `defaultVirtualAddOns`, add `defaultVirtualPerfectFor`, add 8 new service entries |
| `src/components/Navbar.tsx` | Update `virtualActivities` array with correct slugs |
| `src/components/service-page/ServiceHeroSplit.tsx` | Add gradient support when `accentColorSecondary` prop exists |
| `src/components/service-page/ServiceHowItWorksWithPricing.tsx` | Add gradient support for two-tone services |
| `src/pages/ServicePage.tsx` | Pass `accentColorSecondary` to relevant components |

---

### What Stays the Same

- All physical service pages (unchanged)
- Page structure and component order
- Traffic Light pricing system
- Existing testimonial format
- ServicePage.tsx routing (already dynamic)

---

### Notes

- All pricing shows "$25/pax" as per website
- Platform shows "Zoom / Laptop/Desktop" in overview descriptions
- Virtual add-ons are simpler (just Food + Prizes)
- `activityType` set to "indoor" for all virtual services

