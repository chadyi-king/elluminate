import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  type?: "Organization" | "LocalBusiness";
}

export const OrganizationSchema = ({ type = "Organization" }: OrganizationSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Elluminate",
    url: "https://elluminate.sg",
    logo: "https://elluminate.sg/logo.png",
    description: "Singapore's trusted corporate team building company. Specialists in physical and virtual team building, retreats, and training for companies, schools, and government teams.",
    telephone: "+6588062446",
    email: "info@elluminate.sg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6588062446",
      contactType: "customer service",
      areaServed: "SG",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "165 Bukit Merah Central #05-3667",
      addressLocality: "Singapore",
      postalCode: "150165",
      addressCountry: "SG",
    },
    areaServed: "Singapore",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "600",
      bestRating: "5",
    },
    foundingDate: "2017",
  };

  if (type === "LocalBusiness") {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: 1.2834,
      longitude: 103.8277,
    };
    schema.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface WebSiteSchemaProps {
  url?: string;
}

export const WebSiteSchema = ({ url = "https://elluminate.sg" }: WebSiteSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Elluminate",
    url,
    publisher: { "@type": "Organization", name: "Elluminate" },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
  price?: string;
}

export const ServiceSchema = ({ name, description, slug, price }: ServiceSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://elluminate.sg/services/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Elluminate",
      url: "https://elluminate.sg",
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    serviceType: "Event Planning",
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price: price.replace(/[^0-9.]/g, ""),
      priceCurrency: "SGD",
      availability: "https://schema.org/InStock",
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
