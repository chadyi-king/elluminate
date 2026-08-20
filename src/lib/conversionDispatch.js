export const DEFAULT_ADS_DISPATCH_TIMEOUT_MS = 2000;

export function dispatchGoogleAdsConversion({
  gtag,
  sendTo,
  leadId,
  timeoutMs = DEFAULT_ADS_DISPATCH_TIMEOUT_MS,
}) {
  if (!sendTo) return Promise.resolve({ status: "not_configured" });
  if (typeof gtag !== "function") return Promise.resolve({ status: "gtag_missing" });

  return new Promise((resolve) => {
    let settled = false;
    const finish = (status) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutId);
      resolve({ status });
    };
    const timeoutId = setTimeout(() => finish("timed_out"), timeoutMs);

    try {
      gtag("event", "conversion", {
        send_to: sendTo,
        transaction_id: leadId,
        event_callback: () => finish("callback_completed"),
        event_timeout: timeoutMs,
      });
    } catch {
      finish("dispatch_failed");
    }
  });
}
