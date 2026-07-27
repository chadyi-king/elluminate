import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const contactModal = readFileSync("src/components/ContactModal.tsx", "utf8");
const teamBuildingPage = readFileSync("src/pages/TeamBuildingHubPage.tsx", "utf8");

test("team-building enquiries select Physical Team Building", () => {
  assert.match(
    teamBuildingPage,
    /openContactModal\(\{[\s\S]*eventCategory: "Physical Team Building"[\s\S]*serviceSlug: "team-building"/,
  );
});

test("service enquiries clear stale cross-service prefills before adding the current one", () => {
  assert.match(contactModal, /const SERVICE_PREFILL_DETAILS = \[/);
  assert.match(
    contactModal,
    /I would like help choosing the right team-building experience for my group\./,
  );
  assert.match(
    contactModal,
    /I would like help shaping the right training, workshop or profiling direction for my group\./,
  );
  assert.match(
    contactModal,
    /I would like help planning a local or overseas company retreat\./,
  );
  assert.match(
    contactModal,
    /\.filter\(\(line\) => !SERVICE_PREFILL_DETAILS\.includes\(line\.trim\(\)\)\)/,
  );
  assert.match(contactModal, /existingDetails = clearServicePrefillDetails\(existingDetails\)/);
});
