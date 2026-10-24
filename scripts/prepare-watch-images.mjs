import { readFile, writeFile, mkdtemp, copyFile, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { resolve, basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

// Authoring only. Keep one transparent, retina-sized PNG per watch in the
// repo; retain full-resolution masters outside git for future edits.
const inputs = process.argv.slice(2);
if (!inputs.length) throw new Error("Usage: npm run watch-images -- /path/to/watch-name.png [...]");
const root = fileURLToPath(new URL("../", import.meta.url));
const htmlPath = resolve(root, "watches.html");
let html = await readFile(htmlPath, "utf8");
const temporary = await mkdtemp(join(tmpdir(), "watch-images-"));
const browser = await chromium.launch();
const outputs = [];

function attribute(tag, name, value) {
  const pattern = new RegExp(` ${name}="[^"]*"`);
  const attr = ` ${name}="${value}"`;
  return pattern.test(tag) ? tag.replace(pattern, attr) : tag.replace(/\s*\/>$/, `${attr} />`);
}

try {
  const page = await browser.newPage();
  for (const input of inputs) {
    const slug = basename(input, ".png");
    if (!/^[\w-]+$/.test(slug)) throw new Error(`Expected a watch-name.png source: ${input}`);
    const tag = [...html.matchAll(/<img\b[^>]*>/g)].map(m => m[0]).find(tag =>
      new RegExp(`src="assets/watches/${slug}\\.png(?:\\?v=[a-f0-9]+)?"`).test(tag));
    if (!tag) throw new Error(`No watch entry for ${slug} in watches.html.`);
    const source = await readFile(resolve(input));
    if (source.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
      throw new Error(`Expected PNG image data: ${input}`);
    }
    const prepared = await page.evaluate(async base64 => {
      const image = new Image();
      image.src = `data:image/png;base64,${base64}`;
      await image.decode();
      if (image.naturalWidth <= 720) {
        return { width: image.naturalWidth, height: image.naturalHeight };
      }
      const canvas = document.createElement("canvas");
      canvas.width = 720;
      canvas.height = Math.round(image.naturalHeight * 720 / image.naturalWidth);
      const context = canvas.getContext("2d");
      context.imageSmoothingQuality = "high";
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return {
        width: canvas.width,
        height: canvas.height,
        png: canvas.toDataURL("image/png").split(",")[1],
      };
    }, source.toString("base64"));
    const encoded = prepared.png ? Buffer.from(prepared.png, "base64") : source;
    const path = join(temporary, `${slug}.png`);
    await writeFile(path, encoded);
    const version = createHash("sha256").update(encoded).digest("hex").slice(0, 12);
    let updated = attribute(tag, "src", `assets/watches/${slug}.png?v=${version}`);
    updated = attribute(updated, "width", prepared.width);
    updated = attribute(updated, "height", prepared.height);
    html = html.replace(tag, updated);
    outputs.push({ path, destination: resolve(root, `assets/watches/${slug}.png`) });
  }
  for (const output of outputs) await copyFile(output.path, output.destination);
  await writeFile(htmlPath, html);
  console.log(`Prepared ${outputs.length} transparent PNG images. Source masters unchanged.`);
} finally {
  await browser.close();
  await rm(temporary, { recursive: true, force: true });
}
