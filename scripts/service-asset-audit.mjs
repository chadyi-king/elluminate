import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createServer } from "vite";

const root = process.cwd();
const verbose = process.env.ASSET_AUDIT_VERBOSE === "1";
const vite = await createServer({
  root,
  appType: "custom",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
  logLevel: "error",
});

const failures = [];
const warnings = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

const resolveAssetPath = (src) => {
  if (src.startsWith("component:") || src.startsWith("data:")) return null;
  if (src.startsWith("/@fs/")) return decodeURIComponent(src.slice(4));
  if (src.startsWith("/images/")) return path.join(root, "public", src.slice(1));
  if (src.startsWith("/src/")) return path.join(root, src.slice(1));
  if (src.startsWith("/")) return path.join(root, "public", src.slice(1));
  if (path.isAbsolute(src)) return src;
  return null;
};

const readImageMetadata = (contents, src) => {
  if (contents.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    const colorType = contents[25];
    return {
      format: "png",
      width: contents.readUInt32BE(16),
      height: contents.readUInt32BE(20),
      hasAlpha: colorType === 4 || colorType === 6,
    };
  }

  if (contents.subarray(0, 3).equals(Buffer.from([255, 216, 255]))) {
    const startOfFrameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
    let offset = 2;
    while (offset + 9 < contents.length) {
      if (contents[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      while (contents[offset] === 0xff) offset += 1;
      const marker = contents[offset];
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 1;
        continue;
      }
      if (startOfFrameMarkers.has(marker)) {
        return { format: "jpeg", width: contents.readUInt16BE(offset + 6), height: contents.readUInt16BE(offset + 4), hasAlpha: false };
      }
      if (offset + 2 >= contents.length) break;
      const segmentLength = contents.readUInt16BE(offset + 1);
      if (segmentLength < 2) break;
      offset += 1 + segmentLength;
    }
  }

  if (contents.toString("ascii", 0, 4) === "RIFF" && contents.toString("ascii", 8, 12) === "WEBP") {
    const chunk = contents.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return {
        format: "webp",
        width: 1 + contents.readUIntLE(24, 3),
        height: 1 + contents.readUIntLE(27, 3),
        hasAlpha: Boolean(contents[20] & 0x10),
      };
    }
    if (chunk === "VP8L") {
      const b1 = contents[21];
      const b2 = contents[22];
      const b3 = contents[23];
      const b4 = contents[24];
      return {
        format: "webp",
        width: 1 + (((b2 & 0x3f) << 8) | b1),
        height: 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6)),
        hasAlpha: Boolean(b4 & 0x10),
      };
    }
    const frameHeader = contents.indexOf(Buffer.from([0x9d, 0x01, 0x2a]), 20);
    if (chunk === "VP8 " && frameHeader >= 0 && frameHeader + 7 <= contents.length) {
      return {
        format: "webp",
        width: contents.readUInt16LE(frameHeader + 3) & 0x3fff,
        height: contents.readUInt16LE(frameHeader + 5) & 0x3fff,
        hasAlpha: false,
      };
    }
  }

  const ispe = contents.indexOf(Buffer.from("ispe"));
  if (ispe >= 0 && ispe + 16 <= contents.length) {
    return { format: "avif", width: contents.readUInt32BE(ispe + 8), height: contents.readUInt32BE(ispe + 12), hasAlpha: null };
  }

  throw new Error(`unsupported image format for ${src}`);
};

try {
  const blueprintModule = await vite.ssrLoadModule("/src/data/servicePageBlueprints.ts");
  const experienceModule = await vite.ssrLoadModule("/src/data/serviceExperienceContent.ts");
  const assetModule = await vite.ssrLoadModule("/src/data/serviceAssetCatalog.ts");
  const blueprints = blueprintModule.servicePageBlueprints;
  const slugs = experienceModule.serviceExperienceSlugs;
  const catalog = assetModule.serviceAssetCatalog;
  const heroSource = await fs.readFile(path.join(root, "src/components/service-page/ServiceHeroSplit.tsx"), "utf8");
  const explicitPropSlugs = new Set([...heroSource.matchAll(/case\s+"([^"]+)":/g)].map((match) => match[1]));
  const genericPropRoutes = slugs.filter((slug) => !explicitPropSlugs.has(slug));

  expect(slugs.length === 36, `Expected 36 routes; received ${slugs.length}.`);
  expect(new Set(catalog.map((asset) => asset.id)).size === catalog.length, "Asset catalogue IDs are not unique.");
  if (genericPropRoutes.length > 0) {
    warnings.push(`Generic ServiceProp fallback remains on ${genericPropRoutes.length} routes: ${genericPropRoutes.join(", ")}`);
  }
  const routesUsingFamilyEvidenceFallbacks = [];

  for (const slug of slugs) {
    const blueprint = blueprints[slug];
    const routeAssets = catalog.filter((asset) => asset.route === slug);
    const count = (assetType) => routeAssets.filter((asset) => asset.assetType === assetType).length;

    expect(Boolean(blueprint), `${slug}: missing blueprint.`);
    expect(count("hero") === 1, `${slug}: expected one hero asset; received ${count("hero")}.`);
    expect(count("actor-pair") === 1, `${slug}: expected one actor pair; received ${count("actor-pair")}.`);
    expect(count("planner-actor") === 1, `${slug}: expected one planner actor; received ${count("planner-actor")}.`);
    expect(count("themed-prop") === 1, `${slug}: expected one themed prop; received ${count("themed-prop")}.`);
    expect(count("journey") === 6, `${slug}: expected six journey assets; received ${count("journey")}.`);
    expect(
      count("gallery") >= 8 && count("gallery") <= 12,
      `${slug}: expected 8-12 gallery assets; received ${count("gallery")}.`,
    );

    if (!blueprint) continue;
    const routeAssetPrefix = `/images/services/${slug}/`;
    const routeSpecificRealEvents = blueprint.gallery.filter(
      (asset) => asset.classification === "real-event" && asset.src.startsWith(routeAssetPrefix),
    );
    if (routeSpecificRealEvents.length < 3) routesUsingFamilyEvidenceFallbacks.push(slug);
    const journeySources = blueprint.journeyMedia.map((asset) => asset.src).filter(Boolean);
    const gallerySources = blueprint.gallery.map((asset) => asset.src);
    expect(new Set(journeySources).size === journeySources.length, `${slug}: journey reuses a source within its six stages.`);
    expect(new Set(gallerySources).size === gallerySources.length, `${slug}: gallery contains repeated source paths.`);
  }
  if (routesUsingFamilyEvidenceFallbacks.length > 0) {
    warnings.push(
      `${routesUsingFamilyEvidenceFallbacks.length} ${routesUsingFamilyEvidenceFallbacks.length === 1 ? "route relies" : "routes rely"} on cross-route family photography to reach three real-event images: ${routesUsingFamilyEvidenceFallbacks.join(", ")}.`,
    );
  }

  for (const asset of catalog) {
    expect(Boolean(asset.route && asset.family && asset.assetType && asset.origin), `${asset.id}: asset identity fields are incomplete.`);
    expect(Boolean(asset.src && asset.crop && asset.focalPoint && asset.source && asset.evidenceScope), `${asset.id}: asset presentation metadata is incomplete.`);
    expect(
      Boolean(asset.altText) || asset.assetType === "actor-pair" || asset.assetType === "planner-actor",
      `${asset.id}: non-decorative asset is missing alt text.`,
    );
  }

  const fileRecords = [];
  const uniqueSources = new Map();
  for (const asset of catalog) {
    const filePath = resolveAssetPath(asset.src);
    if (!filePath || uniqueSources.has(filePath)) continue;
    uniqueSources.set(filePath, asset.src);

    try {
      const [stat, contents] = await Promise.all([fs.stat(filePath), fs.readFile(filePath)]);
      const metadata = readImageMetadata(contents, asset.src);
      const hash = crypto.createHash("sha256").update(contents).digest("hex");
      expect(Boolean(metadata.width && metadata.height), `${asset.src}: image dimensions could not be read.`);
      fileRecords.push({
        src: asset.src,
        filePath,
        bytes: stat.size,
        width: metadata.width ?? 0,
        height: metadata.height ?? 0,
        format: metadata.format ?? "unknown",
        hasAlpha: metadata.hasAlpha ?? null,
        hash,
      });
    } catch (error) {
      failures.push(`${asset.route}: unavailable or unreadable asset ${asset.src} (${error.message}).`);
    }
  }

  const recordsByHash = new Map();
  const recordBySource = new Map(fileRecords.map((record) => [record.src, record]));
  for (const record of fileRecords) {
    const records = recordsByHash.get(record.hash) ?? [];
    records.push(record);
    recordsByHash.set(record.hash, records);
  }

  const exactDuplicateGroups = [...recordsByHash.values()]
    .map((records) => [...new Map(records.map((record) => [record.filePath, record])).values()])
    .filter((records) => records.length > 1);
  if (exactDuplicateGroups.length > 0) {
    warnings.push(
      `${exactDuplicateGroups.length} exact duplicate binary groups exist across catalogued paths; run ASSET_AUDIT_VERBOSE=1 for path-level detail.`,
    );
  }
  if (verbose) {
    for (const records of exactDuplicateGroups) {
      warnings.push(`Exact duplicate binaries: ${records.map((record) => record.src).join(", ")}`);
    }
  }

  const duplicateHashes = (sources) => {
    const grouped = new Map();
    // Reusing one canonical source in different page sections is intentional.
    // This check targets distinct file paths that silently contain one binary.
    for (const src of new Set(sources)) {
      const record = recordBySource.get(src);
      if (!record) continue;
      const matches = grouped.get(record.hash) ?? [];
      matches.push(src);
      grouped.set(record.hash, matches);
    }
    return [...grouped.values()].filter((matches) => matches.length > 1);
  };
  const routeVisualDuplicateWarnings = [];
  for (const slug of slugs) {
    const blueprint = blueprints[slug];
    if (!blueprint) continue;
    const pageVisualSources = [
      blueprint.assets.hero,
      ...blueprint.journeyMedia.map((asset) => asset.src).filter(Boolean),
      ...blueprint.gallery.map((asset) => asset.src),
    ];
    for (const matches of duplicateHashes(pageVisualSources)) {
      routeVisualDuplicateWarnings.push(`${slug}: ${matches.join(", ")}`);
    }
  }
  const routesWithVisualDuplicates = [...new Set(routeVisualDuplicateWarnings.map((warning) => warning.split(":")[0]))];
  if (routesWithVisualDuplicates.length > 0) {
    warnings.push(
      `Repeated binary content remains across hero, journey or gallery media on ${routesWithVisualDuplicates.length} routes: ${routesWithVisualDuplicates.join(", ")}.`,
    );
  }
  if (verbose) {
    for (const warning of routeVisualDuplicateWarnings) warnings.push(`Repeated visual within route: ${warning}`);
  }

  const largeFiles = fileRecords.filter((record) => record.bytes > 1_000_000).sort((a, b) => b.bytes - a.bytes);
  for (const record of largeFiles) {
    warnings.push(
      `Large image (${(record.bytes / 1_000_000).toFixed(2)} MB, ${record.width}x${record.height}): ${record.src}`,
    );
  }

  const lowResolution = fileRecords
    .filter((record) => record.width < 800 || record.height < 450)
    .sort((a, b) => a.width * a.height - b.width * b.height);
  for (const record of lowResolution) {
    warnings.push(`Low-resolution image (${record.width}x${record.height}): ${record.src}`);
  }

  const formatCounts = new Map();
  for (const record of fileRecords) {
    formatCounts.set(record.format, (formatCounts.get(record.format) ?? 0) + 1);
  }
  const formatSummary = [...formatCounts.entries()]
    .map(([format, count]) => `${format}: ${count}`)
    .sort()
    .join(", ");
  const largest = [...fileRecords].sort((a, b) => b.bytes - a.bytes).slice(0, 10);
  const actorSources = new Set(
    catalog
      .filter((asset) => asset.assetType === "actor-pair" || asset.assetType === "planner-actor")
      .map((asset) => asset.src),
  );
  const actorRecords = fileRecords.filter((record) => actorSources.has(record.src));
  for (const record of actorRecords) {
    expect(record.format === "webp", `${record.src}: campaign actor is not WebP.`);
    expect(record.hasAlpha === true, `${record.src}: campaign actor WebP does not declare an alpha channel.`);
  }

  console.log(`Asset catalogue: ${catalog.length} entries across ${slugs.length} routes.`);
  console.log(`Resolved binaries: ${fileRecords.length}; component-rendered assets: ${catalog.filter((asset) => asset.src.startsWith("component:")).length}.`);
  console.log(`Explicit route-themed props: ${slugs.length - genericPropRoutes.length}/${slugs.length}.`);
  console.log(`Routes with at least three route-specific real-event gallery files: ${slugs.length - routesUsingFamilyEvidenceFallbacks.length}/${slugs.length}.`);
  console.log(`Formats: ${formatSummary || "none"}.`);
  console.log(`Campaign actor files: ${actorRecords.length}; alpha WebP: ${actorRecords.filter((record) => record.format === "webp" && record.hasAlpha).length}.`);
  console.log(`Exact duplicate binary groups: ${exactDuplicateGroups.length}.`);
  console.log(`Routes with repeated binary content across hero, journey or gallery: ${routesWithVisualDuplicates.length}.`);
  console.log(`Images over 1 MB: ${largeFiles.length}.`);
  console.log(`Images below 800px wide or 450px high: ${lowResolution.length}.`);
  if (largest.length > 0) {
    console.log("Largest referenced images:");
    for (const record of largest) {
      console.log(`- ${(record.bytes / 1_000_000).toFixed(2)} MB | ${record.width}x${record.height} | ${record.src}`);
    }
  }
} finally {
  await vite.close();
}

if (warnings.length > 0) {
  console.warn(`Asset audit warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (failures.length > 0) {
  console.error(`Asset audit failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Service asset audit passed: route coverage, existence, readability and metadata are valid; duplicate-content warnings remain advisory.");
}
