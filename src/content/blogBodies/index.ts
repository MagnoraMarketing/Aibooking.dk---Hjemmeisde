// The Danish and English article text of every post. It is the bulk of the
// blog data and only blog post pages need it, so each language is a separate
// chunk loaded on demand (like the es/de/fr translations, which carry their
// own text). The rest of each post (title, excerpt, FAQ, dates...) stays in
// src/content/blogPosts, so listings and related-post links don't need this.
type BodyLanguage = 'da' | 'en';

const loaders: Record<BodyLanguage, () => Promise<{ default: Record<string, string> }>> = {
  da: () => import('./da'),
  en: () => import('./en'),
};

const loaded: Partial<Record<BodyLanguage, Record<string, string>>> = {};

const hasBodies = (lang: string): lang is BodyLanguage => lang in loaders;

/** The post's article HTML, or undefined until loadBlogBodies(lang) has finished. */
export function getBlogBody(lang: BodyLanguage, slug: string): string | undefined {
  return loaded[lang]?.[slug];
}

/** Loads a language's article texts; a no-op for other languages and once loaded. */
export async function loadBlogBodies(lang: string): Promise<void> {
  if (!hasBodies(lang) || loaded[lang]) return;
  loaded[lang] = (await loaders[lang]()).default;
}
