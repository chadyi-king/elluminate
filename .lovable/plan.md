

## Plan: Redesign What to Expect & Add-ons with Trapezoid Image Layout

### Overview
Transform the "What to Expect" and "Optional Add-ons" sections into a two-column split layout with trapezoid-shaped images. The left column supports up to 6 items in a 2-row grid format. This applies to ALL service pages (physical + virtual).

---

### Visual Design

**What to Expect Section (Up to 6 Items):**
```
+--------------------------------------------------+
|  LEFT COLUMN (2x3 Grid)      |  RIGHT IMAGE      |
|                              |       ▼           |
| ┌────────┐ ┌────────┐ ┌────────┐    /            |
| │ 1 Icon │ │ 2 Icon │ │ 3 Icon │   /             |
| │ Title  │ │ Title  │ │ Title  │  /              |
| │ Desc   │ │ Desc   │ │ Desc   │ /   TRAPEZOID   |
| └────────┘ └────────┘ └────────┘/    IMAGE       |
| ┌────────┐ ┌────────┐ ┌────────┐                 |
| │ 4 Icon │ │ 5 Icon │ │ 6 Icon │   Full height   |
| │ Title  │ │ Title  │ │ Title  │   on right      |
| │ Desc   │ │ Desc   │ │ Desc   │   edge          |
| └────────┘ └────────┘ └────────┘                 |
+--------------------------------------------------+
```

**Flexible Grid Options:**
- 3 items: Single row (1, 2, 3)
- 4 items: Two rows (1, 2) + (3, 4)
- 5 items: Two rows (1, 2, 3) + (4, 5)
- 6 items: Two rows (1, 2, 3) + (4, 5, 6)

**Optional Add-ons Section (Opposite Layout):**
```
+--------------------------------------------------+
| LEFT IMAGE         |  RIGHT COLUMN (Grid)        |
|     ▲              |                             |
|      \             |  ┌────────┐ ┌────────┐      |
|       \            |  │ Food   │ │Transport│     |
|TRAPEZOID \         |  └────────┘ └────────┘      |
|IMAGE      \        |  ┌────────┐ ┌────────┐      |
|            \       |  │ Prizes │ │ Venue  │      |
|             \      |  └────────┘ └────────┘      |
+--------------------------------------------------+
```

---

### Technical Implementation

#### 1. Data Model Updates (`src/data/servicesData.ts`)

Add new optional image fields:

```typescript
export interface ServiceData {
  // ... existing fields
  howItWorksImage?: string;  // NEW - image for What to Expect section
  addOnsImage?: string;      // NEW - image for Add-ons section
}
```

#### 2. Component Redesign (`ServiceHowItWorksWithPricing.tsx`)

**Trapezoid CSS using clip-path:**

```css
/* Right-side trapezoid (What to Expect) */
clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);

/* Left-side trapezoid (Add-ons) - mirrored */
clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
```

**New Layout Structure:**

```tsx
{/* WHAT TO EXPECT - Grid Left, Image Right */}
<div className="flex flex-col lg:flex-row gap-0">
  {/* Left Column - 2x3 Grid of Steps */}
  <div className="lg:w-1/2 p-8">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {steps.map((step, index) => (
        <StepCard key={index} step={step} index={index} />
      ))}
    </div>
  </div>
  
  {/* Right Column - Trapezoid Image */}
  <div className="lg:w-1/2 relative min-h-[400px]">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${howItWorksImage})`,
        clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)'
      }}
    />
  </div>
</div>

{/* ADD-ONS - Image Left, Grid Right */}
<div className="flex flex-col lg:flex-row gap-0">
  {/* Left Column - Trapezoid Image */}
  <div className="lg:w-1/2 relative min-h-[300px]">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${addOnsImage})`,
        clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)'
      }}
    />
  </div>
  
  {/* Right Column - Add-on Items Grid */}
  <div className="lg:w-1/2 p-8">
    <div className="grid grid-cols-2 gap-4">
      {addOns.map((addOn, index) => (
        <AddOnCard key={index} addOn={addOn} />
      ))}
    </div>
  </div>
</div>
```

#### 3. Step Card Design (Compact for Grid)

```
┌─────────────────┐
│      [1]        │
│     [Icon]      │
│     Title       │
│   Description   │
└─────────────────┘
```
- Number badge at top
- Icon centered below
- Title and description centered
- Accent color border on hover
- Works in 2-column or 3-column grid

#### 4. Mobile Responsiveness

- Mobile: 2-column grid for steps (stacks 2 per row)
- Tablet: 3-column grid
- Desktop: 3-column grid with trapezoid image beside
- Trapezoid becomes full-width rectangle on mobile

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/data/servicesData.ts` | Add `howItWorksImage?: string` and `addOnsImage?: string` to interface |
| `src/components/service-page/ServiceHowItWorksWithPricing.tsx` | Complete redesign with split layout, trapezoid images, and grid cards |
| `src/pages/ServicePage.tsx` | Pass new image props to component |

---

### Grid Behavior Based on Item Count

| Items | Layout |
|-------|--------|
| 2 | 1 row: (1, 2) |
| 3 | 1 row: (1, 2, 3) |
| 4 | 2 rows: (1, 2) + (3, 4) or (1, 2, 3) + (4) |
| 5 | 2 rows: (1, 2, 3) + (4, 5) |
| 6 | 2 rows: (1, 2, 3) + (4, 5, 6) |

Using CSS grid with `grid-cols-3` and items will auto-wrap.

---

### What Stays the Same

- Traffic Light pricing section (stays between What to Expect and Add-ons)
- Info bar with Min Pax, Duration, Activity Type
- Section headers and accent colors
- Themed divider strips
- All existing service data content
- This applies to ALL 21 services (13 physical + 8 virtual)

