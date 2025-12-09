import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const clientLogos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
}));

const stats = [
  {
    number: "1,000+",
    label: "Events Executed",
    description: "Across all corporate formats.",
  },
  {
    number: "100,000+",
    label: "Participants Impacted",
    description: "Singapore & regional teams.",
  },
  {
    number: "8 Years",
    label: "of Excellence",
    description: "Professional, innovative, dependable.",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-center text-primary/60 text-sm tracking-[0.3em] uppercase font-sans mb-10">
            Trusted By Leading Brands
          </h3>

          {/* 6x4 Logo Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 mb-8">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="group"
              >
                <Link
                  to="/clients"
                  className="block aspect-[3/2] bg-card/50 border border-border-gold/20 rounded-lg flex items-center justify-center hover:border-primary/50 hover:shadow-gold-soft transition-all duration-300"
                >
                  <div className="w-16 h-8 md:w-20 md:h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                    <span className="text-primary/40 text-xs font-medium group-hover:text-primary/60 transition-colors">
                      Logo
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Clients Link */}
          <div className="text-center">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-ember transition-colors group"
            >
              <span className="text-sm font-medium">View All Clients</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Google Rating Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 border border-primary/30 rounded-xl px-8 py-6 overflow-hidden">
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star
                      className={`w-6 h-6 ${i < 5 ? "text-primary fill-primary" : "text-primary/30"}`}
                      style={{
                        filter: i < 5 ? "drop-shadow(0 0 6px hsl(43, 65%, 52%, 0.6))" : "none",
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Rating text */}
              <div className="text-center md:text-left">
                <span className="text-2xl md:text-3xl font-serif text-metallic-gold font-bold">
                  4.8 / 5.0
                </span>
                <span className="text-primary-soft/80 mx-3">—</span>
                <span className="text-muted-foreground">
                  Based on{" "}
                  <span className="text-primary-soft font-medium">600+</span> Google Reviews
                </span>
              </div>
            </div>

            <p className="text-center text-muted-foreground/80 text-sm mt-3 relative z-10">
              Trusted by companies all across Singapore.
            </p>
          </div>
        </motion.div>

        {/* Event Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-3">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold font-bold">
                    {stat.number}
                  </span>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-serif text-primary-soft mb-2">
                  {stat.label}
                </h4>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
