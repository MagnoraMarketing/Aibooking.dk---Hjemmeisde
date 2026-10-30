import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import RelatedGuides from '../components/RelatedGuides';
import AppQrSection from '../components/AppQrSection';
import FAQ from '../components/FAQ';
import { salonFAQs } from '../content/faq';
import SEO from '../components/SEO';
import WidgetCapabilitiesSEO from '../components/WidgetCapabilitiesSEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { CheckCircle, Scissors, ArrowRight, Smartphone } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath, localizedUrl } from '../utils/localePaths';
import IndustryScenario from '../components/industries/IndustryScenario';
import IndustryIntegrations from '../components/industries/IndustryIntegrations';
import IndustryCalculator from '../components/industries/IndustryCalculator';
import IndustryTrialBanner from '../components/industries/IndustryTrialBanner';
import DashboardShowcase from '../components/DashboardShowcase';
import BookingAudioDemo from '../components/BookingAudioDemo';
import PageLink from '../components/PageLink';
import type { NavigatePage } from '../types/navigation';

interface SalonPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface TitleDescription { title: string; description: string }

function SalonPage({ onNavigate }: SalonPageProps) {
  const { t, i18n } = useTranslation('salonPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
    { name: t('breadcrumb.industries'), url: localizedUrl(lang, '/brancher') },
    { name: t('breadcrumb.salon'), url: localizedUrl(lang, '/frisoer') },
  ]);

  const benefits = t('benefits', { returnObjects: true }) as TitleDescription[];
  const workflow = t('workflow.items', { returnObjects: true }) as TitleDescription[];
  const businessTypes = t('types.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, '/frisoer')}
        path="/frisoer"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} transparent />

      <PageHero badge={t('hero.badge')} title={t('hero.title')} subtitle={t('hero.subtitle')} />

      {/* Real recorded example call (Danish only), right below the hero */}
      <BookingAudioDemo className="border-t border-white/10" />

      {/* Worked example, right up top so visitors immediately see how it plays out */}
      <IndustryScenario industry="salon" />

      <section className="py-16 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-ink-200 mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-6">{t('solution.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-8">
              {t('solution.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 mb-2">{benefit.title}</h3>
                    <p className="text-ink-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* A salon day: where the phone usually costs bookings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-3 text-center">{t('workflow.title')}</h2>
            <p className="text-lg text-ink-600 text-center max-w-3xl mx-auto mb-10">{t('workflow.subtitle')}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflow.map((item, index) => (
                <div key={index} className="bg-white border border-rose-100 rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-ink-900 to-rose-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('types.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              {businessTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-4">
                  <Scissors className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">{type}</p>
                </div>
              ))}
            </div>
            <a
              href={contactHref}
              className="bg-white text-rose-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-rose-50 transition-all shadow-2xl inline-block"
            >
              {t('types.cta')}
            </a>
          </div>

          <IndustryIntegrations industry="salon" />
        </div>
      </section>

      <DashboardShowcase variant="frisor" className="py-20 md:py-28 bg-white" />

      {/* Link to the real app: the salon owner checks bookings between clients */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-rose-50 border border-rose-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <Smartphone className="w-12 h-12 text-rose-600 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-ink-900 mb-2">{t('app.title')}</h2>
            <p className="text-ink-600 leading-relaxed">{t('app.text')}</p>
          </div>
          <PageLink page="app"
            onClick={() => onNavigate('app')}
            className="inline-flex items-center gap-2 text-rose-700 font-semibold hover:text-rose-800 transition-colors whitespace-nowrap"
          >
            {t('app.link')}
            <ArrowRight className="w-4 h-4" />
          </PageLink>
        </div>
      </section>

      <IndustryCalculator industry="salon" />

      <IndustryTrialBanner industry="salon" />

      <section className="py-20 bg-gradient-to-br from-rose-900 to-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
            {t('finalCta.subtitle')}
          </p>
          <a
            href={contactHref}
            className="bg-white text-rose-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-rose-50 transition-all shadow-2xl inline-block"
          >
            {t('finalCta.button')}
          </a>
        </div>
      </section>

      <RelatedGuides slugs={['totalloesning-klinik', 'outbound-ai-opkald-paamindelser', 'hvad-koster-en-ai-receptionist']} />
      <FAQ items={salonFAQs} />
      <WidgetCapabilitiesSEO />
      <AppQrSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default SalonPage;
