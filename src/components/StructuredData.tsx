import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  type?: "Organization" | "LocalBusiness";
}

export const OrganizationSchema = ({ type = "Organization" }: OrganizationSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": "https://elluminate.sg/#organization",
    name: "Elluminate",
    url: "https://elluminate.sg",
    logo: "https://elluminate.sg/logo.png",
    description:
      "Singapore team building and company experiences planned around the people, objective, venue, and timing.",
    telephone: "+6588352482",
    email: "info@elluminate.sg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6588352482",
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
    "@id": "https://elluminate.sg/#website",
    name: "Elluminate",
    url,
    publisher: { "@id": "https://elluminate.sg/#organization" },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        listItem.item = item.url;
      }
      return listItem;
    }),
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
      "@id": "https://elluminate.sg/#organization",
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
  faqs: readonly FAQItem[];
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
