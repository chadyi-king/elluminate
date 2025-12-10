import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Moment {
  icon: LucideIcon;
  title: string;
}

interface ServiceMomentsProps {
  title: string;
  moments: Moment[];
}

export const ServiceMoments = ({ title, moments }: ServiceMomentsProps) => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold">
            {title}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group flex items-center gap-3 bg-card border border-border-gold/20 rounded-full px-6 py-3 hover:border-primary/50 hover:shadow-gold transition-all duration-300"
            >
              <moment.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {moment.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
