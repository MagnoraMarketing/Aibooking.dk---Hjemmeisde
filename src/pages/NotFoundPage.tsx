import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageLink from '../components/PageLink';
import type { NavigatePage } from '../types/navigation';

interface NotFoundPageProps {
  onNavigate: (page: NavigatePage) => void;
}

// Shown for any URL that isn't a page. On Vercel the prerendered copy is
// dist/404.html, served with a real 404 status (see scripts/prerender.js), so
// search engines drop dead URLs instead of indexing soft-404s.
function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('notFound.seo.title')} description={t('notFound.seo.description')} noindex />
      <Navigation onNavigate={onNavigate} />
      <main className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('notFound.label')}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-ink-900">{t('notFound.heading')}</h1>
          <p className="mt-6 text-lg text-ink-600">{t('notFound.text')}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <PageLink
              page="home"
              onClick={() => onNavigate('home')}
              className="inline-flex justify-center px-6 py-3 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700"
            >
              {t('notFound.home')}
            </PageLink>
            <PageLink
              page="blog"
              onClick={() => onNavigate('blog')}
              className="inline-flex justify-center px-6 py-3 rounded-full bg-ink-100 text-ink-900 font-semibold hover:bg-ink-200"
            >
              {t('notFound.blog')}
            </PageLink>
            <PageLink
              page="contact"
              onClick={() => onNavigate('contact')}
              className="inline-flex justify-center px-6 py-3 rounded-full bg-ink-100 text-ink-900 font-semibold hover:bg-ink-200"
            >
              {t('notFound.contact')}
            </PageLink>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default NotFoundPage;
