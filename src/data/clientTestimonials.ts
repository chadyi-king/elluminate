export interface ClientTestimonial {
  name: string;
  role?: string;
  company?: string;
  excerpt: string;
  rating?: 5;
  sourceBrand: "Elluminate" | "Team Elevate";
  sourceType: "google-review" | "client-testimonial";
  sourceUrl: string;
  verifiedAt: "2026-07-21";
  accent: string;
}

/**
 * Truth-checked excerpts from Elluminate Google reviews and attributable
 * Team Elevate client stories. Do not infer employers for Google reviewers
 * or add a star rating to client stories that were published without one.
 */
export const clientTestimonials: ClientTestimonial[] = [
  {
    name: "Jamie Teo",
    excerpt: "Great experience!",
    rating: 5,
    sourceBrand: "Elluminate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/place/Elluminate+Singapore/data=!4m7!3m6!1s0x31da1b985fa7e40b:0x4aa6c01c0f8a8399!8m2!3d1.2831187!4d103.8167431!16s%2Fg%2F11njqq0x_c",
    verifiedAt: "2026-07-21",
    accent: "#2A8DFF",
  },
  {
    name: "Amirah Sabanni",
    excerpt: "Energetic and sporting!",
    rating: 5,
    sourceBrand: "Elluminate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/place/Elluminate+Singapore/data=!4m7!3m6!1s0x31da1b985fa7e40b:0x4aa6c01c0f8a8399!8m2!3d1.2831187!4d103.8167431!16s%2Fg%2F11njqq0x_c",
    verifiedAt: "2026-07-21",
    accent: "#26B982",
  },
  {
    name: "Abdussalam Muhamad Ekhsan",
    excerpt: "Simple yet meaningful.",
    rating: 5,
    sourceBrand: "Elluminate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/place/Elluminate+Singapore/data=!4m7!3m6!1s0x31da1b985fa7e40b:0x4aa6c01c0f8a8399!8m2!3d1.2831187!4d103.8167431!16s%2Fg%2F11njqq0x_c",
    verifiedAt: "2026-07-21",
    accent: "#F4B400",
  },
  {
    name: "Mohamad Ridhwan Masud",
    excerpt: "Well done.",
    rating: 5,
    sourceBrand: "Elluminate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/place/Elluminate+Singapore/data=!4m7!3m6!1s0x31da1b985fa7e40b:0x4aa6c01c0f8a8399!8m2!3d1.2831187!4d103.8167431!16s%2Fg%2F11njqq0x_c",
    verifiedAt: "2026-07-21",
    accent: "#F25F5C",
  },
  {
    name: "Muhamad Hazeem",
    excerpt: "Great team building activities!",
    rating: 5,
    sourceBrand: "Elluminate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/place/Elluminate+Singapore/data=!4m7!3m6!1s0x31da1b985fa7e40b:0x4aa6c01c0f8a8399!8m2!3d1.2831187!4d103.8167431!16s%2Fg%2F11njqq0x_c",
    verifiedAt: "2026-07-21",
    accent: "#8B5CF6",
  },
  {
    name: "Lee",
    excerpt: "Very well organized.",
    rating: 5,
    sourceBrand: "Elluminate",
    sourceType: "google-review",
    sourceUrl: "https://www.google.com/maps/place/Elluminate+Singapore/data=!4m7!3m6!1s0x31da1b985fa7e40b:0x4aa6c01c0f8a8399!8m2!3d1.2831187!4d103.8167431!16s%2Fg%2F11njqq0x_c",
    verifiedAt: "2026-07-21",
    accent: "#0EA5E9",
  },
  {
    name: "Darren Tey",
    role: "Operations Manager",
    company: "Lonza",
    excerpt: "All of us had a real fun blast and we have nothing but good things to say about the facilitators and the games!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    verifiedAt: "2026-07-21",
    accent: "#2A8DFF",
  },
  {
    name: "Farzanah Begum",
    role: "Senior Officer for Development and Engagement",
    company: "A*STAR SIMTech",
    excerpt: "All our different departments have enjoyed the activities, from our newest members to our management teams.",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    verifiedAt: "2026-07-21",
    accent: "#8B5CF6",
  },
  {
    name: "Arianti Amalina",
    role: "Human Resource Officer",
    company: "Madame Tussauds Singapore",
    excerpt: "They were super accommodating.",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    verifiedAt: "2026-07-21",
    accent: "#F05462",
  },
  {
    name: "Jurgen Carlson",
    role: "Senior Partner and Management Head",
    company: "AMS AG",
    excerpt: "We are coming back for more!",
    sourceBrand: "Team Elevate",
    sourceType: "client-testimonial",
    sourceUrl: "https://teamelevate.sg/",
    verifiedAt: "2026-07-21",
    accent: "#F4B400",
  },
];
