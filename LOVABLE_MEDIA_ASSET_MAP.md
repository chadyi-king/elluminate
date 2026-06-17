# Lovable Media Asset Map

These assets were extracted from the local Elluminate ZIP/RAR archives and added to the repo so Lovable can reference them directly.

## Service Images

Use service media from:

```text
/images/services/[service-slug]/
```

Each service folder follows this pattern:

```text
hero.jpg
how-it-works.jpg
addons.jpg
cta.jpg
testimonial.jpg
gallery-1.jpg
gallery-2.jpg
gallery-3.jpg
gallery-4.jpg
gallery-5.jpg
gallery-6.jpg
gallery-7.jpg
```

Examples:

```text
/images/services/amazing-race/hero.jpg
/images/services/csi-bones/gallery-1.jpg
/images/services/mbti/how-it-works.jpg
/images/services/overseas-retreats/cta.jpg
```

## About Page Images

Use About page media from:

```text
/images/about/about-1.jpg
/images/about/about-2.jpg
/images/about/about-3.jpg
/images/about/about-4.jpg
/images/about/about-5.jpg
/images/about/about-6.jpg
```

## Client Logos

Use client logo media from:

```text
/images/client-logos/
```

These are extracted local logo files and should be used instead of external Wikimedia or Cloudinary logo URLs.

## Videos

Use local videos from:

```text
/videos/elluminate-showreel.mp4
/videos/amazing-race-decathlon.mp4
/videos/overseas-retreat-batam.mp4
/videos/overseas-retreat-bintan.mp4
/videos/overseas-retreat-edrington.mov
/videos/overseas-retreat-kuala-lumpur.mp4
```

Note: videos are large. Use them only where video is actually required.

## Lovable Instructions

When replacing media, prefer local project assets over Cloudinary or generic stock photos.

Rules:

- Do not use `res.cloudinary.com`.
- Do not reference `.heic` files.
- Use `hero.jpg` for main service heroes and service cards.
- Use `gallery-1.jpg` to `gallery-7.jpg` for gallery sections.
- Use `how-it-works.jpg`, `addons.jpg`, `cta.jpg`, and `testimonial.jpg` for matching service sections.
- Keep alt text descriptive and service-specific.
- Keep existing SEO titles, descriptions, canonicals, and page copy unless a media fix requires alt text updates.
- If no local asset fits a destination-specific travel card, a relevant destination fallback image is acceptable.
