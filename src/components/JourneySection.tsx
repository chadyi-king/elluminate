import { motion } from "framer-motion";
import { Search, Palette, Play, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We listen to your vision, understand your goals, and uncover what makes your event unique.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our creative team crafts a bespoke concept that brings your vision to life with stunning detail.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600",
  },
  {
    icon: Play,
    title: "Execute",
    description: "We orchestrate every element with precision, ensuring a flawless and memorable experience.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
  },
  {
    icon: Sparkles,
    title: "Celebrate",
    description: "Together, we create magic that transforms moments into masterpieces worth remembering.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
  },
];

export const JourneySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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

        {/* Zigzag Timeline */}
        <div className="max-w-5xl mx-auto space-y-0">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector line to next step */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    className={`absolute ${isEven ? 'left-1/2 md:left-auto md:right-1/4' : 'left-1/2 md:left-1/4'} w-px h-20 bg-gradient-to-b from-primary/50 to-primary/20 origin-top`}
                    style={{ top: '100%' }}
                  />
                )}

                {/* Arrow pointing to next step */}
                {index < steps.length - 1 && (
                  <div className={`absolute ${isEven ? 'left-1/2 md:left-auto md:right-1/4' : 'left-1/2 md:left-1/4'} -translate-x-1/2 text-primary/50`}
                    style={{ top: 'calc(100% + 4.5rem)' }}
                  >
                    ↓
                  </div>
                )}

                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 pb-16`}>
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full md:w-1/2 relative group"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      {/* Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/30 to-transparent" />
                      
                      {/* Gold border */}
                      <div className="absolute inset-0 border border-primary/30 rounded-xl group-hover:border-primary/60 transition-colors duration-300" />
                      
                      {/* Top shine */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-gold">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex w-16 h-16 rounded-full bg-primary/15 border border-primary/40 items-center justify-center mb-6 group-hover:shadow-gold transition-all duration-300`}
                    >
                      <step.icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-serif text-metallic-gold mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
