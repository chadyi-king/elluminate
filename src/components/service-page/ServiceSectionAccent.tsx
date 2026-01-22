import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceSectionAccentProps {
  imageSrc: string;
  alt: string;
  side?: "left" | "right";
  className?: string;
  children: ReactNode;
}

export const ServiceSectionAccent = ({
  imageSrc,
  alt,
  side = "right",
  className,
  children,
}: ServiceSectionAccentProps) => {
  const sideClasses =
    side === "left"
      ? "left-6 md:left-10"
      : "right-6 md:right-10";

  return (
    <div className={cn("relative", className)}>
      {/* Subtle accent portrait (desktop only) */}
      <div
        className={cn(
          "hidden md:block pointer-events-none absolute top-10 z-10",
          sideClasses
        )}
      >
        <div className="relative">
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover opacity-35 grayscale-[0.1]"
          />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-b from-transparent to-background/80" />
        </div>
      </div>
      {children}
    </div>
  );
};
