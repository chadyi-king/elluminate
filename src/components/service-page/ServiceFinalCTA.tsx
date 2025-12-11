import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceFinalCTAProps {
  accentColor: string;
}

export const ServiceFinalCTA = ({ accentColor }: ServiceFinalCTAProps) => {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dark background with dim image */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920)` }}
        />
      </div>
      
      {/* Accent gradient spotlight */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full blur-[150px]"
        style={{ backgroundColor: `${accentColor}08` }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Ready to Create Something Extraordinary?
          </h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="xl"
              className="text-lg font-display font-semibold"
              style={{ 
                backgroundColor: accentColor, 
                color: '#000',
                borderColor: accentColor 
              }}
              onClick={openContactModal}
            >
              Start Planning With Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
