import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface GelBeadsStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** GelBlitz divider: larger colorful scattered gel bead splatter. */
export const GelBeadsStrip = ({ direction = "downRight", accentColor, className }: GelBeadsStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        
        {/* Larger scattered gel beads - multiple sizes */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 14px 18%, ${accentColor} 0 4px, transparent 5px),
               radial-gradient(circle at 42px 72%, ${accentColor} 0 6px, transparent 7px),
               radial-gradient(circle at 78px 30%, ${accentColor} 0 3px, transparent 4px),
               radial-gradient(circle at 108px 60%, ${accentColor} 0 5px, transparent 6px),
               radial-gradient(circle at 140px 22%, ${accentColor} 0 4px, transparent 5px),
               radial-gradient(circle at 166px 75%, ${accentColor} 0 3px, transparent 4px),
               radial-gradient(circle at 60px 50%, ${accentColor} 0 2px, transparent 3px),
               radial-gradient(circle at 130px 45%, ${accentColor} 0 2px, transparent 3px)`,
            backgroundSize: "180px 100%",
            opacity: 0.55,
          }}
        />

        {/* Splatter effect overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(ellipse 12px 8px at 30px 40%, ${accentColor}30 0 100%, transparent 100%),
               radial-gradient(ellipse 10px 14px at 100px 55%, ${accentColor}25 0 100%, transparent 100%),
               radial-gradient(ellipse 16px 10px at 155px 35%, ${accentColor}20 0 100%, transparent 100%)`,
            backgroundSize: "180px 100%",
          }}
        />

        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
