import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface LaserStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Tag-tical Laser Teambuilding divider: laser beam crosshair pattern. */
export const LaserStrip = ({ direction = "downRight", accentColor, className }: LaserStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Dark background */}
        <div className="absolute inset-0" style={{ background: "#0a0a0a" }} />

        {/* Horizontal laser beam */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, ${accentColor}, transparent)`,
            boxShadow: `0 0 8px ${accentColor}, 0 0 16px ${accentColor}60`,
            opacity: 0.8,
          }}
        />

        {/* Crosshair circles */}
        <div className="absolute inset-0 flex items-center justify-around overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative flex-shrink-0">
              <div
                className="w-8 h-8 rounded-full border"
                style={{ borderColor: `${accentColor}40` }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border"
                style={{ borderColor: `${accentColor}60` }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 4px ${accentColor}` }}
              />
              {/* Crosshair lines */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full"
                style={{ backgroundColor: `${accentColor}25` }}
              />
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px]"
                style={{ backgroundColor: `${accentColor}25` }}
              />
            </div>
          ))}
        </div>

        {/* Accent rails with glow */}
        <div
          className="absolute left-0 right-0 top-2 h-[4px]"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}60` }}
        />
        <div
          className="absolute left-0 right-0 bottom-2 h-[4px]"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}60` }}
        />
      </div>
    </div>
  );
};
