import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface ConfettiStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

export const ConfettiStrip = ({ direction = "downRight", accentColor, className }: ConfettiStripProps) => {
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
          background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}08)`,
        }}
      >
        {/* Confetti dots pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle 3px, ${accentColor}60 100%, transparent 100%),
              radial-gradient(circle 2px, #FF6B8A50 100%, transparent 100%),
              radial-gradient(circle 2.5px, #FFD70050 100%, transparent 100%),
              radial-gradient(circle 2px, #4FC3F750 100%, transparent 100%),
              radial-gradient(circle 3px, #FF9F4350 100%, transparent 100%),
              radial-gradient(circle 1.5px, #A78BFA50 100%, transparent 100%)
            `,
            backgroundSize: "80px 45px, 120px 50px, 65px 38px, 95px 42px, 110px 55px, 75px 35px",
            backgroundPosition: "10px 5px, 50px 20px, 25px 30px, 70px 10px, 40px 35px, 85px 15px",
          }}
        />

        {/* Streamer ribbons */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(75deg, transparent 45%, ${accentColor}20 45.5%, ${accentColor}20 46.5%, transparent 47%),
              linear-gradient(-65deg, transparent 50%, #FF6B8A15 50.5%, #FF6B8A15 51.5%, transparent 52%),
              linear-gradient(80deg, transparent 30%, #FFD70015 30.5%, #FFD70015 31.5%, transparent 32%)
            `,
            backgroundSize: "200px 100%, 180px 100%, 160px 100%",
          }}
        />

        {/* Top and bottom accent rails */}
        <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}50, ${accentColor}, ${accentColor}50, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}50, ${accentColor}, ${accentColor}50, transparent)` }} />
      </div>
    </div>
  );
};
