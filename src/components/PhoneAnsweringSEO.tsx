import { useTranslation } from 'react-i18next';
import { ArrowRight, PhoneCall } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { blogPostPath, buildLocalizedPath } from '../utils/localePaths';

// "AI-telefonpasning" section: a short, page-specific text block (unique per
// page, per blog category and per blog post category, in every language) that
// links to the AI phone answering product page and the after-hours guide.
// Texts live in src/i18n/locales/shared/phoneAnsweringSEO.<lang>.json.

export const PHONE_ANSWERING_GUIDE_SLUG = 'ai-telefonpasning-uden-for-aabningstid';
const REQUIREMENTS_GUIDE_SLUG = 'ai-telefonpasning-dansk-ai-receptionist';
export const PHONE_ANSWERING_PRODUCT_PATH = '/ai-receptionist';

interface PhoneAnsweringSEOProps {
  /** Key in the namespace, e.g. "pages.home", "blogCategory.ai-widget" or "blogPost.ai-webshop". */
  variant: string;
  /** Hide the product link (on the product page itself). */
  hideProductLink?: boolean;
  /** Slug of the post being shown, so the section never links a post to itself. */
  currentSlug?: string;
  /** Use a white background (for pages whose neighbouring section is grey). */
  tone?: 'white' | 'grey';
}

export default function PhoneAnsweringSEO({ variant, hideProductLink, currentSlug, tone = 'white' }: PhoneAnsweringSEOProps) {
  const { t, i18n } = useTranslation('phoneAnsweringSEO');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const block = t(variant, { returnObjects: true }) as { title?: string; text?: string[] };
  if (!block || typeof block !== 'object' || !block.title || !Array.isArray(block.text)) return null;

  const guideIsCurrent = currentSlug === PHONE_ANSWERING_GUIDE_SLUG;
  const guideSlug = guideIsCurrent ? REQUIREMENTS_GUIDE_SLUG : PHONE_ANSWERING_GUIDE_SLUG;
  const guideLabel = guideIsCurrent ? t('links.requirements') : t('links.guide');

  return (
    <section className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${tone === 'grey' ? 'bg-ink-50' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-3 py-1 mb-4">
          <PhoneCall className="w-4 h-4" aria-hidden="true" />
          {t('eyebrow')}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-5">{block.title}</h2>
        {block.text.map((paragraph, i) => (
          <p key={i} className="text-lg text-ink-600 leading-relaxed mb-4">{paragraph}</p>
        ))}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
          {!hideProductLink && (
            <a
              href={buildLocalizedPath(lang, PHONE_ANSWERING_PRODUCT_PATH)}
              className="group inline-flex items-center gap-1.5 bg-brand-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
            >
              {t('links.product')}
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          <a
            href={blogPostPath(lang, guideSlug)}
            className="group inline-flex items-center font-semibold text-brand-600 hover:text-brand-700"
          >
            {guideLabel}
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
