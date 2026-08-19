import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { craftsmanFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { TrendingUp, Clock, Phone, Users, CheckCircle, Wrench } from 'lucide-react';

interface CraftsmanPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

interface TitleDescription { title: string; description: string }
interface StatItem { value: string; label: string }

function CraftsmanPage({ onNavigate }: CraftsmanPageProps) {
  const { t } = useTranslation('craftsmanPage');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.industries'), url: 'https://www.aibooking.dk/industries' },
    { name: t('breadcrumb.craftsman'), url: 'https://www.aibooking.dk/craftsman' },
  ]);

  const benefits = t('benefits', { returnObjects: true }) as TitleDescription[];
  const stats = t('stats', { returnObjects: true }) as StatItem[];
  const statIcons = [TrendingUp, Clock, Phone, Users];
  const tradeItems = t('trades.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/craftsman"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-ink-600 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>


          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-ink-200 mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-6">{t('solution.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-8">
              {t('solution.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 mb-2">{benefit.title}</h3>
                    <p className="text-ink-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl text-center border border-orange-100">
                  <Icon className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-ink-900 mb-2">{stat.value}</div>
                  <div className="text-ink-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-ink-900 to-orange-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('trades.title')}
            </h2>
            <div className="grid md:grid-cols-6 gap-4 mb-8">
              {tradeItems.map((trade, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-4">
                  <Wrench className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">{trade}</p>
                </div>
              ))}
            </div>
            <a
              href="https://cal.com/aibooking-booking/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-2xl inline-block"
            >
              {t('trades.cta')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-900 to-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            {t('finalCta.subtitle')}
          </p>
          <a
            href="https://cal.com/aibooking-booking/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-2xl inline-block"
          >
            {t('finalCta.button')}
          </a>
        </div>
      </section>

      <FAQ items={craftsmanFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default CraftsmanPage;
