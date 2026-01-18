import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, Heart, Zap, Target, Star, Users, Lightbulb, Award } from "lucide-react";

export interface Outcome {
  icon: string;
  title: string;
  description: string;
}

interface ServiceOutcomesProps {
  outcomes: Outcome[];
  accentColor: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  Zap,
  Target,
  Star,
  Users,
  Lightbulb,
  Award
};

export const ServiceOutcomes = ({
  outcomes,
  accentColor,
  sectionTitle = "BENEFITS",
  sectionSubtitle = "What Your Team Will Gain"
}: ServiceOutcomesProps) => {
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${accentColor}08` }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
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

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = iconMap[outcome.icon] || Star;

            return (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div 
                  className="relative p-6 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl h-full"
                  style={{ borderColor: `${accentColor}25` }}
                >
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{ boxShadow: `0 0 40px ${accentColor}15` }}
                  />

                  {/* Icon with animated background */}
                  <div className="relative mb-4">
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ backgroundColor: accentColor }}
                      animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <div 
                      className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      <Icon 
                        className="w-7 h-7" 
                        style={{ color: accentColor }} 
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {outcome.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
