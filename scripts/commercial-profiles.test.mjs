import assert from "node:assert/strict";
import test from "node:test";
import {
  serviceCommercialProfiles,
  serviceCommercialSlugs,
  standardActivityInclusions,
  standardOptionalExtras,
} from "../src/data/serviceCommercialProfiles.js";

const expectedPrices = {
  "amazing-race": 45,
  "alice-in-motherland": 48,
  "battle-of-the-olympians": 48,
  "running-man": 48,
  "cultural-race": 48,
  "sotong-game": 50,
  "amongst-us": 50,
  "csi-bones": 55,
  "monopoly-dash": 55,
  "treasure-heist": 55,
  "archery-tag": 50,
  "gel-blitz": 50,
  "nerfwar": 50,
  "tag-tical-laser-teambuilding": 50,
  "amazing-race-virtual": 25,
  "fit-in-your-team-virtual": 25,
  "the-gameshow-experience-virtual": 25,
  "the-great-zodiac-hunt-virtual": 25,
  "the-nuclear-fallout-escape-room-virtual": 25,
  "the-patriot-act-virtual": 25,
  "tomb-raider-king-treasure-hunt-virtual": 25,
  "grand-christmas-delivery": 25,
  mbti: 150,
  disc: 150,
  ocean: 150,
  "mass-talks": 500,
  workshops: 150,
  "youth-camps": 80,
  "corporate-days": 100,
  "wellness-events": 75,
  "overseas-retreats": 400,
  "local-retreats": 550,
  "incentive-travel": 800,
};

test("all 36 live child routes have one commercial profile", () => {
  assert.equal(serviceCommercialSlugs.length, 36);
  assert.equal(new Set(serviceCommercialSlugs).size, 36);
});

test("approved public prices and custom quote rules are exact", () => {
  for (const [slug, amount] of Object.entries(expectedPrices)) {
    assert.equal(serviceCommercialProfiles[slug].publicPrice?.amount, amount, slug);
  }
  assert.equal(serviceCommercialProfiles["leadership-offsites"].publicPrice, null);
  assert.equal(serviceCommercialProfiles["mass-talks"].publicPrice.unit, "session");
  assert.equal(serviceCommercialProfiles["youth-camps"].publicPrice.unit, "student");
});

test("minimum group, planning facts and package rules stay aligned", () => {
  for (const profile of Object.values(serviceCommercialProfiles)) {
    assert.equal(profile.minimumGroup, 10, profile.slug);
    assert.equal(profile.familyFacts.length, 3, profile.slug);
    assert.equal(profile.packageRules.enhanced, "Custom quote", profile.slug);
    assert.equal(profile.packageRules.premium, "Custom quote", profile.slug);
  }
});

test("standard inclusions and optional extras match the approved boundary", () => {
  assert.deepEqual(standardActivityInclusions, [
    "Activity concept",
    "Playing materials and equipment",
    "Facilitators",
    "Basic setup",
    "Scoring",
    "Free public venue or route",
  ]);
  assert.deepEqual(standardOptionalExtras, [
    "Paid venue",
    "Catering",
    "Transport",
    "Photography",
    "Prizes",
    "Branding",
    "Printed reports",
    "Substantial customisation",
  ]);
  assert.equal(/\bgst\b/i.test(JSON.stringify(serviceCommercialProfiles)), false);
});
