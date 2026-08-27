import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonDa from './locales/da.json';
import commonEn from './locales/en.json';
import commonPt from './locales/pt.json';
import commonFr from './locales/fr.json';
import commonEs from './locales/es.json';

import featuresPageDa from './locales/pages/featuresPage.da.json';
import featuresPageEn from './locales/pages/featuresPage.en.json';
import featuresPagePt from './locales/pages/featuresPage.pt.json';
import featuresPageFr from './locales/pages/featuresPage.fr.json';
import featuresPageEs from './locales/pages/featuresPage.es.json';

import industriesPageDa from './locales/pages/industriesPage.da.json';
import industriesPageEn from './locales/pages/industriesPage.en.json';
import industriesPagePt from './locales/pages/industriesPage.pt.json';
import industriesPageFr from './locales/pages/industriesPage.fr.json';
import industriesPageEs from './locales/pages/industriesPage.es.json';

import widgetPageDa from './locales/pages/widgetPage.da.json';
import widgetPageEn from './locales/pages/widgetPage.en.json';
import widgetPagePt from './locales/pages/widgetPage.pt.json';
import widgetPageFr from './locales/pages/widgetPage.fr.json';
import widgetPageEs from './locales/pages/widgetPage.es.json';

import ecommercePageDa from './locales/pages/ecommercePage.da.json';
import ecommercePageEn from './locales/pages/ecommercePage.en.json';
import ecommercePagePt from './locales/pages/ecommercePage.pt.json';
import ecommercePageFr from './locales/pages/ecommercePage.fr.json';
import ecommercePageEs from './locales/pages/ecommercePage.es.json';

import healthcarePageDa from './locales/pages/healthcarePage.da.json';
import healthcarePageEn from './locales/pages/healthcarePage.en.json';
import healthcarePagePt from './locales/pages/healthcarePage.pt.json';
import healthcarePageFr from './locales/pages/healthcarePage.fr.json';
import healthcarePageEs from './locales/pages/healthcarePage.es.json';

import craftsmanPageDa from './locales/pages/craftsmanPage.da.json';
import craftsmanPageEn from './locales/pages/craftsmanPage.en.json';
import craftsmanPagePt from './locales/pages/craftsmanPage.pt.json';
import craftsmanPageFr from './locales/pages/craftsmanPage.fr.json';
import craftsmanPageEs from './locales/pages/craftsmanPage.es.json';

import officePageDa from './locales/pages/officePage.da.json';
import officePageEn from './locales/pages/officePage.en.json';
import officePagePt from './locales/pages/officePage.pt.json';
import officePageFr from './locales/pages/officePage.fr.json';
import officePageEs from './locales/pages/officePage.es.json';

import integrationsPageDa from './locales/pages/integrationsPage.da.json';
import integrationsPageEn from './locales/pages/integrationsPage.en.json';
import integrationsPagePt from './locales/pages/integrationsPage.pt.json';
import integrationsPageFr from './locales/pages/integrationsPage.fr.json';
import integrationsPageEs from './locales/pages/integrationsPage.es.json';

import aboutPageDa from './locales/pages/aboutPage.da.json';
import aboutPageEn from './locales/pages/aboutPage.en.json';
import aboutPagePt from './locales/pages/aboutPage.pt.json';
import aboutPageFr from './locales/pages/aboutPage.fr.json';
import aboutPageEs from './locales/pages/aboutPage.es.json';

import contactPageDa from './locales/pages/contactPage.da.json';
import contactPageEn from './locales/pages/contactPage.en.json';
import contactPagePt from './locales/pages/contactPage.pt.json';
import contactPageFr from './locales/pages/contactPage.fr.json';
import contactPageEs from './locales/pages/contactPage.es.json';

import demoPageDa from './locales/pages/demoPage.da.json';
import demoPageEn from './locales/pages/demoPage.en.json';
import demoPagePt from './locales/pages/demoPage.pt.json';
import demoPageFr from './locales/pages/demoPage.fr.json';
import demoPageEs from './locales/pages/demoPage.es.json';

import termsPageDa from './locales/pages/termsPage.da.json';
import termsPageEn from './locales/pages/termsPage.en.json';
import termsPagePt from './locales/pages/termsPage.pt.json';
import termsPageFr from './locales/pages/termsPage.fr.json';
import termsPageEs from './locales/pages/termsPage.es.json';

import privacyPageDa from './locales/pages/privacyPage.da.json';
import privacyPageEn from './locales/pages/privacyPage.en.json';
import privacyPagePt from './locales/pages/privacyPage.pt.json';
import privacyPageFr from './locales/pages/privacyPage.fr.json';
import privacyPageEs from './locales/pages/privacyPage.es.json';

import blogPageDa from './locales/pages/blogPage.da.json';
import blogPageEn from './locales/pages/blogPage.en.json';
import blogPagePt from './locales/pages/blogPage.pt.json';
import blogPageFr from './locales/pages/blogPage.fr.json';
import blogPageEs from './locales/pages/blogPage.es.json';

import blogCategoryPageDa from './locales/pages/blogCategoryPage.da.json';
import blogCategoryPageEn from './locales/pages/blogCategoryPage.en.json';
import blogCategoryPagePt from './locales/pages/blogCategoryPage.pt.json';
import blogCategoryPageFr from './locales/pages/blogCategoryPage.fr.json';
import blogCategoryPageEs from './locales/pages/blogCategoryPage.es.json';

import blogPostPageDa from './locales/pages/blogPostPage.da.json';
import blogPostPageEn from './locales/pages/blogPostPage.en.json';
import blogPostPagePt from './locales/pages/blogPostPage.pt.json';
import blogPostPageFr from './locales/pages/blogPostPage.fr.json';
import blogPostPageEs from './locales/pages/blogPostPage.es.json';

import inboundOutboundPageDa from './locales/pages/inboundOutboundPage.da.json';
import inboundOutboundPageEn from './locales/pages/inboundOutboundPage.en.json';
import inboundOutboundPagePt from './locales/pages/inboundOutboundPage.pt.json';
import inboundOutboundPageFr from './locales/pages/inboundOutboundPage.fr.json';
import inboundOutboundPageEs from './locales/pages/inboundOutboundPage.es.json';

import clinicDashboardDa from './locales/shared/clinicDashboard.da.json';
import clinicDashboardEn from './locales/shared/clinicDashboard.en.json';
import clinicDashboardPt from './locales/shared/clinicDashboard.pt.json';
import clinicDashboardFr from './locales/shared/clinicDashboard.fr.json';
import clinicDashboardEs from './locales/shared/clinicDashboard.es.json';

import trialPageDa from './locales/pages/trialPage.da.json';
import trialPageEn from './locales/pages/trialPage.en.json';
import trialPagePt from './locales/pages/trialPage.pt.json';
import trialPageFr from './locales/pages/trialPage.fr.json';
import trialPageEs from './locales/pages/trialPage.es.json';

export const SUPPORTED_LANGUAGES = ['da', 'en', 'pt', 'fr', 'es'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// URL path prefix per language. Danish has none (it's the default/canonical
// language and keeps the existing un-prefixed SEO URLs).
export const LANGUAGE_PATH_PREFIX: Record<SupportedLanguage, string> = {
  da: '',
  en: '/en',
  pt: '/pt',
  fr: '/fr',
  es: '/es',
};

// Every page/section beyond the shared chrome ('common') gets its own
// namespace so translation files stay small, page conversions don't create
// merge conflicts, and unrelated pages can't collide on the same key.
const PAGE_NAMESPACES = [
  'featuresPage', 'industriesPage', 'widgetPage', 'ecommercePage',
  'healthcarePage', 'craftsmanPage', 'officePage', 'integrationsPage',
  'aboutPage', 'contactPage', 'demoPage', 'termsPage', 'privacyPage',
  'blogPage', 'blogCategoryPage', 'blogPostPage', 'trialPage',
  'inboundOutboundPage',
] as const;

// Namespaces for components rendered on more than one page, so the two copies
// can't drift apart.
const SHARED_NAMESPACES = ['clinicDashboard'] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common', ...PAGE_NAMESPACES, ...SHARED_NAMESPACES],
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
        trialPage: trialPageDa,
        inboundOutboundPage: inboundOutboundPageDa,
        clinicDashboard: clinicDashboardDa,
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
        trialPage: trialPageEn,
        inboundOutboundPage: inboundOutboundPageEn,
        clinicDashboard: clinicDashboardEn,
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
        trialPage: trialPagePt,
        inboundOutboundPage: inboundOutboundPagePt,
        clinicDashboard: clinicDashboardPt,
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
        trialPage: trialPageFr,
        inboundOutboundPage: inboundOutboundPageFr,
        clinicDashboard: clinicDashboardFr,
      },
      es: {
        common: commonEs,
        featuresPage: featuresPageEs,
        industriesPage: industriesPageEs,
        widgetPage: widgetPageEs,
        ecommercePage: ecommercePageEs,
        healthcarePage: healthcarePageEs,
        craftsmanPage: craftsmanPageEs,
        officePage: officePageEs,
        integrationsPage: integrationsPageEs,
        aboutPage: aboutPageEs,
        contactPage: contactPageEs,
        demoPage: demoPageEs,
        termsPage: termsPageEs,
        privacyPage: privacyPageEs,
        blogPage: blogPageEs,
        blogCategoryPage: blogCategoryPageEs,
        blogPostPage: blogPostPageEs,
        trialPage: trialPageEs,
        inboundOutboundPage: inboundOutboundPageEs,
        clinicDashboard: clinicDashboardEs,
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
