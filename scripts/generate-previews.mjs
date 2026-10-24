import { createServer } from "node:http";
import { readFile, mkdir, mkdtemp, rename, rm } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, "assets/previews");
const pages = [
  { file: "index.html", image: "home.png" },
  { file: "reading.html", image: "reading.png" },
  { file: "readme.html", image: "readme.png" },
  { file: "watches.html", image: "watches.png" },
  { file: "next-place.html", image: "next-place.png" },
];
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

// Serve the working tree, so previews include changes that aren't deployed yet.
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const file = resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
    if (!file.startsWith(resolve(root) + sep)) {
      response.writeHead(403).end();
      return;
    }
    const content = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    response.end(content);
  } catch {
    response.writeHead(404).end();
  }
});

let browser;
let temporary;
try {
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  await mkdir(output, { recursive: true });
  temporary = await mkdtemp(resolve(output, ".generate-"));
  browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
    colorScheme: "light",
  });
  const origin = `http://127.0.0.1:${server.address().port}`;

  for (const { file, image } of pages) {
    const response = await page.goto(`${origin}/${file}`, { waitUntil: "networkidle" });
    if (!response.ok()) throw new Error(`Could not load ${file}: ${response.status()}`);
    await page.evaluate(async () => {
      document.documentElement.setAttribute("data-link-preview", "");
      const images = [...document.images];
      for (const image of images) image.loading = "eager";
      await document.fonts.ready;
      await Promise.all(images.map(image => image.decode()));
    });
    await page.screenshot({
      path: resolve(temporary, image),
      fullPage: false,
      animations: "disabled",
    });
    console.log(`Generated assets/previews/${image} (1200 × 630)`);
  }

  // Only replace the existing previews after every page renders successfully.
  for (const { image } of pages) {
    await rename(resolve(temporary, image), resolve(output, image));
  }
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
  if (temporary) await rm(temporary, { recursive: true, force: true });
}
