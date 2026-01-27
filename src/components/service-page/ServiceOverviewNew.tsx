import { motion } from "framer-motion";

interface ServiceOverviewNewProps {
  description: string;
  accentColor: string;
  accentColorSecondary?: string;
}

const getAccentGradient = (primary: string, secondary?: string) => 
  secondary ? `linear-gradient(135deg, ${primary}, ${secondary})` : primary;

export const ServiceOverviewNew = ({ description, accentColor, accentColorSecondary }: ServiceOverviewNewProps) => {
  const gradient = getAccentGradient(accentColor, accentColorSecondary);
  
  return (
    <section className="py-24 relative overflow-hidden bg-muted/40">
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 bg-muted/60">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920)` }}
        />
      </div>

      {/* Background pattern with accent color */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${accentColor}10` }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
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
          <h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            style={{ 
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: accentColorSecondary ? 'transparent' : undefined,
              color: accentColorSecondary ? undefined : accentColor
            }}
          >
            What's Inside
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
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
