import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface SquidStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Sotong Game divider: geometric circle/triangle/square motif. */
export const SquidStrip = ({ direction = "downRight", accentColor, className }: SquidStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--foreground) / 0.10), hsl(var(--foreground) / 0.05))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 18px 50%, ${accentColor} 0 5px, transparent 6px),
               linear-gradient(60deg, transparent 48%, ${accentColor} 49% 51%, transparent 52%),
               linear-gradient(-60deg, transparent 48%, ${accentColor} 49% 51%, transparent 52%),
               linear-gradient(0deg, transparent 46%, ${accentColor} 47% 53%, transparent 54%)`,
            backgroundSize: "96px 100%",
            opacity: 0.25,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
