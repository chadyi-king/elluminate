# Add Homepage FAQ Section

Add a new accordion-style FAQ section to the homepage, placed directly below the Event Gallery and above the CTA section. Styled to match the existing Elluminate homepage (light background, Anton display headings, rounded cards, soft gradients, brand blue accents).

## Files

**New: `src/components/HomeFAQSection.tsx`**
- Light section (`bg-gradient-to-b from-background to-secondary/30`) so it bridges the Gallery (dark gradient end) and CTA below.
- Container with section header:
  - Eyebrow: "FAQ" in primary blue, uppercase tracked.
  - H2: "Frequently Asked <span class='text-primary'>Questions</span>" using `font-display font-black`.
  - Subtitle: "Everything you need to know about our corporate team building programmes in Singapore." in `text-muted-foreground`.
- Uses shadcn `Accordion` (type="single", collapsible) wrapped in a `max-w-3xl mx-auto` container.
- Each `AccordionItem`: rounded-2xl card, `bg-card`, soft border, subtle shadow, hover lifts shadow + border tint to `primary/40`, smooth chevron rotation (already built into shadcn accordion).
- Framer Motion fade-in-up on header and stagger on items (matches GallerySection pattern).
- FAQ data array contains the 5 Q&A pairs verbatim from the request.
- Includes FAQPage JSON-LD `<script type="application/ld+json">` for SEO (bonus, no UI impact).

**Edit: `src/pages/Index.tsx`**
- Import `HomeFAQSection`.
- Render `<HomeFAQSection />` between `<GallerySection />` and `<CTASection />`.

## Design Notes
- Reuses existing semantic tokens (`primary`, `muted-foreground`, `card`, `border`) — no new colors.
- Mobile: full-width accordion items, comfortable padding (`px-5 py-4`), 16px body text.
- Animation: shadcn's built-in `accordion-down/up` keyframes (already in tailwind config).
- No changes to other components, routing, or data.
