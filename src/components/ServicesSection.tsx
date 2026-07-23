import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Compass,
  Globe,
  Lightbulb,
  Map,
  Plane,
  Route,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceCardView } from "@/components/ExperienceCardView";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  trainingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

type DiscoveryFilter = "All" | "Outdoor" | "Indoor" | "Virtual" | "Retreat" | "Training";

const experienceWorlds = [
  {
    name: "Team Building",
    path: "/services/team-building",
    eyebrow: "Physical · Equipment · Virtual",
    description: "Races, mysteries, games and challenges built to get people moving, thinking and laughing together.",
    image: "/images/about/about-6.jpg",
    accent: "#2A8DFF",
    icon: Users,
    count: physicalTeamBuildingServices.length + equipmentActivityServices.length + virtualTeamBuildingServices.length,
    countLabel: "experiences",
  },
  {
    name: "Retreats",
    path: "/services/retreats",
    eyebrow: "Local · Overseas · Incentive",
    description: "A change of scene with the itinerary, shared moments and breathing room planned as one experience.",
    image: "/images/services/overseas-retreats/gallery-4.jpg",
    accent: "#FF8A3D",
    icon: Plane,
    count: retreatServices.length,
    countLabel: "retreat options",
  },
  {
    name: "Training",
    path: "/services/training",
    eyebrow: "Profiling · Workshops · Offsites",
    description: "Interactive workshops that turn ideas into conversations, practice and useful team takeaways.",
    image: "/images/services/workshops/gallery-4.jpg",
    accent: "#8B5CF6",
    icon: Brain,
    count: trainingServices.length,
    countLabel: "programmes",
  },
];

const featuredExperiences = [
  {
    card: {
      slug: "amazing-race",
      title: "THE AMAZING RACE",
      shortTitle: "Amazing Race",
      hook: "Follow the clues, conquer the checkpoints and race your crew to the final flag.",
      setting: "Outdoor",
      energy: "High energy",
      icon: Route,
      image: "/images/services/amazing-race/gallery-7.jpg",
      accent: "#FFC400",
      category: "Physical Team Building",
    },
    filters: ["All", "Outdoor"],
  },
  {
    card: {
      slug: "csi-bones",
      title: "CSI - BONES",
      shortTitle: "CSI-Bones",
      hook: "Read the evidence, challenge every theory and crack the case as one investigation team.",
      setting: "Indoor",
      energy: "Focused",
      icon: Search,
      image: "/images/services/csi-bones/hero.jpg",
      accent: "#26D07C",
      category: "Physical Team Building",
    },
    filters: ["All", "Indoor"],
  },
  {
    card: {
      slug: "cultural-race",
      title: "CULTURAL RACE",
      shortTitle: "Cultural Race",
      hook: "Turn Singapore's streets into a trail of local discoveries, clues and team missions.",
      setting: "Outdoor",
      energy: "Curious",
      icon: Map,
      image: "/images/services/cultural-race/gallery-1.jpg",
      accent: "#FF4F4F",
      category: "Physical Team Building",
    },
    filters: ["All", "Outdoor"],
  },
  {
    card: {
      slug: "amazing-race-virtual",
      title: "AMAZING RACE VIRTUAL",
      shortTitle: "Virtual Amazing Race",
      hook: "Send remote teams racing through live clues, challenges and destinations from one screen.",
      setting: "Virtual",
      energy: "High energy",
      icon: Globe,
      image: "/images/services/amazing-race-virtual/hero.jpg",
      accent: "#FFC400",
      category: "Virtual Team Building",
    },
    filters: ["All", "Virtual"],
  },
  {
    card: {
      slug: "overseas-retreats",
      title: "OVERSEAS RETREATS",
      shortTitle: "Overseas Retreats",
      hook: "Take the team somewhere new with travel, shared adventures and breathing room planned together.",
      setting: "Overseas",
      energy: "Shared adventure",
      icon: Plane,
      image: "/images/services/overseas-retreats/hero.jpg",
      accent: "#5AB7AE",
      category: "Retreats",
    },
    filters: ["All", "Retreat"],
  },
  {
    card: {
      slug: "workshops",
      title: "WORKSHOPS",
      shortTitle: "Workshops",
      hook: "Turn useful ideas into discussion, practice and takeaways the team can use immediately.",
      setting: "Indoor",
      energy: "Hands-on",
      icon: Lightbulb,
      image: "/images/services/workshops/hero.jpg",
      accent: "#EC4899",
      category: "Training",
    },
    filters: ["All", "Training", "Indoor"],
  },
];

const filters: DiscoveryFilter[] = ["All", "Outdoor", "Indoor", "Virtual", "Retreat", "Training"];

export const ServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-300/[0.15] blur-3xl" />

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
            Choose Your Starting Point
          </span>
          <h2 className="mb-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Choose Your World. <span className="text-primary">Find Your Experience.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Start with team building, retreats or training. Then explore by setting, format or the kind of energy you want.
          </p>
        </motion.header>

        <div className="grid gap-5 lg:grid-cols-3">
          {experienceWorlds.map((world, index) => {
            const Icon = world.icon;
            return (
              <motion.div
                key={world.name}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <Link
                  to={world.path}
                  className="group relative isolate flex min-h-[390px] overflow-hidden rounded-[2rem] bg-slate-900 p-7 text-white shadow-[0_22px_70px_rgba(20,40,80,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                >
                  <img
                    src={world.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/[0.68] to-slate-950/[0.15]" />
                  <div className="flex w-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-5">
                      <span className="rounded-full border border-white/25 bg-slate-950/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                        {world.eyebrow}
                      </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.15] backdrop-blur-md">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <div>
                      <div className="mb-4 flex items-end gap-2">
                        <span className="font-display text-5xl font-black leading-none">{world.count}</span>
                      <span className="pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.65]">{world.countLabel}</span>
                      </div>
                      <h3 className="mb-3 font-display text-3xl font-black">{world.name}</h3>
                      <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/80">{world.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold">
                        Explore {world.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const PopularExperiencesSection = () => {
  const [activeFilter, setActiveFilter] = useState<DiscoveryFilter>("All");
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const visibleExperiences = useMemo(
    () => featuredExperiences.filter((experience) => experience.filters.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section id="popular-experiences" className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-primary">Popular Starting Points</span>
            <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl">Which setting or format fits?</h2>
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
                      : "border border-border bg-white text-foreground/70 hover:border-primary/[0.35] hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleExperiences.map((experience) => (
            <motion.div
              layout
              key={experience.card.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              className="h-full"
            >
              <ExperienceCardView card={experience.card} variant="featured" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-foreground px-6 py-8 text-white shadow-2xl sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="mb-6 flex max-w-2xl items-start gap-4 lg:mb-0">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary sm:flex">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Not sure what to call it?
              </span>
              <h3 className="mb-2 font-display text-2xl font-black sm:text-3xl">Tell us who&rsquo;s coming, where, and what the day should achieve.</h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                We&rsquo;ll narrow the options around your group size, venue, timing and the way you want the team to feel.
              </p>
            </div>
          </div>
          <Button
            variant="hero"
            size="lg"
            onClick={() => openContactModal({ additionalDetails: "I would like help choosing the right experience for my group." })}
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
