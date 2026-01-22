import { motion } from "framer-motion";
import {
  Flag,
  Search,
  Globe,
  Target,
  Palette,
  Leaf,
  Mountain,
  Monitor,
  Gamepad2,
  BookOpen,
  Sparkles,
  Plane,
  MapPin,
  Swords,
  Timer,
  Gem,
  Ghost,
  Trophy,
  Footprints,
  Dumbbell,
  Users,
  Skull,
  Crosshair,
  Dice5,
  PersonStanding,
  Crown,
  Rabbit,
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
  // Physical Team Building
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
    name: "Amongst Us", 
    icon: Ghost, 
    slug: "amongst-us", 
    color: activityColors.mystery, 
    description: "Real-life version of the viral game. Find the imposters among your crew before it's too late!",
    stats: "80+ games played",
    clients: "Tech startups love this",
    image: heroTeamCelebration,
  },
  { 
    name: "Treasure Heist", 
    icon: Gem, 
    slug: "treasure-heist", 
    color: activityColors.culturalRace, 
    description: "Inspired by Money Heist. Plan and execute the perfect heist with your team in this thrilling adventure.",
    stats: "60+ heists completed",
    clients: "Popular for team bonding",
    image: heroAdventureChallenge,
  },
  { 
    name: "Sotong Game", 
    icon: Gamepad2, 
    slug: "sotong-game", 
    color: activityColors.sotong,
    description: "Squid Game-inspired challenges adapted for safe, exciting team competition. Can your team survive?",
    stats: "100+ games organized",
    clients: "Trending with all industries",
    image: heroAmazingRace,
  },
  { 
    name: "Alice in Motherland", 
    icon: Rabbit, 
    slug: "alice-in-motherland", 
    color: activityColors.creativeWorkshops, 
    description: "Whimsical wonderland adventure with themed challenges and creative problem-solving.",
    stats: "40+ experiences created",
    clients: "Great for creative teams",
    image: heroCreativeWorkshop,
  },
  { 
    name: "Builder Cross", 
    icon: Building, 
    slug: "builder-cross", 
    color: activityColors.amazingRace, 
    description: "Construction-themed challenges that test engineering, strategy, and teamwork skills.",
    stats: "70+ builds completed",
    clients: "Engineering and construction firms",
    image: heroAdventureChallenge,
  },
  { 
    name: "Gel Blitz", 
    icon: Crosshair, 
    slug: "gel-blitz", 
    color: activityColors.archeryLaserTag, 
    description: "Action-packed gel blaster battles combining strategy, teamwork, and adrenaline-pumping fun.",
    stats: "90+ battles organized",
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
    name: "Battle of the Olympians", 
    icon: Crown, 
    slug: "battle-olympians", 
    color: activityColors.amazingRace, 
    description: "Epic Olympic-style team competitions featuring various athletic and mental challenges.",
    stats: "40+ battles fought",
    clients: "Great for large groups",
    image: heroAdventureChallenge,
  },
  { 
    name: "Creative Workshops", 
    icon: Palette, 
    slug: "creative-workshops", 
    color: activityColors.creativeWorkshops, 
    description: "Hands-on art and craft sessions that spark creativity and bring out hidden talents.",
    stats: "250+ workshops conducted",
    clients: "Loved by creative agencies",
    image: heroCreativeWorkshop,
  },
  { 
    name: "Wellness Activities", 
    icon: Leaf, 
    slug: "wellness", 
    color: activityColors.wellness, 
    description: "Mindfulness, yoga, and wellness programs that promote team wellbeing and stress relief.",
    stats: "100+ wellness retreats",
    clients: "Healthcare and finance sectors",
    image: heroWellnessActivity,
  },
  { 
    name: "Archery Tag", 
    icon: Target, 
    slug: "archery-tag", 
    color: activityColors.archeryLaserTag, 
    description: "Action-packed archery battles that build team strategy and communication skills.",
    stats: "120+ archery events",
    clients: "Great for competitive teams",
    image: heroAdventureChallenge,
  },
  // Virtual Team Building
  { 
    name: "Virtual Amazing Race", 
    icon: Monitor, 
    slug: "virtual-amazing-race", 
    color: activityColors.csiInvestigation, 
    description: "Online treasure hunt experience connecting remote teams through digital challenges worldwide.",
    stats: "150+ virtual races",
    clients: "Global tech companies",
    image: heroTeamCelebration,
  },
  { 
    name: "Virtual Escape Room", 
    icon: Search, 
    slug: "virtual-escape-room", 
    color: activityColors.mystery, 
    description: "Collaborative online puzzle-solving where remote teams work together to escape.",
    stats: "100+ virtual escapes",
    clients: "Distributed teams worldwide",
    image: heroCsiInvestigation,
  },
  { 
    name: "Online Team Games", 
    icon: Gamepad2, 
    slug: "online-team-games", 
    color: activityColors.archeryLaserTag, 
    description: "Interactive multiplayer games designed for virtual team bonding and fun competition.",
    stats: "200+ virtual events",
    clients: "Global tech companies",
    image: heroTeamCelebration,
  },
  // Training
  { 
    name: "Corporate Training", 
    icon: BookOpen, 
    slug: "corporate-training", 
    color: activityColors.creativeWorkshops, 
    description: "Interactive workshops covering leadership, communication, MBTI, DISC, and team dynamics.",
    stats: "150+ training programs",
    clients: "MNCs and government agencies",
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
  { 
    name: "Team Celebrations", 
    icon: Sparkles, 
    slug: "team-celebrations", 
    color: activityColors.amazingRace, 
    description: "Organize memorable team milestones, anniversaries, and celebration events.",
    stats: "100+ celebrations hosted",
    clients: "All industries",
    image: heroTeamCelebration,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
      
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
            Our <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From high-energy outdoor adventures to creative workshops and overseas retreats, 
            we have the perfect activity for every team.
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
