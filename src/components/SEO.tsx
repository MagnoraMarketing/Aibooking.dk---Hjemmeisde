import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';
import { collectSeo } from '../utils/seoCollector';

const OG_LOCALES: Record<string, string> = {
  da: 'da_DK', en: 'en_US', pt: 'pt_PT', fr: 'fr_FR', es: 'es_ES',
};

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object;
  /** Danish-worded canonical path (e.g. "/funktioner", "/") used to emit
   * hreflang alternate links for every supported language. Omit on pages
   * that don't yet have a stable path (e.g. dynamic blog posts). */
  path?: string;
  /** Languages this page's content actually exists in (hreflang alternates).
   * Defaults to every supported language. */
  languages?: readonly SupportedLanguage[];
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://www.aibooking.dk/aibooking_logo.jpg',
  ogType = 'website',
  canonical,
  structuredData,
  path,
  languages = SUPPORTED_LANGUAGES,
}: SEOProps) {
  const { i18n } = useTranslation();
  const uiLang = (i18n.resolvedLanguage || i18n.language || 'da') as SupportedLanguage;
  // Content not available in the UI language is served in English.
  const lang: SupportedLanguage = languages.includes(uiLang) ? uiLang : 'en';

  const ogLocale = OG_LOCALES[lang] || 'da_DK';
  const alternates = path
    ? [
        ...languages.map((l) => ({ hreflang: l, href: localizedUrl(l, path) })),
        { hreflang: 'x-default', href: localizedUrl('da', path) },
      ]
    : [];

  // Only has an effect during build-time prerendering.
  collectSeo({ title, description, keywords, ogImage, ogType, ogLocale, canonical, structuredData, lang, alternates });

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonical || window.location.href, 'property');
    updateMetaTag('og:locale', ogLocale, 'property');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');

    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    if (structuredData) {
      // Page-specific JSON-LD lives in its own tag so the site-wide
      // Organization/WebSite graph in index.html is kept.
      let scriptElement = document.querySelector('script[type="application/ld+json"][data-seo-page]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-seo-page', '');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    } else {
      document.querySelector('script[type="application/ld+json"][data-seo-page]')?.remove();
    }

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    alternates.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps -- alternates is derived from path + languages
  }, [title, description, keywords, ogImage, ogType, ogLocale, canonical, structuredData, path, lang, languages]);

  return null;
}
