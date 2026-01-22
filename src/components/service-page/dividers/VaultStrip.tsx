import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface VaultStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Treasure Heist themed divider: vault/gold pattern. */
export const VaultStrip = ({ direction = "downRight", accentColor, className }: VaultStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--foreground) / 0.12), hsl(var(--foreground) / 0.06))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(var(--foreground) / 0.12) 0 14px, transparent 14px 28px)",
            opacity: 0.9,
          }}
        />
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
};
