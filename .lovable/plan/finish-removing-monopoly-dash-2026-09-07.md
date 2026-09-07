# Finish removing Monopoly Dash

The website itself is already clean: the page, route, cards, listings, recommendations, portfolio tiles, SEO and sitemap entries, logo and video are all gone, and the old address redirects to the Team Building page. General event photos were kept (moved into a shared gallery folder still used by other sections).

What is left are behind-the-scenes references that visitors never see, but which still name the programme and would make the project's own checks fail.

## What will change

- Internal checks that still expect Monopoly Dash to exist are updated so they check a programme that is actually on the site.
- Helper scripts that hold Monopoly Dash sample text and prices have those entries removed.
- Internal notes/reports that list the old page keep their history but no longer point at a live Monopoly Dash address.
- The redirect from the old Monopoly Dash address to the Team Building page stays, so old links keep working.

## Technical detail

- `scripts/team-building-landing.test.mjs` — replace `"Monopoly Dash"` in the curated-format list with a format still rendered on the hub (e.g. `"Running Man"`).
- `scripts/service-quick-facts.test.mjs`, `scripts/commercial-profiles.test.mjs` — delete the `monopoly-dash` price expectations.
- `scripts/generate-recent-events.ts`, `scripts/replaceTestimonials.mjs` — delete the `monopoly-dash` data entries.
- `docs/elluminate-hardening-change-report.md` — remove the `monopoly-dash` section and drop `/services/monopoly-dash` from the related-links lists of other entries.
- `docs/proof-register.md` — update the row to the renamed `public/images/services/team-building-gallery/` path.
- Keep `src/App.tsx` route redirect and the `public/_redirects` 301 (intentional).

## Verification

Run the project's test scripts and typecheck, re-run a full-project search for `monopoly` in all casings, and load the home page, Team Building hub, portfolio page and the old Monopoly URL to confirm the redirect works with no console errors or empty cards.
