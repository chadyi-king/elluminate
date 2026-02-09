import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface RouteStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Running Man divider: dashed route path with checkpoint flags. */
export const RouteStrip = ({ direction = "downRight", accentColor, className }: RouteStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div className="absolute inset-0" style={{ background: "hsl(var(--background))" }} />
        
        {/* Dashed route line */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[4px]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${accentColor} 0 22px, transparent 22px 36px)`,
            opacity: 0.6,
          }}
        />
        
        {/* Checkpoint markers - flag shapes */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 mx-16 flex flex-col items-center opacity-40">
              <div
                className="w-4 h-3"
                style={{ 
                  backgroundColor: accentColor,
                  clipPath: "polygon(0 0, 100% 25%, 100% 75%, 0 100%)"
                }}
              />
              <div className="w-[2px] h-4" style={{ backgroundColor: accentColor }} />
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
