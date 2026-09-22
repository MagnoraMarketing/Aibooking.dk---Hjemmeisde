import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { integrationsFAQs } from '../content/faq';
import IntegrationHero from '../components/integrations/IntegrationHero';
import IntegrationCategories from '../components/integrations/IntegrationCategories';
import IntegrationGrid from '../components/integrations/IntegrationGrid';
import IntegrationSEO from '../components/integrations/IntegrationSEO';
import WidgetCapabilitiesSEO from '../components/WidgetCapabilitiesSEO';
import IntegrationCTA from '../components/integrations/IntegrationCTA';
import SEO from '../components/SEO';
import type { SupportedLanguage } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';
import { createBreadcrumbSchema } from '../utils/structuredData';
import type { NavigatePage } from '../types/navigation';

interface IntegrationsPageProps {
  onNavigate: (page: NavigatePage) => void;
}

function IntegrationsPage({ onNavigate }: IntegrationsPageProps) {
  const { t, i18n } = useTranslation('integrationsPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
    { name: t('breadcrumb.integrations'), url: localizedUrl(lang, '/integrationer') },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, '/integrationer')}
        path="/integrationer"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} transparent />
      <IntegrationHero />
      <IntegrationCategories />
      <IntegrationGrid />
      <IntegrationSEO />
      <IntegrationCTA />
      <FAQ items={integrationsFAQs} />
      <WidgetCapabilitiesSEO />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default IntegrationsPage;
