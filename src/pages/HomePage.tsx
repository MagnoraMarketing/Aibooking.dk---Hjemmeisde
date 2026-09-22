import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SavingsCalculator from '../components/SavingsCalculator';
import HowItWorks from '../components/HowItWorks';
import ReceptionistShowcase from '../components/ReceptionistShowcase';
import Features from '../components/Features';
import DashboardShowcase from '../components/DashboardShowcase';
import Pricing from '../components/Pricing';
import WidgetPricing from '../components/WidgetPricing';
import CTA from '../components/CTA';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { homeFAQs } from '../content/faq';
import { organizationSchema, websiteSchema, softwareApplicationSchema } from '../utils/structuredData';
import type { SupportedLanguage } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';
import type { NavigatePage } from '../types/navigation';

interface HomePageProps {
  onNavigate: (page: NavigatePage) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, softwareApplicationSchema],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, '/')}
        structuredData={structuredData}
        path="/"
      />
      <Navigation onNavigate={onNavigate} transparent />
      <Hero />
      <SavingsCalculator />
      <HowItWorks />
      <ReceptionistShowcase onNavigate={onNavigate} />
      <Features />
      <DashboardShowcase variant="frisor" className="py-20 md:py-28 bg-ink-50/60" />
      <Pricing />
      <WidgetPricing />
      <CTA />
      <FAQ items={homeFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default HomePage;
