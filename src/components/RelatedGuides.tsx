import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { getPostBySlug, type BlogPost } from '../content/blog';
import { blogPostPath } from '../utils/localePaths';

// "Guides" block for product and industry pages: links the money pages to the
// blog articles that answer their visitors' questions, so those articles get
// internal links from more than the blog index (and readers find them).

interface RelatedGuidesProps {
  /** Blog post slugs, most relevant first. Unknown or unpublished slugs are skipped. */
  slugs: string[];
}

export default function RelatedGuides({ slugs }: RelatedGuidesProps) {
  const { t, i18n } = useTranslation('blogCta');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const posts = slugs.map((slug) => getPostBySlug(slug)).filter((post): post is BlogPost => Boolean(post));
  if (posts.length === 0) return null;

  const isDa = lang === 'da';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ink-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-6 h-6 text-brand-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">{t('guides.title')}</h2>
        </div>
        <p className="text-lg text-ink-600 mb-8">{t('guides.subtitle')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={blogPostPath(lang, post.slug)}
              className="group flex flex-col bg-white rounded-2xl p-6 border border-ink-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <span className="font-semibold text-ink-900 group-hover:text-brand-700 leading-snug mb-2">
                {isDa ? post.title_da : post.title_en}
              </span>
              <span className="text-sm text-ink-600 mb-4 flex-1">{isDa ? post.excerpt_da : post.excerpt_en}</span>
              <span className="inline-flex items-center text-brand-600 font-semibold text-sm">
                {t('guides.read')}
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
