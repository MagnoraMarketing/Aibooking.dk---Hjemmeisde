import { useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';

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
}: SEOProps) {
  useEffect(() => {
    document.title = title;

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
    updateMetaTag('og:url', window.location.href, 'property');

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
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (path) {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang === 'da' ? 'da' : lang);
        link.setAttribute('href', localizedUrl(lang, path));
        document.head.appendChild(link);
      });
      const xDefault = document.createElement('link');
      xDefault.setAttribute('rel', 'alternate');
      xDefault.setAttribute('hreflang', 'x-default');
      xDefault.setAttribute('href', localizedUrl('da', path));
      document.head.appendChild(xDefault);
    }
  }, [title, description, keywords, ogImage, ogType, canonical, structuredData, path]);

  return null;
}
