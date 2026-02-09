import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface MoneyStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Monopoly-themed divider: green tinted with dollar signs and banknote patterns. */
export const MoneyStrip = ({ direction = "downRight", accentColor, className }: MoneyStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Green-tinted background */}
        <div className="absolute inset-0" style={{ background: "#0a3d0a" }} />
        
        {/* Fine banknote grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 20px), repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px)`,
            opacity: 0.9,
          }}
        />

        {/* Dollar sign pattern */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="whitespace-nowrap flex gap-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="text-lg font-bold mx-6 opacity-30"
                style={{ color: "#4ade80" }}
              >
                $
              </span>
            ))}
          </div>
        </div>

        {/* Green accent rails */}
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: "#4ade80" }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: "#4ade80" }} />

        {/* Center decorative line */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #4ade80, transparent)",
            opacity: 0.4,
          }}
        />
      </div>
    </div>
  );
};
