import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { 
  Target, Eye, Heart, Sparkles, Award, Zap, 
  Users, Lightbulb, Palette, Mic, Film, Star,
  ChevronRight, Quote
} from "lucide-react";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
};

const values = [
  { name: "Precision", icon: Target },
  { name: "Creativity", icon: Lightbulb },
  { name: "Energy", icon: Zap },
  { name: "Connection", icon: Users },
  { name: "Professionalism", icon: Award },
  { name: "Impact", icon: Sparkles },
  { name: "Excellence", icon: Star },
];

const features = [
  {
    icon: Palette,
    title: "Premium Event Craftsmanship",
    description: "We design events with intention — blending storytelling, facilitation, and production to create unforgettable moments."
  },
  {
    icon: Film,
    title: "Immersive, Story-Driven Experiences",
    description: "Our team builds unique team-building concepts inspired by film, theatre, and high-end game design."
  },
  {
    icon: Mic,
    title: "Professional Hosts & Facilitators",
    description: "Engaging, charismatic, and trusted by top organisations across Singapore."
  },
  {
    icon: Sparkles,
    title: "Cinematic Production Quality",
    description: "Lighting, music, sound, visuals — all designed to elevate the experience."
  }
];

const clientLogos = [
  { name: "DBS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DBS_Bank_Logo.svg/400px-DBS_Bank_Logo.svg.png" },
  { name: "OCBC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/OCBC_Bank_logo.svg/400px-OCBC_Bank_logo.svg.png" },
  { name: "UOB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/UOB_Logo.svg/400px-UOB_Logo.svg.png" },
  { name: "Singtel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Singtel_logo_2021.svg/400px-Singtel_logo_2021.svg.png" },
  { name: "Grab", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Grab_Logo.svg/400px-Grab_Logo.svg.png" },
  { name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/400px-Shopee.svg.png" },
  { name: "NTUC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/NTUC_FairPrice_logo.svg/400px-NTUC_FairPrice_logo.svg.png" },
  { name: "GovTech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/GovTech_Singapore_Logo.svg/400px-GovTech_Singapore_Logo.svg.png" },
  { name: "Sentosa", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Sentosa_logo.svg/400px-Sentosa_logo.svg.png" },
  { name: "SP Group", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SP_Group_logo.svg/400px-SP_Group_logo.svg.png" },
  { name: "SMRT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SMRT_Corporation_Logo.svg/400px-SMRT_Corporation_Logo.svg.png" },
  { name: "Prudential", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Prudential_plc_logo.svg/400px-Prudential_plc_logo.svg.png" },
  { name: "Marina Bay Sands", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Marina_Bay_Sands_Logo.svg/400px-Marina_Bay_Sands_Logo.svg.png" },
  { name: "CapitaLand", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CapitaLand_logo.svg/400px-CapitaLand_logo.svg.png" },
  { name: "Singapore Airlines", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/400px-Singapore_Airlines_Logo_2.svg.png" },
  { name: "Changi Airport", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Changi_Airport_Group_logo.svg/400px-Changi_Airport_Group_logo.svg.png" },
  { name: "StarHub", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/StarHub_Logo.svg/400px-StarHub_Logo.svg.png" },
  { name: "M1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/M1_Limited_logo.svg/400px-M1_Limited_logo.svg.png" },
  { name: "POSB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/POSB_Bank_logo.svg/400px-POSB_Bank_logo.svg.png" },
  { name: "Great Eastern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Great_Eastern_logo.svg/400px-Great_Eastern_logo.svg.png" },
  { name: "AIA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AIA_Group_logo.svg/400px-AIA_Group_logo.svg.png" },
  { name: "HSBC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/400px-HSBC_logo_%282018%29.svg.png" },
  { name: "Standard Chartered", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Standard_Chartered_%282021%29.svg/400px-Standard_Chartered_%282021%29.svg.png" },
  { name: "Maybank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Maybank_logo.svg/400px-Maybank_logo.svg.png" },
];

const testimonials = [
  {
    quote: "Team Elevate delivered the best team-building event we've ever had. The energy was incredible and our team is still talking about it months later.",
    company: "Shopee Singapore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/400px-Shopee.svg.png"
  },
  {
    quote: "Professional, energetic, and flawless execution. They understood our corporate culture perfectly and designed an experience that resonated with everyone.",
    company: "SP Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SP_Group_logo.svg/400px-SP_Group_logo.svg.png"
  },
  {
    quote: "Immersive activities with meaningful takeaways. Our employees left feeling connected and inspired. Highly recommend for any corporate event.",
    company: "NTUC Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/NTUC_FairPrice_logo.svg/400px-NTUC_FairPrice_logo.svg.png"
  }
];

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const eventsCounter = useCountUp(1000, 2500);
  const participantsCounter = useCountUp(100000, 3000);
  const reviewsCounter = useCountUp(600, 2000);
  const yearsCounter = useCountUp(8, 1500);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SECTION 1 - HERO BANNER */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <GoldParticles />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          {/* Spotlight effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            >
              <span className="text-metallic-gold">Where Moments</span>
              <br />
              <span className="text-foreground">Become Masterpieces</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground font-sans mb-10"
            >
              Singapore's Premier Corporate Event Specialists
            </motion.p>
            
            <motion.a
              href="/#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary via-primary-ember to-primary text-primary-foreground font-display font-bold text-lg tracking-wide rounded-full shadow-gold-intense hover:shadow-[0_0_60px_hsl(43,65%,52%,0.5)] transition-all duration-500"
            >
              <Sparkles className="w-5 h-5" />
              Plan Your Event With Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 2 - OUR STORY */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-ember mb-8" />
              
              <div className="space-y-6 text-muted-foreground font-sans text-lg leading-relaxed">
                <p>
                  Team Elevate was founded in Singapore with one belief: events should inspire lasting connection — not just fill a program.
                </p>
                <p>
                  Since 2019, we've transformed corporate gatherings into signature experiences through purposeful design, immersive engagement, and world-class facilitation.
                </p>
                <p>
                  What began as a passionate team of creators has grown into one of Singapore's most trusted partners, delivering <span className="text-primary font-semibold">1,000+ events</span> and engaging <span className="text-primary font-semibold">100,000+ participants</span> across the region.
                </p>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border-gold/30">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                  alt="Team Elevate Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Gold glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 3 - MISSION, VISION & VALUES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mission, Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border-gold/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center mb-6 shadow-gold">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    To elevate every event into a masterpiece of emotion, energy, and excellence.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border-gold/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center mb-6 shadow-gold">
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    To be Asia's most trusted creator of transformative corporate experiences.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border-gold/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center shadow-gold">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Our Values</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full hover:border-primary hover:shadow-gold transition-all duration-300"
                  >
                    <value.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-display font-semibold">{value.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 4 - WHAT MAKES US DIFFERENT */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              What Makes Us <span className="text-metallic-gold">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border-gold/30 rounded-2xl p-8 hover:border-primary/50 hover:shadow-gold transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center mb-6 shadow-gold group-hover:shadow-gold-intense transition-shadow duration-500">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 5 - KEY METRICS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        {/* Radiant glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Events Counter */}
            <motion.div
              ref={eventsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-metallic-gold mb-2">
                {eventsCounter.count.toLocaleString()}+
              </div>
              <p className="text-muted-foreground font-sans">Events Delivered</p>
            </motion.div>

            {/* Participants Counter */}
            <motion.div
              ref={participantsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-metallic-gold mb-2">
                {participantsCounter.count.toLocaleString()}+
              </div>
              <p className="text-muted-foreground font-sans">Participants Engaged</p>
            </motion.div>

            {/* Reviews Counter */}
            <motion.div
              ref={reviewsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-metallic-gold mb-2 flex items-center justify-center gap-2">
                4.8 <Star className="w-10 h-10 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground font-sans">{reviewsCounter.count}+ Five-Star Reviews</p>
            </motion.div>

            {/* Years Counter */}
            <motion.div
              ref={yearsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-metallic-gold mb-2">
                {yearsCounter.count}
              </div>
              <p className="text-muted-foreground font-sans">Years of Excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 6 - CLIENT LOGOS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Trusted By <span className="text-metallic-gold">Leading Brands</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto mb-12"
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group relative aspect-[3/2] bg-card/30 backdrop-blur-sm border border-border-gold/20 rounded-xl p-4 flex items-center justify-center hover:border-primary/50 hover:shadow-gold-soft transition-all duration-500 cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia saturate-[3] hue-rotate-[15deg] brightness-[0.85] group-hover:sepia-0 group-hover:saturate-100 group-hover:hue-rotate-0 group-hover:brightness-100"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/clients"
              className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:text-primary-glow transition-colors"
            >
              View All Clients
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 7 - TESTIMONIALS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              What Our <span className="text-metallic-gold">Clients Say</span>
            </h2>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.company}
                  initial={false}
                  animate={{
                    opacity: currentTestimonial === index ? 1 : 0,
                    x: currentTestimonial === index ? 0 : 100,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${currentTestimonial === index ? 'block' : 'hidden'}`}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border-gold/30 rounded-2xl p-10 text-center">
                    <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6" />
                    <p className="text-xl md:text-2xl text-foreground font-sans leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-card border border-border-gold/30 p-3 flex items-center justify-center">
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-primary font-display font-semibold">{testimonial.company}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Credibility Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 border border-primary/40 rounded-2xl p-8 text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xl font-display font-bold text-foreground">
              600+ Reviews • 4.8-Star Google Rating
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        {/* Gold spotlight */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t from-primary/30 via-primary/10 to-transparent blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Ready to <span className="text-metallic-gold">Elevate</span> Your Next Event?
            </h2>
            <p className="text-xl text-muted-foreground font-sans mb-10">
              Let's turn your next gathering into a masterpiece of connection and impact.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-12 py-6 bg-gradient-to-r from-primary via-primary-ember to-primary text-primary-foreground font-display font-bold text-lg tracking-wide rounded-full shadow-gold-intense hover:shadow-[0_0_80px_hsl(43,65%,52%,0.5)] transition-all duration-500"
            >
              <Sparkles className="w-6 h-6" />
              Start Planning With Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
