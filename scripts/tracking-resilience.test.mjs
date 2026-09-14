import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "vite";

test("tracking and attribution isolate optional browser failures", async (t) => {
  const saved = Object.fromEntries(["window", "document", "localStorage"].map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  try {
    const tracking = await server.ssrLoadModule("/src/lib/tracking.ts");
    const attribution = await server.ssrLoadModule("/src/lib/attribution.ts");

    await t.test("a GA4 error does not prevent direct Ads dispatch", async () => {
      const calls = [];
      globalThis.window = { dataLayer: [], location: { pathname: "/", search: "" }, gtag: (_command, name, params) => {
        calls.push([name, params]);
        if (name === "generate_lead") throw new Error("GA4 unavailable");
        params.event_callback?.();
      } };
      const result = await tracking.trackLeadConversion({ lead_id: "test-local-only" });
      assert.equal(result.status, "callback_completed");
      assert.equal(calls.filter(([name]) => name === "conversion").length, 1);
      assert.equal(calls.find(([name]) => name === "conversion")[1].send_to, "AW-704277198/24mXCJ2Q_s8cEM7V6c8C");
      assert.equal(calls.find(([name]) => name === "conversion")[1].transaction_id, "test-local-only");
    });

    await t.test("funnel telemetry errors do not block the form handler", () => {
      globalThis.window.gtag = () => { throw new Error("tag unavailable"); };
      assert.doesNotThrow(() => tracking.trackAnalyticsEvent("lead_form_submit_attempt"));
    });

    await t.test("unavailable dataLayer and diagnostic errors cannot block the Ads attempt", async () => {
      let adsCalls = 0;
      globalThis.window = { dataLayer: Object.freeze([]), gtag: (_command, name, params) => {
        if (name === "conversion") { adsCalls++; params.event_callback(); }
        if (name === "ads_conversion_dispatch") throw new Error("diagnostic failed");
      } };
      const result = await tracking.trackLeadConversion({ lead_id: "test-local-only-2" });
      assert.equal(result.status, "callback_completed");
      assert.equal(adsCalls, 1);
    });

    await t.test("malformed attribution cookie is ignored", () => {
      globalThis.document = { cookie: "el_attr=%E0%A4%A" };
      assert.deepEqual(attribution.getAttribution(), {});
    });

    await t.test("blocked local storage does not lose the URL click ID", () => {
      let cookie = "";
      globalThis.document = { get cookie() { return cookie; }, set cookie(value) { cookie = value; }, referrer: "" };
      globalThis.window = { location: { pathname: "/", search: "?gclid=local-test-not-an-ad-click", hostname: "elluminate.sg" } };
      Object.defineProperty(globalThis, "localStorage", { configurable: true, get() { throw new Error("storage blocked"); } });
      assert.doesNotThrow(() => attribution.captureAttribution());
      assert.equal(attribution.getAttribution().gclid, "local-test-not-an-ad-click");
    });
  } finally {
    await server.close();
    for (const [key, descriptor] of Object.entries(saved)) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  }
});
