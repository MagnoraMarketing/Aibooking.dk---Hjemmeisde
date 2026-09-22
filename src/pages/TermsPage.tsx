import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import type { SupportedLanguage } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';
import type { NavigatePage } from '../types/navigation';

// Danish-worded canonical path; SEO turns it into per-language hreflang URLs.
const PAGE_PATH = '/vilkaar';

interface TermsPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface TermsSection {
  heading: string;
  body?: string;
  items?: string[];
}

function TermsPage({ onNavigate }: TermsPageProps) {
  const { t, i18n } = useTranslation('termsPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const sections = t('sections', { returnObjects: true }) as TermsSection[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, PAGE_PATH)}
        path={PAGE_PATH}
      />
      <Navigation onNavigate={onNavigate} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-ink-600">
              {t('subtitle')}
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-ink-700 leading-relaxed mb-8">
              {t('intro')}
            </p>

            {sections.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                  {section.heading}
                </h2>
                {section.items ? (
                  <ul className="list-disc pl-6 text-ink-700 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-ink-700 leading-relaxed">
                    {section.body}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default TermsPage;
