// Build-time prerender entry (see scripts/prerender.js). Renders one URL to
// static HTML so crawlers that don't run JavaScript see each page's real
// content, headings, links and head tags instead of an empty <div id="root">.
import { renderToString } from 'react-dom/server';
import i18n from './i18n/config';
import App from './App';
import { setServerPathname } from './utils/currentPath';
import { setSeoCollector, SeoData } from './utils/seoCollector';
import { splitLocalizedPath } from './utils/localePaths';

export async function render(pathname: string): Promise<{ html: string; seo: SeoData | null }> {
  const { lang } = splitLocalizedPath(pathname);
  await i18n.changeLanguage(lang);
  setServerPathname(pathname);
  let seo: SeoData | null = null;
  setSeoCollector((data) => { seo = data; });
  try {
    const html = renderToString(<App />);
    return { html, seo };
  } finally {
    setSeoCollector(null);
    setServerPathname(null);
  }
}
