import { readFile, writeFile, mkdtemp, copyFile, rm } from "node:fs/promises";
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { promisify } from "node:util";
import { tmpdir } from "node:os";
import { resolve, basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

// Authoring only. Keep one losslessly encoded, retina-sized image per watch
// in the repo; retain the original PNGs outside git for future edits.
const inputs = process.argv.slice(2);
if (!inputs.length) throw new Error("Usage: npm run watch-images -- /path/to/watch-name.png [...]");
const root = fileURLToPath(new URL("../", import.meta.url));
const htmlPath = resolve(root, "watches.html");
let html = await readFile(htmlPath, "utf8");
const run = promisify(execFile);
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
      new RegExp(`src="assets/watches/${slug}\\.(png|webp)(?:\\?v=[a-f0-9]+)?"`).test(tag));
    if (!tag) throw new Error(`No watch entry for ${slug} in watches.html.`);
    const source = await readFile(resolve(input));
    const width = source.readUInt32BE(16);
    const path = join(temporary, `${slug}.webp`);
    const resize = width > 720 ? ["-resize", "720", "0"] : [];
    await run("cwebp", ["-quiet", "-lossless", "-exact", "-m", "6", ...resize, resolve(input), "-o", path]);
    const encoded = await readFile(path);
    const version = createHash("sha256").update(encoded).digest("hex").slice(0, 12);
    const size = await page.evaluate(async base64 => {
      const image = new Image();
      image.src = `data:image/webp;base64,${base64}`;
      await image.decode();
      return { width: image.naturalWidth, height: image.naturalHeight };
    }, encoded.toString("base64"));
    let updated = tag.replace(/ (srcset|sizes)="[^"]*"/g, "");
    updated = attribute(updated, "src", `assets/watches/${slug}.webp?v=${version}`);
    updated = attribute(updated, "width", size.width);
    updated = attribute(updated, "height", size.height);
    html = html.replace(tag, updated);
    outputs.push({ path, destination: resolve(root, `assets/watches/${slug}.webp`) });
  }
  for (const output of outputs) await copyFile(output.path, output.destination);
  await writeFile(htmlPath, html);
  console.log(`Prepared ${outputs.length} lossless WebP images. Source PNGs unchanged.`);
} finally {
  await browser.close();
  await rm(temporary, { recursive: true, force: true });
}
