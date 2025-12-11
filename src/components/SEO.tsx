import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

export const SEO = ({
  title = "Team Elevate | Singapore's Premier Corporate Event Specialists",
  description = "Team Elevate transforms visions into extraordinary experiences. Premium corporate events, galas, team building, and brand activations that leave lasting impressions.",
  keywords = "event planning Singapore, corporate events, team building Singapore, gala dinner, awards ceremony, brand activation, dinner and dance, luxury events",
  ogImage = "https://teamelevate.sg/og-image.jpg",
  canonical = "https://teamelevate.sg",
  type = "website"
}: SEOProps) => {
  const fullTitle = title.includes("Team Elevate") ? title : `${title} | Team Elevate`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Team Elevate" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Team Elevate" />
      <meta name="geo.region" content="SG" />
      <meta name="geo.placename" content="Singapore" />
    </Helmet>
  );
};
