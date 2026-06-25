import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const servicesData = readFileSync("src/data/servicesData.ts", "utf8");

const packageCopyBySlug = {
  workshops:
    "A focused, ready-to-run workshop at one of our facilitation venues. Includes an expert facilitator, all materials, and a proven session structure — your team arrives ready to learn and leaves with practical takeaways.",
  mbti:
    "A guided MBTI profiling workshop at one of our venues. Includes the assessment, a trained facilitator, and individual type debriefs — we run the full session end to end while your team focuses on the insights.",
  disc:
    "A guided DiSC behavioural workshop at one of our venues. Includes the assessment, expert facilitation, and a team debrief — a complete, ready-to-run session with no setup required on your side.",
  ocean:
    "A guided OCEAN (Big Five) profiling workshop at one of our venues. Includes the validated assessment, expert facilitation, and individual profile debriefs — delivered end to end by our team.",
  "mass-talks":
    "A complete keynote or seminar session at your chosen venue. We handle the speaker, AV, and full run-of-show — you bring the audience and we deliver a polished, high-impact session.",
  "youth-camps":
    "A ready-to-run camp programme at one of our partner sites. Trained facilitators, structured activities, and full safety management included — your students simply turn up to a fully run experience.",
  "corporate-days":
    "A pre-designed corporate day at one of our venues. We manage facilitation, activities, catering coordination, and flow — your team shows up to a complete, professionally run programme.",
};

function serviceBlock(slug) {
  const keyPattern = slug.includes("-") ? `"${slug}"` : `"?${slug}"?`;
  const startMatch = new RegExp(`\\n  ${keyPattern}: \\{`).exec(servicesData);
  const start = startMatch ? startMatch.index : -1;
  assert.notEqual(start, -1, `Missing ${slug} service data`);

  const next = servicesData.slice(start + 1).match(/\n  (?:"[a-z0-9-]+"|[a-z][a-z0-9]*): \{/);
  const end = next ? start + 1 + next.index : servicesData.indexOf("\n};", start);
  return servicesData.slice(start, end);
}

test("professional and premium service entry packages do not use casual game copy", () => {
  assert.match(servicesData, /const professionalServicePackages/);
  assert.match(servicesData, /title:\s*"ESSENTIAL"/);

  for (const [slug, copy] of Object.entries(packageCopyBySlug)) {
    const block = serviceBlock(slug);
    assert.doesNotMatch(block, /packages:\s*trafficLightPackages/, `${slug} should use tailored package copy`);
    assert.match(block, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${slug} should use approved entry-tier copy`);
    assert.doesNotMatch(block, /Simply play|show up and have fun|Minimum Package/i);
  }
});

test("MBTI and OCEAN hero taglines use clear buyer value propositions", () => {
  assert.match(serviceBlock("mbti"), /Understand what drives your team — and how to work better across personality types\./);
  assert.match(serviceBlock("ocean"), /The world's most research-backed personality framework, applied to how your team actually works\./);
  assert.doesNotMatch(servicesData, /Personality has the power to uplift, depress, curse and to bless/);
  assert.doesNotMatch(servicesData, /All great changes into Order is preceded always by Chaos/);
});
