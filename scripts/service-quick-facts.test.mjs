import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(path, "utf8");

const evaluateTypescript = (source, filename, require = undefined) => {
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const sandbox = { exports: {}, require };
  vm.runInNewContext(compiled.outputText, sandbox, { filename });
  return sandbox.exports;
};

const experienceExports = evaluateTypescript(
  read("src/data/serviceExperienceContent.ts"),
  "serviceExperienceContent.js",
);

const quickFactsExports = evaluateTypescript(
  read("src/data/serviceQuickFacts.ts"),
  "serviceQuickFacts.js",
  (specifier) => {
    if (specifier === "@/data/serviceExperienceContent") return experienceExports;
    if (specifier === "@/data/serviceCardCatalog") {
      return {
        getServiceCardPresentation: (slug) => ({
          shortTitle: slug,
          hook: `${slug} experience`,
          setting: "In person",
        }),
      };
    }
    throw new Error(`Unexpected dependency: ${specifier}`);
  },
);

const servicesDataSource = read("src/data/servicesData.ts");
const planningBriefComponentSource = read("src/components/service-page/ServicePlanningBrief.tsx");

const getServiceBlock = (slug) => {
  const key = `  "${slug}": {`;
  const start = servicesDataSource.indexOf(key);
  assert.notEqual(start, -1, `${slug} missing from servicesData`);
  const remaining = servicesDataSource.slice(start + key.length);
  const nextService = remaining.match(/\n  (?:(?:"[^"]+")|(?:[A-Za-z][\w-]*)): \{/);
  return nextService ? remaining.slice(0, nextService.index) : remaining;
};

test("quick facts cover all 36 live activity routes", () => {
  const { getServiceQuickFacts, serviceQuickFactsCoverage, serviceQuickFactsExpectedCoverage } = quickFactsExports;
  const { serviceExperienceSlugs } = experienceExports;

  assert.equal(serviceExperienceSlugs.length, 36);
  assert.equal(serviceQuickFactsExpectedCoverage, 36);
  assert.equal(serviceQuickFactsCoverage, 36);
  for (const slug of serviceExperienceSlugs) {
    assert.ok(getServiceQuickFacts(slug), `${slug} is missing quick facts`);
  }
});

test("owner-approved prices and source-backed operating facts stay consistent", () => {
  const { getServiceQuickFacts } = quickFactsExports;
  const expectedPrices = {
    "amazing-race": "From $45/pax",
    "csi-bones": "From $55/pax",
    "monopoly-dash": "From $55/pax",
    "sotong-game": "From $55/pax",
  };

  for (const [slug, price] of Object.entries(expectedPrices)) {
    const facts = getServiceQuickFacts(slug).facts;
    assert.equal(facts.find((fact) => fact.label === "Starting price")?.value, price);

    const serviceBlock = getServiceBlock(slug);
    const numericPrice = price.replace("/pax", "");
    assert.match(serviceBlock, new RegExp(`startingPrice: "${numericPrice.replace("$", "\\$")}"`));
    assert.match(serviceBlock, new RegExp(`(?:price:|trafficLightPackages\\()\\s*"${price.replace("$", "\\$")}`));
  }

  const amazingRaceFacts = getServiceQuickFacts("amazing-race").facts;
  assert.equal(amazingRaceFacts.find((fact) => fact.label === "Group size")?.value, "10–200+ players");
  assert.equal(amazingRaceFacts.find((fact) => fact.label === "Duration")?.value, "3 hours");

  const localRetreatFacts = getServiceQuickFacts("local-retreats").facts;
  assert.equal(localRetreatFacts.find((fact) => fact.label === "Programme range")?.value, "1–3 nights");

  const overseasRetreatFacts = getServiceQuickFacts("overseas-retreats").facts;
  assert.equal(overseasRetreatFacts.find((fact) => fact.label === "Typical length")?.value, "3–5 days");
});

test("planning-brief markup uses supported utilities and valid definition-list grouping", () => {
  for (const unsupportedUtility of [
    "text-white/48",
    "text-white/58",
    "text-white/66",
    "text-[#12211e]/48",
    "text-[#12211e]/55",
    "text-[#12211e]/68",
    "text-[#101725]/48",
    "text-[#101725]/55",
    "text-[#101725]/68",
    "opacity-65",
  ]) {
    assert.doesNotMatch(planningBriefComponentSource, new RegExp(unsupportedUtility.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(planningBriefComponentSource, /<dt[\s\S]*?<span[\s\S]*?aria-hidden="true"[\s\S]*?<\/dt>[\s\S]*?<dd/);
  assert.doesNotMatch(planningBriefComponentSource, /<div[\s\S]*?<span\s+aria-hidden="true"[\s\S]*?<\/span>\s*<dt/);
});
