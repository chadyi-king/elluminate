import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";

const eventStories = [
  {
    id: 1,
    title: "Outdoor Team Challenge",
    setting: "Singapore outdoor venue",
    format: "Active team building",
    highlights: [
      "Teams working through a shared physical challenge",
      "Facilitated participation and visible group momentum",
      "A format that can sit inside a wider company day",
    ],
    note: "Useful evidence for planners considering an active outdoor direction and mixed-team participation.",
    image: "/images/services/amazing-race/gallery-1.jpg",
    accentColor: "#FFC400",
  },
  {
    id: 2,
    title: "CSI-Bones Investigation",
    setting: "Indoor function space",
    format: "Mystery and problem solving",
    highlights: [
      "Teams examining physical clues and case materials",
      "A lower-movement format built around discussion",
      "Indoor setup suited to a controlled event space",
    ],
    note: "Useful evidence for teams that prefer observation, reasoning, and collaboration over high physical intensity.",
    image: "/images/services/csi-bones/gallery-1.jpg",
    accentColor: "#26D07C",
  },
  {
    id: 3,
    title: "Indoor Station Challenge",
    setting: "Office or function room",
    format: "Short rotating activities",
    highlights: [
      "Compact challenges that are easy to explain",
      "Multiple participation styles across the group",
      "Visible scoring, cheering, and quick transitions",
    ],
    note: "Useful evidence when the brief calls for energy without moving the group across an outdoor route.",
    image: "/images/services/minute-to-win-it/gallery-3.jpg",
    accentColor: "#A768FF",
  },
  {
    id: 4,
    title: "Facilitated Beach Activity",
    setting: "Retreat or offsite venue",
    format: "Team activity within an itinerary",
    highlights: [
      "A team challenge integrated into an offsite setting",
      "Group movement and coordination in an open space",
      "An activity direction that can complement meals and downtime",
    ],
    note: "Useful evidence for planners deciding how team building can fit into a retreat or longer company programme.",
    image: "/images/services/monopoly-dash/gallery-2.jpg",
    accentColor: "#2A8DFF",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-primary/5 to-blue-50">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            Event Evidence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Formats in Action
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Real event photographs from the shared Team Elevate and Elluminate operating history, mapped to the
            practical planning questions each format helps answer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventStories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group relative"
            >
              <div className="relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="h-1 w-full" style={{ backgroundColor: story.accentColor }} />
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    width={960}
                    height={540}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <span className="mb-3 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                    {story.format}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">{story.title}</h3>
                  <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> {story.setting}
                  </div>

                  <div className="mb-5 space-y-2">
                    {story.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-auto border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                    {story.note}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-5 text-muted-foreground">
          Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. Event history shown may have been delivered
          under Team Elevate.
        </p>
      </div>
    </section>
  );
};
