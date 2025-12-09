import { motion } from "framer-motion";
import { Search, Palette, Play, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We listen to your vision, understand your goals, and uncover what makes your event unique.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our creative team crafts a bespoke concept that brings your vision to life with stunning detail.",
  },
  {
    icon: Play,
    title: "Execute",
    description: "We orchestrate every element with precision, ensuring a flawless and memorable experience.",
  },
  {
    icon: Sparkles,
    title: "Celebrate",
    description: "Together, we create magic that transforms moments into masterpieces worth remembering.",
  },
];

export const JourneySection = () => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="journey-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#journey-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold">
            The Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal line - desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative mx-auto w-32 h-32 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-gold transition-all duration-500"
                >
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  
                  <step.icon className="w-10 h-10 text-primary group-hover:text-primary-ember transition-colors" />
                  
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-gold">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-serif text-primary-soft mb-3 group-hover:text-metallic-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-6 text-primary/50 group-hover:text-primary transition-colors">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
