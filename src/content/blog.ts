// Static blog content. Posts live in src/content/blogPosts/ (one file per
// topic cluster) and are combined here. To publish a new post: add an entry to
// the matching file (and a category to `blogCategories` if needed). No
// database required. scripts/generate-sitemap.js and
// scripts/generate-blog-covers.js read the same files.
//
// When posts are merged, add the old slug to `blogRedirects` below AND to the
// "redirects" list in vercel.json so the old URL 301s to the surviving post.

import { receptionistPosts } from './blogPosts/receptionist';
import { voicePosts } from './blogPosts/voice';
import { automationPosts } from './blogPosts/automation';
import { widgetPosts } from './blogPosts/widget';
import { webshopPosts } from './blogPosts/webshop';

export interface BlogCategory {
  slug: string;
  name_en: string;
  name_da: string;
  description_en: string;
  description_da: string;
}

/** A question answered on the post itself (rendered as the post's FAQ + FAQPage schema). */
export interface BlogFAQ {
  question_da: string;
  answer_da: string;
  question_en: string;
  answer_en: string;
}

/** An external source the post relies on, listed under the article. */
export interface BlogSource {
  title: string;
  publisher: string;
  url: string;
  /** Publication or last-checked date, YYYY-MM-DD or YYYY-MM. */
  date?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  categorySlug: string;
  title_en: string;
  title_da: string;
  excerpt_en: string;
  excerpt_da: string;
  content_en: string;
  content_da: string;
  meta_title_en: string;
  meta_title_da: string;
  meta_description_en: string;
  meta_description_da: string;
  keywords: string[];
  image_url: string;
  published: boolean;
  published_at: string;
  /** Last substantial content update (YYYY-MM-DD); drives dateModified. */
  updated_at?: string;
  /** Show the Danish example-call recording (BookingAudioDemo) above or below the post text. */
  audioDemo?: 'top' | 'bottom';
  faq?: BlogFAQ[];
  sources?: BlogSource[];
  /** Slugs of the posts to suggest under this one, most relevant first. */
  related?: string[];
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'ai-widget',
    name_en: 'AI Widget',
    name_da: 'AI Widget',
    description_en: 'Guides on AI widgets for your website: chat and voice widgets that answer, qualify and book website visitors around the clock.',
    description_da: 'Guides om AI widget og AI til hjemmeside: chat- og talewidgets, der svarer, kvalificerer og booker besøgende på din hjemmeside døgnet rundt.',
  },
  {
    slug: 'ai-inbound-outbound',
    name_en: 'AI Receptionist & Phone',
    name_da: 'AI-receptionist & telefoni',
    description_en: 'Guides on AI receptionists, AI voice agents and AI phone answering: how they work, what they cost and when a human should take over.',
    description_da: 'Guides om AI-receptionist, AI voice agents og AI-telefonpasning: hvordan det virker, hvad det koster, og hvornår et menneske skal tage over.',
  },
  {
    slug: 'ai-total-solution',
    name_en: 'AI Booking & Automation',
    name_da: 'AI-booking & automatisering',
    description_en: 'Automatic booking with AI, calendar integration, ROI and getting started — plus how Danish SMEs use AI in customer service.',
    description_da: 'Automatisk booking med AI, kalenderintegration, ROI og opstart — og hvordan danske SMV’er bruger AI i kundeservicen.',
  },
  {
    slug: 'ai-webshop',
    name_en: 'AI for Webshops',
    name_da: 'AI til Webshop',
    description_en: 'Guides on AI for webshops and Shopify: AI customer service on the website and phone that answers about products, orders, stock and delivery.',
    description_da: 'Guides om AI til webshop og Shopify: AI-kundeservice på hjemmesiden og i telefonen, der svarer om produkter, ordrer, lager og levering.',
  },
];

export const blogPosts: BlogPost[] = [
  ...receptionistPosts,
  ...voicePosts,
  ...automationPosts,
  ...widgetPosts,
  ...webshopPosts,
];

/**
 * Old post slugs that were merged into a stronger post (old -> new). Mirrored
 * as 301s in vercel.json; kept here so the app can also resolve old links.
 */
export const blogRedirects: Record<string, string> = {
  'ai-telefon-vs-telefonsvarer': 'ai-receptionist-vs-telefonpasning',
  'mindre-virksomhed-stor-virkning-ai': 'sma-virksomheder-telefon-tid-penge',
  'automatisering-uden-flere-medarbejdere': 'sma-virksomheder-telefon-tid-penge',
  'aldrig-mere-ubesvaret-opkald': 'ai-indgaaende-opkald',
  'ai-telefonassistent-fremtidens-kundeservice': 'ai-indgaaende-opkald',
  'ai-telefonassistent-klinik-udeblivelser': 'outbound-ai-opkald-paamindelser',
  'hoer-ai-telefonassistent-booke-haandvaerker': 'hvordan-lyder-en-dansk-ai-receptionist',
  'aldrig-mist-en-kunde-igen': 'komplet-ai-automatisering-widget-telefon-booking',
  'kundeoplevelse-ai-automatisering': 'komplet-ai-automatisering-widget-telefon-booking',
  'frigoer-tid-er-penge': 'roi-ai-automatisering-virksomheder',
  'ai-widget-spar-tid-spar-penge': 'roi-ai-automatisering-virksomheder',
  'ai-widget-klinik-book-tid-udenfor-aabningstid': 'totalloesning-klinik',
  'hvordan-ai-widgets-transformerer-kundeservice': 'ai-kundeservice',
  'ai-widget-integration-bedste-praksis': 'ai-widget-hjemmeside-komplet-guide',
  'vaelg-den-rigtige-ai-widget': 'ai-widget-hjemmeside-komplet-guide',
  'fordele-ai-widget-mindre-virksomheder': 'ai-widget-hjemmeside-komplet-guide',
  'miste-kunde-langsom-hjemmeside': 'ai-widget-vs-kontaktformular',
  'ai-widget-webshop-konvertering-dognet-rundt': 'widget-til-webshop',
  'totalloesning-webshop': 'widget-til-webshop',
  'ai-widget-til-shopify': 'shopify-ai-automatisering',
};

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getPublishedPosts().filter((post) => post.categorySlug === categorySlug);
}

/** Hand-picked related posts first, then the newest posts in the same category. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const picked = (post.related ?? [])
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p) && p!.id !== post.id);
  const sameCategory = getPublishedPosts().filter(
    (p) => p.categorySlug === post.categorySlug && p.id !== post.id && !picked.includes(p)
  );
  return [...picked, ...sameCategory].slice(0, limit);
}
