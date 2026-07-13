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

test("about proof shows owner-approved history with its original attribution", () => {
  assert.match(aboutPage, /1,000\+/);
  assert.match(aboutPage, /100,000\+/);
  assert.match(aboutPage, /776\+ Team Elevate Google reviews/);
  assert.match(aboutPage, /8\+[^\n]*years of operating history/);
  assert.match(aboutPage, /Elluminate and Team Elevate are operated by EXSTATIC PTE LTD/);
  assert.match(aboutPage, /figures remain attributed to Team Elevate/);
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

test("portfolio publishes real event media without stock or placeholder sources", () => {
  assert.match(portfolioPage, /EventShowcase/);
  assert.match(portfolioPage, /VideoHighlights/);
  assert.match(portfolioPage, /Team Elevate/);
  assert.doesNotMatch(portfolioPage, /images\.unsplash\.com|dQw4w9WgXcQ/);
});

test("client logo surfaces disclose the shared operating history", () => {
  assert.match(aboutPage, /Elluminate and Team Elevate are operated by EXSTATIC PTE LTD/);
  assert.match(socialProofSection, /Elluminate and Team Elevate are operated by EXSTATIC PTE LTD/);
  assert.match(socialProofSection, /as at July 2026/);
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
