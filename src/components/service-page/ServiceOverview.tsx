import { motion } from "framer-motion";

interface ServiceOverviewProps {
  description: string;
  backgroundImage?: string;
}

export const ServiceOverview = ({ description, backgroundImage }: ServiceOverviewProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      
      {/* Gold accent line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
            Service Overview
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
