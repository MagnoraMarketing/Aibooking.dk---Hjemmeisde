import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight, TrendingUp, Sparkles, Search, X, LayoutGrid } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { blogFAQs } from '../content/faq';
import { getPublishedPosts, getCategoryBySlug, blogCategories, BlogPost } from '../content/blog';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath, localizedUrl } from '../utils/localePaths';
import type { NavigatePage } from '../types/navigation';

const PAGE_PATH = '/blog';

interface BlogPageProps {
  onNavigate: (page: NavigatePage) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const { t, i18n } = useTranslation('blogPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const allPosts = getPublishedPosts();
  const blogHref = (path: string) => buildLocalizedPath(lang, path);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [query, setQuery] = useState('');

  const getTitle = (post: BlogPost) =>
    i18n.language === 'da' ? post.title_da : post.title_en;

  const getExcerpt = (post: BlogPost) =>
    i18n.language === 'da' ? post.excerpt_da : post.excerpt_en;

  const getCategoryName = (post: BlogPost) => {
    const category = getCategoryBySlug(post.categorySlug);
    if (!category) return '';
    return i18n.language === 'da' ? category.name_da : category.name_en;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const postCountByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    allPosts.forEach((post) => {
      counts[post.categorySlug] = (counts[post.categorySlug] || 0) + 1;
    });
    return counts;
  }, [allPosts]);

  const normalizedQuery = query.trim().toLowerCase();
  const isFiltered = activeCategory !== 'all' || normalizedQuery.length > 0;

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      if (activeCategory !== 'all' && post.categorySlug !== activeCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        getTitle(post),
        getExcerpt(post),
        getCategoryName(post),
        ...post.keywords,
      ].join(' ').toLowerCase();
      return haystack.includes(normalizedQuery);
    });
    // getTitle/getExcerpt/getCategoryName close over i18n.language, which is
    // already a dep below — including the functions themselves would just
    // make this re-create every render for no benefit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPosts, activeCategory, normalizedQuery, i18n.language]);

  const resetFilters = () => {
    setActiveCategory('all');
    setQuery('');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AIBooking.dk Blog",
    "description": t('hero.subtitle'),
    "url": "https://www.aibooking.dk/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AIBooking.dk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aibooking.dk/aibooking_logo.jpg"
      }
    }
  };

  const showFeatured = !isFiltered && filteredPosts.length > 0;
  const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-ink-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, PAGE_PATH)}
        path={PAGE_PATH}
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Navigation onNavigate={onNavigate} />

      {/* Decorative hero — overflow-hidden here (to clip the blurred blobs)
          would otherwise break `sticky` on the filter bar below, so that
          bar lives in its own sibling section instead of being nested here. */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-ink-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-ink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        <div className="relative pt-32 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full text-brand-700 font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                {t('hero.badge')}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search + category filters */}
            <div className="sticky top-20 z-30 mb-10 bg-white/80 backdrop-blur-xl border border-ink-200/60 rounded-2xl shadow-sm p-4 sm:p-5">
              <label htmlFor="blog-search" className="sr-only">{t('filters.searchLabel')}</label>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400 pointer-events-none" />
                <input
                  id="blog-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('filters.searchPlaceholder')}
                  className="w-full pl-11 pr-10 py-3 rounded-xl border border-ink-200 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    aria-label={t('filters.emptyState.reset')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-ink-400 hover:text-ink-600 hover:bg-ink-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all flex-shrink-0 ${
                    activeCategory === 'all'
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  {t('filters.allCategories')}
                  <span className={`ml-0.5 ${activeCategory === 'all' ? 'text-brand-100' : 'text-ink-400'}`}>
                    {allPosts.length}
                  </span>
                </button>
                {blogCategories.map((category) => {
                  const name = i18n.language === 'da' ? category.name_da : category.name_en;
                  const active = activeCategory === category.slug;
                  return (
                    <button
                      key={category.slug}
                      onClick={() => setActiveCategory(category.slug)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all flex-shrink-0 ${
                        active
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                      }`}
                    >
                      {name}
                      <span className={`ml-1.5 ${active ? 'text-brand-100' : 'text-ink-400'}`}>
                        {postCountByCategory[category.slug] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {isFiltered && filteredPosts.length > 0 && (
              <p className="text-sm text-ink-500 font-medium mb-6 px-1">
                {t('filters.resultsCount', { count: filteredPosts.length })}
              </p>
            )}

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl shadow-lg border border-ink-100">
                <p className="text-xl font-bold text-ink-900 mb-2">{t('filters.emptyState.title')}</p>
                <p className="text-ink-600 mb-6">{t('filters.emptyState.message')}</p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  {t('filters.emptyState.reset')}
                </button>
              </div>
            ) : (
              <>
                {showFeatured && (
                  <div className="mb-10 sm:mb-12">
                    <a href={blogHref(`/blog/${filteredPosts[0].slug}`)} className="block group">
                      <article className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                          <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                            <img
                              src={filteredPosts[0].image_url}
                              alt={getTitle(filteredPosts[0])}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white text-sm font-semibold rounded-full shadow-sm">
                                <TrendingUp className="w-3.5 h-3.5" />
                                {t('featured.label')}
                              </span>
                              <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full border border-brand-100">
                                {getCategoryName(filteredPosts[0])}
                              </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                              {getTitle(filteredPosts[0])}
                            </h2>
                            <p className="text-lg text-ink-600 mb-6 leading-relaxed line-clamp-3">
                              {getExcerpt(filteredPosts[0])}
                            </p>
                            <div className="flex items-center gap-4 text-ink-500">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{formatDate(filteredPosts[0].published_at)}</span>
                              </div>
                              <div className="flex items-center text-brand-600 font-semibold">
                                {t('featured.readArticle')}
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                  {gridPosts.map((post) => (
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
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full border border-brand-100">
                              {getCategoryName(post)}
                            </span>
                            <div className="flex items-center text-ink-400 text-xs">
                              <Calendar className="w-3.5 h-3.5 mr-1" />
                              {formatDate(post.published_at)}
                            </div>
                          </div>
                          <h2 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors leading-snug">
                            {getTitle(post)}
                          </h2>
                          <p className="text-ink-600 mb-4 line-clamp-3 leading-relaxed">
                            {getExcerpt(post)}
                          </p>
                          <div className="flex items-center text-brand-600 font-semibold text-sm">
                            {t('readMore')}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              </>
            )}
        </div>
      </div>

      <FAQ items={blogFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
