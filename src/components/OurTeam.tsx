import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  ClipboardCheck,
  Headphones,
  Lightbulb,
  MapPin,
  Mic,
  Sparkles,
  Truck,
  Users,
  Workflow,
} from "lucide-react";

const teamRoles = [
  { label: "Creative planning", icon: Lightbulb },
  { label: "Experience design", icon: Sparkles },
  { label: "Programme flow", icon: Workflow },
  { label: "Event production", icon: CalendarCheck },
  { label: "Facilitation", icon: Users },
  { label: "Venue coordination", icon: MapPin },
  { label: "Logistics planning", icon: Truck },
  { label: "Emcees & talent", icon: Mic },
  { label: "On-the-day support", icon: Headphones },
  { label: "Post-event wrap", icon: ClipboardCheck },
];

interface TeamPortrait {
  sheet: string;
  column: 0 | 1 | 2;
  row: 0 | 1;
}

const teamPortraits: TeamPortrait[] = [
  { sheet: "/images/our_team/team-candid-sheet-a.webp", column: 0, row: 0 },
  { sheet: "/images/our_team/team-candid-sheet-a.webp", column: 1, row: 0 },
  { sheet: "/images/our_team/team-candid-sheet-a.webp", column: 2, row: 0 },
  { sheet: "/images/our_team/team-candid-sheet-a.webp", column: 0, row: 1 },
  { sheet: "/images/our_team/team-candid-sheet-a.webp", column: 1, row: 1 },
  { sheet: "/images/our_team/team-candid-sheet-b.webp", column: 0, row: 0 },
  { sheet: "/images/our_team/team-candid-sheet-b.webp", column: 1, row: 0 },
  { sheet: "/images/our_team/team-candid-sheet-b.webp", column: 2, row: 0 },
  { sheet: "/images/our_team/team-candid-sheet-b.webp", column: 0, row: 1 },
  { sheet: "/images/our_team/team-candid-sheet-b.webp", column: 1, row: 1 },
];

const portraitRows = [
  [teamPortraits[0], teamPortraits[6], teamPortraits[2], teamPortraits[8], teamPortraits[4], teamPortraits[7], teamPortraits[1]],
  [teamPortraits[9], teamPortraits[3], teamPortraits[5], teamPortraits[1], teamPortraits[7], teamPortraits[0], teamPortraits[6]],
  [teamPortraits[2], teamPortraits[8], teamPortraits[4], teamPortraits[5], teamPortraits[9], teamPortraits[3]],
];

const portraitStyle = (portrait: TeamPortrait) => ({
  backgroundImage: `url(${portrait.sheet})`,
  backgroundPosition: `${portrait.column * 50}% ${portrait.row * 100}%`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "300% 200%",
});

export const OurTeam = () => {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="our-team" className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-400/[0.15] blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.26em] text-sky-200">The People Behind the Day</span>
            <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">Our Team</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              From the first sketch to the final cheer, our planners, producers and facilitators keep every moving part connected so your people can simply show up and enjoy the moment.
            </p>

            <div className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {teamRoles.map((role) => (
                <div key={role.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-3.5 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-sky-200">
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
            className="min-w-0"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">Meet the crew</p>
              <p className="text-xs text-white/40">Planners &middot; producers &middot; facilitators</p>
            </div>

            {reduceMotion ? (
              <div role="img" aria-label="Candid portraits of the Elluminate event crew" className="grid grid-cols-4 gap-2">
                {teamPortraits.map((portrait, portraitIndex) => (
                  <div
                    key={`${portrait.sheet}-${portrait.column}-${portrait.row}-${portraitIndex}`}
                    className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.06]"
                    style={portraitStyle(portrait)}
                  />
                ))}
              </div>
            ) : (
              <div
                role="img"
                aria-label="Moving wall of candid Elluminate crew portraits"
                className="relative space-y-3 overflow-hidden py-1"
                style={{
                  WebkitMaskImage: "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
                  maskImage: "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {portraitRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="overflow-hidden">
                    <div
                      className={`flex w-max ${rowIndex % 2 === 0 ? "event-photo-marquee-left" : "event-photo-marquee-right"}`}
                      style={{
                        animationDuration: `${36 + rowIndex * 6}s`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                    >
                      {[0, 1].map((copyIndex) => (
                        <div key={copyIndex} className="flex shrink-0 gap-3 pr-3" aria-hidden={copyIndex === 1 ? "true" : undefined}>
                          {row.map((portrait, portraitIndex) => (
                            <div
                              key={`${copyIndex}-${rowIndex}-${portraitIndex}-${portrait.sheet}-${portrait.column}-${portrait.row}`}
                              className="h-28 w-28 shrink-0 overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.06] shadow-lg transition duration-500 hover:scale-[1.03] sm:h-32 sm:w-32 xl:h-36 xl:w-36"
                              style={portraitStyle(portrait)}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
