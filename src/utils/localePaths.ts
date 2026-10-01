import { LANGUAGE_PATH_PREFIX, SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/config';

// Danish has no prefix (canonical/default language); en/pt/fr are prefixed
// with /en, /pt, /fr. Given a raw pathname, split it into the language it
// specifies (if any) and the underlying Danish-worded path.
export function splitLocalizedPath(pathname: string): { lang: SupportedLanguage; path: string } {
  for (const lang of SUPPORTED_LANGUAGES) {
    const prefix = LANGUAGE_PATH_PREFIX[lang];
    if (!prefix) continue;
    if (pathname === prefix) return { lang, path: '/' };
    if (pathname.startsWith(`${prefix}/`)) return { lang, path: pathname.slice(prefix.length) };
  }
  return { lang: 'da', path: pathname };
}

// Given a language and a Danish-worded path (e.g. "/funktioner"), build the
// full localized path (e.g. "/en/funktioner", or "/funktioner" for Danish).
export function buildLocalizedPath(lang: SupportedLanguage, path: string): string {
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  if (!prefix) return path;
  return path === '/' ? prefix : `${prefix}${path}`;
}

export function localizedUrl(lang: SupportedLanguage, path: string): string {
  return `https://www.aibooking.dk${buildLocalizedPath(lang, path)}`;
}

// Blog posts only exist in Danish and English (other languages read the
// English text), so link pt/fr/es readers straight to the English post
// instead of a /pt/blog/... URL that isn't published.
export function blogPostPath(lang: SupportedLanguage, slug: string): string {
  return buildLocalizedPath(lang === 'da' ? 'da' : 'en', `/blog/${slug}`);
}
