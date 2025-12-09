import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Plane,
  Music,
  Trophy,
  PartyPopper,
  Compass,
  Rocket,
  Sparkles,
  Heart,
  Building,
  Palette,
  Leaf,
  Lightbulb,
  Monitor,
  Brush,
  Mic,
  Crown,
  Baby,
  Tent,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Corporate / Company Events",
    services: [
      { name: "Corporate Team Building", icon: Users, slug: "team-building" },
      { name: "Company Retreats", icon: Plane, slug: "company-retreats" },
      { name: "Dinner & Dance", icon: Music, slug: "dinner-and-dance" },
      { name: "Awards Ceremonies", icon: Trophy, slug: "awards-ceremonies" },
      { name: "Corporate Anniversaries", icon: PartyPopper, slug: "corporate-anniversaries" },
      { name: "Leadership Offsites", icon: Compass, slug: "leadership-offsites" },
      { name: "Product Launch Events", icon: Rocket, slug: "product-launch" },
      { name: "Brand Activations", icon: Sparkles, slug: "brand-activations" },
      { name: "Client Appreciation", icon: Heart, slug: "client-appreciation" },
      { name: "Town Halls", icon: Building, slug: "town-halls" },
    ],
  },
  {
    title: "Immersive & Culture",
    services: [
      { name: "Immersive Experiences", icon: Palette, slug: "immersive-experiences" },
      { name: "Wellness Events", icon: Leaf, slug: "wellness-events" },
    ],
  },
  {
    title: "Creative & Production",
    services: [
      { name: "Event Concept Development", icon: Lightbulb, slug: "event-concept" },
      { name: "Stage & AV Production", icon: Monitor, slug: "stage-production" },
      { name: "Custom Theme Creation", icon: Brush, slug: "custom-themes" },
      { name: "Emcee / Photo / Video", icon: Mic, slug: "emcee-services" },
    ],
  },
  {
    title: "Luxury",
    services: [
      { name: "VIP Gala Experiences", icon: Crown, slug: "vip-gala" },
    ],
  },
  {
    title: "Family & Community",
    services: [
      { name: "Family Fun Days", icon: Baby, slug: "family-fun-days" },
      { name: "Corporate Carnivals", icon: Tent, slug: "corporate-carnivals" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold mb-6">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From intimate gatherings to grand celebrations, we craft extraordinary experiences that leave lasting impressions.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-serif text-primary-soft mb-8 border-b border-border-gold/30 pb-4">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {category.services.map((service) => (
                  <motion.div key={service.slug} variants={itemVariants}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="group block p-6 bg-card/50 border border-border-gold/20 rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-gold-soft transition-all duration-300">
                          <service.icon className="w-5 h-5 text-primary group-hover:text-primary-ember transition-colors" />
                        </div>
                        <span className="text-foreground group-hover:text-primary-soft font-medium transition-colors">
                          {service.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
