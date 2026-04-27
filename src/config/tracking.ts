/**
 * Single source of truth for ALL third-party tracking IDs.
 *
 * Empty string = tag is disabled and won't load.
 * Replace with real IDs as you obtain them — no other file needs to change.
 *
 * Round 1 (now):    leave most empty; site is safe to deploy
 * Round 2 (next):   GTM_ID, GA4_ID, GOOGLE_ADS_ID + LABEL, SEARCH_CONSOLE_META
 * Round 3 (later):  CLARITY_ID, LINKEDIN_PARTNER_ID, RECAPTCHA_SITE_KEY
 */

// Google Tag Manager — once set, it manages GA4, Ads, Clarity, LinkedIn from one place
export const GTM_ID = ""; // e.g. "GTM-XXXXXXX"

// Google Analytics 4 — fallback when GTM is not yet set
export const GA4_ID = "G-R4S0RLKQ67";

// Google Ads conversion tracking
export const GOOGLE_ADS_ID = ""; // e.g. "AW-1234567890"
export const GOOGLE_ADS_CONVERSION_LABEL = ""; // e.g. "AbCdEfGhIj"

// Microsoft Clarity (heatmaps + recordings)
export const CLARITY_ID = ""; // e.g. "abcd1234"

// LinkedIn Insight Tag (B2B audiences)
export const LINKEDIN_PARTNER_ID = ""; // e.g. "1234567"

// reCAPTCHA v3 (anti-spam)
export const RECAPTCHA_SITE_KEY = ""; // public site key, OK to commit

// Google Search Console verification meta tag content
export const SEARCH_CONSOLE_META = ""; // e.g. "abc123XYZ..."

// Where contact form notifications are sent
export const ADMIN_EMAIL = "info@elluminate.sg";

// Optional: outbound webhook for piping leads to your ads platform
export const LEAD_WEBHOOK_URL = ""; // e.g. "https://hooks.zapier.com/..."
