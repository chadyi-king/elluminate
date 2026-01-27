
## Plan: Create Retreat & Profiling Service Pages

### Overview
Add 5 new service pages for retreats and profiling tools. The MBTI, DISC, and OCEAN pages have full content from teamelevate.sg. Local Retreats and Overseas Retreats also have detailed content. Travel Planning will be created as a simplified service page.

---

### Services to Create (5 total)

| # | Slug | Title | Category | Pricing | Min-Max Pax |
|---|------|-------|----------|---------|-------------|
| 1 | `local-retreats` | LOCAL RETREATS | Retreat | $200-500/pax/night | 10-200 |
| 2 | `overseas-retreats` | OVERSEAS RETREATS | Retreat | From $300/pax/night | 10-100 |
| 3 | `mbti` | MBTI PERSONALITY PROFILING | Training | $250/pax | 10-100 |
| 4 | `disc` | DISC ASSESSMENT | Training | $250/pax | 10-100 |
| 5 | `ocean` | O.C.E.A.N PROFILING | Training | $250/pax | 10-100 |

---

### Content from Website

#### MBTI - "What's Your Type?"
**Tagline:** "Personality has the power to uplift, depress, curse and to bless."

**Overview:** Looking to find out more about who you are and how you work with others? What's your Type? breaks down your entire personality to figure out what drives you and which types you are able to get along with! This activity is designed as a team building event, where teams will discover the frameworks of the mind, energy, nature and tactics within us. By pushing values such as exploration, awareness and insightfulness, we aim to give your group a reflective event filled with diverse growth!

**What To Expect - The Four Frameworks:**
1. **Mind** - Extroversion vs Introversion: How we deal with one another
2. **Energy** - Sensory vs Intuitive: Determines how we see the environment and process information
3. **Nature** - Thinking vs Feeling: Influences how we make choices and deal with emotion
4. **Tactics** - Judging vs Prospecting: Reflects our commitment to practice, preparation, and decision-making

**Pricing:** $250/pax (includes Digital MBTI Profiles for Individuals)

---

#### DISC - "Communication is Key"
**Tagline:** "The biggest communication problem is that we do not listen to understand. We only listen to reply."

**Overview:** Are you compatible with others? What's your personality type? We will help you break down your entire core personality and figure out what makes you, well you. Since everyone is special, we believe this exercise will help with self-awareness and tell you about your specialty. This activity should be done with team members, where teams will find out each member's mind, energy, and nature.

**What To Expect:**
1. **Raise Self-Awareness** - Self-awareness is the first step toward constructive progress. DISC profiles demonstrate how you handle tension, respond to disagreements, and solve conflicts
2. **Make Conflict More Productive** - Conflict can be turned into a constructive, fruitful exercise using DISC profiles
3. **Manage Teams More Effectively** - Leaders become more effective when they have deep connections with their employees
4. **Train Without Judgment** - Nobody enjoys being judged. DiSC profiles level the playing field

**Pricing:** $250/pax (includes Digital DiSC Profiles for Individuals)

---

#### OCEAN - "The Big Five"
**Tagline:** "All great changes into Order is preceded always by Chaos."

**Overview:** Rated as one of the top most accurate personality tests in the world! OCEAN Big Five are the domains that represent the basic structure behind all individual personality traits. By diving in deeper, this will allow your team to identify predictive behaviors for real-life scenarios! Gain insights into different office environment situations and how various personalities deal with them.

**What To Expect - The Big Five:**
1. **Openness** - People who love learning a new skill or gain experiences usually score high in openness
2. **Conscientiousness** - People with a maximum score in Conscientiousness are most reliable and prompt
3. **Extroversion** - Extroverts gain energy by socializing; introverts are drained by interaction
4. **Agreeableness** - People who agree most with others are likely to be kind, friendly, cooperative
5. **Neuroticism** - Ability to reject negative emotions and maintain emotional stability

**Pricing:** $250/pax (includes Digital O.C.E.A.N Profiles for Individuals)

---

#### Local Retreats - "Explore Singapore"
**Tagline:** "Singapore may be small, but not all of it has been explored!"

**Overview:** The best ideal approach to engage communication among employees and their employer is to bond in a casual environment. For our local options, there are 3 themes: Staycation, Heritage or Luxury.

**What To Expect (3 Tiers):**
1. **Staycation** ($200/pax/night) - Affordable option for rewarding whole staff with a reasonable getaway
2. **Heritage** ($300/pax/night) - Unique twist with historical hotels: Goodwood Park, Capitol Kempinski, Raffles, Fort Canning, Barracks Hotel
3. **Luxury** ($500/pax/night) - 4-5 star hotels only for truly rewarding top performers

**Each tier includes:** Hotel Accommodations, Meals & Refreshments, Recreation/Entertainment, Special Add-ons

---

#### Overseas Retreats - "The World is Your Oyster"
**Tagline:** "The world is your company's oyster! Time to open it up and enjoy!"

**Overview:** Good interactions at corporate retreats and rewarding travel packages can help improve an employee's relationship with their company! Corporate retreats are the perfect place to start conversations with workers and imagine a better direction for influence and organization.

**What To Expect (Destinations):**
- **Bali** - Forested volcanoes, rice paddies, beaches, coral reefs
- **Hong Kong** - Cultural and modern landmark mix
- **Kuala Lumpur** - Luxury at affordable rate
- **Taiwan** - Culture and modern landmarks
- **Batam** - Intense affordable shopping
- **Indonesia** - Nature and modern attractions
- **Philippines** - Oceanic dives and boat rides
- **Thailand** - Beaches, food and culture
- **Bintan** - Golf courses, water sports, secluded beaches
- **Johor Bahru** - Legoland and affordable travels
- **Siem Reap** - Cultural haven of Cambodia
- **Vietnam** - Attractions plus shopping

**Pricing:** From $300/pax/night, 10-100 pax, 3-4 days

---

### Accent Colors

| Service | Color | Notes |
|---------|-------|-------|
| MBTI | `#8B5CF6` (Purple) | Personality/psychology theme |
| DISC | `#3B82F6` (Blue) | Communication/clarity theme |
| OCEAN | `#14B8A6` (Teal) | Ocean-inspired color |
| Local Retreats | `#10B981` (Emerald) | Singapore green |
| Overseas Retreats | `#5AB7AE` (Existing) | Keep current color |

---

### Navbar Updates

Update slugs to match website URLs:

**Training section:**
```typescript
const trainingServices = [
  { name: "MBTI Profiling", slug: "mbti" },
  { name: "DISC Assessment", slug: "disc" },
  { name: "OCEAN Profiling", slug: "ocean" },
  { name: "Mass Talks", slug: "mass-talks" },
  { name: "Workshops", slug: "workshops" },
  { name: "Youth Camps", slug: "youth-camps" },
  { name: "Corporate Days", slug: "corporate-days" },
];
```

---

### Implementation Details

Each service will follow the enhanced structure with:
- `accentColor` for theming
- `howItWorksFlow` with 3-5 items from website content
- `pricing` with startingPrice, unit, minimumPax, duration, activityType
- `packages` using trafficLightPackages or custom tiers (retreats)
- `addOns` from website (Food $8/pax, Venue TBD, Transport $120/bus, Prizes $150 for medals)
- `perfectForFlow` with relevant use cases
- Testimonials from website

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/data/servicesData.ts` | Add 5 new service entries (local-retreats, overseas-retreats update, mbti, disc, ocean) |
| `src/components/Navbar.tsx` | Update training slugs (mbti-training to mbti, disc-assessment to disc, ocean-profiling to ocean) |

---

### Technical Notes

- Overseas Retreats already exists but will be updated with website content
- MBTI/DISC/OCEAN all share same add-ons and pricing structure ($250/pax)
- Local Retreats has 3 pricing tiers (will use modified traffic light for Staycation/Heritage/Luxury)
- Duration for profiling services is "TBD Hours" on website - will use "2-4 hours" as reasonable estimate
- Management Incentive Retreats marked as "Currently Unavailable" on website - skip for now
