import { motion } from "framer-motion";
import { Search, Palette, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We listen to your vision, understand your goals, and uncover what makes your event unique.",
    details: [
      "Initial consultation to understand your objectives",
      "Audience analysis and attendee profiling",
      "Budget assessment and timeline planning",
      "Venue recommendations and site visits",
    ],
    example: "Example: For DBS, we conducted 3 discovery sessions with stakeholders to align on the retreat's leadership development goals.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our creative team crafts a bespoke concept that brings your vision to life with stunning detail.",
    details: [
      "Creative concept development and mood boards",
      "Theme creation and visual identity",
      "Activity programming and scheduling",
      "Vendor coordination and logistics planning",
    ],
    example: "Example: For Shopee's Awards Gala, we designed a custom 'Golden Era' theme with 3D stage visuals and trophy procession choreography.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600",
  },
  {
    icon: Play,
    title: "Execute",
    description: "We orchestrate every element with precision, ensuring a flawless and memorable experience.",
    details: [
      "Full event production and management",
      "On-site coordination with dedicated team",
      "Real-time problem solving and adaptability",
      "Quality control at every touchpoint",
    ],
    example: "Example: At NUH Family Fun Day, our 25-person crew managed 20+ booths and 3,000 participants seamlessly.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
  },
  {
    icon: Sparkles,
    title: "Celebrate",
    description: "Together, we create magic that transforms moments into masterpieces worth remembering.",
    details: [
      "Post-event debrief and success metrics",
      "Professional photography and videography delivery",
      "Feedback collection and analysis",
      "Future event recommendations",
    ],
    example: "Example: Our post-event surveys consistently show 95%+ satisfaction rates across all our corporate clients.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
  },
];

export const JourneySection = () => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="journey-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#journey-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-display font-bold mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-metallic-gold">
            The Journey
          </h2>
        </motion.div>

        {/* Zigzag Timeline with connecting line */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 hidden md:block" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-16 last:mb-0"
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-full bg-primary border-4 border-background-deep flex items-center justify-center shadow-gold"
                  >
                    <step.icon className="w-5 h-5 text-background-deep" />
                  </motion.div>
                </div>

                {/* Arrow to next step */}
                {!isLast && (
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center" style={{ top: 'calc(100% - 2rem)' }}>
                    <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-primary/20" />
                    <motion.span 
                      className="text-primary text-2xl"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </div>
                )}

                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-8 md:gap-16`}>
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                      {/* Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/30 to-transparent" />
                      
                      {/* Gold border */}
                      <div className="absolute inset-0 border border-primary/30 rounded-xl group-hover:border-primary/60 transition-colors duration-300" />
                      
                      {/* Top shine */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary text-background-deep font-display font-black text-xl flex items-center justify-center shadow-gold">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'} text-center flex flex-col justify-center`}>
                    {/* Mobile Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`md:hidden inline-flex w-14 h-14 rounded-full bg-primary/15 border border-primary/40 items-center justify-center mb-4 mx-auto`}
                    >
                      <step.icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-black text-metallic-gold mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-4 font-display">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <ul className={`space-y-2 mb-4 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className={`text-sm text-muted-foreground/80 font-display flex items-center gap-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Example */}
                    <p className="text-xs text-primary-soft/70 italic font-display mb-4">
                      {step.example}
                    </p>

                    {/* CTA for last step */}
                    {isLast && (
                      <div className={`mt-4 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <Button variant="gold-outline" className="font-display font-bold">
                          View Our Gallery →
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
