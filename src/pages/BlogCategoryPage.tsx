import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import BlogCTA from '../components/BlogCTA';
import { blogFAQs } from '../content/faq';
import { getCategoryBySlug, getPostsByCategory, BlogPost } from '../content/blog';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath, localizedUrl } from '../utils/localePaths';
import type { NavigatePage } from '../types/navigation';

interface BlogCategoryPageProps {
  categorySlug: string;
  onNavigate: (page: NavigatePage) => void;
}

export default function BlogCategoryPage({ categorySlug, onNavigate }: BlogCategoryPageProps) {
  const { t, i18n } = useTranslation('blogCategoryPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const blogHref = (path: string) => buildLocalizedPath(lang, path);
  const category = getCategoryBySlug(categorySlug);
  const posts = category ? getPostsByCategory(categorySlug) : [];

  const getTitle = (post: BlogPost) =>
    i18n.language === 'da' ? post.title_da : post.title_en;

  const getExcerpt = (post: BlogPost) =>
    i18n.language === 'da' ? post.excerpt_da : post.excerpt_en;

  const getCategoryName = () =>
    category ? (i18n.language === 'da' ? category.name_da : category.name_en) : '';

  const getCategoryDescription = () =>
    category ? (i18n.language === 'da' ? category.description_da : category.description_en) : '';

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-ink-50">
        <Navigation onNavigate={onNavigate} transparent />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-ink-900 mb-4">
              {t('notFound.title')}
            </h1>
            <a href={blogHref('/blog')} className="text-brand-600 hover:text-brand-700 font-semibold">
              {t('notFound.backToBlog')}
            </a>
          </div>
        </div>
        <Footer onNavigate={onNavigate} />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": getCategoryName(),
    "description": getCategoryDescription(),
    "url": `https://www.aibooking.dk/blog/category/${categorySlug}`,
    "isPartOf": {
      "@type": "Blog",
      "name": "AIBooking.dk Blog",
      "url": "https://www.aibooking.dk/blog"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-ink-50">
      <SEO
        title={t('seo.title', { category: getCategoryName() })}
        description={getCategoryDescription()}
        keywords={t('seo.keywords', { slug: categorySlug, category: getCategoryName() })}
        canonical={localizedUrl(lang, `/blog/category/${categorySlug}`)}
        path={`/blog/category/${categorySlug}`}
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Navigation onNavigate={onNavigate} transparent />

      <PageHero
        badge="Blog"
        title={getCategoryName()}
        subtitle={getCategoryDescription()}
        secondaryCta={categorySlug === 'ai-widget' ? { label: t('tryWidgetCta'), href: '/widget' } : undefined}
        compact
      >
        <a
          href={blogHref('/blog')}
          className="inline-flex items-center gap-2 text-brand-200 hover:text-white font-medium transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          {t('backToAll')}
        </a>
      </PageHero>

      <div>
        <div className="relative pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
                <p className="text-ink-600 text-lg">
                  {t('emptyState.message')}
                </p>
                <a
                  href={blogHref('/blog')}
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold mt-4"
                >
                  {t('emptyState.viewAll')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <a href={blogHref(`/blog/${post.slug}`)} className="block">
                      <div className="aspect-video overflow-hidden bg-ink-100">
                        <img
                          src={post.image_url}
                          alt={getTitle(post)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center text-ink-400 text-xs mb-3">
                          <Calendar className="w-3.5 h-3.5 mr-1.5" />
                          {formatDate(post.published_at)}
                        </div>
                        <h2 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors leading-snug">
                          {getTitle(post)}
                        </h2>
                        <p className="text-ink-600 mb-4 line-clamp-3 leading-relaxed">
                          {getExcerpt(post)}
                        </p>
                        <div className="flex items-center text-brand-600 font-semibold text-sm">
                          {t('readArticle')}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            )}

            <BlogCTA categorySlug={categorySlug} />
          </div>
        </div>
      </div>

      <FAQ items={blogFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
