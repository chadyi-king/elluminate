import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const allServices = [
  { name: "Corporate Team Building", icon: Users, slug: "team-building", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" },
  { name: "Company Retreats", icon: Plane, slug: "company-retreats", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
  { name: "Dinner & Dance", icon: Music, slug: "dinner-and-dance", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" },
  { name: "Awards Ceremonies", icon: Trophy, slug: "awards-ceremonies", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
  { name: "Corporate Anniversaries", icon: PartyPopper, slug: "corporate-anniversaries", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600" },
  { name: "Leadership Offsites", icon: Compass, slug: "leadership-offsites", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600" },
  { name: "Product Launch Events", icon: Rocket, slug: "product-launch", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600" },
  { name: "Brand Activations", icon: Sparkles, slug: "brand-activations", image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=600" },
  { name: "Client Appreciation", icon: Heart, slug: "client-appreciation", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600" },
  { name: "Town Halls", icon: Building, slug: "town-halls", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600" },
  { name: "Immersive Experiences", icon: Palette, slug: "immersive-experiences", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" },
  { name: "Wellness Events", icon: Leaf, slug: "wellness-events", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600" },
  { name: "Event Concept Development", icon: Lightbulb, slug: "event-concept", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600" },
  { name: "Stage & AV Production", icon: Monitor, slug: "stage-production", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" },
  { name: "Custom Theme Creation", icon: Brush, slug: "custom-themes", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600" },
  { name: "Emcee / Photo / Video", icon: Mic, slug: "emcee-services", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600" },
  { name: "VIP Gala Experiences", icon: Crown, slug: "vip-gala", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600" },
  { name: "Family Fun Days", icon: Baby, slug: "family-fun-days", image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600" },
  { name: "Corporate Carnivals", icon: Tent, slug: "corporate-carnivals", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600" },
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Expanding Cards Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {allServices.map((service, index) => (
              <motion.div
                key={service.slug}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  width: hoveredIndex === index ? 320 : 60,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative h-80 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/60 to-transparent" />
                
                {/* Gold edge gradient */}
                <div className="absolute inset-0 border border-primary/30 rounded-xl group-hover:border-primary/60 transition-colors duration-300" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content - Collapsed state (vertical text) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex flex-col items-center gap-3">
                    <service.icon className="w-5 h-5 text-primary" />
                    <span 
                      className="text-primary-soft text-xs tracking-wider uppercase whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                      {service.name}
                    </span>
                  </div>
                </div>

                {/* Content - Expanded state */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif text-primary-soft">
                      {service.name}
                    </h3>
                  </div>
                  
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-ember transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-6 gap-2">
            <span className="text-muted-foreground text-sm">← Scroll to explore →</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
