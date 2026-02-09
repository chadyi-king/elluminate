import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { getReadableTextColor } from "@/lib/colorUtils";

export interface PillItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface ServicePillsSectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: PillItem[];
  accentColor: string;
}

export const ServicePillsSection = ({
  sectionTitle,
  sectionSubtitle,
  items,
  accentColor,
}: ServicePillsSectionProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${accentColor} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: `${accentColor}10` }}
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-display mb-3 font-medium"
            style={{ color: getReadableTextColor(accentColor) }}
          >
            {sectionTitle}
          </p>
          {sectionSubtitle && (
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {sectionSubtitle}
            </h2>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="group"
              >
                <div
                  className="w-full flex items-center gap-3 rounded-full border bg-card/80 backdrop-blur-sm px-4 py-3 transition-all duration-300 group-hover:shadow-lg"
                  style={{ borderColor: `${accentColor}30` }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accentColor }} />
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-display font-semibold text-foreground leading-tight">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                        {item.description}
                      </p>
                    )}
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
