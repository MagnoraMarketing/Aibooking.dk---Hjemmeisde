import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import da from './locales/da.json';
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';

export const SUPPORTED_LANGUAGES = ['da', 'en', 'es', 'pt'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// URL path prefix per language. Danish has none (it's the default/canonical
// language and keeps the existing un-prefixed SEO URLs).
export const LANGUAGE_PATH_PREFIX: Record<SupportedLanguage, string> = {
  da: '',
  en: '/en',
  es: '/es',
  pt: '/pt',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      da: { translation: da },
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
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
