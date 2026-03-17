import { motion } from "framer-motion";

interface RecentEvent {
  client: string;
  event: string;
  pax: number;
}

interface ServiceRecentEventsTickerProps {
  events: RecentEvent[];
  accentColor: string;
}

export const ServiceRecentEventsTicker = ({
  events,
  accentColor
}: ServiceRecentEventsTickerProps) => {
  // Quadruple the events for seamless infinite scroll
  const repeatedEvents = [...events, ...events, ...events, ...events];

  return (
    <section 
      className="py-4 relative overflow-hidden"
      style={{ backgroundColor: `${accentColor}15` }}
    >
      {/* Gradient overlays for smooth edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-20 z-10"
        style={{ 
          background: `linear-gradient(to right, ${accentColor}15, transparent)`
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{ 
          background: `linear-gradient(to left, ${accentColor}15, transparent)`
        }}
      />

      {/* Scrolling content */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }}
      >
        {repeatedEvents.map((event, index) => (
          <div 
            key={`${event.client}-${index}`}
            className="flex items-center gap-3 text-sm font-medium"
          >
            <span className="text-foreground font-semibold">
              {event.client}
            </span>
            <span 
              className="px-2 py-0.5 rounded-full text-xs font-bold"
              style={{ 
                backgroundColor: `${accentColor}20`,
                color: accentColor
              }}
            >
              {event.pax} pax
            </span>
            <span className="text-foreground/30">/</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
