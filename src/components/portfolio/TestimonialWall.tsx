import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Tech Solutions Pte Ltd",
    eventType: "Annual D&D",
    text: "Team Elevate transformed our annual dinner into an unforgettable experience. The attention to detail was impeccable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Tan",
    company: "Global Finance Group",
    eventType: "Team Building",
    text: "The best team building event we've ever had. Our employees are still talking about it months later!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Lee",
    company: "Healthcare Corp",
    eventType: "Awards Ceremony",
    text: "Professional, creative, and absolutely stunning execution. They truly elevated our awards night.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wong",
    company: "Luxury Retail Brand",
    eventType: "Product Launch",
    text: "Our product launch exceeded all expectations. The immersive experience they created was truly world-class.",
    rating: 5,
  },
  {
    id: 5,
    name: "Amanda Lim",
    company: "Engineering Solutions",
    eventType: "Corporate Retreat",
    text: "From planning to execution, everything was seamless. Our team came back more connected than ever.",
    rating: 5,
  },
  {
    id: 6,
    name: "Kevin Ng",
    company: "Insurance Partners",
    eventType: "Gala Night",
    text: "The venue transformation was breathtaking. Our guests were in awe from the moment they arrived.",
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
            4.8 / 600+ Verified Google Reviews
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
