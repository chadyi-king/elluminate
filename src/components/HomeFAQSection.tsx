import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What corporate team building activities do you offer in Singapore?",
    answer:
      "We offer a wide range of corporate team building activities in Singapore, including Amazing Race, Running Man, CSI mystery challenges, problem-solving games, outdoor adventures, indoor team bonding activities, personality profiling workshops, and corporate retreats. Our programmes are customised based on your objectives, group size, venue, and budget.",
  },
  {
    question: "How many participants can join your team building programmes?",
    answer:
      "Our programmes can accommodate groups ranging from 10 participants to over 1,000 participants. Activities can be customised for small leadership teams, department gatherings, or large company-wide events.",
  },
  {
    question: "Can your programmes be customised for our company?",
    answer:
      "Yes. We customise team building programmes based on your organisation's goals, company culture, event theme, venue, and participant profile. We can also incorporate company values, products, or learning objectives into the experience.",
  },
  {
    question: "Do you provide venues for team building events?",
    answer:
      "Yes. We can recommend and coordinate suitable venues across Singapore, including hotels, resorts, event spaces, parks, Sentosa, and indoor function rooms.",
  },
  {
    question: "What is the best team building activity for corporate teams?",
    answer:
      "The best activity depends on your objectives. Amazing Race programmes are ideal for engagement and exploration, Running Man promotes friendly competition, while CSI challenges focus on communication, problem-solving, and teamwork.",
  },
];

export const HomeFAQSection = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Soft decorative blobs to match site style */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about our corporate team building programmes in Singapore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-card hover:shadow-blue hover:border-primary/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg text-foreground hover:no-underline py-5">
                  <span className="flex items-center gap-3 pr-4">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5 pl-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
