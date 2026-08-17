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
  brand: ['#4c1d95', '#5b21b6', '#6d28d9', '#7c3aed', '#8b5cf6'],
  accent: ['#d97706', '#f59e0b', '#fbbf24'],
  ink: ['#0c081a', '#160f2b', '#241c3d', '#372f52'],
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

// Icon path groups (viewBox 0 0 24 24, stroke-based, matches lucide-style icons
// used elsewhere on the site) per blog category.
const ICONS = {
  'ai-widget': [
    // chat bubble
    '<path d="M4 4h16v12H8l-4 4V4z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>',
    // message square with dots
    '<path d="M4 5h16v10H9l-3 3v-3H4V5z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><circle cx="9" cy="10" r="1" fill="white"/><circle cx="12" cy="10" r="1" fill="white"/><circle cx="15" cy="10" r="1" fill="white"/>',
  ],
  'ai-inbound-outbound': [
    // phone
    '<path d="M6 3h4l2 5-2.5 1.5a12 12 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2z" fill="none" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>',
    // waveform
    '<path d="M3 12h2l2-6 3 12 3-16 3 14 2-8 3 4h2" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  ],
  'ai-total-solution': [
    // connected nodes
    '<circle cx="6" cy="6" r="2.2" fill="white"/><circle cx="18" cy="6" r="2.2" fill="white"/><circle cx="12" cy="18" r="2.2" fill="white"/><path d="M8 6h8M7.3 7.8 10.7 16.4M16.7 7.8 13.3 16.4" stroke="white" stroke-width="1.4"/>',
    // calendar/booking
    '<rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="white" stroke-width="1.6"/><path d="M4 9.5h16M8 3v4M16 3v4" stroke="white" stroke-width="1.6" stroke-linecap="round"/><circle cx="9" cy="14" r="1.1" fill="white"/><circle cx="15" cy="14" r="1.1" fill="white"/>',
  ],
};

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

  const icon = pick(rand, ICONS[category] || ICONS['ai-widget']);
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
