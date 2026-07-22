import { useRef, useState } from "react";
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
import teamSelfieA01 from "@/assets/team-selfies/set-a/team-selfie-01.webp";
import teamSelfieA02 from "@/assets/team-selfies/set-a/team-selfie-02.webp";
import teamSelfieA03 from "@/assets/team-selfies/set-a/team-selfie-03.webp";
import teamSelfieA04 from "@/assets/team-selfies/set-a/team-selfie-04.webp";
import teamSelfieA05 from "@/assets/team-selfies/set-a/team-selfie-05.webp";
import teamSelfieA06 from "@/assets/team-selfies/set-a/team-selfie-06.webp";
import teamSelfieA07 from "@/assets/team-selfies/set-a/team-selfie-07.webp";
import teamSelfieA08 from "@/assets/team-selfies/set-a/team-selfie-08.webp";
import teamSelfieA09 from "@/assets/team-selfies/set-a/team-selfie-09.webp";
import teamSelfieA10 from "@/assets/team-selfies/set-a/team-selfie-10.webp";
import teamSelfieB01 from "@/assets/team-selfies/set-b/set-b-01-venue-producer.jpg";
import teamSelfieB02 from "@/assets/team-selfies/set-b/set-b-02-outdoor-facilitator.jpg";
import teamSelfieB03 from "@/assets/team-selfies/set-b/set-b-03-programme-planner.jpg";
import teamSelfieB04 from "@/assets/team-selfies/set-b/set-b-04-operations-lead.jpg";
import teamSelfieB05 from "@/assets/team-selfies/set-b/set-b-05-event-coordinator.jpg";
import teamSelfieB06 from "@/assets/team-selfies/set-b/set-b-06-programme-facilitator.jpg";
import teamSelfieB07 from "@/assets/team-selfies/set-b/set-b-07-backstage-producer.jpg";
import teamSelfieB08 from "@/assets/team-selfies/set-b/set-b-08-senior-facilitator.jpg";
import teamSelfieB09 from "@/assets/team-selfies/set-b/set-b-09-registration-coordinator.jpg";
import teamSelfieB10 from "@/assets/team-selfies/set-b/set-b-10-outdoor-crew-lead.jpg";

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

interface TeamSelfie {
  id: string;
  src: string;
}

const teamSelfies: TeamSelfie[] = [
  { id: "team-selfie-a01", src: teamSelfieA01 },
  { id: "team-selfie-b05", src: teamSelfieB05 },
  { id: "team-selfie-a03", src: teamSelfieA03 },
  { id: "team-selfie-b06", src: teamSelfieB06 },
  { id: "team-selfie-a05", src: teamSelfieA05 },
  { id: "team-selfie-b01", src: teamSelfieB01 },
  { id: "team-selfie-a07", src: teamSelfieA07 },
  { id: "team-selfie-b02", src: teamSelfieB02 },
  { id: "team-selfie-a09", src: teamSelfieA09 },
  { id: "team-selfie-b03", src: teamSelfieB03 },
  { id: "team-selfie-a02", src: teamSelfieA02 },
  { id: "team-selfie-b08", src: teamSelfieB08 },
  { id: "team-selfie-a04", src: teamSelfieA04 },
  { id: "team-selfie-b09", src: teamSelfieB09 },
  { id: "team-selfie-a06", src: teamSelfieA06 },
  { id: "team-selfie-b10", src: teamSelfieB10 },
  { id: "team-selfie-a08", src: teamSelfieA08 },
  { id: "team-selfie-b04", src: teamSelfieB04 },
  { id: "team-selfie-a10", src: teamSelfieA10 },
  { id: "team-selfie-b07", src: teamSelfieB07 },
];

const teamSelfieRows = [
  teamSelfies.slice(0, 7),
  teamSelfies.slice(7, 14),
  teamSelfies.slice(14),
];

const TeamSelfieContent = ({ image }: { image: TeamSelfie }) => (
  <img
    src={image.src}
    alt=""
    loading="lazy"
    decoding="async"
    className="h-full w-full object-cover saturate-[0.92] contrast-[0.97]"
  />
);

export const OurTeam = () => {
  const reduceMotion = useReducedMotion();
  const [photoWallPaused, setPhotoWallPaused] = useState(false);
  const pointerInsideRef = useRef(false);
  const focusWithinRef = useRef(false);

  const syncPhotoWallState = () => {
    setPhotoWallPaused(pointerInsideRef.current || focusWithinRef.current);
  };

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
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Illustrative Crew Portraits</p>
              <p className="text-xs text-white/70">Planning &middot; producing &middot; facilitating</p>
            </div>

            {reduceMotion ? (
              <div aria-hidden="true" className="grid grid-cols-4 gap-2">
                {teamSelfies.map((image) => (
                  <div key={image.id} className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.06]">
                    <TeamSelfieContent image={image} />
                  </div>
                ))}
              </div>
            ) : (
              <div
                role="region"
                aria-label="Illustrative portraits representing event planners, producers and facilitators. Hover or focus to pause the moving portraits."
                tabIndex={0}
                className="relative space-y-3 overflow-hidden py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                style={{
                  WebkitMaskImage: "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
                  maskImage: "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
                }}
                onPointerEnter={(event) => {
                  if (event.pointerType === "touch") return;
                  pointerInsideRef.current = true;
                  syncPhotoWallState();
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === "touch") return;
                  pointerInsideRef.current = false;
                  syncPhotoWallState();
                }}
                onFocusCapture={() => {
                  focusWithinRef.current = true;
                  syncPhotoWallState();
                }}
                onBlurCapture={(event) => {
                  if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
                  focusWithinRef.current = false;
                  syncPhotoWallState();
                }}
              >
                {teamSelfieRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="overflow-hidden">
                    <div
                      className={`flex w-max ${rowIndex % 2 === 0 ? "event-photo-marquee-left" : "event-photo-marquee-right"}`}
                      style={{
                        animationDuration: `${36 + rowIndex * 6}s`,
                        animationPlayState: photoWallPaused ? "paused" : "running",
                      }}
                    >
                      {[0, 1].map((copyIndex) => (
                        <div key={copyIndex} className="flex shrink-0 gap-3 pr-3" aria-hidden="true">
                          {row.map((image) => (
                            <div
                              key={`${copyIndex}-${rowIndex}-${image.id}`}
                              className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.06] shadow-lg transition duration-500 hover:scale-[1.03] sm:h-32 sm:w-32 xl:h-36 xl:w-36"
                            >
                              <TeamSelfieContent image={image} />
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
