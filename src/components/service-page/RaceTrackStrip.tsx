import * as React from "react";

type RaceTrackStripDirection = "downRight" | "downLeft";

interface RaceTrackStripProps {
  direction?: RaceTrackStripDirection;
  accentColor: string;
  className?: string;
}

/**
 * Slim diagonal “race track” divider (checkered center + accent rails).
 * Uses design tokens for the checkered colors; accentColor is used for the rails.
 */
export const RaceTrackStrip = ({
  direction = "downRight",
  accentColor,
  className,
}: RaceTrackStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div
        aria-hidden
        className="relative h-14 w-[120%] -translate-x-[10%]"
        style={{ transform: rotation }}
      >
        {/* Checkered track */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--foreground)) 0 10px, hsl(var(--background)) 10px 20px)",
            opacity: 0.95,
          }}
        />

        {/* Accent rails */}
        <div
          className="absolute left-0 right-0 top-2 h-[6px]"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute left-0 right-0 bottom-2 h-[6px]"
          style={{ backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
};
