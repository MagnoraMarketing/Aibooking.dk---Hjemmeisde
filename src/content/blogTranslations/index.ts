// Blog posts in the site languages beyond Danish and English, one folder per
// language and one file per topic cluster (mirroring src/content/blogPosts).
// Every published post needs an entry in each language;
// scripts/generate-sitemap.js fails the build if one is missing.
//
// Each language is a separate chunk, loaded only when a visitor uses that
// language, so Danish and English visitors don't download the other texts.
import type { BlogTranslations } from './types';

export type TranslatedBlogLanguage = 'es' | 'de' | 'fr';

const loaders: Record<TranslatedBlogLanguage, () => Promise<{ default: BlogTranslations }>> = {
  es: () => import('./es'),
  de: () => import('./de'),
  fr: () => import('./fr'),
};

const loaded: Partial<Record<TranslatedBlogLanguage, BlogTranslations>> = {};

const isTranslated = (lang: string): lang is TranslatedBlogLanguage => lang in loaders;

/** The language's translations, or undefined until loadBlogTranslations(lang) has finished. */
export function getBlogTranslations(lang: TranslatedBlogLanguage): BlogTranslations | undefined {
  return loaded[lang];
}

/** Loads a language's blog translations; a no-op for Danish, English and already loaded languages. */
export async function loadBlogTranslations(lang: string): Promise<void> {
  if (!isTranslated(lang) || loaded[lang]) return;
  loaded[lang] = (await loaders[lang]()).default;
}
