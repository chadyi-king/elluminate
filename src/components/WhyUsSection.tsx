import { motion } from "framer-motion";
import { Lightbulb, Heart, Clock, Star, Infinity, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Creative",
    description: "Cinematic, memorable concepts that captivate audiences and create lasting impressions.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
  },
  {
    icon: Heart,
    title: "Authentic",
    description: "Genuine experiences that truly reflect your brand values and company culture.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
  },
  {
    icon: Clock,
    title: "Lasting",
    description: "Events that create memories people talk about for years to come.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
  },
  {
    icon: Star,
    title: "Exceptional",
    description: "Flawless execution with meticulous attention to every single detail.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400",
  },
  {
    icon: Infinity,
    title: "Boundless",
    description: "Whatever you can dream of, we bring to life. No limits to creativity.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400",
  },
  {
    icon: Sparkles,
    title: "Eccentric",
    description: "Uniqueness and creative energy that sets your event apart from the rest.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(43, 20%, 8%) 0%, hsl(43, 28%, 14%) 50%, hsl(43, 18%, 6%) 100%)' }}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold mb-4 uppercase tracking-wide">
            WHY TEAM ELEVATE
          </h2>
          <p className="text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
            Our commitment to delivering extraordinary experiences that exceed expectations.
          </p>
        </motion.div>

        {/* Pillars - 6 columns on desktop */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting line - behind cards */}
          <div className="absolute top-40 left-0 right-0 hidden lg:block -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 relative z-10">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Pillar card */}
                <div className="relative bg-card border border-border-gold/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 group-hover:shadow-gold-soft h-full">
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pillar.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/30" />
                  </div>
                  
                  <div className="p-4 text-center">
                    {/* Top glow line on hover */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-gold transition-all duration-300"
                    >
                      <pillar.icon className="w-5 h-5 text-primary group-hover:text-primary-ember transition-colors" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-base font-display font-black text-primary-soft mb-2 group-hover:text-metallic-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Connector dot for desktop */}
                <div className="hidden lg:block absolute top-[10.5rem] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-gold z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};