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

interface IntegrationsPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function IntegrationsPage({ onNavigate }: IntegrationsPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Integrationer', url: 'https://www.aibooking.dk/integrations' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Integrationer - Tilslut AI Receptionist til Dine Systemer | Aibooking.dk"
        description="Integrer vores AI-receptionist med Google Calendar, Outlook, Microsoft Teams, Zoom, Slack og mange flere. Seamless kalender- og booking-integrationer."
        keywords="kalender integration, Google Calendar, Outlook integration, booking system integration, CRM integration, email integration"
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
