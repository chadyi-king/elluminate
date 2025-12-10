import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { Sparkles, Heart, Trophy, Lightbulb, Globe, Zap } from "lucide-react";

const teamMembers = [
  {
    name: "Jonathan Lim",
    role: "Founder & Creative Director",
    bio: "With over 15 years in the events industry, Jonathan founded Team Elevate with a vision to transform corporate experiences into unforgettable masterpieces.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sarah Chen",
    role: "Head of Client Relations",
    bio: "Sarah brings warmth and precision to every client interaction, ensuring each event reflects the unique vision of our partners.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Marcus Tan",
    role: "Production Director",
    bio: "Marcus oversees all technical production, from stage design to AV systems, bringing cinematic quality to every event.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michelle Wong",
    role: "Creative Strategist",
    bio: "Michelle transforms concepts into immersive experiences, blending creativity with strategic thinking for maximum impact.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "David Ng",
    role: "Operations Manager",
    bio: "David ensures flawless execution of every event, coordinating teams and logistics with military precision.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Rachel Koh",
    role: "Design Lead",
    bio: "Rachel brings visual magic to every project, crafting stunning designs that elevate brand experiences.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  }
];

const values = [
  {
    letter: "C",
    title: "Creative",
    description: "Cinematic, memorable concepts that push boundaries and captivate audiences.",
    icon: Lightbulb,
    color: "from-amber-500 to-yellow-400"
  },
  {
    letter: "A",
    title: "Authentic",
    description: "Genuine human connection at the heart of every experience we craft.",
    icon: Heart,
    color: "from-rose-500 to-pink-400"
  },
  {
    letter: "L",
    title: "Lasting",
    description: "Creating enduring impact that resonates long after the event ends.",
    icon: Trophy,
    color: "from-emerald-500 to-green-400"
  },
  {
    letter: "E",
    title: "Exceptional",
    description: "Flawless execution and premium quality in every detail.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400"
  },
  {
    letter: "B",
    title: "Boundless",
    description: "Whatever clients dream of, we deliver. No limits, just possibilities.",
    icon: Globe,
    color: "from-violet-500 to-purple-400"
  },
  {
    letter: "E",
    title: "Eccentric",
    description: "A splash of crazy fun that makes every experience uniquely memorable.",
    icon: Zap,
    color: "from-orange-500 to-amber-400"
  }
];

const milestones = [
  { year: "2019", title: "Founded", description: "Team Elevate was born with a vision to revolutionize corporate events in Singapore." },
  { year: "2020", title: "Virtual Pivot", description: "Adapted swiftly to deliver groundbreaking virtual and hybrid experiences." },
  { year: "2021", title: "Regional Expansion", description: "Extended our reach across Southeast Asia with international events." },
  { year: "2022", title: "500+ Events", description: "Celebrated our 500th successful event with industry recognition." },
  { year: "2023", title: "Innovation Award", description: "Received Singapore's Most Innovative Event Company accolade." },
  { year: "2024", title: "1000+ Milestone", description: "Surpassed 1,000 events, impacting over 100,000 participants." }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <GoldParticles />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-display mb-4 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-wide">
              ABOUT <span className="text-metallic-gold">TEAM ELEVATE</span>
            </h1>
            <p className="text-lg text-muted-foreground font-display leading-relaxed">
              Since 2019, we've been Singapore's premier corporate event specialists, 
              transforming ordinary gatherings into extraordinary experiences that inspire, 
              connect, and create lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide uppercase">
              Our <span className="text-metallic-gold">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <span className="text-metallic-gold font-display font-bold text-2xl">{milestone.year}</span>
                    <h3 className="text-white font-display font-semibold text-lg mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground font-display text-sm mt-2">{milestone.description}</p>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-metallic-gold rounded-full border-4 border-background shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Framework - CALEBE */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide uppercase mb-4">
              The <span className="text-metallic-gold">CALEBE</span> Framework
            </h2>
            <p className="text-muted-foreground font-display max-w-2xl mx-auto">
              Our core values that guide every experience we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-background-deep/50 border border-border-gold/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-display font-bold text-xl">{value.letter}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-display font-bold text-lg">{value.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-display text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide uppercase mb-4">
              Meet Our <span className="text-metallic-gold">Team</span>
            </h2>
            <p className="text-muted-foreground font-display max-w-2xl mx-auto">
              The passionate professionals behind every masterpiece
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  
                  {/* Gold border effect */}
                  <div className="absolute inset-0 border border-primary/20 rounded-xl group-hover:border-primary/50 transition-colors duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-metallic-gold font-display text-sm tracking-wider uppercase mb-3">{member.role}</p>
                    <p className="text-muted-foreground font-display text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide uppercase mb-6">
              Ready to <span className="text-metallic-gold">Elevate</span> Your Event?
            </h2>
            <p className="text-muted-foreground font-display mb-8">
              Let's create something extraordinary together. Our team is ready to bring your vision to life.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary via-metallic-gold to-primary text-background font-display font-bold tracking-wider uppercase rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500"
            >
              Start Planning Your Event
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
