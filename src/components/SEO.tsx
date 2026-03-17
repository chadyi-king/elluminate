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
  title = "Elluminate | Singapore's Premier Team Building Specialists",
  description = "Elluminate creates engaging team building experiences, corporate retreats, and training programs in Singapore. Physical & virtual activities for companies and schools. 1,000+ events delivered.",
  keywords = "team building Singapore, corporate team building, virtual team building, team bonding activities, corporate retreat Singapore, training workshops Singapore, school programmes Singapore",
  ogImage = "https://elluminate.sg/og-image.jpg",
  canonical = "https://elluminate.sg",
  type = "website"
}: SEOProps) => {
  const fullTitle = title.includes("Elluminate") ? title : `${title} | Elluminate`;
  
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
      <meta property="og:site_name" content="Elluminate" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Elluminate" />
      <meta name="geo.region" content="SG" />
      <meta name="geo.placename" content="Singapore" />
    </Helmet>
  );
};
