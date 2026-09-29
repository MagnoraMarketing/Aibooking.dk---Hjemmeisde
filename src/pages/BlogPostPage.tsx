import { useTranslation } from 'react-i18next';
import { Calendar, ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import BlogCTA from '../components/BlogCTA';
import { blogFAQs } from '../content/faq';
import { getPostBySlug, getCategoryBySlug, getRelatedPosts, BlogPost } from '../content/blog';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath, localizedUrl } from '../utils/localePaths';
import type { NavigatePage } from '../types/navigation';

const POST_LANGUAGES = ['da', 'en'] as const;

interface BlogPostPageProps {
  postSlug: string;
  onNavigate: (page: NavigatePage) => void;
}

export default function BlogPostPage({ postSlug, onNavigate }: BlogPostPageProps) {
  const { t, i18n } = useTranslation('blogPostPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const blogHref = (path: string) => buildLocalizedPath(lang, path);
  // Posts are written in Danish and English; other languages read the
  // English text, so that version is their canonical.
  const contentLang: SupportedLanguage = lang === 'da' ? 'da' : 'en';
  const post = getPostBySlug(postSlug);
  const category = post ? getCategoryBySlug(post.categorySlug) : undefined;
  const relatedPosts = post ? getRelatedPosts(post) : [];

  const getTitle = () => (post ? (i18n.language === 'da' ? post.title_da : post.title_en) : '');
  // Internal links in post HTML are written as Danish (unprefixed) paths;
  // prefix them for the current language so readers stay on their locale.
  const getContent = () =>
    post
      ? (i18n.language === 'da' ? post.content_da : post.content_en).replace(
          /href="(\/[^"]*)"/g,
          (_, path: string) => `href="${buildLocalizedPath(lang, path)}"`
        )
      : '';
  const getExcerpt = () => (post ? (i18n.language === 'da' ? post.excerpt_da : post.excerpt_en) : '');
  const getMetaTitle = () => (post ? (i18n.language === 'da' ? post.meta_title_da : post.meta_title_en) : '');
  const getMetaDescription = () => (post ? (i18n.language === 'da' ? post.meta_description_da : post.meta_description_en) : '');
  const getCategoryName = () => (category ? (i18n.language === 'da' ? category.name_da : category.name_en) : '');

  const getRelatedTitle = (relatedPost: BlogPost) =>
    i18n.language === 'da' ? relatedPost.title_da : relatedPost.title_en;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: getTitle(), url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // Share sheet dismissed or clipboard blocked — nothing to do.
    }
  };

  const estimatedReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (!post || !category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-ink-50">
        <Navigation onNavigate={onNavigate} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-ink-900 mb-4">
              {t('notFound.title')}
            </h1>
            <a href={blogHref('/blog')} className="text-brand-600 hover:text-brand-700 font-semibold">
              {t('backToBlog')}
            </a>
          </div>
        </div>
        <Footer onNavigate={onNavigate} />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": getTitle(),
    "description": getExcerpt(),
    "image": `https://www.aibooking.dk${post.image_url}`,
    "datePublished": post.published_at,
    "dateModified": post.published_at,
    "author": {
      "@type": "Organization",
      "name": "AIBooking.dk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIBooking.dk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aibooking.dk/aibooking_logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": localizedUrl(contentLang, `/blog/${post.slug}`)
    },
    "inLanguage": contentLang,
    "articleSection": getCategoryName(),
    "keywords": post.keywords.join(', ')
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AIBooking.dk", "item": localizedUrl(lang, '/') },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": localizedUrl(lang, '/blog') },
      { "@type": "ListItem", "position": 3, "name": getCategoryName(), "item": localizedUrl(lang, `/blog/category/${category.slug}`) },
      { "@type": "ListItem", "position": 4, "name": getTitle(), "item": localizedUrl(lang, `/blog/${post.slug}`) }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-ink-50">
      <SEO
        title={getMetaTitle()}
        description={getMetaDescription()}
        keywords={post.keywords.join(', ')}
        ogImage={`https://www.aibooking.dk${post.image_url}`}
        ogType="article"
        canonical={localizedUrl(contentLang, `/blog/${post.slug}`)}
        path={`/blog/${post.slug}`}
        languages={POST_LANGUAGES}
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>

      <Navigation onNavigate={onNavigate} transparent />

      <article className="pb-20">
        <header className="relative pt-32 pb-40 md:pb-48 bg-ink-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:32px_32px]"></div>
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-brand-600/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href={blogHref('/blog')}
              className="inline-flex items-center text-brand-200 hover:text-white font-medium mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('backToBlog')}
            </a>

            <div>
              <a
                href={blogHref(`/blog/category/${category.slug}`)}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-accent-300 px-4 py-2 rounded-full text-sm font-semibold border border-white/10 mb-6 hover:bg-white/10 transition-colors"
              >
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                {getCategoryName()}
              </a>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {getTitle()}
              </h1>
              <p className="text-xl text-ink-200 leading-relaxed mb-8">{getExcerpt()}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent-400" />
                  {formatDate(post.published_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent-400" />
                  {t('readTime', { count: estimatedReadTime(getContent()) })}
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Share2 className="w-4 h-4 text-accent-400" />
                  {t('actions.share')}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-28 md:-mt-36 relative z-10 aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-2xl ring-1 ring-white/10">
            <img
              src={post.image_url}
              alt={getTitle()}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: getContent() }}
          />

          <BlogCTA categorySlug={post.categorySlug} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4">
                {t('related.title')}
              </h2>
              <p className="text-lg text-ink-600">
                {t('related.subtitle', { category: getCategoryName() })}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={blogHref(`/blog/${relatedPost.slug}`)}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden bg-ink-100">
                    <img
                      src={relatedPost.image_url}
                      alt={getRelatedTitle(relatedPost)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ink-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                      {getRelatedTitle(relatedPost)}
                    </h3>
                    <div className="flex items-center text-brand-600 font-semibold text-sm">
                      {t('readArticle')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>

      <FAQ items={blogFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
