import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useState, useCallback } from "react";
import { ConfettiBurst } from "./ConfettiBurst";
import { PhotoWall } from "./hero/PhotoWall";
import { RotatingWord, wordData } from "./hero/RotatingWord";

import { HeroCharacters } from "./hero/HeroCharacters";

// SPARK letters
const sparkLetters = [
  { letter: "S", color: "hsl(45, 100%, 50%)" },   // Yellow
  { letter: "P", color: "hsl(25, 100%, 55%)" },    // Orange
  { letter: "A", color: "hsl(340, 82%, 52%)" },     // Pink
  { letter: "R", color: "hsl(270, 70%, 55%)" },     // Purple
  { letter: "K", color: "hsl(160, 70%, 45%)" },     // Green
];

export const HeroSection = () => {
  const { openContactModal } = useContactModal();
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleCTAClick = () => {
    setShowConfetti(true);
    setTimeout(() => openContactModal(), 300);
  };

  const handleWordChange = useCallback((index: number) => {
    setCurrentWordIndex(index);
  }, []);

  // Get current color from rotating word
  const currentColor = wordData[currentWordIndex].color;

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-start overflow-hidden bg-white">
      {/* Layer 1: Animated Photo Wall Background */}
      <PhotoWall />

      {/* Character figures — left and right framing */}
      <HeroCharacters />

      {/* Confetti */}
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Layer 2: Main Content — text behind characters, buttons on top */}
      <div className="container mx-auto px-4 relative z-20 pt-[70px] pb-12 pointer-events-none">
        <div className="flex flex-col items-center text-center w-full">
          {/* SEO H1 — visually hidden, readable by Google */}
          <h1 className="sr-only">Team Building Singapore — Energise Your Team With Elluminate</h1>

          {/* Main Headline - Dramatic visual hierarchy */}
          <motion.div
            aria-hidden="true"
            className="font-display font-black leading-[0.95] mb-6 w-full"
          >
            {/* IGNITE THE - Much smaller */}
            <motion.div className="mb-2">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-primary text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] mr-[1vw] uppercase tracking-wide"
              >
                IGNITE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block text-primary text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] uppercase tracking-wide"
              >
                THE
              </motion.span>
            </motion.div>

            {/* SPARK with Orbitron (Horizon-like) - Massive with dynamic color */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sparkLetters.map((item, index) => (
                <motion.span
                  key={item.letter}
                  className="inline-block font-horizon text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] cursor-pointer transition-colors duration-500 tracking-tight"
                  style={{ 
                    color: item.color,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -15,
                    textShadow: `0 15px 30px ${item.color}40, 0 8px 10px ${item.color}20`,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {item.letter}
                </motion.span>
              ))}
            </motion.div>

            {/* WITHIN YOUR + Rotating Word - Stacked and centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col items-center"
            >
              <span className="text-foreground text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] uppercase tracking-wide mb-2">WITHIN YOUR</span>
              <motion.div layout className="flex justify-center">
                <RotatingWord onWordChange={handleWordChange} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-6 font-sans"
          >
            Team building, school programmes, training, and retreats designed to energise teams,
            classes, and student groups across Singapore.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="text-xs sm:text-sm text-foreground/70 max-w-2xl mb-8 font-sans tracking-wide uppercase"
          >
            Trusted by companies, schools, and public-sector teams with <span className="text-primary font-semibold">1,000+ events delivered</span>
          </motion.p>

          {/* CTA Buttons — topmost layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative z-30 flex flex-col sm:flex-row items-center gap-4 mb-10 pointer-events-auto"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="hero"
                size="lg"
                onClick={handleCTAClick}
                className="group shadow-xl text-base px-6 py-5"
              >
                <span>Plan My Event</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white/90 hover:bg-white border-2 border-primary/30 hover:border-primary text-base px-6 py-5"
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 bg-white/80 backdrop-blur-sm"
        >
          <motion.div
            animate={{ height: [6, 14, 6], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
