import { motion } from "framer-motion";
import { Lightbulb, Heart, Zap } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Creative Experiences",
    description: "We design unique, memorable activities that spark joy and create lasting team memories. No boring corporate exercises here.",
    color: "#FFC400",
  },
  {
    icon: Heart,
    title: "People-First Approach",
    description: "Every activity is tailored to your team's dynamics, ensuring everyone feels included and engaged throughout the experience.",
    color: "#26D07C",
  },
  {
    icon: Zap,
    title: "Energizing Results",
    description: "Our activities don't just entertain – they transform teams, boost morale, and create genuine connections that last.",
    color: "#1F7CFF",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
            Why Elluminate
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We illuminate the potential in every team through experiences that inspire and connect.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                {/* Color accent bar */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${pillar.color}20` }}
                >
                  <pillar.icon 
                    className="w-8 h-8" 
                    style={{ color: pillar.color }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-4 text-center">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
