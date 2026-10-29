// Static blog content. Posts live in src/content/blogPosts/ (one file per
// topic cluster) and are combined here. To publish a new post: add an entry to
// the matching file (and a category to `blogCategories` if needed). No
// database required. scripts/generate-sitemap.js and
// scripts/generate-blog-covers.js read the same files.
//
// Posts are written in Danish and English; the Spanish, German and French
// versions live in src/content/blogTranslations/ (see localizePost below).
//
// When posts are merged, add the old slug to `blogRedirects` below AND to the
// "redirects" list in vercel.json so the old URL 301s to the surviving post.

import { receptionistPosts } from './blogPosts/receptionist';
import { voicePosts } from './blogPosts/voice';
import { automationPosts } from './blogPosts/automation';
import { widgetPosts } from './blogPosts/widget';
import { webshopPosts } from './blogPosts/webshop';
import { blogTranslations } from './blogTranslations';
import type { SupportedLanguage } from '../i18n/config';

export interface BlogCategory {
  slug: string;
  name: Record<SupportedLanguage, string>;
  description: Record<SupportedLanguage, string>;
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
    name: {
      da: 'AI Widget',
      en: 'AI Widget',
      es: 'Widget de IA',
      de: 'KI-Widget',
      fr: 'Widget IA',
    },
    description: {
      da: 'Guides om AI widget og AI til hjemmeside: chat- og talewidgets, der svarer, kvalificerer og booker besøgende på din hjemmeside døgnet rundt.',
      en: 'Guides on AI widgets for your website: chat and voice widgets that answer, qualify and book website visitors around the clock.',
      es: 'Guías sobre widgets de IA para tu web: widgets de chat y voz que responden, cualifican y reservan a los visitantes de tu web las 24 horas.',
      de: 'Ratgeber zu KI-Widgets für Ihre Website: Chat- und Sprach-Widgets, die Website-Besucher rund um die Uhr beantworten, qualifizieren und Termine buchen.',
      fr: 'Guides sur les widgets IA pour votre site web : des widgets de chat et vocaux qui répondent, qualifient et réservent vos visiteurs 24 h/24.',
    },
  },
  {
    slug: 'ai-inbound-outbound',
    name: {
      da: 'AI-receptionist & telefoni',
      en: 'AI Receptionist & Phone',
      es: 'Recepcionista IA y teléfono',
      de: 'KI-Rezeption & Telefon',
      fr: 'Réceptionniste IA et téléphone',
    },
    description: {
      da: 'Guides om AI-receptionist, AI voice agents og AI-telefonpasning: hvordan det virker, hvad det koster, og hvornår et menneske skal tage over.',
      en: 'Guides on AI receptionists, AI voice agents and AI phone answering: how they work, what they cost and when a human should take over.',
      es: 'Guías sobre recepcionistas con IA, agentes de voz con IA y atención telefónica con IA: cómo funcionan, cuánto cuestan y cuándo debe intervenir una persona.',
      de: 'Ratgeber zu KI-Rezeptionisten, KI-Voice-Agents und KI-Telefonservice: wie sie funktionieren, was sie kosten und wann ein Mensch übernehmen sollte.',
      fr: 'Guides sur les réceptionnistes IA, les agents vocaux IA et la permanence téléphonique par IA : fonctionnement, coût et quand un humain doit prendre le relais.',
    },
  },
  {
    slug: 'ai-total-solution',
    name: {
      da: 'AI-booking & automatisering',
      en: 'AI Booking & Automation',
      es: 'Reservas y automatización con IA',
      de: 'KI-Buchung & Automatisierung',
      fr: 'Réservation et automatisation IA',
    },
    description: {
      da: 'Automatisk booking med AI, kalenderintegration, ROI og opstart — og hvordan danske SMV’er bruger AI i kundeservicen.',
      en: 'Automatic booking with AI, calendar integration, ROI and getting started — plus how Danish SMEs use AI in customer service.',
      es: 'Reservas automáticas con IA, integración de calendarios, ROI y puesta en marcha, y cómo las pymes usan la IA en la atención al cliente.',
      de: 'Automatische Terminbuchung mit KI, Kalenderintegration, ROI und der Einstieg – und wie kleine und mittlere Unternehmen KI im Kundenservice einsetzen.',
      fr: 'Réservation automatique par IA, intégration d’agenda, ROI et mise en route — et comment les PME utilisent l’IA dans leur service client.',
    },
  },
  {
    slug: 'ai-webshop',
    name: {
      da: 'AI til Webshop',
      en: 'AI for Webshops',
      es: 'IA para tiendas online',
      de: 'KI für Onlineshops',
      fr: 'IA pour boutiques en ligne',
    },
    description: {
      da: 'Guides om AI til webshop og Shopify: AI-kundeservice på hjemmesiden og i telefonen, der svarer om produkter, ordrer, lager og levering.',
      en: 'Guides on AI for webshops and Shopify: AI customer service on the website and phone that answers about products, orders, stock and delivery.',
      es: 'Guías sobre IA para tiendas online y Shopify: atención al cliente con IA en la web y por teléfono que responde sobre productos, pedidos, stock y envíos.',
      de: 'Ratgeber zu KI für Onlineshops und Shopify: KI-Kundenservice auf der Website und am Telefon, der Fragen zu Produkten, Bestellungen, Lager und Lieferung beantwortet.',
      fr: 'Guides sur l’IA pour les boutiques en ligne et Shopify : un service client IA sur le site et au téléphone qui répond sur les produits, commandes, stocks et livraisons.',
    },
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

/** A post's text in one site language. */
export interface LocalizedPost {
  title: string;
  excerpt: string;
  content: string;
  meta_title: string;
  meta_description: string;
  faq: { question: string; answer: string }[];
}

/**
 * The post in `lang`. Danish and English are written on the post itself; the
 * other languages come from src/content/blogTranslations, falling back to
 * English for a post that hasn't been translated yet.
 */
export function localizePost(post: BlogPost, lang: SupportedLanguage): LocalizedPost {
  if (lang === 'da' || lang === 'en') {
    return {
      title: post[`title_${lang}`],
      excerpt: post[`excerpt_${lang}`],
      content: post[`content_${lang}`],
      meta_title: post[`meta_title_${lang}`],
      meta_description: post[`meta_description_${lang}`],
      faq: (post.faq ?? []).map((f) => ({ question: f[`question_${lang}`], answer: f[`answer_${lang}`] })),
    };
  }
  const translation = blogTranslations[lang][post.slug];
  if (!translation) return localizePost(post, 'en');
  return { ...translation, faq: translation.faq ?? localizePost(post, 'en').faq };
}

/** Whether the post's text exists in `lang` (rather than falling back to English). */
export function isPostAvailableIn(post: BlogPost, lang: SupportedLanguage): boolean {
  return lang === 'da' || lang === 'en' || Boolean(blogTranslations[lang][post.slug]);
}

/** Locale for formatting post dates. */
export const DATE_LOCALES: Record<SupportedLanguage, string> = {
  da: 'da-DK',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
  fr: 'fr-FR',
};
