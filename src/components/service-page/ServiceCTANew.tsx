import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceCTANewProps {
  headline: string;
  subtext: string;
  accentColor: string;
}

export const ServiceCTANew = ({ headline, subtext, accentColor }: ServiceCTANewProps) => {
  return (
    <section className="py-24 relative overflow-hidden bg-background-deep">
      {/* Dark background panel */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-deep" />
      
      {/* Gold spotlight behind text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
        style={{ backgroundColor: `${accentColor}12` }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating particles */}
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
          <h2 className="text-3xl md:text-5xl font-display font-bold text-metallic-gold mb-6 leading-tight">
            {headline}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="hero" 
                size="xl"
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Book This Experience</span>
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: accentColor }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="gold-outline" 
                size="xl"
                className="border-2"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                Request a Custom Quote
              </Button>
            </motion.div>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground italic">
            "Let's create a memorable experience together."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
