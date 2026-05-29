## Add FAQ Section to Running Man Page

Reuse the existing `ServiceFAQAccordion` (already used for overseas-retreats and amazing-race) and render it conditionally for the `running-man` slug on `ServicePage.tsx`, placed directly above the testimonials section alongside the other service FAQs.

### Files

**Edit: `src/pages/ServicePage.tsx`**
- Add a local `runningManFaqs` const with the 5 Q&A pairs (verbatim from the request).
- Next to the existing amazing-race FAQ block (just above the accent bar before testimonials), add:
  ```tsx
  {slug === "running-man" && (
    <ServiceFAQAccordion
      title="Running Man FAQ"
      subtitle="Frequently asked questions about our Running Man team building programmes in Singapore."
      accentColor={service.accentColor}
      faqs={runningManFaqs}
    />
  )}
  ```

### FAQ content (verbatim)
1. What is a Running Man team building event?
2. Is Name Tag Elimination included?
3. Is Running Man suitable for corporate teams?
4. Can Running Man be conducted indoors?
5. How many participants can join a Running Man event?

### Design notes
- No new component — `ServiceFAQAccordion` already matches site styling (light gradient bg, rounded-2xl cards, shadcn Accordion with chevron, Framer Motion fade-in-up, accent dot using service `accentColor`, `FAQPage` JSON-LD for SEO).
- Running Man's `accentColor` will automatically tint the dot/header for subtle on-brand energy without breaking the corporate look.
- No changes to data, routing, or other services.
