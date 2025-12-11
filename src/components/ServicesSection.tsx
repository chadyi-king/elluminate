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
  Plane,
  MapPin,
  Map,
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import { WaveDivider } from "./WaveDivider";
import { FloatingBlobs } from "./FloatingBlobs";

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
  accentColor: string;
}

const categories: ServiceCategory[] = [
  { title: "Physical Team Building", subtitle: "Hands-on activities that energize your team", services: physicalActivities, accentColor: "#2A8DFF" },
  { title: "Virtual Team Building", subtitle: "Connect remote teams anywhere in the world", services: virtualActivities, accentColor: "#26D07C" },
  { title: "Training Programs", subtitle: "Develop skills and unlock potential", services: trainingPrograms, accentColor: "#A768FF" },
  { title: "Retreats", subtitle: "Getaways that strengthen team bonds", services: retreatServices, accentColor: "#FF8A3D" },
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      
      {/* Floating blobs */}
      <FloatingBlobs opacity={0.08} />

      {/* Wave divider at top */}
      <WaveDivider variant="top" className="z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            <span className="text-rainbow-gradient">Our Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From high-energy outdoor adventures to virtual team experiences, we have activities for every team.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-10 flex items-center gap-4">
                <motion.div
                  className="w-2 h-12 rounded-full"
                  style={{ backgroundColor: category.accentColor }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.subtitle}</p>
                </div>
              </div>

              {/* Activity Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onMouseEnter={() => setHoveredService(service.slug)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group cursor-pointer"
                  >
                    <Link to={`/services/${service.slug}`}>
                      <TiltCard 
                        glareColor={service.color + "40"}
                        tiltAmount={12}
                      >
                        <div 
                          className="relative h-52 rounded-2xl overflow-hidden transition-all duration-500 border-2"
                          style={{ 
                            borderColor: hoveredService === service.slug ? service.color : 'transparent',
                            backgroundColor: service.color,
                            boxShadow: hoveredService === service.slug 
                              ? `0 20px 40px ${service.color}40, 0 0 0 2px ${service.color}`
                              : '0 4px 20px rgba(0,0,0,0.1)'
                          }}
                        >
                          {/* Animated gradient overlay */}
                          <motion.div 
                            className="absolute inset-0"
                            style={{ 
                              background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)` 
                            }}
                            animate={{
                              background: hoveredService === service.slug
                                ? [`linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                                   `linear-gradient(225deg, ${service.color} 0%, ${service.color}dd 100%)`]
                                : `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          />
                          
                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                            {/* Icon with bounce animation */}
                            <motion.div 
                              className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg"
                              whileHover={{ scale: 1.15, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <service.icon className="w-8 h-8 text-white drop-shadow-md" />
                            </motion.div>
                            
                            {/* Name */}
                            <h4 className="text-white font-display font-bold text-lg leading-tight mb-2 drop-shadow-md">
                              {service.name}
                            </h4>
                            
                            {/* Description - shows on hover */}
                            <motion.p 
                              className="text-white/90 text-sm line-clamp-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ 
                                opacity: hoveredService === service.slug ? 1 : 0,
                                y: hoveredService === service.slug ? 0 : 10
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {service.description}
                            </motion.p>
                          </div>

                          {/* Shine effect on hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                            animate={{
                              translateX: hoveredService === service.slug ? "200%" : "-100%"
                            }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                      </TiltCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave divider at bottom */}
      <WaveDivider variant="bottom" className="z-10" />
    </section>
  );
};
