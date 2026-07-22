import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const contactContext = read("src/contexts/ContactModalContext.tsx");
const contactModal = read("src/components/ContactModal.tsx");
const packageSelector = read("src/components/service-page/ServicePackageSelector.tsx");
const midCta = read("src/components/service-page/ServiceCTANew.tsx");
const finalCta = read("src/components/service-page/ServiceFinalCTA.tsx");
const leadSubmission = read("src/lib/leadSubmission.ts");
const attribution = read("src/lib/attribution.ts");

test("shared modal context accepts optional service and package prefills", () => {
  assert.match(contactContext, /serviceSlug\?:\s*string/);
  assert.match(contactContext, /packageId\?:\s*string/);
  assert.match(contactContext, /openContactModal:\s*\(context\?: ContactModalOpenContext/);
});

test("service CTAs and valid package choices use the same shared Plan My Event modal", () => {
  assert.match(packageSelector, /openContactModal\(\{[\s\S]*serviceSlug,[\s\S]*packageId:\s*option\.id[\s\S]*\}\)/);
  assert.match(midCta, /openContactModal\(\{\s*serviceSlug\s*\}\)/);
  assert.match(finalCta, /openContactModal\(\{\s*serviceSlug\s*\}\)/);
});

test("prefill resolves only canonical route and package data and preserves organiser notes", () => {
  assert.match(contactModal, /getServicePageBlueprint\(modalContext\.serviceSlug\)/);
  assert.match(contactModal, /selectedBlueprint\?\.packages\.find\(\(option\) => option\.id === modalContext\?\.packageId\)/);
  assert.match(contactModal, /Selected experience:/);
  assert.match(contactModal, /Selected package:/);
  assert.match(contactModal, /existingDetails/);
  assert.match(contactModal, /additionalDetails:\s*\[existingDetails, selectionBlock\]\.filter\(Boolean\)\.join/);
});

test("prefill does not create a second lead or attribution path", () => {
  assert.equal((contactModal.match(/await submitLead\(\{/g) ?? []).length, 1);
  assert.match(contactModal, /formName:\s*"plan_my_event"/);
  assert.match(contactModal, /additional_details:\s*formData\.additionalDetails\.trim\(\) \|\| null/);
  assert.doesNotMatch(contactModal, /trackLeadConversion|captureAttribution|gtag\(/);

  for (const key of [
    "gclid",
    "gbraid",
    "wbraid",
    "gad_source",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "referrer",
    "landing_page",
  ]) {
    assert.match(attribution, new RegExp(key));
    assert.match(leadSubmission, new RegExp(key));
  }
});
