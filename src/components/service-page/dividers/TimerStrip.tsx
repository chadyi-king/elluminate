import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface TimerStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Minute-To-Win-It themed divider: tick marks / timing. */
export const TimerStrip = ({ direction = "downRight", accentColor, className }: TimerStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, transparent 0 14px, hsl(var(--foreground) / 0.16) 14px 15px, transparent 15px 28px), repeating-linear-gradient(90deg, transparent 0 56px, ${accentColor} 56px 58px, transparent 58px 112px)`,
            opacity: 0.95,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
