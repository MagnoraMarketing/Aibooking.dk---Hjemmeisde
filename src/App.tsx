import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSuggestion from './components/LanguageSuggestion';
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
import InboundOutboundPage from './pages/InboundOutboundPage';
import NotFoundPage from './pages/NotFoundPage';
import TrialPage from './pages/TrialPage';
import AppPage from './pages/AppPage';
import SalonPage from './pages/SalonPage';
import ShopifyPage from './pages/ShopifyPage';
import RestaurantPage from './pages/RestaurantPage';
import BlogPage from './pages/BlogPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogPostPage from './pages/BlogPostPage';
import TrialOfferWidget from './components/TrialOfferWidget';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from './i18n/config';
import { splitLocalizedPath, buildLocalizedPath } from './utils/localePaths';
import { currentPathname, setRenderingNotFound } from './utils/currentPath';
import { blogRedirects, getCategoryBySlug, getPostBySlug } from './content/blog';
import { loadBlogTranslations } from './content/blogTranslations';
import { loadBlogLanguage } from './content/blog';

type PageType = 'home' | 'widget' | 'inbound-outbound' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog' | 'blog-category' | 'blog-post' | 'trial' | 'app' | 'salon' | 'shopify' | 'restaurant';

// Danish-worded paths (canonical, unprefixed). Language prefixes are
// stripped/added separately via splitLocalizedPath/buildLocalizedPath.
const pathMap: Record<string, PageType> = {
  '/': 'home', '/demo': 'demo', '/funktioner': 'features', '/widget': 'widget',
  '/ai-receptionist': 'inbound-outbound', '/ind-og-udgaaende-opkald': 'inbound-outbound', '/integrationer': 'integrations', '/brancher': 'industries', '/klinik': 'healthcare',
  '/haandvaerker': 'craftsman', '/kontor': 'office', '/webshop': 'ecommerce',
  '/kontakt': 'contact', '/om-aibooking': 'about', '/vilkaar': 'terms',
  '/privatlivspolitik': 'privacy', '/blog': 'blog', '/proeveperiode': 'trial',
  '/app': 'app', '/frisoer': 'salon', '/shopify': 'shopify', '/restaurant': 'restaurant'
};

const pageMap: Record<PageType, string> = {
  'home': '/', 'demo': '/demo', 'features': '/funktioner', 'widget': '/widget',
  'inbound-outbound': '/ai-receptionist', 'integrations': '/integrationer', 'industries': '/brancher', 'healthcare': '/klinik',
  'craftsman': '/haandvaerker', 'office': '/kontor', 'ecommerce': '/webshop',
  'contact': '/kontakt', 'about': '/om-aibooking', 'terms': '/vilkaar',
  'privacy': '/privatlivspolitik', 'blog': '/blog', 'blog-category': '/blog/category',
  'blog-post': '/blog', 'trial': '/proeveperiode', 'app': '/app', 'salon': '/frisoer', 'shopify': '/shopify', 'restaurant': '/restaurant'
};

// Resolve a Danish-worded path to the page (and blog slug) it renders.
// `unknown` marks paths that fall back to the home page and missing blog
// posts/categories.
function resolveRoute(pathname: string): { page: PageType; param: string; unknown: boolean } {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path.startsWith('/blog/category/')) {
    const param = path.replace('/blog/category/', '');
    return { page: 'blog-category', param, unknown: !getCategoryBySlug(param) };
  }
  if (path.startsWith('/blog/') && path !== '/blog') {
    // Merged posts 301 to their replacement in vercel.json; resolve them here
    // too so in-app navigation to an old slug still shows the right post.
    const slug = path.replace('/blog/', '');
    const param = blogRedirects[slug] ?? slug;
    return { page: 'blog-post', param, unknown: !getPostBySlug(param) };
  }
  return { page: pathMap[path] || 'home', param: '', unknown: !pathMap[path] };
}

function App() {
  const { i18n } = useTranslation();
  // Start on the page in the URL (not 'home') so the first render matches the
  // prerendered HTML instead of flashing the home page.
  const [route, setRoute] = useState(() => resolveRoute(splitLocalizedPath(currentPathname()).path));
  const currentPage = route.page;
  const blogParam = route.param;
  const unknownPath = route.unknown;
  setRenderingNotFound(unknownPath);

  const syncFromLocation = () => {
    const { lang, path } = splitLocalizedPath(window.location.pathname);
    i18n.changeLanguage(lang);
    setRoute(resolveRoute(path));
  };

  useEffect(() => {
    // The URL decides the language; visitors whose browser prefers another
    // one are offered it by <LanguageSuggestion> instead of being redirected,
    // so people and crawlers always get the page they asked for.
    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Blog translations load per language (see content/blogTranslations), so
  // re-render once a newly chosen language's posts have arrived.
  const [, setBlogLanguagesLoaded] = useState(0);
  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      loadBlogTranslations(lng)
        .then(() => setBlogLanguagesLoaded((n) => n + 1))
        .catch(() => {});
    };
    i18n.on('languageChanged', onLanguageChanged);
    return () => i18n.off('languageChanged', onLanguageChanged);
  }, [i18n]);

  // Article text is only fetched for blog post pages (see content/blogBodies);
  // src/main.tsx loads it up front when the first page is a post.
  const language = i18n.resolvedLanguage || i18n.language;
  useEffect(() => {
    if (currentPage !== 'blog-post') return;
    loadBlogLanguage(language)
      .then(() => setBlogLanguagesLoaded((n) => n + 1))
      .catch(() => {});
  }, [currentPage, language]);


  const handleNavigate = (page: PageType) => {
    const danishPath = pageMap[page] || '/';
    const currentLang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
    const lang = SUPPORTED_LANGUAGES.includes(currentLang) ? currentLang : 'da';
    const path = buildLocalizedPath(lang, danishPath);
    window.history.pushState({}, '', path);
    setRoute({ page, param: '', unknown: false });
    window.scrollTo(0, 0);
  };

  return (
    <>
      {unknownPath ? <NotFoundPage onNavigate={handleNavigate} />
       : currentPage === 'home' ? <HomePage onNavigate={handleNavigate} />
       : currentPage === 'widget' ? <WidgetPage onNavigate={handleNavigate} />
       : currentPage === 'inbound-outbound' ? <InboundOutboundPage onNavigate={handleNavigate} />
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
       : currentPage === 'blog' ? <BlogPage onNavigate={handleNavigate} />
       : currentPage === 'blog-category' ? <BlogCategoryPage categorySlug={blogParam} onNavigate={handleNavigate} />
       : currentPage === 'blog-post' ? <BlogPostPage postSlug={blogParam} onNavigate={handleNavigate} />
       : currentPage === 'trial' ? <TrialPage onNavigate={handleNavigate} />
       : currentPage === 'app' ? <AppPage onNavigate={handleNavigate} />
       : currentPage === 'salon' ? <SalonPage onNavigate={handleNavigate} />
       : currentPage === 'shopify' ? <ShopifyPage onNavigate={handleNavigate} />
       : currentPage === 'restaurant' ? <RestaurantPage onNavigate={handleNavigate} />
       : <DemoPage onNavigate={handleNavigate} />}
      <TrialOfferWidget />
      <LanguageSuggestion />
    </>
  );
}
export default App;
