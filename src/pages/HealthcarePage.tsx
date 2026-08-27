import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { healthcareFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { TrendingUp, Clock, Calendar, Users, CheckCircle, Phone } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';
import IndustryScenario from '../components/industries/IndustryScenario';
import IndustryCalculator from '../components/industries/IndustryCalculator';
import IndustryTrialBanner from '../components/industries/IndustryTrialBanner';
import type { NavigatePage } from '../types/navigation';

interface HealthcarePageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface TitleDescription { title: string; description: string }
interface StatItem { value: string; label: string }

function HealthcarePage({ onNavigate }: HealthcarePageProps) {
  const { t, i18n } = useTranslation('healthcarePage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.industries'), url: 'https://www.aibooking.dk/industries' },
    { name: t('breadcrumb.healthcare'), url: 'https://www.aibooking.dk/Klinik' },
  ]);

  const solutionBenefits = t('solution.benefits', { returnObjects: true }) as TitleDescription[];
  const stats = t('stats', { returnObjects: true }) as StatItem[];
  const statIcons = [TrendingUp, Clock, Calendar, Users];
  const practices = t('perfectFor.practices', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/Klinik"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-ink-600 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Worked example, right up top so visitors immediately see how it plays out */}
      <IndustryScenario industry="healthcare" />

      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-ink-200 mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-6">{t('solution.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-8">
              {t('solution.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {solutionBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
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
                <div key={index} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl text-center border border-green-100">
                  <Icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-ink-900 mb-2">{stat.value}</div>
                  <div className="text-ink-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-ink-900 to-green-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('perfectFor.title')}
            </h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {practices.map((practice, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-4">
                  <Phone className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">{practice}</p>
                </div>
              ))}
            </div>
            <a
              href={contactHref}
              className="bg-white text-green-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all shadow-2xl inline-block"
            >
              {t('perfectFor.cta')}
            </a>
          </div>
        </div>
      </section>

      <IndustryCalculator industry="healthcare" />

      <IndustryTrialBanner industry="healthcare" />

      <section className="py-20 bg-gradient-to-br from-green-900 to-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('ctaSection.title')}
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            {t('ctaSection.subtitle')}
          </p>
          <a
            href={contactHref}
            className="bg-white text-green-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all shadow-2xl inline-block"
          >
            {t('ctaSection.button')}
          </a>
        </div>
      </section>

      <FAQ items={healthcareFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default HealthcarePage;
