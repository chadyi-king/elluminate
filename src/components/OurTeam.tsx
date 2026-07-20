import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Headphones, Lightbulb, Users } from "lucide-react";

const teamRoles = [
  { label: "Creative planning", icon: Lightbulb },
  { label: "Event production", icon: CalendarCheck },
  { label: "Facilitation", icon: Users },
  { label: "On-the-day support", icon: Headphones },
];

export const OurTeam = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-400/[0.15] blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.26em] text-sky-200">The People Behind the Day</span>
            <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">Our Team</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Meet the planners, producers and facilitators who turn a brief into a room full of energy.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {teamRoles.map((role) => (
                <div key={role.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-sky-200">
                    <role.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white/80">{role.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08 }}
            className="grid grid-cols-[1.25fr_0.75fr] gap-3 sm:gap-4"
          >
            <div className="row-span-2 min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 sm:min-h-[540px]">
              <img src="/images/about/about-6.jpg" alt="Facilitator supporting a team during an outdoor activity" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="min-h-[188px] overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[262px]">
              <img src="/images/about/about-4.jpg" alt="Facilitator briefing participants" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="min-h-[188px] overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[262px]">
              <img src="/images/services/workshops/gallery-4.jpg" alt="Facilitator and participants celebrating a completed team project" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
