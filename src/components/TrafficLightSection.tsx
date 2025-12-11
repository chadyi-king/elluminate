import { motion } from "framer-motion";
import { Zap, Package, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const trafficLights = [
  {
    color: "#26D07C", // Green
    icon: Zap,
    title: "Quick Start",
    subtitle: "Green Light",
    description: "Choose from our ready-to-go programs and get started immediately. Perfect for teams who know exactly what they want.",
    features: [
      "Pre-designed activity packages",
      "Fast turnaround time",
      "Proven team building formats",
      "Simple booking process",
    ],
    cta: "Browse Programs",
  },
  {
    color: "#FFC400", // Amber
    icon: Package,
    title: "Enhanced Package",
    subtitle: "Amber Light",
    description: "Add extra elements like venue, catering, prizes, and logistics. We've partnered with trusted vendors to make it seamless.",
    features: [
      "Venue sourcing & booking",
      "Catering arrangements",
      "Prizes & merchandise",
      "Transportation & logistics",
    ],
    cta: "Customize Package",
  },
  {
    color: "#FF4F4F", // Red
    icon: Crown,
    title: "Fully Customized",
    subtitle: "Red Light",
    description: "A completely bespoke experience designed from scratch. Multi-day programs, unique themes, and everything tailored to your vision.",
    features: [
      "Custom theme development",
      "Multi-day event planning",
      "Unique activity creation",
      "End-to-end project management",
    ],
    cta: "Start Planning",
  },
];

export const TrafficLightSection = () => {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-red-100/20 rounded-full blur-3xl" />

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
            Your Way, Your Pace
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
            The <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">Traffic Light</span> System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your level of customization. From quick starts to fully bespoke experiences, 
            Elluminate adapts to your needs.
          </p>
        </motion.div>

        {/* Traffic Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trafficLights.map((light, index) => (
            <motion.div
              key={light.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white border border-border rounded-2xl p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Traffic light glow effect */}
                <motion.div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: light.color }}
                />

                {/* Light indicator at top */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center relative"
                    style={{ backgroundColor: `${light.color}20` }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `3px solid ${light.color}` }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <light.icon 
                      className="w-9 h-9 relative z-10" 
                      style={{ color: light.color }}
                    />
                  </motion.div>
                </div>

                {/* Subtitle badge */}
                <div 
                  className="text-xs font-display font-semibold px-3 py-1 rounded-full mx-auto mb-4 w-fit"
                  style={{ backgroundColor: `${light.color}20`, color: light.color }}
                >
                  {light.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-4 text-center">
                  {light.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed text-sm">
                  {light.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {light.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${light.color}20` }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: light.color }}
                        />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group/btn"
                  style={{ 
                    borderColor: light.color,
                    color: light.color,
                  }}
                  onClick={openContactModal}
                >
                  <span>{light.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
