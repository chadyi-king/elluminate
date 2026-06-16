import type { Attribution } from "@/lib/attribution";
import { getGoogleAdsSendTo } from "@/lib/trackingConfig";

const DEFAULT_FORM_NAME = "plan_my_event";
const DEFAULT_BRAND = "elluminate";
const DEFAULT_SERVICE = "corporate_physical_team_building";
const DEFAULT_VALUE = 150;
const DEFAULT_CURRENCY = "SGD";

type DataLayerItem = Record<string, unknown> | IArguments;

type TrackingWindow = Window & {
  dataLayer?: DataLayerItem[];
  gtag?: (command: "event", eventName: string, params: Record<string, unknown>) => void;
};

export interface LeadConversionInput {
  lead_id: string;
  form_name?: string;
  brand?: string;
  service?: string;
  value?: number;
  currency?: string;
  event_category?: string | null;
  page_path?: string | null;
  attribution?: Attribution;
}

const cleanPayload = (payload: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );

const attributionPayload = (attribution?: Attribution) => ({
  gclid: attribution?.gclid,
  gbraid: attribution?.gbraid,
  wbraid: attribution?.wbraid,
  gad_source: attribution?.gad_source,
  utm_source: attribution?.utm_source,
  utm_medium: attribution?.utm_medium,
  utm_campaign: attribution?.utm_campaign,
  utm_term: attribution?.utm_term,
  utm_content: attribution?.utm_content,
  referrer: attribution?.referrer,
  landing_page: attribution?.landing_page,
  attribution_captured_at: attribution?.captured_at,
});

export function buildLeadConversionPayload(input: LeadConversionInput) {
  const lead_id = input.lead_id;
  return cleanPayload({
    form_name: input.form_name ?? DEFAULT_FORM_NAME,
    brand: input.brand ?? DEFAULT_BRAND,
    service: input.service ?? DEFAULT_SERVICE,
    value: input.value ?? DEFAULT_VALUE,
    currency: input.currency ?? DEFAULT_CURRENCY,
    lead_id,
    transaction_id: lead_id,
    event_category: input.event_category,
    page_path: input.page_path,
    ...attributionPayload(input.attribution),
  });
}

export function trackLeadConversion(input: LeadConversionInput) {
  if (typeof window === "undefined") return;

  const lead_id = input.lead_id;
  const value = input.value ?? DEFAULT_VALUE;
  const currency = input.currency ?? DEFAULT_CURRENCY;
  const googleAdsSendTo = getGoogleAdsSendTo();
  const w = window as TrackingWindow;
  const leadPayload = buildLeadConversionPayload(input);

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "elluminate_lead_submitted",
    google_ads_send_to_configured: Boolean(googleAdsSendTo),
    ...leadPayload,
  });

  if (typeof w.gtag === "function") {
    w.gtag("event", "generate_lead", leadPayload);
  } else {
    w.dataLayer.push({
      event: "elluminate_gtag_missing",
      lead_id,
      form_name: leadPayload.form_name,
      brand: leadPayload.brand,
      service: leadPayload.service,
    });
  }

  if (googleAdsSendTo && typeof w.gtag === "function") {
    w.gtag("event", "conversion", {
      send_to: googleAdsSendTo,
      value,
      currency,
      transaction_id: lead_id,
    });
    return;
  }

  if (!googleAdsSendTo) {
    w.dataLayer.push({
      event: "elluminate_ads_conversion_not_configured",
      lead_id,
      form_name: leadPayload.form_name,
      brand: leadPayload.brand,
      service: leadPayload.service,
    });
  }
}
