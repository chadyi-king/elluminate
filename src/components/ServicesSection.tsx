import { motion } from "framer-motion";
import {
  Flag,
  Globe,
  Target,
  Monitor,
  BookOpen,
  Sparkles,
  Timer,
  Footprints,
  Users,
  Skull,
  Brain,
  GraduationCap,
  Ghost,
  Rabbit,
  Crown,
  Plane,
  Building,
  Award,
} from "lucide-react";
import { ExpandableActivityCard } from "./ExpandableActivityCard";
import { WaveDivider } from "./WaveDivider";
import { FloatingBlobs } from "./FloatingBlobs";

import heroAmazingRace from "@/assets/hero/amazing-race.jpg";
import heroCreativeWorkshop from "@/assets/hero/creative-workshop.jpg";
import heroCsiInvestigation from "@/assets/hero/csi-investigation.jpg";
import heroAdventureChallenge from "@/assets/hero/adventure-challenge.jpg";
import heroTeamCelebration from "@/assets/hero/team-celebration.jpg";
import heroCulturalRace from "@/assets/hero/cultural-race.jpg";
import heroOverseasRetreat from "@/assets/hero/overseas-retreat.jpg";

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
};

const allActivities = [
  {
    name: "Amazing Race",
    icon: Flag,
    slug: "amazing-race",
    color: activityColors.amazingRace,
    description:
      "Exciting city-wide treasure hunts with challenges and puzzles that test teamwork and problem-solving.",
    stats: "300+ Amazing Races organized",
    clients: "For Google, DBS, Shopee, and more",
    image: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360229/AmazingRace_2_hi89qz.jpg",
    tag: "Physical",
  },
  {
    name: "CSI-Bones",
    icon: Skull,
    slug: "csi-bones",
    color: activityColors.csiInvestigation,
    description:
      "Forensic investigation experience where teams solve mysteries using clues, evidence, and deduction skills.",
    stats: "150+ CSI events delivered",
    clients: "Popular with banks, schools, and tech companies",
    image: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361406/CSI_3_tt9yqa.jpg",
    tag: "Physical",
  },
  {
    name: "Cultural Race",
    icon: Globe,
    slug: "cultural-race",
    color: activityColors.culturalRace,
    description: "Explore Singapore's rich heritage through interactive challenges in historic districts.",
    stats: "200+ Cultural Races completed",
    clients: "Perfect for multinational teams and student groups",
    image: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360229/AmazingRace_2_hi89qz.jpg",
    tag: "Physical",
  },
  {
    name: "Amongst Us",
    icon: Ghost,
    slug: "amongst-us",
    color: activityColors.mystery,
    description:
      "A live social-deduction concept where your group hunts for the imposters before the room turns on itself.",
    stats: "80+ games played",
    clients: "Popular for workplaces, camps, and student leaders",
    image: heroTeamCelebration,
    tag: "Physical",
  },
  {
    name: "Alice in Motherland",
    icon: Rabbit,
    slug: "alice-in-motherland",
    color: activityColors.creativeWorkshops,
    description:
      "A whimsical, story-led journey packed with themed stations, playful puzzles, and immersive team moments.",
    stats: "40+ experiences created",
    clients: "Loved by creative brands, schools, and curated events",
    image: heroCreativeWorkshop,
    tag: "Physical",
  },
  {
    name: "Battle of the Olympians",
    icon: Crown,
    slug: "battle-of-the-olympians",
    color: activityColors.amazingRace,
    description: "An epic competition format that blends athletic rounds, mental games, and all-out team pride.",
    stats: "40+ battles fought",
    clients: "Built for large cohorts, schools, and full-company showdowns",
    image: heroAdventureChallenge,
    tag: "Physical",
  },
  {
    name: "Archery Tag",
    icon: Target,
    slug: "archery-tag",
    color: activityColors.archeryLaserTag,
    description: "Action-packed archery battles that sharpen team strategy, communication, and fast decision-making.",
    stats: "120+ archery events",
    clients: "Great for competitive teams and student cohorts",
    image: heroAdventureChallenge,
    tag: "Physical",
  },
  {
    name: "Minute to Win It",
    icon: Timer,
    slug: "minute-to-win-it",
    color: activityColors.action,
    description: "Fast-paced one-minute challenges that bring out competitive spirit and lots of laughter.",
    stats: "200+ events hosted",
    clients: "Perfect for D&D, schools, and celebrations",
    image: heroTeamCelebration,
    tag: "Physical",
  },
  {
    name: "Running Man Adventure",
    icon: Footprints,
    slug: "running-man",
    color: activityColors.culturalRace,
    description: "Korean Running Man-inspired games with name tag ripping, missions, and hilarious challenges.",
    stats: "120+ adventures ran",
    clients: "Popular with K-culture fans and youth groups",
    image: heroCulturalRace,
    tag: "Physical",
  },
  {
    name: "Amazing Race Virtual",
    icon: Monitor,
    slug: "amazing-race-virtual",
    color: activityColors.csiInvestigation,
    description:
      "A remote-friendly Amazing Race experience that keeps distributed teams engaged through live digital challenges.",
    stats: "150+ virtual races",
    clients: "Global teams and hybrid cohorts",
    image: heroTeamCelebration,
    tag: "Virtual",
  },
  {
    name: "Gameshow Experience",
    icon: Sparkles,
    slug: "the-gameshow-experience-virtual",
    color: activityColors.mystery,
    description:
      "An interactive online game show format designed for fast laughs, remote participation, and easy engagement.",
    stats: "120+ virtual game shows",
    clients: "Distributed teams worldwide",
    image: heroCsiInvestigation,
    tag: "Virtual",
  },
  {
    name: "Overseas Retreats",
    icon: Plane,
    slug: "overseas-retreats",
    color: activityColors.adventureRaces,
    description:
      "Retreat experiences designed for deeper connection, offsite focus, and shared momentum outside the usual setting.",
    stats: "Regional retreats across Asia",
    clients: "Leadership teams, departments, and top performers",
    image: heroOverseasRetreat,
    tag: "Retreat",
  },
  {
    name: "Local Retreats",
    icon: Building,
    slug: "local-retreats",
    color: activityColors.wellness,
    description:
      "Three tiers of Singapore hotel retreats — Staycation, Heritage, or Luxury — designed to reward your team without leaving the island.",
    stats: "Staycation, Heritage & Luxury tiers",
    clients: "Whole-staff, leadership teams, and top performers",
    image: heroOverseasRetreat,
    tag: "Retreat",
  },
  {
    name: "Incentive Travel",
    icon: Award,
    slug: "incentive-travel",
    color: activityColors.amazingRace,
    description:
      "Reward-based travel programmes for top performers — fully managed from criteria design to on-ground execution and post-trip recognition.",
    stats: "Regional & long-haul programmes",
    clients: "Sales teams, top earners, and leadership cohorts",
    image: heroOverseasRetreat,
    tag: "Retreat",
  },
  {
    name: "Workshops",
    icon: BookOpen,
    slug: "workshops",
    color: activityColors.creativeWorkshops,
    description:
      "Interactive learning sessions built around communication, collaboration, leadership, and team development.",
    stats: "150+ training programmes",
    clients: "MNCs, public sector teams, and schools",
    image: heroCreativeWorkshop,
    tag: "Training",
  },
  {
    name: "MBTI Profiling",
    icon: Users,
    slug: "mbti",
    color: activityColors.wellness,
    description:
      "A practical profiling workshop that helps teams understand personality differences and work better together.",
    stats: "100+ profiling sessions",
    clients: "Leadership, HR, and student leaders",
    image: heroCreativeWorkshop,
    tag: "Training",
  },
  {
    name: "DISC Assessment",
    icon: Brain,
    slug: "disc",
    color: activityColors.archeryLaserTag,
    description:
      "A practical behavioural profiling session that helps teams communicate better and collaborate more effectively.",
    stats: "80+ DISC sessions",
    clients: "Managers, schools, and leadership teams",
    image: heroCreativeWorkshop,
    tag: "Training",
  },
  {
    name: "Youth Camps",
    icon: GraduationCap,
    slug: "youth-camps",
    color: activityColors.wellness,
    description:
      "High-energy school and youth experiences designed for bonding, leadership, and memorable cohort moments.",
    stats: "120+ school and youth programmes",
    clients: "Schools, student leaders, and youth groups",
    image: heroTeamCelebration,
    tag: "School",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/[0.03] to-primary/5" />
      <FloatingBlobs opacity={0.06} />
      <WaveDivider variant="top" className="z-10" />

      <div className="container mx-auto px-6 relative z-10">
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
            Team Building, Retreats & <span className="text-primary">Training</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore physical team building, virtual team building, retreats, and training formats clients, schools, and
            student groups book us for most.
          </p>
          <p className="text-muted-foreground/70 max-w-3xl mx-auto text-sm mt-4">
            The mix below makes the offer clearer at a glance, while keeping your most distinctive experiences front and
            centre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allActivities.map((activity, index) => (
            <motion.div
              key={activity.name}
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
                tag={activity.tag}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider variant="bottom" className="z-10" />
    </section>
  );
};
