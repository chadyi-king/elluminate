const standardLocalGallerySlugs = [
  "alice-in-motherland",
  "amazing-race",
  "amazing-race-virtual",
  "amongst-us",
  "archery-tag",
  "battle-of-the-olympians",
  "builder-cross",
  "corporate-days",
  "csi-bones",
  "cultural-race",
  "disc",
  "fit-in-your-team-virtual",
  "gel-blitz",
  "grand-christmas-delivery",
  "incentive-travel",
  "local-retreats",
  "mbti",
  "minute-to-win-it",
  "monopoly-dash",
  "nerfwar",
  "ocean",
  "overseas-retreats",
  "running-man",
  "sotong-game",
  "tag-tical-laser-teambuilding",
  "the-gameshow-experience-virtual",
  "the-great-zodiac-hunt-virtual",
  "the-nuclear-fallout-escape-room-virtual",
  "the-patriot-act-virtual",
  "tomb-raider-king-treasure-hunt-virtual",
  "treasure-heist",
  "wellness-events",
  "workshops",
  "youth-camps",
] as const;

const standardGalleryNumbers = [1, 2, 3, 4, 5, 6] as const;

const localGalleryNumbersBySlug: Record<string, readonly number[]> = {
  ...Object.fromEntries(
    standardLocalGallerySlugs.map((slug) => [slug, standardGalleryNumbers]),
  ),
  // Only gallery-3.jpg through gallery-7.jpg are local binaries for this route.
  "leadership-offsites": [3, 4, 5, 6, 7],
};

/**
 * Child service routes whose gallery paths were verified against public/images.
 * Lovable-only sidecars (including mass-talks) are intentionally excluded.
 */
export const verifiedLocalServiceGallerySlugs = Object.freeze(
  Object.keys(localGalleryNumbersBySlug),
);

export const verifiedLocalServiceGalleryCatalog: Readonly<
  Record<string, readonly string[]>
> = Object.freeze(
  Object.fromEntries(
    Object.entries(localGalleryNumbersBySlug).map(([slug, numbers]) => [
      slug,
      numbers.map(
        (number) => `/images/services/${slug}/gallery-${number}.jpg`,
      ),
    ]),
  ),
);

/**
 * Returns no more than six locally verified gallery images for a child route.
 * Unknown routes and routes backed only by Lovable sidecars return an empty list.
 */
export const getVerifiedLocalServiceGalleryPaths = (
  slug: string,
  maxItems = 6,
): readonly string[] => {
  const gallery = verifiedLocalServiceGalleryCatalog[slug];
  if (!gallery) return [];

  const requestedLimit = Number.isFinite(maxItems) ? Math.trunc(maxItems) : 6;
  const safeLimit = Math.max(0, Math.min(6, requestedLimit));

  return gallery.slice(0, safeLimit);
};
