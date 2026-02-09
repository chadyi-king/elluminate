import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface SquidStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Sotong Game divider: bold circle/triangle/square Squid Game motif. */
export const SquidStrip = ({ direction = "downRight", accentColor, className }: SquidStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Dark pink-tinted background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #1a0a14, #2a0f1f)",
          }}
        />

        {/* Repeating shapes: circle, triangle, square */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6 flex-shrink-0">
              {/* Circle */}
              <div
                className="w-7 h-7 rounded-full border-2"
                style={{ borderColor: accentColor, opacity: 0.5 }}
              />
              {/* Triangle */}
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: "4.5px solid transparent",
                  borderRight: "4.5px solid transparent",
                  borderBottom: `8px solid ${accentColor}`,
                  opacity: 0.5,
                }}
              />
              {/* Square */}
              <div
                className="w-6 h-6 border-2"
                style={{ borderColor: accentColor, opacity: 0.5 }}
              />
            </div>
          ))}
        </div>

        {/* Accent rails */}
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
