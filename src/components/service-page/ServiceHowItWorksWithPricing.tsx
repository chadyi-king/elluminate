import { motion } from "framer-motion";
import { LucideIcon, Bus, Medal, UtensilsCrossed, MapPin, Shirt, Camera, Palette, BarChart3, Users, Clock, Sun, Building, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { ServiceDividerStrip, type DividerVariant } from "@/components/service-page/dividers/ServiceDividerStrip";
import { useIsMobile } from "@/hooks/use-mobile";

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
  activityType?: "outdoor" | "indoor" | "hybrid";
}

export interface PackageTier {
  color: string;
  title: string;
  description: string;
  price?: string;
  features: string[];
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
  packages?: PackageTier[];
  addOns: AddOn[];
  accentColor: string;
  accentColorSecondary?: string;
  dividerVariant?: DividerVariant;
  howItWorksImage?: string;
  addOnsImage?: string;
}

// Icon mapping for add-ons (using string keys)
const iconMap: Record<string, LucideIcon> = {
  Bus,
  Medal,
  UtensilsCrossed,
  MapPin,
  Shirt,
  Camera,
  Palette,
  BarChart3
};

// Activity type icons
const activityTypeIcons: Record<string, LucideIcon> = {
  outdoor: Sun,
  indoor: Building,
  hybrid: Sparkles
};

// Default placeholder images
const defaultHowItWorksImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";
const defaultAddOnsImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80";

// Helper to get gradient or solid color
const getAccentStyle = (primary: string, secondary?: string) => 
  secondary ? `linear-gradient(135deg, ${primary}, ${secondary})` : primary;

export const ServiceHowItWorksWithPricing = ({
  sectionTitle = "WHAT TO EXPECT",
  sectionSubtitle = "Your Journey with Us",
  steps,
  pricing,
  packages,
  addOns,
  accentColor,
  accentColorSecondary,
  dividerVariant = "raceTrack",
  howItWorksImage,
  addOnsImage
}: ServiceHowItWorksWithPricingProps) => {
  const { openContactModal } = useContactModal();
  const ActivityIcon = activityTypeIcons[pricing.activityType || "outdoor"];
  const isMobile = useIsMobile();

  const finalHowItWorksImage = howItWorksImage || defaultHowItWorksImage;
  const finalAddOnsImage = addOnsImage || defaultAddOnsImage;

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
        style={{ background: getAccentStyle(accentColor + "10", accentColorSecondary ? accentColorSecondary + "10" : undefined) }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <ServiceDividerStrip variant={dividerVariant} direction="downRight" accentColor={accentColor} />

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

        {/* WHAT TO EXPECT - Split Layout: Grid Left, Trapezoid Image Right */}
        <div className="flex flex-col lg:flex-row gap-0 mb-16 rounded-2xl overflow-hidden border border-border/50 bg-card/50">
          {/* Left Column - Grid of Steps */}
          <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <div className={`grid gap-4 ${steps.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group"
                  >
                    <div 
                      className="relative p-4 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg h-full text-center"
                      style={{ borderColor: `${accentColor}30` }}
                    >
                      {/* Step number - centered */}
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-background mx-auto mb-2"
                        style={{ background: getAccentStyle(accentColor, accentColorSecondary) }}
                      >
                        {index + 1}
                      </div>

                      {/* Icon - centered */}
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto"
                        style={{ backgroundColor: `${accentColor}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: accentColor }} />
                      </div>

                      {/* Title - centered */}
                      <h3 className="text-sm font-display font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>

                      {/* Description - centered */}
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Trapezoid Image */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${finalHowItWorksImage})`,
                clipPath: isMobile ? 'none' : 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
              }}
            />
            {/* Gradient overlay for depth */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                background: `linear-gradient(90deg, ${accentColor}30 0%, transparent 50%)`,
                clipPath: isMobile ? 'none' : 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
              }}
            />
          </div>
        </div>

        <ServiceDividerStrip variant={dividerVariant} direction="downLeft" accentColor={accentColor} />

        {/* PRICING Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p 
            className="text-xs tracking-[0.3em] uppercase font-display mb-3 font-medium"
            style={{ color: accentColor }}
          >
            PRICING
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Choose Your Package
          </h3>
        </motion.div>

        {/* Traffic Light Package Cards */}
        {packages && packages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                <div 
                  className={
                    "relative bg-white border rounded-2xl h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden " +
                    (pkg.title === "Enhanced Package" ? "p-8 md:p-9 md:scale-[1.06] md:z-10" : "p-6")
                  }
                  style={{ borderColor: `${pkg.color}40` }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: pkg.color }}
                  />

                  {/* Traffic light indicator */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: pkg.color, boxShadow: `0 0 10px ${pkg.color}60` }}
                    />
                    <span 
                      className="text-xs font-display font-semibold uppercase tracking-wider"
                      style={{ color: pkg.color }}
                    >
                      {pkg.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 relative z-10 leading-relaxed min-h-[60px]">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 relative z-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div 
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: pkg.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price or CTA */}
                  <div className="relative z-10">
                    {pkg.price ? (
                      <p 
                        className="text-xl font-display font-bold"
                        style={{ color: pkg.color }}
                      >
                        {pkg.price}
                      </p>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group/btn"
                        style={{ borderColor: pkg.color, color: pkg.color }}
                        onClick={openContactModal}
                      >
                        <span>Let's Chat</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Info Bar with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div 
            className="rounded-2xl p-6 relative overflow-hidden max-w-3xl mx-auto"
            style={{ backgroundColor: `${accentColor}10` }}
          >
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {/* Min Pax */}
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <Users className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <p className="text-lg font-display font-semibold text-foreground">
                  Min {pricing.minimumPax} pax
                </p>
                <p className="text-xs text-muted-foreground">group size</p>
              </div>

              <div className="w-px h-12 bg-border hidden sm:block" />

              {/* Duration */}
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <Clock className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <p className="text-lg font-display font-semibold text-foreground">
                  {pricing.duration}
                </p>
                <p className="text-xs text-muted-foreground">duration</p>
              </div>

              <div className="w-px h-12 bg-border hidden sm:block" />

              {/* Activity Type */}
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <ActivityIcon className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <p className="text-lg font-display font-semibold text-foreground capitalize">
                  {pricing.activityType || "Outdoor"}
                </p>
                <p className="text-xs text-muted-foreground">activity type</p>
              </div>
            </div>
          </div>
        </motion.div>

        <ServiceDividerStrip variant={dividerVariant} direction="downRight" accentColor={accentColor} />

        {/* ADD-ONS - Split Layout: Trapezoid Image Left, Grid Right */}
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

          <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-border/50 bg-card/50">
            {/* Left Column - Trapezoid Image */}
            <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[350px] order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${finalAddOnsImage})`,
                  clipPath: isMobile ? 'none' : 'polygon(0 0, 100% 0, 80% 100%, 0 100%)'
                }}
              />
              {/* Gradient overlay for depth */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ 
                  background: `linear-gradient(270deg, ${accentColor}30 0%, transparent 50%)`,
                  clipPath: isMobile ? 'none' : 'polygon(0 0, 100% 0, 80% 100%, 0 100%)'
                }}
              />
            </div>

            {/* Right Column - Add-on Items Grid */}
            <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
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
                        className="relative p-4 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg h-full text-center"
                        style={{ borderColor: `${accentColor}30` }}
                      >
                        {/* Icon */}
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto transition-transform duration-300 group-hover:scale-110"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};