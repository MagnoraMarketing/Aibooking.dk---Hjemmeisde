import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowLeft, ArrowRight, Clock, Share2, BookmarkPlus, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  slug: string;
  title_en: string;
  title_da: string;
  content_en: string;
  content_da: string;
  excerpt_en: string;
  excerpt_da: string;
  meta_title_en: string;
  meta_title_da: string;
  meta_description_en: string;
  meta_description_da: string;
  keywords: string[];
  image_url: string;
  published_at: string;
  category_id: string;
  category: {
    slug: string;
    name_en: string;
    name_da: string;
  };
}

interface BlogPostPageProps {
  postSlug: string;
}

export default function BlogPostPage({ postSlug }: BlogPostPageProps) {
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [postSlug]);

  const fetchPost = async () => {
    try {
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(slug, name_en, name_da)
        `)
        .eq('slug', postSlug)
        .eq('published', true)
        .maybeSingle();

      if (postError) throw postError;
      setPost(postData);

      if (postData) {
        const { data: relatedData, error: relatedError } = await supabase
          .from('blog_posts')
          .select(`
            id,
            slug,
            title_en,
            title_da,
            excerpt_en,
            excerpt_da,
            image_url,
            published_at,
            category:blog_categories(slug, name_en, name_da)
          `)
          .eq('category_id', postData.category_id)
          .neq('id', postData.id)
          .eq('published', true)
          .limit(3);

        if (relatedError) throw relatedError;
        setRelatedPosts(relatedData || []);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => (post ? (i18n.language === 'da' ? post.title_da : post.title_en) : '');
  const getContent = () => (post ? (i18n.language === 'da' ? post.content_da : post.content_en) : '');
  const getExcerpt = () => (post ? (i18n.language === 'da' ? post.excerpt_da : post.excerpt_en) : '');
  const getMetaTitle = () => (post ? (i18n.language === 'da' ? post.meta_title_da : post.meta_title_en) : '');
  const getMetaDescription = () => (post ? (i18n.language === 'da' ? post.meta_description_da : post.meta_description_en) : '');
  const getCategoryName = () => (post ? (i18n.language === 'da' ? post.category.name_da : post.category.name_en) : '');

  const getRelatedTitle = (relatedPost: any) =>
    i18n.language === 'da' ? relatedPost.title_da : relatedPost.title_en;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimatedReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              {i18n.language === 'da' ? 'Artikel ikke fundet' : 'Article not found'}
            </h1>
            <a href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
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
    "@type": "BlogPosting",
    "headline": getTitle(),
    "description": getExcerpt(),
    "image": post.image_url,
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
      "@id": `https://www.aibooking.dk/blog/${post.slug}`
    },
    "keywords": post.keywords.join(', ')
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <SEO
        title={getMetaTitle()}
        description={getMetaDescription()}
        keywords={post.keywords.join(', ')}
        image={post.image_url}
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Navigation />

      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {i18n.language === 'da' ? 'Tilbage til blog' : 'Back to blog'}
          </a>

          <div className="mb-8">
            <a
              href={`/blog/category/${post.category.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full mb-6 shadow-sm hover:shadow-lg transition-all"
            >
              {getCategoryName()}
            </a>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {getTitle()}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">
                  {estimatedReadTime(getContent())} {i18n.language === 'da' ? 'min. læsning' : 'min read'}
                </span>
              </div>
            </div>
          </div>

          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img
              src={post.image_url}
              alt={getTitle()}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 mb-12 pb-8 border-b border-slate-200">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700 shadow-sm">
              <Share2 className="w-4 h-4" />
              {i18n.language === 'da' ? 'Del' : 'Share'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700 shadow-sm">
              <BookmarkPlus className="w-4 h-4" />
              {i18n.language === 'da' ? 'Gem' : 'Save'}
            </button>
          </div>

          <div
            className="blog-content prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-blue-700
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:my-6 prose-ul:text-slate-700
              prose-ol:my-6 prose-ol:text-slate-700
              prose-li:my-2 prose-li:leading-relaxed
              prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-slate-900 prose-pre:text-slate-100
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic
              prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: getContent() }}
          />

          <div className="mt-16 p-10 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-100 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                {i18n.language === 'da' ? 'Klar til at komme i gang?' : 'Ready to get started?'}
              </h3>
            </div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {i18n.language === 'da'
                ? 'Oplev hvordan AIBooking.dk kan transformere din virksomhed med intelligent automatisering. Book en gratis demo i dag.'
                : 'Experience how AIBooking.dk can transform your business with intelligent automation. Book a free demo today.'}
            </p>
            <a
              href="https://aibooking.dk/widget"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
            >
              {i18n.language === 'da' ? 'Prøv AI Widget Gratis' : 'Try AI Widget Free'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {i18n.language === 'da' ? 'Relaterede Artikler' : 'Related Articles'}
              </h2>
              <p className="text-lg text-slate-600">
                {i18n.language === 'da' ? 'Læs mere om ' + getCategoryName() : 'Read more about ' + getCategoryName()}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost: any) => (
                <a
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={relatedPost.image_url}
                      alt={getRelatedTitle(relatedPost)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {getRelatedTitle(relatedPost)}
                    </h3>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      {i18n.language === 'da' ? 'Læs artikel' : 'Read article'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
