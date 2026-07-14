## Plan — Replace Leadership Offsites images

The 7 uploaded photos map cleanly to existing image slots. I'll upload each to the Lovable CDN, write `.asset.json` pointers into `public/images/services/leadership-offsites/`, then update the URLs in `src/data/servicesData.ts`.

### Uploads → target slot
| Uploaded file | Target pointer |
|---|---|
| `hero-2.jpg` | `hero.jpg.asset.json` |
| `how-it-works-2.jpg` | `how-it-works.jpg.asset.json` |
| `addons.png` | `addons.jpg.asset.json` |
| `cta-2.jpg` | `cta.jpg.asset.json` |
| `testimonial-2.jpg` | `testimonial.jpg.asset.json` |
| `gallery-1.jpeg` | `gallery-1.jpg.asset.json` |
| `gallery-2-2.jpg` | `gallery-2.jpg.asset.json` |

Existing `gallery-3.jpg` … `gallery-7.jpg` remain untouched (no replacements were uploaded for them).

### Code changes in `src/data/servicesData.ts` (`"leadership-offsites"` entry, ~lines 1638–1654)
Swap the 6 referenced URLs (hero ×2, howItWorksImage, addOnsImage, testimonialBackgroundImage → gallery-1, plus overview background if present) to the new CDN URLs from the `.asset.json` pointers. If a `gallery: []` array exists, update entries 1 and 2 to the new CDN URLs.

### Cleanup
Delete the old raw `.jpg` files being replaced (hero, how-it-works, addons, cta, testimonial, gallery-1, gallery-2) so only the `.asset.json` pointers remain for those slots.

### Verify
Run `bun run build` and confirm `/services/leadership-offsites` renders the new hero, section backgrounds, and refreshed gallery-1/gallery-2 tiles.
