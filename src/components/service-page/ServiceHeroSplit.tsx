import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import amazingRaceLogo from "../../../public/images/service-page-logos/amazing-race.svg.asset.json";
import culturalRaceLogo from "../../../public/images/service-page-logos/cultural-race.svg.asset.json";
import buildersCrossLogo from "../../../public/images/service-page-logos/builders-cross.svg.asset.json";
import csiBonesLogo from "../../../public/images/service-page-logos/csi-bones.svg.asset.json";
import monopolyDashLogo from "../../../public/images/service-page-logos/monopoly-dash.svg.asset.json";
import mtwiLogo from "../../../public/images/service-page-logos/mtwi.svg.asset.json";
import aliceInMotherlandLogo from "../../../public/images/service-page-logos/alice-in-motherland.svg.asset.json";
import amongstUsLogo from "../../../public/images/service-page-logos/amongst-us.svg.asset.json";
import battleOfTheOlympiansLogo from "../../../public/images/service-page-logos/battle-of-the-olympians.svg.asset.json";
import sotongGameLogo from "../../../public/images/service-page-logos/sotong-game.svg.asset.json";
import treasureHeistLogo from "../../../public/images/service-page-logos/treasure-heist.svg.asset.json";
import runningManLogo from "../../../public/images/service-page-logos/running-man.svg.asset.json";
import overseasRetreatsLogo from "../../../public/images/service-page-logos/overseas-retreats.svg.asset.json";
import localRetreatsLogo from "../../../public/images/service-page-logos/local-retreats.svg.asset.json";
import incentiveTravelLogo from "../../../public/images/service-page-logos/incentive-travel.svg.asset.json";
import grandChristmasDeliveryLogo from "../../../public/images/service-page-logos/grand-christmas-delivery.svg.asset.json";
import virtualAmazingRaceLogo from "../../../public/images/service-page-logos/virtual-amazing-race.svg.asset.json";
import greatZodiacHuntLogo from "../../../public/images/service-page-logos/great-zodiac-hunt.svg.asset.json";
import fitInYourTeamLogo from "../../../public/images/service-page-logos/fit-in-your-team.svg.asset.json";
import gameshowExperienceLogo from "../../../public/images/service-page-logos/gameshow-experience.svg.asset.json";
import nuclearFalloutEscapeLogo from "../../../public/images/service-page-logos/nuclear-fallout-escape.svg.asset.json";
import thePatriotActLogo from "../../../public/images/service-page-logos/the-patriot-act.svg.asset.json";
import tombRaiderKingLogo from "../../../public/images/service-page-logos/tomb-raider-king.svg.asset.json";
import mbtiLogo from "../../../public/images/service-page-logos/mbti.svg.asset.json";
import discLogo from "../../../public/images/service-page-logos/disc.svg.asset.json";
import oceanLogo from "../../../public/images/service-page-logos/ocean.svg.asset.json";
import youthCampLogo from "../../../public/images/service-page-logos/youth-camp.svg.asset.json";
import massTalksLogo from "../../../public/images/service-page-logos/mass-talks.svg.asset.json";
import workshopsLogo from "../../../public/images/service-page-logos/workshops.svg.asset.json";
import corporateDaysLogo from "../../../public/images/service-page-logos/corporate-days.svg.asset.json";
import leadershipOffsitesLogo from "../../../public/images/service-page-logos/leadership-offsites.svg.asset.json";
import wellnessEventsLogo from "../../../public/images/service-page-logos/wellness-events.svg.asset.json";

const resolveUploadedAssetUrl = (src: string) =>
  import.meta.env.DEV && src.startsWith("/__l5e/") ? `https://elluminate.sg${src}` : src;

const renderLogo = (src: string, alt: string, size: number) => (
  <img
    src={resolveUploadedAssetUrl(src)}
    alt={alt}
    width={size}
    height={size}
    className="object-contain"
  />
);

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

const heroParticles = Array.from({ length: 12 }, (_, index) => ({
  left: (index * 37 + 11) % 97,
  top: (index * 53 + 7) % 91,
  duration: 3.4 + (index % 5) * 0.55,
  delay: (index % 6) * 0.42,
}));

// Per-service themed prop SVG rendered instead of a generic card
const ServiceProp = ({ slug, accentColor }: { slug?: string; accentColor: string }) => {
  const size = slug === "amazing-race" ? 520 : 320;
  const common = { width: size, height: size, viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  switch (slug) {
    /* ─── Amazing Race: uploaded activity artwork ─── */
    case "amazing-race":
      return renderLogo(amazingRaceLogo.url, "Amazing Race", size);

    /* ─── Cultural Race: uploaded logo ─── */
    case "cultural-race":
      return renderLogo(culturalRaceLogo.url, "Cultural Race", size);

    /* ─── Virtual Amazing Race: race card envelope ─── */
    case "amazing-race-virtual":
      return renderLogo(virtualAmazingRaceLogo.url, "Virtual Amazing Race", size);


    /* ─── CSI Bones: chalk body outline ─── */
    case "csi-bones":
      return renderLogo(csiBonesLogo.url, "CSI Bones", size);

    /* ─── Monopoly Dash: money bag ─── */
    case "monopoly-dash":
      return renderLogo(monopolyDashLogo.url, "Monopoly Dash", size);

    /* ─── Gel Blitz: gel blaster + splat ─── */
    case "gel-blitz":
      return (
        <svg {...common}>
          {/* Splat background */}
          <circle cx="100" cy="100" r="60" fill={`${accentColor}25`} />
          <circle cx="60" cy="75" r="20" fill={`${accentColor}20`} />
          <circle cx="145" cy="130" r="18" fill={`${accentColor}20`} />
          {/* Blaster body */}
          <rect x="40" y="85" width="100" height="24" rx="6" fill="#333" stroke="white" strokeWidth="1.5" />
          {/* Barrel */}
          <rect x="140" y="89" width="35" height="16" rx="4" fill="#444" stroke="white" strokeWidth="1.5" />
          {/* Grip */}
          <rect x="65" y="109" width="18" height="35" rx="4" fill="#333" stroke="white" strokeWidth="1.5" />
          {/* Sight */}
          <rect x="95" y="76" width="20" height="9" rx="3" fill={accentColor} />
          {/* Splat hits */}
          <circle cx="55" cy="55" r="12" fill={accentColor} opacity="0.7" />
          <circle cx="150" cy="60" r="9" fill={accentColor} opacity="0.6" />
          <circle cx="40" cy="155" r="10" fill={accentColor} opacity="0.5" />
        </svg>
      );

    /* ─── Nerf War: foam dart ─── */
    case "nerfwar":
      return (
        <svg {...common}>
          {/* Dart body */}
          <rect x="35" y="88" width="90" height="24" rx="12" fill={accentColor} stroke="white" strokeWidth="1.5" />
          {/* Dart tip (suction cup) */}
          <circle cx="135" cy="100" r="14" fill="#FF6B35" stroke="white" strokeWidth="1.5" />
          <circle cx="135" cy="100" r="7" fill="#FF8C5A" />
          {/* Tail fins */}
          <polygon points="35,88 20,75 35,95" fill={`${accentColor}cc`} stroke="white" strokeWidth="1" />
          <polygon points="35,100 20,125 35,105" fill={`${accentColor}cc`} stroke="white" strokeWidth="1" />
          {/* Target */}
          <circle cx="100" cy="100" r="55" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="8 4" />
          <circle cx="100" cy="100" r="35" stroke="white" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6 4" />
          {/* Motion lines */}
          <line x1="150" y1="92" x2="175" y2="86" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <line x1="150" y1="100" x2="180" y2="100" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <line x1="150" y1="108" x2="175" y2="114" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      );

    /* ─── Running Man: uploaded logo ─── */
    case "running-man":
      return renderLogo(runningManLogo.url, "Running Man Adventure", size);

    /* ─── Sotong Game: uploaded logo ─── */
    case "sotong-game":
      return renderLogo(sotongGameLogo.url, "Sotong Game", size);

    /* ─── Tag-tical Laser: laser phaser ─── */
    case "tag-tical-laser-teambuilding":
      return (
        <svg {...common}>
          {/* Laser beams */}
          <line x1="140" y1="85" x2="190" y2="50" stroke={accentColor} strokeWidth="2" opacity="0.6" />
          <line x1="140" y1="95" x2="195" y2="80" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
          <line x1="140" y1="105" x2="190" y2="120" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
          {/* Phaser body */}
          <path d="M30 80 L130 80 Q145 80 145 95 Q145 110 130 110 L80 110 L70 140 L55 140 L65 110 L30 110 Q20 110 20 95 Q20 80 30 80Z" fill="#333" stroke="white" strokeWidth="1.5" />
          {/* Scope */}
          <rect x="60" y="70" width="40" height="10" rx="3" fill={accentColor} opacity="0.8" />
          {/* Trigger */}
          <line x1="90" y1="110" x2="85" y2="125" stroke="#555" strokeWidth="3" strokeLinecap="round" />
          {/* Muzzle glow */}
          <circle cx="145" cy="95" r="6" fill={accentColor} opacity="0.6" />
          <circle cx="145" cy="95" r="3" fill="white" opacity="0.8" />
        </svg>
      );

    /* ─── Builder Cross: blueprint / wrench ─── */
    case "builder-cross":
      return renderLogo(buildersCrossLogo.url, "Builders Cross", size);

    /* ─── Minute To Win It: uploaded logo ─── */
    case "minute-to-win-it":
      return renderLogo(mtwiLogo.url, "Minute To Win It", size);

    /* ─── Archery Tag: bow and arrow ─── */
    case "archery-tag":
      return (
        <svg {...common}>
          {/* Bow */}
          <path d="M60 30 Q20 100 60 170" stroke={accentColor} strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Bow string */}
          <line x1="60" y1="30" x2="60" y2="170" stroke="white" strokeWidth="1.5" />
          {/* Arrow shaft */}
          <line x1="60" y1="100" x2="170" y2="100" stroke="#8B7355" strokeWidth="3" />
          {/* Arrow head */}
          <polygon points="170,100 155,90 155,110" fill={accentColor} />
          {/* Arrow fletching */}
          <polygon points="65,100 55,93 55,100" fill="white" opacity="0.7" />
          <polygon points="65,100 55,107 55,100" fill="white" opacity="0.7" />
          {/* Target in background */}
          <circle cx="170" cy="100" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          <circle cx="170" cy="100" r="17" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          <circle cx="170" cy="100" r="9" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        </svg>
      );

    /* ─── Amongst Us: uploaded logo ─── */
    case "amongst-us":
      return renderLogo(amongstUsLogo.url, "Amongst Us", size);

    /* ─── Alice in Motherland: playing card ─── */
    case "alice-in-motherland":
      return renderLogo(aliceInMotherlandLogo.url, "Alice in Motherland", size);

    /* ─── Battle of the Olympians: uploaded logo ─── */
    case "battle-of-the-olympians":
      return renderLogo(battleOfTheOlympiansLogo.url, "Battle of the Olympians", size);

    /* ─── Treasure Heist: uploaded logo ─── */
    case "treasure-heist":
      return renderLogo(treasureHeistLogo.url, "Treasure Heist", size);

    /* ─── Overseas Retreats: uploaded logo ─── */
    case "overseas-retreats":
      return renderLogo(overseasRetreatsLogo.url, "Overseas Retreats", size);

    /* ─── Local Retreats: uploaded logo ─── */
    case "local-retreats":
      return renderLogo(localRetreatsLogo.url, "Local Retreats", size);

    /* ─── Incentive Travel: uploaded logo ─── */
    case "incentive-travel":
      return renderLogo(incentiveTravelLogo.url, "Incentive Travel", size);
    case "the-gameshow-experience-virtual":
      return renderLogo(gameshowExperienceLogo.url, "The Gameshow Experience", size);

    /* ─── Fit In Your Team: uploaded logo ─── */
    case "fit-in-your-team-virtual":
      return renderLogo(fitInYourTeamLogo.url, "Fit In Your Team", size);

    /* ─── Zodiac Hunt: uploaded logo ─── */
    case "the-great-zodiac-hunt-virtual":
      return renderLogo(greatZodiacHuntLogo.url, "The Great Zodiac Hunt", size);

    /* ─── Nuclear Fallout: uploaded logo ─── */
    case "the-nuclear-fallout-escape-room-virtual":
      return renderLogo(nuclearFalloutEscapeLogo.url, "The Nuclear Fallout Escape Room", size);

    /* ─── Patriot Act: uploaded logo ─── */
    case "the-patriot-act-virtual":
      return renderLogo(thePatriotActLogo.url, "The Patriot Act", size);

    /* ─── Tomb Raider King: uploaded logo ─── */
    case "tomb-raider-king-treasure-hunt-virtual":
      return renderLogo(tombRaiderKingLogo.url, "Tomb Raider King Treasure Hunt", size);

    /* ─── Grand Christmas Delivery: uploaded logo ─── */
    case "grand-christmas-delivery":
      return renderLogo(grandChristmasDeliveryLogo.url, "Grand Christmas Delivery", size);


    /* ─── MBTI / DISC / OCEAN: uploaded logos ─── */
    case "mbti":
      return renderLogo(mbtiLogo.url, "MBTI Profiling", size);
    case "disc":
      return renderLogo(discLogo.url, "DISC Assessment", size);
    case "ocean":
      return renderLogo(oceanLogo.url, "OCEAN Profiling", size);

    /* ─── Mass Talks: uploaded logo ─── */
    case "mass-talks":
      return renderLogo(massTalksLogo.url, "Mass Talks", size);

    /* ─── Workshops: uploaded logo ─── */
    case "workshops":
      return renderLogo(workshopsLogo.url, "Workshops", size);

    /* ─── Youth Camps: uploaded logo ─── */
    case "youth-camps":
      return renderLogo(youthCampLogo.url, "Youth Camps", size);

    /* ─── Corporate Days: uploaded logo ─── */
    case "corporate-days":
      return renderLogo(corporateDaysLogo.url, "Corporate Days", size);

    /* ─── Leadership Offsites: uploaded logo ─── */
    case "leadership-offsites":
      return renderLogo(leadershipOffsitesLogo.url, "Leadership Offsites", size);

    /* ─── Wellness Events: uploaded logo ─── */
    case "wellness-events":
      return renderLogo(wellnessEventsLogo.url, "Wellness Events", size);

    /* ─── Default fallback: lightbulb ─── */
    default:
      return (
        <svg {...common}>
          {/* Bulb */}
          <circle cx="100" cy="80" r="45" fill={`${accentColor}20`} stroke={accentColor} strokeWidth="2.5" />
          {/* Filament */}
          <path d="M88 80 Q95 65 100 80 Q105 95 112 80" stroke={accentColor} strokeWidth="2" fill="none" />
          {/* Base */}
          <rect x="85" y="122" width="30" height="6" rx="3" fill="#888" />
          <rect x="87" y="128" width="26" height="5" rx="2" fill="#777" />
          <rect x="89" y="133" width="22" height="5" rx="2" fill="#666" />
          {/* Screw bottom */}
          <path d="M92 138 Q100 145 108 138" stroke="#555" strokeWidth="2" fill="none" />
          {/* Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1={100 + 52 * Math.cos(deg * Math.PI / 180)}
              y1={80 + 52 * Math.sin(deg * Math.PI / 180)}
              x2={100 + 62 * Math.cos(deg * Math.PI / 180)}
              y2={80 + 62 * Math.sin(deg * Math.PI / 180)}
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          ))}
        </svg>
      );
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/[0.55]" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(135deg, ${accentColor}30 0%, transparent 60%)` }}
        />

        {/* Floating themed prop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [-4, 2, -4],
              y: [0, -14, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            whileHover={{ scale: 1.12, transition: { duration: 0.25 } }}
          >
            <ServiceProp slug={slug} accentColor={accentColor} />
          </motion.div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="relative w-full lg:w-1/2 lg:ml-auto h-full flex items-center">
        {/* Floating particles with accent color */}
        {heroParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              backgroundColor: accentColor,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
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
              {slug === "amazing-race" ? "Welcome To The" : "Welcome To"}
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
              {tagline}
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
                className="group relative w-full overflow-hidden font-display font-semibold tracking-wide sm:w-auto"
                style={{ 
                  background: gradient,
                  color: '#000',
                  border: 'none'
                }}
                onClick={() => openContactModal({ serviceSlug: slug })}
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  <span className="sm:hidden">Plan My Event</span>
                  <span className="hidden sm:inline">Plan Your {subtitle}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
