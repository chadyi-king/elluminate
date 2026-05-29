## Add FAQ Section to Amazing Race Page

Reuse the existing `ServiceFAQAccordion` component (already built for overseas-retreats) and render it conditionally for the `amazing-race` slug on `ServicePage.tsx`, placed directly above the "What Our Clients Say" testimonials section.

### Files

**Edit: `src/pages/ServicePage.tsx`**
- Add a local `amazingRaceFaqs` const with the 5 Q&A pairs (verbatim from the request).
- Directly above the testimonials block (same insertion point as the overseas-retreats FAQ), add:
  ```tsx
  {slug === "amazing-race" && (
    <ServiceFAQAccordion
      title="Amazing Race FAQ"
      subtitle="Frequently asked questions about our Amazing Race team building programmes in Singapore."
      accentColor={service.accentColor}
      faqs={amazingRaceFaqs}
    />
  )}
  ```

### FAQ content (verbatim)
1. What is an Amazing Race team building activity?
2. Is Amazing Race suitable for all fitness levels?
3. What happens if it rains during the Amazing Race?
4. Can the Amazing Race be customised?
5. Where can Amazing Race team building activities be conducted?

### Design notes
- No new component needed — `ServiceFAQAccordion` already matches the site's clean corporate FAQ styling (light gradient background, rounded-2xl cards, shadcn Accordion with chevron, Framer Motion fade-in-up, `FAQPage` JSON-LD for SEO, accent dot using the service `accentColor`).
- Fully responsive, hover lifts shadow, smooth expand/collapse via existing `accordion-down/up` animations.
- No changes to other services, routing, or data layer.
