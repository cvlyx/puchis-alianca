import sharp from "sharp";
import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "..", "artifacts", "puchis-website", "public", "images");

const files = readdirSync(imagesDir).filter(f => f.endsWith(".png"));

for (const file of files) {
  const input = join(imagesDir, file);
  const output = join(imagesDir, file.replace(".png", ".webp"));
  await sharp(input)
    .webp({ quality: 80 })
    .toFile(output);
  const { size: oldSize } = await import("fs").then(m => m.statSync(input));
  const { size: newSize } = await import("fs").then(m => m.statSync(output));
  console.log(`${file}: ${(oldSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB WebP`);
}

console.log("Done!");
