import { LucideIcon, Mic, Palette, Monitor, Gamepad2, Trophy, Music, Camera, Sparkles, Users, Heart, Star, Zap, PartyPopper, Wine, Lightbulb, Target, Clock, Gift, Crown, MapPin, Gem, Rocket, Building, Award, CalendarDays, Plane, Flag, Lock, Home, Theater, Dumbbell, Video, PenTool, Volume2, Megaphone, Handshake, GraduationCap, Globe, Briefcase } from "lucide-react";

export interface AlternatingSection {
  title: string;
  description: string;
  image: string;
  points?: { text: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  accentColor: string;
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
  activities?: {
    sectionTitle?: string;
    items: string[];
  };
  alternatingSections: AlternatingSection[];
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
  faqs: FAQ[];
  cta: {
    headline: string;
    subtext: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "team-building": {
    accentColor: "#3EA0FF",
    hero: {
      title: "Corporate Team Building",
      subtitle: "Team Building",
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
    activities: {
      sectionTitle: "ACTIVITY TYPES",
      items: ["Amazing Race", "CSI: Bones", "Cultural Race", "Laser Tag", "Archery Tag", "Escape Room Challenge", "Masterchef Challenge", "Drumming Circle", "Dragon Boat Racing", "Bubble Soccer", "Treasure Hunt", "Survivor Challenge"]
    },
    alternatingSections: [
      {
        title: "Key Highlights",
        description: "Our team building programs are designed to deliver measurable results while ensuring everyone has an incredible time.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920",
        points: [
          { text: "Customized activities for groups of 20 to 2000+" },
          { text: "Indoor and outdoor venue options" },
          { text: "Professional facilitation and equipment" },
          { text: "Real-time scoring and gamification" }
        ]
      },
      {
        title: "Why Clients Love This",
        description: "Teams leave our sessions energized, connected, and ready to tackle challenges together with renewed purpose.",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920",
        points: [
          { text: "Lasting impact on team dynamics" },
          { text: "Memorable shared experiences" },
          { text: "Skills that transfer to the workplace" }
        ]
      },
      {
        title: "Perfect For",
        description: "Whether you're onboarding new hires, celebrating milestones, or simply investing in your team's wellbeing.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920",
        points: [
          { text: "New team formation and integration" },
          { text: "Department off-sites and retreats" },
          { text: "Leadership development programs" },
          { text: "Annual company celebrations" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800"
    ],
    testimonials: [
      { quote: "Our team came back energized and more connected than ever. Amazing experience!", author: "David Chen", company: "Google Singapore" },
      { quote: "The activities were perfectly tailored to our team's needs. Highly recommended!", author: "Amanda Lee", company: "Grab Holdings" },
      { quote: "Professional, engaging, and truly transformative for our team dynamics.", author: "Robert Tan", company: "Shopee" },
      { quote: "Best team building we've ever done. Everyone is still talking about it!", author: "Michelle Goh", company: "Microsoft Singapore" },
      { quote: "The facilitation was world-class. Our team bonded like never before.", author: "James Lim", company: "Amazon Singapore" },
      { quote: "Exceeded all expectations. Will definitely book again for next year!", author: "Sarah Wong", company: "Meta Singapore" }
    ],
    faqs: [
      { question: "How many participants can you accommodate?", answer: "We can accommodate groups from 20 to 2000+ participants. Our activities are scalable and we have experience managing large corporate events." },
      { question: "Do you provide indoor and outdoor options?", answer: "Yes! We offer both indoor and outdoor team building activities. We'll recommend the best option based on your objectives, group size, and preferences." },
      { question: "How far in advance should we book?", answer: "We recommend booking at least 4-6 weeks in advance for the best availability. However, we can sometimes accommodate shorter timelines." },
      { question: "Can activities be customized to our company values?", answer: "Absolutely! We specialize in customizing activities to align with your company values, objectives, and team dynamics." },
      { question: "What's included in the package?", answer: "Our packages typically include professional facilitation, all equipment and materials, prizes, photography, and full event coordination." }
    ],
    cta: {
      headline: "Ready to Transform Your Team?",
      subtext: "Let's design an unforgettable team building experience that brings your people together."
    }
  },
  "overseas-retreats": {
    accentColor: "#5AB7AE",
    hero: {
      title: "Overseas Retreats",
      subtitle: "Retreat",
      tagline: "Escape the ordinary. Discover extraordinary destinations that inspire and unite.",
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
    },
    overview: {
      description: "Take your team beyond borders for transformative retreat experiences in stunning international destinations. We handle every detail from flights to activities, ensuring your team enjoys a seamless, unforgettable journey that combines work, play, and cultural exploration.",
      backgroundImage: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920"
    },
    features: [
      { icon: Plane, title: "Full Travel Management", description: "Flights, transfers, and logistics handled end-to-end." },
      { icon: MapPin, title: "Curated Destinations", description: "Handpicked locations that inspire and energize." },
      { icon: Users, title: "Team Activities", description: "Bonding experiences unique to each destination." },
      { icon: Wine, title: "Premium Accommodation", description: "Luxury stays that pamper your team." },
      { icon: Globe, title: "Cultural Experiences", description: "Authentic local encounters that broaden perspectives." },
      { icon: Lock, title: "Safety & Security", description: "Comprehensive planning for peace of mind." }
    ],
    benefits: [
      { icon: Sparkles, title: "Fresh Perspectives", description: "New environments spark new ideas." },
      { icon: Heart, title: "Deep Bonding", description: "Extended time together builds lasting connections." },
      { icon: Star, title: "Memorable Experiences", description: "Adventures your team will never forget." },
      { icon: Zap, title: "Renewed Energy", description: "Return refreshed and motivated." },
      { icon: Users, title: "Cultural Growth", description: "Expand horizons together as a team." }
    ],
    activities: {
      sectionTitle: "DESTINATION OPTIONS",
      items: ["Bali, Indonesia", "Phuket, Thailand", "Niseko, Japan", "Da Nang, Vietnam", "Langkawi, Malaysia", "Bintan, Indonesia", "Krabi, Thailand", "Jeju Island, Korea", "Cebu, Philippines", "Chiang Mai, Thailand", "Hokkaido, Japan", "Batam, Indonesia"]
    },
    alternatingSections: [
      {
        title: "Popular Destinations",
        description: "From tropical beaches to mountain retreats, we curate experiences in the world's most inspiring locations.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1920",
        points: [
          { text: "Bali - Tropical paradise with cultural richness" },
          { text: "Phuket - Beach adventures and island hopping" },
          { text: "Niseko - Mountain retreats and winter activities" },
          { text: "Vietnam - Cultural immersion and cuisine" }
        ]
      },
      {
        title: "What's Included",
        description: "We take care of everything so you can focus on connecting with your team.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920",
        points: [
          { text: "Round-trip flights and airport transfers" },
          { text: "Luxury accommodation and meals" },
          { text: "Team building activities and excursions" },
          { text: "24/7 on-ground support" }
        ]
      },
      {
        title: "Perfect For",
        description: "Whether celebrating achievements or planning the year ahead, overseas retreats create magic.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920",
        points: [
          { text: "Annual leadership retreats" },
          { text: "Team reward trips" },
          { text: "Strategic planning sessions" },
          { text: "Milestone celebrations" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800"
    ],
    testimonials: [
      { quote: "The Bali retreat was absolutely magical. Every detail was perfect!", author: "Jennifer Tan", company: "Deloitte Singapore" },
      { quote: "Our team came back more united than ever. Worth every investment.", author: "Marcus Lee", company: "PwC Singapore" },
      { quote: "Seamless planning, incredible experiences. Highly recommend!", author: "Rachel Goh", company: "KPMG Singapore" },
      { quote: "Best company trip we've ever had. Team Elevate handled everything.", author: "Daniel Wong", company: "EY Singapore" },
      { quote: "The cultural experiences added so much depth to our retreat.", author: "Priya Sharma", company: "Accenture Singapore" },
      { quote: "From start to finish, absolutely flawless execution.", author: "Kevin Tan", company: "McKinsey Singapore" }
    ],
    faqs: [
      { question: "How far in advance should we book an overseas retreat?", answer: "We recommend booking 3-6 months in advance for optimal destination and accommodation availability." },
      { question: "What destinations do you recommend?", answer: "Popular choices include Bali, Phuket, Vietnam, and Japan. We'll recommend based on your budget, group size, and objectives." },
      { question: "Do you handle all travel logistics?", answer: "Yes, we manage everything from flights, accommodation, transfers, activities, and on-ground support." },
      { question: "What's the typical group size?", answer: "We typically handle groups from 15 to 200+ participants for overseas retreats." },
      { question: "Can you incorporate work sessions into the retreat?", answer: "Absolutely! We can arrange meeting spaces and blend strategic sessions with leisure activities." }
    ],
    cta: {
      headline: "Ready for Your Team's Adventure?",
      subtext: "Let's plan an overseas retreat that inspires, connects, and transforms."
    }
  },
  "dinner-and-dance": {
    accentColor: "#E8D18A",
    hero: {
      title: "Dinner & Dance",
      subtitle: "D&D",
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
    activities: {
      sectionTitle: "THEME OPTIONS",
      items: ["Great Gatsby Glamour", "Hollywood Black & Gold", "Masquerade Royale", "Futuristic Neon", "Retro Disco Fever", "White & Gold Elegance", "Casino Royale", "Hawaiian Luau", "Space Odyssey", "Enchanted Forest", "Red Carpet Premiere", "Carnival Fiesta"]
    },
    alternatingSections: [
      {
        title: "A Night to Remember",
        description: "From red carpet arrivals to the final dance, every moment is choreographed for maximum impact.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Red Carpet Welcome & VIP Arrivals" },
          { text: "Grand Opening Sequence" },
          { text: "Gourmet Dinner & Live Performances" },
          { text: "Interactive Games & Lucky Draws" }
        ]
      },
      {
        title: "Theme Options",
        description: "Choose from our signature themes or let us create a custom concept just for you.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Great Gatsby Glamour" },
          { text: "Hollywood Black & Gold" },
          { text: "Masquerade Royale" },
          { text: "Futuristic Neon Gold" }
        ]
      },
      {
        title: "Signature Moments",
        description: "We create show-stopping moments that become the talk of the office for years to come.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920",
        points: [
          { text: "Confetti Blast Entrance" },
          { text: "CEO Grand Reveal Moment" },
          { text: "Lucky Draw Showdown" },
          { text: "Awards Spotlight Walk" }
        ]
      }
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
      { quote: "Every detail was perfect. Our team is still talking about that night!", author: "Jennifer Wong", company: "Singtel" },
      { quote: "The production value was incredible. Felt like a real TV show!", author: "David Lee", company: "OCBC Bank" },
      { quote: "Our employees rated it the best company event ever.", author: "Amanda Goh", company: "Standard Chartered" },
      { quote: "The hosting was top-notch. Everyone was engaged from start to finish.", author: "Kevin Tan", company: "UBS Singapore" }
    ],
    faqs: [
      { question: "What's included in your D&D packages?", answer: "Our packages include professional hosting, event concept design, stage & AV production, interactive games, music & entertainment coordination, and full event management." },
      { question: "Can you accommodate dietary requirements?", answer: "We work with venue caterers to accommodate all dietary requirements including halal, vegetarian, and allergy-specific needs." },
      { question: "How long does a typical D&D last?", answer: "Most Dinner & Dance events run 4-5 hours, from cocktail reception through the finale dance party." },
      { question: "Do you provide photography and videography?", answer: "Yes, we can arrange professional photography and videography to capture all the memorable moments." },
      { question: "Can we have a custom theme?", answer: "Absolutely! We love creating custom themes. Share your vision and we'll bring it to life." }
    ],
    cta: {
      headline: "Ready to Create a Night Your Team Will Never Forget?",
      subtext: "Let's bring your Dinner & Dance vision to life with cinematic precision and unforgettable moments."
    }
  },
  "awards-ceremonies": {
    accentColor: "#D4AF37",
    hero: {
      title: "Awards Ceremonies",
      subtitle: "Awards",
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
    activities: {
      sectionTitle: "AWARD CATEGORIES",
      items: ["Employee of the Year", "Team Excellence Award", "Innovation Champion", "Customer Service Star", "Leadership Excellence", "Rising Star Award", "Long Service Recognition", "Best Department", "Sales Champion", "Cultural Ambassador", "Safety Champion", "Mentorship Award"]
    },
    alternatingSections: [
      {
        title: "The Red Carpet Experience",
        description: "Make every honoree feel like a star with VIP treatment from arrival to recognition.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Professional photography at arrival" },
          { text: "Spotlight introductions" },
          { text: "Custom trophy presentations" },
          { text: "Victory lap moments" }
        ]
      },
      {
        title: "Categories That Matter",
        description: "We help you design award categories that truly reflect your company values and culture.",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1920",
        points: [
          { text: "Innovation & Excellence Awards" },
          { text: "Leadership & Mentorship Recognition" },
          { text: "Team Collaboration Honors" },
          { text: "Long Service & Milestone Awards" }
        ]
      },
      {
        title: "Production Excellence",
        description: "From dramatic lighting to cinematic video packages, we create show-stopping moments.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Nominee video packages" },
          { text: "Dramatic reveal sequences" },
          { text: "Live audience voting options" },
          { text: "Social media integration" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607892378846-1e3d9fde6ed5?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "The most professionally executed awards ceremony we've ever had.", author: "Patricia Goh", company: "OCBC Bank" },
      { quote: "Our employees felt truly valued. The attention to detail was exceptional.", author: "James Lim", company: "CapitaLand" },
      { quote: "Team Elevate made our recognition night absolutely spectacular.", author: "Michelle Teo", company: "Marina Bay Sands" },
      { quote: "The red carpet experience made everyone feel like a superstar.", author: "Richard Wong", company: "Singtel" },
      { quote: "Production quality was TV-grade. Absolutely impressed!", author: "Sandra Lee", company: "DBS Bank" },
      { quote: "Our awardees felt truly celebrated. Perfect execution.", author: "Kenneth Tan", company: "Standard Chartered" }
    ],
    faqs: [
      { question: "Can you help design award categories?", answer: "Yes! We work with you to create meaningful categories that align with your company values and recognize diverse achievements." },
      { question: "Do you provide custom trophies?", answer: "We can arrange custom trophy design and production, or work with your existing awards." },
      { question: "What AV production is included?", answer: "Our packages include stage design, lighting, sound, video production for nominee packages, and live event coverage." },
      { question: "Can you handle hybrid ceremonies?", answer: "Absolutely! We can broadcast to remote attendees and incorporate virtual award presentations." },
      { question: "How do you handle large numbers of awards?", answer: "We design efficient yet impactful flows to ensure every award moment is special while keeping the event engaging." }
    ],
    cta: {
      headline: "Ready to Celebrate Your Achievers?",
      subtext: "Let's create an awards ceremony that honors excellence and inspires greatness."
    }
  },
  "corporate-anniversaries": {
    accentColor: "#B03052",
    hero: {
      title: "Corporate Anniversaries",
      subtitle: "Anniversary",
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
    activities: {
      sectionTitle: "CELEBRATION ELEMENTS",
      items: ["Historical Timeline Display", "Founder Tribute Video", "Pioneer Recognition Ceremony", "Time Capsule Unveiling", "Legacy Wall Installation", "Memory Lane Photo Exhibition", "Anniversary Gala Dinner", "Employee Journey Stories", "Milestone Achievement Awards", "Commemorative Merchandise", "Company Song Performance", "Future Vision Reveal"]
    },
    alternatingSections: [
      {
        title: "Celebrating Your Legacy",
        description: "We help you tell your company's story in a way that inspires pride and connection.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Historical timeline displays" },
          { text: "Founder tribute videos" },
          { text: "Employee journey features" },
          { text: "Milestone achievement highlights" }
        ]
      },
      {
        title: "Engaging All Generations",
        description: "Connect veterans with newcomers through activities that bridge your company's history with its future.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920",
        points: [
          { text: "Pioneer recognition programs" },
          { text: "Cross-generational team activities" },
          { text: "Time capsule ceremonies" },
          { text: "Legacy wall contributions" }
        ]
      },
      {
        title: "Commemorative Keepsakes",
        description: "Give your team meaningful mementos that capture this special milestone.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Anniversary merchandise design" },
          { text: "Commemorative photo books" },
          { text: "Custom awards and plaques" },
          { text: "Digital memory archives" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "Our 25th anniversary was absolutely magical. Team Elevate exceeded all expectations.", author: "William Koh", company: "Keppel Corporation" },
      { quote: "The perfect blend of nostalgia and celebration. Our employees loved it!", author: "Grace Tan", company: "ST Engineering" },
      { quote: "A truly memorable milestone celebration that honored our company's legacy.", author: "Andrew Lim", company: "ComfortDelGro" },
      { quote: "The historical storytelling touched everyone's hearts.", author: "Linda Wong", company: "Sembcorp" },
      { quote: "Every pioneer felt truly honored. Beautiful execution.", author: "David Chen", company: "SIA Engineering" },
      { quote: "The commemorative elements were perfect keepsakes.", author: "Rachel Goh", company: "Neptune Orient Lines" }
    ],
    faqs: [
      { question: "How do you incorporate company history?", answer: "We work with you to gather historical materials, interview pioneers, and create compelling storytelling elements like videos, timelines, and displays." },
      { question: "Can you accommodate multiple celebration events?", answer: "Yes! We can plan milestone celebrations across multiple locations or a series of events throughout the anniversary year." },
      { question: "What commemorative items can you create?", answer: "We can produce anniversary merchandise, photo books, custom awards, time capsules, and digital archives." },
      { question: "How do you engage retirees and former employees?", answer: "We can organize special reunions, tribute programs, and legacy recognition segments for pioneers." },
      { question: "What's the typical planning timeline?", answer: "For milestone anniversaries, we recommend starting planning 6-12 months in advance." }
    ],
    cta: {
      headline: "Ready to Celebrate Your Milestone?",
      subtext: "Let's honor your company's journey with a celebration worthy of your achievements."
    }
  },
  "leadership-offsites": {
    accentColor: "#4FB3B3",
    hero: {
      title: "Leadership Offsites",
      subtitle: "Offsite",
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
    activities: {
      sectionTitle: "SESSION FORMATS",
      items: ["Strategic Planning Workshop", "Vision & Mission Alignment", "Team Performance Review", "Innovation Brainstorm", "Leadership Development", "Scenario Planning", "Goal Setting Session", "Executive Coaching", "Change Management Workshop", "Culture & Values Workshop", "Succession Planning", "Business Model Canvas"]
    },
    alternatingSections: [
      {
        title: "Strategic Session Design",
        description: "We help structure your offsite for maximum strategic output and team alignment.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920",
        points: [
          { text: "Pre-offsite stakeholder interviews" },
          { text: "Customized agenda development" },
          { text: "Facilitated strategy sessions" },
          { text: "Action planning frameworks" }
        ]
      },
      {
        title: "Premium Venues",
        description: "From city retreats to resort escapes, we curate the perfect setting for your leadership team.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920",
        points: [
          { text: "Private meeting facilities" },
          { text: "Executive accommodation" },
          { text: "Fine dining experiences" },
          { text: "Wellness and recreation options" }
        ]
      },
      {
        title: "Team Bonding Elements",
        description: "Balance strategic work with activities that strengthen leadership team connections.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920",
        points: [
          { text: "Executive team challenges" },
          { text: "Leadership coaching sessions" },
          { text: "Informal networking dinners" },
          { text: "Wellness activities" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
      "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800"
    ],
    testimonials: [
      { quote: "The most productive leadership retreat we've ever had. Exceptional facilitation.", author: "Richard Lee", company: "Temasek Holdings" },
      { quote: "Perfect balance of strategic sessions and team bonding activities.", author: "Susan Chong", company: "Singapore Airlines" },
      { quote: "Team Elevate understood exactly what our leadership team needed.", author: "Kenneth Tan", company: "UOB Bank" },
      { quote: "The venue selection was perfect. Inspired great thinking.", author: "Amanda Wong", company: "CapitaLand" },
      { quote: "We achieved more alignment in 2 days than 6 months of meetings.", author: "Daniel Goh", company: "Mapletree" },
      { quote: "The facilitation brought out insights we never expected.", author: "Michelle Teo", company: "GIC" }
    ],
    faqs: [
      { question: "Do you provide strategy facilitation?", answer: "Yes, we offer experienced facilitators who can guide strategic discussions, or we can work with your preferred facilitator." },
      { question: "What venue options are available?", answer: "We source premium venues including luxury hotels, resort retreats, and private estates both locally and regionally." },
      { question: "How do you ensure confidentiality?", answer: "We ensure private meeting spaces, NDAs for all vendors, and secure handling of all materials and discussions." },
      { question: "Can you incorporate executive coaching?", answer: "Yes, we can arrange leadership coaches and team development specialists as part of your offsite program." },
      { question: "What's the ideal duration?", answer: "Most leadership offsites run 1.5-3 days, depending on your objectives and agenda requirements." }
    ],
    cta: {
      headline: "Ready to Align Your Leadership Team?",
      subtext: "Let's design a strategic offsite that transforms vision into action."
    }
  },
  "product-launch": {
    accentColor: "#9B51E0",
    hero: {
      title: "Product Launch Events",
      subtitle: "Launch",
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
    activities: {
      sectionTitle: "LAUNCH FORMATS",
      items: ["Grand Unveiling Ceremony", "Live Demo Experience", "VIP Preview Night", "Media Launch Event", "Interactive Exhibition", "Roadshow Activation", "Digital Launch Broadcast", "Influencer Showcase", "Customer Experience Day", "Pop-Up Launch Store", "Virtual Reality Preview", "Celebrity Endorsement Event"]
    },
    alternatingSections: [
      {
        title: "The Big Reveal",
        description: "Create show-stopping product reveal moments that captivate your audience and media.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920",
        points: [
          { text: "Dramatic unveiling sequences" },
          { text: "Immersive product experiences" },
          { text: "Live demonstration stations" },
          { text: "Hands-on trial opportunities" }
        ]
      },
      {
        title: "Media & Influencer Strategy",
        description: "Maximize coverage and social buzz with our comprehensive media management.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Press conference coordination" },
          { text: "Influencer hosting and engagement" },
          { text: "Social media content creation" },
          { text: "Post-event media outreach" }
        ]
      },
      {
        title: "Immersive Brand Experiences",
        description: "Transform your product launch into a multi-sensory brand experience.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Interactive brand installations" },
          { text: "Photo-worthy backdrops" },
          { text: "Branded merchandise and giveaways" },
          { text: "VIP experience zones" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "Our product launch exceeded all expectations. The buzz was incredible!", author: "Emily Tan", company: "Samsung Singapore" },
      { quote: "Team Elevate created an experience our customers are still talking about.", author: "Jason Lee", company: "Apple Southeast Asia" },
      { quote: "The perfect blend of showmanship and substance. Highly recommended!", author: "Rachel Koh", company: "Sony Singapore" },
      { quote: "Media coverage exceeded our KPIs by 200%. Amazing execution!", author: "Marcus Wong", company: "Huawei Singapore" },
      { quote: "The influencer engagement was perfectly managed.", author: "Sarah Lim", company: "OPPO Singapore" },
      { quote: "Best product launch we've ever done. Sales were immediate.", author: "Kenneth Tan", company: "Dyson Singapore" }
    ],
    faqs: [
      { question: "How do you handle media relations?", answer: "We coordinate press invitations, media kits, press conferences, and post-event follow-up to maximize coverage." },
      { question: "Can you manage influencer engagement?", answer: "Yes, we handle influencer identification, invitations, hosting, and content coordination for social media amplification." },
      { question: "What product demo capabilities do you have?", answer: "We can create interactive demonstration stations, hands-on experience zones, and live presentation setups." },
      { question: "Do you handle hybrid launch events?", answer: "Absolutely! We can broadcast to global audiences and create engaging virtual participation elements." },
      { question: "What's the typical lead time for a product launch?", answer: "We recommend 6-8 weeks minimum, though larger launches may require 3-6 months of planning." }
    ],
    cta: {
      headline: "Ready to Launch with Impact?",
      subtext: "Let's create a product launch that captures attention and drives results."
    }
  },
  "brand-activations": {
    accentColor: "#F2C744",
    hero: {
      title: "Brand Activations",
      subtitle: "Activation",
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
    activities: {
      sectionTitle: "ACTIVATION TYPES",
      items: ["Pop-Up Experience", "Mall Activation", "Roadshow Campaign", "Festival Booth", "Sampling Station", "Interactive Installation", "Brand Mascot Experience", "Gamification Zone", "Photo Opportunity Setup", "Virtual Reality Experience", "Social Media Challenge", "Community Event Sponsorship"]
    },
    alternatingSections: [
      {
        title: "Experiential Installations",
        description: "Create Instagram-worthy brand moments that consumers want to share.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920",
        points: [
          { text: "Interactive photo opportunities" },
          { text: "Gamified brand experiences" },
          { text: "Sensory brand immersions" },
          { text: "Pop-up brand spaces" }
        ]
      },
      {
        title: "Consumer Engagement",
        description: "Turn passive audiences into active participants with engaging brand interactions.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Sampling and trial programs" },
          { text: "Interactive games and contests" },
          { text: "Live demonstrations" },
          { text: "Community building activities" }
        ]
      },
      {
        title: "Measurable Impact",
        description: "Track engagement metrics and ROI for data-driven brand activation strategies.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Footfall and dwell time tracking" },
          { text: "Social media mentions monitoring" },
          { text: "Lead capture and database building" },
          { text: "Post-activation surveys" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800"
    ],
    testimonials: [
      { quote: "Our brand activation drove incredible engagement and social buzz.", author: "Amanda Wong", company: "Nike Singapore" },
      { quote: "Team Elevate truly understood our brand and brought it to life beautifully.", author: "Marcus Lim", company: "Coca-Cola Singapore" },
      { quote: "The activation exceeded our KPIs and created lasting brand memories.", author: "Jessica Tan", company: "Red Bull Asia" },
      { quote: "Social media engagement was through the roof. Amazing content generation!", author: "Kevin Goh", company: "Adidas Singapore" },
      { quote: "The experiential elements perfectly captured our brand essence.", author: "Sarah Lee", company: "Unilever Singapore" },
      { quote: "ROI was clearly measurable. Will definitely partner again.", author: "Daniel Wong", company: "P&G Singapore" }
    ],
    faqs: [
      { question: "What types of brand activations do you specialize in?", answer: "We handle pop-up experiences, roadshows, mall activations, event sponsorship activations, and experiential marketing installations." },
      { question: "Can you handle multi-location activations?", answer: "Yes, we can manage simultaneous activations across multiple venues and cities." },
      { question: "How do you measure activation success?", answer: "We track footfall, dwell time, social mentions, leads captured, samples distributed, and conduct post-activation surveys." },
      { question: "Do you provide brand ambassadors?", answer: "Yes, we recruit, train, and manage brand ambassadors who authentically represent your brand." },
      { question: "What's the typical activation duration?", answer: "Activations can range from single-day events to multi-week campaigns depending on your objectives." }
    ],
    cta: {
      headline: "Ready to Activate Your Brand?",
      subtext: "Let's create experiences that turn audiences into advocates."
    }
  },
  "client-appreciation": {
    accentColor: "#E4AFA3",
    hero: {
      title: "Client Appreciation",
      subtitle: "Appreciation",
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
    activities: {
      sectionTitle: "EXPERIENCE OPTIONS",
      items: ["Private Dining Experience", "Yacht Charter Event", "Wine Tasting Evening", "Golf Tournament Day", "Spa & Wellness Retreat", "Art Gallery Preview", "Concert VIP Experience", "Exclusive Workshop", "Behind-the-Scenes Tour", "Gourmet Cooking Class", "Luxury Brand Experience", "Cultural Immersion Tour"]
    },
    alternatingSections: [
      {
        title: "VIP Treatment",
        description: "Make every client feel like your most important one with personalized touches throughout.",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920",
        points: [
          { text: "Personal welcome greetings" },
          { text: "Custom name cards and gifts" },
          { text: "Dedicated hospitality attention" },
          { text: "Premium seating arrangements" }
        ]
      },
      {
        title: "Exclusive Experiences",
        description: "Offer access to unique experiences your clients won't find anywhere else.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Private dining experiences" },
          { text: "Behind-the-scenes access" },
          { text: "Expert speaker sessions" },
          { text: "Unique entertainment" }
        ]
      },
      {
        title: "Networking Opportunities",
        description: "Create valuable connection opportunities among your client community.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Facilitated introductions" },
          { text: "Interest-based groupings" },
          { text: "Collaborative activities" },
          { text: "Follow-up connection support" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
    ],
    testimonials: [
      { quote: "Our clients felt truly valued. The event strengthened our partnerships significantly.", author: "Jonathan Ng", company: "Credit Suisse" },
      { quote: "The attention to personalization was exceptional. Each client felt special.", author: "Diana Teo", company: "Standard Chartered" },
      { quote: "A masterclass in client appreciation. Team Elevate delivers excellence.", author: "Victor Chua", company: "Julius Baer" },
      { quote: "Our top clients are now our biggest advocates. Incredible ROI.", author: "Amanda Lee", company: "HSBC Singapore" },
      { quote: "The networking facilitation led to new business among our clients.", author: "Richard Tan", company: "Citi Singapore" },
      { quote: "Premium experience from start to finish. Clients were impressed.", author: "Michelle Wong", company: "Morgan Stanley" }
    ],
    faqs: [
      { question: "How do you personalize the experience for each client?", answer: "We work with you to gather client preferences, interests, and history to create personalized touches throughout the event." },
      { question: "What venue types work best?", answer: "We recommend exclusive venues like private dining rooms, boutique hotels, yacht charters, or unique spaces that convey exclusivity." },
      { question: "Can you accommodate dietary and cultural requirements?", answer: "Absolutely. We carefully manage all dietary requirements and cultural sensitivities for each guest." },
      { question: "How do you handle gift and takeaway items?", answer: "We can source, customize, and manage premium gifts that reflect your brand and appreciation for each client." },
      { question: "What's the ideal group size?", answer: "Client appreciation events work best with 20-100 guests to maintain the exclusive, intimate feel." }
    ],
    cta: {
      headline: "Ready to Appreciate Your Clients?",
      subtext: "Let's create experiences that turn clients into lifelong partners."
    }
  },
  "town-halls": {
    accentColor: "#295CFF",
    hero: {
      title: "Town Halls & Conferences",
      subtitle: "Town Hall",
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
    activities: {
      sectionTitle: "EVENT FORMATS",
      items: ["All-Hands Meeting", "Annual General Meeting", "Quarterly Business Review", "Strategy Announcement", "Leadership Address", "Company-Wide Town Hall", "Regional Conference", "Sales Kick-Off", "Change Communication", "Policy Update Briefing", "Financial Results Presentation", "Vision & Mission Launch"]
    },
    alternatingSections: [
      {
        title: "Engaging Presentation Design",
        description: "Transform corporate messages into compelling narratives that resonate.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Visual presentation design" },
          { text: "Executive coaching for speakers" },
          { text: "Script development support" },
          { text: "Rehearsal and run-through coordination" }
        ]
      },
      {
        title: "Interactive Elements",
        description: "Keep your audience engaged with real-time participation opportunities.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Live polling and surveys" },
          { text: "Q&A session management" },
          { text: "Audience response systems" },
          { text: "Gamification elements" }
        ]
      },
      {
        title: "Hybrid Excellence",
        description: "Ensure remote attendees feel equally included and engaged.",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1920",
        points: [
          { text: "Professional live streaming" },
          { text: "Virtual audience engagement tools" },
          { text: "Multi-location connectivity" },
          { text: "On-demand replay options" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800"
    ],
    testimonials: [
      { quote: "Our town hall has never been more engaging. Employees loved the interactive elements.", author: "Catherine Lee", company: "Prudential Singapore" },
      { quote: "The hybrid execution was flawless. Everyone felt equally included.", author: "Benjamin Tan", company: "AIA Singapore" },
      { quote: "Team Elevate transformed our annual conference into an inspiring experience.", author: "Helen Wong", company: "Great Eastern" },
      { quote: "Production quality was outstanding. Made our message truly impactful.", author: "David Lim", company: "NTUC Income" },
      { quote: "The Q&A facilitation kept energy high throughout.", author: "Rachel Goh", company: "Manulife Singapore" },
      { quote: "Best company-wide event we've hosted. Clear and engaging.", author: "Kenneth Tan", company: "AXA Singapore" }
    ],
    faqs: [
      { question: "Can you support hybrid town halls?", answer: "Yes! We specialize in hybrid events with professional streaming, virtual engagement tools, and seamless integration of remote and in-person attendees." },
      { question: "Do you provide presentation design services?", answer: "We offer full presentation design support, including visual design, content structuring, and executive coaching for speakers." },
      { question: "How do you keep large audiences engaged?", answer: "We use interactive polling, gamification, Q&A sessions, and professional hosting to maintain energy and engagement throughout." },
      { question: "What technical production is included?", answer: "Our packages include staging, lighting, sound, video production, live streaming, and event recording." },
      { question: "Can you handle multi-location broadcasts?", answer: "Yes, we can coordinate simultaneous broadcasts to multiple office locations with two-way interaction capabilities." }
    ],
    cta: {
      headline: "Ready to Unite Your Organization?",
      subtext: "Let's create town halls that inform, inspire, and energize your people."
    }
  },
  "immersive-experiences": {
    accentColor: "#43F0D8",
    hero: {
      title: "Immersive Experiences",
      subtitle: "Immersive",
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
    activities: {
      sectionTitle: "EXPERIENCE THEMES",
      items: ["Murder Mystery Night", "Escape Room Adventure", "Circus Spectacular", "Jungle Safari", "Under the Sea", "Space Station Mission", "Medieval Kingdom", "Superhero Universe", "Detective Investigation", "Time Travel Journey", "Fantasy Realm Quest", "Secret Agent Mission"]
    },
    alternatingSections: [
      {
        title: "Complete World Building",
        description: "We create fully realized worlds with detailed environments, characters, and storylines.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920",
        points: [
          { text: "Custom set design and construction" },
          { text: "Thematic prop sourcing" },
          { text: "Costume and character development" },
          { text: "Environmental soundscapes" }
        ]
      },
      {
        title: "Multi-Sensory Engagement",
        description: "Engage all five senses for a truly immersive experience.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Signature scents for each zone" },
          { text: "Themed food and beverages" },
          { text: "Tactile interactive elements" },
          { text: "Immersive audio design" }
        ]
      },
      {
        title: "Theme Options",
        description: "From classic elegance to sci-fi adventures, we bring any theme to life.",
        image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1920",
        points: [
          { text: "Enchanted Forest" },
          { text: "Futuristic Metropolis" },
          { text: "Underwater Kingdom" },
          { text: "Space Odyssey" }
        ]
      }
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
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800"
    ],
    testimonials: [
      { quote: "We stepped into another world entirely. Absolutely magical!", author: "Lisa Chen", company: "Facebook Singapore" },
      { quote: "The attention to detail was incredible. Every corner was Instagram-worthy.", author: "Tom Lim", company: "TikTok Singapore" },
      { quote: "Our guests are still talking about it months later. Unforgettable!", author: "Sarah Ng", company: "ByteDance" },
      { quote: "The multi-sensory elements made it truly immersive.", author: "Kevin Tan", company: "Google Singapore" },
      { quote: "Most creative event we've ever hosted. Blown away!", author: "Amanda Wong", company: "Netflix Singapore" },
      { quote: "The world-building was extraordinary. Felt like a movie set.", author: "Daniel Lee", company: "Disney Southeast Asia" }
    ],
    faqs: [
      { question: "How elaborate can the immersive experience be?", answer: "We can create anything from themed zones within a venue to complete environmental transformations. Our team includes set designers, fabricators, and creative technologists." },
      { question: "What themes are most popular?", answer: "Popular themes include fantasy worlds, futuristic/sci-fi, vintage eras, cultural celebrations, and brand-specific universes." },
      { question: "Can you incorporate technology?", answer: "Yes! We integrate projection mapping, AR/VR elements, interactive installations, and special effects to enhance immersion." },
      { question: "What's the lead time for immersive events?", answer: "Due to the production complexity, we recommend 8-12 weeks minimum for fully immersive experiences." },
      { question: "Do you provide performers and actors?", answer: "Yes, we cast and costume performers who bring the world to life through character interactions." }
    ],
    cta: {
      headline: "Ready to Create Another World?",
      subtext: "Let's transport your guests to extraordinary realms of wonder."
    }
  },
  "wellness-events": {
    accentColor: "#A5F0D0",
    hero: {
      title: "Wellness Events",
      subtitle: "Wellness",
      tagline: "Nurturing wellbeing, inspiring balance, elevating your team.",
      backgroundImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920"
    },
    overview: {
      description: "Promote employee wellbeing with thoughtfully designed wellness events that nurture mind, body, and spirit. From meditation sessions to fitness challenges, we create experiences that support holistic health and demonstrate your commitment to your team's wellness.",
      backgroundImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920"
    },
    features: [
      { icon: Dumbbell, title: "Wellness Activity Curation", description: "Diverse activities for all fitness levels." },
      { icon: Heart, title: "Mental Health Sessions", description: "Mindfulness and stress management programs." },
      { icon: Users, title: "Expert Facilitators", description: "Certified wellness professionals." },
      { icon: Sparkles, title: "Holistic Approach", description: "Mind, body, and spirit integration." },
      { icon: Target, title: "Wellness Assessments", description: "Personalized health insights." },
      { icon: Gift, title: "Wellness Kits", description: "Take-home resources for continued practice." }
    ],
    benefits: [
      { icon: Heart, title: "Reduced Stress", description: "Practical tools for stress management." },
      { icon: Zap, title: "Increased Energy", description: "Revitalized and motivated teams." },
      { icon: Users, title: "Team Connection", description: "Bond through shared wellness experiences." },
      { icon: Star, title: "Employee Appreciation", description: "Show you care about their wellbeing." },
      { icon: Target, title: "Productivity Boost", description: "Healthier employees perform better." }
    ],
    activities: {
      sectionTitle: "WELLNESS ACTIVITIES",
      items: ["Corporate Yoga Session", "Guided Meditation", "Mindfulness Workshop", "Fitness Bootcamp", "Nutrition Workshop", "Stress Management Class", "Sound Healing", "Nature Walk Therapy", "Pilates Session", "Breathwork Experience", "Wellness Cooking Class", "Sleep Optimization Talk"]
    },
    alternatingSections: [
      {
        title: "Physical Wellness",
        description: "Get your team moving with fun, inclusive activities for all fitness levels.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920",
        points: [
          { text: "Yoga and stretching sessions" },
          { text: "Team fitness challenges" },
          { text: "Dance and movement classes" },
          { text: "Outdoor activities and hikes" }
        ]
      },
      {
        title: "Mental Wellness",
        description: "Support mental health with mindfulness and stress reduction programs.",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920",
        points: [
          { text: "Guided meditation sessions" },
          { text: "Stress management workshops" },
          { text: "Breathwork and relaxation" },
          { text: "Mental health awareness talks" }
        ]
      },
      {
        title: "Holistic Experiences",
        description: "Integrate mind, body, and spirit for complete wellbeing.",
        image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1920",
        points: [
          { text: "Sound healing sessions" },
          { text: "Nutrition workshops" },
          { text: "Spa and relaxation experiences" },
          { text: "Nature immersion activities" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
    ],
    testimonials: [
      { quote: "The wellness day was exactly what our team needed. Everyone felt recharged.", author: "Michelle Lim", company: "Unilever Singapore" },
      { quote: "Professional instructors and thoughtfully curated activities. Highly recommended!", author: "David Tan", company: "Johnson & Johnson" },
      { quote: "Our employees rated it the best wellness initiative we've ever done.", author: "Sarah Goh", company: "P&G Singapore" },
      { quote: "The mental wellness component was especially valuable.", author: "Kevin Wong", company: "GSK Singapore" },
      { quote: "Inclusive activities that everyone could participate in.", author: "Amanda Lee", company: "Merck Singapore" },
      { quote: "Team bonding through wellness was a great combination.", author: "Richard Tan", company: "Sanofi Singapore" }
    ],
    faqs: [
      { question: "What activities can be included?", answer: "Options include yoga, meditation, fitness classes, nutritionworkshops, spa experiences, outdoor activities, and mental health sessions." },
      { question: "Can activities be adapted for all fitness levels?", answer: "Absolutely! We ensure all activities are inclusive and offer modifications for different abilities and fitness levels." },
      { question: "Do you provide certified instructors?", answer: "Yes, all our wellness facilitators are certified professionals in their respective disciplines." },
      { question: "Can wellness events be held outdoors?", answer: "We offer both indoor and outdoor wellness experiences, including nature walks, beach yoga, and park activities." },
      { question: "What wellness resources can participants take home?", answer: "We can provide wellness kits including guides, apps, equipment, and resources for continued practice." }
    ],
    cta: {
      headline: "Ready to Invest in Your Team's Wellbeing?",
      subtext: "Let's create wellness experiences that nurture and energize your people."
    }
  },
  "event-concept": {
    accentColor: "#C0C0C0",
    hero: {
      title: "Event Concept Development",
      subtitle: "Concept",
      tagline: "Where vision transforms into extraordinary experiences.",
      backgroundImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920"
    },
    overview: {
      description: "Turn your event vision into reality with our comprehensive concept development services. We work closely with you to craft unique event narratives, design immersive experiences, and create detailed execution plans that bring your ideas to life with precision and creativity.",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
    },
    features: [
      { icon: Lightbulb, title: "Creative Ideation", description: "Brainstorming sessions that spark innovative concepts." },
      { icon: Palette, title: "Theme Development", description: "Cohesive narratives that tie your event together." },
      { icon: PenTool, title: "Visual Design", description: "Mood boards, renderings, and design specifications." },
      { icon: Target, title: "Strategic Alignment", description: "Concepts that achieve your event objectives." },
      { icon: Users, title: "Stakeholder Workshops", description: "Collaborative sessions to refine your vision." },
      { icon: Monitor, title: "Production Planning", description: "Detailed technical and logistics specifications." }
    ],
    benefits: [
      { icon: Star, title: "Unique Concepts", description: "Events that stand out from the crowd." },
      { icon: Target, title: "Clear Direction", description: "Defined vision for all stakeholders." },
      { icon: Sparkles, title: "Creative Excellence", description: "Innovative ideas that inspire." },
      { icon: Clock, title: "Efficient Execution", description: "Detailed plans prevent last-minute surprises." },
      { icon: Heart, title: "Memorable Experiences", description: "Concepts designed for impact." }
    ],
    activities: {
      sectionTitle: "CONCEPT SERVICES",
      items: ["Theme Development", "Narrative Design", "3D Renderings", "Mood Board Creation", "Experience Flow Mapping", "Stakeholder Workshops", "Venue Scouting", "Vendor Coordination", "Budget Planning", "Timeline Development", "Risk Assessment", "Creative Direction"]
    },
    alternatingSections: [
      {
        title: "Discovery & Ideation",
        description: "We start by understanding your vision, objectives, and audience to spark creative concepts.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920",
        points: [
          { text: "Stakeholder interviews and briefings" },
          { text: "Creative brainstorming sessions" },
          { text: "Competitive landscape analysis" },
          { text: "Audience persona development" }
        ]
      },
      {
        title: "Concept Design",
        description: "Transform ideas into tangible concepts with visual presentations and detailed specifications.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920",
        points: [
          { text: "Theme and narrative development" },
          { text: "Mood boards and visual direction" },
          { text: "3D renderings and layouts" },
          { text: "Experience flow mapping" }
        ]
      },
      {
        title: "Production Planning",
        description: "Detailed execution plans ensure your concept comes to life exactly as envisioned.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Technical specifications" },
          { text: "Vendor coordination plans" },
          { text: "Timeline and run sheets" },
          { text: "Budget breakdowns" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800"
    ],
    testimonials: [
      { quote: "The concept development process was incredibly thorough. Exceeded our expectations!", author: "Lisa Wong", company: "L'Oreal Singapore" },
      { quote: "Team Elevate transformed our vague ideas into a stunning event concept.", author: "Marcus Tan", company: "Chanel Singapore" },
      { quote: "The visual presentations made it easy to get stakeholder buy-in.", author: "Amanda Lee", company: "Gucci Singapore" },
      { quote: "Creative and practical - they understood our brand perfectly.", author: "Kevin Goh", company: "Louis Vuitton Singapore" },
      { quote: "The production plans were so detailed, execution was seamless.", author: "Sarah Chen", company: "Dior Singapore" },
      { quote: "Best concept development experience we've had.", author: "Daniel Lim", company: "Hermès Singapore" }
    ],
    faqs: [
      { question: "What's included in concept development?", answer: "Our service includes discovery sessions, creative brainstorming, theme development, visual presentations, 3D renderings, and detailed production specifications." },
      { question: "How many concept options do you present?", answer: "We typically develop 2-3 distinct concept directions for you to choose from, then refine the selected concept." },
      { question: "Can you work with our existing ideas?", answer: "Absolutely! We can develop your existing vision or start from scratch based on your objectives." },
      { question: "Do you handle execution as well?", answer: "Yes, we can provide end-to-end service from concept to execution, or hand over detailed plans to your production team." },
      { question: "What's the typical timeline for concept development?", answer: "Concept development typically takes 2-4 weeks depending on complexity and stakeholder availability." }
    ],
    cta: {
      headline: "Ready to Bring Your Vision to Life?",
      subtext: "Let's develop an event concept that exceeds your imagination."
    }
  },
  "stage-production": {
    accentColor: "#FFB347",
    hero: {
      title: "Stage & AV Production",
      subtitle: "Production",
      tagline: "Where technology meets artistry to create unforgettable moments.",
      backgroundImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
    },
    overview: {
      description: "Elevate your events with professional stage design and audio-visual production that creates immersive, impactful experiences. Our technical team brings together cutting-edge technology with creative artistry to deliver flawless productions that captivate audiences.",
      backgroundImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920"
    },
    features: [
      { icon: Monitor, title: "Stage Design", description: "Custom stage constructions that wow audiences." },
      { icon: Volume2, title: "Audio Systems", description: "Crystal-clear sound for every size venue." },
      { icon: Lightbulb, title: "Lighting Design", description: "Atmospheric lighting that sets the mood." },
      { icon: Video, title: "Video Production", description: "LED walls, projection mapping, and live video." },
      { icon: Sparkles, title: "Special Effects", description: "Pyrotechnics, confetti, and atmospheric effects." },
      { icon: Users, title: "Technical Crew", description: "Experienced technicians for seamless execution." }
    ],
    benefits: [
      { icon: Star, title: "Professional Quality", description: "Broadcast-grade production values." },
      { icon: Camera, title: "Visual Impact", description: "Stunning visuals that captivate." },
      { icon: Zap, title: "Reliable Execution", description: "Technical excellence with backup systems." },
      { icon: Heart, title: "Emotional Moments", description: "Technology that enhances storytelling." },
      { icon: Sparkles, title: "Memorable Experiences", description: "Production that elevates every moment." }
    ],
    activities: {
      sectionTitle: "PRODUCTION SERVICES",
      items: ["Custom Stage Design", "LED Wall Setup", "Projection Mapping", "Intelligent Lighting", "Professional Sound System", "Live Streaming", "Confetti & Pyrotechnics", "Fog & Haze Effects", "Moving Head Lights", "Truss & Rigging", "Video Playback", "Technical Direction"]
    },
    alternatingSections: [
      {
        title: "Stage Design & Construction",
        description: "Custom stage builds that create the perfect platform for your event.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Custom stage design and fabrication" },
          { text: "LED screen integration" },
          { text: "Scenic elements and backdrops" },
          { text: "Rigging and structural engineering" }
        ]
      },
      {
        title: "Audio-Visual Excellence",
        description: "State-of-the-art technology for crystal-clear sound and stunning visuals.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Professional sound systems" },
          { text: "Intelligent lighting rigs" },
          { text: "LED walls and projection" },
          { text: "Live streaming capabilities" }
        ]
      },
      {
        title: "Special Effects",
        description: "Add magic to your event with spectacular effects and atmospheric elements.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Confetti and streamer cannons" },
          { text: "Haze and fog machines" },
          { text: "CO2 jets and cold pyro" },
          { text: "Bubble and snow effects" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800"
    ],
    testimonials: [
      { quote: "The stage production was absolutely world-class. Impressed everyone!", author: "Richard Wong", company: "Singtel" },
      { quote: "Technical execution was flawless. The team handled everything professionally.", author: "Amanda Tan", company: "StarHub" },
      { quote: "The lighting design transformed our venue completely.", author: "Kevin Lee", company: "MediaCorp" },
      { quote: "Best AV production we've ever experienced at a corporate event.", author: "Michelle Goh", company: "SPH Media" },
      { quote: "The special effects made our launch unforgettable.", author: "Daniel Lim", company: "Mediacorp" },
      { quote: "From design to execution, everything was perfect.", author: "Sarah Chen", company: "Resorts World Sentosa" }
    ],
    faqs: [
      { question: "What production services do you offer?", answer: "We provide stage design, audio systems, lighting, LED/projection, live streaming, special effects, and full technical crew." },
      { question: "Do you work with venue in-house AV?", answer: "We can integrate with venue systems or bring our own equipment, depending on your requirements and venue restrictions." },
      { question: "Can you handle outdoor events?", answer: "Yes, we have weatherproof equipment and outdoor-rated systems for open-air events." },
      { question: "What backup systems do you have?", answer: "We always bring redundant equipment and backup systems for critical elements like sound, video playback, and power." },
      { question: "How early do you need venue access?", answer: "Depending on complexity, we typically need 1-3 days for load-in, setup, and technical rehearsals." }
    ],
    cta: {
      headline: "Ready for Production Excellence?",
      subtext: "Let's create a technical production that elevates your event to new heights."
    }
  },
  "custom-themes": {
    accentColor: "#7A2BE2",
    hero: {
      title: "Custom Theme Creation",
      subtitle: "Theme",
      tagline: "Where imagination takes form and events become works of art.",
      backgroundImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920"
    },
    overview: {
      description: "Transform ordinary venues into extraordinary themed environments with our custom theme creation services. From elegant galas to wild fantasy worlds, we design and execute cohesive themes that immerse guests in unforgettable experiences.",
      backgroundImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920"
    },
    features: [
      { icon: Palette, title: "Theme Conceptualization", description: "Original themes tailored to your vision." },
      { icon: PenTool, title: "Visual Design", description: "Mood boards, color palettes, and design guides." },
      { icon: Building, title: "Set Design & Fabrication", description: "Custom props and scenic elements." },
      { icon: Sparkles, title: "Decor & Styling", description: "Comprehensive venue transformation." },
      { icon: Music, title: "Sensory Integration", description: "Music, lighting, and scent to match." },
      { icon: Users, title: "Costume & Character Design", description: "Themed attire and performers." }
    ],
    benefits: [
      { icon: Star, title: "Unique Events", description: "One-of-a-kind themed experiences." },
      { icon: Camera, title: "Photo Opportunities", description: "Instagram-worthy moments throughout." },
      { icon: Heart, title: "Immersive Atmosphere", description: "Transport guests to another world." },
      { icon: Gem, title: "Brand Alignment", description: "Themes that reflect your identity." },
      { icon: Sparkles, title: "Lasting Memories", description: "Events they'll never forget." }
    ],
    activities: {
      sectionTitle: "POPULAR THEMES",
      items: ["Great Gatsby Art Deco", "Tropical Paradise", "Casino Royale", "Enchanted Garden", "Hollywood Glamour", "Futuristic Neon", "Rustic Charm", "Winter Wonderland", "Arabian Nights", "Carnival Fiesta", "Black & Gold Luxury", "Retro 80s"]
    },
    alternatingSections: [
      {
        title: "Theme Development",
        description: "We create original theme concepts that align with your vision and event objectives.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Creative concept development" },
          { text: "Mood boards and visual direction" },
          { text: "Color palette and design guides" },
          { text: "Theme narrative and storytelling" }
        ]
      },
      {
        title: "Venue Transformation",
        description: "Watch your venue transform into a completely different world.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920",
        points: [
          { text: "Custom set pieces and props" },
          { text: "Themed furniture and decor" },
          { text: "Entrance experiences" },
          { text: "Photo booth installations" }
        ]
      },
      {
        title: "Complete Sensory Design",
        description: "Engage all senses for full thematic immersion.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Themed music and soundscapes" },
          { text: "Signature scents" },
          { text: "Themed food and beverages" },
          { text: "Atmospheric lighting design" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    testimonials: [
      { quote: "The venue transformation was absolutely magical. Guests were blown away!", author: "Lisa Wong", company: "Raffles Hotel" },
      { quote: "Team Elevate brought our fantasy theme to life beyond our imagination.", author: "Marcus Tan", company: "Marina Bay Sands" },
      { quote: "Every detail was perfect. The theme was completely immersive.", author: "Amanda Lee", company: "Capella Singapore" },
      { quote: "Most creative themed event we've ever experienced.", author: "Kevin Goh", company: "St. Regis Singapore" },
      { quote: "The sensory elements really completed the experience.", author: "Sarah Chen", company: "Fullerton Hotel" },
      { quote: "Guests thought they'd stepped into a movie set!", author: "Daniel Lim", company: "W Singapore" }
    ],
    faqs: [
      { question: "What themes can you create?", answer: "We can create any theme imaginable - from classic elegance to fantasy worlds, vintage eras to futuristic visions. If you can dream it, we can build it." },
      { question: "Do you handle all decor and props?", answer: "Yes, we source, fabricate, and install all themed elements including props, furniture, florals, and specialty items." },
      { question: "Can themes be adapted to different budgets?", answer: "Absolutely! We can scale themes from intimate touches to full venue transformations based on your budget." },
      { question: "What happens to the decor after the event?", answer: "We handle all breakdown and removal. Some clients choose to keep certain items as mementos." },
      { question: "How do you ensure cohesive theming?", answer: "We create comprehensive design guides and oversee all vendors to ensure every element aligns with the theme." }
    ],
    cta: {
      headline: "Ready to Create Your Perfect Theme?",
      subtext: "Let's transform your venue into an unforgettable themed experience."
    }
  },
  "emcee-media": {
    accentColor: "#6C7A89",
    hero: {
      title: "Emcee, Photo & Video",
      subtitle: "Media",
      tagline: "Capturing moments, commanding stages, creating memories.",
      backgroundImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920"
    },
    overview: {
      description: "Complete your event with professional hosting and comprehensive media coverage. Our experienced emcees energize any event, while our photography and videography teams capture every precious moment with cinematic quality.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
    },
    features: [
      { icon: Mic, title: "Professional Emcees", description: "Charismatic hosts for any event type." },
      { icon: Camera, title: "Event Photography", description: "Professional coverage of every moment." },
      { icon: Video, title: "Videography", description: "Cinematic event documentation." },
      { icon: Sparkles, title: "Same-Day Edits", description: "Quick turnaround for instant sharing." },
      { icon: Monitor, title: "Live Streaming", description: "Broadcast to remote audiences." },
      { icon: PenTool, title: "Post-Production", description: "Professional editing and delivery." }
    ],
    benefits: [
      { icon: Star, title: "Engaging Events", description: "Hosts who energize every moment." },
      { icon: Camera, title: "Quality Coverage", description: "Professional documentation." },
      { icon: Heart, title: "Lasting Memories", description: "Moments captured forever." },
      { icon: Zap, title: "Fast Delivery", description: "Quick turnaround times." },
      { icon: Users, title: "Extended Reach", description: "Share with those who couldn't attend." }
    ],
    activities: {
      sectionTitle: "SERVICE OPTIONS",
      items: ["Event Emcee", "Wedding Emcee", "Bilingual Host", "Event Photography", "Corporate Headshots", "Photo Booth", "Same-Day Edit Video", "Highlight Reel", "Full Event Coverage", "Live Streaming", "Drone Videography", "Interview Videos"]
    },
    alternatingSections: [
      {
        title: "Professional Emcees",
        description: "Our experienced hosts bring energy, professionalism, and perfect timing to your event.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Bilingual and multilingual options" },
          { text: "Corporate and entertainment styles" },
          { text: "Script development support" },
          { text: "Audience interaction expertise" }
        ]
      },
      {
        title: "Photography Services",
        description: "Capture every smile, every moment, every memory with professional photography.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Event coverage photography" },
          { text: "Corporate headshots" },
          { text: "Photo booth services" },
          { text: "Instant prints available" }
        ]
      },
      {
        title: "Video Production",
        description: "From event highlights to full coverage, we deliver cinematic video content.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Multi-camera event coverage" },
          { text: "Same-day highlight reels" },
          { text: "Live streaming services" },
          { text: "Post-event documentary edits" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
    ],
    testimonials: [
      { quote: "The emcee was absolutely fantastic! Kept the energy high all night.", author: "Richard Wong", company: "DBS Bank" },
      { quote: "Photography quality was outstanding. Every shot was perfect.", author: "Amanda Tan", company: "OCBC Bank" },
      { quote: "The same-day edit video was a huge hit with our guests.", author: "Kevin Lee", company: "UOB Bank" },
      { quote: "Professional team from start to finish. Highly recommended!", author: "Michelle Goh", company: "Standard Chartered" },
      { quote: "Our emcee made even the formal segments entertaining.", author: "Daniel Lim", company: "Maybank Singapore" },
      { quote: "Best event coverage we've ever had. Worth every cent.", author: "Sarah Chen", company: "HSBC Singapore" }
    ],
    faqs: [
      { question: "What types of emcees are available?", answer: "We have emcees for corporate events, gala dinners, team building, conferences, and entertainment shows. Bilingual and multilingual options available." },
      { question: "How many photos/videos do we receive?", answer: "Deliverables depend on the package, but typically 300-500 edited photos for a full event and 3-5 minute highlight videos." },
      { question: "How quickly are photos/videos delivered?", answer: "Same-day edits for select photos/video highlights. Full galleries typically within 1-2 weeks." },
      { question: "Can you do live streaming?", answer: "Yes, we offer professional live streaming to platforms like YouTube, Facebook, Zoom, or custom platforms." },
      { question: "Do emcees help with script writing?", answer: "Yes, our emcees work with you on scripts, run-sheets, and can improvise professionally when needed." }
    ],
    cta: {
      headline: "Ready to Capture Your Event?",
      subtext: "Let's bring professional hosting and media coverage to your next event."
    }
  }
};
