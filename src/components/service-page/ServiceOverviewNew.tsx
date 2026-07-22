import { motion } from "framer-motion";
import { getReadableTextColor } from "@/lib/colorUtils";

interface ServiceOverviewNewProps {
  description: string;
  accentColor: string;
  accentColorSecondary?: string;
  title?: string;
  eyebrow?: string;
  backgroundImage?: string;
  variant?: "light" | "immersive";
}

const getAccentGradient = (primary: string, secondary?: string) => 
  secondary ? `linear-gradient(135deg, ${primary}, ${secondary})` : primary;

export const ServiceOverviewNew = ({
  description,
  accentColor,
  accentColorSecondary,
  title = "What’s Inside",
  eyebrow,
  backgroundImage,
  variant = "light",
}: ServiceOverviewNewProps) => {
  const gradient = getAccentGradient(accentColor, accentColorSecondary);
  const paragraphs = description.split(/\n\s*\n/).filter(Boolean);
  const immersive = variant === "immersive";
  
  return (
    <section className={`relative overflow-hidden py-20 md:py-24 ${immersive ? "bg-[#07131d] text-white" : "bg-muted/40"}`}>
      <div className={`absolute inset-0 ${immersive ? "bg-[#07131d]" : "bg-muted/60"}`}>
        {backgroundImage && (
          <div
            className={`absolute inset-0 bg-cover bg-center ${immersive ? "opacity-[0.22]" : "opacity-[0.14]"}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
      </div>

      {immersive ? <div className="absolute inset-0 bg-gradient-to-b from-[#07131d]/75 via-[#07131d]/85 to-[#07131d]" /> : null}

      {/* Accent-tinted gradient overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: `linear-gradient(135deg, ${accentColor}40, transparent 60%, ${accentColorSecondary || accentColor}30)` }}
      />

      {/* Background pattern with accent color */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${accentColor}18` }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {eyebrow && (
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.26em]" style={{ color: accentColor }}>
              {eyebrow}
            </span>
          )}
          <h2
            className="mb-6 font-display text-3xl font-bold md:text-4xl"
            style={{ 
              background: accentColorSecondary ? gradient : undefined,
              WebkitBackgroundClip: accentColorSecondary ? 'text' : undefined,
              WebkitTextFillColor: accentColorSecondary ? 'transparent' : undefined,
              color: accentColorSecondary ? undefined : immersive ? accentColor : getReadableTextColor(accentColor)
            }}
          >
            {title}
          </h2>
          
          {/* Decorative underline with accent color (or gradient) */}
          <motion.div 
            className="w-32 h-0.5 mx-auto mb-10"
            style={{ background: accentColorSecondary 
              ? `linear-gradient(90deg, transparent, ${accentColor}, ${accentColorSecondary}, transparent)` 
              : `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <div className={`space-y-5 text-lg leading-relaxed md:text-xl ${immersive ? "text-white/[0.82]" : "text-foreground/80"}`}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
