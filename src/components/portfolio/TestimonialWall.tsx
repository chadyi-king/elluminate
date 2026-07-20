import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Darren Tey",
    company: "Operations Manager, Lonza",
    eventType: "Team Experience",
    text: "All of us had a real fun blast and we have nothing but good things to say about the facilitators and the games!",
    rating: 5,
  },
  {
    id: 2,
    name: "Farzanah Begum",
    company: "Senior Officer for Development and Engagement, SIMTech",
    eventType: "Team Experience",
    text: "All our different departments have enjoyed the activities, from our newest members to our management teams.",
    rating: 5,
  },
];

export const TestimonialWall = () => {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
            4.8 / 5 from 800+ Google Reviews
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        {/* Testimonial Grid */}
        <div className="mx-auto grid max-w-5xl md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-background-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 0 30px hsl(43 65% 52% / 0.1)" }}
              />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/50 text-sm">{testimonial.company}</p>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-primary/20 text-primary rounded">
                  {testimonial.eventType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
