import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { 
  Flag, Search, Globe, Target, Dice5, Crosshair, Zap,
  Trophy, Timer, Blocks, Shapes, MapPin, Lock,
  Brain, Palmtree, Briefcase, Mic, Users, BookOpen,
  Tent, CalendarDays, Monitor
} from "lucide-react";

interface ServiceHeroSplitProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  accentColor: string;
  accentColorSecondary?: string;
  slug?: string;
}

// Map service slugs to themed icons
const serviceIconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "amazing-race": Flag,
  "csi-bones": Search,
  "cultural-race": Globe,
  "archery-tag": Target,
  "monopoly-dash": Dice5,
  "gel-blitz": Crosshair,
  "nerfwar": Zap,
  "treasure-heist": Lock,
  "sotong-game": Shapes,
  "running-man": MapPin,
  "minute-to-win-it": Timer,
  "builder-cross": Blocks,
  "tag-tical-laser-teambuilding": Crosshair,
  "mbti": Brain,
  "disc": Brain,
  "ocean": Brain,
  "overseas-retreats": Palmtree,
  "local-retreats": Tent,
  "mass-talks": Mic,
  "workshops": BookOpen,
  "youth-camps": Tent,
  "corporate-days": CalendarDays,
  "leadership-offsites": Briefcase,
  // Virtual fallback
  "amazing-race-virtual": Monitor,
  "fit-in-your-team-virtual": Users,
  "the-gameshow-experience-virtual": Trophy,
};

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
  const ThemedIcon = slug ? serviceIconMap[slug] : null;
  
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

      {/* Left side - Decorative Image Area with Themed Icon */}
      <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

        {/* Floating themed icon */}
        {ThemedIcon && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ThemedIcon
                className="w-32 h-32 md:w-40 md:h-40"
                style={{ color: accentColor, opacity: 0.25, filter: `drop-shadow(0 0 30px ${accentColor}40)` }}
              />
            </motion.div>
          </motion.div>
        )}
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
