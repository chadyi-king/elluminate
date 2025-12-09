import { motion } from "framer-motion";
import { Quote, MapPin, Users, Calendar } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "DBS Corporate Retreat 2024",
    location: "Bintan, Indonesia",
    participants: "220",
    keyElements: ["Amazing Race", "Leadership Sessions", "Beachfront D&D"],
    quote: "Team Elevate transformed our annual retreat into an unforgettable experience. The team building activities were perfectly aligned with our leadership development goals.",
    image: "/placeholder.svg",
    gradient: "from-primary/30 via-transparent to-transparent",
  },
  {
    id: 2,
    title: "Shopee Awards Gala 2023",
    location: "Resorts World Ballroom",
    participants: "500",
    keyElements: ["Trophy Procession", "Stage Lighting", "Gold Theme"],
    quote: "The level of detail and creativity exceeded our expectations. Our employees still talk about the magical atmosphere created that night.",
    image: "/placeholder.svg",
    gradient: "from-transparent via-primary/30 to-transparent",
  },
  {
    id: 3,
    title: "NUH Family Fun Day 2023",
    location: "West Coast Park",
    participants: "3,000",
    keyElements: ["Carnival Booths", "Live Performances", "Photo Ops"],
    quote: "Managing 3,000 participants seamlessly while ensuring everyone had an amazing time - that's the Team Elevate difference.",
    image: "/placeholder.svg",
    gradient: "from-transparent via-transparent to-primary/30",
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
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold mb-6">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from Singapore's leading organizations. See how we elevate corporate events.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card/50 border border-border-gold/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 group-hover:shadow-gold-soft h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
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
                  <h3 className="text-xl md:text-2xl font-serif text-primary-soft mb-4 group-hover:text-metallic-gold transition-colors">
                    {study.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary/60" />
                      {study.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary/60" />
                      {study.participants} participants
                    </div>
                  </div>

                  {/* Key Elements */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.keyElements.map((element) => (
                      <span
                        key={element}
                        className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary-soft"
                      >
                        {element}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mt-auto pt-4 border-t border-border-gold/10">
                    <Quote className="w-6 h-6 text-primary/30 mb-2" />
                    <p className="text-muted-foreground text-sm italic leading-relaxed">
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
