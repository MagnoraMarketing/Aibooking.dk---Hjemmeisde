// Build-time prerender: after `vite build` (client) and the SSR build of
// src/entry-server.tsx, render every URL in public/sitemap.xml to its own
// static HTML file with that page's title, meta description, canonical,
// hreflang and content. Crawlers that don't run JavaScript (Ahrefs, Bing,
// AI crawlers) otherwise see the same empty shell - with the home page's
// canonical - on every URL.
//
// Output: /            -> dist/index.html
//         /funktioner  -> dist/funktioner.html   (served at /funktioner via
//         /en/blog/x   -> dist/en/blog/x.html      "cleanUrls" in vercel.json)
//
// It also keeps sitemap <lastmod> honest and pings IndexNow with the pages
// whose content actually changed (see submitIndexNow below).
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const DOMAIN = 'https://www.aibooking.dk';
const HOST = 'www.aibooking.dk';
const MANIFEST = 'indexnow-manifest.json';

const escapeAttr = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// JSON inside <script> must not be able to close the tag.
const safeJson = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

function setMeta(html, attr, name, content) {
  const re = new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${name}" content="${escapeAttr(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n</head>`);
}

function applySeo(template, seo, pageUrl) {
  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${seo.lang}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(seo.title)}</title>`);
  html = setMeta(html, 'name', 'description', seo.description);
  if (seo.keywords) html = setMeta(html, 'name', 'keywords', seo.keywords);
  const url = seo.canonical || pageUrl;
  html = setMeta(html, 'property', 'og:type', seo.ogType);
  html = setMeta(html, 'property', 'og:title', seo.title);
  html = setMeta(html, 'property', 'og:description', seo.description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:locale', seo.ogLocale);
  html = setMeta(html, 'property', 'og:image', seo.ogImage);
  html = setMeta(html, 'name', 'twitter:title', seo.title);
  html = setMeta(html, 'name', 'twitter:description', seo.description);
  html = setMeta(html, 'name', 'twitter:image', seo.ogImage);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeAttr(url)}" />`);

  const extra = [
    ...seo.alternates.map((a) => `    <link rel="alternate" hreflang="${a.hreflang}" href="${escapeAttr(a.href)}" />`),
    seo.structuredData
      ? `    <script type="application/ld+json" data-seo-page>${safeJson(seo.structuredData)}</script>`
      : '',
  ].filter(Boolean).join('\n');
  return html.replace('</head>', `${extra}\n</head>`);
}

function outputFile(pathname) {
  if (pathname === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, `${pathname.replace(/^\//, '')}.html`);
}

function sitemapUrls() {
  const xml = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf-8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function wordCount(html) {
  return html.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter((w) => /\p{L}/u.test(w)).length;
}

async function fetchPreviousManifest() {
  try {
    const res = await fetch(`${DOMAIN}/${MANIFEST}`, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

// IndexNow (Bing, Yandex, Seznam, Naver... - shared between engines):
// submit only URLs whose rendered content differs from the live site's
// manifest. Runs on Vercel production builds only, and never fails the build.
async function submitIndexNow(urls) {
  if (process.env.VERCEL_ENV !== 'production') {
    console.log(`IndexNow: skipped (not a production build) - ${urls.length} changed URL(s)`);
    return;
  }
  if (!urls.length) {
    console.log('IndexNow: no changed pages to submit');
    return;
  }
  const keyFile = fs.readdirSync(path.join(ROOT, 'public')).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
  if (!keyFile) {
    console.warn('IndexNow: no key file in public/, skipping');
    return;
  }
  const key = keyFile.replace('.txt', '');
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation: `${DOMAIN}/${keyFile}`, urlList: urls.slice(0, 10000) }),
      signal: AbortSignal.timeout(15000),
    });
    console.log(`IndexNow: submitted ${urls.length} URL(s), status ${res.status}`);
  } catch (err) {
    console.warn('IndexNow: submission failed', err?.message || err);
  }
}

async function main() {
  const { render } = await import(pathToFileURL(SSR_ENTRY).href);
  // dist/index.html is overwritten with the rendered home page, so keep the
  // untouched shell next to the SSR bundle (makes re-running this safe).
  const templatePath = path.join(ROOT, 'dist-ssr', 'index.template.html');
  if (!fs.existsSync(templatePath) || fs.statSync(templatePath).mtimeMs < fs.statSync(SSR_ENTRY).mtimeMs) {
    fs.copyFileSync(path.join(DIST, 'index.html'), templatePath);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  if (!template.includes('<div id="root"></div>')) throw new Error(`${templatePath} has no empty #root`);

  const previous = await fetchPreviousManifest();
  const today = new Date().toISOString().split('T')[0];
  const manifest = {};
  const changed = [];
  const problems = [];

  for (const url of sitemapUrls()) {
    const pathname = new URL(url).pathname;
    const { html: body, seo } = await render(pathname);
    if (!seo) throw new Error(`${pathname}: page rendered no <SEO>`);
    if (seo.canonical && seo.canonical !== url) problems.push(`${pathname}: canonical ${seo.canonical} != sitemap URL`);
    if (!/<h1[\s>]/.test(body)) problems.push(`${pathname}: no <h1>`);
    if (seo.description.length > 160) problems.push(`${pathname}: meta description is ${seo.description.length} chars`);
    const words = wordCount(body);
    if (words < 300) problems.push(`${pathname}: only ${words} words`);

    const page = applySeo(template, seo, url).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    const file = outputFile(pathname);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);

    // Hash the page's own content only - not the hashed asset filenames,
    // which change on every code change.
    const hash = crypto.createHash('sha256').update(safeJson(seo)).update(body).digest('hex').slice(0, 16);
    const prev = previous[url];
    const unchanged = prev && prev.hash === hash;
    manifest[url] = { hash, lastmod: unchanged ? prev.lastmod : today };
    if (!unchanged) changed.push(url);
  }

  fs.writeFileSync(path.join(DIST, MANIFEST), JSON.stringify(manifest));

  // Sitemap lastmod = the day the page's content last changed.
  const sitemapPath = path.join(DIST, 'sitemap.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8').replace(
    /<loc>([^<]+)<\/loc>(\s*)<lastmod>[^<]*<\/lastmod>/g,
    (m, loc, ws) => (manifest[loc] ? `<loc>${loc}</loc>${ws}<lastmod>${manifest[loc].lastmod}</lastmod>` : m),
  );
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`✓ Prerendered ${Object.keys(manifest).length} pages (${changed.length} changed since the live site)`);
  if (problems.length) {
    console.warn(`SEO warnings (${problems.length}):`);
    problems.forEach((p) => console.warn(`  - ${p}`));
  }
  await submitIndexNow(changed);
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
