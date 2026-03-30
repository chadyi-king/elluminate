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

// Per-service themed silhouette SVG paths that cut across the accent band
const getThemedSilhouette = (slug?: string): string => {
  switch (slug) {
    // Race flag pennants
    case "amazing-race":
    case "amazing-race-virtual":
    case "cultural-race":
      return "M0,60 L0,40 L24,40 L36,12 L48,40 L72,40 L84,8 L96,40 L120,40 L132,15 L144,40 L168,40 L180,10 L192,40 L216,40 L228,18 L240,40 L264,40 L276,6 L288,40 L312,40 L324,14 L336,40 L360,40 L372,20 L384,40 L384,60 Z";
    // Skull/crossbones humps
    case "csi-bones":
      return "M0,60 L0,38 Q32,38 48,20 Q64,5 80,20 Q88,28 96,28 Q104,28 112,20 Q128,5 144,20 Q160,38 192,38 Q224,38 240,20 Q256,5 272,20 Q280,28 288,28 Q296,28 304,20 Q320,5 336,20 Q352,38 384,38 L384,60 Z";
    // Money stack steps
    case "monopoly-dash":
      return "M0,60 L0,42 L32,42 L32,32 L64,32 L64,22 L96,22 L96,12 L144,12 L144,22 L160,22 L160,32 L176,32 L176,42 L208,42 L208,30 L240,30 L240,18 L272,18 L272,8 L320,8 L320,18 L336,18 L336,28 L352,28 L352,42 L384,42 L384,60 Z";
    // Paint splatter blobs
    case "gel-blitz":
      return "M0,60 L0,35 Q20,30 30,18 Q40,5 60,15 Q75,25 85,10 Q95,0 115,12 Q130,22 145,38 Q155,30 170,15 Q185,2 200,18 Q210,28 225,22 Q240,15 260,8 Q275,18 285,30 Q295,25 310,14 Q325,5 345,20 Q360,32 375,38 L384,38 L384,60 Z";
    // Dart/arrow points
    case "nerfwar":
      return "M0,60 L0,38 L48,38 L64,10 L80,38 L128,38 L152,14 L176,38 L224,38 L248,8 L272,38 L320,38 L340,16 L360,38 L384,38 L384,60 Z";
    // Dynamic wave suggesting motion
    case "running-man":
      return "M0,60 L0,32 Q48,10 96,28 Q144,46 192,18 Q240,0 288,24 Q336,44 384,22 L384,60 Z";
    // Circle, triangle, square shapes
    case "sotong-game":
      return "M0,60 L0,42 L48,42 Q48,10 80,10 Q112,10 112,42 L160,42 L192,8 L224,42 L272,42 L272,10 L336,10 L336,42 L384,42 L384,60 Z";
    // Angular laser grid
    case "tag-tical-laser":
      return "M0,60 L0,35 L32,15 L64,35 L96,10 L128,35 L160,5 L192,35 L224,12 L256,35 L288,8 L320,35 L352,18 L384,35 L384,60 Z";
    // Gear teeth
    case "builder-cross":
      return "M0,60 L0,38 L24,38 L24,18 L48,18 L48,38 L72,38 L72,14 L96,14 L96,38 L120,38 L120,20 L144,20 L144,38 L168,38 L168,10 L192,10 L192,38 L216,38 L216,16 L240,16 L240,38 L264,38 L264,14 L288,14 L288,38 L312,38 L312,20 L336,20 L336,38 L360,38 L360,18 L384,18 L384,60 Z";
    // Stopwatch / clock dome
    case "minute-to-win-it":
      return "M0,60 L0,42 L48,42 L60,38 Q96,36 128,20 Q160,5 192,2 Q224,5 256,20 Q288,36 324,38 L336,42 L384,42 L384,60 Z";
    // Concentric target arcs
    case "archery-tag":
      return "M0,60 L0,38 Q96,38 144,25 Q168,18 192,10 Q216,18 240,25 Q288,38 384,38 L384,60 Z M128,60 L128,42 Q160,30 192,24 Q224,30 256,42 L256,60 Z";
    // Astronaut helmet dome
    case "amongst-us":
      return "M0,60 L0,42 L96,42 Q112,42 128,32 Q144,18 160,10 Q176,5 192,4 Q208,5 224,10 Q240,18 256,32 Q272,42 288,42 L384,42 L384,60 Z";
    // Card suit peaks (heart, diamond, spade, club)
    case "alice-in-motherland":
      return "M0,60 L0,38 L48,38 Q60,38 66,28 Q72,18 78,10 Q84,18 90,28 Q96,38 108,38 L156,38 L168,10 L180,38 L228,38 Q234,28 240,22 Q246,14 252,10 Q264,16 270,24 Q276,30 282,38 L330,38 Q336,30 345,20 Q350,12 360,16 Q366,20 372,28 Q378,34 384,38 L384,60 Z";
    // Olympic torch flame
    case "battle-of-the-olympians":
      return "M0,60 L0,38 L144,38 L152,36 Q160,30 168,18 Q176,8 184,4 Q192,0 200,4 Q208,8 216,18 Q224,30 232,36 L240,38 L384,38 L384,60 Z";
    // Vault door / theatrical mask outline
    case "treasure-heist":
      return "M0,60 L0,38 L64,38 Q80,38 96,30 Q112,20 128,14 Q144,8 160,10 Q168,14 176,22 Q184,14 192,10 Q200,8 216,10 Q232,14 248,22 Q264,30 280,36 Q296,38 320,38 L384,38 L384,60 Z";
    // TV screen / game show buzzer
    case "the-gameshow-experience-virtual":
      return "M0,60 L0,42 L48,42 L48,10 L336,10 L336,42 L384,42 L384,60 Z";
    // Dumbbell
    case "fit-in-your-team-virtual":
      return "M0,60 L0,38 L48,38 L48,14 L96,14 L96,28 L288,28 L288,14 L336,14 L336,38 L384,38 L384,60 Z";
    // Zodiac dragon curve
    case "the-great-zodiac-hunt-virtual":
      return "M0,60 L0,35 Q24,25 48,30 Q72,35 96,20 Q120,8 144,15 Q168,22 192,12 Q216,5 240,15 Q264,25 288,18 Q312,10 336,22 Q360,32 384,28 L384,60 Z";
    // Radiation/biohazard trefoil
    case "the-nuclear-fallout-escape-room-virtual":
      return "M0,60 L0,38 L64,38 Q80,38 96,28 Q112,15 128,8 L144,38 L168,38 L168,12 Q184,5 192,4 Q200,5 216,12 L216,38 L240,38 L256,8 Q272,15 288,28 Q304,38 320,38 L384,38 L384,60 Z";
    // Singapore Merlion / lion head silhouette
    case "the-patriot-act-virtual":
      return "M0,60 L0,38 L120,38 Q136,38 148,30 Q156,24 160,16 Q164,10 172,6 Q180,4 188,6 Q196,10 200,18 Q204,28 216,34 Q228,38 244,38 Q252,36 260,30 Q268,24 272,38 L384,38 L384,60 Z";
    // Treasure map / compass rose
    case "tomb-raider-king-treasure-hunt-virtual":
      return "M0,60 L0,38 L128,38 L148,30 L168,38 L180,8 L192,38 L204,30 L224,38 L384,38 L384,60 Z";
    // Training / workshop - open book shape
    case "mbti":
    case "disc":
    case "ocean":
      return "M0,60 L0,38 L48,38 Q96,38 144,22 Q168,14 192,10 Q216,14 240,22 Q288,38 336,38 L384,38 L384,60 Z";
    // Default city skyline
    default:
      return "M0,60 L0,42 L14,42 L14,27 L27,27 L27,35 L41,35 L41,18 L54,18 L54,30 L68,30 L68,10 L81,10 L81,30 L95,30 L95,21 L108,21 L108,30 L122,30 L122,15 L135,15 L135,30 L149,30 L149,7 L162,7 L162,30 L176,30 L176,38 L189,38 L189,23 L202,23 L202,38 L216,38 L216,27 L229,27 L229,18 L243,18 L243,30 L256,30 L256,41 L270,41 L270,21 L283,21 L283,30 L297,30 L297,42 L311,42 L311,27 L324,27 L324,33 L338,33 L338,24 L351,24 L351,36 L365,36 L365,42 L384,42 L384,60 Z";
  }
};

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
            style={{ width: 384, height: 240 }}
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
                width: 384, height: 240,
                background: accentColor,
                opacity: 0.35,
                transform: "rotate(10deg) translate(18px, 15px)",
              }}
            />
            {/* Card 2 — middle */}
            <div
              className="absolute rounded-2xl"
              style={{
                width: 384, height: 240,
                background: accentColor,
                opacity: 0.65,
                transform: "rotate(5deg) translate(9px, 7px)",
              }}
            />
            {/* Card 1 — front */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: 384, height: 240, background: "linear-gradient(180deg, #1c1c1c 0%, #0a0a0a 100%)" }}
            >
              {/* Accent band at top */}
              <div
                className="absolute top-0 left-0 right-0 h-[90px]"
                style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
              />
              {/* Themed silhouette cutting across the accent band */}
              <svg
                className="absolute"
                style={{ top: 42 }}
                width="384"
                height="60"
                viewBox="0 0 384 60"
                preserveAspectRatio="none"
              >
                <path
                  d={getThemedSilhouette(slug)}
                  fill="#0a0a0a"
                />
              </svg>
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase font-medium mb-1.5"
                  style={{ color: `${accentColor}99` }}
                >
                  Welcome to
                </p>
                <h3 className="font-display font-black text-white text-2xl leading-tight">
                  {title}
                </h3>
              </div>
              {/* Bottom accent rail */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[4px]"
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
