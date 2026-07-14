import { motion } from "framer-motion";
import { GoldParticles } from "@/components/GoldParticles";

export const PortfolioHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Cinematic background image with slow parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920)` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      
      {/* Gold particles */}
      <GoldParticles />
      
      {/* Spotlight glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(ellipse, hsl(43 65% 52% / 0.15), transparent)" }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-6"
        >
          Our Masterpieces
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light"
        >
          A curated showcase of elevated experiences crafted for Singapore's finest teams.
        </motion.p>
        
        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-32 h-0.5 mx-auto mt-8"
          style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
        />
      </div>
    </section>
  );
};
