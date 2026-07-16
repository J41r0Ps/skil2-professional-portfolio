/**
 * Asset optimization utility — run with `npm run optimize:images`.
 *
 * Keeps the deployed bundle small:
 * - 3D laptop GLTF textures are resized/re-encoded IN PLACE (same filename and
 *   format, because scene.gltf references them by name).
 * - Photos and project screenshots are converted to WebP at the largest size
 *   they are actually rendered at.
 *
 * Safe to re-run: `withoutEnlargement` means already-optimized files stay as-is.
 */
import sharp from "sharp";
import { rename, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const kb = async (p) => ((await stat(p)).size / 1024).toFixed(0) + " KB";

/** Resize/re-encode a file in place, keeping its name and format. */
async function inPlace(rel, { width, quality }) {
  const file = path.join(root, rel);
  if (!existsSync(file)) return console.log(rel, "— skipped (not found)");
  const before = await kb(file);
  const tmp = file + ".tmp";
  let img = sharp(file).resize({ width, withoutEnlargement: true });
  if (/\.jpe?g$/i.test(file)) img = img.jpeg({ quality, mozjpeg: true });
  else img = img.png({ compressionLevel: 9 });
  await img.toFile(tmp);
  await rename(tmp, file);
  console.log(rel, before, "->", await kb(file));
}

/** Write a resized WebP copy next to the original. */
async function toWebp(rel, { width, quality = 80 }) {
  const file = path.join(root, rel);
  if (!existsSync(file)) return console.log(rel, "— skipped (not found)");
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const before = await kb(file);
  await sharp(file)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(out);
  console.log(rel, before, "-> webp", await kb(out));
}

// laptop GLTF textures
await inPlace("public/laptop/textures/msi_laptop_mat_baseColor.jpeg", { width: 2048, quality: 78 });
await inPlace("public/laptop/textures/msi_laptop_mat_emissive.jpeg", { width: 1024, quality: 78 });
await inPlace("public/laptop/textures/msi_laptop_mat_metallicRoughness.png", { width: 1024 });
await inPlace("public/laptop/textures/msi_laptop_mat_normal.png", { width: 1024 });

// project screenshots (rendered at ~600px wide max in the projects grid)
await toWebp("src/assets/projects/bAndbChezNatalie.png", { width: 1280 });
await toWebp("src/assets/projects/tourDeFrance.png", { width: 1280 });
await toWebp("src/assets/projects/evently.png", { width: 1280 });
await toWebp("src/assets/projects/feestOpTafel.png", { width: 1280 });

// photos (rendered at <=280px wide)
await toWebp("src/assets/profile.jpg", { width: 720, quality: 82 });
await toWebp("src/assets/hobby.jpg", { width: 640, quality: 82 });

console.log("done");
