import { motion } from "framer-motion";

const behindScenes = [
  { id: 1, title: "Setup Crew", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
  { id: 2, title: "Stage Building", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600" },
  { id: 3, title: "Lighting Setup", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" },
  { id: 4, title: "Theming Prep", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600" },
  { id: 5, title: "Sound Check", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600" },
  { id: 6, title: "Rehearsals", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600" },
  { id: 7, title: "Décor Install", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600" },
  { id: 8, title: "Tech Check", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600" },
];

export const BehindTheScenes = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Behind the Scenes
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
          <p className="text-white/50 mt-4">Where the magic happens</p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="overflow-x-auto pb-6 -mx-6 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4"
          style={{ minWidth: "max-content" }}
        >
          {behindScenes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-72 h-48 rounded-xl overflow-hidden group flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Default overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-display font-bold">{item.title}</h3>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px hsl(43 65% 52% / 0.3)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
