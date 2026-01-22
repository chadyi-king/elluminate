import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface FoamDartStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Nerfwar divider: dotted "dart" markers. */
export const FoamDartStrip = ({ direction = "downRight", accentColor, className }: FoamDartStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 12px 50%, ${accentColor} 0 3px, transparent 4px), radial-gradient(circle at 40px 50%, ${accentColor} 0 3px, transparent 4px), radial-gradient(circle at 68px 50%, ${accentColor} 0 3px, transparent 4px)`,
            backgroundSize: "84px 100%",
            opacity: 0.4,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
