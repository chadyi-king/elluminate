import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background-deep via-[hsl(43,25%,10%)] to-background-deep relative overflow-hidden">
      {/* Spotlight effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43, 65%, 52%, 0.18) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/10 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Light beams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-0.5 bg-gradient-to-t from-primary/40 to-transparent"
          style={{ left: `${25 + i * 12}%` }}
          animate={{
            height: [0, 250, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3.5,
            delay: i * 0.6,
            repeat: Infinity,
          }}
        />
      ))}

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
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold mb-8 uppercase tracking-wide"
          >
            READY TO ELEVATE YOUR EXPERIENCE?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button variant="hero" size="xl" className="group font-display font-bold">
              <span>Start Planning Now</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button variant="gold-outline" size="lg" className="font-display font-bold">
              Book a Consultation
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground/70 text-sm font-display"
          >
            Our strategists respond within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
