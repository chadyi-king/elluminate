import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronDown } from "lucide-react";

const miniCaseStudies = [
  {
    id: 1,
    title: "Bank Annual D&D",
    category: "Dinner & Dance",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80",
    pax: "600 pax",
    highlight: "Full AV Setup",
    description: "A glamorous evening celebrating the bank's achievements with live entertainment and themed décor.",
    keyMoments: ["Grand entrance with LED tunnel", "Live band performance", "Awards presentation"],
    extraImages: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    ],
  },
  {
    id: 2,
    title: "Tech Company Retreat",
    category: "Overseas Retreats",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    pax: "150 pax",
    highlight: "3-Day Program",
    description: "An immersive retreat in Bali combining team building, wellness, and strategic planning sessions.",
    keyMoments: ["Beach Olympics", "Sunset networking dinner", "Cultural workshop"],
    extraImages: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    ],
  },
  {
    id: 3,
    title: "Pharma Product Launch",
    category: "Product Launches",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    pax: "200 pax",
    highlight: "Hybrid Event",
    description: "A sophisticated product launch with live streaming to global offices and interactive demonstrations.",
    keyMoments: ["Holographic product reveal", "Expert panel discussion", "Networking reception"],
    extraImages: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
    ],
  },
  {
    id: 4,
    title: "Insurance Awards Night",
    category: "Awards Ceremonies",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80",
    pax: "400 pax",
    highlight: "Red Carpet Theme",
    description: "An elegant awards ceremony honoring top performers with Hollywood-inspired glamour.",
    keyMoments: ["Red carpet arrivals", "Cinematic award videos", "Closing dance party"],
    extraImages: [
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    ],
  },
  {
    id: 5,
    title: "Retail Brand Activation",
    category: "Brand Activations",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    pax: "1000+ visitors",
    highlight: "Interactive Experience",
    description: "A pop-up brand experience that drove engagement and generated thousands of social media impressions.",
    keyMoments: ["AR photo booths", "Product sampling zones", "Influencer meet & greet"],
    extraImages: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    ],
  },
  {
    id: 6,
    title: "Wellness Corporate Day",
    category: "Wellness Events",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    pax: "250 pax",
    highlight: "Full Day Program",
    description: "A comprehensive wellness day featuring yoga, mindfulness workshops, and healthy nutrition sessions.",
    keyMoments: ["Morning meditation", "Team fitness challenge", "Healthy cooking demo"],
    extraImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    ],
  },
  {
    id: 7,
    title: "Fintech Conference",
    category: "Team Building",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    pax: "500 pax",
    highlight: "Multi-Stage Setup",
    description: "A large-scale conference with multiple breakout sessions, exhibition booths, and keynote presentations.",
    keyMoments: ["CEO keynote", "Innovation showcase", "Networking lunch"],
    extraImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
    ],
  },
  {
    id: 8,
    title: "Theme Party Night",
    category: "Custom Themed Events",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
    pax: "300 pax",
    highlight: "Full Venue Transformation",
    description: "A complete venue transformation into a tropical paradise for an unforgettable themed celebration.",
    keyMoments: ["Themed entry experience", "Live entertainment", "Themed photo zones"],
    extraImages: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80",
    ],
  },
  {
    id: 9,
    title: "Stage Production Showcase",
    category: "AV, Stage & Production",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    pax: "800 pax",
    highlight: "Concert-Level Setup",
    description: "A spectacular production with state-of-the-art lighting, sound, and LED wall installations.",
    keyMoments: ["LED wall mapping", "Pyrotechnics finale", "360° audio experience"],
    extraImages: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80",
    ],
  },
];

interface MiniCaseStudiesProps {
  filter: string | null;
}

export const MiniCaseStudies = ({ filter }: MiniCaseStudiesProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredStudies = filter
    ? miniCaseStudies.filter((study) => study.category === filter)
    : miniCaseStudies;

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            More Success Stories
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-background-card rounded-xl overflow-hidden border border-primary/10"
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                className="cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Stats overlay */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 text-xs bg-black/60 text-white rounded flex items-center gap-1">
                      <Users className="w-3 h-3" /> {study.pax}
                    </span>
                    <span className="px-2 py-1 text-xs bg-primary/90 text-black rounded font-medium">
                      {study.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-display font-bold text-white">{study.title}</h3>
                    <span className="text-primary/80 text-sm">{study.category}</span>
                  </div>

                  {/* Expand indicator */}
                  <motion.div
                    className="absolute bottom-3 right-3"
                    animate={{ rotate: expandedId === study.id ? 180 : 0 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-black/30">
                      <p className="text-white/70 text-sm mb-4">{study.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-primary text-sm font-semibold mb-2">Key Moments</h4>
                        <ul className="space-y-1">
                          {study.keyMoments.map((moment, i) => (
                            <li key={i} className="text-white/60 text-xs flex items-center gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full" />
                              {moment}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {study.extraImages.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${study.title} ${i + 1}`}
                            className="w-full aspect-video object-cover rounded-md"
                          />
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
