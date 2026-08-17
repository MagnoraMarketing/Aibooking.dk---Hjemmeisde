import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.aibooking.dk';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Keep in sync with src/i18n/config.ts LANGUAGE_PATH_PREFIX.
const LANGUAGE_PREFIXES = { da: '', en: '/en', pt: '/pt', fr: '/fr' };
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
  'BlogPage.tsx': '/blog',
  'BlogCategoryPage.tsx': [
    '/blog/category/ai-widget',
    '/blog/category/ai-inbound-outbound',
    '/blog/category/ai-total-solution'
  ],
  'BlogPostPage.tsx': [
    '/blog/hvordan-ai-widgets-transformerer-kundeservice',
    '/blog/ai-widget-integration-bedste-praksis',
    '/blog/ai-telefonassistent-fremtidens-kundeservice',
    '/blog/komplet-ai-automatisering-widget-telefon-booking',
    '/blog/roi-ai-automatisering-virksomheder',
    '/blog/ai-widget-webshop-konvertering-dognet-rundt',
    '/blog/ai-widget-klinik-book-tid-udenfor-aabningstid',
    '/blog/fordele-ai-widget-mindre-virksomheder',
    '/blog/ai-widget-spar-tid-spar-penge',
    '/blog/miste-kunde-langsom-hjemmeside',
    '/blog/ai-widget-vs-kontaktformular',
    '/blog/vaelg-den-rigtige-ai-widget',
    '/blog/ai-widget-gdpr-danske-virksomheder',
    '/blog/ai-telefonassistent-klinik-udeblivelser',
    '/blog/aldrig-mere-ubesvaret-opkald',
    '/blog/outbound-ai-opkald-paamindelser',
    '/blog/ai-telefonassistent-haandvaerker',
    '/blog/ai-telefon-vs-telefonsvarer',
    '/blog/sma-virksomheder-telefon-tid-penge',
    '/blog/ai-telefonassistent-dansk-sprog',
    '/blog/inbound-outbound-forskel',
    '/blog/ai-telefonassistent-kontor-administration',
    '/blog/aldrig-mist-en-kunde-igen',
    '/blog/totalloesning-webshop',
    '/blog/totalloesning-klinik',
    '/blog/mindre-virksomhed-stor-virkning-ai',
    '/blog/frigoer-tid-er-penge',
    '/blog/automatisering-uden-flere-medarbejdere',
    '/blog/kundeoplevelse-ai-automatisering',
    '/blog/kom-i-gang-ai-automatisering-trin-for-trin'
  ]
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
  '/blog/category/ai-widget': 0.7,
  '/blog/category/ai-inbound-outbound': 0.7,
  '/blog/category/ai-total-solution': 0.7,
  '/blog/hvordan-ai-widgets-transformerer-kundeservice': 0.8,
  '/blog/ai-widget-integration-bedste-praksis': 0.7,
  '/blog/ai-telefonassistent-fremtidens-kundeservice': 0.7,
  '/blog/komplet-ai-automatisering-widget-telefon-booking': 0.8,
  '/blog/roi-ai-automatisering-virksomheder': 0.8,
  '/widget': 0.9,
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
  '/blog/category/ai-widget': 'weekly',
  '/blog/category/ai-inbound-outbound': 'weekly',
  '/blog/category/ai-total-solution': 'weekly',
  '/blog/hvordan-ai-widgets-transformerer-kundeservice': 'monthly',
  '/blog/ai-widget-integration-bedste-praksis': 'monthly',
  '/blog/ai-telefonassistent-fremtidens-kundeservice': 'monthly',
  '/blog/komplet-ai-automatisering-widget-telefon-booking': 'monthly',
  '/blog/roi-ai-automatisering-virksomheder': 'monthly',
  '/widget': 'weekly',
  '/kontakt': 'monthly',
  '/om-aibooking': 'monthly',
  '/privatlivspolitik': 'yearly',
  '/vilkaar': 'yearly'
};

function getExistingPages() {
  const files = fs.readdirSync(PAGES_DIR);
  const pages = [];

  files.forEach(file => {
    if (file.endsWith('.tsx') && routeMap[file]) {
      const routes = routeMap[file];
      const filePath = path.join(PAGES_DIR, file);
      const stats = fs.statSync(filePath);
      const lastmod = stats.mtime.toISOString().split('T')[0];

      if (Array.isArray(routes)) {
        routes.forEach(route => {
          pages.push({
            route,
            lastmod,
            priority: priorityMap[route] || 0.5,
            changefreq: changefreqMap[route] || 'monthly'
          });
        });
      } else {
        pages.push({
          route: routes,
          lastmod,
          priority: priorityMap[routes] || 0.5,
          changefreq: changefreqMap[routes] || 'monthly'
        });
      }
    }
  });

  return pages.sort((a, b) => b.priority - a.priority);
}

function generateSitemap(pages) {
  const alternates = (route) => LANGUAGES
    .map(lang => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${DOMAIN}${localizedPath(lang, route)}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${route}" />`)
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
