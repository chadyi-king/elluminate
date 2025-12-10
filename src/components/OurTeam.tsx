import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Marcus Tan",
    title: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Rachel Lim",
    title: "Head of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Daniel Wong",
    title: "Lead Event Producer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma",
    title: "Senior Experience Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Kevin Lee",
    title: "Technical Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michelle Chen",
    title: "Client Relations Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Jason Ng",
    title: "Lead Facilitator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sarah Goh",
    title: "Creative Producer",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face"
  }
];

export const OurTeam = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Team Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3">
            Our <span className="text-metallic-gold">Team</span>
          </h2>
          <p className="text-muted-foreground/80 font-sans max-w-xl mx-auto text-sm">
            The passionate professionals behind every masterpiece experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <div className="aspect-square overflow-hidden rounded-xl border border-border-gold/30 group-hover:border-primary/50 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-foreground font-display font-medium text-sm mb-1">{member.name}</h3>
              <p className="text-primary/80 text-xs font-sans">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
