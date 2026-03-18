

# Comprehensive SEO Overhaul + Blog for elluminate.sg

## Part 1: SEO Preparation (Comprehensive)

### Current Gaps
- All meta tags still say "Team Elevate" with old URLs (teamelevate.sg/teamelevate.com)
- Zero structured data (JSON-LD) -- no Organization, LocalBusiness, Service, or BreadcrumbList schemas
- No sitemap.xml
- No FAQ schema on service pages (you have FAQ data in servicesData but it's not marked up)
- No breadcrumbs component or markup
- OG images point to lovable.dev placeholder

### Changes

**1. Rebrand all meta tags to Elluminate / elluminate.sg**

| File | Change |
|------|--------|
| `index.html` | Title, description, author, OG, Twitter, canonical all to Elluminate + elluminate.sg |
| `src/components/SEO.tsx` | Default props, `og:site_name`, author, `includes("Elluminate")` check |
| `src/pages/Index.tsx` | Already says Elluminate -- just verify canonical |
| `src/pages/PortfolioPage.tsx` | Canonical to elluminate.sg/portfolio |
| `src/pages/AboutPage.tsx` | Canonical to elluminate.sg/about |

**2. JSON-LD Structured Data (new component: `src/components/StructuredData.tsx`)**

Inject schema.org markup for every page type:

- **Organization schema** (global, on every page): name, url, logo, contactPoint, address, sameAs
- **LocalBusiness schema** (homepage): extends Organization with geo coordinates, openingHours, priceRange
- **Service schema** (each service page): name, description, provider, areaServed, offers (price from servicesData.pricing)
- **FAQPage schema** (service pages with FAQs): question/answer pairs from servicesData.faqs
- **BreadcrumbList schema** (all pages): Home > Services > {Service Name}
- **WebSite schema** (homepage): potentialAction with SearchAction for site search

**3. Sitemap generation (`public/sitemap.xml`)**

Static XML sitemap listing all routes: homepage, about, portfolio, and every service slug from servicesData. Each entry has `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`.

**4. Update `public/robots.txt`**

Add `Sitemap: https://elluminate.sg/sitemap.xml` directive.

**5. Breadcrumbs component (`src/components/Breadcrumbs.tsx`)**

Lightweight breadcrumb nav rendered on service pages and about/portfolio. Visible to users AND marked up with BreadcrumbList JSON-LD. This is a top SEO signal used by Google's rich results.

**6. Service page SEO enrichment**

- Each service page already has keywords in ServicePage.tsx but they're incomplete. Expand the `serviceKeywords` record to cover ALL service slugs (treasure-heist, archery-tag, etc.)
- Meta descriptions should be richer -- use the first 155 chars of overview but also append "Singapore" and key terms

**7. Alt text audit on images**

Many images use generic alt text like "Event photo 1". Update the PhotoWall and gallery components to use descriptive alt text with keywords (e.g., "Corporate team building amazing race activity in Singapore").

---

## Part 2: Blog for SEO

Yes, a blog is one of the highest-impact SEO strategies. Team building competitors in Singapore (FunEmpire, Terrarium Singapore, Team Building Singapore) all rank heavily through blog content targeting long-tail keywords like "best team building activities Singapore 2025", "indoor team building ideas", etc.

### Blog Implementation Plan

**Database**: Create a `blog_posts` table in Lovable Cloud with fields: id, slug, title, excerpt, content (markdown), cover_image_url, author, published_at, category, tags, meta_description, is_published.

**Pages**:
- `/blog` -- Blog listing page with category filters, search, and pagination
- `/blog/:slug` -- Individual blog post page with Article JSON-LD schema, OG tags, reading time, share buttons

**Components**:
- `BlogCard` -- Preview card for listing
- `BlogPost` -- Full article renderer (markdown to HTML)
- `BlogSidebar` -- Categories, recent posts, CTA

**SEO value**: Each blog post generates a unique indexable URL with its own meta tags, Article schema, and internal links back to service pages. This is the primary way to capture long-tail search traffic.

**Content strategy** (suggested initial posts):
- "Top 10 Team Building Activities in Singapore 2026"
- "How to Plan an Amazing Race for Your Company"
- "Indoor vs Outdoor Team Building: Which Is Better?"
- "Corporate Retreat Planning Guide: Singapore & Overseas"
- "5 Benefits of Team Building for Employee Retention"

---

## Part 3: Image Generation

Regarding your question about image generation capabilities:

Lovable has built-in AI image generation using **Google Gemini 2.5 Flash Image** (called "Nano banana") and **Google Gemini 3 Pro Image Preview** for higher quality. These can generate images from text prompts and edit existing images.

**How it works**: Images are generated via an edge function calling the Lovable AI Gateway. The model returns base64-encoded images that can be uploaded to storage.

**Quality comparison with KIMI 2.5**: The Gemini models produce decent results for general imagery but may not match dedicated image generation models (like KIMI 2.5, Midjourney, or DALL-E 3) for photorealistic or highly stylized outputs. For website hero images and OG images, they're serviceable but for professional photography-quality results, you may want to generate externally and upload.

**Practical use**: We could use the built-in generation to create OG images for each service page and blog posts, branded with Elluminate's colors and typography.

---

## Implementation Order

1. Rebrand all meta tags (index.html, SEO.tsx, page-level SEO props)
2. Create StructuredData.tsx with Organization, LocalBusiness, Service, FAQ, Breadcrumb schemas
3. Create static sitemap.xml + update robots.txt
4. Add Breadcrumbs component to service/about/portfolio pages
5. Expand service keywords coverage
6. Create blog database table + blog pages (Phase 2 -- larger task)

## Files Modified/Created

| File | Action |
|------|--------|
| `index.html` | Edit -- rebrand meta tags |
| `src/components/SEO.tsx` | Edit -- rebrand defaults |
| `src/components/StructuredData.tsx` | New -- JSON-LD schemas |
| `src/components/Breadcrumbs.tsx` | New -- breadcrumb nav |
| `public/sitemap.xml` | New -- static sitemap |
| `public/robots.txt` | Edit -- add sitemap directive |
| `src/pages/Index.tsx` | Edit -- add structured data |
| `src/pages/ServicePage.tsx` | Edit -- add structured data, breadcrumbs, expand keywords |
| `src/pages/AboutPage.tsx` | Edit -- canonical URL, breadcrumbs |
| `src/pages/PortfolioPage.tsx` | Edit -- canonical URL, breadcrumbs |
| Blog (Phase 2) | New table, new pages, new components |

