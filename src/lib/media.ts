interface CloudinaryImageOptions {
  width?: number;
  quality?: "auto" | number;
}

export function cloudinaryImage(url: string, options: CloudinaryImageOptions = {}) {
  if (!url.includes("res.cloudinary.com") || !url.includes("/image/upload/")) {
    return url;
  }

  const transforms = [
    "f_auto",
    `q_${options.quality ?? "auto"}`,
    options.width ? `w_${options.width}` : "",
    options.width ? "c_limit" : "",
  ].filter(Boolean);

  return withCloudinaryTransforms(url, "/image/upload/", transforms);
}

export function cloudinaryVideoPoster(url: string, width = 1200) {
  if (!url.includes("res.cloudinary.com") || !url.includes("/video/upload/")) {
    return url;
  }

  return withCloudinaryTransforms(url, "/video/upload/", ["so_1", "f_jpg", "q_auto", `w_${width}`, "c_limit"]);
}

function withCloudinaryTransforms(url: string, marker: string, transforms: string[]) {
  const [prefix, rest] = url.split(marker);
  if (!rest) {
    return url;
  }

  const parts = rest.split("/");
  const firstAssetPart = parts[0]?.startsWith("v") ? 0 : 1;
  const assetPath = parts.slice(firstAssetPart).join("/");

  return `${prefix}${marker}${transforms.join(",")}/${assetPath}`;
}
