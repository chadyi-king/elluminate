import type { Attribution } from "@/lib/attribution";
import { getGa4MeasurementId, getGoogleAdsSendTo } from "@/lib/trackingConfig";

const DEFAULT_FORM_NAME = "plan_my_event";
const DEFAULT_BRAND = "elluminate";
const DEFAULT_SERVICE = "corporate_physical_team_building";

type DataLayerItem = Record<string, unknown> | IArguments;

type TrackingWindow = Window & {
  dataLayer?: DataLayerItem[];
  gtag?: (command: "event", eventName: string, params: Record<string, unknown>) => void;
};

export interface LeadConversionInput {
  lead_id: string;
  form_session_id?: string;
  form_name?: string;
  brand?: string;
  service?: string;
  value?: number;
  currency?: string;
  event_category?: string | null;
  page_path?: string | null;
  attribution?: Attribution;
}

export type AnalyticsEventName =
  | "page_view"
  | "scroll_depth"
  | "service_cta_click"
  | "lead_form_open"
  | "lead_form_start"
  | "lead_form_validation_error"
  | "lead_form_submit_attempt"
  | "lead_form_submit_error"
  | "contact_channel_click";

export type AnalyticsEventPayload = Record<string, unknown>;

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

const currentPagePath = () => {
  if (typeof window === "undefined") return undefined;
  return `${window.location.pathname}${window.location.search}`;
};

export function trackAnalyticsEvent(eventName: AnalyticsEventName, payload: AnalyticsEventPayload = {}) {
  if (typeof window === "undefined") return;

  const w = window as TrackingWindow;
  const ga4MeasurementId = getGa4MeasurementId();
  const eventPayload = cleanPayload({
    brand: DEFAULT_BRAND,
    page_path: currentPagePath(),
    ...payload,
  });

  w.dataLayer = w.dataLayer || [];

  if (typeof w.gtag === "function" && ga4MeasurementId) {
    w.gtag("event", eventName, {
      ...eventPayload,
      send_to: ga4MeasurementId,
    });
    return;
  }

  w.dataLayer.push({
    event: eventName,
    ...eventPayload,
  });
}

export function buildLeadConversionPayload(input: LeadConversionInput) {
  const lead_id = input.lead_id;
  return cleanPayload({
    form_name: input.form_name ?? DEFAULT_FORM_NAME,
    brand: input.brand ?? DEFAULT_BRAND,
    service: input.service ?? DEFAULT_SERVICE,
    value: input.value,
    currency: input.value !== undefined ? input.currency : undefined,
    lead_id,
    transaction_id: lead_id,
    form_session_id: input.form_session_id,
    event_category: input.event_category,
    page_path: input.page_path,
    ...attributionPayload(input.attribution),
  });
}

export function trackLeadConversion(input: LeadConversionInput) {
  if (typeof window === "undefined") return;

  const lead_id = input.lead_id;
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
