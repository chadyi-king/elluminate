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
  Mic,
  BookOpen,
  Users,
  Sparkles,
  Brain,
  Plane,
  MapPin,
  Map,
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
};

const allActivities = [
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
    name: "CSI Investigation", 
    icon: Search, 
    slug: "csi-investigation", 
    color: activityColors.csiInvestigation, 
    description: "Thrilling detective experiences where teams solve mysteries together using clues and deduction.",
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
    name: "Adventure Challenges", 
    icon: Mountain, 
    slug: "adventure-challenges", 
    color: activityColors.adventureRaces, 
    description: "Outdoor adventures featuring obstacle courses, hiking, and physical team challenges.",
    stats: "180+ adventure events",
    clients: "Popular with sales teams",
    image: heroAdventureChallenge,
  },
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
    name: "Virtual Team Building", 
    icon: Monitor, 
    slug: "virtual-team-building", 
    color: activityColors.csiInvestigation, 
    description: "Online activities that connect remote teams globally with fun and engaging challenges.",
    stats: "200+ virtual events",
    clients: "Global tech companies",
    image: heroTeamCelebration,
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
  { 
    name: "Corporate Training", 
    icon: BookOpen, 
    slug: "corporate-training", 
    color: activityColors.creativeWorkshops, 
    description: "Interactive workshops covering leadership, communication, and team dynamics.",
    stats: "150+ training programs",
    clients: "MNCs and government agencies",
    image: heroCreativeWorkshop,
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
