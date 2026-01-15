import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useState, useCallback } from "react";
import { ConfettiBurst } from "./ConfettiBurst";
import { PhotoWall } from "./hero/PhotoWall";
import { RotatingWord, wordData } from "./hero/RotatingWord";
import { ServicePills } from "./hero/ServicePills";

// SPARK letters
const sparkLetters = ["S", "P", "A", "R", "K"];

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Layer 1: Animated Photo Wall Background */}
      <PhotoWall />

      {/* Confetti */}
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Layer 2: Main Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20 pb-24">
        <div className="flex flex-col items-center text-center w-full">
          {/* Main Headline - Much larger, covering 3/4 of screen */}
          <motion.h1
            className="text-[8vw] sm:text-[7vw] md:text-[6.5vw] lg:text-[6vw] font-display font-black leading-[0.95] mb-6 w-full"
          >
            {/* IGNITE THE */}
            <motion.div className="mb-1">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-primary mr-[2vw]"
              >
                IGNITE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block text-primary"
              >
                THE
              </motion.span>
            </motion.div>

            {/* SPARK with Bebas Neue - Extra large with dynamic color */}
            <motion.div
              className="mb-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sparkLetters.map((letter, index) => (
                <motion.span
                  key={letter}
                  className="inline-block font-bebas text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] cursor-pointer transition-colors duration-500"
                  style={{ 
                    color: currentColor,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -15,
                    textShadow: "0 15px 30px rgba(0,0,0,0.3), 0 8px 10px rgba(0,0,0,0.2)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* WITHIN YOUR + Rotating Word */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center flex-wrap gap-[1vw]"
            >
              <span className="text-foreground">WITHIN</span>
              <span className="text-foreground">YOUR</span>
              <RotatingWord onWordChange={handleWordChange} />
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-6 font-sans"
          >
            Transform your team with Singapore's leading team building experiences. 
            Over <span className="text-primary font-bold">1,000+ events</span> delivered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
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
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Service Pills - Circular icons */}
          <ServicePills />
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
