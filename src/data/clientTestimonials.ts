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
 * Public-facing cards use short excerpts from verified Team Elevate Google
 * reviews and attributable testimonials on the official Team Elevate site.
 * A small number of excerpts are lightly trimmed for card length without
 * changing the reviewer's meaning. Internal source details are not rendered.
 */
export const clientTestimonials: ClientTestimonial[] = [
  {
    name: "Shahrul",
    role: "Outdoor team building at Gardens by the Bay",
    excerpt: "The activities were well-organised, engaging, and fun. The facilitators kept the momentum going and made sure everyone was involved.",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a Gardens by the Bay team-building session",
    verifiedAt: "2026-07-22",
    accent: "#2A8DFF",
  },
  {
    name: "Jenniiloh",
    role: "Corporate team building",
    excerpt: "The activities were thoughtfully curated and struck a great balance between fun and collaboration. The team truly enjoyed it.",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a corporate team-building session",
    verifiedAt: "2026-07-22",
    accent: "#26B982",
  },
  {
    name: "Joshua",
    role: "Facilitated team session",
    excerpt: "Steven and team brought so much energy and adapted really well to us! They were professional, yet brought so much fun and excitement.",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a facilitated team session",
    verifiedAt: "2026-07-22",
    accent: "#F4B400",
  },
  {
    name: "Jk",
    role: "Staff team building",
    excerpt: "The sessions were engaging, well-planned, and there was never a dull moment. Everything was fun, meaningful, and suited the whole staff.",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a staff team-building event",
    verifiedAt: "2026-07-22",
    accent: "#F25F5C",
  },
  {
    name: "Pwincezz",
    role: "Company team bonding",
    excerpt: "They had lots of new, fun games that made bonding with others easy and comfortable. Good job, guys!",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a company team-bonding event",
    verifiedAt: "2026-07-22",
    accent: "#8B5CF6",
  },
  {
    name: "LKW",
    role: "Facilitated games",
    excerpt: "The game was exciting and well organised. Kudos to all the facilitators - we had an enjoyable day!",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for facilitated team games",
    verifiedAt: "2026-07-22",
    accent: "#0EA5E9",
  },
  {
    name: "JNlynn",
    role: "2025 team bonding",
    excerpt: "The games were very well planned and super fun. We enjoyed ourselves very much - thank you Steven and team!",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a 2025 team-bonding event",
    verifiedAt: "2026-07-22",
    accent: "#EC4899",
  },
  {
    name: "WP",
    role: "Team-building event",
    excerpt: "The team from Elevate was professional in managing our team-building event. Overall, we had fun with them today.",
    rating: 5,
    sourceBrand: "Team Elevate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Team%20Elevate%20Singapore",
    sourceContext: "Five-star Google review for a team-building event",
    verifiedAt: "2026-07-22",
    accent: "#14B8A6",
  },
  {
    name: "Darren Tey",
    role: "Operations Manager",
    company: "Lonza",
    excerpt: "Team Elevate pulled off our last-minute virtual event in spectacular fashion. We had a real fun blast and loved the facilitators and games.",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for a 40-pax virtual event",
    verifiedAt: "2026-07-22",
    accent: "#2A8DFF",
  },
  {
    name: "Farzanah Begum",
    role: "Senior Officer for Development and Engagement",
    company: "A*STAR SIMTech",
    excerpt: "Our different departments all enjoyed the activities, from our newest members to management. We will definitely be back for more!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for repeat departmental programmes",
    verifiedAt: "2026-07-22",
    accent: "#8B5CF6",
  },
  {
    name: "Arianti Amalina",
    role: "Human Resource Officer",
    company: "Madame Tussauds Singapore",
    excerpt: "They were super accommodating to everything we needed for our Great Shootout Session. Highly recommend!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for a Laser Tag Shootout",
    verifiedAt: "2026-07-22",
    accent: "#F05462",
  },
  {
    name: "Jurgen Carlson",
    role: "Senior Partner and Management Head",
    company: "AMS AG",
    excerpt: "So many of our departments had a great time bonding - we are coming back for more! Everything was handled with care and professional standards.",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    sourceContext: "Official homepage testimonial for a short-notice event",
    verifiedAt: "2026-07-22",
    accent: "#F4B400",
  },
];
