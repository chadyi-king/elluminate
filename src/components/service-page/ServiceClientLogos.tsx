import { motion } from "framer-motion";

interface ServiceClientLogosProps {
  clients: string[];
  accentColor: string;
  headline?: string;
}

export const ServiceClientLogos = ({
  clients,
  accentColor,
  headline = "Trusted by Leading Companies"
}: ServiceClientLogosProps) => {
  return (
    <section className="py-12 px-4 relative overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          background: `radial-gradient(ellipse at center, ${accentColor}, transparent 70%)`
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Headline */}
          <p 
            className="text-sm font-medium tracking-wide mb-8 text-muted-foreground"
          >
            {headline}
          </p>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <span 
                  className="text-lg md:text-xl font-display font-semibold tracking-wide text-muted-foreground/60 transition-all duration-300 group-hover:text-foreground"
                  style={{ 
                    textShadow: 'none',
                  }}
                >
                  {client}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 h-px max-w-md mx-auto"
            style={{ backgroundColor: `${accentColor}30` }}
          />
        </motion.div>
      </div>
    </section>
  );
};
