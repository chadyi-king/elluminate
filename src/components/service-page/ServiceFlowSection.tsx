import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface FlowItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFlowSectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: FlowItem[];
  accentColor: string;
  itemsPerRow?: number;
  showNumbers?: boolean;
}

export const ServiceFlowSection = ({
  sectionTitle,
  sectionSubtitle,
  items,
  accentColor,
  itemsPerRow = 4,
  showNumbers = false,
}: ServiceFlowSectionProps) => {
  // Split items into rows
  const rows: FlowItem[][] = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }

  // Get global index for an item
  const getGlobalIndex = (rowIndex: number, itemIndex: number) => {
    return rowIndex * itemsPerRow + itemIndex;
  };

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
          className="text-center mb-16"
        >
          <p 
            className="text-xs tracking-[0.3em] uppercase font-display mb-3 font-medium"
            style={{ color: accentColor }}
          >
            {sectionTitle}
          </p>
          {sectionSubtitle && (
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {sectionSubtitle}
            </h2>
          )}
        </motion.div>

        {/* Flow Chart */}
        <div className="space-y-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {/* Row of items */}
              <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-0">
                {row.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const globalIndex = getGlobalIndex(rowIndex, itemIndex);
                  const isLastInRow = itemIndex === row.length - 1;
                  const isLastRow = rowIndex === rows.length - 1;
                  const isLastItem = globalIndex === items.length - 1;

                  return (
                    <div key={itemIndex} className="flex items-center">
                      {/* Flow Box */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: globalIndex * 0.1, duration: 0.5 }}
                        className="relative group w-full md:w-56 lg:w-64"
                      >
                        <div 
                          className="relative p-6 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg h-full"
                          style={{ 
                            borderColor: `${accentColor}30`,
                          }}
                        >
                          {/* Hover glow effect */}
                          <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                            style={{ 
                              boxShadow: `0 0 30px ${accentColor}20`,
                            }}
                          />

                          {/* Step number (optional) */}
                          {showNumbers && (
                            <div 
                              className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-background"
                              style={{ backgroundColor: accentColor }}
                            >
                              {globalIndex + 1}
                            </div>
                          )}

                          {/* Icon */}
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: `${accentColor}15` }}
                          >
                            <Icon 
                              className="w-6 h-6" 
                              style={{ color: accentColor }} 
                            />
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Horizontal Arrow (between items in same row on desktop) */}
                      {!isLastInRow && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: globalIndex * 0.1 + 0.2, duration: 0.3 }}
                          className="hidden md:flex items-center px-2"
                        >
                          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="flex-shrink-0">
                            <path 
                              d="M0 12H32M32 12L24 4M32 12L24 20" 
                              stroke={accentColor} 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              strokeOpacity="0.6"
                            />
                          </svg>
                        </motion.div>
                      )}

                      {/* Vertical Arrow (mobile between items) */}
                      {!isLastItem && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          whileInView={{ opacity: 1, scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: globalIndex * 0.1 + 0.2, duration: 0.3 }}
                          className="flex md:hidden justify-center py-2"
                        >
                          <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                            <path 
                              d="M12 0V22M12 22L4 14M12 22L20 14" 
                              stroke={accentColor} 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              strokeOpacity="0.6"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Curved Arrow to next row (desktop only) */}
              {rowIndex < rows.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (rowIndex + 1) * itemsPerRow * 0.1, duration: 0.5 }}
                  className="hidden md:flex justify-end pr-8 py-4"
                >
                  <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                    {/* Curved return arrow */}
                    <path 
                      d="M10 5 C 60 5, 110 5, 110 30 C 110 55, 60 55, 20 55 L 8 55" 
                      stroke={accentColor} 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.5"
                      fill="none"
                      strokeDasharray="4 4"
                    />
                    {/* Arrow head */}
                    <path 
                      d="M8 55 L 16 48 M 8 55 L 16 62" 
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
          ))}
        </div>
      </div>
    </section>
  );
};
