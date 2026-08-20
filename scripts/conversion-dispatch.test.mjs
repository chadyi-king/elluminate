import assert from "node:assert/strict";
import test from "node:test";
import { dispatchGoogleAdsConversion } from "../src/lib/conversionDispatch.js";

test("waits for the Google Ads event callback and reports client completion", async () => {
  let eventParams;
  const resultPromise = dispatchGoogleAdsConversion({
    gtag: (command, eventName, params) => {
      assert.equal(command, "event");
      assert.equal(eventName, "conversion");
      eventParams = params;
    },
    sendTo: "AW-704277198/24mXCJ2Q_s8cEM7V6c8C",
    leadId: "lead-123",
    timeoutMs: 100,
  });

  assert.equal(eventParams.send_to, "AW-704277198/24mXCJ2Q_s8cEM7V6c8C");
  assert.equal(eventParams.transaction_id, "lead-123");
  assert.equal(eventParams.event_timeout, 100);
  eventParams.event_callback();

  assert.deepEqual(await resultPromise, { status: "callback_completed" });
});

test("settles as timed out when Google never acknowledges dispatch", async () => {
  const result = await dispatchGoogleAdsConversion({
    gtag: () => undefined,
    sendTo: "AW-704277198/24mXCJ2Q_s8cEM7V6c8C",
    leadId: "lead-123",
    timeoutMs: 5,
  });

  assert.deepEqual(result, { status: "timed_out" });
});

test("does not pretend to dispatch when the tag or destination is unavailable", async () => {
  assert.deepEqual(
    await dispatchGoogleAdsConversion({ gtag: undefined, sendTo: "AW-123/label", leadId: "lead-123" }),
    { status: "gtag_missing" },
  );
  assert.deepEqual(
    await dispatchGoogleAdsConversion({ gtag: () => undefined, sendTo: "", leadId: "lead-123" }),
    { status: "not_configured" },
  );
});
