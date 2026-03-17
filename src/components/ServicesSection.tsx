import { motion } from "framer-motion";
import {
  Flag,
  Globe,
  Target,
  Monitor,
  Gamepad2,
  BookOpen,
  Sparkles,
  Plane,
  MapPin,
  Swords,
  Timer,
  Footprints,
  Users,
  Skull,
  Crosshair,
  Dice5,
  Building,
} from "lucide-react";
import { ExpandableActivityCard } from "./ExpandableActivityCard";
import { WaveDivider } from "./WaveDivider";
import { FloatingBlobs } from "./FloatingBlobs";

// Import activity images
import heroAmazingRace from "@/assets/hero/amazing-race.jpg";
import heroOverseasRetreat from "@/assets/hero/overseas-retreat.jpg";
import heroCreativeWorkshop from "@/assets/hero/creative-workshop.jpg";
import heroCsiInvestigation from "@/assets/hero/csi-investigation.jpg";
import heroWellnessActivity from "@/assets/hero/wellness-activity.jpg";
import heroAdventureChallenge from "@/assets/hero/adventure-challenge.jpg";
import heroTeamCelebration from "@/assets/hero/team-celebration.jpg";
import heroCulturalRace from "@/assets/hero/cultural-race.jpg";

// Activity accent colors matching brand guidelines
const activityColors = {
  amazingRace: "#FFC400",
  csiInvestigation: "#26D07C",
  culturalRace: "#FF4F4F",
  archeryLaserTag: "#2A8DFF",
  creativeWorkshops: "#A768FF",
  wellness: "#62E2C4",
  adventureRaces: "#FF8A3D",
  mystery: "#8B5CF6",
  action: "#F97316",
  sotong: "#D946EF",
  laser: "#FFC400",
};

const allActivities = [
  // Team Building
  { 
    name: "Amazing Race", 
    icon: Flag, 
    slug: "amazing-race", 
    color: activityColors.amazingRace, 
    description: "Exciting city-wide treasure hunts with challenges and puzzles that test teamwork and problem-solving.",
    stats: "300+ Amazing Races organized",
    clients: "For Google, DBS, Shopee, and more",
    image: heroAmazingRace,
  },
  { 
    name: "CSI-Bones", 
    icon: Skull, 
    slug: "csi-bones", 
    color: activityColors.csiInvestigation, 
    description: "Forensic investigation experience where teams solve mysteries using clues, evidence, and deduction skills.",
    stats: "150+ CSI events delivered",
    clients: "Popular with banks and tech companies",
    image: heroCsiInvestigation,
  },
  { 
    name: "Cultural Race", 
    icon: Globe, 
    slug: "cultural-race", 
    color: activityColors.culturalRace, 
    description: "Explore Singapore's rich heritage through interactive challenges in historic districts.",
    stats: "200+ Cultural Races completed",
    clients: "Perfect for multinational teams",
    image: heroCulturalRace,
  },
  { 
    name: "Archery Tag", 
    icon: Target, 
    slug: "archery-tag", 
    color: activityColors.archeryLaserTag, 
    description: "Action-packed archery battles that sharpen team strategy, communication, and fast decision-making.",
    stats: "120+ archery events",
    clients: "Great for competitive teams",
    image: heroAdventureChallenge,
  },
  { 
    name: "Builder Cross", 
    icon: Building, 
    slug: "builder-cross", 
    color: activityColors.amazingRace, 
    description: "Construction-themed challenges that test planning, collaboration, and hands-on problem solving.",
    stats: "70+ builds completed",
    clients: "Engineering and operations teams",
    image: heroAdventureChallenge,
  },
  { 
    name: "Gel Blitz", 
    icon: Crosshair, 
    slug: "gel-blitz", 
    color: activityColors.archeryLaserTag, 
    description: "Fast-moving gel blaster battles built around teamwork, tactics, and adrenaline-filled fun.",
    stats: "90+ battles organised",
    clients: "Sales teams and startups",
    image: heroAdventureChallenge,
  },
  {
    name: "Nerfwar",
    icon: Swords,
    slug: "nerfwar",
    color: activityColors.laser,
    description: "Foam-dart team battles with light tactics, fast rounds, and big laughs.",
    stats: "80+ Nerf wars hosted",
    clients: "Great for mixed fitness levels",
    image: heroAdventureChallenge,
  },
  { 
    name: "Minute to Win It", 
    icon: Timer, 
    slug: "minute-to-win-it", 
    color: activityColors.action, 
    description: "Fast-paced one-minute challenges that bring out competitive spirit and lots of laughter.",
    stats: "200+ events hosted",
    clients: "Perfect for D&D and celebrations",
    image: heroTeamCelebration,
  },
  { 
    name: "Monopoly Dash", 
    icon: Dice5, 
    slug: "monopoly-dash", 
    color: activityColors.amazingRace, 
    description: "Life-sized Monopoly experience across the city. Buy properties, complete missions, dominate the board!",
    stats: "50+ dashes completed",
    clients: "Finance and real estate teams",
    image: heroAmazingRace,
  },
  { 
    name: "Running Man Adventure", 
    icon: Footprints, 
    slug: "running-man", 
    color: activityColors.culturalRace, 
    description: "Korean Running Man-inspired games with name tag ripping, missions, and hilarious challenges.",
    stats: "120+ adventures run",
    clients: "Popular with K-culture fans",
    image: heroCulturalRace,
  },
  {
    name: "Sotong Game",
    icon: Gamepad2,
    slug: "sotong-game",
    color: activityColors.sotong,
    description: "Squid Game-inspired challenges adapted into a safe, high-energy format for team competition.",
    stats: "100+ games organised",
    clients: "Trending across industries",
    image: heroAmazingRace,
  },
  {
    name: "Tag-tical Laser Teambuilding",
    icon: Crosshair,
    slug: "tag-tical-laser-teambuilding",
    color: activityColors.laser,
    description: "High-energy laser team battles that sharpen communication, tactics, and coordination.",
    stats: "120+ laser events delivered",
    clients: "Perfect for competitive teams",
    image: heroAdventureChallenge,
  },
  { 
    name: "Treasure Heist", 
    icon: Sparkles, 
    slug: "treasure-heist", 
    color: activityColors.culturalRace, 
    description: "A cinematic heist-themed challenge where teams collaborate, plan, and race against the clock.",
    stats: "60+ heists completed",
    clients: "Popular for team bonding",
    image: heroAdventureChallenge,
  },
  // Virtual & Hybrid
  { 
    name: "Amazing Race Virtual", 
    icon: Monitor, 
    slug: "amazing-race-virtual", 
    color: activityColors.csiInvestigation, 
    description: "A remote-friendly Amazing Race experience that keeps distributed teams engaged through live digital challenges.",
    stats: "150+ virtual races",
    clients: "Global tech companies",
    image: heroTeamCelebration,
  },
  { 
    name: "Gameshow Experience", 
    icon: Sparkles, 
    slug: "the-gameshow-experience-virtual", 
    color: activityColors.mystery, 
    description: "An interactive online game show format designed for fast laughs, remote participation, and easy engagement.",
    stats: "120+ virtual game shows",
    clients: "Distributed teams worldwide",
    image: heroCsiInvestigation,
  },
  { 
    name: "Fit In Your Team", 
    icon: Gamepad2, 
    slug: "fit-in-your-team-virtual", 
    color: activityColors.archeryLaserTag, 
    description: "A movement-based virtual session that helps remote teams bond through light fitness and shared energy.",
    stats: "90+ virtual wellness sessions",
    clients: "Hybrid and remote teams",
    image: heroTeamCelebration,
  },
  // Training
  { 
    name: "Workshops", 
    icon: BookOpen, 
    slug: "workshops", 
    color: activityColors.creativeWorkshops, 
    description: "Interactive learning sessions built around communication, collaboration, leadership, and team development.",
    stats: "150+ training programmes",
    clients: "MNCs and public sector teams",
    image: heroCreativeWorkshop,
  },
  { 
    name: "MBTI Profiling", 
    icon: Users, 
    slug: "mbti", 
    color: activityColors.wellness, 
    description: "A practical profiling workshop that helps teams understand personality differences and work better together.",
    stats: "100+ profiling sessions",
    clients: "Leadership and HR teams",
    image: heroCreativeWorkshop,
  },
  // Retreats
  { 
    name: "Overseas Retreats", 
    icon: Plane, 
    slug: "overseas-retreats", 
    color: activityColors.archeryLaserTag, 
    description: "Memorable team getaways to exciting destinations like Bali, Phuket, and more.",
    stats: "50+ overseas retreats planned",
    clients: "Executive and leadership teams",
    image: heroOverseasRetreat,
  },
  { 
    name: "Local Retreats", 
    icon: MapPin, 
    slug: "local-retreats", 
    color: activityColors.wellness, 
    description: "Staycation retreats within Singapore at beautiful resorts and venues.",
    stats: "80+ local retreats",
    clients: "SMEs and startups",
    image: heroOverseasRetreat,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/[0.03] to-primary/5" />
      
      {/* Floating blobs */}
      <FloatingBlobs opacity={0.06} />

      {/* Wave divider at top */}
      <WaveDivider variant="top" className="z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Signature <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the formats teams book us for most — from high-energy team building and immersive games
            to retreats, workshops, and celebration-led corporate events.
          </p>
          <p className="text-muted-foreground/70 max-w-3xl mx-auto text-sm mt-4">
            This is a curated starting point, so visitors can explore your most popular experiences without being overwhelmed.
          </p>
        </motion.div>

        {/* Activity Cards Grid - Unified, no categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allActivities.map((activity, index) => (
            <motion.div
              key={activity.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              <ExpandableActivityCard
                name={activity.name}
                icon={activity.icon}
                slug={activity.slug}
                color={activity.color}
                description={activity.description}
                stats={activity.stats}
                clients={activity.clients}
                image={activity.image}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave divider at bottom */}
      <WaveDivider variant="bottom" className="z-10" />
    </section>
  );
};
