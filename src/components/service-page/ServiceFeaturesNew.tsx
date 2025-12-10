import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesNewProps {
  features: Feature[];
  accentColor: string;
  image?: string;
}

export const ServiceFeaturesNew = ({ features, accentColor, image }: ServiceFeaturesNewProps) => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-0 w-[500px] h-[400px] rounded-full blur-[120px]"
        style={{ backgroundColor: `${accentColor}08` }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold">
              What To Expect
            </h2>
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-card border border-border-gold/20 rounded-xl p-6 overflow-hidden"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${accentColor}08` }}
                />
                
                {/* Accent border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-40 rounded-xl transition-colors duration-300"
                  style={{ borderColor: 'transparent' }}
                />
                <div 
                  className="absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ borderColor: accentColor }}
                />

                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <feature.icon 
                      className="w-6 h-6 transition-colors"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src={image} 
                alt="Service experience" 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 70%)` }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
