import { motion } from "framer-motion";
import { Quote, MapPin, Users, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Tech Company Amazing Race",
    location: "Marina Bay, Singapore",
    participants: "150",
    keyElements: ["Amazing Race", "Team Challenges", "City Exploration"],
    highlights: [
      "Custom Amazing Race across iconic Singapore landmarks",
      "15 different challenge stations with themed puzzles",
      "Live leaderboard and real-time team tracking",
      "Post-event team celebration with prizes",
    ],
    quote: "Elluminate created an unforgettable experience that had our entire team talking for weeks. The Amazing Race format was perfect for building connections across departments.",
    industry: "Technology",
    year: "2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    accentColor: "#FFC400",
  },
  {
    id: 2,
    title: "Financial Services Team Day",
    location: "Sentosa Island",
    participants: "300",
    keyElements: ["CSI Investigation", "Team Strategy", "Problem Solving"],
    highlights: [
      "Immersive CSI mystery solving experience",
      "Cross-functional team collaboration challenges",
      "Leadership development activities",
      "Beach activities and team bonding",
    ],
    quote: "The level of creativity and attention to detail was impressive. Our teams were fully engaged from start to finish. A truly world-class team building experience.",
    industry: "Banking & Finance",
    year: "2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    accentColor: "#26D07C",
  },
  {
    id: 3,
    title: "Healthcare Wellness Retreat",
    location: "Bintan, Indonesia",
    participants: "200",
    keyElements: ["Wellness Activities", "Mindfulness", "Team Bonding"],
    highlights: [
      "3-day wellness-focused retreat program",
      "Yoga and meditation sessions",
      "Adventure activities and beach games",
      "Evening team dinners and celebrations",
    ],
    quote: "Elluminate understood exactly what our healthcare workers needed – a rejuvenating experience that brought our teams closer together while promoting wellbeing.",
    industry: "Healthcare",
    year: "2023",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    accentColor: "#62E2C4",
  },
  {
    id: 4,
    title: "Startup Culture Race",
    location: "Chinatown & Little India",
    participants: "80",
    keyElements: ["Cultural Race", "Heritage Exploration", "Team Discovery"],
    highlights: [
      "Cultural immersion through heritage districts",
      "Local food tasting challenges",
      "Interactive cultural activities",
      "Team bonding through shared experiences",
    ],
    quote: "The Cultural Race was a brilliant way to help our international team connect with Singapore's rich heritage while building stronger bonds with each other.",
    industry: "Technology Startup",
    year: "2023",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
    accentColor: "#FF4F4F",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-primary/5 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/30 rounded-full blur-3xl" />

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
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from Singapore's leading organizations. See how we illuminate teams.
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
              <div className="relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Accent bar */}
                <div 
                  className="h-1 w-full"
                  style={{ backgroundColor: study.accentColor }}
                />
                
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="text-xs font-display font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${study.accentColor}20`, color: study.accentColor }}
                    >
                      {study.industry}
                    </span>
                    <span className="text-muted-foreground text-xs font-display">{study.year}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                    {study.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground font-display">
                      <MapPin className="w-4 h-4 text-primary" />
                      {study.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-display">
                      <Users className="w-4 h-4 text-primary" />
                      {study.participants} participants
                    </div>
                  </div>

                  {/* Key Elements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.keyElements.map((element) => (
                      <span
                        key={element}
                        className="px-3 py-1 text-xs bg-secondary border border-border rounded-full text-foreground font-display font-medium"
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
                  <div className="relative mt-auto pt-4 border-t border-border">
                    <Quote className="w-6 h-6 text-primary/30 mb-2" />
                    <p className="text-muted-foreground text-sm italic leading-relaxed font-display">
                      "{study.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
