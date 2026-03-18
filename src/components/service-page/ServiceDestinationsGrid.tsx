import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

interface Destination {
  country: string;
  image: string;
  tagline: string;
  priceFrom?: string;
  duration?: string;
  region?: string;
  activities: string[];
}

interface ServiceDestinationsGridProps {
  sectionTitle: string;
  sectionSubtitle: string;
  destinations: Destination[];
  accentColor: string;
}

export const ServiceDestinationsGrid = ({
  sectionTitle,
  sectionSubtitle,
  destinations,
  accentColor,
}: ServiceDestinationsGridProps) => {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase font-display font-semibold mb-3 block"
            style={{ color: accentColor }}
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {sectionTitle}
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sectionSubtitle}
          </motion.h2>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Background image */}
              <img
                src={dest.image}
                alt={`${dest.country} corporate retreat`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Default state */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 shrink-0" />
                      Asia Pacific
                    </p>
                    <h3 className="text-white text-xl font-display font-bold leading-tight">
                      {dest.country}
                    </h3>
                    {dest.duration && <p className="text-white/55 text-xs mt-0.5">{dest.duration}</p>}
                  </div>
                  {dest.priceFrom && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm shrink-0">
                      {dest.priceFrom}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover state */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-display font-bold mb-1 leading-tight">
                  {dest.country}
                </h3>
                <p className="text-white/80 text-sm leading-snug mb-3">{dest.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dest.activities.map((activity) => (
                    <span
                      key={activity}
                      className="text-xs px-2.5 py-0.5 rounded-full text-white font-medium"
                      style={{ backgroundColor: `${accentColor}99` }}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
                <button
                  onClick={openContactModal}
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full text-white w-fit transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: accentColor }}
                >
                  Plan This Retreat <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
