import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createServer } from "vite";

const root = process.cwd();
const vite = await createServer({
  root,
  appType: "custom",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
  logLevel: "error",
});

const failures = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

try {
  const blueprintModule = await vite.ssrLoadModule("/src/data/servicePageBlueprints.ts");
  const experienceModule = await vite.ssrLoadModule("/src/data/serviceExperienceContent.ts");
  const assetModule = await vite.ssrLoadModule("/src/data/serviceAssetCatalog.ts");
  const scopeModule = await vite.ssrLoadModule("/src/data/siteScope.ts");
  const blueprints = blueprintModule.servicePageBlueprints;
  const slugs = experienceModule.serviceExperienceSlugs;
  const catalog = assetModule.serviceAssetCatalog;
  const expectedActivityV2Slugs = [...scopeModule.activityPageBatchOneSlugs];
  const actualActivityV2Slugs = slugs.filter((slug) => blueprints[slug]?.layoutVersion === "activity-v2");

  expect(slugs.length === 36, `Expected 36 child routes; received ${slugs.length}.`);
  expect(Object.keys(blueprints).length === 36, `Expected 36 blueprint keys; received ${Object.keys(blueprints).length}.`);
  expect(expectedActivityV2Slugs.length === 10, `Expected a controlled 10-route activity-v2 batch; received ${expectedActivityV2Slugs.length}.`);
  expect(
    actualActivityV2Slugs.length === expectedActivityV2Slugs.length &&
      actualActivityV2Slugs.every((slug) => expectedActivityV2Slugs.includes(slug)),
    `activity-v2 scope drifted. Expected ${expectedActivityV2Slugs.join(", ")}; received ${actualActivityV2Slugs.join(", ")}.`,
  );

  for (const slug of slugs) {
    const blueprint = blueprints[slug];
    expect(Boolean(blueprint), `${slug}: blueprint is missing.`);
    if (!blueprint) continue;

    expect(blueprint.journey.stages.length === 6, `${slug}: expected 6 journey stages.`);
    expect("video" in blueprint, `${slug}: canonical contract is missing video data.`);
    expect("specialistExtension" in blueprint, `${slug}: canonical contract is missing specialist extension data.`);
    expect(Boolean(blueprint.assets?.hero), `${slug}: canonical contract is missing the hero asset.`);
    const isActivityV2 = blueprint.layoutVersion === "activity-v2";
    expect(
      blueprint.facts.length === (isActivityV2 ? 6 : 9),
      `${slug}: expected ${isActivityV2 ? 6 : 9} planning facts.`,
    );
    if (isActivityV2) {
      expect(blueprint.packages.length === 3, `${slug}: activity-v2 requires 3 integrated package tiers.`);
      expect(Boolean(blueprint.assets.journeyActorLeft), `${slug}: activity-v2 is missing its left journey actor.`);
      expect(Boolean(blueprint.assets.journeyActorRight), `${slug}: activity-v2 is missing its right journey actor.`);
      expect(Boolean(blueprint.assets.plannerActor), `${slug}: activity-v2 is missing its planner actor.`);
      expect(blueprint.transitionMoments.length === 3, `${slug}: activity-v2 requires 3 experiential transition moments.`);
    }
    const startingPrice = blueprint.facts.find((fact) => fact.label === "Starting price")?.value ?? "";
    expect(!/quote\s+per/i.test(startingPrice), `${slug}: quote-only pricing must not append a per-person or per-night unit.`);
    expect(blueprint.faqs.length === 8, `${slug}: expected 8 FAQs.`);
    expect(
      blueprint.perfectFor.length === (isActivityV2 ? 8 : 6),
      `${slug}: expected ${isActivityV2 ? 8 : 6} Perfect For cards.`,
    );
    expect(blueprint.gallery.length >= 8 && blueprint.gallery.length <= 12, `${slug}: expected 8-12 gallery assets.`);
    expect(Boolean(blueprint.galleryTitle), `${slug}: expected an explicit gallery title.`);
    expect(blueprint.journeyMedia.length === 6, `${slug}: expected 6 journey media stages.`);
    expect(blueprint.gallery.filter((asset) => asset.classification === "real-event").length >= 3, `${slug}: expected at least 3 real-event assets.`);
    expect(blueprint.journeyMedia.filter((asset) => asset.kind === "real-event" && asset.src).length === 3, `${slug}: journey should use 3 real event photographs.`);
    expect(blueprint.journeyMedia.filter((asset) => asset.kind === "conceptual-editorial").length === 3, `${slug}: journey should use 3 campaign/editorial scenes.`);
    expect(blueprint.relatedSlugs.length === 8, `${slug}: expected 8 related experiences.`);
    expect(new Set(blueprint.relatedSlugs).size === 8, `${slug}: related experiences contain duplicates.`);
    expect(!blueprint.relatedSlugs.includes(slug), `${slug}: recommendations include the current route.`);
    expect(Boolean(blueprint.midCta.headline && blueprint.midCta.buttonLabel), `${slug}: mid-page CTA is incomplete.`);
    expect(Boolean(blueprint.closingCta.headline && blueprint.closingCta.buttonLabel), `${slug}: closing CTA is incomplete.`);
    expect(blueprint.packages.every((option) => option.source === "existing-service-data"), `${slug}: package data is missing verified source provenance.`);

    const familyScopedGallery = blueprint.gallery.filter((asset) => asset.scope === "family");
    if (familyScopedGallery.length > 0) {
      expect(
        blueprint.galleryTitle !== `${blueprint.card.shortTitle} in Action`,
        `${slug}: family-level photography must not be labelled as route-specific evidence.`,
      );
      for (const asset of familyScopedGallery) {
        expect(
          !asset.alt.toLowerCase().includes(blueprint.card.shortTitle.toLowerCase()),
          `${slug}: family-level photo alt text claims the current route.`,
        );
      }
    }

    const routeAssets = catalog.filter((asset) => asset.route === slug);
    for (const requiredType of ["hero", "journey-actor", "planner-actor", "themed-prop"]) {
      expect(routeAssets.some((asset) => asset.assetType === requiredType), `${slug}: asset catalogue is missing ${requiredType}.`);
    }
  }

  for (const asset of catalog) {
    expect(["route", "family", "campaign"].includes(asset.evidenceScope), `${asset.id}: asset evidence scope is missing.`);
    if (!asset.src.startsWith("/images/")) continue;
    const localPath = path.join(root, "public", asset.src.replace(/^\//, ""));
    try {
      await fs.access(localPath);
    } catch {
      failures.push(`${asset.route}: missing catalogued asset ${asset.src}.`);
    }
  }

  const servicePageSource = await fs.readFile(path.join(root, "src/pages/ServicePage.tsx"), "utf8");
  for (const legacyModule of [
    "ServiceHowItWorksWithPricing",
    "ServiceOutcomes",
    "ServiceRecentEventsTicker",
    "ServiceTestimonialNew",
    "ServiceQuickFacts",
  ]) {
    expect(!servicePageSource.includes(legacyModule), `Legacy child-page module remains: ${legacyModule}.`);
    try {
      await fs.access(path.join(root, "src/components/service-page", `${legacyModule}.tsx`));
      failures.push(`Legacy child-page file still exists: ${legacyModule}.tsx.`);
    } catch {
      // Expected: legacy modules are removed, not merely hidden by flags.
    }
  }
} finally {
  await vite.close();
}

if (failures.length > 0) {
  console.error(`Service blueprint validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Service blueprint validation passed for all 36 child routes.");
}
