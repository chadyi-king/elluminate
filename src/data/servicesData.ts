import { LucideIcon, Mic, Palette, Monitor, Gamepad2, Trophy, Music, Camera, Sparkles, Users, Heart, Star, Zap, PartyPopper, Wine, Lightbulb, Target, Clock, Gift, Crown, MapPin, Gem, Rocket, Building, Award, CalendarDays, Plane, Flag, Lock, Home, Theater, Dumbbell, Video, PenTool, Volume2, Megaphone, Handshake, GraduationCap, Globe, Briefcase } from "lucide-react";

export interface ServiceData {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    backgroundImage: string;
  };
  overview: {
    description: string;
    backgroundImage: string;
  };
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  timeline?: {
    title: string;
    steps: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
  };
  themes?: {
    name: string;
    image: string;
  }[];
  moments?: {
    title: string;
    items: {
      icon: LucideIcon;
      title: string;
    }[];
  };
  behindScenes?: {
    content: string;
    backgroundImage: string;
  };
  gallery: string[];
  testimonials: {
    quote: string;
    author: string;
    company: string;
  }[];
  cta: {
    headline: string;
    subtext: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "dinner-and-dance": {
    hero: {
      title: "Welcome to the Grand Gala: Dinner & Dance",
      subtitle: "Premium Celebration",
      tagline: "Tonight, the spotlight belongs to you. Dress sharp, shine bright — the stage is yours.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    overview: {
      description: "A premium, fully hosted Dinner & Dance experience crafted to celebrate your people with elegance, laughter, and unforgettable moments. Whether you're hosting a formal awards gala, a high-energy dance party, or a themed extravaganza, Team Elevate brings cinematic production value, professional hosting, and crowd-driven engagement to make your night legendary.",
      backgroundImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920"
    },
    features: [
      { icon: Mic, title: "Professional Emcee & Show Host", description: "Charismatic hosts who command the room and keep the energy high throughout the night." },
      { icon: Palette, title: "Event Concept & Storyline Design", description: "Custom narratives that transform your event into an immersive experience." },
      { icon: Monitor, title: "Stage & AV Production", description: "State-of-the-art sound, lighting, and visuals for a cinematic atmosphere." },
      { icon: Gamepad2, title: "Interactive Games & Engagement", description: "Fun activities that get everyone involved and create lasting memories." },
      { icon: Trophy, title: "Awards & Recognition Moments", description: "Spotlight celebrations that honor your team's achievements." },
      { icon: Music, title: "Dance, Party & Music Flow", description: "Curated playlists and performances that keep the dance floor alive." }
    ],
    benefits: [
      { icon: Camera, title: "Cinematic Experiences", description: "Your event feels like stepping into a show." },
      { icon: Sparkles, title: "Engaging, Not Awkward", description: "Only high energy, no dull moments." },
      { icon: Users, title: "Crowd-Interactive Hosting", description: "Professional emcees who activate your audience." },
      { icon: Star, title: "High-Impact Moments", description: "Grand entrances, big reveals, spotlight celebrations." },
      { icon: Heart, title: "Designed for Celebration", description: "Perfect for appreciation nights, awards, and milestones." }
    ],
    timeline: {
      title: "A Night to Remember",
      steps: [
        { icon: Crown, title: "Red Carpet Welcome", description: "VIP arrivals" },
        { icon: Sparkles, title: "Grand Opening", description: "Spectacular reveal" },
        { icon: Wine, title: "Dinner & Shows", description: "Fine dining" },
        { icon: Gamepad2, title: "Interactive Games", description: "Team fun" },
        { icon: Trophy, title: "Awards Ceremony", description: "Recognition" },
        { icon: Music, title: "Dance Party", description: "Celebration" }
      ]
    },
    themes: [
      { name: "Great Gatsby Glam", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800" },
      { name: "Hollywood Black & Gold", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800" },
      { name: "Masquerade Royale", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800" },
      { name: "Futuristic Neon Gold", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800" },
      { name: "Retro Disco Fever", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
      { name: "Elegant White & Gold Ball", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800" }
    ],
    moments: {
      title: "Signature Moments",
      items: [
        { icon: PartyPopper, title: "Confetti Blast Entrance" },
        { icon: Crown, title: "CEO Grand Reveal Moment" },
        { icon: Gift, title: "Lucky Draw Showdown" },
        { icon: Music, title: "Dance-Off Challenge" },
        { icon: Trophy, title: "Awards Spotlight Walk" }
      ]
    },
    behindScenes: {
      content: "We craft every Dinner & Dance like a live production — storyboards, lighting cues, sound design, timing flow, and emotional pacing. Nothing is accidental. Everything is designed for impact.",
      backgroundImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920"
    },
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800"
    ],
    testimonials: [
      { quote: "The best Dinner & Dance we've ever experienced. The energy, hosting, and atmosphere were perfect.", author: "Sarah Lim", company: "SP Group Singapore" },
      { quote: "Team Elevate transformed our annual gala into an unforgettable Hollywood experience.", author: "Michael Tan", company: "DBS Bank" },
      { quote: "Every detail was perfect. Our team is still talking about that night!", author: "Jennifer Wong", company: "Singtel" }
    ],
    cta: {
      headline: "Ready to Create a Night Your Team Will Never Forget?",
      subtext: "Let's bring your Dinner & Dance vision to life with cinematic precision and unforgettable moments."
    }
  },
  "team-building": {
    hero: {
      title: "Corporate Team Building Excellence",
      subtitle: "Forge Stronger Bonds",
      tagline: "Where collaboration becomes an adventure and teams discover their true potential.",
      backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
    },
    overview: {
      description: "Transform your team dynamics with our expertly crafted team building experiences. We design engaging activities that foster collaboration, communication, and trust among team members, creating lasting connections that enhance workplace productivity and morale. From outdoor adventures to creative challenges, every activity is designed to bring out the best in your people.",
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920"
    },
    features: [
      { icon: Users, title: "Custom Team Activities", description: "Tailored experiences designed specifically for your team's dynamics and goals." },
      { icon: Target, title: "Goal-Oriented Challenges", description: "Strategic activities that align with your corporate objectives." },
      { icon: Lightbulb, title: "Creative Problem Solving", description: "Innovative challenges that spark creativity and collaboration." },
      { icon: Heart, title: "Trust Building Exercises", description: "Activities designed to strengthen interpersonal bonds." },
      { icon: Trophy, title: "Friendly Competition", description: "Engaging games that bring out healthy competitive spirit." },
      { icon: Sparkles, title: "Professional Facilitation", description: "Expert facilitators who guide and energize your team." }
    ],
    benefits: [
      { icon: Users, title: "Enhanced Collaboration", description: "Break silos and foster cross-team connections." },
      { icon: Zap, title: "Boosted Morale", description: "Energize your team with fun, engaging experiences." },
      { icon: Target, title: "Improved Communication", description: "Build stronger communication channels." },
      { icon: Heart, title: "Stronger Relationships", description: "Create lasting bonds beyond the workplace." },
      { icon: Lightbulb, title: "Creative Thinking", description: "Unlock innovative problem-solving skills." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
    ],
    testimonials: [
      { quote: "Our team came back energized and more connected than ever. Amazing experience!", author: "David Chen", company: "Google Singapore" },
      { quote: "The activities were perfectly tailored to our team's needs. Highly recommended!", author: "Amanda Lee", company: "Grab Holdings" },
      { quote: "Professional, engaging, and truly transformative for our team dynamics.", author: "Robert Tan", company: "Shopee" }
    ],
    cta: {
      headline: "Ready to Transform Your Team?",
      subtext: "Let's design an unforgettable team building experience that brings your people together."
    }
  },
  "awards-ceremonies": {
    hero: {
      title: "Prestigious Awards Ceremonies",
      subtitle: "Celebrate Excellence",
      tagline: "Where achievements shine and excellence takes center stage.",
      backgroundImage: "https://images.unsplash.com/photo-1607892378846-1e3d9fde6ed5?w=1920"
    },
    overview: {
      description: "Honor your achievers with prestigious award ceremonies that leave lasting impressions. We design and execute ceremonies that spotlight excellence, inspire teams, and create moments of genuine recognition and pride. From intimate appreciation events to grand galas, we make every award moment unforgettable.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Trophy, title: "Award Category Development", description: "Strategic categories that recognize diverse achievements." },
      { icon: Mic, title: "Professional Hosting", description: "Charismatic emcees who elevate every moment." },
      { icon: Crown, title: "Red Carpet Experience", description: "VIP arrivals that make everyone feel like a star." },
      { icon: Camera, title: "Cinematic Production", description: "Stunning visuals and lighting for dramatic impact." },
      { icon: Gift, title: "Custom Trophy Design", description: "Unique awards that symbolize excellence." },
      { icon: Music, title: "Celebratory Entertainment", description: "Music and performances that enhance the mood." }
    ],
    benefits: [
      { icon: Star, title: "Employee Motivation", description: "Recognition that inspires continued excellence." },
      { icon: Heart, title: "Cultural Reinforcement", description: "Celebrate and strengthen company values." },
      { icon: Users, title: "Team Pride", description: "Create shared moments of achievement." },
      { icon: Sparkles, title: "Memorable Moments", description: "Unforgettable experiences for honorees." },
      { icon: Camera, title: "Documentation", description: "Professional capture of milestone moments." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607892378846-1e3d9fde6ed5?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
    ],
    testimonials: [
      { quote: "The most professionally executed awards ceremony we've ever had.", author: "Patricia Goh", company: "OCBC Bank" },
      { quote: "Our employees felt truly valued. The attention to detail was exceptional.", author: "James Lim", company: "CapitaLand" },
      { quote: "Team Elevate made our recognition night absolutely spectacular.", author: "Michelle Teo", company: "Marina Bay Sands" }
    ],
    cta: {
      headline: "Ready to Celebrate Your Achievers?",
      subtext: "Let's create an awards ceremony that honors excellence and inspires greatness."
    }
  },
  "corporate-anniversaries": {
    hero: {
      title: "Corporate Anniversary Celebrations",
      subtitle: "Milestones Worth Celebrating",
      tagline: "Honoring your journey, celebrating your legacy, inspiring your future.",
      backgroundImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920"
    },
    overview: {
      description: "Mark your company's journey with anniversary celebrations that honor your history while looking toward the future. We create meaningful events that bring together employees, clients, and stakeholders in celebration of your success. Every milestone deserves a celebration that reflects your company's unique story.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: CalendarDays, title: "Historical Storytelling", description: "Showcase your company's journey through compelling narratives." },
      { icon: Users, title: "Multi-Generational Engagement", description: "Activities that connect past, present, and future employees." },
      { icon: Camera, title: "Legacy Documentation", description: "Professional capture of your milestone celebration." },
      { icon: Gift, title: "Commemorative Merchandise", description: "Custom memorabilia for lasting memories." },
      { icon: Mic, title: "Executive Speeches", description: "Professionally produced keynote moments." },
      { icon: Sparkles, title: "Surprise Elements", description: "Unexpected moments that delight and impress." }
    ],
    benefits: [
      { icon: Heart, title: "Heritage Recognition", description: "Honor the legacy that built your company." },
      { icon: Users, title: "Stakeholder Connection", description: "Strengthen relationships with all stakeholders." },
      { icon: Star, title: "Brand Storytelling", description: "Amplify your brand narrative." },
      { icon: Trophy, title: "Employee Pride", description: "Boost loyalty through shared celebration." },
      { icon: Megaphone, title: "PR Opportunities", description: "Generate positive media coverage." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800"
    ],
    testimonials: [
      { quote: "Our 25th anniversary was absolutely magical. Team Elevate exceeded all expectations.", author: "William Koh", company: "Keppel Corporation" },
      { quote: "The perfect blend of nostalgia and celebration. Our employees loved it!", author: "Grace Tan", company: "ST Engineering" },
      { quote: "A truly memorable milestone celebration that honored our company's legacy.", author: "Andrew Lim", company: "ComfortDelGro" }
    ],
    cta: {
      headline: "Ready to Celebrate Your Milestone?",
      subtext: "Let's honor your company's journey with a celebration worthy of your achievements."
    }
  },
  "leadership-offsites": {
    hero: {
      title: "Executive Leadership Offsites",
      subtitle: "Strategic Retreats",
      tagline: "Where vision meets strategy in inspiring settings.",
      backgroundImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920"
    },
    overview: {
      description: "Empower your leadership team with focused offsite experiences designed for strategic thinking and team alignment. Our executive retreats combine productive sessions with premium hospitality for maximum impact. Step away from the office to gain fresh perspectives and align on your organization's future.",
      backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920"
    },
    features: [
      { icon: MapPin, title: "Exclusive Venue Selection", description: "Premium locations that inspire strategic thinking." },
      { icon: Users, title: "Workshop Facilitation", description: "Expert moderators for productive sessions." },
      { icon: Wine, title: "Executive Hospitality", description: "Premium catering and amenities throughout." },
      { icon: Lock, title: "Confidential Environment", description: "Secure settings for sensitive discussions." },
      { icon: Target, title: "Goal Alignment", description: "Structured activities for vision alignment." },
      { icon: Lightbulb, title: "Innovation Sessions", description: "Creative thinking workshops for breakthrough ideas." }
    ],
    benefits: [
      { icon: Clock, title: "Uninterrupted Focus", description: "Dedicated time for strategic planning." },
      { icon: Users, title: "Team Cohesion", description: "Strengthen leadership team bonds." },
      { icon: Target, title: "Vision Alignment", description: "Unified direction and goals." },
      { icon: Heart, title: "Executive Wellness", description: "Recharge while strategizing." },
      { icon: Lightbulb, title: "Fresh Perspectives", description: "New environment sparks new ideas." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
    ],
    testimonials: [
      { quote: "The most productive leadership retreat we've ever had. Exceptional facilitation.", author: "Richard Lee", company: "Temasek Holdings" },
      { quote: "Perfect balance of strategic sessions and team bonding activities.", author: "Susan Chong", company: "Singapore Airlines" },
      { quote: "Team Elevate understood exactly what our leadership team needed.", author: "Kenneth Tan", company: "UOB Bank" }
    ],
    cta: {
      headline: "Ready to Align Your Leadership Team?",
      subtext: "Let's design a strategic offsite that transforms vision into action."
    }
  },
  "product-launch": {
    hero: {
      title: "Spectacular Product Launch Events",
      subtitle: "Make an Impact",
      tagline: "Where products become experiences and launches become legends.",
      backgroundImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920"
    },
    overview: {
      description: "Launch your products with the fanfare they deserve. We create immersive launch experiences that generate buzz, engage your audience, and position your brand for maximum market impact. From intimate reveals to grand spectacles, every launch is designed to make your product unforgettable.",
      backgroundImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920"
    },
    features: [
      { icon: Rocket, title: "Concept & Creative Direction", description: "Innovative ideas that showcase your product's uniqueness." },
      { icon: Sparkles, title: "Experiential Activation", description: "Interactive elements that engage all senses." },
      { icon: Monitor, title: "Live Demonstrations", description: "Compelling product showcases that wow audiences." },
      { icon: Camera, title: "Media Management", description: "Press and influencer coordination for maximum coverage." },
      { icon: Mic, title: "Professional Presentation", description: "Expert hosting and product storytelling." },
      { icon: Music, title: "Atmosphere Design", description: "Audio-visual experiences that amplify impact." }
    ],
    benefits: [
      { icon: Star, title: "Strong First Impressions", description: "Launch with maximum market impact." },
      { icon: Megaphone, title: "Media Buzz", description: "Generate coverage and social engagement." },
      { icon: Users, title: "Audience Engagement", description: "Connect deeply with your target market." },
      { icon: Gem, title: "Brand Differentiation", description: "Stand out from the competition." },
      { icon: Zap, title: "Sales Momentum", description: "Build excitement that drives conversions." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800"
    ],
    testimonials: [
      { quote: "Our product launch exceeded all expectations. The buzz was incredible!", author: "Emily Tan", company: "Samsung Singapore" },
      { quote: "Team Elevate created an experience our customers are still talking about.", author: "Jason Lee", company: "Apple Southeast Asia" },
      { quote: "The perfect blend of showmanship and substance. Highly recommended!", author: "Rachel Koh", company: "Sony Singapore" }
    ],
    cta: {
      headline: "Ready to Launch with Impact?",
      subtext: "Let's create a product launch that captures attention and drives results."
    }
  },
  "brand-activations": {
    hero: {
      title: "Immersive Brand Activations",
      subtitle: "Experience Your Brand",
      tagline: "Where brands come alive and connections become lasting.",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
    },
    overview: {
      description: "Bring your brand to life through immersive activation experiences that connect with your audience on a deeper level. We design interactive touchpoints that create memorable brand encounters and lasting impressions. Transform passive consumers into active brand advocates.",
      backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
    },
    features: [
      { icon: Palette, title: "Experiential Concept Development", description: "Creative strategies that bring your brand story to life." },
      { icon: Sparkles, title: "Interactive Installations", description: "Engaging touchpoints that invite participation." },
      { icon: Users, title: "Brand Ambassador Training", description: "Staff who embody your brand values." },
      { icon: Target, title: "Engagement Tracking", description: "Measurable metrics for ROI analysis." },
      { icon: Camera, title: "Content Generation", description: "Social-worthy moments for organic reach." },
      { icon: Gift, title: "Memorable Takeaways", description: "Branded experiences they'll remember." }
    ],
    benefits: [
      { icon: Star, title: "Brand Awareness", description: "Increased recall and recognition." },
      { icon: Users, title: "Direct Engagement", description: "Personal connections with consumers." },
      { icon: Camera, title: "UGC Opportunities", description: "Content your audience creates for you." },
      { icon: Target, title: "Data Insights", description: "Valuable consumer behavior data." },
      { icon: Heart, title: "Brand Loyalty", description: "Emotional connections that last." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    testimonials: [
      { quote: "Our brand activation drove incredible engagement and social buzz.", author: "Amanda Wong", company: "Nike Singapore" },
      { quote: "Team Elevate truly understood our brand and brought it to life beautifully.", author: "Marcus Lim", company: "Coca-Cola Singapore" },
      { quote: "The activation exceeded our KPIs and created lasting brand memories.", author: "Jessica Tan", company: "Red Bull Asia" }
    ],
    cta: {
      headline: "Ready to Activate Your Brand?",
      subtext: "Let's create experiences that turn audiences into advocates."
    }
  },
  "client-appreciation": {
    hero: {
      title: "VIP Client Appreciation Events",
      subtitle: "Thank You, Elevated",
      tagline: "Because your valued clients deserve experiences as exceptional as they are.",
      backgroundImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920"
    },
    overview: {
      description: "Show your valued clients the appreciation they deserve with exclusive events designed to strengthen relationships and demonstrate your commitment to partnership excellence. Every detail is crafted to make your clients feel valued, special, and connected to your brand.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Crown, title: "VIP Experience Curation", description: "Exclusive experiences that make clients feel special." },
      { icon: Gift, title: "Personalized Touches", description: "Custom details that show you truly know them." },
      { icon: Wine, title: "Premium Hospitality", description: "Finest food, drinks, and service." },
      { icon: Users, title: "Relationship Activities", description: "Engagements that strengthen bonds." },
      { icon: Sparkles, title: "Surprise & Delight", description: "Unexpected moments that impress." },
      { icon: Camera, title: "Memory Creation", description: "Professional documentation of the experience." }
    ],
    benefits: [
      { icon: Heart, title: "Strengthened Relationships", description: "Deeper client connections." },
      { icon: Star, title: "Enhanced Retention", description: "Clients who stay and grow." },
      { icon: Users, title: "Referral Opportunities", description: "Happy clients spread the word." },
      { icon: Gem, title: "Brand Loyalty", description: "Emotional investment in your brand." },
      { icon: Handshake, title: "Exclusive Networking", description: "Connect clients with each other." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800"
    ],
    testimonials: [
      { quote: "Our clients felt truly valued. The event strengthened our partnerships significantly.", author: "Jonathan Ng", company: "Credit Suisse" },
      { quote: "The attention to personalization was exceptional. Each client felt special.", author: "Diana Teo", company: "Standard Chartered" },
      { quote: "A masterclass in client appreciation. Team Elevate delivers excellence.", author: "Victor Chua", company: "Julius Baer" }
    ],
    cta: {
      headline: "Ready to Appreciate Your Clients?",
      subtext: "Let's create experiences that turn clients into lifelong partners."
    }
  },
  "town-halls": {
    hero: {
      title: "Town Halls & Corporate Conferences",
      subtitle: "Unite & Inspire",
      tagline: "Where leadership connects with teams and vision becomes shared purpose.",
      backgroundImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920"
    },
    overview: {
      description: "Communicate effectively with your entire organization through professionally executed town halls and conferences. We ensure your message lands with impact while creating engaging experiences for all attendees. From in-person gatherings to hybrid events, we make corporate communication compelling.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Monitor, title: "Technical Production", description: "Flawless AV and staging for maximum impact." },
      { icon: Globe, title: "Hybrid Event Capabilities", description: "Seamless integration of virtual and in-person." },
      { icon: Users, title: "Interactive Q&A", description: "Polling and engagement tools for participation." },
      { icon: PenTool, title: "Content Support", description: "Presentation design and scripting assistance." },
      { icon: Mic, title: "Professional Hosting", description: "Skilled moderators who keep energy high." },
      { icon: Camera, title: "Event Documentation", description: "Professional recording for future reference." }
    ],
    benefits: [
      { icon: Megaphone, title: "Clear Communication", description: "Messages that resonate and inspire." },
      { icon: Users, title: "Employee Alignment", description: "Unified understanding of company direction." },
      { icon: Heart, title: "Leadership Visibility", description: "Connect leaders with their teams." },
      { icon: Target, title: "Feedback Opportunities", description: "Two-way communication that matters." },
      { icon: Zap, title: "Energy & Motivation", description: "Inspire action and commitment." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
    ],
    testimonials: [
      { quote: "Our town hall has never been more engaging. Employees loved the interactive elements.", author: "Catherine Lee", company: "Prudential Singapore" },
      { quote: "The hybrid execution was flawless. Everyone felt equally included.", author: "Benjamin Tan", company: "AIA Singapore" },
      { quote: "Team Elevate transformed our annual conference into an inspiring experience.", author: "Helen Wong", company: "Great Eastern" }
    ],
    cta: {
      headline: "Ready to Unite Your Organization?",
      subtext: "Let's create town halls that inform, inspire, and energize your people."
    }
  },
  "immersive-experiences": {
    hero: {
      title: "Immersive Theme-Based Experiences",
      subtitle: "Journey Beyond Ordinary",
      tagline: "Step into worlds where imagination becomes reality.",
      backgroundImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920"
    },
    overview: {
      description: "Transport your guests into extraordinary worlds with fully immersive themed experiences. We create multisensory environments that captivate, engage, and leave lasting impressions on every attendee. From fantasy realms to futuristic visions, we make the impossible possible.",
      backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
    },
    features: [
      { icon: Theater, title: "World-Building & Storytelling", description: "Complete narratives that transport guests." },
      { icon: Palette, title: "Set Design & Construction", description: "Physical environments that amaze." },
      { icon: Users, title: "Character & Performer Casting", description: "Actors who bring the world to life." },
      { icon: Music, title: "Sensory Experience Integration", description: "Sound, scent, touch, and taste." },
      { icon: Sparkles, title: "Special Effects", description: "Magical moments that surprise." },
      { icon: Camera, title: "Instagram-Worthy Moments", description: "Shareable experiences for social reach." }
    ],
    benefits: [
      { icon: Star, title: "Unforgettable Experiences", description: "Memories that last a lifetime." },
      { icon: Heart, title: "Emotional Engagement", description: "Deep connection through storytelling." },
      { icon: Camera, title: "Social Media Gold", description: "Content your guests create for you." },
      { icon: Gem, title: "Brand Differentiation", description: "Stand out from ordinary events." },
      { icon: Sparkles, title: "Lasting Impressions", description: "Experiences they'll talk about for years." }
    ],
    themes: [
      { name: "Enchanted Forest", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800" },
      { name: "Futuristic Metropolis", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800" },
      { name: "Underwater Kingdom", image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800" },
      { name: "Ancient Dynasty", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800" },
      { name: "Space Odyssey", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800" },
      { name: "Circus Spectacular", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    testimonials: [
      { quote: "We stepped into another world entirely. Absolutely magical!", author: "Lisa Chen", company: "Facebook Singapore" },
      { quote: "The attention to detail was incredible. Every corner was Instagram-worthy.", author: "Tom Lim", company: "TikTok Singapore" },
      { quote: "Our guests are still talking about it months later. Unforgettable!", author: "Sarah Ng", company: "ByteDance" }
    ],
    cta: {
      headline: "Ready to Create Another World?",
      subtext: "Let's transport your guests to extraordinary realms of wonder."
    }
  },
  "wellness-events": {
    hero: {
      title: "Corporate Wellness Events",
      subtitle: "Mindfulness & Balance",
      tagline: "Nurturing wellbeing, inspiring balance, elevating your team.",
      backgroundImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920"
    },
    overview: {
      description: "Promote employee wellbeing with thoughtfully designed wellness events that nurture mind, body, and spirit. From meditation sessions to fitness challenges, we create experiences that support holistic health and demonstrate your commitment to your team's wellness.",
      backgroundImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920"
    },
    features: [
      { icon: Dumbbell, title: "Wellness Activity Curation", description: "Diverse activities for all fitness levels." },
      { icon: Users, title: "Expert Facilitator Sourcing", description: "Certified wellness professionals." },
      { icon: Wine, title: "Healthy Catering Options", description: "Nutritious and delicious menus." },
      { icon: Gift, title: "Wellness Resources", description: "Takeaway materials for continued practice." },
      { icon: Heart, title: "Mental Health Focus", description: "Mindfulness and stress relief activities." },
      { icon: Sparkles, title: "Holistic Approach", description: "Mind, body, and spirit integration." }
    ],
    benefits: [
      { icon: Heart, title: "Improved Wellbeing", description: "Healthier, happier employees." },
      { icon: Zap, title: "Reduced Stress", description: "Tools for managing workplace pressure." },
      { icon: Users, title: "Team Bonding", description: "Shared wellness experiences." },
      { icon: Star, title: "Positive Culture", description: "Demonstrate care for your people." },
      { icon: Target, title: "Productivity Boost", description: "Healthy teams perform better." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800"
    ],
    testimonials: [
      { quote: "Our wellness day was exactly what our team needed. Everyone felt refreshed.", author: "Karen Lim", company: "Deloitte Singapore" },
      { quote: "The variety of activities ensured everyone found something they enjoyed.", author: "Daniel Tan", company: "PwC Singapore" },
      { quote: "A wonderful demonstration of our company's commitment to employee wellbeing.", author: "Michelle Lee", company: "KPMG Singapore" }
    ],
    cta: {
      headline: "Ready to Prioritize Your Team's Wellbeing?",
      subtext: "Let's create wellness experiences that nurture and inspire."
    }
  },
  "event-concept": {
    hero: {
      title: "Event Concept Development",
      subtitle: "Storytelling & Strategy",
      tagline: "Where vision transforms into unforgettable narratives.",
      backgroundImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920"
    },
    overview: {
      description: "Every great event starts with a compelling concept. Our creative team develops unique event narratives that align with your objectives and create cohesive experiences from invitation to farewell. We transform your vision into stories that captivate and inspire.",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
    },
    features: [
      { icon: Lightbulb, title: "Creative Brainstorming", description: "Collaborative ideation sessions." },
      { icon: Palette, title: "Mood Boards & Presentations", description: "Visual concepts brought to life." },
      { icon: PenTool, title: "Theme Narrative Development", description: "Compelling stories for your event." },
      { icon: Target, title: "Experience Journey Mapping", description: "Every touchpoint considered." },
      { icon: Users, title: "Stakeholder Alignment", description: "Concepts that satisfy all parties." },
      { icon: Sparkles, title: "Innovation Focus", description: "Fresh ideas that stand out." }
    ],
    benefits: [
      { icon: Star, title: "Distinctive Identity", description: "Events that stand out from the crowd." },
      { icon: Heart, title: "Cohesive Experience", description: "Every element tells the story." },
      { icon: Target, title: "Clear Messaging", description: "Objectives woven into the narrative." },
      { icon: Gem, title: "Creative Differentiation", description: "Unique concepts that impress." },
      { icon: Sparkles, title: "Strategic Positioning", description: "Events that achieve goals." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
    ],
    testimonials: [
      { quote: "The concept they developed perfectly captured our brand essence.", author: "Andrew Goh", company: "BMW Asia" },
      { quote: "Creative, strategic, and perfectly aligned with our objectives.", author: "Patricia Wong", company: "Mercedes-Benz Singapore" },
      { quote: "Team Elevate's conceptualization transformed our vision into reality.", author: "Steven Tan", company: "Audi Singapore" }
    ],
    cta: {
      headline: "Ready to Bring Your Vision to Life?",
      subtext: "Let's develop a concept that makes your event truly unforgettable."
    }
  },
  "stage-production": {
    hero: {
      title: "Stage Design & AV Production",
      subtitle: "Spectacular Presentations",
      tagline: "Where technology meets artistry to create breathtaking experiences.",
      backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
    },
    overview: {
      description: "Create stunning visual environments with our comprehensive stage design and AV production services. We combine technical expertise with creative vision to deliver productions that captivate and inspire. From intimate settings to grand stages, we bring your vision to life.",
      backgroundImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920"
    },
    features: [
      { icon: Theater, title: "Stage Design & Construction", description: "Custom stages that impress." },
      { icon: Sparkles, title: "Lighting Design", description: "Atmospheric illumination for every mood." },
      { icon: Volume2, title: "Sound Engineering", description: "Crystal clear audio for all venues." },
      { icon: Monitor, title: "Video & LED Production", description: "Stunning visuals that captivate." },
      { icon: Video, title: "Live Streaming", description: "Professional broadcast for hybrid events." },
      { icon: Lightbulb, title: "Special Effects", description: "Pyrotechnics, fog, and more." }
    ],
    benefits: [
      { icon: Star, title: "Professional Quality", description: "Broadcast-standard production." },
      { icon: Users, title: "Audience Engagement", description: "Visuals that hold attention." },
      { icon: Zap, title: "Seamless Execution", description: "Flawless technical delivery." },
      { icon: Camera, title: "Visual Impact", description: "Memorable aesthetics." },
      { icon: Megaphone, title: "Content Amplification", description: "Messages that resonate." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800"
    ],
    testimonials: [
      { quote: "The stage production was absolutely stunning. World-class quality.", author: "Vincent Lee", company: "Mediacorp" },
      { quote: "Flawless technical execution from start to finish.", author: "Angela Teo", company: "CNA" },
      { quote: "Team Elevate's production elevated our event to new heights.", author: "Marcus Wong", company: "Toggle TV" }
    ],
    cta: {
      headline: "Ready for a Spectacular Production?",
      subtext: "Let's create a stage that takes your event to the next level."
    }
  },
  "custom-themes": {
    hero: {
      title: "Custom Theme Creation",
      subtitle: "Your Vision, Realized",
      tagline: "Where imagination transforms spaces into extraordinary worlds.",
      backgroundImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920"
    },
    overview: {
      description: "Transform any space with custom themes that transport guests to new worlds. Our design team creates bespoke environments that align perfectly with your event objectives and brand identity. From elegant sophistication to whimsical wonder, we make your vision reality.",
      backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
    },
    features: [
      { icon: Palette, title: "Theme Conceptualization", description: "Creative direction for your unique vision." },
      { icon: PenTool, title: "Props & Décor Design", description: "Custom elements that define the space." },
      { icon: Sparkles, title: "Fabrication & Installation", description: "Professional construction and setup." },
      { icon: Camera, title: "Photo Opportunities", description: "Instagram-worthy moments throughout." },
      { icon: Lightbulb, title: "Lighting Integration", description: "Atmosphere that enhances the theme." },
      { icon: Users, title: "On-Site Styling", description: "Expert dressing and final touches." }
    ],
    benefits: [
      { icon: Star, title: "Unique Atmosphere", description: "One-of-a-kind event environments." },
      { icon: Heart, title: "Brand Alignment", description: "Themes that reflect your identity." },
      { icon: Camera, title: "Social Media Gold", description: "Shareable moments everywhere." },
      { icon: Users, title: "Immersive Experience", description: "Guests feel transported." },
      { icon: Sparkles, title: "Lasting Impressions", description: "Memories that stay forever." }
    ],
    themes: [
      { name: "Enchanted Garden", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800" },
      { name: "Art Deco Glamour", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800" },
      { name: "Tropical Paradise", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
      { name: "Vintage Carnival", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800" },
      { name: "Modern Minimalist", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800" },
      { name: "Bohemian Chic", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    testimonials: [
      { quote: "The theme transformation was incredible. Our venue looked like a different world.", author: "Rachel Goh", company: "Raffles Hotel" },
      { quote: "Every detail was perfect. Our guests were amazed.", author: "Kevin Tan", company: "Marina Bay Sands" },
      { quote: "Team Elevate brought our creative vision to life beautifully.", author: "Diana Lee", company: "Mandarin Oriental" }
    ],
    cta: {
      headline: "Ready to Transform Your Space?",
      subtext: "Let's create a themed environment that transports your guests."
    }
  },
  "emcee-services": {
    hero: {
      title: "Emcee, Photo & Video Services",
      subtitle: "Capture Every Moment",
      tagline: "Professional hosting and stunning documentation for events that matter.",
      backgroundImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920"
    },
    overview: {
      description: "Ensure your event is professionally hosted and beautifully documented with our emcee and media services. From charismatic hosts who keep energy high to award-winning photographers and videographers who capture every precious moment.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Mic, title: "Professional Emcee Selection", description: "Experienced hosts matched to your event style." },
      { icon: Camera, title: "Photography Coverage", description: "High-quality images that tell your story." },
      { icon: Video, title: "Videography & Editing", description: "Cinematic footage and polished edits." },
      { icon: Sparkles, title: "Same-Day Edits", description: "Highlight reels ready for your event." },
      { icon: Users, title: "Photo Booth Services", description: "Interactive fun for all guests." },
      { icon: Monitor, title: "Live Streaming", description: "Professional broadcast for remote audiences." }
    ],
    benefits: [
      { icon: Zap, title: "Professional Flow", description: "Events that run smoothly." },
      { icon: Camera, title: "Quality Documentation", description: "Memories preserved beautifully." },
      { icon: Star, title: "Energy Maintenance", description: "Crowds that stay engaged." },
      { icon: Megaphone, title: "Marketing Content", description: "Assets for future promotion." },
      { icon: Heart, title: "Lasting Memories", description: "Moments captured forever." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800"
    ],
    testimonials: [
      { quote: "Our emcee was fantastic! The perfect energy and professionalism.", author: "Christine Lim", company: "Accenture" },
      { quote: "The photos and videos are stunning. Exactly what we wanted.", author: "David Wong", company: "McKinsey" },
      { quote: "Same-day edit was the highlight of our event. Amazing!", author: "Jennifer Tan", company: "Boston Consulting Group" }
    ],
    cta: {
      headline: "Ready for Professional Hosting & Coverage?",
      subtext: "Let's ensure your event is brilliantly hosted and beautifully captured."
    }
  },
  "vip-gala": {
    hero: {
      title: "VIP Gala Experiences",
      subtitle: "Red-Carpet Moments",
      tagline: "Where elegance meets exclusivity in evenings of pure luxury.",
      backgroundImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920"
    },
    overview: {
      description: "Create exclusive, high-end gala experiences that make every guest feel like a star. From red carpet arrivals to champagne farewells, we orchestrate evenings of pure luxury and sophistication. Every detail reflects the premium experience your VIP guests deserve.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Crown, title: "Red Carpet Experience", description: "VIP arrivals that make guests feel special." },
      { icon: MapPin, title: "Premium Venue Sourcing", description: "Exclusive locations for discerning guests." },
      { icon: Wine, title: "Fine Dining Curation", description: "Exquisite culinary experiences." },
      { icon: Users, title: "Celebrity Management", description: "VIP guest handling and coordination." },
      { icon: Sparkles, title: "Luxury Décor", description: "Opulent environments that impress." },
      { icon: Gift, title: "Premium Gifts", description: "Memorable takeaways for every guest." }
    ],
    benefits: [
      { icon: Crown, title: "Prestigious Positioning", description: "Events that reflect excellence." },
      { icon: Star, title: "VIP Treatment", description: "Every guest feels like royalty." },
      { icon: Users, title: "Exclusive Networking", description: "Connect with elite circles." },
      { icon: Gem, title: "Brand Elevation", description: "Associate with luxury and quality." },
      { icon: Heart, title: "Memorable Luxury", description: "Experiences of a lifetime." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800"
    ],
    testimonials: [
      { quote: "The most elegant gala we've ever attended. Absolutely flawless.", author: "Sophia Tan", company: "Hermès Singapore" },
      { quote: "Every detail screamed luxury. Our VIP guests were thoroughly impressed.", author: "Alexander Lee", company: "Louis Vuitton" },
      { quote: "Team Elevate understands true luxury event execution.", author: "Victoria Wong", company: "Chanel Singapore" }
    ],
    cta: {
      headline: "Ready for an Evening of Elegance?",
      subtext: "Let's create a VIP gala that defines luxury and exclusivity."
    }
  },
  "family-fun-days": {
    hero: {
      title: "Family Fun Days",
      subtitle: "Joy for All Ages",
      tagline: "Creating memories that bring families closer together.",
      backgroundImage: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=1920"
    },
    overview: {
      description: "Bring families together with fun-filled days that create lasting memories across generations. We design inclusive activities and entertainment that engage employees and their loved ones, demonstrating your company's commitment to work-life balance.",
      backgroundImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920"
    },
    features: [
      { icon: Users, title: "Age-Appropriate Zones", description: "Activities for every family member." },
      { icon: Gamepad2, title: "Games & Entertainment", description: "Fun activities that engage everyone." },
      { icon: Wine, title: "Family-Friendly Catering", description: "Delicious options for all tastes." },
      { icon: Lock, title: "Safety Management", description: "Secure environment for children." },
      { icon: Gift, title: "Prizes & Rewards", description: "Exciting giveaways for participants." },
      { icon: Camera, title: "Photo Opportunities", description: "Capture precious family moments." }
    ],
    benefits: [
      { icon: Heart, title: "Work-Life Balance", description: "Show you value family time." },
      { icon: Users, title: "Family Inclusion", description: "Loved ones feel appreciated." },
      { icon: Star, title: "Intergenerational Bonding", description: "Activities for all ages." },
      { icon: Trophy, title: "Employee Loyalty", description: "Build deeper connections." },
      { icon: Sparkles, title: "Community Building", description: "Create a family atmosphere." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=800",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800"
    ],
    testimonials: [
      { quote: "Our families had the best time! Kids are still talking about it.", author: "Melissa Tan", company: "P&G Singapore" },
      { quote: "The perfect blend of activities for all ages. Everyone was engaged.", author: "Jason Lim", company: "Unilever Singapore" },
      { quote: "A wonderful demonstration of our company's family values.", author: "Angela Wong", company: "Nestlé Singapore" }
    ],
    cta: {
      headline: "Ready to Celebrate Families?",
      subtext: "Let's create a family fun day that brings everyone together."
    }
  },
  "corporate-carnivals": {
    hero: {
      title: "Corporate Carnival Extravaganzas",
      subtitle: "Festival Vibes",
      tagline: "Where work meets play in a spectacular celebration of fun.",
      backgroundImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920"
    },
    overview: {
      description: "Transform your corporate event into a vibrant carnival experience filled with games, food, and entertainment. We create festival-style atmospheres that encourage interaction, celebration, and pure enjoyment for all attendees.",
      backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?w=1920"
    },
    features: [
      { icon: Gamepad2, title: "Carnival Game Booths", description: "Classic and creative game stations." },
      { icon: Wine, title: "Food Stall Coordination", description: "Diverse culinary delights." },
      { icon: Music, title: "Live Entertainment", description: "Performers and music throughout." },
      { icon: Gift, title: "Prize Systems", description: "Exciting rewards for participants." },
      { icon: Palette, title: "Themed Décor", description: "Vibrant carnival atmosphere." },
      { icon: Camera, title: "Photo Attractions", description: "Fun props and backdrops." }
    ],
    benefits: [
      { icon: Zap, title: "High Energy", description: "Events that buzz with excitement." },
      { icon: Users, title: "Interactive Fun", description: "Everyone gets involved." },
      { icon: Heart, title: "Casual Networking", description: "Connect in relaxed settings." },
      { icon: Sparkles, title: "Fun Atmosphere", description: "Pure enjoyment for all." },
      { icon: Star, title: "Unique Format", description: "Stand out from typical events." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800"
    ],
    testimonials: [
      { quote: "The carnival vibe was exactly what our team needed. So much fun!", author: "Kenneth Tan", company: "Amazon Singapore" },
      { quote: "Everyone from interns to executives was laughing and playing together.", author: "Sarah Lee", company: "Microsoft Singapore" },
      { quote: "A refreshing change from typical corporate events. Highly recommended!", author: "James Goh", company: "LinkedIn Singapore" }
    ],
    cta: {
      headline: "Ready for a Carnival Celebration?",
      subtext: "Let's create a festival atmosphere your team will never forget."
    }
  },
  "company-retreats": {
    hero: {
      title: "Overseas Retreats & Getaways",
      subtitle: "Escape & Connect",
      tagline: "Where teams discover new horizons and deeper connections.",
      backgroundImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920"
    },
    overview: {
      description: "Escape the everyday and immerse your team in transformative retreat experiences. Whether local or international, we curate exclusive destinations and programs that combine strategic planning with memorable team bonding moments in stunning locations.",
      backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
    },
    features: [
      { icon: Plane, title: "Destination Selection", description: "Premium locations worldwide." },
      { icon: MapPin, title: "End-to-End Logistics", description: "Flights, transfers, everything handled." },
      { icon: PenTool, title: "Custom Itineraries", description: "Tailored programs for your goals." },
      { icon: Building, title: "Luxury Accommodations", description: "Premium hotels and resorts." },
      { icon: Users, title: "Team Activities", description: "Bonding experiences in stunning settings." },
      { icon: Wine, title: "Culinary Experiences", description: "Local flavors and fine dining." }
    ],
    benefits: [
      { icon: Lightbulb, title: "Fresh Perspectives", description: "New environments spark new ideas." },
      { icon: Users, title: "Deep Bonding", description: "Extended time together builds trust." },
      { icon: Target, title: "Strategic Alignment", description: "Focused planning time away from distractions." },
      { icon: Globe, title: "Cultural Experiences", description: "Broaden horizons together." },
      { icon: Heart, title: "Work-Life Balance", description: "Combine work with meaningful experiences." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
    ],
    testimonials: [
      { quote: "Our Bali retreat was transformative. The team came back stronger than ever.", author: "Richard Ng", company: "Lazada Singapore" },
      { quote: "Every detail was perfectly handled. We could focus entirely on our goals.", author: "Jennifer Teo", company: "Shopback" },
      { quote: "The best company retreat we've ever had. Already planning the next one!", author: "Michael Lee", company: "Carousell" }
    ],
    cta: {
      headline: "Ready for an Unforgettable Retreat?",
      subtext: "Let's plan an overseas experience that transforms your team."
    }
  },
  "grand-opening": {
    hero: {
      title: "Grand Opening Celebrations",
      subtitle: "First Impressions Matter",
      tagline: "Launch your new chapter with a celebration that commands attention.",
      backgroundImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920"
    },
    overview: {
      description: "Make your grand opening an unforgettable occasion that sets the tone for your new venture. We create spectacular launch celebrations that generate buzz, attract media attention, and establish your presence with impact and style.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Sparkles, title: "Ribbon Cutting Ceremony", description: "Iconic moments that mark new beginnings." },
      { icon: Camera, title: "Media Management", description: "Press coverage coordination." },
      { icon: Users, title: "VIP Guest Handling", description: "Priority treatment for key attendees." },
      { icon: Music, title: "Entertainment & Performances", description: "Spectacular shows that impress." },
      { icon: Gift, title: "Launch Giveaways", description: "Memorable tokens for guests." },
      { icon: Megaphone, title: "Brand Activation", description: "Experiential elements that engage." }
    ],
    benefits: [
      { icon: Star, title: "Strong First Impression", description: "Launch with maximum impact." },
      { icon: Megaphone, title: "Media Coverage", description: "Generate press and social buzz." },
      { icon: Users, title: "Stakeholder Engagement", description: "Connect with key audiences." },
      { icon: Gem, title: "Brand Positioning", description: "Establish your market presence." },
      { icon: Zap, title: "Business Momentum", description: "Start with energy and excitement." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    testimonials: [
      { quote: "Our grand opening generated incredible buzz. The perfect launch!", author: "Anthony Tan", company: "ION Orchard" },
      { quote: "Team Elevate made our store opening a spectacular success.", author: "Linda Wong", company: "VivoCity" },
      { quote: "The media coverage exceeded our expectations. Brilliant execution!", author: "Derek Lim", company: "Jewel Changi" }
    ],
    cta: {
      headline: "Ready to Make a Grand Entrance?",
      subtext: "Let's create an opening celebration that launches your success."
    }
  },
  "summits": {
    hero: {
      title: "Industry Summits & Conferences",
      subtitle: "Lead the Conversation",
      tagline: "Where thought leaders gather and industries evolve.",
      backgroundImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920"
    },
    overview: {
      description: "Position your organization as an industry leader with professionally executed summits and conferences. We manage everything from speaker coordination to audience engagement, creating platforms that facilitate knowledge exchange and meaningful connections.",
      backgroundImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920"
    },
    features: [
      { icon: Mic, title: "Speaker Management", description: "Coordination with industry leaders." },
      { icon: Monitor, title: "Technical Production", description: "Seamless presentations and panels." },
      { icon: Users, title: "Attendee Experience", description: "Engaging journeys from registration to close." },
      { icon: Globe, title: "Hybrid Capabilities", description: "In-person and virtual integration." },
      { icon: PenTool, title: "Content Strategy", description: "Compelling agenda development." },
      { icon: Handshake, title: "Networking Facilitation", description: "Meaningful connections between attendees." }
    ],
    benefits: [
      { icon: Crown, title: "Thought Leadership", description: "Position as industry authority." },
      { icon: Users, title: "Knowledge Exchange", description: "Facilitate valuable discussions." },
      { icon: Handshake, title: "Industry Connections", description: "Build strategic relationships." },
      { icon: Star, title: "Brand Visibility", description: "Increased recognition and respect." },
      { icon: Target, title: "Business Opportunities", description: "Generate leads and partnerships." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
    ],
    testimonials: [
      { quote: "The most professionally run summit we've organized. Exceptional quality.", author: "Dr. Sarah Chen", company: "Singapore FinTech Association" },
      { quote: "Flawless execution from start to finish. Attendees raved about the experience.", author: "Professor Tan Wei", company: "SMU" },
      { quote: "Team Elevate elevated our annual conference to international standards.", author: "Lawrence Goh", company: "SGInnovate" }
    ],
    cta: {
      headline: "Ready to Lead Your Industry?",
      subtext: "Let's create a summit that positions you at the forefront."
    }
  },
  "government-events": {
    hero: {
      title: "Government & Public Sector Events",
      subtitle: "Official Excellence",
      tagline: "Precision, protocol, and prestige for the public sector.",
      backgroundImage: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920"
    },
    overview: {
      description: "Execute government and public sector events with the precision and protocol they demand. We understand the unique requirements of official functions, diplomatic engagements, and public ceremonies, delivering flawless events that represent institutions with dignity.",
      backgroundImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920"
    },
    features: [
      { icon: Flag, title: "Protocol Management", description: "Adherence to official standards." },
      { icon: Lock, title: "Security Coordination", description: "Comprehensive safety planning." },
      { icon: Users, title: "VIP Guest Handling", description: "Dignitary management expertise." },
      { icon: Monitor, title: "Technical Excellence", description: "Reliable AV and staging." },
      { icon: PenTool, title: "Documentation", description: "Official records and coverage." },
      { icon: Clock, title: "Precision Timing", description: "Flawless schedule execution." }
    ],
    benefits: [
      { icon: Crown, title: "Official Prestige", description: "Events that reflect institutional dignity." },
      { icon: Lock, title: "Risk Management", description: "Thorough contingency planning." },
      { icon: Target, title: "Goal Achievement", description: "Objectives met with precision." },
      { icon: Users, title: "Stakeholder Satisfaction", description: "All parties well served." },
      { icon: Star, title: "Reputation Enhancement", description: "Positive public perception." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800"
    ],
    testimonials: [
      { quote: "Impeccable attention to protocol and flawless execution.", author: "Ministry Official", company: "Ministry of Trade and Industry" },
      { quote: "Team Elevate understands the unique requirements of government events.", author: "Senior Director", company: "Economic Development Board" },
      { quote: "Professional, reliable, and thoroughly prepared for every scenario.", author: "Deputy Director", company: "National Parks Board" }
    ],
    cta: {
      headline: "Ready for Official Excellence?",
      subtext: "Let's create government events that meet the highest standards."
    }
  },
  "private-events": {
    hero: {
      title: "Private & Exclusive Events",
      subtitle: "Intimate Celebrations",
      tagline: "Personal moments deserve extraordinary experiences.",
      backgroundImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920"
    },
    overview: {
      description: "Create intimate, exclusive events for personal celebrations and private gatherings. From milestone birthdays to anniversary celebrations, we bring the same premium quality and attention to detail to personal events as we do to corporate functions.",
      backgroundImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920"
    },
    features: [
      { icon: Heart, title: "Personal Consultation", description: "Understanding your unique vision." },
      { icon: Palette, title: "Custom Design", description: "Bespoke themes and décor." },
      { icon: Wine, title: "Catering Excellence", description: "Exquisite culinary experiences." },
      { icon: Music, title: "Entertainment Curation", description: "Perfect music and performances." },
      { icon: Camera, title: "Premium Documentation", description: "Beautiful memories captured." },
      { icon: Gift, title: "Guest Experiences", description: "Special touches for every attendee." }
    ],
    benefits: [
      { icon: Heart, title: "Personal Touch", description: "Events as unique as you." },
      { icon: Star, title: "Premium Quality", description: "Corporate excellence for personal occasions." },
      { icon: Sparkles, title: "Stress-Free Planning", description: "We handle every detail." },
      { icon: Users, title: "Guest Delight", description: "Everyone feels special." },
      { icon: Camera, title: "Lasting Memories", description: "Moments to treasure forever." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800"
    ],
    testimonials: [
      { quote: "My 50th birthday was absolutely magical. Beyond my dreams!", author: "Christina Tan", company: "Private Client" },
      { quote: "Team Elevate made our anniversary celebration truly special.", author: "Mr & Mrs Lee", company: "Private Client" },
      { quote: "The perfect wedding celebration. Every detail was perfect.", author: "Rachel & David", company: "Private Client" }
    ],
    cta: {
      headline: "Ready for Your Special Celebration?",
      subtext: "Let's create a private event as unique and special as you."
    }
  }
};
