/**
 * Captures and persists marketing attribution (UTM params + Google Click ID)
 * to a first-party cookie so we know which ad/campaign brought a visitor
 * even if they fill out a form days later.
 */

const COOKIE_NAME = "el_attr";
const COOKIE_DAYS = 90;
const LANDING_KEY = "el_landing";

export interface Attribution {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
  captured_at?: string;
}

const TRACKED_KEYS = [
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/** Read existing attribution from cookie (if any). */
export function getAttribution(): Attribution {
  const raw = getCookie(COOKIE_NAME);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return {};
  }
}

/**
 * Run on app load. Reads UTM params and gclid from the URL, merges into
 * the attribution cookie, and stores the landing page on first visit.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const existing = getAttribution();
  const next: Attribution = { ...existing };
  let changed = false;

  for (const key of TRACKED_KEYS) {
    const value = params.get(key);
    if (value) {
      next[key] = value;
      changed = true;
    }
  }

  // Capture referrer once (only if external)
  if (!existing.referrer && document.referrer) {
    try {
      const refHost = new URL(document.referrer).hostname;
      if (refHost && !refHost.includes(window.location.hostname)) {
        next.referrer = document.referrer;
        changed = true;
      }
    } catch {
      /* noop */
    }
  }

  // Landing page persisted in localStorage (sticky for whole user history)
  if (typeof localStorage !== "undefined") {
    const landing = localStorage.getItem(LANDING_KEY);
    if (!landing) {
      const url = window.location.pathname + window.location.search;
      localStorage.setItem(LANDING_KEY, url);
      next.landing_page = url;
      changed = true;
    } else if (!next.landing_page) {
      next.landing_page = landing;
    }
  }

  if (changed) {
    next.captured_at = new Date().toISOString();
    setCookie(COOKIE_NAME, JSON.stringify(next), COOKIE_DAYS);
  }
}
