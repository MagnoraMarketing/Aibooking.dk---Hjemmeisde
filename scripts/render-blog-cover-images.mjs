// Renders every SVG blog cover in public/blog/covers/ to a 1200x675 JPEG next
// to it. Social networks (Facebook, LinkedIn, X) don't show SVG og:images, so
// blog posts use the JPEG for og:image/twitter:image and keep the SVG on page.
//
// Run after scripts/generate-blog-covers.js whenever covers are added:
//   node scripts/render-blog-cover-images.mjs
// Needs Playwright with a Chromium build (not a project dependency, because the
// JPEGs are committed and the production build doesn't need to render them).
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COVERS_DIR = path.join(__dirname, '../public/blog/covers');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });
const svgs = fs.readdirSync(COVERS_DIR).filter((file) => file.endsWith('.svg'));

for (const file of svgs) {
  await page.goto(pathToFileURL(path.join(COVERS_DIR, file)).href);
  await page.screenshot({ path: path.join(COVERS_DIR, file.replace(/\.svg$/, '.jpg')), type: 'jpeg', quality: 85 });
}

await browser.close();
console.log(`Rendered ${svgs.length} cover images to JPEG in public/blog/covers/`);
