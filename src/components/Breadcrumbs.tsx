import { Link } from "react-router-dom";
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

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href ? `https://elluminate.sg${item.href}` : "https://elluminate.sg",
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
