import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
  accentColor: string;
}

export const ServiceFAQ = ({ faqs, accentColor }: ServiceFAQProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark background with dim image */}
      <div className="absolute inset-0 bg-background-deep">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920)` }}
        />
      </div>
      
      {/* Background pattern with accent color */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor} 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6 overflow-hidden"
                style={{ borderColor: `${accentColor}20` }}
              >
                <AccordionTrigger 
                  className="text-left font-display font-semibold hover:no-underline py-5 text-white"
                >
                  <span className="flex items-center gap-3">
                    <span 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 pl-5">
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
