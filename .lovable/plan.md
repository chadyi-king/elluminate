Three findings remain. Each needs a different kind of action — one needs your authorization, two need a republish before they can re-measure. Here's how to clear them.

## 1. Google Search Console isn't fully set up

This is a one-time connect + verify flow. I can drive most of it, but the OAuth step needs you to click through.

Steps I will run:
1. Open the Google Search Console connector picker so you can sign in with the Google account that should own the property.
2. Once connected, request a `META` verification token from Google for `https://elluminate.sg/`.
3. Add `<meta name="google-site-verification" content="…">` to `index.html` and ask you to publish so the tag is live on the production domain.
4. Call Google's verify endpoint, register the property, and submit `https://elluminate.sg/sitemap.xml`.

What you do: click "Connect" in the picker (and pick the right Google account), then click Publish when I ask. After that you'll start seeing impressions/clicks data inside Search Console within a few days.

## 2. Page loads slowly (Lighthouse LCP)

This finding is measured against the **last published build**, so even a perfect source fix only clears once you republish. The two highest-leverage changes for this site:

- **Hero image LCP**: in `src/components/HeroSection.tsx` (and the hero photo wall / characters), set explicit `width` and `height`, drop `loading="lazy"` on the above-the-fold image, and add `fetchpriority="high"`. Also add a `<link rel="preload" as="image" href="…" fetchpriority="high">` in `index.html` for that one image.
- **Web font swap**: the Google Fonts `<link>` in `index.html` already uses `display=swap` for Anton/Bebas, but the preloaded Anton woff2 should also be paired with `font-display: swap` in any `@font-face` block we ship locally. I'll audit `src/index.css` for `@font-face` rules and add `font-display: swap` where missing.

After the edits I'll surface the Publish dialog so the next Lighthouse scan picks them up.

## 3. Has accessibility barriers (Lighthouse contrast)

Same "published build" caveat as performance. The scanner flags low-contrast text — typically `text-muted-foreground` on tinted backgrounds, or arbitrary gray utilities on light surfaces.

Plan:
- Grep the codebase for the usual offenders: `text-muted-foreground/`, `text-gray-300`, `text-gray-400`, `text-white/60`, etc.
- Replace with the design-system tokens (`text-foreground`, `text-muted-foreground` at full opacity, or a darker brand gray) so body text hits 4.5:1 and large headings hit 3:1.
- Spot-check the placeholder color on inputs and the footer text on the dark band.
- Republish.

## Order of operations

1. Connect Search Console (needs your click) — this can run in parallel with the other two.
2. Make the LCP + a11y code changes in one pass.
3. Publish once. Both Lighthouse findings re-measure on the next scan; Search Console verification also runs against the freshly-published HTML.

Want me to kick off step 1 (open the GSC connector) and start the LCP + contrast audit in the same turn?