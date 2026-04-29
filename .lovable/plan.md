## Goal

Form submissions go to `info@exstatic.one` as a clean, professional email containing all the filled-in form fields. The website continues to display `info@elluminate.sg` as the public contact address (that mailbox is already on Google Workspace and works for direct customer emails).

## What's already in place (no changes needed)

- Form sends a notification email triggered on submit
- Email template (`contact-inquiry`) already formats every field nicely: contact info, organisation, event details, customisation, add-ons, additional details, plus marketing attribution (UTM, gclid, referrer, landing page)
- Reply-To is set to the customer's email, so hitting "Reply" replies directly to the lead
- Customer also receives a confirmation email
- Submission is also saved to the database as a backup

## The single change

Update the recipient address from `info@elluminate.sg` to `info@exstatic.one` in two places:

1. **`src/components/ContactModal.tsx`** — change `recipientEmail: "info@elluminate.sg"` to `recipientEmail: "info@exstatic.one"` in the `send-transactional-email` invocation
2. **`supabase/functions/send-transactional-email/index.ts`** — update the `PUBLIC_TEMPLATES['contact-inquiry'].fixedRecipient` allowlist from `info@elluminate.sg` to `info@exstatic.one` (this server-side guard rejects sends to any other address for spam protection)

Then redeploy the `send-transactional-email` edge function.

## What stays the same

- All public-facing `info@elluminate.sg` mailto links and footer references on the website
- The email template content, subject line, formatting, and Reply-To behaviour
- The customer confirmation email
- Database backup of every submission

## Verification

After deploying, I'll submit a test inquiry and check that the email arrives at `info@exstatic.one` with all fields properly formatted.
