import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceHeroSplitProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  accentColor: string;
}

export const ServiceHeroSplit = ({ 
  title, 
  subtitle, 
  tagline, 
  backgroundImage,
  accentColor 
}: ServiceHeroSplitProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Left side - Background Image */}
      <div className="absolute lg:relative w-full lg:w-1/2 h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay for mobile */}
        <div className="absolute inset-0 bg-background/80 lg:bg-gradient-to-r lg:from-transparent lg:via-background/50 lg:to-background" />
        
        {/* Accent color overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(135deg, ${accentColor}40 0%, transparent 70%)` }}
        />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Right side - Content */}
      <div className="relative lg:absolute lg:right-0 w-full lg:w-1/2 h-full flex items-center">
        {/* Background for right side */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Gold dust particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: accentColor,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Spotlight glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${accentColor}15` }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 px-8 lg:px-16 py-24 lg:py-0 w-full">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider">Back to Services</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome text */}
            <motion.p
              className="text-sm tracking-[0.3em] uppercase font-display mb-4"
              style={{ color: accentColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome To
            </motion.p>
            
            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Tagline with accent color */}
            <p 
              className="text-lg md:text-xl max-w-lg mb-10 font-display italic"
              style={{ color: accentColor }}
            >
              "{tagline}"
            </p>

            {/* Shimmer effect divider */}
            <motion.div 
              className="w-24 h-0.5 mb-10"
              style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                variant="hero" 
                size="xl"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Plan Your {subtitle} →</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
