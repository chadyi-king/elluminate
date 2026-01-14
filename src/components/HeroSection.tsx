import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useState } from "react";
import { ConfettiBurst } from "./ConfettiBurst";
import { PhotoWall } from "./hero/PhotoWall";
import { RotatingWord } from "./hero/RotatingWord";
import { DuotonePerson } from "./hero/DuotonePerson";
import { ServicePills } from "./hero/ServicePills";

// Import person images
import personCorporateWoman from "@/assets/hero/person-corporate-woman.png";
import personStudent from "@/assets/hero/person-student.png";
import personBusinessman from "@/assets/hero/person-businessman.png";

// SPARK letter colors for rainbow gradient
const sparkLetters = [
  { letter: "S", color: "#FFC400" }, // Yellow
  { letter: "P", color: "#FF8A3D" }, // Orange
  { letter: "A", color: "#FF4F4F" }, // Red/Pink
  { letter: "R", color: "#A768FF" }, // Purple
  { letter: "K", color: "#2A8DFF" }, // Blue
];

export const HeroSection = () => {
  const { openContactModal } = useContactModal();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCTAClick = () => {
    setShowConfetti(true);
    setTimeout(() => openContactModal(), 300);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Layer 1: Animated Photo Wall Background */}
      <PhotoWall />

      {/* Confetti */}
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Layer 2: Main Content */}
      <div className="container mx-auto px-6 relative z-20 pt-24 pb-32">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-4 leading-tight"
          >
            {/* IGNITE THE */}
            <motion.div className="mb-2">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-primary mr-2 md:mr-4"
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

            {/* SPARK with rainbow colors */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sparkLetters.map((item, index) => (
                <motion.span
                  key={item.letter}
                  className="inline-block font-black"
                  style={{ color: item.color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {item.letter}
                </motion.span>
              ))}
            </motion.div>

            {/* WITHIN YOUR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center flex-wrap gap-2 md:gap-3"
            >
              <span className="text-foreground">WITHIN</span>
              <span className="text-foreground">YOUR</span>
              <RotatingWord />
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-sans"
          >
            Transform your team with Singapore's leading team building experiences. 
            Over <span className="text-primary font-bold">1,000+ events</span> delivered for corporates, schools, and organizations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="hero"
                size="lg"
                onClick={handleCTAClick}
                className="group shadow-xl text-lg px-8 py-6"
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
                className="bg-white/90 hover:bg-white border-2 border-primary/30 hover:border-primary text-lg px-8 py-6"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Service Pills - Layer 4 */}
          <ServicePills />
        </div>
      </div>

      {/* Layer 3: Duotone People */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] sm:h-[50%] md:h-[55%] pointer-events-none z-10">
        <div className="relative w-full h-full max-w-6xl mx-auto pointer-events-auto">
          {/* Corporate Woman - Left (Blue) */}
          <DuotonePerson
            image={personCorporateWoman}
            position="left"
            duotoneColor="hsl(214, 100%, 56%)"
            glowColor="rgba(42, 141, 255, 0.3)"
            delay={0.3}
          />

          {/* Student - Center (Pink/Red) */}
          <DuotonePerson
            image={personStudent}
            position="center"
            duotoneColor="hsl(350, 80%, 50%)"
            glowColor="rgba(255, 79, 79, 0.3)"
            delay={0.5}
          />

          {/* Businessman - Right (Green) */}
          <DuotonePerson
            image={personBusinessman}
            position="right"
            duotoneColor="hsl(160, 70%, 45%)"
            glowColor="rgba(38, 208, 124, 0.3)"
            delay={0.7}
          />
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
