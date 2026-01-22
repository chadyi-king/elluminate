import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface GelBeadsStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** GelBlitz divider: scattered bead dots. */
export const GelBeadsStrip = ({ direction = "downRight", accentColor, className }: GelBeadsStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 16px 20%, ${accentColor} 0 2px, transparent 3px),
               radial-gradient(circle at 46px 70%, ${accentColor} 0 3px, transparent 4px),
               radial-gradient(circle at 88px 35%, ${accentColor} 0 2px, transparent 3px),
               radial-gradient(circle at 122px 65%, ${accentColor} 0 3px, transparent 4px),
               radial-gradient(circle at 156px 25%, ${accentColor} 0 2px, transparent 3px)`,
            backgroundSize: "180px 100%",
            opacity: 0.35,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
