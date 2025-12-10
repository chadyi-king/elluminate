import { motion } from "framer-motion";

const filters = [
  "Team Building",
  "Dinner & Dance",
  "Awards Ceremonies",
  "Product Launches",
  "Brand Activations",
  "Overseas Retreats",
  "Immersive Experiences",
  "Wellness Events",
  "AV, Stage & Production",
  "Custom Themed Events",
];

interface PortfolioFiltersProps {
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export const PortfolioFilters = ({ activeFilter, onFilterChange }: PortfolioFiltersProps) => {
  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      onFilterChange(null);
    } else {
      onFilterChange(filter);
    }
  };

  return (
    <section className="py-8 bg-black sticky top-16 z-40 border-b border-primary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-black border-primary"
                  : "bg-transparent text-primary/80 border-primary/40 hover:bg-primary hover:text-black hover:border-primary"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
