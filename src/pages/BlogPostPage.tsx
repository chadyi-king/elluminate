import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
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

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      setPost(data as BlogPost | null);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto max-w-3xl px-4 py-20">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const readingTime = Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200));
  const formattedDate = new Date(post.published_at || post.created_at).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt || post.content.slice(0, 155),
    image: post.cover_image_url,
    author: { "@type": "Organization", name: "Elluminate" },
    publisher: {
      "@type": "Organization",
      name: "Elluminate",
      url: "https://elluminate.sg",
    },
    datePublished: post.published_at || post.created_at,
    mainEntityOfPage: `https://elluminate.sg/blog/${post.slug}`,
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: post.title, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | Elluminate Blog`}
        description={post.meta_description || post.excerpt || post.content.slice(0, 155)}
        keywords={post.tags?.join(", ") || "team building Singapore, corporate events"}
        canonical={`https://elluminate.sg/blog/${post.slug}`}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title },
      ]} />

      <article className="container mx-auto max-w-3xl px-4 py-10">
        {/* Back link */}
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {post.category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span>By {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {formattedDate}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {readingTime} min read</span>
            <Button variant="ghost" size="sm" onClick={handleShare} className="ml-auto">
              <Share2 className="w-4 h-4 mr-1" /> Share
            </Button>
          </div>
        </motion.header>

        {post.cover_image_url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden mb-10"
          >
            <img src={post.cover_image_url} alt={post.title} className="w-full h-auto" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none text-foreground
            prose-headings:font-display prose-headings:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-blockquote:border-primary
            prose-img:rounded-xl"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
