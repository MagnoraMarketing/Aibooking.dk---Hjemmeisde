import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight, Sparkles, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { blogFAQs } from '../content/faq';
import { getCategoryBySlug, getPostsByCategory, BlogPost } from '../content/blog';

interface BlogCategoryPageProps {
  categorySlug: string;
}

export default function BlogCategoryPage({ categorySlug }: BlogCategoryPageProps) {
  const { i18n } = useTranslation();
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
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-ink-900 mb-4">
              {i18n.language === 'da' ? 'Kategori ikke fundet' : 'Category not found'}
            </h1>
            <a href="/blog" className="text-brand-600 hover:text-brand-700 font-semibold">
              {i18n.language === 'da' ? 'Tilbage til blog' : 'Back to blog'}
            </a>
          </div>
        </div>
        <Footer />
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
        title={`${getCategoryName()} - AI Booking Blog | AIBooking.dk`}
        description={getCategoryDescription()}
        keywords={`${categorySlug}, ai automation, booking, ${getCategoryName()}`}
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Navigation />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-ink-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        <div className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium mb-6 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                {i18n.language === 'da' ? 'Tilbage til alle artikler' : 'Back to all articles'}
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-full mb-6 shadow-lg">
                <Tag className="w-4 h-4" />
                {getCategoryName()}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
                {getCategoryName()}
              </h1>
              <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {getCategoryDescription()}
              </p>
            </div>

            <div className="mb-16 text-center">
              <a
                href="https://aibooking.dk/widget"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                {i18n.language === 'da' ? 'Prøv AI Widget Gratis' : 'Try AI Widget Free'}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
                <p className="text-ink-600 text-lg">
                  {i18n.language === 'da' ? 'Ingen artikler i denne kategori endnu.' : 'No articles in this category yet.'}
                </p>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold mt-4"
                >
                  {i18n.language === 'da' ? 'Se alle artikler' : 'View all articles'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
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
                          {i18n.language === 'da' ? 'Læs artikel' : 'Read article'}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-16 text-center">
              <div className="inline-block bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
                <h3 className="text-2xl font-bold text-ink-900 mb-4">
                  {i18n.language === 'da' ? 'Vil du vide mere?' : 'Want to know more?'}
                </h3>
                <p className="text-ink-600 mb-6">
                  {i18n.language === 'da'
                    ? 'Kontakt os for at høre hvordan AI automatisering kan transformere din virksomhed.'
                    : 'Contact us to learn how AI automation can transform your business.'}
                </p>
                <a
                  href="https://aibooking.dk/widget"
                  className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                >
                  {i18n.language === 'da' ? 'Book en demo' : 'Book a demo'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={blogFAQs} />
      <Footer />
    </div>
  );
}
