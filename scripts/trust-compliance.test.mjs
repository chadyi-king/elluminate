import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const aboutPage = read("src/pages/AboutPage.tsx");
const ourTeam = read("src/components/OurTeam.tsx");
const portfolioPage = read("src/pages/PortfolioPage.tsx");
const socialProofSection = read("src/components/SocialProofSection.tsx");
const footer = read("src/components/Footer.tsx");
const hardeningReport = read("docs/elluminate-hardening-change-report.md");
const clientProofChecklist = read("docs/client-proof-review-checklist.md");
const servicesData = read("src/data/servicesData.ts");
const featuredCaseStudies = read("src/components/portfolio/FeaturedCaseStudies.tsx");
const serviceRecentEventsTicker = read("src/components/service-page/ServiceRecentEventsTicker.tsx");

test("team section does not show joke or placeholder titles", () => {
  assert.doesNotMatch(ourTeam, /Basement Worker|Spiritual Advisor/);
  assert.match(ourTeam, /TODO\(content\): Confirm public roles for Caleb E and Christian Je Suis/);
});

test("about counters fall back to final values and use the verified review count", () => {
  assert.match(aboutPage, /useState\(end\)/);
  assert.match(aboutPage, /useCountUp\(1000,\s*2500\)/);
  assert.match(aboutPage, /useCountUp\(100000,\s*3000\)/);
  assert.match(aboutPage, /useCountUp\(800,\s*2000\)/);
  assert.match(aboutPage, /useCountUp\(8,\s*1500\)/);
});

test("marketing copy does not ship unsourced percentage claims", () => {
  for (const [path, source] of [
    ["src/data/servicesData.ts", servicesData],
    ["src/components/portfolio/FeaturedCaseStudies.tsx", featuredCaseStudies],
  ]) {
    assert.doesNotMatch(
      source,
      /(?:title|description|outcome):\s*"[^"]*\b\d+(?:\.\d+)?%/,
      `${path} contains a hard percentage claim in marketing copy`,
    );
  }

  assert.doesNotMatch(servicesData, /Teams report 40% better collaboration after our events/);
  assert.doesNotMatch(featuredCaseStudies, /Team collaboration scores increased by 40%/);
});

test("service recent-events ticker does not show unverified pax counts publicly", () => {
  assert.doesNotMatch(serviceRecentEventsTicker, /\{event\.pax\}\s*pax/);
  assert.match(serviceRecentEventsTicker, /TODO\(content\): Verify recent-event pax counts before displaying them publicly/);
});

test("portfolio page does not publish unverified placeholder proof sections", () => {
  assert.match(portfolioPage, /TODO\(content\): Restore portfolio case studies, gallery, videos, testimonials, and client proof/);
  assert.doesNotMatch(portfolioPage, /FeaturedCaseStudies|MiniCaseStudies|TestimonialWall|ClientLogosGrid|VideoHighlights|PhotoGallery|PortfolioFilters/);
});

test("client logo surfaces carry an evidence and permission reminder", () => {
  const permissionReminder = /TODO\(content\): Keep a permission\/evidence checklist for client logo usage/;
  assert.match(aboutPage, permissionReminder);
  assert.match(socialProofSection, permissionReminder);
});

test("footer keeps review source transparency visible", () => {
  assert.match(footer, /Reviews shown on this site are collected via our partner brand, Team Elevate/);
});

test("human-review reports are generated for proof and content follow-up", () => {
  assert.match(hardeningReport, /# Elluminate Hardening Change Report/);
  assert.match(hardeningReport, /## Live Service Content Upgrade/);
  assert.match(hardeningReport, /TODO\(content\): Confirm client-logo usage rights/);
  assert.doesNotMatch(hardeningReport, /Confirm SEO title|Confirm SEO description/);
  assert.match(clientProofChecklist, /# Client Proof Review Checklist/);
  assert.match(clientProofChecklist, /Pax Values Found/);
  assert.match(clientProofChecklist, /Needs human verification|CHECK: multiple pax values/);
});
