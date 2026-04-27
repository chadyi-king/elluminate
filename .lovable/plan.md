
# Google-Ads-Ready Foundation — Sequenced Plan

We'll work in **rounds**. Each round = (A) everything I build first, then (B) a checklist of what you do before the next round starts. Section 6 is removed.

---

## Audit summary (unchanged from before)

- ✅ GA4 hardcoded, contact form saves to DB, SEO/JSON-LD solid, sitemap exists, custom domain live, email infrastructure scaffolded
- ⚠️ Form invokes a `send-transactional-email` function that **doesn't exist yet** → no email is delivered. Conversion event fires but Google Ads `send_to` is commented out. Email domain DNS not yet verified.
- ❌ No GTM, no Consent Mode v2, no UTM/gclid capture, no thank-you pages, no Clarity / LinkedIn / reCAPTCHA, no Article schema, no engagement events, no landing-page template, sitemap is hand-maintained.

---

## Round 1 — Lead capture works end-to-end + tracking config in place

### (A) What I build (no input from you needed)

1. Create `src/config/tracking.ts` — single source of truth with placeholder constants for every ID (GTM, GA4, Google Ads, Clarity, LinkedIn, reCAPTCHA site key, Search Console meta, admin email, optional webhook URL). Site stays safe with empty placeholders.
2. Create `src/lib/attribution.ts` — captures `utm_*` + `gclid` from URL on every page load and persists to first-party cookie `el_attr` (90-day expiry); also stores `landing_page` on first visit.
3. DB migration: add `gclid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `referrer`, `landing_page`, `submission_page`, `recaptcha_score`, `form_name` columns to `contact_submissions`.
4. Create the missing email functions and templates so the contact form actually delivers email:
   - `supabase/functions/_shared/transactional-email-templates/registry.ts`
   - `…/contact-inquiry.tsx` (notification to `info@elluminate.sg` with all submission + attribution fields)
   - `…/contact-confirmation.tsx` (auto-reply to the submitter)
   - `supabase/functions/send-transactional-email/index.ts` (generic sender, suppression check, optional webhook fan-out)
   - `supabase/functions/handle-email-unsubscribe/index.ts`
   - Deploy all functions.
5. Wire `ContactModal.tsx`:
   - Read attribution cookie → include hidden fields on insert + email payload
   - Add honeypot field (`website_url`)
   - Push `dataLayer.push({ event: 'form_submit', form_name: 'contact', ...attribution })` on success
   - Redirect to `/thank-you-contact` instead of toast-only close
6. Create `/thank-you-:formName` route + page:
   - `noindex, nofollow` meta
   - On mount: `dataLayer.push({ event: 'lead_conversion', form_name, value })` (GTM will pick this up later)
   - "We'll reply within 1 business day" + soft CTAs back to portfolio/services
7. Update `public/robots.txt` to `Disallow: /thank-you-*`.

### (B) What you do after Round 1

1. **Verify email DNS** — open Lovable → **Cloud → Emails** and confirm `notify.elluminate.sg` shows **active**. If it's still pending, follow the displayed DNS steps at your registrar. Without this, no notification emails are sent.
2. **Test the form yourself** — submit the contact modal once. Confirm:
   - You land on `/thank-you-contact`
   - You receive the inquiry email at `info@elluminate.sg`
   - The submitter receives the auto-reply
3. **Create the GTM container**: tagmanager.google.com → Create container → Web → name it "Elluminate" → copy the `GTM-XXXXXXX` ID and paste it to me.
4. **Confirm GA4 ID**: tell me whether to keep `G-R4S0RLKQ67` or use a new one.
5. **Decide your admin email** for inquiries (default `info@elluminate.sg`).

> Once you reply with items 3, 4, 5 (and item 1 done), we move to Round 2.

---

## Round 2 — GTM + Consent Mode v2 + Google Ads conversion live

### (A) What I build

1. Replace hardcoded GA4 in `index.html` with the **GTM head + body snippets** (using your container ID).
2. Add **Consent Mode v2 default-deny** inline `<script>` BEFORE GTM: `gtag('consent','default', { ad_storage:'denied', analytics_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', wait_for_update:500 })`.
3. Build a **PDPA-compliant cookie banner** component (Singapore-aware copy, Accept / Decline / Manage). Stores choice in `el_consent_v2` localStorage. On Accept fires `gtag('consent','update', { all granted })`.
4. Add **Search Console verification meta tag** slot in `<head>` reading from tracking config (empty until you give me the tag).
5. Generate a **GTM container JSON** I'll hand to you to import — pre-configured with: GA4 config tag, GA4 events (form_submit, lead_conversion, phone_click, outbound_click, file_download, scroll_depth, time_on_page_60s), Google Ads conversion tag firing on the `lead_conversion` dataLayer event, Clarity tag, LinkedIn Insight tag, all gated by Consent Mode.

### (B) What you do after Round 2

1. **Create the Google Ads conversion action**: ads.google.com → Tools → Conversions → New → Website → "Submit Lead Form" → Category: *Submit lead form* → Click-through window 30d → Count: One. Copy the **Conversion ID** (`AW-XXXXXXXXX`) and **Conversion Label** and paste them to me.
2. **Create the Microsoft Clarity project**: clarity.microsoft.com → New project → domain `elluminate.sg` → copy the Project ID to me.
3. **Create the LinkedIn Insight Tag**: linkedin.com/campaignmanager → Account Assets → Insight Tag → copy the **Partner ID** to me.
4. **Verify Search Console**: search.google.com/search-console → Add property `elluminate.sg` → choose **HTML tag** method → copy the meta tag content to me.
5. **Submit sitemap** in Search Console after verification: `https://elluminate.sg/sitemap.xml`.
6. **Import the GTM container JSON** I gave you (GTM admin → Import Container → choose merge).
7. **Publish the GTM container** (Submit → Publish). Test with GTM Preview mode by submitting the form once.

> Once you reply with items 1–4 (Conversion ID/Label, Clarity ID, LinkedIn ID, SC meta tag), we move to Round 3.

---

## Round 3 — All third-party tags wired + engagement signals

### (A) What I build

1. Drop your IDs into `src/config/tracking.ts` so the existing GTM container starts firing real conversions, Clarity, LinkedIn.
2. Create `src/lib/track.ts` engagement helper that pushes:
   - `phone_click` on every `tel:` link
   - `outbound_click` for any external link (filters out `elluminate.sg`)
   - `file_download` for `.pdf|.doc|.xls|.zip`
   - `scroll_depth` at 25/50/75/100
   - `time_on_page_60s` once
3. Mount the helper globally (single listener, no per-component wiring).
4. Audit Footer / Navbar / Contact pages → ensure all phone numbers are `tel:+6588062446` so the click handler picks them up.
5. **reCAPTCHA v3**:
   - Load reCAPTCHA on form pages only
   - Generate token on submit, send with form, verify in `send-transactional-email` Edge Function (server-side)
   - Reject silently if score < 0.5 (no email sent, but DB row keeps for analysis)
6. Add `recaptcha_score` to inquiry email so you can see lead quality.

### (B) What you do after Round 3

1. **Create reCAPTCHA v3 keys**: google.com/recaptcha/admin → v3 → label "Elluminate" → add domains `elluminate.sg` and `www.elluminate.sg` → copy **site key** and **secret key** to me. (I'll add the secret to Lovable Cloud secrets, not the codebase.)
2. **Link Google Ads ↔ GA4** (Ads UI → Tools → Linked accounts → Google Analytics 4) so conversions and audiences flow both ways.
3. **Link Search Console ↔ GA4** (GA4 Admin → Product links → Search Console).
4. **Test conversion firing**: in Google Ads → Conversions, status should change from "No recent conversions" to "Recording conversions" within 24h after a real form submit.

---

## Round 4 — Schema depth + dynamic sitemap + landing-page template

### (A) What I build

1. **Article JSON-LD** auto-applied on `BlogPostPage.tsx`.
2. **Dynamic sitemap generator** `scripts/generate-sitemap.mjs` — reads service slugs from `servicesData.ts` + published blog posts from Supabase, writes `public/sitemap.xml` on `prebuild`. No more drift; blog posts get indexed.
3. **Landing-page template** `LandingPageTemplate.tsx` + route `/lp/:slug`:
   - Single H1 (slot for ad-keyword headline)
   - Trust band (client logos) above the fold
   - Embedded form (not modal) → redirects to `/thank-you-lp-:slug`
   - Sticky bottom CTA on mobile
   - 3 CTA repeats, 1 testimonial block, results-focused copy
   - Minimal nav
   - `noindex` by default unless explicitly set per-page
   - One sample landing page (`/lp/team-building-singapore`) shipped to prove the template
4. **Performance pass**: hero images converted to WebP with explicit `width`/`height`, lazy-loading on below-fold images.
5. **`Disallow: /lp/*`** in robots.txt (paid traffic only — keeps it out of organic).

### (B) What you do after Round 4

1. **Decide ad campaign URLs** — for each Google Ads campaign, point ads at `/lp/<slug>` rather than `/`.
2. **Create one test campaign** in Google Ads with a small budget pointing at `/lp/team-building-singapore` to validate end-to-end attribution.
3. **Watch the conversion data flow** for 7 days, then we tune.

---

## Round 5 (optional, only if needed) — Webhook / Sheets pipe to your ads platform

When your autonomous ads platform is ready to consume leads:

### (A) What I build
- Add a `WEBHOOK_URL` env secret + a fan-out call inside `send-transactional-email` that POSTs the full submission (with attribution + reCAPTCHA score) to your platform.
- Optionally write a Google Apps Script webhook so leads land in a Google Sheet automatically.

### (B) What you do
- Provide the webhook URL or Google Sheet endpoint when ready.

---

## Quick "what you provide / when" recap

| Round | Items I need from you |
|-------|----------------------|
| After R1 | Verify email DNS, test form, GTM ID, GA4 ID confirmation, admin email |
| After R2 | Google Ads Conversion ID + Label, Clarity ID, LinkedIn Partner ID, SC meta tag, import + publish GTM container |
| After R3 | reCAPTCHA v3 site key + secret, link Ads↔GA4, link SC↔GA4 |
| After R4 | Decide LP URLs for campaigns, run a test campaign |
| R5 (optional) | Webhook URL when your ads platform is live |

---

**Approve this and I'll start Round 1 immediately.** I'll do all the building first, then hand you a clean numbered checklist for what's needed before Round 2.
