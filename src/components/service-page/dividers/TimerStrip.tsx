import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface TimerStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Minute-To-Win-It themed divider: countdown clock marks with numbers. */
export const TimerStrip = ({ direction = "downRight", accentColor, className }: TimerStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        
        {/* Fine tick marks (short marks) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, transparent 0 10px, ${accentColor}30 10px 11px, transparent 11px 20px)`,
            opacity: 0.95,
          }}
        />

        {/* Bold major tick marks */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, transparent 0 58px, ${accentColor} 58px 61px, transparent 61px 120px)`,
            opacity: 0.5,
          }}
        />

        {/* Countdown numbers */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-25">
          {["60", "59", "58", "57", "56", "55", "54", "53", "52", "51", "50", "49", "48", "47", "46", "45"].map((num, i) => (
            <span
              key={i}
              className="text-lg font-mono font-bold mx-6 flex-shrink-0"
              style={{ color: accentColor }}
            >
              {num}
            </span>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
