// Static blog content — replaces the Supabase-backed blog_posts / blog_categories tables.
// To publish a new post: add an entry to `blogPosts` below (and a category to
// `blogCategories` if needed). No database or migration required.

export interface BlogCategory {
  slug: string;
  name_en: string;
  name_da: string;
  description_en: string;
  description_da: string;
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
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'ai-widget',
    name_en: 'AI Widget',
    name_da: 'AI Widget',
    description_en: 'Guides and insights on embedding an AI chat and voice widget on your website.',
    description_da: 'Guides og indsigter om at indlejre en AI chat- og talewidget på din hjemmeside.',
  },
  {
    slug: 'ai-inbound-outbound',
    name_en: 'AI Inbound & Outbound',
    name_da: 'AI Ind- og Udgående Opkald',
    description_en: 'How AI phone assistants handle incoming and outgoing calls for your business.',
    description_da: 'Hvordan AI-telefonassistenter håndterer indgående og udgående opkald for din virksomhed.',
  },
  {
    slug: 'ai-total-solution',
    name_en: 'AI Total Solution',
    name_da: 'AI Totalløsning',
    description_en: 'Complete AI automation across widget, phone and booking in one platform.',
    description_da: 'Komplet AI-automatisering på tværs af widget, telefon og booking i én platform.',
  },
];

// PLACEHOLDER CONTENT — replace title/excerpt/content below with the real
// articles before publishing. Slugs match the existing sitemap.xml so URLs
// keep working.
export const blogPosts: BlogPost[] = [
  {
    id: 'hvordan-ai-widgets-transformerer-kundeservice',
    slug: 'hvordan-ai-widgets-transformerer-kundeservice',
    categorySlug: 'ai-widget',
    title_en: 'How AI Widgets Are Transforming Customer Service',
    title_da: 'Hvordan AI-widgets transformerer kundeservice',
    excerpt_en: 'Placeholder excerpt — replace with the real article summary.',
    excerpt_da: 'Eksempel-uddrag — udskift med det rigtige artikelresumé.',
    content_en: '<p>Placeholder content — replace with the real article.</p>',
    content_da: '<p>Eksempel-indhold — udskift med den rigtige artikel.</p>',
    meta_title_en: 'How AI Widgets Are Transforming Customer Service | AIBooking.dk',
    meta_title_da: 'Hvordan AI-widgets transformerer kundeservice | AIBooking.dk',
    meta_description_en: 'Placeholder meta description — replace before publishing.',
    meta_description_da: 'Eksempel meta-beskrivelse — udskift før publicering.',
    keywords: ['ai widget', 'kundeservice', 'automatisering'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-04-16',
  },
  {
    id: 'ai-widget-integration-bedste-praksis',
    slug: 'ai-widget-integration-bedste-praksis',
    categorySlug: 'ai-widget',
    title_en: 'AI Widget Integration Best Practices',
    title_da: 'Bedste praksis for AI-widget integration',
    excerpt_en: 'Placeholder excerpt — replace with the real article summary.',
    excerpt_da: 'Eksempel-uddrag — udskift med det rigtige artikelresumé.',
    content_en: '<p>Placeholder content — replace with the real article.</p>',
    content_da: '<p>Eksempel-indhold — udskift med den rigtige artikel.</p>',
    meta_title_en: 'AI Widget Integration Best Practices | AIBooking.dk',
    meta_title_da: 'Bedste praksis for AI-widget integration | AIBooking.dk',
    meta_description_en: 'Placeholder meta description — replace before publishing.',
    meta_description_da: 'Eksempel meta-beskrivelse — udskift før publicering.',
    keywords: ['ai widget', 'integration', 'bedste praksis'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-04-10',
  },
  {
    id: 'ai-telefonassistent-fremtidens-kundeservice',
    slug: 'ai-telefonassistent-fremtidens-kundeservice',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Phone Assistants: The Future of Customer Service',
    title_da: 'AI-telefonassistent: Fremtidens kundeservice',
    excerpt_en: 'Placeholder excerpt — replace with the real article summary.',
    excerpt_da: 'Eksempel-uddrag — udskift med det rigtige artikelresumé.',
    content_en: '<p>Placeholder content — replace with the real article.</p>',
    content_da: '<p>Eksempel-indhold — udskift med den rigtige artikel.</p>',
    meta_title_en: 'AI Phone Assistants: The Future of Customer Service | AIBooking.dk',
    meta_title_da: 'AI-telefonassistent: Fremtidens kundeservice | AIBooking.dk',
    meta_description_en: 'Placeholder meta description — replace before publishing.',
    meta_description_da: 'Eksempel meta-beskrivelse — udskift før publicering.',
    keywords: ['ai telefonassistent', 'inbound', 'outbound'],
    image_url: '/ai-voice-widget.webp',
    published: true,
    published_at: '2026-04-05',
  },
  {
    id: 'komplet-ai-automatisering-widget-telefon-booking',
    slug: 'komplet-ai-automatisering-widget-telefon-booking',
    categorySlug: 'ai-total-solution',
    title_en: 'Complete AI Automation: Widget, Phone & Booking',
    title_da: 'Komplet AI-automatisering: Widget, telefon og booking',
    excerpt_en: 'Placeholder excerpt — replace with the real article summary.',
    excerpt_da: 'Eksempel-uddrag — udskift med det rigtige artikelresumé.',
    content_en: '<p>Placeholder content — replace with the real article.</p>',
    content_da: '<p>Eksempel-indhold — udskift med den rigtige artikel.</p>',
    meta_title_en: 'Complete AI Automation: Widget, Phone & Booking | AIBooking.dk',
    meta_title_da: 'Komplet AI-automatisering: Widget, telefon og booking | AIBooking.dk',
    meta_description_en: 'Placeholder meta description — replace before publishing.',
    meta_description_da: 'Eksempel meta-beskrivelse — udskift før publicering.',
    keywords: ['ai automatisering', 'totalløsning', 'booking'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-03-28',
  },
  {
    id: 'roi-ai-automatisering-virksomheder',
    slug: 'roi-ai-automatisering-virksomheder',
    categorySlug: 'ai-total-solution',
    title_en: 'The ROI of AI Automation for Businesses',
    title_da: 'ROI af AI-automatisering for virksomheder',
    excerpt_en: 'Placeholder excerpt — replace with the real article summary.',
    excerpt_da: 'Eksempel-uddrag — udskift med det rigtige artikelresumé.',
    content_en: '<p>Placeholder content — replace with the real article.</p>',
    content_da: '<p>Eksempel-indhold — udskift med den rigtige artikel.</p>',
    meta_title_en: 'The ROI of AI Automation for Businesses | AIBooking.dk',
    meta_title_da: 'ROI af AI-automatisering for virksomheder | AIBooking.dk',
    meta_description_en: 'Placeholder meta description — replace before publishing.',
    meta_description_da: 'Eksempel meta-beskrivelse — udskift før publicering.',
    keywords: ['roi', 'ai automatisering', 'virksomheder'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-03-20',
  },
];

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

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getPublishedPosts()
    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, limit);
}
