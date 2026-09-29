import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, MessageSquare, PhoneCall, ShoppingBag, LayoutGrid, Building2, Plug } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';

// Shared conversion block for every blog page (overview, category and post):
// a primary trial/demo CTA plus internal links to the main product pages, so
// every article passes readers — and link equity — on to the money pages.

const LINKS = [
  { key: 'widget', path: '/widget', icon: MessageSquare },
  { key: 'inbound', path: '/ind-og-udgaaende-opkald', icon: PhoneCall },
  { key: 'webshop', path: '/webshop', icon: ShoppingBag },
  { key: 'features', path: '/funktioner', icon: LayoutGrid },
  { key: 'industries', path: '/brancher', icon: Building2 },
  { key: 'integrations', path: '/integrationer', icon: Plug },
] as const;

// Put the product page matching the blog category first.
const CATEGORY_FIRST: Record<string, string> = {
  'ai-widget': 'widget',
  'ai-inbound-outbound': 'inbound',
  'ai-webshop': 'webshop',
};

interface BlogCTAProps {
  categorySlug?: string;
}

export default function BlogCTA({ categorySlug }: BlogCTAProps) {
  const { t, i18n } = useTranslation('blogCta');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const href = (path: string) => buildLocalizedPath(lang, path);

  const first = categorySlug ? CATEGORY_FIRST[categorySlug] : undefined;
  const links = first
    ? [...LINKS.filter((l) => l.key === first), ...LINKS.filter((l) => l.key !== first)]
    : LINKS;

  return (
    <section className="mt-16 p-6 sm:p-10 bg-gradient-to-br from-brand-50 via-brand-50 to-indigo-50 rounded-3xl border-2 border-brand-100 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-brand-600" />
        <h2 className="text-2xl font-bold text-ink-900">{t('title')}</h2>
      </div>
      <p className="text-lg text-ink-700 mb-6 leading-relaxed">{t('description')}</p>
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <a
          href={href('/proeveperiode')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
        >
          {t('primary')}
          <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href={href('/demo')}
          className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 border-2 border-brand-200 px-8 py-4 rounded-xl font-bold hover:border-brand-400 transition-all"
        >
          {t('secondary')}
        </a>
      </div>

      <h3 className="text-lg font-bold text-ink-900 mb-4">{t('exploreTitle')}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map(({ key, path, icon: Icon }) => (
          <a
            key={key}
            href={href(path)}
            className="group flex items-start gap-3 bg-white rounded-xl p-4 border border-ink-100 hover:border-brand-300 hover:shadow-md transition-all"
          >
            <Icon className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
            <span>
              <span className="block font-semibold text-ink-900 group-hover:text-brand-700">
                {t(`links.${key}.title`)}
              </span>
              <span className="block text-sm text-ink-600">{t(`links.${key}.desc`)}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
