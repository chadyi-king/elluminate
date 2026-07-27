import { stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const photoWallSources = [
  "src/assets/events/awards-ceremony-1.jpg",
  "src/assets/events/brand-activation-1.jpg",
  "src/assets/events/dinner-dance-1.jpg",
  "src/assets/events/family-fun-day-1.jpg",
  "src/assets/events/immersive-experience-1.jpg",
  "src/assets/events/overseas-retreat-1.jpg",
  "src/assets/events/product-launch-1.jpg",
  "src/assets/events/team-building-outdoor-1.jpg",
  "src/assets/events/team-celebration-1.jpg",
  "src/assets/events/town-hall-1.jpg",
  "src/assets/hero/amazing-race.jpg",
  "src/assets/hero/overseas-retreat.jpg",
  "src/assets/hero/creative-workshop.jpg",
  "src/assets/hero/csi-investigation.jpg",
  "src/assets/hero/wellness-activity.jpg",
  "src/assets/hero/adventure-challenge.jpg",
  "src/assets/hero/team-celebration.jpg",
  "src/assets/hero/cultural-race.jpg",
];
const sources = [
  ...photoWallSources.map((source) => ({ source, width: 800, height: 1067 })),
  { source: "public/images/about/about-1.jpg", width: 1280, height: 720 },
  { source: "public/images/about/about-3.jpg", width: 1280, height: 720 },
];

let originalBytes = 0;
let optimizedBytes = 0;

for (const { source, width, height } of sources) {
  const input = path.join(root, source);
  const output = input.replace(/\.jpg$/i, ".webp");

  await sharp(input)
    .rotate()
    .resize({ width, height, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 72, effort: 5, smartSubsample: true })
    .toFile(output);

  originalBytes += (await stat(input)).size;
  optimizedBytes += (await stat(output)).size;
}

const savedPercent = Math.round((1 - optimizedBytes / originalBytes) * 100);
console.log(
  `[home-images] ${sources.length} files optimized: ${Math.round(originalBytes / 1024)} KB to ${Math.round(
    optimizedBytes / 1024,
  )} KB, ${savedPercent}% smaller`,
);
