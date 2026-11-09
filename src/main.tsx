import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { i18nReady } from './i18n/config';
import { splitLocalizedPath } from './utils/localePaths';
import { loadBlogTranslations } from './content/blogTranslations';
import { loadBlogLanguage } from './content/blog';

// The URL decides the language (src/i18n/config.ts starts in it).
const { lang, path } = splitLocalizedPath(window.location.pathname);
const isBlogPost = path.startsWith('/blog/') && !path.startsWith('/blog/category/');

// The root holds prerendered HTML (scripts/prerender.js) for crawlers;
// createRoot replaces it with the live app. The URL language's UI texts, blog
// translations and (on a post) article text load first, so the page never
// renders with missing text.
Promise.all([i18nReady, isBlogPost ? loadBlogLanguage(lang) : loadBlogTranslations(lang)])
  .catch(() => {})
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
