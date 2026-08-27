import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { integrationsFAQs } from '../content/faq';
import IntegrationHero from '../components/integrations/IntegrationHero';
import IntegrationCategories from '../components/integrations/IntegrationCategories';
import IntegrationGrid from '../components/integrations/IntegrationGrid';
import IntegrationCTA from '../components/integrations/IntegrationCTA';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import type { NavigatePage } from '../types/navigation';

interface IntegrationsPageProps {
  onNavigate: (page: NavigatePage) => void;
}

function IntegrationsPage({ onNavigate }: IntegrationsPageProps) {
  const { t } = useTranslation('integrationsPage');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.integrations'), url: 'https://www.aibooking.dk/integrations' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/integrations"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />
      <IntegrationHero />
      <IntegrationCategories />
      <IntegrationGrid />
      <IntegrationCTA />
      <FAQ items={integrationsFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default IntegrationsPage;
