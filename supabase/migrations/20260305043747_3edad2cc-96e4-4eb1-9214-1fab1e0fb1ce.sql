
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  author TEXT NOT NULL DEFAULT 'Elluminate',
  published_at TIMESTAMP WITH TIME ZONE,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  meta_description TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read access for published posts
CREATE POLICY "Anyone can read published blog posts"
ON public.blog_posts
FOR SELECT
USING (is_published = true);

-- Index for slug lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published, published_at DESC);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
