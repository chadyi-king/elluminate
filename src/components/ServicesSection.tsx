import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Building2,
  Compass,
  Flag,
  Globe2,
  Monitor,
  Plane,
  Search,
  Skull,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  trainingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

type DiscoveryFilter = "All" | "Outdoor" | "Indoor" | "Virtual" | "Retreat" | "Training";

const familyCards = [
  {
    name: "Team Building",
    path: "/services/team-building",
    eyebrow: "Physical · Equipment · Virtual",
    description: "Explore facilitated challenges, races, mysteries, game formats, and virtual experiences.",
    image: "/images/services/amazing-race/gallery-1.jpg",
    accent: "#2A8DFF",
    icon: Users,
    count:
      physicalTeamBuildingServices.length + equipmentActivityServices.length + virtualTeamBuildingServices.length,
    countLabel: "experiences",
  },
  {
    name: "Retreats",
    path: "/services/retreats",
    eyebrow: "Local · Overseas · Incentive",
    description: "Shape the destination, programme, group rhythm, and shared moments as one coherent offsite.",
    image: "/images/services/overseas-retreats/hero.jpg",
    accent: "#FF8A3D",
    icon: Plane,
    count: retreatServices.length,
    countLabel: "current directions",
  },
  {
    name: "Training",
    path: "/services/training",
    eyebrow: "Profiling · Workshops · Offsites",
    description: "Plan facilitated sessions around the audience, objective, time available, and working context.",
    image: "/images/services/workshops/hero.jpg",
    accent: "#8B5CF6",
    icon: Brain,
    count: trainingServices.length,
    countLabel: "current programmes",
  },
];

const featuredExperiences = [
  {
    name: "Amazing Race",
    slug: "amazing-race",
    category: "Outdoor expedition",
    description: "Checkpoints, clues, team missions, and a shared finish line.",
    fit: "Movement and exploration",
    image: "/images/services/amazing-race/gallery-1.jpg",
    accent: "#F6B800",
    icon: Flag,
    filters: ["All", "Outdoor"],
  },
  {
    name: "CSI-Bones",
    slug: "csi-bones",
    category: "Indoor investigation",
    description: "Evidence, theories, and facilitated deduction in a controlled venue.",
    fit: "Observation and collaboration",
    image: "/images/services/csi-bones/gallery-1.jpg",
    accent: "#1C9B77",
    icon: Skull,
    filters: ["All", "Indoor"],
  },
  {
    name: "Cultural Race",
    slug: "cultural-race",
    category: "Singapore discovery",
    description: "Local districts become the map for team clues and missions.",
    fit: "Visitors and local teams",
    image: "/images/services/cultural-race/gallery-5.jpg",
    accent: "#ED4E52",
    icon: Globe2,
    filters: ["All", "Outdoor"],
  },
  {
    name: "Virtual Amazing Race",
    slug: "amazing-race-virtual",
    category: "Hosted online race",
    description: "A shared challenge for remote and multi-office teams.",
    fit: "Distributed groups",
    image: "/images/services/amazing-race-virtual/gallery-1.jpg",
    accent: "#7656D8",
    icon: Monitor,
    filters: ["All", "Virtual"],
  },
  {
    name: "Overseas Retreats",
    slug: "overseas-retreats",
    category: "Destination programme",
    description: "Travel, accommodation, activities, and itinerary shaped together.",
    fit: "Multi-day company offsites",
    image: "/images/services/overseas-retreats/hero.jpg",
    accent: "#F1783C",
    icon: Plane,
    filters: ["All", "Retreat"],
  },
  {
    name: "Workshops",
    slug: "workshops",
    category: "Facilitated training",
    description: "Interactive sessions built around the audience and intended discussion.",
    fit: "Teams that need guided learning",
    image: "/images/services/workshops/hero.jpg",
    accent: "#7356D8",
    icon: Building2,
    filters: ["All", "Training", "Indoor"],
  },
];

const filters: DiscoveryFilter[] = ["All", "Outdoor", "Indoor", "Virtual", "Retreat", "Training"];

export const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState<DiscoveryFilter>("All");
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();

  const visibleExperiences = useMemo(
    () => featuredExperiences.filter((experience) => experience.filters.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section id="services" className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Find your way in
          </span>
          <h2 className="mb-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Start with a family. <span className="text-primary">Then find your experience.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose the area you are already planning, or use the fit filters below when you know the setting or format
            you want but not the activity name.
          </p>
        </motion.header>

        <div className="mb-20 grid gap-5 lg:grid-cols-3">
          {familyCards.map((family, index) => {
            const Icon = family.icon;
            return (
              <motion.div
                key={family.name}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <Link
                  to={family.path}
                  className="group relative isolate flex min-h-[360px] overflow-hidden rounded-[2rem] bg-slate-900 p-7 text-white shadow-[0_22px_70px_rgba(20,40,80,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                >
                  <img
                    src={family.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/72 to-slate-950/15" />
                  <div
                    className="absolute inset-x-0 bottom-0 -z-10 h-2/3 opacity-70 blur-2xl"
                    style={{ background: `radial-gradient(circle at 50% 100%, ${family.accent}, transparent 66%)` }}
                  />

                  <div className="flex w-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-5">
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                        {family.eyebrow}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>

                    <div>
                      <div className="mb-4 flex items-end gap-2">
                        <span className="font-display text-5xl font-black leading-none">{family.count}</span>
                        <span className="pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                          {family.countLabel}
                        </span>
                      </div>
                      <h3 className="mb-3 font-display text-3xl font-black">{family.name}</h3>
                      <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/78">{family.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold">
                        Explore {family.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-primary">Popular starting points</span>
            <h3 className="font-display text-3xl font-black text-foreground sm:text-4xl">Which setting or format fits?</h3>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter experiences">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 ${
                  activeFilter === filter
                    ? "bg-foreground text-white shadow-lg"
                    : "border border-border bg-white text-foreground/70 hover:border-primary/35 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleExperiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <motion.article
                layout
                key={experience.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
                className="group overflow-hidden rounded-[1.6rem] border border-white bg-white shadow-[0_14px_45px_rgba(20,40,80,0.08)]"
              >
                <Link to={`/services/${experience.slug}`} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary/25">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={experience.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div
                      className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{ backgroundColor: experience.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-slate-950/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      {experience.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h4 className="font-display text-2xl font-black text-foreground">{experience.name}</h4>
                      <ArrowRight className="mt-1 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-foreground/65">
                      Best fit: {experience.fit}
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-foreground px-6 py-8 text-white shadow-2xl sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="mb-6 flex max-w-2xl items-start gap-4 lg:mb-0">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary sm:flex">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                You do not need the activity name
              </span>
              <h3 className="mb-2 font-display text-2xl font-black sm:text-3xl">Tell us the people, place, and purpose.</h3>
              <p className="text-sm leading-relaxed text-white/68 sm:text-base">
                We can narrow the sensible formats around your group size, venue, timing, and the way you want the team to feel.
              </p>
            </div>
          </div>
          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              openContactModal({ additionalDetails: "I would like help choosing the right experience for my group." })
            }
            className="w-full shrink-0 sm:w-auto"
          >
            Help Me Choose
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};
