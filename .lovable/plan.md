## Add FAQ Section to Workshops & Training Page

Reuse the existing `ServiceFAQAccordion` and render it conditionally for the `workshops` slug on `ServicePage.tsx`, placed alongside the other service FAQ blocks (just above the testimonials accent bar).

### Files

**Edit: `src/pages/ServicePage.tsx`**
- Add a local `workshopsFaqs` const with the 5 Q&A pairs (verbatim from the request).
- Add a new conditional block next to the existing FAQ blocks:
  ```tsx
  {slug === "workshops" && (
    <ServiceFAQAccordion
      title="Workshops & Training FAQ"
      subtitle="Frequently asked questions about our corporate workshops, training programmes, and learning experiences."
      accentColor={service.accentColor}
      faqs={workshopsFaqs}
    />
  )}
  ```

### FAQ content (verbatim)
1. What corporate workshops do you offer?
2. Can workshops be combined with team building activities?
3. Do you provide personality profiling workshops?
4. How long are your workshops?
5. Are your workshops suitable for hybrid teams?

### Design notes
- No new component — `ServiceFAQAccordion` already matches site styling (light gradient bg, rounded-2xl cards, shadcn Accordion with chevron, Framer Motion fade-in-up, accent dot using service `accentColor`, `FAQPage` JSON-LD for SEO).
- Workshops' assigned `accentColor` (per the retreats/training accent token map) automatically tints the dot/header for a learning-focused, on-brand feel.
- No changes to data, routing, or other services.
