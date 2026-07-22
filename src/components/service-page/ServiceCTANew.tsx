import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceCTANewProps {
  headline: string;
  subtext: string;
  buttonLabel?: string;
  serviceSlug?: string;
  accentColor: string;
  accentColorSecondary?: string;
  backgroundImage?: string;
}

const getAccentGradient = (primary: string, secondary?: string) => 
  secondary ? `linear-gradient(135deg, ${primary}, ${secondary})` : primary;

const ctaParticles = Array.from({ length: 16 }, (_, index) => ({
  left: (index * 31 + 9) % 97,
  top: (index * 47 + 13) % 91,
  duration: 4 + (index % 5) * 0.6,
  delay: (index % 7) * 0.5,
}));

export const ServiceCTANew = ({ headline, subtext, buttonLabel = "Plan My Event", serviceSlug, accentColor, accentColorSecondary, backgroundImage }: ServiceCTANewProps) => {
  const { openContactModal } = useContactModal();
  const gradient = getAccentGradient(accentColor, accentColorSecondary);
  
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Dark background with dim image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        />
      </div>
      
      {/* Accent spotlight behind text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
        style={{ backgroundColor: `${accentColor}20` }}
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating particles with accent color */}
      {ctaParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            backgroundColor: accentColor,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {headline}
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="xl"
                className="relative overflow-hidden group font-display font-semibold"
                style={{ 
                  background: gradient,
                  color: '#000',
                  border: 'none'
                }}
                onClick={() => openContactModal({ serviceSlug })}
              >
                <span className="relative z-10">{buttonLabel}</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline"
                size="xl"
                className="border-2 font-display font-semibold bg-transparent"
                style={{ 
                  borderColor: accentColor, 
                  color: accentColor 
                }}
                onClick={() => openContactModal({ serviceSlug })}
              >
                Ask for a Quote
              </Button>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};
