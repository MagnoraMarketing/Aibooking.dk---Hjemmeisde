import i18n, { type BackendModule, type ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const SUPPORTED_LANGUAGES = ['da', 'en', 'es', 'de', 'fr'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// URL path prefix per language. Danish has none (it's the default/canonical
// language and keeps the existing un-prefixed SEO URLs).
export const LANGUAGE_PATH_PREFIX: Record<SupportedLanguage, string> = {
  da: '',
  en: '/en',
  es: '/es',
  de: '/de',
  fr: '/fr',
};

// Every page/section beyond the shared chrome ('common') gets its own
// namespace so translation files stay small, page conversions don't create
// merge conflicts, and unrelated pages can't collide on the same key.
const PAGE_NAMESPACES = [
  'featuresPage', 'industriesPage', 'widgetPage', 'ecommercePage',
  'healthcarePage', 'craftsmanPage', 'officePage', 'integrationsPage',
  'aboutPage', 'contactPage', 'demoPage', 'termsPage', 'privacyPage',
  'blogPage', 'blogCategoryPage', 'blogPostPage', 'trialPage',
  'inboundOutboundPage', 'appPage', 'salonPage', 'shopifyPage', 'restaurantPage', 'aiReceptionistPage',
] as const;

// Namespaces for components rendered on more than one page, so the two copies
// can't drift apart.
const SHARED_NAMESPACES = ['clinicDashboard', 'agencyDashboard', 'widgetCapabilitiesSEO', 'phoneAnsweringSEO', 'blogCta', 'pageHero', 'audioDemo', 'priceEstimate'] as const;

// Each language's texts are a separate chunk (src/i18n/resources/<lang>.ts),
// fetched only when a page is shown in that language, so a visitor downloads
// one language instead of all five. Every language has every key, so there is
// no fallback language to download alongside it.
const loaders: Record<SupportedLanguage, () => Promise<{ default: ResourceLanguage }>> = {
  da: () => import('./resources/da'),
  en: () => import('./resources/en'),
  es: () => import('./resources/es'),
  de: () => import('./resources/de'),
  fr: () => import('./resources/fr'),
};

const languageBackend: BackendModule = {
  type: 'backend',
  init() {},
  read(language, namespace, callback) {
    const load = loaders[language as SupportedLanguage];
    if (!load) {
      callback(null, {});
      return;
    }
    load().then(
      (resources) => callback(null, (resources.default[namespace] as Record<string, unknown>) ?? {}),
      (error: Error) => callback(error, false),
    );
  },
};

// The URL decides the language (/en/... is English, unprefixed is Danish):
// src/main.tsx and src/entry-server.tsx switch to it and wait for its texts
// before the first render. A visitor whose browser prefers another language
// is offered that version by <LanguageSuggestion>, never redirected.
function languageInUrl(): SupportedLanguage {
  if (typeof window === 'undefined') return 'da';
  const { pathname } = window.location;
  return SUPPORTED_LANGUAGES.find((lang) => {
    const prefix = LANGUAGE_PATH_PREFIX[lang];
    return prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`));
  }) ?? 'da';
}

export const i18nReady = i18n
  .use(languageBackend)
  .use(initReactI18next)
  .init({
    lng: languageInUrl(),
    ns: ['common', ...PAGE_NAMESPACES, ...SHARED_NAMESPACES],
    defaultNS: 'common',
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    load: 'languageOnly',
    fallbackLng: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      // Texts are loaded before the first render and before a language
      // switch takes effect, so there is nothing to suspend on.
      useSuspense: false,
    },
  });

export default i18n;
