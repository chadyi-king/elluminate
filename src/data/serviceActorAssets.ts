import aliceActor1 from "@/assets/service-characters/batch-01/alice-in-motherland-actor-1.webp";
import aliceActor2 from "@/assets/service-characters/batch-01/alice-in-motherland-actor-2.webp";
import aliceActor3 from "@/assets/service-characters/batch-01/alice-in-motherland-actor-3.webp";
import amazingActor1 from "@/assets/service-characters/batch-01/amazing-race-actor-1.webp";
import amazingActor2 from "@/assets/service-characters/batch-01/amazing-race-actor-2.webp";
import amazingActor3 from "@/assets/service-characters/batch-01/amazing-race-actor-3.webp";
import amongstActor1 from "@/assets/service-characters/batch-01/amongst-us-actor-1.webp";
import amongstActor2 from "@/assets/service-characters/batch-01/amongst-us-actor-2.webp";
import amongstActor3 from "@/assets/service-characters/batch-01/amongst-us-actor-3.webp";
import battleActor1 from "@/assets/service-characters/batch-01/battle-of-the-olympians-actor-1.webp";
import battleActor2 from "@/assets/service-characters/batch-01/battle-of-the-olympians-actor-2.webp";
import battleActor3 from "@/assets/service-characters/batch-01/battle-of-the-olympians-actor-3.webp";
import builderActor1 from "@/assets/service-characters/batch-01/builder-cross-actor-1.webp";
import builderActor2 from "@/assets/service-characters/batch-01/builder-cross-actor-2.webp";
import builderActor3 from "@/assets/service-characters/batch-01/builder-cross-actor-3.webp";
import csiActor1 from "@/assets/service-characters/batch-01/csi-bones-actor-1.webp";
import csiActor2 from "@/assets/service-characters/batch-01/csi-bones-actor-2.webp";
import csiActor3 from "@/assets/service-characters/batch-01/csi-bones-actor-3.webp";
import culturalActor1 from "@/assets/service-characters/batch-01/cultural-race-actor-1.webp";
import culturalActor2 from "@/assets/service-characters/batch-01/cultural-race-actor-2.webp";
import culturalActor3 from "@/assets/service-characters/batch-01/cultural-race-actor-3.webp";
import minuteActor1 from "@/assets/service-characters/batch-01/minute-to-win-it-actor-1.webp";
import minuteActor2 from "@/assets/service-characters/batch-01/minute-to-win-it-actor-2.webp";
import minuteActor3 from "@/assets/service-characters/batch-01/minute-to-win-it-actor-3.webp";
import monopolyActor1 from "@/assets/service-characters/batch-01/monopoly-dash-actor-1.webp";
import monopolyActor2 from "@/assets/service-characters/batch-01/monopoly-dash-actor-2.webp";
import monopolyActor3 from "@/assets/service-characters/batch-01/monopoly-dash-actor-3.webp";
import runningActor1 from "@/assets/service-characters/batch-01/running-man-actor-1.webp";
import runningActor2 from "@/assets/service-characters/batch-01/running-man-actor-2.webp";
import runningActor3 from "@/assets/service-characters/batch-01/running-man-actor-3.webp";
import type { ActivityPageBatchOneSlug } from "@/data/siteScope";

export interface ServiceActorSet {
  journeyActorLeft: string;
  journeyActorRight: string;
  plannerActor: string;
}

export const serviceActorAssets: Record<ActivityPageBatchOneSlug, ServiceActorSet> = {
  "amazing-race": { journeyActorLeft: amazingActor1, journeyActorRight: amazingActor2, plannerActor: amazingActor3 },
  "csi-bones": { journeyActorLeft: csiActor1, journeyActorRight: csiActor2, plannerActor: csiActor3 },
  "cultural-race": { journeyActorLeft: culturalActor1, journeyActorRight: culturalActor2, plannerActor: culturalActor3 },
  "amongst-us": { journeyActorLeft: amongstActor1, journeyActorRight: amongstActor2, plannerActor: amongstActor3 },
  "alice-in-motherland": { journeyActorLeft: aliceActor1, journeyActorRight: aliceActor2, plannerActor: aliceActor3 },
  "battle-of-the-olympians": { journeyActorLeft: battleActor1, journeyActorRight: battleActor2, plannerActor: battleActor3 },
  "builder-cross": { journeyActorLeft: builderActor1, journeyActorRight: builderActor2, plannerActor: builderActor3 },
  "minute-to-win-it": { journeyActorLeft: minuteActor1, journeyActorRight: minuteActor2, plannerActor: minuteActor3 },
  "monopoly-dash": { journeyActorLeft: monopolyActor1, journeyActorRight: monopolyActor2, plannerActor: monopolyActor3 },
  "running-man": { journeyActorLeft: runningActor1, journeyActorRight: runningActor2, plannerActor: runningActor3 },
};
