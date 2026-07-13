import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to know which activity I want before I enquire?",
    answer:
      "No. Share your group size, date or timing window, venue preference and what you want the event to achieve. We can use those details to recommend a practical activity or event direction.",
  },
  {
    question: "What kinds of company experiences can Elluminate plan?",
    answer:
      "Elluminate supports physical and virtual team building, local and overseas retreats, facilitated workshops, training sessions and larger company experiences. The scope is shaped around the audience, setting and event objective.",
  },
  {
    question: "Can team building work indoors or outdoors?",
    answer:
      "Yes. The suitable format depends on your venue, group size, activity level and programme duration. For outdoor plans, weather and fallback requirements can be discussed while the event is being shaped.",
  },
  {
    question: "Can you help with the venue and event logistics?",
    answer:
      "Venue and logistics support can be discussed as part of the brief. Tell us what is already confirmed and where you need help so the recommendation and quote reflect the right scope.",
  },
  {
    question: "What should I send to get an event quote?",
    answer:
      "Start with your expected pax, preferred date or timing window, venue or area, event objective and any budget guidance you can share. If some details are still open, send what you know and we can clarify the rest with you.",
  },
  {
    question: "How are Elluminate and Team Elevate connected?",
    answer:
      "Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. Selected client history, reviews, event footage and cumulative experience shown on this website include work delivered under Team Elevate and Elluminate.",
  },
];

export const HomeFAQSection = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="border-t border-border bg-secondary/25 py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Planning questions</p>
            <h2 className="mt-4 font-display text-3xl font-black text-foreground md:text-5xl">
              What clients usually want to know first.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              You can enquire before every detail is final. A useful brief is enough to begin the conversation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-foreground hover:no-underline md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-5 text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
