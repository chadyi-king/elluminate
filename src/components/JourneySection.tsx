import { motion } from "framer-motion";
import { MessageCircle, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Share Your Vision",
    description: "Tell us about your team, goals, and what kind of experience you're looking for. We'll listen and understand your unique needs.",
    color: "#FFC400",
  },
  {
    icon: Palette,
    number: "02",
    title: "We Design & Plan",
    description: "Our team crafts a customized activity experience tailored to your objectives, team size, and preferences.",
    color: "#26D07C",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Experience the Magic",
    description: "Sit back and watch your team connect, collaborate, and create memories that last. We handle everything.",
    color: "#1F7CFF",
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
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with Elluminate is easy. Here's how we create amazing experiences for your team.
          </p>
        </motion.div>

        {/* 3 Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400" />
            
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
