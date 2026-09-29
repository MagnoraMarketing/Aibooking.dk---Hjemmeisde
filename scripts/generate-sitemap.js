import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.aibooking.dk';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const BLOG_PATH = path.join(__dirname, '../src/content/blog.ts');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Keep in sync with src/i18n/config.ts LANGUAGE_PATH_PREFIX.
const LANGUAGE_PREFIXES = { da: '', en: '/en', pt: '/pt', fr: '/fr', es: '/es' };
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

// Read blog categories and published posts straight from src/content/blog.ts
// so new posts land in the sitemap without editing this script.
function getBlogRoutes() {
  const source = fs.readFileSync(BLOG_PATH, 'utf-8');
  const categoriesStart = source.indexOf('export const blogCategories');
  const postsStart = source.indexOf('export const blogPosts');
  const postsEnd = source.indexOf('\n];', postsStart);
  if (categoriesStart === -1 || postsStart === -1 || postsEnd === -1) {
    throw new Error('Could not locate blogCategories/blogPosts in src/content/blog.ts');
  }

  const categorySlugs = [...source.slice(categoriesStart, postsStart).matchAll(/^\s{4}slug: '([^']+)'/gm)]
    .map(match => match[1]);

  // Each top-level post object starts with "  {" and ends with "  }," at
  // two-space indentation.
  const posts = source.slice(postsStart, postsEnd).split(/\n {2}\{\n/).slice(1).map(block => ({
    slug: block.match(/^\s{4}slug: '([^']+)'/m)?.[1],
    categorySlug: block.match(/^\s{4}categorySlug: '([^']+)'/m)?.[1],
    published: /^\s{4}published: true/m.test(block),
    publishedAt: block.match(/^\s{4}published_at: '(\d{4}-\d{2}-\d{2})/m)?.[1]
  })).filter(post => post.slug && post.published);

  const blogLastmod = lastModified(BLOG_PATH);
  const newestIn = (list) => list.map(post => post.publishedAt).filter(Boolean).sort().pop() || blogLastmod;

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
      lastmod: post.publishedAt || blogLastmod,
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
  // Blog posts only exist in Danish and English.
  const langsFor = (route) => (/^\/blog\/(?!category\/)./.test(route) ? ['da', 'en'] : LANGUAGES);
  const alternates = (route) => langsFor(route)
    .map(lang => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${DOMAIN}${localizedPath(lang, route)}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${route}" />`)
    .join('\n');

  const urls = pages.flatMap(page => langsFor(page.route).map(lang => `  <url>
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
