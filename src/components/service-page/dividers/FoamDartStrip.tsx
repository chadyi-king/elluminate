import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface FoamDartStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Nerfwar divider: dart/bullet shapes with impact splats. */
export const FoamDartStrip = ({ direction = "downRight", accentColor, className }: FoamDartStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        
        {/* Dart trajectory lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(0deg, transparent 0 24px, ${accentColor}15 24px 25px, transparent 25px 48px)`,
            opacity: 0.8,
          }}
        />

        {/* Dart bullet shapes - larger and more visible */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(ellipse 6px 10px at 20px 50%, ${accentColor} 0 100%, transparent 100%),
               radial-gradient(ellipse 6px 10px at 70px 30%, ${accentColor} 0 100%, transparent 100%),
               radial-gradient(ellipse 6px 10px at 120px 60%, ${accentColor} 0 100%, transparent 100%),
               radial-gradient(circle at 45px 50%, ${accentColor} 0 2px, transparent 3px),
               radial-gradient(circle at 95px 40%, ${accentColor} 0 2px, transparent 3px)`,
            backgroundSize: "140px 100%",
            opacity: 0.5,
          }}
        />

        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
