/**
 * Captures and persists marketing attribution (UTM params + Google click IDs)
 * to a first-party cookie so we know which ad/campaign brought a visitor
 * even if they fill out a form days later.
 */

const COOKIE_NAME = "el_attr";
const COOKIE_DAYS = 90;

export interface Attribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  gad_source?: string;
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
  "gbraid",
  "wbraid",
  "gad_source",
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

const getCurrentPage = () => window.location.pathname + window.location.search;

const getExternalReferrer = () => {
  if (!document.referrer) return undefined;

  try {
    const refHost = new URL(document.referrer).hostname;
    if (refHost && !refHost.includes(window.location.hostname)) {
      return document.referrer;
    }
  } catch {
    return document.referrer;
  }

  return undefined;
};

const hasCampaignSignal = (params: URLSearchParams) =>
  TRACKED_KEYS.some((key) => Boolean(params.get(key)));

const logAttributionDebug = (attribution: Attribution, updatedKeys: string[]) => {
  if (!import.meta.env.DEV) return;

  const landingPath = attribution.landing_page
    ? attribution.landing_page.split("?")[0]
    : undefined;

  console.info("[Elluminate attribution]", {
    updatedKeys,
    storedKeys: TRACKED_KEYS.filter((key) => Boolean(attribution[key])),
    hasReferrer: Boolean(attribution.referrer),
    landingPath,
  });
};

/**
 * Run on app load. Reads UTM params and Google Ads click IDs from the URL,
 * merges them into the 90-day attribution cookie, and preserves the first
 * landing page captured during that cookie window.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const existing = getAttribution();
  const next: Attribution = { ...existing };
  let changed = false;
  const updatedKeys: string[] = [];
  const campaignSignal = hasCampaignSignal(params);

  for (const key of TRACKED_KEYS) {
    const value = params.get(key);
    if (value) {
      next[key] = value;
      changed = true;
      updatedKeys.push(key);
    }
  }

  const externalReferrer = getExternalReferrer();
  if (externalReferrer && (!existing.referrer || campaignSignal)) {
    next.referrer = externalReferrer;
    changed = true;
    updatedKeys.push("referrer");
  }

  if (!next.landing_page) {
    next.landing_page = getCurrentPage();
    changed = true;
    updatedKeys.push("landing_page");
  }

  if (changed) {
    next.captured_at = new Date().toISOString();
    setCookie(COOKIE_NAME, JSON.stringify(next), COOKIE_DAYS);
    logAttributionDebug(next, updatedKeys);
  }
}
