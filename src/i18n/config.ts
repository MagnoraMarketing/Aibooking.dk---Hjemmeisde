import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonDa from './locales/da.json';
import commonEn from './locales/en.json';
import commonPt from './locales/pt.json';
import commonFr from './locales/fr.json';

import featuresPageDa from './locales/pages/featuresPage.da.json';
import featuresPageEn from './locales/pages/featuresPage.en.json';
import featuresPagePt from './locales/pages/featuresPage.pt.json';
import featuresPageFr from './locales/pages/featuresPage.fr.json';

import industriesPageDa from './locales/pages/industriesPage.da.json';
import industriesPageEn from './locales/pages/industriesPage.en.json';
import industriesPagePt from './locales/pages/industriesPage.pt.json';
import industriesPageFr from './locales/pages/industriesPage.fr.json';

import widgetPageDa from './locales/pages/widgetPage.da.json';
import widgetPageEn from './locales/pages/widgetPage.en.json';
import widgetPagePt from './locales/pages/widgetPage.pt.json';
import widgetPageFr from './locales/pages/widgetPage.fr.json';

import ecommercePageDa from './locales/pages/ecommercePage.da.json';
import ecommercePageEn from './locales/pages/ecommercePage.en.json';
import ecommercePagePt from './locales/pages/ecommercePage.pt.json';
import ecommercePageFr from './locales/pages/ecommercePage.fr.json';

import healthcarePageDa from './locales/pages/healthcarePage.da.json';
import healthcarePageEn from './locales/pages/healthcarePage.en.json';
import healthcarePagePt from './locales/pages/healthcarePage.pt.json';
import healthcarePageFr from './locales/pages/healthcarePage.fr.json';

import craftsmanPageDa from './locales/pages/craftsmanPage.da.json';
import craftsmanPageEn from './locales/pages/craftsmanPage.en.json';
import craftsmanPagePt from './locales/pages/craftsmanPage.pt.json';
import craftsmanPageFr from './locales/pages/craftsmanPage.fr.json';

import officePageDa from './locales/pages/officePage.da.json';
import officePageEn from './locales/pages/officePage.en.json';
import officePagePt from './locales/pages/officePage.pt.json';
import officePageFr from './locales/pages/officePage.fr.json';

import integrationsPageDa from './locales/pages/integrationsPage.da.json';
import integrationsPageEn from './locales/pages/integrationsPage.en.json';
import integrationsPagePt from './locales/pages/integrationsPage.pt.json';
import integrationsPageFr from './locales/pages/integrationsPage.fr.json';

import aboutPageDa from './locales/pages/aboutPage.da.json';
import aboutPageEn from './locales/pages/aboutPage.en.json';
import aboutPagePt from './locales/pages/aboutPage.pt.json';
import aboutPageFr from './locales/pages/aboutPage.fr.json';

import contactPageDa from './locales/pages/contactPage.da.json';
import contactPageEn from './locales/pages/contactPage.en.json';
import contactPagePt from './locales/pages/contactPage.pt.json';
import contactPageFr from './locales/pages/contactPage.fr.json';

import demoPageDa from './locales/pages/demoPage.da.json';
import demoPageEn from './locales/pages/demoPage.en.json';
import demoPagePt from './locales/pages/demoPage.pt.json';
import demoPageFr from './locales/pages/demoPage.fr.json';

import termsPageDa from './locales/pages/termsPage.da.json';
import termsPageEn from './locales/pages/termsPage.en.json';
import termsPagePt from './locales/pages/termsPage.pt.json';
import termsPageFr from './locales/pages/termsPage.fr.json';

import privacyPageDa from './locales/pages/privacyPage.da.json';
import privacyPageEn from './locales/pages/privacyPage.en.json';
import privacyPagePt from './locales/pages/privacyPage.pt.json';
import privacyPageFr from './locales/pages/privacyPage.fr.json';

import blogPageDa from './locales/pages/blogPage.da.json';
import blogPageEn from './locales/pages/blogPage.en.json';
import blogPagePt from './locales/pages/blogPage.pt.json';
import blogPageFr from './locales/pages/blogPage.fr.json';

import blogCategoryPageDa from './locales/pages/blogCategoryPage.da.json';
import blogCategoryPageEn from './locales/pages/blogCategoryPage.en.json';
import blogCategoryPagePt from './locales/pages/blogCategoryPage.pt.json';
import blogCategoryPageFr from './locales/pages/blogCategoryPage.fr.json';

import blogPostPageDa from './locales/pages/blogPostPage.da.json';
import blogPostPageEn from './locales/pages/blogPostPage.en.json';
import blogPostPagePt from './locales/pages/blogPostPage.pt.json';
import blogPostPageFr from './locales/pages/blogPostPage.fr.json';

export const SUPPORTED_LANGUAGES = ['da', 'en', 'pt', 'fr'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// URL path prefix per language. Danish has none (it's the default/canonical
// language and keeps the existing un-prefixed SEO URLs).
export const LANGUAGE_PATH_PREFIX: Record<SupportedLanguage, string> = {
  da: '',
  en: '/en',
  pt: '/pt',
  fr: '/fr',
};

// Every page/section beyond the shared chrome ('common') gets its own
// namespace so translation files stay small, page conversions don't create
// merge conflicts, and unrelated pages can't collide on the same key.
const PAGE_NAMESPACES = [
  'featuresPage', 'industriesPage', 'widgetPage', 'ecommercePage',
  'healthcarePage', 'craftsmanPage', 'officePage', 'integrationsPage',
  'aboutPage', 'contactPage', 'demoPage', 'termsPage', 'privacyPage',
  'blogPage', 'blogCategoryPage', 'blogPostPage',
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common', ...PAGE_NAMESPACES],
    defaultNS: 'common',
    resources: {
      da: {
        common: commonDa,
        featuresPage: featuresPageDa,
        industriesPage: industriesPageDa,
        widgetPage: widgetPageDa,
        ecommercePage: ecommercePageDa,
        healthcarePage: healthcarePageDa,
        craftsmanPage: craftsmanPageDa,
        officePage: officePageDa,
        integrationsPage: integrationsPageDa,
        aboutPage: aboutPageDa,
        contactPage: contactPageDa,
        demoPage: demoPageDa,
        termsPage: termsPageDa,
        privacyPage: privacyPageDa,
        blogPage: blogPageDa,
        blogCategoryPage: blogCategoryPageDa,
        blogPostPage: blogPostPageDa,
      },
      en: {
        common: commonEn,
        featuresPage: featuresPageEn,
        industriesPage: industriesPageEn,
        widgetPage: widgetPageEn,
        ecommercePage: ecommercePageEn,
        healthcarePage: healthcarePageEn,
        craftsmanPage: craftsmanPageEn,
        officePage: officePageEn,
        integrationsPage: integrationsPageEn,
        aboutPage: aboutPageEn,
        contactPage: contactPageEn,
        demoPage: demoPageEn,
        termsPage: termsPageEn,
        privacyPage: privacyPageEn,
        blogPage: blogPageEn,
        blogCategoryPage: blogCategoryPageEn,
        blogPostPage: blogPostPageEn,
      },
      pt: {
        common: commonPt,
        featuresPage: featuresPagePt,
        industriesPage: industriesPagePt,
        widgetPage: widgetPagePt,
        ecommercePage: ecommercePagePt,
        healthcarePage: healthcarePagePt,
        craftsmanPage: craftsmanPagePt,
        officePage: officePagePt,
        integrationsPage: integrationsPagePt,
        aboutPage: aboutPagePt,
        contactPage: contactPagePt,
        demoPage: demoPagePt,
        termsPage: termsPagePt,
        privacyPage: privacyPagePt,
        blogPage: blogPagePt,
        blogCategoryPage: blogCategoryPagePt,
        blogPostPage: blogPostPagePt,
      },
      fr: {
        common: commonFr,
        featuresPage: featuresPageFr,
        industriesPage: industriesPageFr,
        widgetPage: widgetPageFr,
        ecommercePage: ecommercePageFr,
        healthcarePage: healthcarePageFr,
        craftsmanPage: craftsmanPageFr,
        officePage: officePageFr,
        integrationsPage: integrationsPageFr,
        aboutPage: aboutPageFr,
        contactPage: contactPageFr,
        demoPage: demoPageFr,
        termsPage: termsPageFr,
        privacyPage: privacyPageFr,
        blogPage: blogPageFr,
        blogCategoryPage: blogCategoryPageFr,
        blogPostPage: blogPostPageFr,
      },
    },
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    load: 'languageOnly',
    fallbackLng: 'da',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
