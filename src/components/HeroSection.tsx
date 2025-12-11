import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Lightbulb, Users, Zap, Target, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useState, useEffect } from "react";
import { ConfettiBurst } from "./ConfettiBurst";

// Import hero images
import heroAmazingRace from "@/assets/hero/amazing-race.jpg";
import heroOverseasRetreat from "@/assets/hero/overseas-retreat.jpg";
import heroCreativeWorkshop from "@/assets/hero/creative-workshop.jpg";
import heroCsiInvestigation from "@/assets/hero/csi-investigation.jpg";
import heroWellnessActivity from "@/assets/hero/wellness-activity.jpg";
import heroAdventureChallenge from "@/assets/hero/adventure-challenge.jpg";
import heroTeamCelebration from "@/assets/hero/team-celebration.jpg";
import heroCulturalRace from "@/assets/hero/cultural-race.jpg";

const heroImages = [
  heroAmazingRace,
  heroOverseasRetreat,
  heroCreativeWorkshop,
  heroCsiInvestigation,
  heroWellnessActivity,
  heroAdventureChallenge,
  heroTeamCelebration,
  heroCulturalRace,
];

export const HeroSection = () => {
  const { openContactModal } = useContactModal();
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    setShowConfetti(true);
    setTimeout(() => openContactModal(), 300);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Images with crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Team building activity"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </AnimatePresence>
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Image navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image dots indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-8 bg-primary"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Confetti */}
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Animated tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 border-2 border-primary/30 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lightbulb className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <span className="text-sm font-semibold text-primary tracking-wide">Corporate Team Building Specialists</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block mr-3 md:mr-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
            >
              Ignite
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="inline-block mr-3 md:mr-5 text-primary"
            >
              the
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block text-primary"
            >
              Spark
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="inline-block mr-3 md:mr-5 text-foreground"
            >
              in
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-block mr-3 md:mr-5 text-foreground"
            >
              Your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="inline-block text-foreground"
            >
              Teams
            </motion.span>
          </motion.h1>

          {/* Subtitle with glassmorphism */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-12 font-sans bg-white/80 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/50 shadow-lg"
          >
            Transform your workforce with <span className="text-primary font-semibold">engaging team building</span> experiences that inspire collaboration, boost morale, and create lasting connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center gap-5 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
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
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
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

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: Users, value: 1000, suffix: "+", label: "Events Delivered" },
              { icon: Target, value: 100, suffix: "%", label: "Client Satisfaction" },
              { icon: Zap, value: 8, suffix: "+", label: "Years Experience" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white/95 border-2 border-transparent hover:border-primary/30 shadow-lg transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-primary mb-1" />
                <AnimatedCounter 
                  value={item.value} 
                  suffix={item.suffix}
                  className="text-3xl font-display font-black text-foreground"
                />
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 bg-white/30 backdrop-blur-sm"
        >
          <motion.div
            animate={{ height: [8, 16, 8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
