import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceHeroSplitProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  accentColor: string;
  accentColorSecondary?: string;
  slug?: string;
}

// Helper to create gradient or solid color
const getAccentGradient = (primary: string, secondary?: string) => 
  secondary ? `linear-gradient(135deg, ${primary}, ${secondary})` : primary;

export const ServiceHeroSplit = ({ 
  title, 
  subtitle, 
  tagline, 
  backgroundImage,
  accentColor,
  accentColorSecondary,
  slug
}: ServiceHeroSplitProps) => {
  const { openContactModal } = useContactModal();
  const gradient = getAccentGradient(accentColor, accentColorSecondary);
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/60 to-black/60" />
        
        <div 
          className="absolute inset-0 opacity-15"
          style={{ background: `linear-gradient(135deg, ${accentColor}40 0%, transparent 50%)` }}
        />
      </div>

      {/* Left side - Hero Photo Panel with floating service card */}
      <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/55" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(135deg, ${accentColor}30 0%, transparent 60%)` }}
        />

        {/* Floating stacked service card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative"
            style={{ width: 256, height: 160 }}
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -4,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.9, delay: 0.4 },
              scale: { duration: 0.9, delay: 0.4 },
              rotate: { duration: 0.9, delay: 0.4 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            whileHover={{ scale: 1.06, rotate: -1, transition: { duration: 0.25 } }}
          >
            {/* Card 3 — back */}
            <div
              className="absolute rounded-2xl"
              style={{
                width: 256, height: 160,
                background: accentColor,
                opacity: 0.35,
                transform: "rotate(10deg) translate(12px, 10px)",
              }}
            />
            {/* Card 2 — middle */}
            <div
              className="absolute rounded-2xl"
              style={{
                width: 256, height: 160,
                background: accentColor,
                opacity: 0.65,
                transform: "rotate(5deg) translate(6px, 5px)",
              }}
            />
            {/* Card 1 — front */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: 256, height: 160, background: "linear-gradient(180deg, #1c1c1c 0%, #0a0a0a 100%)" }}
            >
              {/* Accent band at top */}
              <div
                className="absolute top-0 left-0 right-0 h-[60px]"
                style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
              />
              {/* City skyline silhouette cutting across the accent band */}
              <svg
                className="absolute"
                style={{ top: 28 }}
                width="256"
                height="40"
                viewBox="0 0 256 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,40 L0,28 L9,28 L9,18 L18,18 L18,23 L27,23 L27,12 L36,12 L36,20 L45,20 L45,7 L54,7 L54,20 L63,20 L63,14 L72,14 L72,20 L81,20 L81,10 L90,10 L90,20 L99,20 L99,5 L108,5 L108,20 L117,20 L117,25 L126,25 L126,15 L135,15 L135,25 L144,25 L144,18 L153,18 L153,12 L162,12 L162,20 L171,20 L171,27 L180,27 L180,14 L189,14 L189,20 L198,20 L198,28 L207,28 L207,18 L216,18 L216,22 L225,22 L225,16 L234,16 L234,24 L243,24 L243,28 L256,28 L256,40 Z"
                  fill="#0a0a0a"
                />
              </svg>
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <p
                  className="text-[9px] tracking-[0.3em] uppercase font-medium mb-1"
                  style={{ color: `${accentColor}99` }}
                >
                  Welcome to
                </p>
                <h3 className="font-display font-black text-white text-lg leading-tight">
                  {title}
                </h3>
              </div>
              {/* Bottom accent rail */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: accentColor }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="relative w-full lg:w-1/2 lg:ml-auto h-full flex items-center">
        {/* Floating particles with accent color */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: accentColor,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
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
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px]"
          style={{ background: accentColorSecondary 
            ? `linear-gradient(135deg, ${accentColor}25, ${accentColorSecondary}25)` 
            : `${accentColor}15` }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 px-8 lg:px-16 py-24 lg:py-0 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome text with accent color */}
            <motion.p
              className="text-xs tracking-[0.3em] uppercase font-display mb-4 font-medium"
              style={{ color: accentColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome To
            </motion.p>
            
            {/* Main title - white */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
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
              style={{ background: accentColorSecondary 
                ? `linear-gradient(90deg, transparent, ${accentColor}, ${accentColorSecondary}, transparent)` 
                : `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
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
                size="xl"
                className="group relative overflow-hidden font-display font-semibold tracking-wide"
                style={{ 
                  background: gradient,
                  color: '#000',
                  border: 'none'
                }}
                onClick={openContactModal}
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
