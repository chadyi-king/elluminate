## What's happening now

In your test inquiry, the Marketing Attribution block only shows:
- Landing Page: `/`
- Submitted From: `/`

That's actually **correct** — you visited elluminate.sg directly (no Google Ad click, no UTM link, no external referrer), so there's nothing else to capture. The other rows (gclid, UTM source/medium/campaign, Referrer) only appear when present, so they were hidden.

The block is functional, but it currently looks half-empty and doesn't tell you the most useful thing at a glance: **how did this lead actually find us?**

## Fix — make Marketing Attribution always informative

Update `supabase/functions/_shared/transactional-email-templates/contact-inquiry.tsx`:

1. **Always show a "Source" summary row at the top** of the attribution card, derived from the data:
   - If `gclid` present → "Google Ads (paid click)"
   - Else if `utm_source` present → `"{utm_source} / {utm_medium}"` (e.g. "facebook / cpc")
   - Else if `referrer` present → `"Referral — {hostname of referrer}"` (e.g. "Referral — linkedin.com")
   - Else → **"Direct / Organic"** (typed URL, bookmark, or organic search where the referrer was stripped)

2. **Always render the attribution card** (don't hide it when only landing/submitted page exist), so every email has a consistent block.

3. **Show empty fields as "—"** instead of hiding them, so you can see at a glance which signals were missing vs. present.

4. **Add a "Device / Browser" line** by passing `navigator.userAgent` from `ContactModal.tsx` into `templateData` as `user_agent`, then rendering a short parsed version (e.g. "iPhone · Safari") in the email.

5. **Add a "Submitted at" timestamp** (Singapore time) to the attribution block — useful when triaging.

No changes to the database, the form UI, or the confirmation email to the lead.

## Ideas you could add later (pick what's useful)

These are optional — let me know which you want and I'll plan them separately.

- **Lead score / priority badge** at the top of the email (e.g. "🔥 HIGH — 100+ pax, paid click") based on attendees + gclid + organisation type, so you can spot hot leads in the inbox preview.
- **"Quick reply" buttons** in the email (mailto: links pre-filled with subject "Re: your Elluminate inquiry" + a short reply template) so you can respond from your phone in 2 taps.
- **Calendar link** ("Add expected event date to calendar") generated from the expected date field.
- **Daily/weekly digest** of all inquiries to a second address (e.g. management) — same data, summarised.
- **Slack / WhatsApp notification** in addition to email, for faster triage.
- **Internal CRM link** — if you ever add a simple admin page listing all `contact_submissions`, the email can link straight to that lead's detail page.
- **UTM-link generator page** in your admin area so you (or partners) can create properly-tagged links for campaigns, LinkedIn posts, etc. — that's how you get the UTM rows to actually populate.
- **Spam/quality indicator** — flag suspicious submissions (disposable email domain, gibberish name, mismatched country code) before they hit your inbox.

## Technical notes

- File touched: `supabase/functions/_shared/transactional-email-templates/contact-inquiry.tsx` and `src/components/ContactModal.tsx` (one extra field in `templateData`).
- Edge function `send-transactional-email` is redeployed automatically.
- No DB migration, no new secrets.
