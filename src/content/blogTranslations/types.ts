/** One blog post in a language other than Danish and English (the languages
 * the post itself is written in, in src/content/blogPosts). */
export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  content: string;
  meta_title: string;
  meta_description: string;
  /** Same order as the post's own `faq`. */
  faq?: { question: string; answer: string }[];
}

/** Translations keyed by post slug. */
export type BlogTranslations = Record<string, BlogPostTranslation>;
