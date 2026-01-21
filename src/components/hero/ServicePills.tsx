import { motion } from "framer-motion";
import { Users, GraduationCap, Plane, Target } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    label: "Corporate",
    icon: Users,
    color: "hsl(214, 100%, 56%)", // Blue
    href: "/services/team-building",
  },
  {
    label: "Schools",
    icon: GraduationCap,
    color: "hsl(340, 82%, 52%)", // Pink
    href: "/services/school-programs",
  },
  {
    label: "Retreats",
    icon: Plane,
    color: "hsl(33, 100%, 50%)", // Orange
    href: "/services/overseas-retreats",
  },
  {
    label: "Training",
    icon: Target,
    color: "hsl(160, 70%, 45%)", // Green
    href: "/services/leadership-offsites",
  },
];

export const ServicePills = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 sm:gap-6"
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
              className="flex flex-col items-center gap-2 group"
            >
              {/* Lightbulb shape */}
              <div
                className="w-14 h-[72px] sm:w-18 sm:h-[90px] flex items-start justify-center pt-3 sm:pt-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:brightness-110"
                style={{
                  backgroundColor: service.color,
                  boxShadow: `0 4px 20px ${service.color}40`,
                  clipPath: `polygon(
                    50% 0%,
                    90% 15%,
                    100% 40%,
                    95% 55%,
                    75% 65%,
                    75% 75%,
                    70% 85%,
                    65% 100%,
                    35% 100%,
                    30% 85%,
                    25% 75%,
                    25% 65%,
                    5% 55%,
                    0% 40%,
                    10% 15%
                  )`,
                }}
              >
                <Icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={2}
                />
              </div>

              {/* Label below circle */}
              <span
                className="text-xs sm:text-sm font-semibold transition-colors duration-300"
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
