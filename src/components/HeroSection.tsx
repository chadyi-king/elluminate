import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Lightbulb, Users, Zap, Target } from "lucide-react";
import heroBg from "@/assets/hero-elluminate.jpg";

export const HeroSection = () => {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Team building activity" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-primary/20 mb-8 shadow-lg"
          >
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Corporate Team Building Specialists</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            <span className="text-primary">Ignite the Spark</span>
            <br />
            in Your Teams
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-sans bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl"
          >
            Transform your workforce with engaging team building experiences that inspire collaboration, boost morale, and create lasting connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button 
              variant="hero" 
              size="lg" 
              onClick={openContactModal}
              className="group shadow-xl"
            >
              <span>Plan My Event</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="bg-white/90 hover:bg-white border-border"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Users, label: "500+ Events" },
              { icon: Target, label: "100% Satisfaction" },
              { icon: Zap, label: "8+ Years Experience" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/95 border border-border shadow-lg"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2 bg-white/20 backdrop-blur-sm"
        >
          <motion.div
            animate={{ height: [6, 14, 6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-white/80 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
