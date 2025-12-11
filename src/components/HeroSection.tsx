import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GoldParticles } from "./GoldParticles";
import {
  Music, 
  Users, 
  Trophy, 
  Sparkles, 
  Building, 
  Heart, 
  Plane 
} from "lucide-react";

// Import generated event photos
import teamCelebration from "@/assets/events/team-celebration-1.jpg";
import dinnerDance from "@/assets/events/dinner-dance-1.jpg";
import awardsCeremony from "@/assets/events/awards-ceremony-1.jpg";

const servicePillars = [
  { icon: Music, labelTop: "Dinner", labelBottom: "& Dance" },
  { icon: Users, labelTop: "Team", labelBottom: "Building" },
  { icon: Trophy, labelTop: "Awards", labelBottom: "Ceremonies" },
  { icon: Sparkles, labelTop: "Brand", labelBottom: "Activations" },
  { icon: Building, labelTop: "Town", labelBottom: "Halls" },
  { icon: Heart, labelTop: "Family", labelBottom: "Fun Days" },
  { icon: Plane, labelTop: "Overseas", labelBottom: "Retreats" },
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
      {/* Background with multiple event photos */}
      <div className="absolute inset-0">
        {/* Main background image collage effect */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-40">
          <div 
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${teamCelebration})` }}
          />
          <div 
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${dinnerDance})` }}
          />
          <div 
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${awardsCeremony})` }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/90 via-background/80 to-background-deep" />
        
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

      {/* Gold Particles Effect */}
      <GoldParticles />

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* TEAM text - Bigger and closer to ELEVATE */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-display text-xl md:text-2xl lg:text-3xl tracking-[0.4em] uppercase font-black mb-1"
          >
            TEAM
          </motion.span>

          {/* ELEVATE letters - Trophy style with plates - Smaller */}
          <div className="flex items-end justify-center gap-0.5 sm:gap-1 md:gap-2 mb-4">
            {elevateLetters.map((letter, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="relative flex flex-col items-center"
              >
                {/* Trophy Letter */}
                <div className="relative">
                  {/* Trophy glow */}
                  <motion.div
                    className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                  />
                  
                  {/* Trophy body - the letter */}
                  <span className="relative block text-transparent bg-clip-text bg-gradient-to-b from-primary-soft via-primary to-primary-deep font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide drop-shadow-2xl"
                    style={{
                      WebkitTextStroke: '1px hsl(43, 65%, 45%)',
                    }}
                  >
                    {letter}
                  </span>
                  
                  {/* Shine highlight */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-soft/30 to-transparent"
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                  />
                </div>

                {/* Trophy Plate/Pedestal */}
                <div className="relative mt-0.5 group cursor-pointer">
                  {/* Plate glow on hover */}
                  <div className="absolute inset-0 bg-primary/30 rounded blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Plate body */}
                  <div className="relative w-8 sm:w-10 md:w-12 lg:w-14 bg-gradient-to-b from-primary/40 via-primary/25 to-primary/15 border border-primary/50 rounded-sm py-0.5 sm:py-1 px-0.5 flex flex-col items-center gap-0 group-hover:border-primary/80 group-hover:shadow-gold transition-all duration-300">
                    {/* Top shine line */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary-soft/80 to-transparent" />
                    
                    {/* Icon */}
                    {servicePillars[i] && (() => {
                      const IconComponent = servicePillars[i].icon;
                      return (
                        <>
                          <IconComponent className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-primary group-hover:text-primary-ember transition-colors" />
                          <span className="text-[4px] sm:text-[5px] md:text-[6px] text-primary-soft/80 group-hover:text-primary-soft tracking-wide uppercase text-center leading-tight transition-colors font-display font-bold">
                            {servicePillars[i].labelTop}
                          </span>
                          <span className="text-[4px] sm:text-[5px] md:text-[6px] text-primary-soft/60 group-hover:text-primary-soft/80 tracking-wide uppercase text-center leading-tight transition-colors font-display -mt-0.5">
                            {servicePillars[i].labelBottom}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                  
                  {/* Plate base shadow */}
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-[90%] h-0.5 bg-primary/20 rounded-full blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Tagline H1 */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-primary-soft/80 font-display font-semibold tracking-wide mb-0 max-w-3xl"
          >
            Where Moments Become
          </motion.h1>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-metallic-gold font-display font-black tracking-wide mb-3"
          >
            MASTERPIECES
          </motion.span>

          {/* Secondary Tagline H2 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-xs md:text-sm lg:text-base text-muted-foreground font-display font-medium tracking-wide mb-8 max-w-2xl"
          >
            Singapore's Premier Corporate Event Specialists
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="hero" size="lg" className="group font-display font-bold">
              <span>Start Planning Your Event</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button variant="gold-outline" size="default" className="font-display font-semibold">
              View Our Portfolio
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
            >
              <motion.div
                animate={{ height: [6, 12, 6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-0.5 bg-primary/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};