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

const eventPhotos = [
  "/images/about/about-4.jpg",
  "/images/about/about-5.jpg",
  "/images/about/about-6.jpg",
  "/images/services/amazing-race/gallery-2.jpg",
  "/images/services/amazing-race/gallery-3.jpg",
  "/images/services/amazing-race/gallery-5.jpg",
  "/images/services/amazing-race/gallery-6.jpg",
  "/images/services/csi-bones/gallery-1.jpg",
  "/images/services/csi-bones/gallery-2.jpg",
  "/images/services/csi-bones/gallery-3.jpg",
  "/images/services/csi-bones/gallery-5.jpg",
  "/images/services/csi-bones/gallery-6.jpg",
  "/images/services/workshops/gallery-1.jpg",
  "/images/services/workshops/gallery-4.jpg",
  "/images/services/workshops/gallery-5.jpg",
  "/images/services/workshops/gallery-6.jpg",
  "/images/services/local-retreats/gallery-3.jpg",
  "/images/services/local-retreats/gallery-4.jpg",
  "/images/services/local-retreats/gallery-6.jpg",
  "/images/services/overseas-retreats/gallery-6.jpg",
];

const eventPhotoRows = [eventPhotos.slice(0, 7), eventPhotos.slice(7, 14), eventPhotos.slice(14)];

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
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">Behind the scenes</p>
              <p className="text-xs text-white/40">Real moments from event days</p>
            </div>

            {reduceMotion ? (
              <div role="img" aria-label="Behind-the-scenes moments from Elluminate events" className="grid grid-cols-4 gap-2">
                {eventPhotos.map((photo) => (
                  <div key={photo} className="aspect-square overflow-hidden rounded-xl border border-white/10">
                    <img src={photo} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <div
                role="img"
                aria-label="Moving wall of behind-the-scenes moments from Elluminate events"
                className="relative space-y-3 overflow-hidden py-1"
                style={{
                  WebkitMaskImage: "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
                  maskImage: "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {eventPhotoRows.map((row, rowIndex) => (
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
                          {row.map((photo, photoIndex) => (
                            <div
                              key={`${copyIndex}-${photo}`}
                              className="h-28 w-28 shrink-0 overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.06] shadow-lg sm:h-32 sm:w-32 xl:h-36 xl:w-36"
                            >
                              <img
                                src={photo}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                style={{ objectPosition: photoIndex % 3 === 0 ? "center" : photoIndex % 3 === 1 ? "45% center" : "55% center" }}
                              />
                            </div>
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
