import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackAnalyticsEvent } from "@/lib/tracking";

const SCROLL_THRESHOLDS = [25, 50, 75, 90] as const;

export const AnalyticsRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`;
    const pageViewTimer = window.setTimeout(() => {
      trackAnalyticsEvent("page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    const reachedThresholds = new Set<number>();
    const trackScrollDepth = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrollPercent = Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100));
      for (const threshold of SCROLL_THRESHOLDS) {
        if (scrollPercent >= threshold && !reachedThresholds.has(threshold)) {
          reachedThresholds.add(threshold);
          trackAnalyticsEvent("scroll_depth", {
            page_path: pagePath,
            scroll_percent: threshold,
          });
        }
      }
    };

    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    return () => {
      window.clearTimeout(pageViewTimer);
      window.removeEventListener("scroll", trackScrollDepth);
    };
  }, [location.pathname, location.search]);

  return null;
};
