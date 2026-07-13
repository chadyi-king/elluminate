import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const eventDirections = [
  {
    title: "Outdoor team energy",
    format: "Amazing Race",
    description:
      "A mobile challenge format for teams that want movement, shared problem-solving and a strong sense of progress through the day.",
    planningFocus: "Route, weather, mobility, team balance and programme timing",
    image: "/images/services/amazing-race/gallery-2.jpg",
    alt: "A team completing an Amazing Race challenge",
    href: "/services/amazing-race",
  },
  {
    title: "Indoor collaboration",
    format: "CSI-Bones",
    description:
      "A facilitated mystery format for groups that want discussion, observation and problem-solving without relying on physical intensity.",
    planningFocus: "Room layout, group size, briefing flow and challenge difficulty",
    image: "/images/services/csi-bones/gallery-1.jpg",
    alt: "A company team working through a CSI-Bones investigation",
    href: "/services/csi-bones",
  },
  {
    title: "Time away together",
    format: "Company Retreat",
    description:
      "A broader offsite programme for teams that need space for connection, celebration, alignment or a change of pace.",
    planningFocus: "Destination, itinerary, accommodation, transport and team moments",
    image: "/images/services/overseas-retreats/gallery-1.jpg",
    alt: "A company group together during an overseas retreat",
    href: "/services/overseas-retreats",
  },
];

export const CaseStudiesSection = () => (
  <section className="bg-secondary/25 py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Event directions</p>
        <h2 className="mt-4 font-display text-3xl font-black text-foreground md:text-5xl">
          Different briefs need different answers.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          These are real formats in the Elluminate event library. The right one depends on what your team and event need, not which card happens to look most exciting.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {eventDirections.map((event, index) => (
          <motion.article
            key={event.format}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="overflow-hidden rounded-lg border border-border bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={event.image}
                alt={event.alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={675}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{event.title}</p>
              <h3 className="mt-2 font-display text-2xl font-black text-foreground">{event.format}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground">Planning focus</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.planningFocus}</p>
              </div>
              <Link
                to={event.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore {event.format}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
