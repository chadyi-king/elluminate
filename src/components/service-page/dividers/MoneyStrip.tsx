import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface MoneyStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Monopoly-themed divider: note/grid pattern. */
export const MoneyStrip = ({ direction = "downRight", accentColor, className }: MoneyStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, hsl(var(--foreground) / 0.10) 0 2px, transparent 2px 26px), repeating-linear-gradient(0deg, hsl(var(--foreground) / 0.08) 0 1px, transparent 1px 18px)`,
            opacity: 0.9,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
