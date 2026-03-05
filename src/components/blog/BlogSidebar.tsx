import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface BlogSidebarProps {
  categories: string[];
  activeCategory?: string;
  recentPosts: { slug: string; title: string }[];
}

export const BlogSidebar = ({ categories, activeCategory, recentPosts }: BlogSidebarProps) => {
  const { openContactModal } = useContactModal();

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-bold text-foreground mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/blog"
              className={`text-sm hover:text-primary transition-colors ${!activeCategory ? "text-primary font-semibold" : "text-muted-foreground"}`}
            >
              All Posts
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/blog?category=${encodeURIComponent(cat)}`}
                className={`text-sm hover:text-primary transition-colors ${activeCategory === cat ? "text-primary font-semibold" : "text-muted-foreground"}`}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-display font-bold text-foreground mb-4">Recent Posts</h3>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="bg-primary/10 rounded-2xl p-6 text-center">
        <h3 className="font-display font-bold text-foreground mb-2">Need Team Building?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Let us plan your next unforgettable event.
        </p>
        <Button onClick={openContactModal} className="w-full">
          Get a Free Quote
        </Button>
      </div>
    </aside>
  );
};
