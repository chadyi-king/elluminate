import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Share Your Vision",
    description: "Tell us about your team and goals. We listen and understand what spark you want to ignite.",
    color: "#FFC400",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "We Illuminate the Path",
    description: "Our team crafts a customized experience designed to brighten your team's dynamics.",
    color: "#1F7CFF",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Watch Your Team Shine",
    description: "Experience the transformation as your team connects, collaborates, and lights up together.",
    color: "#26D07C",
  },
];

export const JourneySection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

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
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
            How We <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Ignite</span> Your Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with Elluminate is easy. Here's how we illuminate your team's potential.
          </p>
        </motion.div>

        {/* 3 Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-yellow-400 via-primary to-green-400" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-white border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center">
                  {/* Step number circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </motion.div>

                  {/* Step number */}
                  <div 
                    className="text-5xl font-display font-black mb-4 opacity-20"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-3xl text-primary"
                    >
                      ↓
                    </motion.div>
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
