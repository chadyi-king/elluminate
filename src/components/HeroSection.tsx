import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Music, 
  Users, 
  Trophy, 
  Sparkles, 
  Building, 
  Heart, 
  Tent 
} from "lucide-react";

const servicePillars = [
  { icon: Music, label: "Dinner & Dance" },
  { icon: Users, label: "Team Building" },
  { icon: Trophy, label: "Awards" },
  { icon: Sparkles, label: "Activations" },
  { icon: Building, label: "Town Halls" },
  { icon: Heart, label: "Family Days" },
  { icon: Tent, label: "Carnivals" },
];

const letterAnimation = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

export const HeroSection = () => {
  const elevateLetters = "ELEVATE".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-deep">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Hero background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/80 via-background/60 to-background-deep" />
        
        {/* Spotlight effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Light beams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-primary/40 to-transparent"
            style={{ left: `${20 + i * 15}%` }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: [0, 300, 0], opacity: [0, 0.4, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* TEAM text */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary/60 text-sm md:text-base tracking-[0.5em] uppercase font-sans mb-2"
          >
            TEAM
          </motion.span>

          {/* ELEVATE letters - Trophy style */}
          <div className="flex items-end justify-center gap-1 md:gap-3 mb-8">
            {elevateLetters.map((letter, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="relative"
              >
                <span className="text-trophy-gold font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.1em] drop-shadow-2xl">
                  {letter}
                </span>
                {/* Glow under each letter */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-2 bg-primary/30 rounded-full blur-md"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>

          {/* Service Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12"
          >
            {servicePillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                {/* Pedestal base */}
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-gold transition-all duration-300">
                    <pillar.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-ember transition-colors" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground group-hover:text-primary-soft tracking-wide uppercase transition-colors">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-lg md:text-2xl lg:text-3xl text-primary-soft/80 font-display font-light tracking-wide mb-10 max-w-2xl"
          >
            Where Moments Become Masterpieces
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <Button variant="hero" size="xl" className="group">
              <span>Start Planning Your Event</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ height: [8, 16, 8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 bg-primary/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
