import { useEffect } from "react";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
let analyticsInitialized = false;

export function trackEvent(eventName, parameters = {}) {
  if (measurementId && typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
}

export default function Analytics() {
  useEffect(() => {
    if (!measurementId || analyticsInitialized) return;
    analyticsInitialized = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    if (!document.querySelector('script[data-google-analytics="true"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.googleAnalytics = "true";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
