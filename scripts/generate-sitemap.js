import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.aibooking.dk';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const BLOG_PATH = path.join(__dirname, '../src/content/blog.ts');
const BLOG_POSTS_DIR = path.join(__dirname, '../src/content/blogPosts');
const BLOG_TRANSLATIONS_DIR = path.join(__dirname, '../src/content/blogTranslations');
const VERCEL_CONFIG = path.join(__dirname, '../vercel.json');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Keep in sync with src/i18n/config.ts LANGUAGE_PATH_PREFIX.
const LANGUAGE_PREFIXES = { da: '', en: '/en', es: '/es', de: '/de', fr: '/fr' };
const LANGUAGES = Object.keys(LANGUAGE_PREFIXES);

function localizedPath(lang, route) {
  const prefix = LANGUAGE_PREFIXES[lang];
  if (!prefix) return route;
  return route === '/' ? prefix : `${prefix}${route}`;
}

const routeMap = {
  'HomePage.tsx': '/',
  'IntegrationsPage.tsx': '/integrationer',
  'IndustriesPage.tsx': '/brancher',
  'DemoPage.tsx': '/demo',
  'HealthcarePage.tsx': '/klinik',
  'CraftsmanPage.tsx': '/haandvaerker',
  'OfficePage.tsx': '/kontor',
  'EcommercePage.tsx': '/webshop',
  'FeaturesPage.tsx': '/funktioner',
  'ContactPage.tsx': '/kontakt',
  'AboutPage.tsx': '/om-aibooking',
  'PrivacyPage.tsx': '/privatlivspolitik',
  'TermsPage.tsx': '/vilkaar',
  'WidgetPage.tsx': '/widget',
  'InboundOutboundPage.tsx': '/ind-og-udgaaende-opkald',
  'TrialPage.tsx': '/proeveperiode',
  'AppPage.tsx': '/app',
  'SalonPage.tsx': '/frisoer',
  'BlogPage.tsx': '/blog'
};

const priorityMap = {
  '/': 1.0,
  '/demo': 0.9,
  '/funktioner': 0.8,
  '/integrationer': 0.8,
  '/brancher': 0.8,
  '/blog': 0.8,
  '/klinik': 0.7,
  '/haandvaerker': 0.7,
  '/kontor': 0.7,
  '/webshop': 0.7,
  '/frisoer': 0.7,
  '/app': 0.8,
  '/widget': 0.9,
  '/ind-og-udgaaende-opkald': 0.9,
  '/proeveperiode': 0.9,
  '/kontakt': 0.6,
  '/om-aibooking': 0.6,
  '/privatlivspolitik': 0.4,
  '/vilkaar': 0.4
};

const changefreqMap = {
  '/': 'weekly',
  '/demo': 'monthly',
  '/funktioner': 'monthly',
  '/integrationer': 'monthly',
  '/brancher': 'monthly',
  '/blog': 'weekly',
  '/klinik': 'monthly',
  '/haandvaerker': 'monthly',
  '/kontor': 'monthly',
  '/webshop': 'monthly',
  '/frisoer': 'monthly',
  '/app': 'monthly',
  '/widget': 'weekly',
  '/ind-og-udgaaende-opkald': 'weekly',
  '/proeveperiode': 'weekly',
  '/kontakt': 'monthly',
  '/om-aibooking': 'monthly',
  '/privatlivspolitik': 'yearly',
  '/vilkaar': 'yearly'
};

// Last commit date of a file (YYYY-MM-DD). Falls back to the file's mtime
// when git history isn't available (e.g. a shallow or missing checkout);
// mtime alone is unreliable because a fresh clone stamps every file "today".
function lastModified(filePath) {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', filePath], {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
    if (date) return date;
  } catch {
    // fall through to mtime
  }
  return fs.statSync(filePath).mtime.toISOString().split('T')[0];
}

// Read blog categories (src/content/blog.ts) and published posts
// (src/content/blogPosts/*.ts) straight from the source so new posts land in
// the sitemap without editing this script.
function readBlogPosts() {
  return fs.readdirSync(BLOG_POSTS_DIR).filter(file => file.endsWith('.ts')).flatMap(file => {
    const source = fs.readFileSync(path.join(BLOG_POSTS_DIR, file), 'utf-8');
    const start = source.indexOf('BlogPost[] = [');
    const end = source.lastIndexOf('\n];');
    if (start === -1 || end === -1) throw new Error(`Could not locate the posts array in ${file}`);
    // Each top-level post object starts with "  {" at two-space indentation.
    return source.slice(start, end).split(/\n {2}\{\n/).slice(1).map(block => ({
      slug: block.match(/^\s{4}slug: '([^']+)'/m)?.[1],
      categorySlug: block.match(/^\s{4}categorySlug: '([^']+)'/m)?.[1],
      published: /^\s{4}published: true/m.test(block),
      publishedAt: block.match(/^\s{4}published_at: '(\d{4}-\d{2}-\d{2})/m)?.[1],
      updatedAt: block.match(/^\s{4}updated_at: '(\d{4}-\d{2}-\d{2})/m)?.[1]
    }));
  }).filter(post => post.slug && post.published);
}

// Posts are written in Danish and English in src/content/blogPosts; every
// other site language has its translation in src/content/blogTranslations/<lang>/.
// A published post without one would show English text on that language's URL.
function checkBlogTranslations(posts) {
  const missing = [];
  for (const lang of LANGUAGES.filter(lang => lang !== 'da' && lang !== 'en')) {
    const dir = path.join(BLOG_TRANSLATIONS_DIR, lang);
    const translated = new Set(fs.readdirSync(dir).filter(file => file.endsWith('.ts')).flatMap(file =>
      [...fs.readFileSync(path.join(dir, file), 'utf-8').matchAll(/^ {2}'([^']+)': \{/gm)].map(match => match[1])));
    for (const post of posts) if (!translated.has(post.slug)) missing.push(`${lang}: ${post.slug}`);
  }
  if (missing.length) throw new Error(`Blog posts missing a translation in src/content/blogTranslations:\n  ${missing.join('\n  ')}`);
}

// Merged posts must 301 (vercel.json) to a published post, and an old slug
// must not still be published — otherwise the redirect hides a live page.
function checkBlogRedirects(posts) {
  const published = new Set(posts.map(post => post.slug));
  const { redirects = [] } = JSON.parse(fs.readFileSync(VERCEL_CONFIG, 'utf-8'));
  const problems = [];
  for (const { source, destination } of redirects) {
    const from = source.match(/\/blog\/([^/]+)$/)?.[1];
    const to = destination.match(/\/blog\/([^/]+)$/)?.[1];
    if (!from || !to) continue;
    if (published.has(from)) problems.push(`${source} redirects away from a published post`);
    if (!published.has(to)) problems.push(`${source} -> ${destination}: target post is not published`);
  }
  if (problems.length) throw new Error(`Broken blog redirects in vercel.json:\n  ${problems.join('\n  ')}`);
}

function getBlogRoutes() {
  const source = fs.readFileSync(BLOG_PATH, 'utf-8');
  const categoriesStart = source.indexOf('export const blogCategories');
  const categoriesEnd = source.indexOf('\n];', categoriesStart);
  if (categoriesStart === -1 || categoriesEnd === -1) {
    throw new Error('Could not locate blogCategories in src/content/blog.ts');
  }

  const categorySlugs = [...source.slice(categoriesStart, categoriesEnd).matchAll(/^\s{4}slug: '([^']+)'/gm)]
    .map(match => match[1]);

  const posts = readBlogPosts();
  checkBlogRedirects(posts);
  checkBlogTranslations(posts);

  const blogLastmod = lastModified(BLOG_POSTS_DIR);
  const changedAt = (post) => post.updatedAt || post.publishedAt;
  const newestIn = (list) => list.map(changedAt).filter(Boolean).sort().pop() || blogLastmod;

  return {
    newestPost: newestIn(posts),
    categories: categorySlugs.map(slug => ({
      route: `/blog/category/${slug}`,
      lastmod: newestIn(posts.filter(post => post.categorySlug === slug)),
      priority: 0.7,
      changefreq: 'weekly'
    })),
    posts: posts.map(post => ({
      route: `/blog/${post.slug}`,
      lastmod: changedAt(post) || blogLastmod,
      priority: 0.8,
      changefreq: 'monthly'
    }))
  };
}

function getExistingPages() {
  const blog = getBlogRoutes();
  const pages = fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.tsx') && routeMap[file])
    .map(file => {
      const route = routeMap[file];
      return {
        route,
        // The blog index changes whenever a post is published.
        lastmod: route === '/blog' ? blog.newestPost : lastModified(path.join(PAGES_DIR, file)),
        priority: priorityMap[route] || 0.5,
        changefreq: changefreqMap[route] || 'monthly'
      };
    });

  return [...pages, ...blog.categories, ...blog.posts].sort((a, b) => b.priority - a.priority);
}

function generateSitemap(pages) {
  // x-default: visitors from countries without their own language get English.
  const alternates = (route) => LANGUAGES
    .map(lang => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${DOMAIN}${localizedPath(lang, route)}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${localizedPath('en', route)}" />`)
    .join('\n');

  const urls = pages.flatMap(page => LANGUAGES.map(lang => `  <url>
    <loc>${DOMAIN}${localizedPath(lang, page.route)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates(page.route)}
  </url>`)).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

function main() {
  try {
    const pages = getExistingPages();
    const sitemap = generateSitemap(pages);

    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');

    console.log('✓ Sitemap generated successfully!');
    console.log(`✓ Found ${pages.length} pages:`);
    pages.forEach(page => {
      console.log(`  - ${page.route} (priority: ${page.priority})`);
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
