import Hero from '../components/Hero';
import ReceptionistShowcase from '../components/ReceptionistShowcase';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import WidgetPricing from '../components/WidgetPricing';
import CTA from '../components/CTA';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, softwareApplicationSchema } from '../utils/structuredData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, softwareApplicationSchema],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Receptionist - Automatiser Din Telefon og Booking | Aibooking.dk"
        description="Spar 85% af din telefontid med vores AI-receptionist. Automatisk booking, SMS-påmindelser og 24/7 kundeservice. Prøv gratis i 7 dage. Book din demo i dag."
        keywords="AI receptionist, automatisk booking, telefon automatisering, SMS påmindelser, kundeservice automation, dansk AI løsning"
        canonical="https://www.aibooking.dk/"
        structuredData={structuredData}
      />
      <Navigation onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <ReceptionistShowcase onNavigate={onNavigate} />
      <Features onNavigate={onNavigate} />
      <Pricing />
      <WidgetPricing />
      <CTA />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default HomePage;
