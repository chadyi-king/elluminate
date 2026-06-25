import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(path, "utf8");

const deadSlugs = [
  "dinner-and-dance",
  "awards-ceremonies",
  "corporate-anniversaries",
  "product-launch",
  "brand-activations",
  "client-appreciation",
  "town-halls",
  "immersive-experiences",
  "event-concept",
  "stage-production",
  "custom-themes",
  "emcee-media",
  "summits",
  "government-events",
  "private-events",
  "family-fun-days",
  "corporate-carnivals",
  "vip-gala",
  "grand-opening",
];

const siteScope = read("src/data/siteScope.ts");
const servicesData = read("src/data/servicesData.ts");
const servicePage = read("src/pages/ServicePage.tsx");
const serviceContentQualitySource = read("src/data/serviceContentQuality.ts");

const liveSlugs = [...siteScope.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

const compiled = ts.transpileModule(serviceContentQualitySource, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
});
const sandbox = { exports: {} };
vm.runInNewContext(compiled.outputText, sandbox, { filename: "serviceContentQuality.js" });
const { serviceContentQuality } = sandbox.exports;

const escapeCell = (value) => String(value ?? "").replace(/\n/g, " ").replace(/\|/g, "\\|");

const parseSeo = (slug) => {
  const seoMapStart = servicePage.indexOf("const serviceSEO");
  const start = servicePage.indexOf(`"${slug}":`, seoMapStart);
  if (start === -1) return null;
  const nextSlug = servicePage.indexOf("\n    \"", start + 1);
  const end = nextSlug === -1 ? servicePage.indexOf("\n  };", start) : nextSlug;
  const block = servicePage.slice(start, end);
  return {
    title: /title:\s*"([^"]+)"/.exec(block)?.[1] ?? `TODO(content): Confirm SEO title for ${slug}`,
    description: /description:\s*"([^"]+)"/.exec(block)?.[1] ?? `TODO(content): Confirm SEO description for ${slug}`,
    canonical: /canonical:\s*"([^"]+)"/.exec(block)?.[1] ?? `https://elluminate.sg/services/${slug}`,
  };
};

const proofMap = new Map();
const addProof = (name, source, { logoUrl, event, pax } = {}) => {
  if (!name || name.startsWith("TODO(")) return;
  const entry = proofMap.get(name) ?? {
    sources: new Set(),
    logoUrls: new Set(),
    events: [],
    paxValues: new Set(),
  };
  entry.sources.add(source);
  if (logoUrl) entry.logoUrls.add(logoUrl);
  if (event) entry.events.push(event);
  if (pax) entry.paxValues.add(String(pax));
  proofMap.set(name, entry);
};

for (const [path, sourceLabel] of [
  ["src/components/SocialProofSection.tsx", "homepage SocialProofSection logo wall"],
  ["src/pages/AboutPage.tsx", "About page logo carousel"],
]) {
  const source = read(path);
  for (const match of source.matchAll(/name:\s*"([^"]+)"[\s\S]*?logo:\s*"([^"]+)"/g)) {
    addProof(match[1], sourceLabel, { logoUrl: match[2] });
  }
}

for (const match of servicesData.matchAll(/clientLogos:\s*\[([^\]]+)\]/g)) {
  for (const nameMatch of match[1].matchAll(/"([^"]+)"/g)) {
    addProof(nameMatch[1], "service page clientLogos array");
  }
}

for (const match of servicesData.matchAll(/\{\s*client:\s*"([^"]+)",\s*event:\s*"([^"]+)",\s*pax:\s*(\d+)/g)) {
  addProof(match[1], "service page recentEvents source data", { event: match[2], pax: match[3] });
}

for (const [path, sourceLabel] of [
  ["src/components/portfolio/FeaturedCaseStudies.tsx", "disabled portfolio case-study source"],
  ["src/components/portfolio/MiniCaseStudies.tsx", "disabled portfolio mini-case source"],
  ["src/components/portfolio/ClientLogosGrid.tsx", "disabled portfolio client-grid source"],
  ["src/components/portfolio/TestimonialWall.tsx", "disabled portfolio testimonial source"],
]) {
  const source = read(path);
  for (const match of source.matchAll(/(?:client|company|name):\s*"([^"]+)"/g)) {
    addProof(match[1], sourceLabel);
  }
}

mkdirSync("docs", { recursive: true });

const contentSections = liveSlugs.map((slug) => {
  const seo = parseSeo(slug);
  const quality = serviceContentQuality[slug];
  return [
    `### ${slug}`,
    `- Title: ${seo?.title}`,
    `- Description: ${seo?.description}`,
    `- Canonical: ${seo?.canonical}`,
    `- Hero subline: ${quality.heroSubline}`,
    `- What's Inside: ${quality.overviewDescription}`,
    `- FAQs: ${quality.faqs.map((faq) => faq.question).join(" | ")}`,
    `- Related links: ${quality.relatedSlugs.map((relatedSlug) => `/services/${relatedSlug}`).join(", ")}`,
    `- Content TODOs: ${quality.todos.join(" | ")}`,
    "",
  ].join("\n");
});

const changeReport = [
  "# Elluminate Hardening Change Report",
  "",
  "## Scope",
  "- Quarantined dead Large Scale service URLs rather than building pages without verified content.",
  "- Hardened service SEO plumbing, visible FAQs, related links, and content-quality overrides for every live service slug.",
  "- Removed or hid proof elements that looked unverified or placeholder-like instead of inventing replacements.",
  "",
  "## Quarantined Routes",
  ...deadSlugs.map((slug) => `- /services/${slug} -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)`),
  "",
  "## Sitemap",
  "- Removed the 19 quarantined Large Scale URLs from public/sitemap.xml.",
  "- Removed those same slugs from scripts/generate-sitemap.mjs and scripts/prerender-seo.mjs so they do not reappear.",
  "",
  "## Live Service Content Upgrade",
  ...contentSections,
  "## Human Verification Items",
  "- TODO(content): Confirm client-logo usage rights and named-company proof before expanding proof surfaces.",
  "- TODO(content): Confirm recent-event pax counts before displaying them publicly.",
  "- TODO(content): Replace initials-only testimonials with permissioned, attributable reviews where available.",
  "- TODO(seo): Confirm /portfolio as the temporary redirect target for quarantined Large Scale URLs.",
  "",
].join("\n");

writeFileSync("docs/elluminate-hardening-change-report.md", changeReport);

const proofRows = [...proofMap.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([name, entry]) => {
    const paxValues = [...entry.paxValues].sort((a, b) => Number(a) - Number(b));
    const status = paxValues.length > 1 ? "CHECK: multiple pax values" : "Needs human verification";
    return [
      escapeCell(name),
      escapeCell([...entry.sources].sort().join("; ")),
      escapeCell([...entry.logoUrls].sort().join("; ")),
      escapeCell(paxValues.join(", ")),
      status,
    ];
  });

const proofReport = [
  "# Client Proof Review Checklist",
  "",
  "Use this to verify logo rights, named-client proof, and pax-count accuracy before making proof claims stronger.",
  "",
  "| Name | Sources | Logo URLs | Pax Values Found | Review Status |",
  "| --- | --- | --- | --- | --- |",
  ...proofRows.map((row) => `| ${row.join(" | ")} |`),
  "",
  "## Required Human Actions",
  "- Confirm each listed client/logo has permission for public website use.",
  "- Resolve every row marked with multiple pax values before showing pax publicly.",
  "- Keep disabled portfolio proof sections unpublished until the client names, media, and numbers are verified.",
  "",
].join("\n");

writeFileSync("docs/client-proof-review-checklist.md", proofReport);

console.log("[hardening-report] wrote docs/elluminate-hardening-change-report.md");
console.log("[hardening-report] wrote docs/client-proof-review-checklist.md");
