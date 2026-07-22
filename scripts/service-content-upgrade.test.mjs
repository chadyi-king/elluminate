import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createServer } from "vite";

const read = (path) => readFileSync(path, "utf8");
const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const vite = await createServer({
  root: process.cwd(),
  appType: "custom",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
  logLevel: "error",
});

let servicePageBlueprints;
let serviceExperienceSlugs;
let serviceContentQuality;

try {
  ({ servicePageBlueprints } = await vite.ssrLoadModule("/src/data/servicePageBlueprints.ts"));
  ({ serviceExperienceSlugs } = await vite.ssrLoadModule("/src/data/serviceExperienceContent.ts"));
  ({ serviceContentQuality } = await vite.ssrLoadModule("/src/data/serviceContentQuality.ts"));
} finally {
  await vite.close();
}

const servicePage = read("src/pages/ServicePage.tsx");
const serviceHeroSplit = read("src/components/service-page/ServiceHeroSplit.tsx");
const policeTapeStrip = read("src/components/service-page/dividers/PoliceTapeStrip.tsx");
const arrowStrip = read("src/components/service-page/dividers/ArrowStrip.tsx");

test("all 36 child routes retain buyer-facing copy coverage", () => {
  assert.equal(serviceExperienceSlugs.length, 36);
  const missingChildCopy = serviceExperienceSlugs.filter((slug) => !serviceContentQuality[slug]);
  assert.deepEqual(missingChildCopy, []);
  assert.deepEqual(
    Object.keys(serviceContentQuality).filter((slug) => !serviceExperienceSlugs.includes(slug)).sort(),
    ["team-building"],
    "only the held parent Team Building landing page may sit outside the 36 child routes",
  );

  for (const slug of serviceExperienceSlugs) {
    const entry = serviceContentQuality[slug];
    const blueprint = servicePageBlueprints[slug];
    assert.ok(entry.heroSubline.length > 40, `${slug} needs a meaningful hero subline`);
    if (blueprint.layoutVersion === "activity-v2") {
      assert.ok(wordCount(entry.heroSubline) >= 10, `${slug} activity-v2 hero subline needs a short experiential promise`);
    } else {
      assert.ok(entry.heroSubline.includes(" for "), `${slug} hero subline should state who it is for`);
    }
    assert.ok(wordCount(entry.overviewDescription) >= 35, `${slug} overview needs enough detail to explain the experience`);
    assert.ok(wordCount(entry.overviewDescription) <= 250, `${slug} overview is too long for the shared page section`);
    assert.doesNotMatch(entry.overviewDescription, /Simply play|show up and have fun/i, `${slug} has casual template bleed`);
    assert.ok(entry.todos.some((todo) => todo.startsWith("TODO(content):")), `${slug} needs a TODO(content) marker`);
  }
});

test("canonical blueprints replace the superseded 4-6 FAQ and 3-4 related-link contract", () => {
  assert.equal(Object.keys(servicePageBlueprints).length, 36);

  for (const slug of serviceExperienceSlugs) {
    const blueprint = servicePageBlueprints[slug];
    assert.ok(blueprint, `${slug} is missing its canonical blueprint`);
    assert.equal(blueprint.slug, slug, `${slug} blueprint has the wrong slug`);
    assert.equal(blueprint.overviewParagraphs.length, 2, `${slug} should have a two-paragraph introduction`);
    assert.ok(blueprint.overviewParagraphs.every((paragraph) => wordCount(paragraph) >= 4), `${slug} has an empty or unusably short introduction paragraph`);
    assert.equal(blueprint.journey.stages.length, 6, `${slug} should have exactly 6 journey stages`);
    assert.equal(
      blueprint.facts.length,
      blueprint.layoutVersion === "activity-v2" ? 6 : 9,
      `${slug} has the wrong planning-fact count for ${blueprint.layoutVersion}`,
    );
    assert.equal(blueprint.faqs.length, 8, `${slug} should have exactly 8 FAQs`);
    assert.equal(blueprint.relatedSlugs.length, 8, `${slug} should have exactly 8 related experiences`);
    assert.equal(new Set(blueprint.relatedSlugs).size, 8, `${slug} related experiences should be unique`);
    assert.ok(!blueprint.relatedSlugs.includes(slug), `${slug} links to itself`);

    for (const relatedSlug of blueprint.relatedSlugs) {
      assert.ok(serviceExperienceSlugs.includes(relatedSlug), `${slug} links to non-live related service ${relatedSlug}`);
    }
  }
});

test("shared child template renders the canonical journey once and keeps FAQ data aligned with schema", () => {
  for (const pattern of [
    /getServicePageBlueprint/,
    /const displayFaqs = blueprint\.faqs/,
    /const relatedServices = blueprint\.relatedSlugs/,
    /FAQSchema faqs=\{displayFaqs\}/,
    /<ServiceTransitionStrip\b/,
    /<ServiceOverviewNew\b/,
    /<ServiceExperienceJourney\b/,
    /<ServicePlanningBrief\b/,
    /<ServicePackageSelector\b/,
    /<ServiceFAQAccordion\b/,
    /<ServiceMiniGallery\b/,
    /blueprint\.midCta\.headline/,
    /blueprint\.closingCta\.headline/,
  ]) {
    assert.match(servicePage, pattern);
  }

  for (const component of [
    "ServiceTransitionStrip",
    "ServiceOverviewNew",
    "ServiceExperienceJourney",
    "ServicePlanningBrief",
    "ServicePackageSelector",
    "ServiceCTANew",
    "ServiceFAQAccordion",
    "ServiceMiniGallery",
    "ServiceFinalCTA",
  ]) {
    const openings = servicePage.match(new RegExp(`<${component}\\b`, "g")) ?? [];
    assert.equal(openings.length, 1, `${component} should render once in the child template`);
  }

  const orderedComponents = [
    "<ServiceHeroSplit",
    "<ServiceTransitionStrip",
    "<ServiceOverviewNew",
    "<ServiceExperienceJourney",
    "<ServicePlanningBrief",
    "<ServicePackageSelector",
    "<ServiceCTANew",
    "<ServiceFlowSection",
    "<ServiceFAQAccordion",
    "<ServiceMiniGallery",
    "<ServiceFinalCTA",
  ];
  const positions = orderedComponents.map((component) => servicePage.indexOf(component));
  assert.ok(positions.every((position) => position >= 0), "canonical child-page sequence is incomplete");
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b), "canonical child-page sections are out of order");

  for (const legacyModule of [
    "ServiceHowItWorksWithPricing",
    "ServiceOutcomes",
    "ServiceRecentEventsTicker",
    "ServiceTestimonialNew",
    "ServiceQuickFacts",
  ]) {
    assert.doesNotMatch(servicePage, new RegExp(legacyModule), `legacy child module remains: ${legacyModule}`);
  }

  assert.doesNotMatch(serviceHeroSplit, /"\{tagline\}"/);
});

test("decorative repeated divider text remains hidden from assistive reading", () => {
  assert.match(policeTapeStrip, /aria-hidden[\s\S]*CAUTION DO NOT CROSS/);
  assert.match(arrowStrip, /aria-hidden[\s\S]*›››/);
});
