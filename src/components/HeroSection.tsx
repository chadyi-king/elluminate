import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Lightbulb, Users, Zap, Target, Sparkles } from "lucide-react";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import heroBg from "@/assets/hero-elluminate.jpg";
import { useState } from "react";
import { ConfettiBurst } from "./ConfettiBurst";

export const HeroSection = () => {
  const { openContactModal } = useContactModal();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCTAClick = () => {
    setShowConfetti(true);
    setTimeout(() => openContactModal(), 300);
  };

  // Text reveal animation for headline
  const headlineWords = ["Ignite", "the", "Spark"];
  const sublineWords = ["in", "Your", "Teams"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated-gradient">
      {/* Floating blobs background */}
      <FloatingBlobs opacity={0.12} />
      
      {/* Background Image with parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroBg} 
          alt="Team building activity" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-yellow-500/10" />
      </motion.div>

      {/* Confetti */}
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Animated tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 border-2 border-primary/30 mb-8 shadow-lg pulse-glow"
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

          {/* Main Headline with word-by-word animation */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-6 leading-tight"
          >
            <span className="block">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`inline-block mr-2 md:mr-4 ${word === "Ignite" ? "text-rainbow-gradient" : "text-primary"}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2">
              {sublineWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block mr-2 md:mr-4 text-foreground"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtitle with glassmorphism */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-12 font-sans bg-white/80 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/50 shadow-lg"
          >
            Transform your workforce with <span className="text-primary font-semibold">engaging team building</span> experiences that inspire collaboration, boost morale, and create lasting connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
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
                className="group shadow-xl text-lg px-8 py-6 pulse-glow"
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
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: Users, value: 500, suffix: "+", label: "Events Delivered" },
              { icon: Target, value: 100, suffix: "%", label: "Client Satisfaction" },
              { icon: Zap, value: 8, suffix: "+", label: "Years Experience" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
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
