## Add FAQ Section to Overseas Corporate Retreats Page

Add an accordion FAQ section to `/services/overseas-retreats`, placed directly above the "What Our Clients Say" testimonials section. Match the homepage `HomeFAQSection` styling for consistency.

### Files

**New: `src/components/service-page/ServiceFAQAccordion.tsx`**
- Reusable accordion FAQ section styled to match `HomeFAQSection` (light background `bg-gradient-to-b from-background via-secondary/20 to-background`, soft decorative blobs, `max-w-3xl mx-auto` container, rounded-2xl cards with `bg-card`, hover lifts shadow + `border-primary/40`, primary blue dot before each question).
- Props: `title`, `subtitle`, `faqs: { question, answer }[]`, optional `accentColor` (used for the dot + hover border to match the service page accent).
- shadcn `Accordion` (type="single", collapsible) with built-in chevron + smooth `accordion-down/up` animations.
- Framer Motion fade-in-up on header and items (matches site pattern).
- Renders `FAQPage` JSON-LD `<script type="application/ld+json">` so content is SEO-crawlable.
- All text uses semantic tokens (`text-foreground`, `text-muted-foreground`, `font-display`).

**Edit: `src/pages/ServicePage.tsx`**
- Import `ServiceFAQAccordion`.
- Directly above the testimonials block (line 339, before the accent gradient bar on line 337), render the FAQ only when `slug === "overseas-retreats"`:
  ```tsx
  {slug === "overseas-retreats" && (
    <ServiceFAQAccordion
      title="Corporate Retreat FAQ"
      subtitle="Common questions about planning and organising overseas corporate retreats for your team."
      accentColor={service.accentColor}
      faqs={overseasRetreatsFaqs}
    />
  )}
  ```
- Define the 5 Q&A pairs (verbatim from the request) as a local const `overseasRetreatsFaqs` at the top of the file (or co-locate inside the component file and import).

### FAQ content (verbatim)
1. What is a corporate retreat?
2. Do you organise overseas corporate retreats?
3. What activities can be included in a corporate retreat?
4. How long should a corporate retreat be?
5. Can you handle retreat logistics and planning?

### Design notes
- Visually identical to the homepage FAQ for brand consistency, but accent dot/hover-border use the overseas-retreats service `accentColor` for subtle page cohesion.
- Mobile: full-width items, `px-5 py-4`, 16px body text.
- No changes to other services, routing, data layer, or other components.
