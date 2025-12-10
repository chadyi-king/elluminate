import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface ServiceTestimonialNewProps {
  testimonials: Testimonial[];
  accentColor: string;
}

export const ServiceTestimonialNew = ({ testimonials, accentColor }: ServiceTestimonialNewProps) => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${accentColor}08` }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold mb-4">
            What Our Clients Say
          </h2>
          
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border-gold/20 rounded-full px-6 py-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 fill-current"
                  style={{ color: accentColor }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.8 / 600+ Verified Reviews
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card border rounded-xl p-6 group hover:border-opacity-40 transition-all duration-300"
              style={{ borderColor: `${accentColor}30` }}
            >
              {/* Quote icon */}
              <Quote 
                className="w-8 h-8 absolute top-4 right-4 opacity-20"
                style={{ color: accentColor }}
              />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-current"
                    style={{ color: accentColor }}
                  />
                ))}
              </div>
              
              <p className="text-foreground/90 mb-6 italic leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              
              <div 
                className="border-t pt-4"
                style={{ borderColor: `${accentColor}20` }}
              >
                <p className="font-display font-bold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
