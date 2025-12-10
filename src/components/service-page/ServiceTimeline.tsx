import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceTimelineProps {
  title: string;
  steps: TimelineStep[];
}

export const ServiceTimeline = ({ title, steps }: ServiceTimelineProps) => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Gold glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold">
            {title}
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Glowing dot */}
                <motion.div
                  className="relative mx-auto mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-16 h-16 bg-background border-2 border-primary/50 rounded-full flex items-center justify-center relative z-10 group-hover:border-primary group-hover:shadow-gold transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                
                <h3 className="text-sm font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
