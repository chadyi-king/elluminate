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
  { icon: Users, label: "Corporate Team Building" },
  { icon: Trophy, label: "Awards Ceremonies" },
  { icon: Sparkles, label: "Brand Activations" },
  { icon: Building, label: "Town Halls" },
  { icon: Heart, label: "Family Fun Days" },
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/90 via-background/70 to-background-deep" />
        
        {/* Spotlight effect from below */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/8 rounded-full blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Additional gold glow */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-2xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Light beams */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-primary/50 to-transparent"
            style={{ left: `${15 + i * 10}%` }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: [0, 400, 0], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 5,
              delay: i * 0.4,
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
            className="text-primary/70 text-sm md:text-lg tracking-[0.6em] uppercase font-sans mb-4"
          >
            TEAM
          </motion.span>

          {/* ELEVATE letters - Trophy style */}
          <div className="flex items-end justify-center gap-2 md:gap-4 mb-10">
            {elevateLetters.map((letter, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="relative"
              >
                {/* Trophy base glow */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 md:w-12 h-2 bg-primary/40 rounded-full blur-sm"
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                />
                <span className="text-trophy-gold font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] drop-shadow-2xl relative">
                  {letter}
                  {/* Shine highlight */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-soft/20 to-transparent"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                  />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Service Pillars - Pedestals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap items-start justify-center gap-3 md:gap-6 mb-14"
          >
            {servicePillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.7 + i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                {/* Pedestal with icon */}
                <div className="relative">
                  {/* Pedestal glow */}
                  <div className="absolute inset-0 bg-primary/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Pedestal box */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-b from-primary/25 to-primary/10 border border-primary/40 flex items-center justify-center group-hover:border-primary/70 group-hover:shadow-gold transition-all duration-300">
                    {/* Top shine line */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary-soft/60 to-transparent" />
                    <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-ember transition-colors" />
                  </div>
                  
                  {/* Pedestal base */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-2 bg-gradient-to-b from-primary/30 to-transparent rounded-b-sm" />
                </div>
                
                <span className="text-[9px] md:text-[10px] text-muted-foreground group-hover:text-primary-soft tracking-wider uppercase transition-colors text-center max-w-[80px] leading-tight">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Tagline H1 */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl text-metallic-gold font-serif font-semibold tracking-wide mb-4 max-w-3xl"
          >
            Where Moments Become Masterpieces
          </motion.h1>

          {/* Secondary Tagline H2 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="text-base md:text-xl lg:text-2xl text-primary-soft/70 font-sans font-light tracking-wide mb-12 max-w-2xl"
          >
            Singapore's Premier Corporate Event Specialists
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
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
            <Button variant="gold-outline" size="lg">
              View Our Portfolio
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
