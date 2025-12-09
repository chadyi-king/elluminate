import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

// Service data
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  features: string[];
}> = {
  "team-building": {
    title: "Corporate Team Building",
    subtitle: "Forge Stronger Bonds",
    description: "Transform your team dynamics with our expertly crafted team building experiences. We design engaging activities that foster collaboration, communication, and trust among team members, creating lasting connections that enhance workplace productivity and morale.",
    benefits: [
      "Enhanced team communication and collaboration",
      "Improved problem-solving capabilities",
      "Stronger interpersonal relationships",
      "Increased employee engagement and morale",
      "Better conflict resolution skills",
    ],
    features: [
      "Custom-designed activities for your team size",
      "Indoor and outdoor experience options",
      "Professional facilitators and coordinators",
      "Post-event analysis and recommendations",
    ],
  },
  "company-retreats": {
    title: "Company Retreats",
    subtitle: "Local & Overseas Escapes",
    description: "Escape the everyday and immerse your team in transformative retreat experiences. Whether local or international, we curate exclusive destinations and programs that combine strategic planning with memorable team bonding moments.",
    benefits: [
      "Fresh perspectives away from the office",
      "Strategic alignment and planning opportunities",
      "Team bonding in relaxed settings",
      "Cultural experiences and exploration",
      "Work-life balance reinforcement",
    ],
    features: [
      "Local and international destination options",
      "End-to-end logistics management",
      "Customized itinerary planning",
      "Luxury accommodation arrangements",
    ],
  },
  "dinner-and-dance": {
    title: "Dinner & Dance",
    subtitle: "Concept & Execution",
    description: "Elevate your corporate celebrations with spectacular Dinner & Dance events. From elegant galas to themed extravaganzas, we create unforgettable evenings that celebrate your organization's achievements and bring teams together in style.",
    benefits: [
      "Employee recognition and appreciation",
      "Enhanced company culture and morale",
      "Networking opportunities across departments",
      "Celebration of milestones and achievements",
      "Memorable shared experiences",
    ],
    features: [
      "Thematic concept development",
      "Venue sourcing and decoration",
      "Entertainment and performance curation",
      "Gourmet catering coordination",
    ],
  },
  "awards-ceremonies": {
    title: "Awards Ceremonies",
    subtitle: "Celebrate Excellence",
    description: "Honor your achievers with prestigious award ceremonies that leave lasting impressions. We design and execute ceremonies that spotlight excellence, inspire teams, and create moments of genuine recognition and pride.",
    benefits: [
      "Motivation through recognition",
      "Reinforcement of company values",
      "Inspiration for future achievements",
      "Enhanced employer brand perception",
      "Documented moments of success",
    ],
    features: [
      "Award category development",
      "Presentation flow choreography",
      "Trophy and certificate design",
      "Red carpet and VIP experiences",
    ],
  },
  "corporate-anniversaries": {
    title: "Corporate Anniversaries",
    subtitle: "Milestones Worth Celebrating",
    description: "Mark your company's journey with anniversary celebrations that honor your history while looking toward the future. We create meaningful events that bring together employees, clients, and stakeholders in celebration of your success.",
    benefits: [
      "Recognition of company heritage",
      "Strengthened stakeholder relationships",
      "Enhanced brand storytelling",
      "Employee pride and loyalty boost",
      "Media and PR opportunities",
    ],
    features: [
      "Historical storytelling integration",
      "Multi-generational engagement activities",
      "Legacy documentation and displays",
      "Commemorative merchandise creation",
    ],
  },
  "leadership-offsites": {
    title: "Leadership Offsites",
    subtitle: "Strategic Retreats",
    description: "Empower your leadership team with focused offsite experiences designed for strategic thinking and team alignment. Our executive retreats combine productive sessions with premium hospitality for maximum impact.",
    benefits: [
      "Uninterrupted strategic planning time",
      "Leadership team cohesion",
      "Cross-functional collaboration",
      "Vision alignment and goal setting",
      "Executive wellness and recharge",
    ],
    features: [
      "Exclusive venue selection",
      "Workshop facilitation and moderation",
      "Executive-level catering and amenities",
      "Confidential environment assurance",
    ],
  },
  "product-launch": {
    title: "Product Launch Events",
    subtitle: "Make an Impact",
    description: "Launch your products with the fanfare they deserve. We create immersive launch experiences that generate buzz, engage your audience, and position your brand for maximum market impact.",
    benefits: [
      "Strong first impressions in the market",
      "Media coverage and social buzz",
      "Customer and partner engagement",
      "Brand differentiation and positioning",
      "Sales momentum generation",
    ],
    features: [
      "Concept and creative direction",
      "Experiential activation design",
      "Live demonstration coordination",
      "Press and influencer management",
    ],
  },
  "brand-activations": {
    title: "Brand Activations",
    subtitle: "Experience Your Brand",
    description: "Bring your brand to life through immersive activation experiences that connect with your audience on a deeper level. We design interactive touchpoints that create memorable brand encounters and lasting impressions.",
    benefits: [
      "Increased brand awareness and recall",
      "Direct consumer engagement",
      "User-generated content opportunities",
      "Data collection and insights",
      "Brand loyalty cultivation",
    ],
    features: [
      "Experiential concept development",
      "Interactive installation design",
      "Brand ambassador training",
      "Measurable engagement tracking",
    ],
  },
  "client-appreciation": {
    title: "Client Appreciation Events",
    subtitle: "Thank You, Elevated",
    description: "Show your valued clients the appreciation they deserve with exclusive events designed to strengthen relationships and demonstrate your commitment to partnership excellence.",
    benefits: [
      "Strengthened client relationships",
      "Enhanced client retention",
      "Referral opportunities",
      "Brand loyalty reinforcement",
      "Exclusive networking platforms",
    ],
    features: [
      "VIP experience curation",
      "Personalized touch coordination",
      "Gift and takeaway design",
      "Relationship-building activities",
    ],
  },
  "town-halls": {
    title: "Town Halls & Conferences",
    subtitle: "Unite & Inspire",
    description: "Communicate effectively with your entire organization through professionally executed town halls and conferences. We ensure your message lands with impact while creating engaging experiences for all attendees.",
    benefits: [
      "Clear organizational communication",
      "Employee alignment and engagement",
      "Q&A and feedback opportunities",
      "Leadership visibility and access",
      "Unified company direction",
    ],
    features: [
      "Technical production management",
      "Hybrid event capabilities",
      "Interactive polling and Q&A",
      "Content and presentation support",
    ],
  },
  "immersive-experiences": {
    title: "Immersive Experiences",
    subtitle: "Theme-Based Journeys",
    description: "Transport your guests into extraordinary worlds with fully immersive themed experiences. We create multisensory environments that captivate, engage, and leave lasting impressions on every attendee.",
    benefits: [
      "Unforgettable guest experiences",
      "Enhanced emotional engagement",
      "Strong social media content creation",
      "Brand differentiation opportunities",
      "Lasting memory formation",
    ],
    features: [
      "World-building and storytelling",
      "Set design and construction",
      "Character and performer casting",
      "Sensory experience integration",
    ],
  },
  "wellness-events": {
    title: "Wellness Events",
    subtitle: "Mindfulness & Balance",
    description: "Promote employee wellbeing with thoughtfully designed wellness events that nurture mind, body, and spirit. From meditation sessions to fitness challenges, we create experiences that support holistic health.",
    benefits: [
      "Improved employee wellbeing",
      "Reduced workplace stress",
      "Enhanced work-life balance awareness",
      "Team bonding through shared wellness",
      "Positive workplace culture reinforcement",
    ],
    features: [
      "Wellness activity curation",
      "Expert facilitator sourcing",
      "Healthy catering options",
      "Takeaway wellness resources",
    ],
  },
  "event-concept": {
    title: "Event Concept Development",
    subtitle: "Storytelling & Strategy",
    description: "Every great event starts with a compelling concept. Our creative team develops unique event narratives that align with your objectives and create cohesive experiences from invitation to farewell.",
    benefits: [
      "Distinctive event identity",
      "Cohesive guest experience",
      "Clear messaging and objectives",
      "Creative differentiation",
      "Strategic event positioning",
    ],
    features: [
      "Creative brainstorming sessions",
      "Concept mood boards and presentations",
      "Theme narrative development",
      "Experience journey mapping",
    ],
  },
  "stage-production": {
    title: "Stage Design & AV Production",
    subtitle: "Spectacular Presentations",
    description: "Create stunning visual environments with our comprehensive stage design and AV production services. We combine technical expertise with creative vision to deliver productions that captivate and inspire.",
    benefits: [
      "Professional presentation quality",
      "Enhanced audience engagement",
      "Seamless technical execution",
      "Visual impact and memorability",
      "Content amplification",
    ],
    features: [
      "Stage design and construction",
      "Lighting design and operation",
      "Sound system engineering",
      "Video and LED wall production",
    ],
  },
  "custom-themes": {
    title: "Custom Theme Creation",
    subtitle: "Your Vision, Realized",
    description: "Transform any space with custom themes that transport guests to new worlds. Our design team creates bespoke environments that align perfectly with your event objectives and brand identity.",
    benefits: [
      "Unique event atmosphere",
      "Brand alignment and extension",
      "Instagram-worthy moments",
      "Immersive guest experience",
      "Memorable photo opportunities",
    ],
    features: [
      "Theme conceptualization",
      "Props and décor design",
      "Fabrication and installation",
      "On-site styling and dressing",
    ],
  },
  "emcee-services": {
    title: "Emcee / Photo / Video Services",
    subtitle: "Capture Every Moment",
    description: "Ensure your event is professionally hosted and beautifully documented with our emcee and media services. From charismatic hosts to award-winning photographers and videographers.",
    benefits: [
      "Professional event flow management",
      "High-quality documentation",
      "Engagement and energy maintenance",
      "Marketing content creation",
      "Lasting event memories",
    ],
    features: [
      "Professional emcee selection",
      "Photography coverage",
      "Videography and editing",
      "Same-day edit capabilities",
    ],
  },
  "vip-gala": {
    title: "VIP Gala Experiences",
    subtitle: "Red-Carpet Moments",
    description: "Create exclusive, high-end gala experiences that make every guest feel like a star. From red carpet arrivals to champagne farewells, we orchestrate evenings of pure luxury and sophistication.",
    benefits: [
      "Prestigious event positioning",
      "VIP guest treatment",
      "Exclusive networking environment",
      "Brand elevation opportunities",
      "Memorable luxury experiences",
    ],
    features: [
      "Red carpet and arrival experiences",
      "Premium venue sourcing",
      "Fine dining curation",
      "Celebrity and VIP management",
    ],
  },
  "family-fun-days": {
    title: "Family Fun Days",
    subtitle: "Joy for All Ages",
    description: "Bring families together with fun-filled days that create lasting memories across generations. We design inclusive activities and entertainment that engage employees and their loved ones.",
    benefits: [
      "Work-life balance demonstration",
      "Family inclusion and appreciation",
      "Intergenerational bonding",
      "Employee loyalty enhancement",
      "Community building",
    ],
    features: [
      "Age-appropriate activity zones",
      "Entertainment and games",
      "Family-friendly catering",
      "Safety and logistics management",
    ],
  },
  "corporate-carnivals": {
    title: "Corporate Carnivals",
    subtitle: "Festival Vibes",
    description: "Transform your corporate event into a vibrant carnival experience filled with games, food, and entertainment. We create festival-style atmospheres that encourage interaction and celebration.",
    benefits: [
      "High energy and engagement",
      "Interactive experiences for all",
      "Casual networking environment",
      "Fun and relaxed atmosphere",
      "Unique event format",
    ],
    features: [
      "Carnival game booths",
      "Food stall coordination",
      "Live entertainment",
      "Prize and reward systems",
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-metallic-gold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GoldParticles />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background" />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
              {service.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-metallic-gold mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background-deep">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary-soft mb-12">
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card/50 border border-border-gold/20 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary-soft mb-12">
              What's Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-deep relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-metallic-gold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can create an extraordinary {service.title.toLowerCase()} experience for your team.
            </p>
            <Button variant="hero" size="xl">
              Start Planning
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
