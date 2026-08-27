import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { blogFAQs } from '../content/faq';
import { getPublishedPosts, getCategoryBySlug, BlogPost } from '../content/blog';

export default function BlogPage() {
  const { t, i18n } = useTranslation('blogPage');
  const posts = getPublishedPosts();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-ink-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Navigation onNavigate={() => {}} />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-ink-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-ink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        <div className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
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

            {posts.length > 0 && (
              <div className="mb-12">
                <a href={`/blog/${posts[0].slug}`} className="block group">
                  <article className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                        <img
                          src={posts[0].image_url}
                          alt={getTitle(posts[0])}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white text-sm font-semibold rounded-full shadow-sm">
                            <TrendingUp className="w-3.5 h-3.5" />
                            {t('featured.label')}
                          </span>
                          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full border border-brand-100">
                            {getCategoryName(posts[0])}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-ink-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                          {getTitle(posts[0])}
                        </h2>
                        <p className="text-lg text-ink-600 mb-6 leading-relaxed line-clamp-3">
                          {getExcerpt(posts[0])}
                        </p>
                        <div className="flex items-center gap-4 text-ink-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{formatDate(posts[0].published_at)}</span>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <a href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video overflow-hidden bg-ink-100">
                      <img
                        src={post.image_url}
                        alt={getTitle(post)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
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
          </div>
        </div>
      </div>

      <FAQ items={blogFAQs} />
      <Footer />
    </div>
  );
}
