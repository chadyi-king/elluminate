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
      className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 w-full max-w-4xl mx-auto"
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
              {/* Lightbulb: Circle + Trapezoid base */}
              <div className="flex flex-col items-center">
                {/* Circle (bulb) */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: service.color,
                    boxShadow: `0 4px 20px ${service.color}40`,
                  }}
                >
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={2}
                  />
                </div>
                
                {/* Trapezoid (screw base) */}
                <div
                  className="w-12 h-4 sm:w-16 sm:h-5 -mt-1 transition-all duration-300"
                  style={{
                    backgroundColor: service.color,
                    clipPath: 'polygon(15% 0%, 85% 0%, 65% 100%, 35% 100%)',
                  }}
                />
              </div>

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                style={{
                  boxShadow: `0 0 60px 20px ${service.color}50`,
                }}
              />

              {/* Label below */}
              <span
                className="text-sm sm:text-base font-semibold transition-colors duration-300 mt-1"
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
