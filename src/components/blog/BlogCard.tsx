import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl?: string;
  author: string;
  publishedAt: string;
  category?: string;
  readingTime?: number;
}

export const BlogCard = ({
  slug,
  title,
  excerpt,
  coverImageUrl,
  author,
  publishedAt,
  category,
  readingTime = 5,
}: BlogCardProps) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/blog/${slug}`}>
        {coverImageUrl && (
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={coverImageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6">
          {category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              {category}
            </span>
          )}
          <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {readingTime} min read
              </span>
            </div>
            <span className="flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Read <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
