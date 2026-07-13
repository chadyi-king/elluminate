import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

export const HeroSection = () => {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative flex min-h-[76svh] items-end overflow-hidden bg-slate-950 text-white md:min-h-[82svh] md:items-center">
      <img
        src="/images/services/amazing-race/hero.jpg"
        alt="Colleagues taking part in an outdoor team challenge in Singapore"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
        width={1800}
        height={1200}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20 md:bg-gradient-to-r md:from-slate-950/95 md:via-slate-950/72 md:to-slate-950/10" />

      <div className="container relative z-10 mx-auto px-6 pb-12 pt-28 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-sky-300 sm:text-sm">
            Corporate team building and company experiences
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Plan a company experience that fits the people in the room.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            Tell us who is coming, what the day should achieve, where it needs to happen and when. Elluminate shapes the right team-building activity, retreat or facilitated experience around your brief.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => openContactModal()}
              className="w-full shadow-xl sm:w-auto"
            >
              Plan My Event
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="w-full border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary sm:w-auto"
            >
              <Link to="/services/team-building">Explore Team Building</Link>
            </Button>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-3 border-t border-white/25 pt-5 text-sm text-white/80 sm:grid-cols-4">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sky-300" aria-hidden="true" />People
            </span>
            <span className="flex items-center gap-2">
              <Target className="h-4 w-4 text-sky-300" aria-hidden="true" />Objective
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-300" aria-hidden="true" />Venue
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-sky-300" aria-hidden="true" />Timing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
