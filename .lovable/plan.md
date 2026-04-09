

# Full Audit: SEO, Google Ads, Security, and Form Functionality

## 1. SEO Status: Good (minor improvements possible)

**What's working well:**
- `react-helmet-async` with `HelmetProvider` properly wrapping the app
- Unique `<SEO>` component on every page (Index, About, Portfolio, Service, Blog, NotFound)
- JSON-LD structured data: Organization, LocalBusiness, WebSite, Service, FAQ, BreadcrumbList
- Canonical URLs set to `elluminate.sg`
- Open Graph and Twitter Card meta tags on all pages
- `robots.txt` properly configured with sitemap reference
- `sitemap.xml` covering all service slugs and main pages
- 404 page has `noindex, nofollow` (correct)
- Blog posts use dynamic SEO with `meta_description` from database

**Minor improvements to make:**
- **Duplicate meta tags in `index.html`**: The `<head>` has hardcoded OG/Twitter tags that will conflict with `react-helmet-async` managed tags on subpages. These should be removed from `index.html` since `<SEO>` handles them dynamically. Not harmful but messy.
- **Missing `og:locale`**: Add `og:locale` = `en_SG` for regional targeting.

---

## 2. Google Ads Readiness: Needs Work

**What's working:**
- GA4 tag (`G-R4S0RLKQ67`) is installed and loading correctly
- A generic conversion event fires when the contact modal opens (`event: "conversion"` with `event_category: "engagement"`)

**What's missing for Google Ads:**
- **No Google Ads conversion tag**: There is no `AW-XXXXXXXXX` conversion ID configured. The current `gtag("event", "conversion", ...)` only fires a GA4 event, not a Google Ads conversion. For Google Ads to track conversions, you need to either:
  - Add `gtag('config', 'AW-XXXXXXXXX')` in `index.html` alongside GA4
  - Fire `gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXX' })` on form submit
- **Conversion fires on modal open, not form submit**: Currently the conversion event fires when the modal *opens*, not when the form is *submitted*. For Google Ads, the conversion should fire on actual form submission (the `handleSubmit` function), not just opening the modal.
- **No Google Ads remarketing tag**: If you plan to use remarketing audiences, you'll need the Google Ads tag loaded.

**Plan:**
- Add a placeholder for the Google Ads conversion ID (you'll need to provide your `AW-XXXXXXXXX` ID from your Google Ads account)
- Move the conversion event from modal open to form submission
- Add `gtag('config', 'AW-XXXXXXXXX')` to `index.html`
- Fire `gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/label' })` in `handleSubmit`

---

## 3. Security: Clean

**Database:**
- Security scan: no issues found
- Database linter: no issues found
- Only one table (`blog_posts`) with RLS enabled, read-only policy for published posts only
- No user auth tables, no sensitive data exposed

**Frontend:**
- No `dangerouslySetInnerHTML` with user input (only in chart.tsx with internal theme data -- safe)
- Blog content rendered via `ReactMarkdown` (safe, no raw HTML injection)
- No exposed API keys or secrets in client code (Supabase anon key is public by design)
- Contact form data is stored only in `localStorage` for draft persistence -- no sensitive data leaks
- No SQL injection vectors (using Supabase SDK with parameterized queries)

**One concern:**
- Form data in `localStorage` includes name, email, phone. This is standard for UX but worth noting -- it gets cleared on submit.

---

## 4. Contact Form: Does NOT Send Email

**Critical finding: The form does not actually send anything.**

The `handleSubmit` function in `ContactModal.tsx` (line 130-160):
1. Checks privacy consent
2. Shows a toast saying "Message Sent!"
3. Resets the form
4. That's it -- **no email is sent, no data is saved to the database, no edge function is called**

The form is purely cosmetic. When a user submits it, the data is lost.

**Plan to fix:**
- Set up transactional email infrastructure so form submissions are emailed to `info@elluminate.sg`
- Optionally save submissions to a `contact_submissions` database table for record-keeping
- This requires: email domain setup, transactional email scaffolding, creating a contact form template, and wiring `handleSubmit` to call the send edge function

---

## 5. Clean-up of `index.html`

Remove duplicate OG/Twitter meta tags from `index.html` that are already managed by `react-helmet-async`. Keep only the essentials (charset, viewport, GA4 script, favicon, fonts).

---

## Summary of Planned Changes

| Area | Status | Action Needed |
|------|--------|---------------|
| SEO | Good | Remove duplicate meta from index.html, add og:locale |
| Google Ads | Not ready | Need AW- conversion ID from you, move conversion to form submit |
| Security | Clean | No action needed |
| Form submission | Broken | Set up email sending so inquiries actually reach you |

**Before I proceed, I need from you:**
1. Your **Google Ads Conversion ID** (format: `AW-XXXXXXXXX`) and optionally the conversion label -- you get this from your Google Ads account under Tools > Conversions
2. Confirmation you want contact form submissions emailed to `info@elluminate.sg`

Shall I proceed with everything above?

