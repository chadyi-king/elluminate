import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

const clientLogos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
}));

const stats = [
  {
    icon: Calendar,
    number: "1,000+",
    label: "Events Executed",
    description: "Across all corporate formats.",
  },
  {
    icon: Users,
    number: "100,000+",
    label: "Participants Impacted",
    description: "Singapore & regional teams.",
  },
  {
    icon: Award,
    number: "8 Years",
    label: "of Excellence",
    description: "Professional, innovative, dependable.",
  },
];

// Split logos into groups of 24 (4 rows x 6 columns) for carousel
const logoGroups = [
  clientLogos.slice(0, 24),
  clientLogos.slice(0, 24), // Duplicate for demo - in real use, add more logos
  clientLogos.slice(0, 24),
];

export const SocialProofSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % logoGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo Wall - 4x6 Grid Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-center text-primary/60 text-sm tracking-[0.3em] uppercase font-display font-semibold mb-10">
            Trusted By Leading Brands
          </h3>

          {/* Logo Carousel - 4 rows x 6 columns */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGroup}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4"
              >
                {logoGroups[currentGroup].map((logo) => (
                  <div
                    key={logo.id}
                    className="group aspect-[3/2] bg-card/50 border border-border-gold/20 rounded-lg flex items-center justify-center hover:border-primary/50 hover:shadow-gold-soft transition-all duration-300"
                  >
                    <div className="w-14 h-7 md:w-16 md:h-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <span className="text-primary/40 text-xs font-display font-bold group-hover:text-primary/60 transition-colors">
                        Logo
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {logoGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentGroup(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentGroup 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Google Rating Panel - Centered with stars on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 border border-primary/30 rounded-xl px-8 py-8 overflow-hidden max-w-xl mx-auto">
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Stars on top */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star
                      className="w-10 h-10 text-primary fill-primary"
                      style={{
                        filter: "drop-shadow(0 0 12px hsl(43, 65%, 52%, 0.8))",
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Rating text below stars */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-display font-black text-metallic-gold">
                  4.8 / 5.0
                </span>
              </div>
              
              <p className="text-muted-foreground font-display">
                Based on <span className="text-primary-soft font-bold">600+</span> Google Reviews
              </p>
              
              <p className="text-muted-foreground/80 text-sm font-display">
                Trusted by companies all across Singapore.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Event Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="relative inline-block mb-3">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold">
                    {stat.number}
                  </span>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-display font-bold text-primary-soft mb-2">
                  {stat.label}
                </h4>
                <p className="text-muted-foreground text-sm font-display">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
