import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const showreelPoster = "/images/services/amazing-race/gallery-1.jpg";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    videoRef.current?.play().catch(() => {
      setIsPlaying(false);
    });
  }, [isPlaying]);

  return (
    <section className="bg-secondary/25 py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">See the work</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-foreground md:text-5xl">
              Real teams. Real venues. Real event energy.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              The best way to understand an Elluminate experience is to see people inside it. This showreel brings together moments from activities and company events delivered by the team.
            </p>
            <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
              Event footage includes work delivered under Team Elevate and Elluminate by EXSTATIC PTE LTD.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative aspect-video overflow-hidden rounded-lg bg-slate-950 shadow-2xl"
          >
            {isPlaying ? (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={showreelPoster}
              >
                <source src="/videos/elluminate-showreel.mp4" type="video/mp4" />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-inset"
                aria-label="Play the Elluminate event showreel"
              >
                <img
                  src={showreelPoster}
                  alt="Preview of the Elluminate event showreel"
                  className="h-full w-full object-cover"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 bg-slate-950/45 transition-colors group-hover:bg-slate-950/35" />
                <span className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-xl transition-transform group-hover:scale-105 md:h-20 md:w-20">
                    <Play className="ml-1 h-7 w-7 fill-current md:h-8 md:w-8" aria-hidden="true" />
                  </span>
                  <span className="mt-4 font-display text-base font-bold md:text-lg">Watch the showreel</span>
                </span>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
