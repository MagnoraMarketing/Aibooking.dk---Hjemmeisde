import type { SupportedLanguage } from '../i18n/config';

// Head tags a page's <SEO> declares. The browser applies them in an effect;
// the build-time prerender (src/entry-server.tsx) collects them during render
// instead, since effects don't run on the server.
export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  ogImage: string;
  ogType: string;
  ogLocale: string;
  canonical?: string;
  structuredData?: object;
  lang: SupportedLanguage;
  alternates: { hreflang: string; href: string }[];
}

let collector: ((data: SeoData) => void) | null = null;

export function setSeoCollector(fn: ((data: SeoData) => void) | null) {
  collector = fn;
}

export function collectSeo(data: SeoData) {
  collector?.(data);
}
