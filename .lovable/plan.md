
## Plan

### What’s likely happening
The project is pointing to `/favicon.png`, but the repo also still contains `public/favicon.ico`. Many browsers, crawlers, and search engines still request `/favicon.ico` directly, so if only the PNG was replaced, the old Lovable/lightbulb icon can keep showing.

Also, the tab icon and the Google search icon are related but not exactly the same:
- **Browser tab**: usually comes from `rel="icon"` and/or `/favicon.ico`
- **Google search result icon**: often comes from the site favicon files and can lag due to caching/re-crawling

### Implementation plan

1. **Audit all favicon references**
- Check for every icon-related reference in `index.html` and any SEO/head components.
- Confirm there are no leftover references to an old icon path.

2. **Replace both favicon asset formats**
- Update **both**:
  - `public/favicon.png`
  - `public/favicon.ico`
- Use your uploaded latest logo for both so browsers and crawlers stop falling back to the old ICO file.

3. **Strengthen head tags in `index.html`**
- Keep the main PNG favicon link.
- Add/ensure explicit icon tags for broader compatibility, for example:
  - standard favicon
  - ICO fallback
  - apple touch icon
- If needed, add a small cache-busting version suffix so browsers stop serving the old cached icon.

4. **Align structured metadata**
- Update any logo/favicon-related structured data references so the site consistently points to the correct brand icon/logo asset.
- This helps avoid mixed branding across different surfaces.

5. **Verify expected behavior**
- Confirm the preview loads the new favicon.
- Note that Google search results may still take time to refresh even after the site is technically correct, because search engines cache favicons.

### Files likely involved
- `index.html`
- `public/favicon.png`
- `public/favicon.ico`
- `src/components/StructuredData.tsx`

### Technical notes
- The current code already points to `/favicon.png`, so the most likely root cause is the unchanged `favicon.ico` file still being picked up.
- If the change was only made in preview and not pushed live yet, the published site can still show the old icon until the frontend is updated.
