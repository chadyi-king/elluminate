import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface ArrowStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Archery-themed divider: bold chevron/arrow shapes repeating. */
export const ArrowStrip = ({ direction = "downRight", accentColor, className }: ArrowStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--foreground) / 0.10), hsl(var(--foreground) / 0.05))",
          }}
        />
        
        {/* Chevron arrow pattern >>> */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-40">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="text-2xl font-black mx-2 flex-shrink-0"
              style={{ color: accentColor }}
            >
              ›››
            </span>
          ))}
        </div>

        {/* Accent rails */}
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
