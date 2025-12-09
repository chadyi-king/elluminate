import { motion } from "framer-motion";
import { Lightbulb, Target, Award } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We transform visions into breathtaking realities with innovative concepts that captivate and inspire.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every detail is meticulously planned and flawlessly executed to ensure perfection in every moment.",
  },
  {
    icon: Award,
    title: "Experience",
    description: "Decades of expertise crafting extraordinary events that leave lasting impressions on every guest.",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_70%)]" />

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
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold">
            Why Team Elevate
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting lines */}
          <div className="absolute top-1/2 left-0 right-0 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Pillar card */}
                <div className="relative bg-card/50 border border-border-gold/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-500 group-hover:shadow-gold-soft">
                  {/* Top glow line on hover */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-gold transition-all duration-300"
                  >
                    <pillar.icon className="w-8 h-8 text-primary group-hover:text-primary-ember transition-colors" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-primary-soft mb-4 group-hover:text-metallic-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Connector dot for desktop */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-gold z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
