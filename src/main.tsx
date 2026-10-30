import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18n from './i18n/config';
import { splitLocalizedPath } from './utils/localePaths';
import { loadBlogTranslations } from './content/blogTranslations';

// A language-prefixed URL (/en/...) decides the language before the first
// render, so the page doesn't flash in the detected language first.
const { lang } = splitLocalizedPath(window.location.pathname);
if (lang !== 'da') i18n.changeLanguage(lang);

// The root holds prerendered HTML (scripts/prerender.js) for crawlers;
// createRoot replaces it with the live app. Blog translations for the URL's
// language load first, so a translated post doesn't flash in English.
loadBlogTranslations(lang)
  .catch(() => {})
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
