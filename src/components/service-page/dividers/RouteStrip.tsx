import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface RouteStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Running Man divider: route line + checkpoints. */
export const RouteStrip = ({ direction = "downRight", accentColor, className }: RouteStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${accentColor} 0 18px, transparent 18px 32px)`,
            opacity: 0.55,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 24px 50%, ${accentColor} 0 5px, transparent 6px), radial-gradient(circle at 84px 50%, ${accentColor} 0 5px, transparent 6px), radial-gradient(circle at 144px 50%, ${accentColor} 0 5px, transparent 6px)`,
            backgroundSize: "160px 100%",
            opacity: 0.35,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
