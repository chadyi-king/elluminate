import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Play, Star, UsersRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import showreelThumbnail from "@/assets/elluminate-showreel-thumbnail.png.asset.json";
import showreelFallback from "@/assets/events/team-building-outdoor-1.jpg";

const reviewSourceUrl = "https://www.google.com/search?q=Team+Elevate+Singapore+reviews";

const selectedOrganisations = [
  { name: "DBS", logo: "/images/client-logos/dbs_bank_logo_p1zixs.png" },
  { name: "Singtel", logo: "/images/client-logos/singtel_logo_nmsek6.svg" },
  { name: "GovTech", logo: "/images/client-logos/govtech_logo_lctwtl.png" },
  {
    name: "Singapore Airlines",
    logo: "/images/client-logos/singapore-airlines-logo_jzs3bh_mngdzj.png",
  },
  { name: "Google", logo: "/images/client-logos/google-logo_zypuwu_iwiqig.webp" },
  { name: "Deloitte", logo: "/images/client-logos/deloitte-logo_d9hhkg_lbc5wh.png" },
];

const sharedHistoryMetrics = [
  {
    value: "1,000+",
    label: "events delivered",
    Icon: CalendarDays,
  },
  {
    value: "100,000+",
    label: "participants",
    Icon: UsersRound,
  },
  {
    value: "8+",
    label: "years of history",
    Icon: Star,
  },
];

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;

    videoRef.current.play().catch((error) => {
      console.error("Video play failed:", error);
      setIsPlaying(false);
    });
  }, [isPlaying]);

  return (
    <section
      aria-labelledby="immediate-trust-heading"
      className="relative isolate overflow-hidden bg-[#07151f] py-12 text-white sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#07151f_0%,#0a1d2c_55%,#07151f_100%)]" />
      <div className="absolute -left-32 top-8 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
      <div className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-sky-400/15 blur-[120px]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-8 max-w-4xl text-left sm:mb-10 sm:text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-100">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            Proof before the pitch
          </div>
          <h2
            id="immediate-trust-heading"
            className="font-display text-3xl font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
          >
            See the energy. Check the track record.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mx-auto sm:text-base">
            Watch the team at work, then review the published rating and shared operating history behind Elluminate.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.78fr_1.42fr] lg:gap-6">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="flex flex-col rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-5 shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur-xl sm:p-6 lg:min-h-full"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">Google rating</p>
              <a
                href={reviewSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Original source
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-5 flex items-end gap-3 sm:block">
              <p className="font-display text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl">
                4.8<span className="ml-1 text-2xl text-slate-400">/5</span>
              </p>
              <div className="mb-1 flex gap-0.5 sm:mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5" aria-hidden="true" />
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold leading-5 text-white sm:text-base">
              From 800+ Google reviews published for Team Elevate.
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Team Elevate and Elluminate are both operated by EXSTATIC PTE LTD. The rating remains attributed to its
              original Team Elevate listing.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 lg:mt-auto lg:pt-6">
              {sharedHistoryMetrics.map(({ value, label, Icon }) => (
                <div key={label} className="rounded-2xl bg-black/20 px-2.5 py-3 sm:px-3">
                  <Icon className="mb-2 h-4 w-4 text-sky-300" aria-hidden="true" />
                  <p className="font-display text-xl font-black leading-none text-white sm:text-2xl">{value}</p>
                  <p className="mt-1.5 text-[0.62rem] font-semibold leading-3 text-slate-400 sm:text-[0.7rem]">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-300">
              Cumulative Team Elevate and Elluminate history under EXSTATIC PTE LTD, as at July 2026.
            </p>
          </motion.aside>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,.32)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sky-200">The showreel</p>
                <p className="mt-0.5 text-xs text-slate-400">Real event footage from the shared operating history</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.62rem] font-semibold text-slate-300">
                Tap to play
              </span>
            </div>

            <div className="relative aspect-[4/3] bg-black sm:aspect-video">
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group absolute inset-0 block h-full w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  aria-label="Play the Elluminate event showreel"
                >
                  <img
                    src={showreelThumbnail.url}
                    alt="Elluminate event showreel cover"
                    width={1600}
                    height={900}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = showreelFallback;
                    }}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.18)_45%,rgba(0,0,0,.72))]" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                        See us in action
                      </span>
                      <span className="mt-2 block max-w-md font-display text-2xl font-black leading-tight text-white sm:text-3xl">
                        The people, pacing and production behind the experience.
                      </span>
                    </span>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_32px_hsl(var(--primary)/.35)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              ) : (
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="none"
                  poster={showreelFallback}
                  aria-label="Elluminate event showreel"
                >
                  <source src="/videos/elluminate-showreel.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto mt-5 max-w-7xl rounded-[1.5rem] border border-white/10 bg-white/[0.055] px-4 py-4 sm:px-6"
        >
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-300 sm:text-left">
            Selected organisations from the owner-confirmed shared event history
          </p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
            {selectedOrganisations.map((organisation) => (
              <div
                key={organisation.name}
                className="flex h-12 items-center justify-center rounded-xl bg-white px-2.5 sm:h-14 sm:px-3"
              >
                <img
                  src={organisation.logo}
                  alt={`${organisation.name} logo`}
                  width={150}
                  height={60}
                  loading="lazy"
                  decoding="async"
                  className="max-h-7 max-w-full object-contain sm:max-h-8"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs leading-5 text-slate-400 sm:text-left">
            Shared Team Elevate and Elluminate event history under EXSTATIC PTE LTD. Logos shown are limited to the
            owner-confirmed homepage display set.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
