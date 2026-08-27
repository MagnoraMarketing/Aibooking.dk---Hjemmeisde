import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { aboutFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { Users, Target, Lightbulb, Heart, TrendingUp, Shield, Zap, Globe } from 'lucide-react';
import type { NavigatePage } from '../types/navigation';

interface AboutPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface TitleDescription { title: string; description: string }
interface WidgetFeature { title: string; description: string }

function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useTranslation('aboutPage');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.about'), url: 'https://www.aibooking.dk/about' },
  ]);

  const valuesText = t('values.items', { returnObjects: true }) as TitleDescription[];
  const valueIcons = [Heart, Lightbulb, Shield, TrendingUp];
  const values = valuesText.map((item, i) => ({ ...item, icon: valueIcons[i] }));

  const benefitsText = t('benefits.items', { returnObjects: true }) as TitleDescription[];
  const benefitIcons = [TrendingUp, Zap, Shield, Lightbulb];
  const benefits = benefitsText.map((item, i) => ({ ...item, icon: benefitIcons[i] }));

  const incomingFeatures = t('receptionist.incoming.features', { returnObjects: true }) as string[];
  const outgoingFeatures = t('receptionist.outgoing.features', { returnObjects: true }) as string[];

  const widgetItemsText = t('widget.items', { returnObjects: true }) as WidgetFeature[];
  const widgetItemIcons = [Zap, Shield, TrendingUp];
  const widgetItems = widgetItemsText.map((item, i) => ({ ...item, icon: widgetItemIcons[i] }));

  const storyParagraphs = t('story.paragraphs', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ink-50 via-white to-brand-50/30">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/about"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              <span>{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              {t('hero.title_line1')}<br />{t('hero.title_line2')}
            </h1>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                <span>{t('story.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-ink-900 mb-6">
                {t('story.title')}
              </h2>
              <div className="space-y-4 text-ink-600 leading-relaxed">
                {storyParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-12 text-white shadow-2xl">
              <Globe className="w-16 h-16 mb-8 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">{t('vision.title')}</h3>
              <p className="text-brand-100 text-lg leading-relaxed mb-6">
                {t('vision.description')}
              </p>
              <div className="flex items-center space-x-3 bg-brand-500/30 rounded-xl p-4">
                <Zap className="w-8 h-8 text-yellow-300" />
                <span className="font-semibold">{t('vision.badge')}</span>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink-900 mb-4">{t('values.title')}</h2>
              <p className="text-xl text-ink-600 max-w-2xl mx-auto">
                {t('values.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all hover:scale-105">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-3">{value.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink-900 mb-4">{t('benefits.title')}</h2>
              <p className="text-xl text-ink-600 max-w-2xl mx-auto">
                {t('benefits.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-4">{benefit.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-ink-200/60 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-ink-900 mb-4">{t('receptionist.title')}</h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {t('receptionist.description')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-ink-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ink-900 mb-4">{t('receptionist.incoming.title')}</h3>
                <p className="text-ink-600 leading-relaxed mb-4">
                  {t('receptionist.incoming.description')}
                </p>
                <ul className="space-y-2 text-ink-600">
                  {incomingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ink-900 mb-4">{t('receptionist.outgoing.title')}</h3>
                <p className="text-ink-600 leading-relaxed mb-4">
                  {t('receptionist.outgoing.description')}
                </p>
                <ul className="space-y-2 text-ink-600">
                  {outgoingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-ink-200/60 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-ink-900 mb-4">{t('widget.title')}</h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {t('widget.description')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {widgetItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-ink-50 rounded-2xl p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-3">{item.title}</h3>
                    <p className="text-ink-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <a
                href="https://www.aibooking.dk/widget"
                className="inline-block bg-brand-600 text-white px-8 py-4 rounded-xl hover:bg-brand-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {t('widget.cta')}
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('ctaSection.title')}</h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('ctaSection.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('demo')}
                className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                {t('ctaSection.button_demo')}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-brand-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/20"
              >
                {t('ctaSection.button_contact')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={aboutFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default AboutPage;
