import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  Building,
  Flag,
  Globe,
  Monitor,
  Plane,
  Skull,
  Target,
  Timer,
  Users,
} from "lucide-react";
import { ExpandableActivityCard } from "./ExpandableActivityCard";
import { FloatingBlobs } from "./FloatingBlobs";
import { WaveDivider } from "./WaveDivider";

const activityColors = {
  yellow: "#FFC400",
  green: "#26D07C",
  red: "#FF4F4F",
  blue: "#2A8DFF",
  purple: "#A768FF",
  mint: "#62E2C4",
  orange: "#FF8A3D",
};

const allActivities = [
  {
    name: "Team Building",
    icon: Users,
    slug: "team-building",
    color: activityColors.blue,
    description: "Plan a physical or virtual team activity around your people, venue, timing, and event objective.",
    stats: "Physical, indoor, outdoor, and virtual directions",
    clients: "Start with pax, date, venue, and goal",
    image: "/images/services/amazing-race/gallery-1.jpg",
    tag: "Overview",
  },
  {
    name: "Amazing Race",
    icon: Flag,
    slug: "amazing-race",
    color: activityColors.yellow,
    description: "An outdoor route with checkpoints, clues, and facilitated challenges that teams complete together.",
    stats: "Movement, exploration, and team missions",
    clients: "Useful for teams that want an active shared finish",
    image: "/images/services/amazing-race/gallery-1.jpg",
    tag: "Physical",
  },
  {
    name: "CSI-Bones",
    icon: Skull,
    slug: "csi-bones",
    color: activityColors.green,
    description: "An indoor investigation where teams examine evidence, compare theories, and solve the case.",
    stats: "Indoor, collaborative, and lower movement",
    clients: "Useful for analytical groups and controlled venues",
    image: "/images/services/csi-bones/gallery-1.jpg",
    tag: "Physical",
  },
  {
    name: "Cultural Race",
    icon: Globe,
    slug: "cultural-race",
    color: activityColors.red,
    description: "A Singapore discovery route that combines local districts, team missions, clues, and movement.",
    stats: "Location-led outdoor team format",
    clients: "Useful for local and visiting company groups",
    image: "/images/services/cultural-race/gallery-5.jpg",
    tag: "Physical",
  },
  {
    name: "Minute To Win It",
    icon: Timer,
    slug: "minute-to-win-it",
    color: activityColors.orange,
    description: "Short station challenges that create quick rotations, visible scoring, and accessible participation.",
    stats: "Compact energy for indoor venues",
    clients: "Useful for offices, function rooms, and ballrooms",
    image: "/images/services/minute-to-win-it/gallery-3.jpg",
    tag: "Physical",
  },
  {
    name: "Monopoly Dash",
    icon: Target,
    slug: "monopoly-dash",
    color: activityColors.red,
    description: "A facilitated challenge format combining light strategy, movement, points, and friendly competition.",
    stats: "Strategy and movement in one format",
    clients: "Useful when the group wants easy-to-follow momentum",
    image: "/images/services/monopoly-dash/gallery-2.jpg",
    tag: "Physical",
  },
  {
    name: "Virtual Amazing Race",
    icon: Monitor,
    slug: "amazing-race-virtual",
    color: activityColors.purple,
    description: "A hosted online race that gives remote and multi-office teams a shared challenge and finish.",
    stats: "Facilitated virtual team experience",
    clients: "Useful when the team cannot gather in one venue",
    image: "/images/services/amazing-race-virtual/gallery-1.jpg",
    tag: "Virtual",
  },
  {
    name: "Overseas Retreats",
    icon: Plane,
    slug: "overseas-retreats",
    color: activityColors.orange,
    description: "Company retreats shaped around destination, itinerary, group needs, activities, and travel logistics.",
    stats: "Travel, accommodation, itinerary, and activities",
    clients: "Start with destination range, dates, pax, and purpose",
    image: "/images/services/overseas-retreats/hero.jpg",
    tag: "Retreat",
  },
  {
    name: "Local Retreats",
    icon: Building,
    slug: "local-retreats",
    color: activityColors.mint,
    description: "Singapore offsites planned around the right balance of work sessions, bonding, meals, and downtime.",
    stats: "Local offsite and stay-based directions",
    clients: "Useful when the team needs a change of setting",
    image: "/images/services/local-retreats/hero.jpg",
    tag: "Retreat",
  },
  {
    name: "Incentive Travel",
    icon: Award,
    slug: "incentive-travel",
    color: activityColors.yellow,
    description: "Reward travel planned around the qualifying group, destination, itinerary, and recognition moment.",
    stats: "Travel direction and programme planning",
    clients: "Useful for reward and recognition programmes",
    image: "/images/services/incentive-travel/hero.jpg",
    tag: "Retreat",
  },
  {
    name: "Workshops",
    icon: BookOpen,
    slug: "workshops",
    color: activityColors.purple,
    description: "Facilitated workplace sessions shaped around the audience, time available, and intended discussion.",
    stats: "Interactive workshop and talk directions",
    clients: "Start with audience, context, duration, and objective",
    image: "/images/services/workshops/hero.jpg",
    tag: "Training",
  },
  {
    name: "MBTI Workshop",
    icon: Brain,
    slug: "mbti",
    color: activityColors.mint,
    description: "A guided team conversation about personality preferences, working styles, and communication patterns.",
    stats: "Facilitated reflection and team discussion",
    clients: "Useful when the goal is shared language and awareness",
    image: "/images/services/mbti/hero.jpg",
    tag: "Training",
  },
];

export const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

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
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore the main experience directions, then share your group, timing, venue, and objective so the plan can
            be narrowed around the people attending.
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
                isActive={activeCard === activity.slug}
                onActivate={() => setActiveCard(activity.slug)}
                onDeactivate={() =>
                  setActiveCard((currentCard) => (currentCard === activity.slug ? null : currentCard))
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider variant="bottom" className="z-10" />
    </section>
  );
};
