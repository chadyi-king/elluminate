## Issue 1 — 404 on `/thank-you-contact`

The route IS defined in code (`src/App.tsx`):
```
<Route path="/thank-you-:formName" element={<ThankYouPage />} />
```

So it works on the live preview, but you hit 404 on the **published** `elluminate.sg` site. That means the live published build is older than the code that added the thank-you route. The fix is simply to **republish** the site so the latest build (with the route) goes live.

No code changes needed for this.

After republish I'll verify by visiting `https://elluminate.sg/thank-you-contact` and confirming the success page loads.

## Issue 2 — How the bot filter works (and why real enquiries won't be blocked)

The form uses a **honeypot field**, not a CAPTCHA. Here's the field in `ContactModal.tsx`:

```html
<input name="website_url" tabIndex={-1} aria-hidden="true"
       autoComplete="off"
       style="position:absolute; left:-10000px; width:1px; height:1px; opacity:0" />
```

How it works:
- The field is **invisible** to humans (positioned 10,000px off-screen, 1×1px, opacity 0).
- It's **skipped by keyboard** (`tabIndex={-1}`) and **hidden from screen readers** (`aria-hidden`).
- Browser autofill is told to ignore it (`autoComplete="off"`).
- Real users never see or touch it, so they leave it empty.
- Spam bots blindly fill every field they find in the HTML, so they fill `website_url`.
- On submit, if that field has any value → submission is silently dropped (treated as fake success so the bot doesn't retry).

**Will a real enquiry ever be counted as a bot?**
Effectively no. The only edge case is if a password manager or aggressive autofill extension forced a value into a field named `website_url`, which is extremely rare because:
1. The field is hidden + aria-hidden + tabIndex -1.
2. `autoComplete="off"` is set.
3. The field name `website_url` doesn't match any standard autofill profile (name, email, phone, address, etc.).

So real customers fill the visible Name / Email / Phone / etc. and submit normally. Honeypots are the industry-standard low-friction approach precisely because they don't annoy users like CAPTCHAs do.

If you ever want extra safety, we can add Cloudflare Turnstile (invisible CAPTCHA, no user interaction) later — but it's not needed today.

## Plan

1. Republish the site so the `/thank-you-:formName` route goes live and the 404 disappears.
2. (No code changes.) Honeypot bot filter stays as-is — confirmed safe for real enquiries.
3. Verify by visiting `https://elluminate.sg/thank-you-contact` after republish.
