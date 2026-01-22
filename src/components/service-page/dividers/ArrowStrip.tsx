import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface ArrowStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Archery-themed divider: arrow / trajectory streaks. */
export const ArrowStrip = ({ direction = "downRight", accentColor, className }: ArrowStripProps) => {
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
            backgroundImage: `repeating-linear-gradient(135deg, ${accentColor} 0 10px, transparent 10px 22px)`,
            opacity: 0.25,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
