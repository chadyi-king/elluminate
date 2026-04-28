import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cld } from "@/lib/cloudinaryUrl";

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
}: ExpandableActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const targetHref = href ?? (slug ? `/services/${slug}` : undefined);

  return (
    <motion.div
      className="group cursor-pointer"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-lg"
        animate={{
          height: isExpanded ? 380 : 220,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          boxShadow: isExpanded
            ? `0 25px 50px ${color}40`
            : "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Color overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${color}dd 0%, ${color}99 50%, ${color}cc 100%)`,
              opacity: isExpanded ? 0.92 : 0.85,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
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
                animate={{ rotate: isExpanded ? 10 : 0, scale: isExpanded ? 1.1 : 1 }}
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
            {isExpanded && (
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
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      <span>{ctaLabel ?? "Learn More"}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={targetHref}
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      <span>{ctaLabel ?? "Learn More"}</span>
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
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: isExpanded ? "200%" : "-100%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};
