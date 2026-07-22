import { servicePageBlueprints, type ServiceFamily } from "@/data/servicePageBlueprints";
import { serviceExperienceSlugs, type ServiceExperienceSlug } from "@/data/serviceExperienceContent";
import adventurePair from "@/assets/service-characters/adventure-pair.webp";
import creativePair from "@/assets/service-characters/creative-pair.webp";
import detectivePair from "@/assets/service-characters/detective-pair.webp";

export type ServiceAssetOrigin = "real-event" | "provided-editorial" | "generated-campaign";
export type ServiceAssetType = "hero" | "journey" | "gallery" | "journey-actor" | "planner-actor" | "themed-prop";

export interface ServiceAssetCatalogEntry {
  id: string;
  route: ServiceExperienceSlug;
  family: ServiceFamily;
  assetType: ServiceAssetType;
  origin: ServiceAssetOrigin;
  src: string;
  crop: "landscape" | "portrait" | "square";
  focalPoint: "center" | "top" | "left" | "right";
  altText: string;
  source: string;
  evidenceScope: "route" | "family" | "campaign";
}

const toId = (route: string, type: string, index: number) => `${route}:${type}:${index + 1}`;

const actorPairByFamily: Record<ServiceFamily, string> = {
  physical: adventurePair,
  equipment: adventurePair,
  virtual: creativePair,
  retreat: creativePair,
  training: detectivePair,
};

export const serviceAssetCatalog: readonly ServiceAssetCatalogEntry[] = serviceExperienceSlugs.flatMap((route) => {
  const blueprint = servicePageBlueprints[route];
  if (!blueprint) return [];

  const hero: ServiceAssetCatalogEntry = {
    id: toId(route, "hero", 0),
    route,
    family: blueprint.family,
    assetType: "hero",
    origin: "provided-editorial",
    src: blueprint.assets.hero,
    crop: "landscape",
    focalPoint: "center",
    altText: `${blueprint.card.shortTitle} campaign hero`,
    source: "Existing route hero media",
    evidenceScope: "campaign",
  };

  const gallery = blueprint.gallery.map<ServiceAssetCatalogEntry>((asset, index) => ({
    id: toId(route, "gallery", index),
    route,
    family: blueprint.family,
    assetType: "gallery",
    origin: asset.classification === "real-event" ? "real-event" : "provided-editorial",
    src: asset.src,
    crop: "landscape",
    focalPoint: "center",
    altText: asset.alt,
    source: asset.classification === "real-event"
      ? asset.scope === "family"
        ? "Verified Elluminate family-level event gallery"
        : "Verified route-specific event gallery"
      : "Existing route campaign media",
    evidenceScope: asset.classification === "real-event" ? asset.scope : "campaign",
  }));

  const journey = blueprint.journeyMedia.map<ServiceAssetCatalogEntry>((asset, index) => ({
    id: toId(route, "journey", index),
    route,
    family: blueprint.family,
    assetType: "journey",
    origin: asset.kind === "real-event" ? "real-event" : asset.src ? "provided-editorial" : "generated-campaign",
    src: asset.src ?? `component:JourneyEditorial/${route}/${index + 1}`,
    crop: "landscape",
    focalPoint: "center",
    altText: asset.alt,
    source: asset.kind === "real-event"
      ? asset.scope === "family"
        ? "Verified Elluminate family-level event gallery"
        : "Verified route-specific event gallery"
      : asset.src
        ? "Existing campaign/editorial media"
        : "CSS-generated route-themed editorial scene",
    evidenceScope: asset.kind === "real-event" ? asset.scope : "campaign",
  }));

  const journeyActorSources = blueprint.assets.journeyActorLeft && blueprint.assets.journeyActorRight
    ? [blueprint.assets.journeyActorLeft, blueprint.assets.journeyActorRight]
    : [actorPairByFamily[blueprint.family]];

  const journeyActors = journeyActorSources.map<ServiceAssetCatalogEntry>((src, index) => ({
    id: toId(route, "journey-actor", index),
    route,
    family: blueprint.family,
    assetType: "journey-actor",
    origin: "generated-campaign",
    src,
    crop: blueprint.assets.journeyActorLeft ? "portrait" : "landscape",
    focalPoint: "center",
    altText: "",
    source: "Route-specific Elluminate campaign actor; decorative and never presented as event evidence",
    evidenceScope: "campaign",
  }));

  const plannerActor: ServiceAssetCatalogEntry = {
    id: toId(route, "planner-actor", 0),
    route,
    family: blueprint.family,
    assetType: "planner-actor",
    origin: "generated-campaign",
    src: blueprint.assets.plannerActor ?? actorPairByFamily[blueprint.family],
    crop: "portrait",
    focalPoint: "left",
    altText: "",
    source: "Campaign actor crop used only in the planning brief",
    evidenceScope: "campaign",
  };

  const themedProp: ServiceAssetCatalogEntry = {
    id: toId(route, "themed-prop", 0),
    route,
    family: blueprint.family,
    assetType: "themed-prop",
    origin: "generated-campaign",
    src: `component:ServiceProp/${route}`,
    crop: "square",
    focalPoint: "center",
    altText: `${blueprint.card.shortTitle} campaign emblem`,
    source: "Route-specific transparent SVG or uploaded campaign emblem rendered by ServiceHeroSplit",
    evidenceScope: "campaign",
  };

  return [hero, ...journeyActors, plannerActor, themedProp, ...journey, ...gallery];
});
