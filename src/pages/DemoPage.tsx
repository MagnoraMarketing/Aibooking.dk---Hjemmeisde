import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { demoFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { CheckCircle, Calendar, Clock, Zap } from 'lucide-react';

interface DemoPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

interface TitleDescription { title: string; description: string }
interface TitleDesc { title: string; desc: string }

function DemoPage({ onNavigate }: DemoPageProps) {
  const { t } = useTranslation('demoPage');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.demo'), url: 'https://www.aibooking.dk/demo' },
  ]);

  const heroCardsText = t('heroCards', { returnObjects: true }) as TitleDescription[];
  const heroCardIcons = [Calendar, CheckCircle, Clock];
  const heroCardIconBg = ['bg-brand-100', 'bg-green-100', 'bg-orange-100'];
  const heroCardIconColor = ['text-brand-600', 'text-green-600', 'text-orange-600'];
  const heroCards = heroCardsText.map((item, i) => ({
    ...item,
    icon: heroCardIcons[i],
    iconBg: heroCardIconBg[i],
    iconColor: heroCardIconColor[i],
  }));

  const afterBookingSteps = t('afterBooking.steps', { returnObjects: true }) as TitleDesc[];

  const featuresText = t('features', { returnObjects: true }) as TitleDescription[];
  const featureIcons = [Clock, CheckCircle, Zap, Calendar, CheckCircle, Zap];
  const featureCardBg = [
    'from-brand-50 to-white border-brand-100',
    'from-green-50 to-white border-green-100',
    'from-orange-50 to-white border-orange-100',
    'from-brand-50 to-white border-brand-100',
    'from-red-50 to-white border-red-100',
    'from-teal-50 to-white border-teal-100',
  ];
  const featureIconBg = ['bg-brand-100', 'bg-green-100', 'bg-orange-100', 'bg-brand-100', 'bg-red-100', 'bg-teal-100'];
  const featureIconColor = ['text-brand-600', 'text-green-600', 'text-orange-600', 'text-brand-600', 'text-red-600', 'text-teal-600'];
  const features = featuresText.map((item, i) => ({
    ...item,
    icon: featureIcons[i],
    cardBg: featureCardBg[i],
    iconBg: featureIconBg[i],
    iconColor: featureIconColor[i],
  }));

  const benefits = t('benefitsSection.benefits', { returnObjects: true }) as TitleDescription[];

  const industryItems = t('industries.items', { returnObjects: true }) as TitleDesc[];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/demo"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />


      <section className="py-16 bg-gradient-to-br from-ink-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle_line1')}<span className="font-bold text-brand-600">{t('hero.subtitle_bold')}</span>{t('hero.subtitle_line2')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {heroCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-ink-200">
                  <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-2">{card.title}</h3>
                  <p className="text-ink-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-ink-200 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">{t('booking.title')}</h2>
              <p className="text-brand-100">{t('booking.subtitle')}</p>
            </div>
            <div className="p-12 text-center">
              <a
                href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t('booking.button')}
              </a>
            </div>
          </div>

          <div className="mt-12 bg-ink-50 rounded-2xl p-8 border border-ink-200">
            <h3 className="text-2xl font-bold text-ink-900 mb-4 text-center">{t('afterBooking.title')}</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {afterBookingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-ink-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-ink-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('whyChoose.title')}
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              {t('whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`bg-gradient-to-br ${feature.cardBg} p-8 rounded-3xl border hover:shadow-xl transition-all`}>
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-4">{feature.title}</h3>
                  <p className="text-ink-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-ink-900 to-brand-900 rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                {t('benefitsSection.title')}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-brand-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-brand-100">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-6">{t('benefitsSection.ctaTitle')}</p>
                <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
                  {t('benefitsSection.ctaText')}
                </p>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-brand-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
                >
                  {t('benefitsSection.ctaButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-ink-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4">
              {t('industries.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto">
              {t('industries.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-ink-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={demoFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default DemoPage;
