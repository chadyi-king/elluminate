import { motion } from "framer-motion";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Golden Gala Night",
    client: "Luxury Corp",
    year: "2024",
    category: "VIP Gala",
  },
  {
    id: 2,
    title: "Summit Conference",
    client: "Tech Giants Inc",
    year: "2024",
    category: "Town Hall",
  },
  {
    id: 3,
    title: "Annual Awards Ceremony",
    client: "Finance Leaders",
    year: "2024",
    category: "Awards",
  },
  {
    id: 4,
    title: "Team Unity Retreat",
    client: "StartUp Hub",
    year: "2023",
    category: "Team Building",
  },
  {
    id: 5,
    title: "Product Launch Spectacular",
    client: "Innovation Labs",
    year: "2024",
    category: "Launch Event",
  },
  {
    id: 6,
    title: "Family Carnival Day",
    client: "Community Trust",
    year: "2023",
    category: "Family Day",
  },
];

export const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background-deep relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

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
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold mb-6">
            Signature Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A gallery of extraordinary moments we've crafted for our distinguished clients.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Dark placeholder with pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card-foreground/5">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${item.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${item.id})`} />
                  </svg>
                </div>
              </div>

              {/* Gold edge gradient */}
              <div className="absolute inset-0 border border-primary/20 rounded-lg group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
              </div>

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: hoveredId === item.id ? 0 : 20, opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-center"
                >
                  <span className="text-primary text-xs tracking-widest uppercase">{item.category}</span>
                  <h3 className="text-xl md:text-2xl font-serif text-primary-soft mt-2 mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.client} • {item.year}</p>
                </motion.div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
