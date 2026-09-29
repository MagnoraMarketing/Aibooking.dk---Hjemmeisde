import { useTranslation } from 'react-i18next';
import type { NavigatePage } from '../types/navigation';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from './localePaths';

// Danish-worded path for every page reachable via `onNavigate`. Keep in sync
// with pathMap/pageMap in src/App.tsx.
export const PAGE_PATHS: Record<NavigatePage, string> = {
  home: '/', demo: '/demo', features: '/funktioner', widget: '/widget',
  'inbound-outbound': '/ind-og-udgaaende-opkald', integrations: '/integrationer',
  industries: '/brancher', healthcare: '/klinik', craftsman: '/haandvaerker',
  office: '/kontor', ecommerce: '/webshop', contact: '/kontakt',
  about: '/om-aibooking', terms: '/vilkaar', privacy: '/privatlivspolitik',
  blog: '/blog', trial: '/proeveperiode',
};

export function useLocalizedHref() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const lang = SUPPORTED_LANGUAGES.includes(current) ? current : 'da';
  return (path: string) => buildLocalizedPath(lang, path);
}
