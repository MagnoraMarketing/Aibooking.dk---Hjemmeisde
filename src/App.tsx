import { useState, useEffect } from 'react';
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

type PageType = 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog' | 'blog-category' | 'blog-post';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [blogParam, setBlogParam] = useState<string>('');

  const getPageFromPath = (pathname: string): PageType => {
    // Remove trailing slash
    const path = pathname.replace(/\/$/, '') || '/';

    // Check for blog routes
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

    // Map URLs to pages (Danish SEO-optimized URLs)
    const pathMap: Record<string, PageType> = {
      '/': 'home',
      '/demo': 'demo',
      '/funktioner': 'features',
      '/widget': 'widget',
      '/integrationer': 'integrations',
      '/brancher': 'industries',
      '/klinik': 'healthcare',
      '/haandvaerker': 'craftsman',
      '/kontor': 'office',
      '/webshop': 'ecommerce',
      '/kontakt': 'contact',
      '/om-aibooking': 'about',
      '/vilkaar': 'terms',
      '/privatlivspolitik': 'privacy',
      '/blog': 'blog'
    };

    return pathMap[path] || 'home';
  };

  useEffect(() => {
    // Set initial page based on URL
    const page = getPageFromPath(window.location.pathname);
    setCurrentPage(page);

    // Listen for browser back/forward buttons
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageType) => {
    // Map pages to URLs (Danish SEO-optimized URLs)
    const pageMap: Record<PageType, string> = {
      'home': '/',
      'demo': '/demo',
      'features': '/funktioner',
      'widget': '/widget',
      'integrations': '/integrationer',
      'industries': '/brancher',
      'healthcare': '/klinik',
      'craftsman': '/haandvaerker',
      'office': '/kontor',
      'ecommerce': '/webshop',
      'contact': '/kontakt',
      'about': '/om-aibooking',
      'terms': '/vilkaar',
      'privacy': '/privatlivspolitik',
      'blog': '/blog',
      'blog-category': '/blog/category',
      'blog-post': '/blog'
    };

    const path = pageMap[page] || '/';
    window.history.pushState({}, '', path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage onNavigate={handleNavigate} />
      ) : currentPage === 'widget' ? (
        <WidgetPage onNavigate={handleNavigate} />
      ) : currentPage === 'integrations' ? (
        <IntegrationsPage onNavigate={handleNavigate} />
      ) : currentPage === 'industries' ? (
        <IndustriesPage onNavigate={handleNavigate} />
      ) : currentPage === 'healthcare' ? (
        <HealthcarePage onNavigate={handleNavigate} />
      ) : currentPage === 'craftsman' ? (
        <CraftsmanPage onNavigate={handleNavigate} />
      ) : currentPage === 'office' ? (
        <OfficePage onNavigate={handleNavigate} />
      ) : currentPage === 'ecommerce' ? (
        <EcommercePage onNavigate={handleNavigate} />
      ) : currentPage === 'features' ? (
        <FeaturesPage onNavigate={handleNavigate} />
      ) : currentPage === 'contact' ? (
        <ContactPage onNavigate={handleNavigate} />
      ) : currentPage === 'about' ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : currentPage === 'terms' ? (
        <TermsPage onNavigate={handleNavigate} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPage onNavigate={handleNavigate} />
      ) : currentPage === 'blog' ? (
        <BlogPage />
      ) : currentPage === 'blog-category' ? (
        <BlogCategoryPage categorySlug={blogParam} />
      ) : currentPage === 'blog-post' ? (
        <BlogPostPage postSlug={blogParam} />
      ) : (
        <DemoPage onNavigate={handleNavigate} />
      )}
    </>
  );
}

export default App;
