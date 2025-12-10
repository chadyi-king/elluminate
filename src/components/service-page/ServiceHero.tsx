import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
}

export const ServiceHero = ({ title, subtitle, tagline, backgroundImage }: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark overlay with gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      
      {/* Gold spotlight effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}%`,
          }}
          animate={{
            y: [0, -300],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Light beams */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-px h-[400px] bg-gradient-to-t from-primary/40 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2], height: ['300px', '500px', '300px'] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-px h-[400px] bg-gradient-to-t from-primary/40 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3], height: ['400px', '600px', '400px'] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-6"
        >
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider">Back to Services</span>
          </Link>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-display">
                {subtitle}
              </span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-metallic-gold mb-8 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-10 italic font-display">
              "{tagline}"
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="xl"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Plan Your Event</span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
