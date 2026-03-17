import { motion } from "framer-motion";

// Import team member photos
import marcusTan from "@/assets/team/marcus-tan.jpg";
import rachelLim from "@/assets/team/rachel-lim.jpg";
import danielWong from "@/assets/team/daniel-wong.jpg";
import priyaSharma from "@/assets/team/priya-sharma.jpg";
import kevinLee from "@/assets/team/kevin-lee.jpg";
import michelleChen from "@/assets/team/michelle-chen.jpg";
import jasonNg from "@/assets/team/jason-ng.jpg";
import sarahGoh from "@/assets/team/sarah-goh.jpg";
import teamBuildingOutdoor from "@/assets/events/team-building-outdoor-1.jpg";

const teamMembers = [
  {
    name: "Marcus Tan",
    title: "Founder & Creative Director",
    image: marcusTan
  },
  {
    name: "Rachel Lim",
    title: "Head of Operations",
    image: rachelLim
  },
  {
    name: "Daniel Wong",
    title: "Lead Event Producer",
    image: danielWong
  },
  {
    name: "Priya Sharma",
    title: "Senior Experience Designer",
    image: priyaSharma
  },
  {
    name: "Kevin Lee",
    title: "Technical Director",
    image: kevinLee
  },
  {
    name: "Michelle Chen",
    title: "Client Relations Manager",
    image: michelleChen
  },
  {
    name: "Jason Ng",
    title: "Lead Facilitator",
    image: jasonNg
  },
  {
    name: "Sarah Goh",
    title: "Creative Producer",
    image: sarahGoh
  }
];

export const OurTeam = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={teamBuildingOutdoor}
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
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground/80 font-sans max-w-xl mx-auto text-sm">
            The planners, facilitators, and creative minds behind each Elluminate experience.
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