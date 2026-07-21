import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { clientTestimonials, type ClientTestimonial } from "@/data/clientTestimonials";

interface ClientTestimonialsCarouselProps {
  theme?: "light" | "dark";
  eyebrow?: string;
  heading?: string;
  description?: string;
}

const rowOrders = [
  [0, 6, 1, 7, 2, 8, 3, 9, 4, 5],
  [7, 4, 9, 0, 6, 2, 8, 1, 5, 3],
  [3, 8, 5, 7, 1, 9, 4, 0, 6, 2],
];

const cardWidth = (testimonial: ClientTestimonial) => {
  if (testimonial.excerpt.length > 90) return "w-[24rem] sm:w-[28rem]";
  if (testimonial.excerpt.length > 42) return "w-[20rem] sm:w-[23rem]";
  return "w-[15.5rem] sm:w-[17.5rem]";
};

export const ClientTestimonialsCarousel = ({
  theme = "light",
  eyebrow = "In their words",
  heading = "What Clients Love About Us",
  description = "Real words from the people who joined the experience.",
}: ClientTestimonialsCarouselProps) => {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const isDark = theme === "dark";

  const testimonialCard = (testimonial: ClientTestimonial, key: string, hidden = false) => {
    const byline = testimonial.role
      ? `${testimonial.role}${testimonial.company ? `, ${testimonial.company}` : ""}`
      : testimonial.company;

    return (
      <article
        key={key}
        aria-hidden={hidden ? "true" : undefined}
        className={`relative min-h-[10.5rem] shrink-0 overflow-hidden rounded-[1.45rem] border p-5 ${cardWidth(testimonial)} ${
          isDark
            ? "border-white/[0.12] bg-white/[0.075] backdrop-blur-sm"
            : "border-white bg-white shadow-[0_18px_48px_rgba(41,70,120,0.10)]"
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: testimonial.accent }}
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {testimonial.rating && (
                <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </span>
              )}
              <p className={`mt-2 truncate text-sm font-semibold ${isDark ? "text-white/65" : "text-slate-500"}`}>
                {testimonial.name.split(" ")[0]}
              </p>
            </div>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isDark ? "bg-white/10" : "bg-sky-50"}`}>
              <Quote className={`h-4 w-4 ${isDark ? "text-white/65" : "text-primary/65"}`} aria-hidden="true" />
            </span>
          </div>

          <blockquote className={`mt-4 font-display text-base font-bold leading-6 ${isDark ? "text-white/90" : "text-slate-800"}`}>
            &ldquo;{testimonial.excerpt}&rdquo;
          </blockquote>

          {byline && (
            <p className={`mt-auto border-t pt-3 text-xs leading-5 ${isDark ? "border-white/10 text-white/55" : "border-slate-200 text-slate-500"}`}>
              {byline}
            </p>
          )}
        </div>
      </article>
    );
  };

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 ${isDark ? "bg-[#071a2a] text-white" : "bg-[#f4f7ff] text-[#0b1424]"}`}
      aria-labelledby="client-testimonials-heading"
    >
      <div className={`pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full blur-[120px] ${isDark ? "bg-sky-500/20" : "bg-sky-300/25"}`} />
      <div className={`pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[130px] ${isDark ? "bg-violet-500/20" : "bg-violet-300/25"}`} />
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

        {reduceMotion ? (
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clientTestimonials.map((testimonial) => testimonialCard(testimonial, `${testimonial.name}-static`))}
          </div>
        ) : (
          <div
            role="region"
            aria-label="Client testimonials"
            className="relative left-1/2 w-screen -translate-x-1/2 space-y-3 overflow-hidden py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r sm:w-28 ${isDark ? "from-[#071a2a]" : "from-[#f4f7ff]"} to-transparent`} />
            <div className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l sm:w-28 ${isDark ? "from-[#071a2a]" : "from-[#f4f7ff]"} to-transparent`} />

            {rowOrders.map((order, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div
                  className={`flex w-max ${rowIndex % 2 === 0 ? "testimonial-marquee-left" : "testimonial-marquee-right"}`}
                  style={{
                    animationDuration: `${42 + rowIndex * 7}s`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {[0, 1].map((copyIndex) => (
                    <div
                      key={copyIndex}
                      className="flex shrink-0 gap-3 pr-3"
                      aria-hidden={copyIndex === 1 || rowIndex > 0 ? "true" : undefined}
                    >
                      {order.map((testimonialIndex) => {
                        const testimonial = clientTestimonials[testimonialIndex];
                        return testimonialCard(
                          testimonial,
                          `${rowIndex}-${copyIndex}-${testimonial.name}`,
                          copyIndex === 1 || rowIndex > 0,
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className={`mx-auto mt-7 max-w-2xl text-center text-xs leading-5 ${isDark ? "text-white/40" : "text-slate-400"}`}>
          Client stories include work delivered by the shared Elluminate and Team Elevate operating team.
        </p>
      </div>
    </section>
  );
};
