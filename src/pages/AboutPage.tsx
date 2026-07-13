import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { OurTeam } from "@/components/OurTeam";
import { SEO } from "@/components/SEO";
import { OrganizationSchema } from "@/components/StructuredData";
import { useContactModal } from "@/contexts/ContactModalContext";

const planningPrinciples = [
  {
    icon: Users,
    title: "Start with the people",
    description:
      "We look at who is attending, how the group works together, and the level of energy that will suit them.",
  },
  {
    icon: Target,
    title: "Plan for the objective",
    description:
      "Bonding, collaboration, onboarding, morale, celebration, and learning call for different programme choices.",
  },
  {
    icon: MapPin,
    title: "Make the venue work",
    description:
      "Indoor, outdoor, office, hotel, and offsite settings each shape the activity flow and operational plan.",
  },
  {
    icon: CalendarDays,
    title: "Build around the timing",
    description:
      "The date, duration, programme schedule, and travel time are considered before the experience is confirmed.",
  },
];

const serviceLanes = [
  {
    title: "Team building",
    description: "Physical, indoor, outdoor, and virtual formats planned around your group and event goal.",
    href: "/services/team-building",
    image: "/images/services/amazing-race/gallery-5.jpg",
    alt: "Participants taking part in an outdoor team-building activity",
  },
  {
    title: "Company retreats",
    description: "Local and overseas offsites shaped around itinerary, logistics, connection, and downtime.",
    href: "/services/overseas-retreats",
    image: "/images/services/overseas-retreats/gallery-2.jpg",
    alt: "Company group during an overseas retreat experience",
  },
  {
    title: "Training and workshops",
    description: "Interactive sessions for teams that need practical discussion, reflection, and shared learning.",
    href: "/services/workshops",
    image: "/images/services/workshops/gallery-3.jpg",
    alt: "Participants engaged in a facilitated company workshop",
  },
];

const sharedHistory = [
  { value: "1,000+", label: "events delivered" },
  { value: "100,000+", label: "participants engaged" },
  { value: "8+", label: "years of operating history" },
  { value: "4.8", label: "from 776+ Team Elevate Google reviews" },
];

const AboutPage = () => {
  const { openContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Elluminate | Team Building & Company Experiences"
        description="Meet Elluminate, the EXSTATIC PTE LTD team planning team building, retreats and company experiences around your people, objective, venue and timing."
        keywords="about Elluminate, Singapore team building company, corporate retreats Singapore, company experiences Singapore"
        canonical="https://elluminate.sg/about"
      />
      <OrganizationSchema />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <main>
        <section className="relative isolate flex min-h-[76vh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
          <img
            src="/images/about/about-1.jpg"
            alt="Elluminate participants celebrating during a company experience"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/78 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20" />

          <div className="container relative z-10 mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-3xl"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">About Elluminate</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Company experiences planned around the people in the room.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                Elluminate plans team building, retreats, training, and company experiences around your people,
                objective, venue, and timing, so the programme fits the event instead of the other way around.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openContactModal()}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-blue transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Plan an Experience
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <Link
                  to="/portfolio"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/45 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  See Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-sky-100 bg-white py-10" aria-labelledby="history-heading">
          <div className="container mx-auto px-6">
            <h2 id="history-heading" className="sr-only">
              Shared operating history
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {sharedHistory.map((item) => (
                <div key={item.label} className="border-l-2 border-primary pl-4">
                  <p className="text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-sky-100 pt-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">One operating team, with a clear history.</p>
              <p className="mt-2 max-w-5xl">
                Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. Selected experience, reviews, and event
                history shown on this website were delivered under Team Elevate. The figures above reflect the
                cumulative Team Elevate and Elluminate operating history presented by EXSTATIC PTE LTD; Google review
                figures remain attributed to Team Elevate.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-sky-50/70 to-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our planning approach</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
                Choose the experience after understanding the event.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                A long activity list does not tell you what will work for your group. We start with the event brief,
                then shape the activity direction, flow, facilitation, and logistics around it.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-px overflow-hidden rounded-lg border border-sky-100 bg-sky-100 md:grid-cols-2 lg:grid-cols-4">
              {planningPrinciples.map((principle) => (
                <article key={principle.title} className="bg-white p-7">
                  <principle.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Real event work</p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">Built to be experienced, not just presented.</h2>
                <p className="mt-5 leading-relaxed text-slate-300">
                  From the first briefing to the final activity, the work happens in the details: a clear run of show,
                  suitable group formats, prepared facilitators, and practical coordination with the venue and client
                  team.
                </p>
                <Link
                  to="/portfolio"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Explore event moments
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/about/about-2.jpg"
                  className="aspect-video w-full object-cover"
                  aria-label="Elluminate company experiences showreel"
                >
                  <source src="/videos/elluminate-showreel.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we plan</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
                Different formats, one practical starting point.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Tell us who is attending and what the event needs to achieve. We will help you identify the right lane
                before you spend time comparing individual formats.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {serviceLanes.map((lane) => (
                <article key={lane.title} className="group overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={lane.image}
                      alt={lane.alt}
                      width="800"
                      height="500"
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{lane.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lane.description}</p>
                    <Link
                      to={lane.href}
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Explore {lane.title.toLowerCase()}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-sky-50/60 py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { src: "/images/about/about-3.jpg", alt: "Company event participants during a facilitated programme" },
                { src: "/images/services/amazing-race/gallery-5.jpg", alt: "Teams taking part in an outdoor race format" },
                { src: "/images/services/local-retreats/gallery-3.jpg", alt: "Group moment during a local retreat" },
                { src: "/images/services/overseas-retreats/cta.jpg", alt: "Participants together during an overseas retreat" },
              ].map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-lg bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="640"
                    height="760"
                    loading="lazy"
                    className="aspect-[4/5] h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <OurTeam />

        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/about/about-4.jpg" alt="" className="h-full w-full object-cover" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 bg-primary/90" />
          <div className="container relative z-10 mx-auto px-6 text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
              Tell us what your company experience needs to do.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Share your pax, timing, venue preference, and objective. We will help you shape a suitable activity,
              retreat, or workshop direction.
            </p>
            <button
              type="button"
              onClick={() => openContactModal()}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Plan an Experience
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
