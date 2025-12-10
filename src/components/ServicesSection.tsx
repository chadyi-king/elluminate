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
  Flag,
  Crown,
  Briefcase,
  Lock,
  GraduationCap,
  Globe,
  Star,
  Gift,
} from "lucide-react";

const allServices = [
  // Row 1
  { name: "Corporate Team Building", icon: Users, slug: "team-building", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", description: "Build stronger teams through engaging activities and collaborative experiences." },
  { name: "Overseas Retreats", icon: Plane, slug: "overseas-retreats", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600", description: "Transform your team with memorable retreat experiences in stunning destinations." },
  { name: "Dinner & Dance", icon: Music, slug: "dinner-and-dance", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600", description: "Spectacular evening celebrations with stunning themes and entertainment." },
  { name: "Awards Ceremonies", icon: Trophy, slug: "awards-ceremonies", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600", description: "Celebrate achievements with elegance and unforgettable presentations." },
  { name: "Corporate Anniversaries", icon: PartyPopper, slug: "corporate-anniversaries", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600", description: "Mark milestones with celebrations that honor your company's journey." },
  { name: "Leadership Offsites", icon: Compass, slug: "leadership-offsites", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", description: "Strategic retreats for leadership alignment and team growth." },
  // Row 2
  { name: "Product Launch Events", icon: Rocket, slug: "product-launch", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600", description: "Create buzz and excitement for your new products and innovations." },
  { name: "Brand Activations", icon: Sparkles, slug: "brand-activations", image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=600", description: "Immersive brand experiences that connect with your target audience." },
  { name: "Client Appreciation", icon: Heart, slug: "client-appreciation", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600", description: "Show gratitude to valued clients with thoughtful events." },
  { name: "Town Halls", icon: Building, slug: "town-halls", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600", description: "Engage your organization with impactful meetings and announcements." },
  { name: "Immersive Experiences", icon: Palette, slug: "immersive-experiences", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600", description: "Transport attendees to extraordinary themed environments." },
  { name: "Wellness Events", icon: Leaf, slug: "wellness-events", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600", description: "Promote well-being through mindfulness and wellness activities." },
  // Row 3
  { name: "Event Concept Development", icon: Lightbulb, slug: "event-concept", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", description: "Creative concept development for unique, memorable events." },
  { name: "Stage & AV Production", icon: Monitor, slug: "stage-production", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600", description: "Professional stage design, lighting, and audiovisual production." },
  { name: "Custom Theme Creation", icon: Brush, slug: "custom-themes", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600", description: "Bespoke themes that bring your creative vision to life." },
  { name: "Emcee / Photo / Video", icon: Mic, slug: "emcee-media", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600", description: "Professional emcees, photographers, and videographers." },
  { name: "Family Fun Days", icon: Gift, slug: "family-fun-days", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600", description: "Engaging family-friendly events for all ages to enjoy together." },
  { name: "Corporate Carnivals", icon: Star, slug: "corporate-carnivals", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600", description: "Fun-filled carnival experiences for your corporate celebrations." },
  // Row 4
  { name: "VIP Gala Experiences", icon: Crown, slug: "vip-gala", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", description: "Exclusive luxury gala events for distinguished occasions." },
  { name: "Grand Openings", icon: Flag, slug: "grand-opening", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600", description: "Make a grand statement with spectacular opening ceremonies." },
  { name: "Summits", icon: Globe, slug: "summits", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600", description: "High-level summits and conferences for industry leaders." },
  { name: "Government Events", icon: GraduationCap, slug: "government-events", image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600", description: "Professional events for government and statutory boards." },
  { name: "Private Events", icon: Lock, slug: "private-events", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600", description: "Exclusive private gatherings tailored to your needs." },
  { name: "Corporate Conferences", icon: Briefcase, slug: "corporate-conferences", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600", description: "Professional conferences that inspire and inform." },
];

// Split into 4 rows of 6 each
const rows = [
  allServices.slice(0, 6),
  allServices.slice(6, 12),
  allServices.slice(12, 18),
  allServices.slice(18, 24),
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<{ row: number; index: number } | null>(null);

  const renderServiceRow = (services: typeof allServices, rowIndex: number) => (
    <div className="flex gap-2 mb-3 min-h-[240px]">
      {services.map((service, index) => {
        const isHovered = hoveredIndex?.row === rowIndex && hoveredIndex?.index === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex.row === rowIndex && hoveredIndex.index !== index;
        
        // Split name into lines
        const nameParts = service.name.split(" ");
        const midPoint = Math.ceil(nameParts.length / 2);
        const line1 = nameParts.slice(0, midPoint).join(" ");
        const line2 = nameParts.slice(midPoint).join(" ");
        
        return (
          <motion.div
            key={service.slug}
            onMouseEnter={() => setHoveredIndex({ row: rowIndex, index })}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flex: isHovered ? 3 : isOtherHovered ? 0.6 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative cursor-pointer group min-w-0"
          >
            {/* Card Container */}
            <div 
              className={`relative h-56 rounded-xl overflow-hidden border transition-all duration-300 ${isHovered ? 'border-primary/60' : 'border-primary/30'}`}
            >
              {/* Background Image with darker overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Darker gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
              
              {/* Gold edge gradient */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                {/* Collapsed: Horizontal text stacked */}
                <div 
                  className={`flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                >
                  <span className="text-primary-soft text-[10px] tracking-wider uppercase font-display font-bold leading-tight">
                    {line1}
                  </span>
                  {line2 && (
                    <span className="text-primary-soft text-[10px] tracking-wider uppercase font-display font-bold leading-tight">
                      {line2}
                    </span>
                  )}
                </div>

                {/* Expanded: Full content */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-3 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-2">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-display font-bold text-primary-soft mb-1 text-center uppercase leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 text-center font-sans leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-ember transition-colors font-display font-bold"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </motion.div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(43, 25%, 10%) 0%, hsl(43, 20%, 6%) 40%, hsl(43, 30%, 12%) 100%)' }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-3xl" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold mb-6 uppercase tracking-wide">
            WHAT WE DO
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-sans">
            From intimate gatherings to grand celebrations, we craft extraordinary experiences that leave lasting impressions.
          </p>
        </motion.div>

        {/* Services Grid - 4 rows of 6 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {renderServiceRow(row, rowIndex)}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};