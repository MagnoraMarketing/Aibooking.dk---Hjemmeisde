import { useTranslation } from 'react-i18next';
import {
  PhoneIncoming, PhoneOutgoing, BarChart3, Zap, Shield, Globe,
  CheckCircle, ArrowRight, ChevronDown, Clock, TrendingUp, Users,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { localizedPrice } from '../utils/currency';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';

interface InboundOutboundPageProps {
  onNavigate: (page: 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'inbound-outbound') => void;
}

interface Faq { question: string; answer: string }
interface TitleDescription { title: string; description: string }
interface ComparisonItem { feature: string; inbound: boolean; outbound: boolean }

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-ink-200 rounded-2xl overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-ink-50 transition-colors list-none">
        <span className="text-lg font-semibold text-ink-900">{question}</span>
        <ChevronDown className="w-5 h-5 text-ink-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
      </summary>
      <div className="px-6 pb-6 text-ink-600 leading-relaxed">{answer}</div>
    </details>
  );
}

function InboundOutboundPage({ onNavigate }: InboundOutboundPageProps) {
  const { t, i18n } = useTranslation('inboundOutboundPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const faqs = t('faq', { returnObjects: true }) as Faq[];
  const features = t('features.items', { returnObjects: true }) as TitleDescription[];
  const useCases = t('useCases.items', { returnObjects: true }) as TitleDescription[];
  const comparison = t('comparison', { returnObjects: true }) as ComparisonItem[];

  const featureIcons = [PhoneIncoming, PhoneOutgoing, BarChart3, Zap, Shield, Globe, TrendingUp, Users, Clock];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/ind-og-udgaaende-opkald"
      />
      <Navigation onNavigate={onNavigate} transparent={true} />

      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-ink-900 via-brand-900 to-ink-900 flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-200 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-500/30">
            <PhoneIncoming className="w-4 h-4" />
            <PhoneOutgoing className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-brand-100 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl hover:bg-brand-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {t('hero.cta_demo')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#priser"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold backdrop-blur-sm"
            >
              {t('hero.cta_pricing')}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: PhoneIncoming, label: t('hero.stats.inbound') },
              { icon: PhoneOutgoing, label: t('hero.stats.outbound') },
              { icon: TrendingUp, label: t('hero.stats.roi') }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white">
                  <Icon className="w-8 h-8 mb-2 opacity-80" />
                  <p className="text-sm font-medium opacity-90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
                {t('whatIs.title')}
              </h2>
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <p>{t('whatIs.para1')}</p>
                <p>{t('whatIs.para2')}</p>
                <p>{t('whatIs.para3')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center">
                <PhoneIncoming className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('whatIs.inbound.title')}</h3>
                <p className="text-sm opacity-90">{t('whatIs.inbound.desc')}</p>
              </div>
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center">
                <PhoneOutgoing className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('whatIs.outbound.title')}</h3>
                <p className="text-sm opacity-90">{t('whatIs.outbound.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-md border border-ink-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">{feature.title}</h3>
                  <p className="text-ink-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('useCases.title')}
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              {t('useCases.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-gradient-to-br from-ink-50 to-brand-50 rounded-2xl p-8 border border-ink-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900 mb-2">{useCase.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('comparison.title')}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-brand-600 to-brand-700">
                <tr className="text-white">
                  <th className="px-6 py-4 text-left font-semibold">{t('comparison.feature')}</th>
                  <th className="px-6 py-4 text-center font-semibold flex items-center justify-center gap-2">
                    <PhoneIncoming className="w-5 h-5" />
                    {t('comparison.inbound')}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold flex items-center justify-center gap-2">
                    <PhoneOutgoing className="w-5 h-5" />
                    {t('comparison.outbound')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200">
                {comparison.map((item, i) => (
                  <tr key={i} className="hover:bg-ink-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-ink-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.inbound ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 text-ink-300 mx-auto">-</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.outbound ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 text-ink-300 mx-auto">-</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t('pricing.demo.name'), price: 0, label: t('pricing.demo.label'), highlight: false },
              { name: t('pricing.starter.name'), price: 1500, label: '200 min', highlight: false },
              { name: t('pricing.professional.name'), price: 2499, label: '600 min', highlight: true },
              { name: t('pricing.enterprise.name'), price: 5999, label: '2000 min', highlight: false }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-2xl transform scale-105'
                    : 'bg-white border border-ink-200 text-ink-900 shadow-md'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    {t('pricing.mostPopular')}
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-ink-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-ink-900'}`}>
                    {plan.price === 0 ? t('pricing.free') : `${localizedPrice(plan.price, lang)}`}
                  </span>
                  {plan.price > 0 && <span className={`ml-2 ${plan.highlight ? 'text-brand-100' : 'text-ink-600'}`}>/md</span>}
                </div>
                <div className={`text-sm mb-6 ${plan.highlight ? 'text-brand-100' : 'text-ink-600'}`}>
                  {plan.label}
                </div>
                <a
                  href={contactHref}
                  className={`block text-center py-3 px-4 rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-white text-brand-600 hover:bg-brand-50'
                      : 'bg-brand-600 text-white hover:bg-brand-700'
                  }`}
                >
                  {t('pricing.cta')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-16 text-center">
            {t('faqTitle')}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default InboundOutboundPage;
