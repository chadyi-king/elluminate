import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  author: string;
  published_at: string | null;
  category: string | null;
  tags: string[] | null;
  meta_description: string | null;
  created_at: string;
}

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let query = supabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (categoryFilter) {
        query = query.eq("category", categoryFilter);
      }

      const { data } = await query;
      setPosts((data as BlogPost[]) || []);
      setLoading(false);
    };

    fetchPosts();
  }, [categoryFilter]);

  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))] as string[];
  const recentPosts = posts.slice(0, 5).map((p) => ({ slug: p.slug, title: p.title }));

  const estimateReadingTime = (content: string) => Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog | Elluminate"
        description="Read our latest insights on team building, corporate events, and employee engagement in Singapore. Tips, guides, and best practices from Elluminate."
        keywords="team building blog Singapore, corporate events tips, employee engagement, team building ideas, event planning guide"
        canonical="https://elluminate.sg/blog"
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            The Elluminate Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Insights, tips, and inspiration for planning unforgettable team experiences in Singapore.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Posts Grid */}
            <div>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-card rounded-2xl border border-border h-80 animate-pulse" />
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-20">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">No posts yet</h2>
                  <p className="text-muted-foreground">Check back soon for team building insights and tips!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <BlogCard
                      key={post.id}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt || post.content.slice(0, 150) + "..."}
                      coverImageUrl={post.cover_image_url || undefined}
                      author={post.author}
                      publishedAt={post.published_at || post.created_at || ""}
                      category={post.category || undefined}
                      readingTime={estimateReadingTime(post.content)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <BlogSidebar
              categories={categories}
              activeCategory={categoryFilter || undefined}
              recentPosts={recentPosts}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
