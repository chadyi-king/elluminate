import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

export const CTASection = () => {
  const { openContactModal } = useContactModal();

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 text-white md:py-32">
      <img
        src="/images/services/amazing-race/cta.jpg"
        alt="Company participants celebrating together at a team-building event"
        loading="lazy"
        decoding="async"
        width={1800}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary/90 to-primary/65" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">Your event starts here</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-white md:text-6xl">
            Bring us the brief. We will help shape the day.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl">
            Share your pax, timing, venue preference and event objective. Elluminate will help turn those details into a practical experience direction and quote.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="xl"
              onClick={() => openContactModal()}
              className="w-full bg-white text-primary shadow-xl hover:bg-sky-50 sm:w-auto"
            >
              Plan My Event
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="w-full border-white/60 bg-transparent text-white hover:bg-white hover:text-primary sm:w-auto"
            >
              <Link to="/services/team-building">Explore Team Building</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
