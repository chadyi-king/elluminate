import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const showreelPoster = "/images/about/about-1.jpg";
const showreelFallback = "/images/services/amazing-race/gallery-5.jpg";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;

    videoRef.current.play().catch(() => setIsPlaying(false));
  }, [isPlaying]);

  return (
    <section className="relative isolate overflow-hidden bg-[#07151f] py-14 text-white sm:py-20">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#07151f_0%,#0a2132_55%,#07151f_100%)]" />
      <div className="absolute -left-32 top-8 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
      <div className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-sky-400/[0.15] blur-[120px]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mx-auto mb-9 max-w-3xl text-center"
        >
            <span className="mb-4 inline-flex rounded-full border border-white/[0.15] bg-white/[0.07] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-100">
            See Us in Action
          </span>
          <h2 className="font-display text-4xl font-black leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Watch Your <span className="text-[#2A8DFF]">Team</span> Come Alive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            See the nerves disappear, the volume rise and a room full of colleagues start playing like a team.
          </p>
        </motion.header>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/[0.15] bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,.32)]"
        >
          <div className="relative aspect-[4/3] bg-black sm:aspect-video">
            {!isPlaying ? (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0 block h-full w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                aria-label="Play the Elluminate event showreel"
              >
                <img
                  src={showreelPoster}
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
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.2)_45%,rgba(0,0,0,.78))]" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                      Real teams. Real moments. Full-volume energy.
                    </span>
                    <span className="mt-2 block max-w-xl font-display text-2xl font-black leading-tight text-white sm:text-4xl">
                      Press play and step into the experience.
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
    </section>
  );
};
