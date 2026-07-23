import { getServiceCardPresentation } from "@/data/serviceCardCatalog";
import {
  ExperienceCardView,
  type ExperienceCardVariant,
} from "@/components/ExperienceCardView";

export { ExperienceCardView };
export type { ExperienceCardVariant };

interface ExperienceCardProps {
  slug: string;
  variant?: ExperienceCardVariant;
  className?: string;
}

export const ExperienceCard = ({ slug, variant = "featured", className }: ExperienceCardProps) => {
  const card = getServiceCardPresentation(slug);
  if (!card) return null;

  return <ExperienceCardView card={card} variant={variant} className={className} />;
};
