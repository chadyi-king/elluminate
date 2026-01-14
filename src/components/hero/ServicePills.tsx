import { motion } from "framer-motion";
import { Lightbulb, Users, GraduationCap, Plane, Target } from "lucide-react";
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
      className="flex flex-wrap justify-center gap-3 sm:gap-4"
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
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={service.href}
              className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white/90 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ borderColor: service.color }}
            >
              {/* Lightbulb icon */}
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Lightbulb
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                  style={{ color: service.color }}
                />
              </motion.div>

              {/* Service icon */}
              <Icon
                className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                style={{ color: service.color }}
              />

              {/* Label */}
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
