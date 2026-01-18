import { motion } from "framer-motion";
import { LucideIcon, Bus, Medal, UtensilsCrossed, MapPin, Shirt, Camera, Mic, Palette } from "lucide-react";

export interface AddOn {
  icon: string;
  title: string;
  description: string;
}

export interface PricingInfo {
  startingPrice: string;
  unit: string;
  minimumPax: number;
  duration: string;
}

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceHowItWorksWithPricingProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  steps: HowItWorksStep[];
  pricing: PricingInfo;
  addOns: AddOn[];
  accentColor: string;
}

// Icon mapping for add-ons (using string keys)
const iconMap: Record<string, LucideIcon> = {
  Bus,
  Medal,
  UtensilsCrossed,
  MapPin,
  Shirt,
  Camera,
  Mic,
  Palette
};

export const ServiceHowItWorksWithPricing = ({
  sectionTitle = "HOW IT WORKS",
  sectionSubtitle = "Your Journey with Us",
  steps,
  pricing,
  addOns,
  accentColor
}: ServiceHowItWorksWithPricingProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, ${accentColor} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Dynamic glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: `${accentColor}10` }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p 
            className="text-xs tracking-[0.3em] uppercase font-display mb-3 font-medium"
            style={{ color: accentColor }}
          >
            {sectionTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {sectionSubtitle}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div 
                    className="relative p-5 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg w-40"
                    style={{ borderColor: `${accentColor}30` }}
                  >
                    {/* Step number */}
                    <div 
                      className="absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-background"
                      style={{ backgroundColor: accentColor }}
                    >
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accentColor }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-display font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                    className="hidden md:flex items-center px-2"
                  >
                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                      <path 
                        d="M0 12H22M22 12L14 4M22 12L14 20" 
                        stroke={accentColor} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeOpacity="0.5"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pricing Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div 
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            {/* Decorative elements */}
            <div 
              className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: accentColor }}
            />
            <div 
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: accentColor }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p 
                  className="text-4xl md:text-5xl font-display font-bold"
                  style={{ color: accentColor }}
                >
                  {pricing.startingPrice}
                </p>
                <p className="text-sm text-muted-foreground">{pricing.unit}</p>
              </div>

              <div className="w-px h-16 bg-border hidden md:block" />

              <div className="text-center">
                <p className="text-2xl font-display font-semibold text-foreground">
                  Min {pricing.minimumPax} pax
                </p>
                <p className="text-sm text-muted-foreground">group size</p>
              </div>

              <div className="w-px h-16 bg-border hidden md:block" />

              <div className="text-center">
                <p className="text-2xl font-display font-semibold text-foreground">
                  {pricing.duration}
                </p>
                <p className="text-sm text-muted-foreground">duration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <p 
              className="text-xs tracking-[0.3em] uppercase font-display mb-3 font-medium"
              style={{ color: accentColor }}
            >
              ENHANCE YOUR EXPERIENCE
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Optional Add-ons
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {addOns.map((addOn, index) => {
              const Icon = iconMap[addOn.icon] || Palette;

              return (
                <motion.div
                  key={addOn.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group"
                >
                  <div 
                    className="p-5 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg h-full"
                    style={{ borderColor: `${accentColor}30` }}
                  >
                    {/* Hover glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{ boxShadow: `0 0 30px ${accentColor}20` }}
                    />

                    {/* Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accentColor }} />
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-display font-semibold text-foreground mb-1">
                      {addOn.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {addOn.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
