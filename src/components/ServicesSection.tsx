import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceLanes = [
  {
    title: "Team Building",
    description:
      "Physical, indoor, outdoor and virtual formats planned around your group, venue and reason for bringing people together.",
    image: "/images/services/amazing-race/gallery-5.jpg",
    alt: "Participants collaborating during an Elluminate team-building event",
    href: "/services/team-building",
    linkLabel: "Explore team building",
    layout: "lg:col-span-7",
  },
  {
    title: "Retreats & Offsites",
    description:
      "Local and overseas programmes that connect the itinerary, team moments and event logistics into one coherent experience.",
    image: "/images/services/overseas-retreats/gallery-1.jpg",
    alt: "Company group on an overseas retreat",
    href: "/services/overseas-retreats",
    linkLabel: "Explore retreats",
    layout: "lg:col-span-5",
  },
  {
    title: "Training & Workshops",
    description:
      "Facilitated sessions for communication, collaboration, leadership and practical team development.",
    image: "/images/services/workshops/hero.jpg",
    alt: "Participants taking part in a facilitated company workshop",
    href: "/services/workshops",
    linkLabel: "Explore training",
    layout: "lg:col-span-5",
  },
  {
    title: "Company Experiences",
    description:
      "Large-group moments, celebrations and event concepts shaped around the programme, audience and setting.",
    image: "/images/services/corporate-days/hero.jpg",
    alt: "A company experience delivered for a large group",
    href: "/portfolio",
    linkLabel: "See our event work",
    layout: "lg:col-span-7",
  },
];

export const ServicesSection = () => (
  <section id="services" className="bg-white py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">What we plan</p>
        <h2 className="mt-4 font-display text-3xl font-black text-foreground md:text-5xl">
          Start with the kind of experience you need.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          You do not need to arrive with an activity name. Start with your team and event goal, then we will help shape the right direction.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-12">
        {serviceLanes.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`group relative min-h-[340px] overflow-hidden rounded-lg bg-slate-950 ${service.layout}`}
          >
            <img
              src={service.image}
              alt={service.alt}
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <h3 className="font-display text-2xl font-black text-white md:text-3xl">{service.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">{service.description}</p>
              <Link
                to={service.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-sky-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {service.linkLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
