const DEFAULT_GA4_MEASUREMENT_ID = "G-R4S0RLKQ67";

type DataLayerItem = Record<string, unknown> | unknown[];

type GoogleTagWindow = Window & {
  dataLayer?: DataLayerItem[];
  gtag?: (...args: unknown[]) => void;
  elluminateTrackingConfig?: {
    ga4MeasurementId: string;
    gtmContainerId: string;
  };
};

const loadScript = (src: string) => {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

export function bootstrapGoogleTags() {
  if (typeof window === "undefined") return;

  const ga4MeasurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() || DEFAULT_GA4_MEASUREMENT_ID;
  const gtmContainerId = import.meta.env.VITE_GTM_CONTAINER_ID?.trim() || "";
  const w = window as GoogleTagWindow;

  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || ((...args: unknown[]) => { w.dataLayer?.push(args); });
  w.elluminateTrackingConfig = {
    ga4MeasurementId,
    gtmContainerId,
  };

  if (gtmContainerId) {
    w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmContainerId)}`);
  }

  if (ga4MeasurementId) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`);
    w.gtag("js", new Date());
    w.gtag("config", ga4MeasurementId);
  }
}
