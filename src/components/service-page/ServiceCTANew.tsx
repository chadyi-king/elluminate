import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceCTANewProps {
  headline: string;
  subtext: string;
  accentColor: string;
}

export const ServiceCTANew = ({ headline, subtext, accentColor }: ServiceCTANewProps) => {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Dark background with dim image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920)` }}
        />
      </div>
      
      {/* Accent spotlight behind text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
        style={{ backgroundColor: `${accentColor}15` }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating particles with accent color */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: accentColor,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
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
                  backgroundColor: accentColor, 
                  color: '#000',
                  borderColor: accentColor 
                }}
                onClick={openContactModal}
              >
                <span className="relative z-10">Book This Experience</span>
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
                onClick={openContactModal}
              >
                Request a Custom Quote
              </Button>
            </motion.div>
          </div>
          
          <p className="mt-8 text-sm text-gray-400 italic">
            "Let's create a memorable experience together."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
