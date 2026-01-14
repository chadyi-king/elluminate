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
              {/* Fixed-size circle */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl"
                style={{
                  backgroundColor: service.color,
                  boxShadow: `0 4px 20px ${service.color}40`,
                }}
              >
                <Icon
                  className="w-7 h-7 sm:w-9 sm:h-9 text-white transition-transform duration-300 group-hover:scale-110"
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
