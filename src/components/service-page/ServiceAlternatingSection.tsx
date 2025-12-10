import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AlternatingSection {
  title: string;
  description: string;
  image: string;
  points?: {
    icon?: LucideIcon;
    text: string;
  }[];
}

interface ServiceAlternatingSectionProps {
  sections: AlternatingSection[];
  accentColor: string;
}

export const ServiceAlternatingSection = ({ sections, accentColor }: ServiceAlternatingSectionProps) => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {sections.map((section, index) => {
          const isReversed = index % 2 === 1;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-16 ${
                index < sections.length - 1 ? 'border-b border-border-gold/10' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden aspect-[16/10]"
                >
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Accent overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(${isReversed ? '225deg' : '135deg'}, ${accentColor}40 0%, transparent 70%)` }}
                  />
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
                  
                  {/* Gold bokeh effect */}
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 rounded-full blur-xl"
                    style={{ backgroundColor: `${accentColor}30` }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <motion.h3
                  initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-display font-bold text-metallic-gold mb-6"
                >
                  {section.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-muted-foreground leading-relaxed mb-6"
                >
                  {section.description}
                </motion.p>

                {section.points && (
                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + pointIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span className="text-foreground/80">{point.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
