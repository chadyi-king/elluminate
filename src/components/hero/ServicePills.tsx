import { motion } from "framer-motion";
import { Users, GraduationCap, Plane, Target } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    label: "Corporate Teambuilding",
    icon: Users,
    color: "hsl(214, 100%, 56%)", // Blue
    href: "/services/team-building",
  },
  {
    label: "School Programs",
    icon: GraduationCap,
    color: "hsl(340, 82%, 52%)", // Pink
    href: "/services/school-programs",
  },
  {
    label: "Overseas Retreats",
    icon: Plane,
    color: "hsl(33, 100%, 50%)", // Orange
    href: "/services/overseas-retreats",
  },
  {
    label: "Focused Trainings",
    icon: Target,
    color: "hsl(160, 70%, 45%)", // Green
    href: "/services/leadership-offsites",
  },
];

export const ServicePills = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={service.href}
              className="flex flex-col items-center gap-2 group relative"
            >
              {/* Lightbulb: Circle + Trapezoid base + glow */}
              <div className="flex flex-col items-center">
                {/* Glass-like inner glow on bulb */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden"
                  style={{
                    backgroundColor: service.color,
                    boxShadow: `0 4px 20px ${service.color}40`,
                  }}
                >
                  {/* Inner glass highlight */}
                  <div 
                    className="absolute top-1 left-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
                  />
                  
                  {/* Pulsing glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 20px ${service.color}60, 0 0 40px ${service.color}50`,
                    }}
                  />

                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white transition-transform duration-300 group-hover:scale-110 relative z-10"
                    strokeWidth={2}
                  />
                </div>
                
                {/* Edison-style filament connector (trapezoid) */}
                <div
                  className="w-10 h-3 sm:w-14 sm:h-4 -mt-1 transition-all duration-300 relative"
                  style={{
                    backgroundColor: service.color,
                    clipPath: 'polygon(15% 0%, 85% 0%, 60% 100%, 40% 100%)',
                    opacity: 0.85,
                  }}
                />
                {/* Screw thread lines */}
                <div
                  className="w-8 h-2 sm:w-10 sm:h-2.5 -mt-[1px]"
                  style={{
                    background: `repeating-linear-gradient(0deg, ${service.color}90 0 2px, ${service.color}40 2px 4px)`,
                    clipPath: 'polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%)',
                  }}
                />
              </div>

              {/* External glow on hover */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"
                style={{
                  backgroundColor: `${service.color}30`,
                }}
              />

              {/* Label below */}
              <span
                className="text-xs sm:text-sm font-semibold transition-colors duration-300 mt-1 text-center leading-tight max-w-[100px]"
                style={{ color: service.color }}
              >
                {service.label}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
