import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbSchema } from "@/components/StructuredData";

interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbEntry[];
}

const SITE_URL = "https://elluminate.sg";

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const currentPageUrl = `${SITE_URL}${pathname === "/" ? "" : pathname.replace(/\/+$/, "")}`;
  const schemaItems = items.map((item, index) => ({
    name: item.label,
    // The final crumb is the page itself, so it must point at the current URL rather than the homepage.
    url: item.href ? `${SITE_URL}${item.href}` : index === items.length - 1 ? currentPageUrl : SITE_URL,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav className="container mx-auto px-4 pt-4 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <BreadcrumbItem key={index}>
                {index > 0 && <BreadcrumbSeparator />}
                {item.href && index < items.length - 1 ? (
                  <BreadcrumbLink asChild>
                    <Link to={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </>
  );
};
