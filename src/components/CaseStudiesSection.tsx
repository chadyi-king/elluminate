import { motion } from "framer-motion";
import { Quote, MapPin, Users, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "DBS Corporate Retreat 2024",
    location: "Bintan, Indonesia",
    participants: "220",
    keyElements: ["Amazing Race", "Leadership Sessions", "Beachfront D&D"],
    highlights: [
      "3-day immersive leadership development program",
      "Custom Amazing Race across Bintan landmarks",
      "Gala dinner with live entertainment",
      "Team bonding activities and water sports",
    ],
    quote: "Team Elevate transformed our annual retreat into an unforgettable experience. The team building activities were perfectly aligned with our leadership development goals. Our people are still talking about it months later.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    gradient: "from-primary/30 via-transparent to-transparent",
  },
  {
    id: 2,
    title: "Shopee Awards Gala 2023",
    location: "Resorts World Ballroom",
    participants: "500",
    keyElements: ["Trophy Procession", "Stage Lighting", "Gold Theme"],
    highlights: [
      "Full ballroom transformation with gold theme",
      "Custom trophy design and procession",
      "Celebrity entertainment and live band",
      "Red carpet experience with photo ops",
    ],
    quote: "The level of detail and creativity exceeded our expectations. Our employees still talk about the magical atmosphere created that night. Truly a world-class production.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    gradient: "from-transparent via-primary/30 to-transparent",
  },
  {
    id: 3,
    title: "NUH Family Fun Day 2023",
    location: "West Coast Park",
    participants: "3,000",
    keyElements: ["Carnival Booths", "Live Performances", "Photo Ops"],
    highlights: [
      "20+ interactive carnival game booths",
      "Live stage performances throughout the day",
      "Themed photo opportunities for families",
      "Food villages with diverse options",
    ],
    quote: "Managing 3,000 participants seamlessly while ensuring everyone had an amazing time - that's the Team Elevate difference. A truly family-friendly event that exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
    gradient: "from-transparent via-transparent to-primary/30",
  },
  {
    id: 4,
    title: "Google Singapore Town Hall 2023",
    location: "Google APAC HQ",
    participants: "800",
    keyElements: ["Hybrid Format", "Interactive Q&A", "Tech Integration"],
    highlights: [
      "Seamless hybrid event with global streaming",
      "Interactive polling and Q&A technology",
      "Custom stage design matching brand guidelines",
      "Multi-camera professional production",
    ],
    quote: "The hybrid format was executed flawlessly. Our teams across APAC felt connected and engaged. The technical execution was on par with our global standards.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    gradient: "from-primary/20 via-transparent to-primary/20",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

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
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold mb-6">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-sans">
            Real results from Singapore's leading organizations. See how we elevate corporate events.
          </p>
        </motion.div>

        {/* Case Study Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card/50 border border-border-gold/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 group-hover:shadow-gold-soft h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Gold edge gradient */}
                  <div className="absolute inset-0 border border-primary/20 rounded-t-2xl" />
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-display font-black text-primary-soft mb-4 group-hover:text-metallic-gold transition-colors">
                    {study.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground font-display">
                      <MapPin className="w-4 h-4 text-primary/60" />
                      {study.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-display">
                      <Users className="w-4 h-4 text-primary/60" />
                      {study.participants} participants
                    </div>
                  </div>

                  {/* Key Elements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.keyElements.map((element) => (
                      <span
                        key={element}
                        className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary-soft font-display font-bold"
                      >
                        {element}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 space-y-2">
                    {study.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm font-display">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mt-auto pt-4 border-t border-border-gold/10">
                    <Quote className="w-6 h-6 text-primary/30 mb-2" />
                    <p className="text-muted-foreground text-sm italic leading-relaxed font-display">
                      "{study.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
