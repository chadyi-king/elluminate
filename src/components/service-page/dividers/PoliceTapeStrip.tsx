import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface PoliceTapeStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** CSI-themed divider: warning/police tape vibe. */
export const PoliceTapeStrip = ({
  direction = "downRight",
  accentColor,
  className,
}: PoliceTapeStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(45deg, hsl(var(--foreground)) 0 18px, hsl(var(--background)) 18px 36px)",
            opacity: 0.9,
          }}
        />

        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />

        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 opacity-70"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, transparent 0 26px, ${accentColor} 26px 27px)`,
          }}
        />
      </div>
    </div>
  );
};
