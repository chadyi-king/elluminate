import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import { clientTestimonials } from "@/data/clientTestimonials";

interface ClientTestimonialsCarouselProps {
  theme?: "light" | "dark";
  eyebrow?: string;
  heading?: string;
  description?: string;
}

export const ClientTestimonialsCarousel = ({
  theme = "light",
  eyebrow = "In their words",
  heading = "What Clients Love About Us",
  description = "Honest words from people who joined the experience. No polished scripts, just what stayed with them.",
}: ClientTestimonialsCarouselProps) => {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isDark = theme === "dark";

  const updateControls = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    setCanScrollBack(rail.scrollLeft > 4);
    setCanScrollForward(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    updateControls();
    rail.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      rail.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  const move = useCallback(
    (direction: -1 | 1) => {
      const rail = railRef.current;
      const firstCard = rail?.querySelector<HTMLElement>("[data-testimonial-card]");
      if (!rail || !firstCard) return;

      const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 20;
      rail.scrollBy({
        left: direction * (firstCard.getBoundingClientRect().width + gap),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion],
  );

  useEffect(() => {
    if (reduceMotion || isPaused) return;

    const interval = window.setInterval(() => {
      const rail = railRef.current;
      if (!rail) return;

      if (rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8) {
        rail.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        rail.scrollBy({ left: rail.clientWidth * 0.92, behavior: "smooth" });
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, reduceMotion]);

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 ${isDark ? "bg-[#071a2a] text-white" : "bg-[#f4f7ff] text-[#0b1424]"}`}
      aria-labelledby="client-testimonials-heading"
    >
      <div
        className={`pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full blur-[120px] ${
          isDark ? "bg-sky-500/20" : "bg-sky-300/25"
        }`}
      />
      <div
        className={`pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[130px] ${
          isDark ? "bg-violet-500/20" : "bg-violet-300/25"
        }`}
      />
      {isDark && (
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:54px_54px]" />
      )}

      <div className="container relative z-10 mx-auto px-5 sm:px-10 lg:px-14">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="mx-auto mb-10 max-w-5xl text-center"
        >
          <span className={`mb-4 block text-xs font-bold uppercase tracking-[0.28em] ${isDark ? "text-sky-200" : "text-primary"}`}>
            {eyebrow}
          </span>
          <h2 id="client-testimonials-heading" className="font-display text-4xl font-black leading-none sm:text-5xl">
            {heading}
          </h2>
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {description}
          </p>
        </motion.header>

        <div className="relative mx-auto max-w-[90rem]">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={!canScrollBack}
            aria-label="Show previous client story"
            className={`absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition sm:-translate-x-5 lg:-translate-x-6 ${
              isDark
                ? "border-white/15 bg-[#10283b] text-white hover:bg-[#17354d]"
                : "border-slate-200 bg-white text-slate-900 hover:border-primary/30 hover:text-primary"
            } disabled:pointer-events-none disabled:opacity-0`}
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            ref={railRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
              }
            }}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 pt-1 outline-none scroll-smooth motion-reduce:scroll-auto focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {clientTestimonials.map((testimonial, index) => (
              <motion.article
                key={`${testimonial.name}-${testimonial.company}`}
                data-testimonial-card
                role="group"
                aria-label={`${index + 1} of ${clientTestimonials.length}: ${testimonial.name}${testimonial.company ? ` from ${testimonial.company}` : ""}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
                className={`relative min-h-[15rem] shrink-0 basis-[88%] snap-start overflow-hidden rounded-[1.6rem] border p-6 sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(25%-0.95rem)] ${
                  isDark
                    ? "border-white/[0.12] bg-white/[0.07] backdrop-blur-sm"
                    : "border-white bg-white shadow-[0_22px_60px_rgba(41,70,120,0.10)]"
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-3xl"
                  style={{ backgroundColor: testimonial.accent }}
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {testimonial.rating ? (
                        <span className="flex gap-1" aria-label="5 out of 5 stars">
                          {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                          ))}
                        </span>
                      ) : (
                        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-sky-200" : "text-primary"}`}>
                          {testimonial.company}
                        </p>
                      )}
                      <p className={`mt-2 text-sm leading-5 ${isDark ? "text-white/55" : "text-slate-500"}`}>
                        {testimonial.name.split(" ")[0]}
                      </p>
                    </div>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${isDark ? "bg-white/10" : "bg-sky-50"}`}>
                      <Quote className={`h-5 w-5 ${isDark ? "text-white/70" : "text-primary/70"}`} aria-hidden="true" />
                    </span>
                  </div>

                  <blockquote className={`mt-6 font-display text-lg font-bold leading-7 ${isDark ? "text-white/90" : "text-slate-800"}`}>
                    &ldquo;{testimonial.excerpt}&rdquo;
                  </blockquote>

                  <div className={`mt-auto border-t pt-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                    <p className={`text-sm leading-6 ${isDark ? "text-white/60" : "text-slate-500"}`}>
                      {testimonial.role
                        ? `${testimonial.role}${testimonial.company ? `, ${testimonial.company}` : ""}`
                        : "Google review"}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            disabled={!canScrollForward}
            aria-label="Show next client story"
            className={`absolute right-0 top-1/2 z-20 flex h-12 w-12 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition sm:translate-x-5 lg:translate-x-6 ${
              isDark
                ? "border-white/15 bg-[#10283b] text-white hover:bg-[#17354d]"
                : "border-slate-200 bg-white text-slate-900 hover:border-primary/30 hover:text-primary"
            } disabled:pointer-events-none disabled:opacity-0`}
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
