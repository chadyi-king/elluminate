import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(path, "utf8");

const siteScope = read("src/data/siteScope.ts");
const serviceContentQualitySource = read("src/data/serviceContentQuality.ts");
const servicePage = read("src/pages/ServicePage.tsx");
const serviceHeroSplit = read("src/components/service-page/ServiceHeroSplit.tsx");
const policeTapeStrip = read("src/components/service-page/dividers/PoliceTapeStrip.tsx");
const arrowStrip = read("src/components/service-page/dividers/ArrowStrip.tsx");

const liveServiceSlugs = [...siteScope.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

const compiled = ts.transpileModule(serviceContentQualitySource, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
});
const sandbox = { exports: {} };
vm.runInNewContext(compiled.outputText, sandbox, { filename: "serviceContentQuality.js" });
const { serviceContentQuality } = sandbox.exports;

const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

test("every live service has a content-quality upgrade entry", () => {
  assert.deepEqual(Object.keys(serviceContentQuality).sort(), [...liveServiceSlugs].sort());
});

test("content-quality entries include useful buyer-facing copy and TODO markers", () => {
  for (const slug of liveServiceSlugs) {
    const entry = serviceContentQuality[slug];
    assert.ok(entry.heroSubline.length > 40, `${slug} needs a meaningful hero subline`);
    assert.ok(entry.heroSubline.includes(" for "), `${slug} hero subline should state who it is for`);
    assert.ok(wordCount(entry.overviewDescription) >= 35, `${slug} overview needs enough detail to explain the experience`);
    assert.ok(wordCount(entry.overviewDescription) <= 250, `${slug} overview is too long for the shared page section`);
    assert.doesNotMatch(entry.overviewDescription, /Simply play|show up and have fun/i, `${slug} has casual template bleed`);
    assert.ok(entry.todos.some((todo) => todo.startsWith("TODO(content):")), `${slug} needs a TODO(content) marker`);
  }
});

test("every live service has visible FAQ and related-service choices", () => {
  for (const slug of liveServiceSlugs) {
    const entry = serviceContentQuality[slug];
    assert.ok(entry.faqs.length >= 4 && entry.faqs.length <= 6, `${slug} should have 4-6 FAQs`);
    assert.ok(entry.relatedSlugs.length >= 3 && entry.relatedSlugs.length <= 4, `${slug} should have 3-4 related links`);

    for (const relatedSlug of entry.relatedSlugs) {
      assert.notEqual(relatedSlug, slug, `${slug} links to itself`);
      assert.ok(liveServiceSlugs.includes(relatedSlug), `${slug} links to non-live related service ${relatedSlug}`);
    }
  }
});

test("shared service template renders upgraded copy, FAQs, and related experiences", () => {
  for (const pattern of [
    /serviceContentQuality/,
    /displayHeroTagline/,
    /displayOverviewDescription/,
    /displayFaqs/,
    /FAQSchema faqs=\{displayFaqs\}/,
    /ServiceFAQAccordion/,
    /relatedServices/,
    /Related Experiences/,
    /ExperienceCard slug=\{relatedSlug\}/,
  ]) {
    assert.match(servicePage, pattern);
  }

  assert.doesNotMatch(serviceHeroSplit, /"\{tagline\}"/);
});

test("decorative repeated divider text remains hidden from assistive reading", () => {
  assert.match(policeTapeStrip, /aria-hidden[\s\S]*CAUTION DO NOT CROSS/);
  assert.match(arrowStrip, /aria-hidden[\s\S]*›››/);
});
