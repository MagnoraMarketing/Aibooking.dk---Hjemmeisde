// Generates a unique, on-brand SVG cover image per blog post into public/blog/covers/.
// No text is drawn on the images (per the site's blog cover convention) — visual
// variation only, via a deterministic seed derived from each post's slug.
//
// Run with: node scripts/generate-blog-covers.js
// Re-run any time posts are added/removed in src/content/blog.ts; existing covers
// are regenerated deterministically (same slug -> same image) so this is safe to
// run repeatedly.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_CONTENT_PATH = path.join(__dirname, '../src/content/blog.ts');
const OUTPUT_DIR = path.join(__dirname, '../public/blog/covers');

const PALETTE = {
  brand: ['#1e3a8a', '#1e40af', '#1d4ed8', '#2563eb', '#3b82f6'],
  accent: ['#d97706', '#f59e0b', '#fbbf24'],
  ink: ['#020617', '#0f172a', '#1e293b', '#334155'],
};

// Simple deterministic string hash -> 32-bit seed
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Mulberry32 PRNG
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rand, arr) {
  return arr[Math.floor(rand() * arr.length)];
}

// Icon library (viewBox 0 0 24 24, stroke-based, matches lucide-style icons
// used elsewhere on the site), keyed by topic rather than just category so
// each cover can reflect what the post is actually about — booking, webshop
// orders, automated customer handling, etc. — not just its broad category.
const ICONS = {
  // calendar / booking
  calendar: '<rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="white" stroke-width="1.6"/><path d="M4 9.5h16M8 3v4M16 3v4" stroke="white" stroke-width="1.6" stroke-linecap="round"/><circle cx="9" cy="14" r="1.1" fill="white"/><circle cx="15" cy="14" r="1.1" fill="white"/>',
  // shopping cart / webshop
  cart: '<circle cx="9" cy="20" r="1.4" fill="white"/><circle cx="17" cy="20" r="1.4" fill="white"/><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  // package / order fulfilment
  package: '<path d="M3 8l9-5 9 5-9 5-9-5z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 8v9l9 5 9-5V8M12 13v9" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  // headset / automated customer handling
  customerService: '<path d="M4 13a8 8 0 0 1 16 0" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="13" width="4" height="6" rx="1.5" fill="none" stroke="white" stroke-width="1.6"/><rect x="17" y="13" width="4" height="6" rx="1.5" fill="none" stroke="white" stroke-width="1.6"/><path d="M19 19v1a3 3 0 0 1-3 3h-3" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
  // phone call
  phone: '<path d="M6 3h4l2 5-2.5 1.5a12 12 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>',
  // reminder bell (outbound reminders)
  bell: '<path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 19a2 2 0 0 0 4 0" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
  // wrench / craftsman
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>',
  // briefcase / office
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2" fill="none" stroke="white" stroke-width="1.6"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
  // shield / GDPR & data security
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  // bar chart / ROI & growth
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  // clock / time saved
  clock: '<circle cx="12" cy="13" r="8" fill="none" stroke="white" stroke-width="1.6"/><path d="M12 9v4l3 2" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 2h6" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
  // gear / automation
  automation: '<circle cx="12" cy="12" r="3" fill="none" stroke="white" stroke-width="1.6"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
  // heart / customer retention
  heart: '<path d="M12 20s-7-4.4-9.5-8.8A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5.2C19 15.6 12 20 12 20z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>',
  // numbered steps / getting started
  steps: '<path d="M4 6h4M4 12h4M4 18h4" stroke="white" stroke-width="1.6" stroke-linecap="round"/><path d="M11 6h9M11 12h9M11 18h9" stroke="white" stroke-width="1.6" stroke-linecap="round" opacity="0.6"/><path d="M4.5 5.2l1 1 1.8-2" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  // inbound vs outbound arrows
  arrows: '<path d="M4 8h10M14 8l-3-3M14 8l-3 3" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 16H10M10 16l3-3M10 16l3 3" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  // globe / language
  globe: '<circle cx="12" cy="12" r="9" fill="none" stroke="white" stroke-width="1.6"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="white" stroke-width="1.4"/>',
  // chat bubble (generic AI widget conversation)
  chat: '<path d="M4 5h16v10H9l-3 3v-3H4V5z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><circle cx="9" cy="10" r="1" fill="white"/><circle cx="12" cy="10" r="1" fill="white"/><circle cx="15" cy="10" r="1" fill="white"/>',
  // connected nodes (everything working together)
  nodes: '<circle cx="6" cy="6" r="2.2" fill="white"/><circle cx="18" cy="6" r="2.2" fill="white"/><circle cx="12" cy="18" r="2.2" fill="white"/><path d="M8 6h8M7.3 7.8 10.7 16.4M16.7 7.8 13.3 16.4" stroke="white" stroke-width="1.4"/>',
};

// Fallback icon choices per category, used only for posts not listed in
// SLUG_TOPICS below (e.g. a new post added later, until it's mapped).
const CATEGORY_FALLBACK_ICONS = {
  'ai-widget': ['chat', 'cart'],
  'ai-inbound-outbound': ['phone', 'bell'],
  'ai-total-solution': ['nodes', 'calendar'],
};

// Per-post icon, chosen to match what each article is actually about —
// booking, webshop/orders, automated customer handling, GDPR, ROI, etc. —
// rather than a random pick within the post's broad category.
const SLUG_TOPICS = {
  'hvordan-ai-widgets-transformerer-kundeservice': 'customerService',
  'ai-widget-integration-bedste-praksis': 'automation',
  'ai-telefonassistent-fremtidens-kundeservice': 'customerService',
  'komplet-ai-automatisering-widget-telefon-booking': 'nodes',
  'roi-ai-automatisering-virksomheder': 'chart',
  'ai-widget-webshop-konvertering-dognet-rundt': 'cart',
  'ai-widget-klinik-book-tid-udenfor-aabningstid': 'calendar',
  'fordele-ai-widget-mindre-virksomheder': 'chat',
  'ai-widget-spar-tid-spar-penge': 'clock',
  'miste-kunde-langsom-hjemmeside': 'heart',
  'ai-widget-vs-kontaktformular': 'chat',
  'vaelg-den-rigtige-ai-widget': 'steps',
  'ai-widget-gdpr-danske-virksomheder': 'shield',
  'ai-telefonassistent-klinik-udeblivelser': 'calendar',
  'aldrig-mere-ubesvaret-opkald': 'phone',
  'outbound-ai-opkald-paamindelser': 'bell',
  'ai-telefonassistent-haandvaerker': 'wrench',
  'ai-telefon-vs-telefonsvarer': 'phone',
  'sma-virksomheder-telefon-tid-penge': 'clock',
  'ai-telefonassistent-dansk-sprog': 'globe',
  'inbound-outbound-forskel': 'arrows',
  'ai-telefonassistent-kontor-administration': 'briefcase',
  'aldrig-mist-en-kunde-igen': 'heart',
  'totalloesning-webshop': 'package',
  'totalloesning-klinik': 'calendar',
  'mindre-virksomhed-stor-virkning-ai': 'chart',
  'frigoer-tid-er-penge': 'clock',
  'automatisering-uden-flere-medarbejdere': 'automation',
  'kundeoplevelse-ai-automatisering': 'customerService',
  'kom-i-gang-ai-automatisering-trin-for-trin': 'steps',
  'ai-widget-hjemmeside-komplet-guide': 'chat',
  'shopify-ai-automatisering': 'cart',
  'ai-til-hjemmeside': 'globe',
  'ai-reception-virtuel-receptionist': 'customerService',
  'ai-indgaaende-opkald': 'phone',
  'ai-kundeservice': 'customerService',
  'ai-medarbejder': 'automation',
  'ai-i-danmark': 'nodes',
  'ai-telefonpasning-dansk-ai-receptionist': 'phone',
  'widget-til-webshop': 'package',
  'ai-widget-til-shopify': 'cart',
};

function pickIcon(rand, slug, category) {
  const topic = SLUG_TOPICS[slug];
  if (topic && ICONS[topic]) return ICONS[topic];
  const fallbacks = CATEGORY_FALLBACK_ICONS[category] || CATEGORY_FALLBACK_ICONS['ai-widget'];
  return ICONS[pick(rand, fallbacks)];
}

function generateCover(slug, category) {
  const rand = mulberry32(hashSeed(slug));
  const width = 1200;
  const height = 675;

  const bgFrom = pick(rand, PALETTE.ink);
  const bgTo = pick(rand, PALETTE.brand);
  const glowA = pick(rand, PALETTE.brand);
  const glowB = pick(rand, PALETTE.accent);
  const angle = Math.floor(rand() * 360);

  const glow1 = { cx: 150 + rand() * 350, cy: 100 + rand() * 200, r: 220 + rand() * 160 };
  const glow2 = { cx: 750 + rand() * 350, cy: 350 + rand() * 250, r: 200 + rand() * 180 };

  const icon = pickIcon(rand, slug, category);
  const iconRotate = Math.floor(rand() * 16 - 8);
  const iconScale = 6.5 + rand() * 2.5;
  const iconCx = width * (0.38 + rand() * 0.24);
  const iconCy = height * (0.38 + rand() * 0.24);

  const ringOpacity = (0.15 + rand() * 0.15).toFixed(2);
  const dotOpacity = (0.05 + rand() * 0.05).toFixed(2);

  const accentRing = {
    cx: iconCx < width / 2 ? width * (0.72 + rand() * 0.18) : width * (0.08 + rand() * 0.16),
    cy: height * (0.14 + rand() * 0.16),
    r: 26 + rand() * 34,
  };
  const accentRing2 = {
    cx: width * (0.06 + rand() * 0.14),
    cy: height * (0.78 + rand() * 0.16),
    r: 14 + rand() * 18,
  };
  const swooshRotate = Math.floor(rand() * 360);
  const swooshOpacity = (0.08 + rand() * 0.1).toFixed(2);

  const uid = slug.replace(/[^a-z0-9]/g, '').slice(0, 12);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${bgFrom}"/>
      <stop offset="100%" stop-color="${bgTo}"/>
    </linearGradient>
    <radialGradient id="glow1-${uid}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${glowA}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${glowA}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2-${uid}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${glowB}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${glowB}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots-${uid}" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="white" opacity="${dotOpacity}"/>
    </pattern>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg-${uid})"/>
  <rect width="${width}" height="${height}" fill="url(#dots-${uid})"/>
  <circle cx="${glow1.cx}" cy="${glow1.cy}" r="${glow1.r}" fill="url(#glow1-${uid})"/>
  <circle cx="${glow2.cx}" cy="${glow2.cy}" r="${glow2.r}" fill="url(#glow2-${uid})"/>

  <line x1="${width * 0.5}" y1="${-height * 0.3}" x2="${width * 0.5}" y2="${height * 1.3}"
    stroke="${glowB}" stroke-width="140" opacity="${swooshOpacity}"
    transform="rotate(${swooshRotate} ${width / 2} ${height / 2})"/>

  <circle cx="${accentRing.cx}" cy="${accentRing.cy}" r="${accentRing.r}" fill="none" stroke="${glowB}" stroke-width="2" opacity="0.5"/>
  <circle cx="${accentRing2.cx}" cy="${accentRing2.cy}" r="${accentRing2.r}" fill="${glowA}" opacity="0.18"/>

  <g transform="translate(${iconCx} ${iconCy}) rotate(${iconRotate})">
    <circle r="${iconScale * 11}" fill="white" opacity="0.06"/>
    <circle r="${iconScale * 11}" fill="none" stroke="white" stroke-opacity="${ringOpacity}" stroke-width="1.5"/>
    <rect x="${-iconScale * 8}" y="${-iconScale * 8}" width="${iconScale * 16}" height="${iconScale * 16}" rx="${iconScale * 4}"
      fill="url(#glow1-${uid})" opacity="0.9"/>
    <rect x="${-iconScale * 8}" y="${-iconScale * 8}" width="${iconScale * 16}" height="${iconScale * 16}" rx="${iconScale * 4}"
      fill="${bgTo}" opacity="0.55"/>
    <g transform="scale(${iconScale}) translate(-12 -12)">
      ${icon}
    </g>
  </g>
</svg>
`;
}

function extractPosts() {
  const src = fs.readFileSync(BLOG_CONTENT_PATH, 'utf8');
  const regex = /id: '([^']+)',\s*\n\s*slug: '([^']+)',\s*\n\s*categorySlug: '([^']+)'/g;
  const posts = [];
  let match;
  while ((match = regex.exec(src)) !== null) {
    posts.push({ id: match[1], slug: match[2], category: match[3] });
  }
  return posts;
}

function main() {
  const posts = extractPosts();
  if (posts.length === 0) {
    console.error('No posts found in src/content/blog.ts — nothing to generate.');
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  posts.forEach((post) => {
    const svg = generateCover(post.slug, post.category);
    const outPath = path.join(OUTPUT_DIR, `${post.slug}.svg`);
    fs.writeFileSync(outPath, svg, 'utf-8');
  });

  console.log(`Generated ${posts.length} blog cover images in public/blog/covers/`);
}

main();
