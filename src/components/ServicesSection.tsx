import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Flag,
  Search,
  Globe,
  Target,
  Crosshair,
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
  Compass,
  Plane,
  MapPin,
  Map,
} from "lucide-react";

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

const physicalActivities = [
  { name: "Amazing Race", icon: Flag, slug: "amazing-race", color: activityColors.amazingRace, description: "Exciting city-wide treasure hunts with challenges and puzzles." },
  { name: "CSI Investigation", icon: Search, slug: "csi-investigation", color: activityColors.csiInvestigation, description: "Thrilling detective experiences solving mysteries together." },
  { name: "Cultural Race", icon: Globe, slug: "cultural-race", color: activityColors.culturalRace, description: "Explore heritage and culture through interactive challenges." },
  { name: "Archery Tag", icon: Target, slug: "archery-tag", color: activityColors.archeryLaserTag, description: "Action-packed archery battles that build team strategy." },
  { name: "Laser Tag", icon: Crosshair, slug: "laser-tag", color: activityColors.archeryLaserTag, description: "High-energy tactical games for competitive teams." },
  { name: "Creative Workshops", icon: Palette, slug: "creative-workshops", color: activityColors.creativeWorkshops, description: "Hands-on art and craft sessions that spark creativity." },
  { name: "Wellness Activities", icon: Leaf, slug: "wellness", color: activityColors.wellness, description: "Mindfulness and wellness programs for team wellbeing." },
  { name: "Adventure Challenges", icon: Mountain, slug: "adventure-challenges", color: activityColors.adventureRaces, description: "Outdoor adventures that push boundaries together." },
];

const virtualActivities = [
  { name: "Virtual Amazing Race", icon: Monitor, slug: "virtual-amazing-race", color: activityColors.amazingRace, description: "Online treasure hunts connecting remote teams globally." },
  { name: "Online Escape Room", icon: Gamepad2, slug: "online-escape-room", color: activityColors.csiInvestigation, description: "Digital puzzles and challenges for virtual team bonding." },
];

const trainingPrograms = [
  { name: "Mass Talks", icon: Mic, slug: "mass-talks", color: activityColors.archeryLaserTag, description: "Engaging keynotes for large audiences." },
  { name: "Workshops", icon: BookOpen, slug: "workshops", color: activityColors.creativeWorkshops, description: "Interactive learning sessions for skill development." },
  { name: "Youth Camps", icon: Users, slug: "youth-camps", color: activityColors.amazingRace, description: "Leadership programs for young professionals." },
  { name: "Corporate Days", icon: Sparkles, slug: "corporate-days", color: activityColors.adventureRaces, description: "Full-day engagement programs for companies." },
  { name: "MBTI / DISC / OCEAN", icon: Brain, slug: "personality-assessments", color: activityColors.wellness, description: "Personality profiling for team dynamics." },
];

const retreatServices = [
  { name: "Overseas Retreats", icon: Plane, slug: "overseas-retreats", color: activityColors.archeryLaserTag, description: "Memorable team getaways to exciting destinations." },
  { name: "Local Retreats", icon: MapPin, slug: "local-retreats", color: activityColors.csiInvestigation, description: "Staycation retreats within Singapore." },
  { name: "Travel Planning", icon: Map, slug: "travel-planning", color: activityColors.amazingRace, description: "End-to-end logistics for corporate travel." },
];

interface ServiceCategory {
  title: string;
  subtitle: string;
  services: typeof physicalActivities;
  bgColor: string;
}

const categories: ServiceCategory[] = [
  { title: "Physical Team Building", subtitle: "Hands-on activities that energize your team", services: physicalActivities, bgColor: "from-primary/5 to-sky-100/50" },
  { title: "Virtual Team Building", subtitle: "Connect remote teams anywhere in the world", services: virtualActivities, bgColor: "from-green-50/50 to-emerald-100/30" },
  { title: "Training Programs", subtitle: "Develop skills and unlock potential", services: trainingPrograms, bgColor: "from-purple-50/50 to-violet-100/30" },
  { title: "Retreats", subtitle: "Getaways that strengthen team bonds", services: retreatServices, bgColor: "from-orange-50/50 to-amber-100/30" },
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Our Activities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From high-energy outdoor adventures to virtual team experiences, we have activities for every team.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.subtitle}</p>
              </div>

              {/* Activity Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredService(service.slug)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group cursor-pointer"
                  >
                    <Link to={`/services/${service.slug}`}>
                      <div 
                        className="relative h-48 rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        style={{ 
                          borderColor: hoveredService === service.slug ? service.color : 'transparent',
                          backgroundColor: service.color,
                        }}
                      >
                        {/* Full color overlay */}
                        <div 
                          className="absolute inset-0 transition-opacity duration-300"
                          style={{ backgroundColor: service.color }}
                        />
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                          
                          {/* Name */}
                          <h4 className="text-white font-display font-bold text-lg leading-tight mb-2">
                            {service.name}
                          </h4>
                          
                          {/* Description - shows on hover */}
                          <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                            {service.description}
                          </p>
                        </div>

                        {/* Hover brightness effect */}
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
