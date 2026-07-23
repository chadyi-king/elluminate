import { readFileSync, renameSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const faviconPath = resolve("public/favicon.png");
const faviconTempPath = resolve("public/favicon.optimized.png");
const appleTouchPath = resolve("public/apple-touch-icon.png");
const icoPath = resolve("public/favicon.ico");

const source = readFileSync(faviconPath);

await sharp(source)
  .resize(512, 512, { fit: "contain" })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(faviconTempPath);

await sharp(source)
  .resize(180, 180, { fit: "contain" })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(appleTouchPath);

const icoPng = await sharp(source)
  .resize(32, 32, { fit: "contain" })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toBuffer();

const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(32, 6);
icoHeader.writeUInt8(32, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(icoPng.length, 14);
icoHeader.writeUInt32LE(22, 18);

writeFileSync(icoPath, Buffer.concat([icoHeader, icoPng]));
renameSync(faviconTempPath, faviconPath);

console.log("[icons] wrote optimized favicon, ICO fallback, and Apple touch icon");
