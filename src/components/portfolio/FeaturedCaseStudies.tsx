import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, MapPin, Calendar, X } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Tech Giant Annual Gala",
    category: "Dinner & Dance",
    teaser: "A spectacular evening celebrating 10 years of innovation",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    client: "Leading Tech MNC",
    pax: "500+",
    venue: "Marina Bay Sands Ballroom",
    challenges: "Create an immersive experience that reflects 10 years of company milestones while maintaining an elegant gala atmosphere.",
    solutions: "We designed a journey through time with decade-themed zones, holographic displays of key products, and a surprise drone light show finale.",
    outcome: "96% attendee satisfaction rate. Client renewed partnership for 3 more years.",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Fortune 500 Team Retreat",
    category: "Team Building",
    teaser: "Transforming a team of 200 into a unified force",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    client: "Global Financial Services",
    pax: "200",
    venue: "Sentosa Island Resort",
    challenges: "Bridge gaps between 5 regional offices with different work cultures and build lasting connections.",
    solutions: "Custom-designed Amazing Race with cultural elements, collaborative art installation, and strategic problem-solving challenges.",
    outcome: "Team collaboration scores increased by 40% in quarterly surveys.",
    images: [
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Luxury Brand Product Launch",
    category: "Product Launches",
    teaser: "Unveiling the future of luxury technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    client: "Premium Electronics Brand",
    pax: "150 VIP guests",
    venue: "National Gallery Singapore",
    challenges: "Create an exclusive, Instagram-worthy experience that positions the product as the pinnacle of luxury innovation.",
    solutions: "Transformed the venue into a futuristic gallery with interactive product stations, AR experiences, and celebrity performances.",
    outcome: "200+ social media posts with #LuxuryLaunch. 90% of attendees placed pre-orders.",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Healthcare Awards Night",
    category: "Awards Ceremonies",
    teaser: "Honoring healthcare heroes with a night of elegance",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
    client: "National Healthcare Group",
    pax: "800",
    venue: "Resorts World Sentosa",
    challenges: "Create a dignified yet celebratory atmosphere that honors the dedication of healthcare workers.",
    solutions: "Cinematic video tributes, live orchestra, personalized award moments, and a surprise celebrity appearance.",
    outcome: "Standing ovation moments. Highest attendance in event history.",
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    ],
  },
];

interface FeaturedCaseStudiesProps {
  filter: string | null;
}

export const FeaturedCaseStudies = ({ filter }: FeaturedCaseStudiesProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredStudies = filter
    ? caseStudies.filter((study) => study.category === filter)
    : caseStudies;

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background-deep">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold mb-4">
            Featured Case Studies
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        <div className="grid gap-6">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-card rounded-xl overflow-hidden border border-primary/10"
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                className="cursor-pointer group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-black rounded-full">
                      {study.category}
                    </span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-white/70">{study.teaser}</p>
                  </div>

                  {/* Expand indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6"
                    animate={{ rotate: expandedId === study.id ? 180 : 0 }}
                  >
                    <ChevronDown className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 bg-black/50">
                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-white/70">
                          <Users className="w-5 h-5 text-primary" />
                          <span>{study.pax} pax</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>{study.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>{study.client}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="text-primary font-semibold mb-2">The Challenge</h4>
                          <p className="text-white/70">{study.challenges}</p>
                        </div>
                        <div>
                          <h4 className="text-primary font-semibold mb-2">Our Solution</h4>
                          <p className="text-white/70">{study.solutions}</p>
                        </div>
                        <div>
                          <h4 className="text-primary font-semibold mb-2">The Outcome</h4>
                          <p className="text-white/70">{study.outcome}</p>
                        </div>
                      </div>

                      {/* Images */}
                      <div className="grid grid-cols-3 gap-4">
                        {study.images.map((img, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: imgIndex * 0.1 }}
                            className="aspect-video rounded-lg overflow-hidden"
                          >
                            <img
                              src={img}
                              alt={`${study.title} ${imgIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
