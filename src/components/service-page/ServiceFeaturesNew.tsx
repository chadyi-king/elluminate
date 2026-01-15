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
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920)` }}
        />
      </div>
      
      {/* Background glow with accent color */}
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
          <h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900"
          >
            WHAT TO EXPECT
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Features Grid */}
          <div className="space-y-6">
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                {/* Icon circle with accent color */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                
                <div>
                  <h3 
                    className="text-lg font-display font-bold mb-2"
                    style={{ color: accentColor }}
                  >
                    {feature.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img 
                src={image} 
                alt="Service experience" 
                className="w-full h-full object-cover"
              />
              {/* Accent color overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(135deg, ${accentColor}40 0%, transparent 70%)` }}
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
