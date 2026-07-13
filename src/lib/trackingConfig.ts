export const DEFAULT_GA4_MEASUREMENT_ID = "G-R4S0RLKQ67";
export const DEFAULT_GOOGLE_ADS_SEND_TO = "AW-704277198/24mXCJ2Q_s8cEM7V6c8C";

export const getGa4MeasurementId = () =>
  import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() || DEFAULT_GA4_MEASUREMENT_ID;

export const getGoogleAdsSendTo = () =>
  import.meta.env.VITE_GOOGLE_ADS_SEND_TO?.trim() || DEFAULT_GOOGLE_ADS_SEND_TO;

export const getGoogleAdsConversionId = (sendTo = getGoogleAdsSendTo()) => sendTo.split("/")[0]?.trim() || "";

export const getGtmContainerId = () => import.meta.env.VITE_GTM_CONTAINER_ID?.trim() || "";
