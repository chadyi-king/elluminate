import { ArrowUpRight, Compass, Puzzle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const eventFormats = [
  {
    title: "Amazing Race",
    category: "Outdoor team challenge",
    description: "Teams move through checkpoints, solve clues and complete collaborative tasks across the route.",
    image: "/images/services/amazing-race/gallery-3.jpg",
    alt: "Participants working through an Amazing Race team challenge",
    href: "/services/amazing-race",
    featured: true,
  },
  {
    title: "CSI-Bones",
    category: "Indoor mystery format",
    description: "A shared investigation that brings observation, discussion and problem-solving into the room.",
    image: "/images/services/csi-bones/gallery-1.jpg",
    alt: "A team examining clues during a CSI-Bones activity",
    href: "/services/csi-bones",
  },
  {
    title: "Builder Cross",
    category: "Hands-on collaboration",
    description: "Teams plan, build and adapt together as their structure takes shape.",
    image: "/images/services/builder-cross/gallery-1.jpg",
    alt: "Participants building a colourful structure together",
    href: "/services/builder-cross",
  },
  {
    title: "Monopoly Dash",
    category: "Outdoor strategy format",
    description: "A fast-moving challenge built around decisions, routes and shared team strategy.",
    image: "/images/services/monopoly-dash/gallery-1.jpg",
    alt: "A team reviewing their Monopoly Dash materials outdoors",
    href: "/services/monopoly-dash",
  },
  {
    title: "Running Man",
    category: "Active station challenge",
    description: "Multiple teams rotate through facilitated challenges with a lively, competitive pace.",
    image: "/images/services/running-man/gallery-1.jpg",
    alt: "Groups preparing for a facilitated Running Man challenge",
    href: "/services/running-man",
  },
  {
    title: "Sotong Game",
    category: "Multi-stage team format",
    description: "A sequence of simple-to-understand challenges that keeps the whole group involved.",
    image: "/images/services/sotong-game/gallery-1.jpg",
    alt: "Participants moving through a colourful Sotong Game challenge",
    href: "/services/sotong-game",
  },
  {
    title: "Minute To Win It",
    category: "Short competitive stations",
    description: "Quick rounds create easy entry points for teams with mixed confidence and energy levels.",
    image: "/images/services/minute-to-win-it/gallery-1.jpg",
    alt: "Teams taking part in outdoor Minute To Win It stations",
    href: "/services/minute-to-win-it",
  },
  {
    title: "Overseas Retreats",
    category: "Multi-day company experience",
    description: "Shared travel, team activities and time together beyond the usual workplace setting.",
    image: "/images/services/overseas-retreats/gallery-1.jpg",
    alt: "A company group gathered during an overseas retreat",
    href: "/services/overseas-retreats",
    featured: true,
  },
];

const portfolioSignals = [
  {
    icon: Compass,
    title: "Different settings",
    copy: "From indoor rooms and sheltered spaces to parks, city routes and retreat destinations.",
  },
  {
    icon: Puzzle,
    title: "Different ways to participate",
    copy: "Physical challenges, problem-solving, strategy and shorter station-based formats.",
  },
  {
    icon: Sparkles,
    title: "One planning conversation",
    copy: "Share the group, venue, timing and goal so the format can be shaped around the event.",
  },
];

export const EventShowcase = () => {
  return (
    <section id="event-work" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">The work, up close</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-black leading-tight text-foreground sm:text-5xl">
              See the formats in the hands of real teams.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              These are not moodboards or stock scenes. They are moments from activities and retreats delivered by the team behind Elluminate and Team Elevate.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
              Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. Selected work shown here was delivered under the Team Elevate brand.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eventFormats.map((event, index) => (
            <article
              key={event.title}
              className={`group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-blue ${
                event.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${event.featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={event.image}
                  alt={event.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  width={1200}
                  height={900}
                  loading={index > 1 ? "lazy" : "eager"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/72 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-background/92 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
                  {event.category}
                </p>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-black text-foreground">{event.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{event.description}</p>
                <Link
                  to={event.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-deep focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
                >
                  Explore this format
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-y border-border py-10 md:grid-cols-3">
          {portfolioSignals.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-black text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
