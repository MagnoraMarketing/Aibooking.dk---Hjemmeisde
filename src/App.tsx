import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import IntegrationsPage from './pages/IntegrationsPage';
import IndustriesPage from './pages/IndustriesPage';
import DemoPage from './pages/DemoPage';
import HealthcarePage from './pages/HealthcarePage';
import CraftsmanPage from './pages/CraftsmanPage';
import OfficePage from './pages/OfficePage';
import EcommercePage from './pages/EcommercePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import WidgetPage from './pages/WidgetPage';
import BlogPage from './pages/BlogPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogPostPage from './pages/BlogPostPage';
import TrialOfferWidget from './components/TrialOfferWidget';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from './i18n/config';
import { splitLocalizedPath, buildLocalizedPath } from './utils/localePaths';

type PageType = 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog' | 'blog-category' | 'blog-post';

// Danish-worded paths (canonical, unprefixed). Language prefixes are
// stripped/added separately via splitLocalizedPath/buildLocalizedPath.
const pathMap: Record<string, PageType> = {
  '/': 'home', '/demo': 'demo', '/funktioner': 'features', '/widget': 'widget',
  '/integrationer': 'integrations', '/brancher': 'industries', '/klinik': 'healthcare',
  '/haandvaerker': 'craftsman', '/kontor': 'office', '/webshop': 'ecommerce',
  '/kontakt': 'contact', '/om-aibooking': 'about', '/vilkaar': 'terms',
  '/privatlivspolitik': 'privacy', '/blog': 'blog'
};

const pageMap: Record<PageType, string> = {
  'home': '/', 'demo': '/demo', 'features': '/funktioner', 'widget': '/widget',
  'integrations': '/integrationer', 'industries': '/brancher', 'healthcare': '/klinik',
  'craftsman': '/haandvaerker', 'office': '/kontor', 'ecommerce': '/webshop',
  'contact': '/kontakt', 'about': '/om-aibooking', 'terms': '/vilkaar',
  'privacy': '/privatlivspolitik', 'blog': '/blog', 'blog-category': '/blog/category',
  'blog-post': '/blog'
};

function App() {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [blogParam, setBlogParam] = useState<string>('');

  const getPageFromPath = (pathname: string): PageType => {
    const path = pathname.replace(/\/$/, '') || '/';
    if (path.startsWith('/blog/category/')) {
      const categorySlug = path.replace('/blog/category/', '');
      setBlogParam(categorySlug);
      return 'blog-category';
    }
    if (path.startsWith('/blog/') && path !== '/blog') {
      const postSlug = path.replace('/blog/', '');
      setBlogParam(postSlug);
      return 'blog-post';
    }
    return pathMap[path] || 'home';
  };

  const syncFromLocation = () => {
    const { lang, path } = splitLocalizedPath(window.location.pathname);
    i18n.changeLanguage(lang);
    setCurrentPage(getPageFromPath(path));
  };

  useEffect(() => {
    const { lang: urlLang, path } = splitLocalizedPath(window.location.pathname);
    // i18n.language can be an unnormalized browser code (e.g. "en-US");
    // resolvedLanguage is the actual matched, supported language.
    const detectedLang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;

    // First visit to an unprefixed (Danish) URL: if the detected/stored
    // preference is a non-Danish supported language, redirect to the
    // matching language-prefixed URL so the site opens pre-translated.
    if (urlLang === 'da' && detectedLang !== 'da' && SUPPORTED_LANGUAGES.includes(detectedLang)) {
      const newPath = buildLocalizedPath(detectedLang, path);
      window.history.replaceState({}, '', newPath);
      i18n.changeLanguage(detectedLang);
      setCurrentPage(getPageFromPath(path));
    } else {
      i18n.changeLanguage(urlLang);
      setCurrentPage(getPageFromPath(path));
    }

    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (page: PageType) => {
    const danishPath = pageMap[page] || '/';
    const currentLang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
    const lang = SUPPORTED_LANGUAGES.includes(currentLang) ? currentLang : 'da';
    const path = buildLocalizedPath(lang, danishPath);
    window.history.pushState({}, '', path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'home' ? <HomePage onNavigate={handleNavigate} />
       : currentPage === 'widget' ? <WidgetPage onNavigate={handleNavigate} />
       : currentPage === 'integrations' ? <IntegrationsPage onNavigate={handleNavigate} />
       : currentPage === 'industries' ? <IndustriesPage onNavigate={handleNavigate} />
       : currentPage === 'healthcare' ? <HealthcarePage onNavigate={handleNavigate} />
       : currentPage === 'craftsman' ? <CraftsmanPage onNavigate={handleNavigate} />
       : currentPage === 'office' ? <OfficePage onNavigate={handleNavigate} />
       : currentPage === 'ecommerce' ? <EcommercePage onNavigate={handleNavigate} />
       : currentPage === 'features' ? <FeaturesPage onNavigate={handleNavigate} />
       : currentPage === 'contact' ? <ContactPage onNavigate={handleNavigate} />
       : currentPage === 'about' ? <AboutPage onNavigate={handleNavigate} />
       : currentPage === 'terms' ? <TermsPage onNavigate={handleNavigate} />
       : currentPage === 'privacy' ? <PrivacyPage onNavigate={handleNavigate} />
       : currentPage === 'blog' ? <BlogPage />
       : currentPage === 'blog-category' ? <BlogCategoryPage categorySlug={blogParam} />
       : currentPage === 'blog-post' ? <BlogPostPage postSlug={blogParam} />
       : <DemoPage onNavigate={handleNavigate} />}
      <TrialOfferWidget />
    </>
  );
}
export default App;
