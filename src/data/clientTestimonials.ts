export interface ClientTestimonial {
  name: string;
  displayName?: string;
  role?: string;
  company?: string;
  industry?: string;
  excerpt: string;
  rating?: 5;
  sourceBrand: "Elluminate" | "Team Elevate";
  sourceType: "google-review" | "client-testimonial" | "published-case-study";
  sourceUrl: string;
  sourceContext: string;
  verifiedAt: string;
  accent: string;
}

/**
 * Public-facing cards use exact excerpts from the official Elluminate and
 * Team Elevate websites. Source and review details stay here for internal
 * traceability; they are intentionally not rendered as visitor-facing copy.
 * Do not infer employers, ratings, or outcomes beyond the cited source.
 */
export const clientTestimonials: ClientTestimonial[] = [
  {
    name: "Darren Tey",
    role: "Operations Manager",
    company: "Lonza",
    excerpt: "We had to organize a last minute virtual teambuilding for 40 pax as 2020 came to a close and Team Elevate managed to pull it off in spectacular fashion! All of us had a real fun blast and we have nothing but good things to say about the facilitators and the games!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for Lonza",
    verifiedAt: "2026-07-22",
    accent: "#2A8DFF",
  },
  {
    name: "Farzanah Begum",
    role: "Senior Officer for Development and Engagement",
    company: "A*STAR SIMTech",
    excerpt: "Ever since we tried to have one teambuilding sessions with Team Elevate, we have not stopped since! All our different departments have enjoyed the activities that they have prepared, all from our newest members to our management teams! We will definitely be back for more!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for A*STAR SIMTech",
    verifiedAt: "2026-07-22",
    accent: "#8B5CF6",
  },
  {
    name: "Arianti Amalina",
    role: "Human Resource Officer",
    company: "Madame Tussauds Singapore",
    excerpt: "Team Elevate and Energize Singapore brought us an incredible Laser Tag Shootout Teambuilding Experience with our whole entire staff team! They were super accommodating to the many elements that we had to have during our Great Shootout Session. They handled it for amazing care and professionalism all around! Highly recommend!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for Madame Tussauds Singapore",
    verifiedAt: "2026-07-22",
    accent: "#F05462",
  },
  {
    name: "Jurgen Carlson",
    role: "Senior Partner and Management Head",
    company: "AMS AG",
    excerpt: "Thank you so much to Team Elevate for organizing our teambuilding event on such short notices! So many of our departments are having a great time bonding with each other, we are coming back for more! Also, with so many restrictions to take note of, they handled it with such delicate care and professional standards!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for AMS AG",
    verifiedAt: "2026-07-22",
    accent: "#F4B400",
  },
  {
    name: "Technology team",
    displayName: "Technology team",
    role: "Amazing Race",
    industry: "Technology",
    excerpt: "Elluminate created an unforgettable experience that had our entire team talking for weeks. The Amazing Race format was perfect for building connections across departments.",
    sourceBrand: "Elluminate",
    sourceType: "published-case-study",
    sourceUrl: "https://elluminate.sg/",
    sourceContext: "Official homepage case study: Tech Company Amazing Race",
    verifiedAt: "2026-07-22",
    accent: "#26B982",
  },
  {
    name: "Finance team",
    displayName: "Finance team",
    role: "Company team day",
    industry: "Banking & finance",
    excerpt: "The level of creativity and attention to detail was impressive. Our teams were fully engaged from start to finish. A truly world-class team building experience.",
    sourceBrand: "Elluminate",
    sourceType: "published-case-study",
    sourceUrl: "https://elluminate.sg/",
    sourceContext: "Official homepage case study: Financial Services Team Day",
    verifiedAt: "2026-07-22",
    accent: "#0EA5E9",
  },
  {
    name: "Healthcare team",
    displayName: "Healthcare team",
    role: "Wellness retreat",
    industry: "Healthcare",
    excerpt: "Elluminate understood exactly what our healthcare workers needed – a rejuvenating experience that brought our teams closer together while promoting wellbeing.",
    sourceBrand: "Elluminate",
    sourceType: "published-case-study",
    sourceUrl: "https://elluminate.sg/",
    sourceContext: "Official homepage case study: Healthcare Wellness Retreat",
    verifiedAt: "2026-07-22",
    accent: "#F25F5C",
  },
  {
    name: "Startup team",
    displayName: "Startup team",
    role: "Cultural Race",
    industry: "Technology startup",
    excerpt: "The Cultural Race was a brilliant way to help our international team connect with Singapore's rich heritage while building stronger bonds with each other.",
    sourceBrand: "Elluminate",
    sourceType: "published-case-study",
    sourceUrl: "https://elluminate.sg/",
    sourceContext: "Official homepage case study: Startup Culture Race",
    verifiedAt: "2026-07-22",
    accent: "#8B5CF6",
  },
];
