import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Sparkles } from "lucide-react";

export const CTASection = () => {
  const { openContactModal } = useContactModal();
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-sky-500">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl" />
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-20 right-20 text-white/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6"
          >
            Ready to Illuminate Your Team?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/90 text-xl mb-10"
          >
            Let's create an unforgettable experience for your team. Get in touch today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 font-display font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group" 
              onClick={openContactModal}
            >
              <span>Plan My Event</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-display font-bold bg-transparent" 
              onClick={openContactModal}
            >
              Book a Consultation
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-sm font-display"
          >
            Our team responds within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
