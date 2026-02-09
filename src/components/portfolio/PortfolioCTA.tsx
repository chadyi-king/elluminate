import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PortfolioCTAProps {
  onOpenContact: () => void;
}

export const PortfolioCTA = ({ onOpenContact }: PortfolioCTAProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920)` }}
        />
      </div>

      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      {/* Spotlight */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse, hsl(43 65% 52% / 0.15), transparent)" }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Ready to Elevate Your Next Event?
          </h2>
          
          <p className="text-xl text-white/70 mb-8">
            Let's design a masterpiece together.
          </p>

          <motion.button
            onClick={onOpenContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-primary text-black hover:bg-black hover:text-white hover:border hover:border-primary"
          >
            Plan My Event
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
