export function generateColor(seed: string) {
  if (!seed) {
    return "#f97373";
  }

  // Build a simple bounded hash from the string
  let hash = 0;
  for (const char of seed) {
    hash = (hash * 31 + char.charCodeAt(0)) % 0xffffff; // keep it in [0, 0xffffff]
  }

  // Turn that hash into RGB components using plain math
  const r = Math.floor(hash / (256 * 256)); // top 8 bits
  const g = Math.floor((hash / 256) % 256); // middle 8 bits
  const b = hash % 256; // lowest 8 bits

  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
