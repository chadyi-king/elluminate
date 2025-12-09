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
  { name: "Corporate Team Building", icon: Users, slug: "team-building", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600", description: "Build stronger teams through engaging activities and collaborative experiences." },
  { name: "Company Retreats", icon: Plane, slug: "company-retreats", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", description: "Transform your team with memorable local and overseas retreat experiences." },
  { name: "Dinner & Dance", icon: Music, slug: "dinner-and-dance", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600", description: "Spectacular evening celebrations with stunning themes and entertainment." },
  { name: "Awards Ceremonies", icon: Trophy, slug: "awards-ceremonies", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", description: "Celebrate achievements with elegance and unforgettable presentations." },
  { name: "Corporate Anniversaries", icon: PartyPopper, slug: "corporate-anniversaries", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600", description: "Mark milestones with celebrations that honor your company's journey." },
  { name: "Leadership Offsites", icon: Compass, slug: "leadership-offsites", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", description: "Strategic retreats designed for leadership alignment and growth." },
  { name: "Product Launch Events", icon: Rocket, slug: "product-launch", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600", description: "Create buzz and excitement for your new products and innovations." },
  { name: "Brand Activations", icon: Sparkles, slug: "brand-activations", image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=600", description: "Immersive brand experiences that connect with your audience." },
  { name: "Client Appreciation", icon: Heart, slug: "client-appreciation", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600", description: "Show gratitude to valued clients with thoughtful events." },
  { name: "Town Halls", icon: Building, slug: "town-halls", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600", description: "Engage your entire organization with impactful town hall meetings." },
  { name: "Immersive Experiences", icon: Palette, slug: "immersive-experiences", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600", description: "Transport attendees to extraordinary themed environments." },
  { name: "Wellness Events", icon: Leaf, slug: "wellness-events", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600", description: "Promote well-being through mindfulness and wellness activities." },
  { name: "Event Concept Development", icon: Lightbulb, slug: "event-concept", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", description: "Creative concept development and storytelling for unique events." },
  { name: "Stage & AV Production", icon: Monitor, slug: "stage-production", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600", description: "Professional stage design, lighting, and audiovisual production." },
  { name: "Custom Theme Creation", icon: Brush, slug: "custom-themes", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600", description: "Bespoke themes that bring your vision to life." },
  { name: "Emcee / Photo / Video", icon: Mic, slug: "emcee-services", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600", description: "Professional emcees, photographers, and videographers." },
];

// Split into 2 rows of 8 each
const row1 = allServices.slice(0, 8);
const row2 = allServices.slice(8, 16);

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<{ row: number; index: number } | null>(null);

  const renderServiceRow = (services: typeof allServices, rowIndex: number) => (
    <div className="flex gap-2 mb-4">
      {services.map((service, index) => {
        const isHovered = hoveredIndex?.row === rowIndex && hoveredIndex?.index === index;
        
        return (
          <motion.div
            key={service.slug}
            onMouseEnter={() => setHoveredIndex({ row: rowIndex, index })}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex-1 min-w-0 cursor-pointer group"
          >
            {/* Collapsed State */}
            <div 
              className={`relative h-64 rounded-xl overflow-hidden border border-primary/30 transition-all duration-300 ${isHovered ? 'border-primary/60' : ''}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/70 to-transparent" />
              
              {/* Gold edge gradient */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Collapsed content - vertical text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <service.icon className="w-5 h-5 text-primary mb-2" />
                <span 
                  className="text-primary-soft text-xs tracking-wider uppercase text-center font-display font-bold"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  {service.name}
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Expanded Content - Dropdown below */}
            <motion.div
              initial={false}
              animate={{
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-2">
                <div className="bg-card/90 border border-primary/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-display font-bold text-primary-soft">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 font-display">
                    {service.description}
                  </p>
                  
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-ember transition-colors font-display font-bold"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

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
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-display font-bold mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold mb-6">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-display">
            From intimate gatherings to grand celebrations, we craft extraordinary experiences that leave lasting impressions.
          </p>
        </motion.div>

        {/* Services Grid - 2 rows of 8 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {renderServiceRow(row1, 0)}
          {renderServiceRow(row2, 1)}
        </motion.div>
      </div>
    </section>
  );
};
