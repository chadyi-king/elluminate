import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface SpotlightStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

export const SpotlightStrip = ({ direction = "downRight", accentColor, className }: SpotlightStripProps) => {
  const rotate = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={`relative w-full h-14 overflow-hidden my-[-1px] ${className ?? ""}`}>
      <div
        className="absolute inset-0"
        style={{
          transform: rotate,
          transformOrigin: "center center",
          top: "-10%",
          bottom: "-10%",
          left: "-2%",
          right: "-2%",
          background: `linear-gradient(90deg, #0a0a0a, #1a1a1a, #0a0a0a)`,
        }}
      >
        {/* Spotlight cone beams */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60px 120% at 20% 0%, ${accentColor}25 0%, transparent 70%),
              radial-gradient(ellipse 80px 120% at 50% 0%, ${accentColor}20 0%, transparent 70%),
              radial-gradient(ellipse 50px 120% at 80% 0%, ${accentColor}25 0%, transparent 70%)
            `,
          }}
        />

        {/* Stage light dots pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle 1.5px, ${accentColor}40 100%, transparent 100%),
              radial-gradient(circle 1px, ${accentColor}25 100%, transparent 100%)
            `,
            backgroundSize: "30px 30px, 20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />

        {/* Center stage glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-full"
          style={{
            background: `radial-gradient(ellipse at center, ${accentColor}15, transparent 70%)`,
          }}
        />

        {/* Top and bottom accent rails */}
        <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}80, ${accentColor}, ${accentColor}80, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}80, ${accentColor}, ${accentColor}80, transparent)` }} />
      </div>
    </div>
  );
};
