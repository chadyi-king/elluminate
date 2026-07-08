import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ExpandableActivityCardProps {
  name: string;
  icon: LucideIcon;
  slug?: string;
  color: string;
  description: string;
  stats?: string;
  clients?: string;
  image: string;
  tag?: string;
  href?: string;
  ctaLabel?: string;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export const ExpandableActivityCard = ({
  name,
  icon: Icon,
  slug,
  color,
  description,
  stats,
  clients,
  image,
  tag,
  href,
  ctaLabel,
  isActive,
  onActivate,
  onDeactivate,
}: ExpandableActivityCardProps) => {
  const closeTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });
  const targetHref = href ?? (slug ? `/services/${slug}` : undefined);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const updatePointerPosition = (event: PointerEvent) => {
    pointerPositionRef.current = { x: event.clientX, y: event.clientY };
  };

  const isPointerInsideCard = () => {
    if (!cardRef.current) return false;

    const { x, y } = pointerPositionRef.current;
    const rect = cardRef.current.getBoundingClientRect();

    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };

  const handlePointerEnter = (event: PointerEvent) => {
    updatePointerPosition(event);
    cancelClose();
    onActivate();
  };

  const handlePointerMove = (event: PointerEvent) => {
    updatePointerPosition(event);
  };

  const handlePointerLeave = (event: PointerEvent) => {
    updatePointerPosition(event);
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      if (!isPointerInsideCard()) {
        onDeactivate();
      }
      closeTimerRef.current = null;
    }, 250);
  };

  useEffect(() => cancelClose, []);

  return (
    <motion.div
      className="cursor-pointer"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      animate={{ minHeight: isActive ? 380 : 220 }}
      style={{ minHeight: 220 }}
    >
      <motion.div
        ref={cardRef}
        className="relative isolate rounded-2xl overflow-hidden shadow-lg"
        animate={{
          height: isActive ? 380 : 220,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          boxShadow: isActive
            ? `0 25px 50px ${color}40`
            : "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            width={640}
            height={480}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: isActive ? "scale(1.1)" : "scale(1)" }}
          />
          {/* Color overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${color}dd 0%, ${color}99 50%, ${color}cc 100%)`,
              opacity: isActive ? 0.92 : 0.85,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-40 h-full flex flex-col justify-between p-6 text-white">

          {/* Top section */}
          <div>
            <div className="mb-4 flex items-start justify-between gap-3">
              {tag ? (
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                  {tag}
                </span>
              ) : (
                <span />
              )}

              <motion.div
                className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ rotate: isActive ? 10 : 0, scale: isActive ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-display font-bold mb-2">{name}</h3>

            {/* Description - always visible but expands */}
            <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4"
              >
                {/* Stats */}
                {stats && (
                  <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 mb-4">
                    <p className="text-white/80 text-xs uppercase tracking-wider mb-1">
                      Track Record
                    </p>
                    <p className="text-white font-semibold text-sm">{stats}</p>
                    {clients && (
                      <p className="text-white/80 text-xs mt-1">{clients}</p>
                    )}
                  </div>
                )}

                {/* Read More Link */}
                {targetHref ? (
                  targetHref.startsWith("#") ? (
                    <a
                      href={targetHref}
                      onPointerEnter={handlePointerEnter}
                      onPointerMove={handlePointerMove}
                      onPointerDown={cancelClose}
                      onClick={() => {
                        cancelClose();
                        onActivate();
                      }}
                      className="relative z-50 pointer-events-auto cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300"
                      aria-label={ctaLabel ?? `Explore ${name}`}
                    >
                      <span>{ctaLabel ?? `Explore ${name}`}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={targetHref}
                      onPointerEnter={handlePointerEnter}
                      onPointerMove={handlePointerMove}
                      onPointerDown={cancelClose}
                      onClick={() => {
                        cancelClose();
                        onActivate();
                      }}
                      className="relative z-50 pointer-events-auto cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300"
                      aria-label={ctaLabel ?? `Explore ${name}`}
                    >
                      <span>{ctaLabel ?? `Explore ${name}`}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Shine effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: isActive ? "200%" : "-100%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};
