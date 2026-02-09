import { motion } from "framer-motion";

interface Theme {
  name: string;
  image: string;
}

interface ServiceThemesProps {
  themes: Theme[];
}

export const ServiceThemes = ({ themes }: ServiceThemesProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Custom Themes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated collection or create your own unique theme
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${theme.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Gold border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 rounded-xl transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {theme.name}
                </h3>
              </div>
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
