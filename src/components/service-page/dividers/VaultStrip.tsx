import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface VaultStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Treasure Heist themed divider: vault door pattern with gold/metallic feel. */
export const VaultStrip = ({ direction = "downRight", accentColor, className }: VaultStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Dark metallic background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #2a2a2a, #1a1a1a)",
          }}
        />
        
        {/* Diagonal vault door lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,215,0,0.15) 0 2px, transparent 2px 20px), repeating-linear-gradient(45deg, rgba(255,215,0,0.1) 0 2px, transparent 2px 20px)",
            opacity: 0.9,
          }}
        />

        {/* Gear/dial circles */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 mx-10 flex-shrink-0 flex items-center justify-center"
              style={{ borderColor: "#FFD700" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FFD700" }} />
            </div>
          ))}
        </div>

        {/* Gold accent rails */}
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: "#FFD700" }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: "#FFD700" }} />
        
        {/* Center gold line */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
};
