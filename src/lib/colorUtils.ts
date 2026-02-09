/**
 * Detect light accent colors and return a darker version for text readability on light backgrounds.
 */
export const getReadableTextColor = (color: string): string => {
  // Parse hex color
  const hex = color.replace('#', '');
  if (hex.length !== 6) return color;

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // If color is too light (yellow, orange, amber), darken it
  if (luminance > 0.6) {
    const factor = 0.55; // Darken by 45%
    const dr = Math.round(r * factor);
    const dg = Math.round(g * factor);
    const db = Math.round(b * factor);
    return `#${dr.toString(16).padStart(2, '0')}${dg.toString(16).padStart(2, '0')}${db.toString(16).padStart(2, '0')}`;
  }
  return color;
};
