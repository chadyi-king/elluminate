/**
 * Inject Cloudinary delivery transformations (width, format, quality) into a URL.
 *
 * Accepts any Cloudinary `image/upload` URL — it will normalize the existing
 * transformation segment (which often only has `f_auto,q_auto`) to also include
 * a target width and DPR cap so the browser receives an appropriately-sized
 * file rather than the original 4000px+ master.
 *
 * Non-Cloudinary URLs are returned unchanged.
 */
const CLOUDINARY_RE = /^(https?:\/\/res\.cloudinary\.com\/[^/]+\/(?:image|video)\/upload\/)(.*)$/;

// A Cloudinary "transformations" segment is the slash-separated chunk(s)
// immediately after /upload/ that contain comma-delimited param=value pairs
// (e.g. `f_auto,q_auto`) and come before the version (`v1234567`) or public id.
const TRANSFORM_SEGMENT_RE = /^[a-z]_[^/]*(,[a-z]_[^/]*)*$/i;

export interface CldOptions {
  width?: number;
  /** Max device pixel ratio to serve (default 2). */
  dpr?: number;
  /** Crop mode (default fill). */
  crop?: "fill" | "fit" | "limit" | "scale" | "thumb";
}

export function cld(url: string | undefined | null, opts: CldOptions = {}): string {
  if (!url) return url ?? "";
  const m = url.match(CLOUDINARY_RE);
  if (!m) return url;

  const [, prefix, rest] = m;
  const segments = rest.split("/");

  // Find existing transformation segment (if any) — it's the first segment
  // matching transform syntax, and it must come before the version/publicId.
  let txIndex = -1;
  for (let i = 0; i < segments.length; i++) {
    const s = segments[i];
    if (!s) continue;
    if (/^v\d+$/.test(s)) break; // hit the version, no tx segment present
    if (TRANSFORM_SEGMENT_RE.test(s)) {
      txIndex = i;
      break;
    }
  }

  const desired: string[] = ["f_auto", "q_auto"];
  if (opts.width) {
    const c = opts.crop ?? "limit";
    desired.push(`c_${c}`, `w_${opts.width}`);
  }
  desired.push(`dpr_${opts.dpr ?? 2}`);

  if (txIndex === -1) {
    // No existing transform segment — insert ours at the front.
    return `${prefix}${desired.join(",")}/${rest}`;
  }

  // Merge: keep any existing keys we didn't override, then append ours last so
  // ours win.
  const existing = segments[txIndex].split(",");
  const desiredKeys = new Set(desired.map((p) => p.split("_")[0]));
  const merged = [
    ...existing.filter((p) => !desiredKeys.has(p.split("_")[0])),
    ...desired,
  ];
  segments[txIndex] = merged.join(",");
  return `${prefix}${segments.join("/")}`;
}
