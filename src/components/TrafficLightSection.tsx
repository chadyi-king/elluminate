import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const planningInputs = [
  {
    icon: Users,
    title: "People",
    description: "Group size, team mix, accessibility needs and the energy level people will enjoy.",
  },
  {
    icon: Target,
    title: "Objective",
    description: "Whether the day is for bonding, morale, collaboration, onboarding or celebration.",
  },
  {
    icon: MapPin,
    title: "Venue",
    description: "Indoor or outdoor space, location, movement, setup and practical site limitations.",
  },
  {
    icon: CalendarDays,
    title: "Timing",
    description: "Your date, programme duration and how the activity needs to fit the rest of the event.",
  },
];

export const TrafficLightSection = () => {
  const { openContactModal } = useContactModal();

  return (
    <section className="overflow-hidden bg-primary py-20 text-white md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[420px] overflow-hidden rounded-lg"
          >
            <img
              src="/images/services/amazing-race/how-it-works.jpg"
              alt="An Elluminate facilitator guiding a company team-building activity"
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white">
              The format follows the brief. The team does not have to fit itself around a generic package.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">The Elluminate approach</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white md:text-5xl">
              We start with the brief, not the activity catalogue.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
              A long list of activities cannot tell you what will work for your group. These four details give us a practical starting point for the recommendation and quote.
            </p>

            <div className="mt-8 grid gap-x-7 gap-y-6 sm:grid-cols-2">
              {planningInputs.map(({ icon: Icon, title, description }) => (
                <div key={title} className="border-t border-white/25 pt-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-sky-200" aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
                </div>
              ))}
            </div>

            <Button
              size="xl"
              onClick={() => openContactModal()}
              className="mt-9 bg-white text-primary shadow-xl hover:bg-sky-50"
            >
              Plan My Event
              <ArrowRight aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
