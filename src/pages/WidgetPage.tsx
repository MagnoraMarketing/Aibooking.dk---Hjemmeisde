import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Zap, Mic, Calendar, Clock, CheckCircle, MessageSquare, PhoneCall, Star, Shield, Globe,
  ChevronDown, ArrowRight, Phone, LayoutDashboard,
  SlidersHorizontal, Headphones, CalendarCheck,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { localizedPrice } from '../utils/currency';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';
import ClinicDashboardMock from '../components/ClinicDashboardMock';
import type { NavigatePage } from '../types/navigation';

const WIDGET_PLAN_PRICE_DKK = 999;

interface WidgetPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface Faq { question: string; answer: string }
interface TitleDescription { title: string; description: string }
interface LabelDesc { label: string; desc: string }
interface StatItem { value: string; label: string }
interface StepItem { title: string; description: string }

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

interface PricingPlanText {
  name: string;
  description: string;
  minutes: string;
  features: string[];
  cta: string;
}

function PricingSection() {
  const { t, i18n } = useTranslation('widgetPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const widgetPlanFeatures = t('pricing.widgetPlan.features', { returnObjects: true }) as string[];

  return (
    <section id="priser" className="py-20 md:py-28 bg-gradient-to-b from-white to-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">
            <CheckCircle className="w-4 h-4" />
            {t('pricing.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Widget plan – primary */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ink-900">{t('pricing.widgetPlan.heading')}</h3>
            <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">{t('pricing.widgetPlan.badge')}</span>
          </div>
          <p className="text-ink-800 mb-8 leading-relaxed max-w-3xl font-medium">
            {t('pricing.widgetPlan.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-ink-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-7xl font-bold text-ink-900">{localizedPrice(WIDGET_PLAN_PRICE_DKK, lang)}</span>
                  <span className="text-2xl text-brand-600 font-semibold">{t('pricing.widgetPlan.price_suffix')}</span>
                </div>
                <p className="text-ink-700 mb-1 font-medium">{t('pricing.widgetPlan.includes')}</p>
                <p className="text-ink-500 text-sm">{t('pricing.widgetPlan.renewal_note')}</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://buy.stripe.com/7sY3cu2H14JB00k4IX4AU04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3.5 rounded-xl hover:bg-brand-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {t('pricing.widgetPlan.cta_order')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={contactHref}
                    className="inline-flex items-center justify-center gap-2 bg-ink-100 text-ink-800 border border-ink-200 px-6 py-3.5 rounded-xl hover:bg-ink-200 transition-all font-semibold"
                  >
                    {t('pricing.widgetPlan.cta_intro')}
                  </a>
                </div>
              </div>

              <div>
                <ul className="space-y-3">
                  {widgetPlanFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-ink-800 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white border border-brand-100 rounded-2xl p-5 text-sm text-ink-600 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <span><span className="font-semibold text-ink-900">{t('pricing.widgetPlan.footnote_talketime_label')}</span> {t('pricing.widgetPlan.footnote_talketime_value')}</span>
            <span><span className="font-semibold text-ink-900">{t('pricing.widgetPlan.footnote_renewal_label')}</span> {t('pricing.widgetPlan.footnote_renewal_value')}</span>
            <span><span className="font-semibold text-ink-900">{t('pricing.widgetPlan.footnote_binding_label')}</span> {t('pricing.widgetPlan.footnote_binding_value')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// The phone assistant is a separate product line from the website widget this
// page is about, so it lives in its own clearly-separated section further down
// rather than mixed into the widget pricing above.
function PhoneAssistantSection() {
  const { t, i18n } = useTranslation('widgetPage');
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [setupSelected, setSetupSelected] = useState<Record<number, boolean>>({});
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const plansText = t('pricing.plans', { returnObjects: true }) as PricingPlanText[];
  // Optional setup/onboarding fee equals one month's subscription price,
  // charged once, and includes 1 hour of follow-up support afterwards.
  const planMeta = [
    { price: 0, highlighted: false, isDemo: true, href: contactHref },
    { price: 1500, highlighted: false, isDemo: false, href: 'https://buy.stripe.com/7sY5kC1CX5NF6oI3ET4AU00' },
    { price: 2499, highlighted: true, isDemo: false, href: 'https://buy.stripe.com/9B628q3L5b7Z3cwgrF4AU01' },
    { price: 5999, highlighted: false, isDemo: false, href: 'https://buy.stripe.com/7sYeVcgxRa3VcN64IX4AU02' },
  ];
  const phonePlans = plansText.map((plan, i) => ({ ...plan, ...planMeta[i], setup: planMeta[i].price }));

  const benefits = t('phoneSection.benefits', { returnObjects: true }) as TitleDescription[];
  const benefitIcons = [SlidersHorizontal, LayoutDashboard, Headphones, CalendarCheck];

  return (
    <section id="telefonassistent" className="py-20 md:py-28 bg-white border-t-4 border-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Separated intro – signals this is an additional product line */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-ink-900 text-accent-300 px-4 py-2 rounded-full text-sm font-bold">
            <Phone className="w-4 h-4" />
            {t('phoneSection.eyebrow')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900">
            {t('pricing.phoneAssistant.heading')}
          </h2>
          <p className="text-lg md:text-xl text-brand-700 font-semibold">
            {t('pricing.phoneAssistant.badge')}
          </p>
          <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.phoneAssistant.description')}
          </p>
        </div>

        {/* Managed from one dashboard */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">
                {t('phoneSection.dashboardTitle')}
              </h3>
              <p className="text-ink-600 leading-relaxed">
                {t('phoneSection.dashboardDescription')}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => {
                const Icon = benefitIcons[i];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-ink-900 text-[15px]">{benefit.title}</div>
                      <div className="text-sm text-ink-600 mt-0.5 leading-relaxed">{benefit.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full width: the frame is too detailed to read in a half column. */}
          <ClinicDashboardMock />
          <p className="text-center text-sm text-ink-400 mt-6">{t('clinicDashboard:note')}</p>
        </div>

        {/* Phone plans */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-ink-900 text-center mb-2">{t('pricing.choosePackage.title')}</h3>
          <p className="text-ink-600 text-center mb-12">{t('pricing.choosePackage.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {phonePlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 text-white shadow-xl scale-105 border border-brand-500/50'
                  : 'bg-white border border-ink-200/80 hover:border-brand-300/60 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-ink-900 px-5 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                    {t('pricing.most_popular_badge')}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h4 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                  {plan.name}
                </h4>
                <p className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.price === 0 ? (
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                      {t('pricing.free_label')}
                    </span>
                  ) : (
                    <>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                        {localizedPrice(plan.price, lang)}
                      </span>
                      <span className={`ml-2 ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>{t('pricing.currency_suffix')}</span>
                    </>
                  )}
                </div>
                <div className={`mt-2 text-sm ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                  {plan.minutes}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? 'bg-brand-500' : 'bg-brand-100'}`}>
                      <CheckCircle className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-brand-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-brand-50' : 'text-ink-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.setup !== 0 && (
                <div className={`mb-6 pt-6 border-t ${plan.highlighted ? 'border-brand-500' : 'border-ink-200'}`}>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!setupSelected[index]}
                      onChange={() => setSetupSelected((s) => ({ ...s, [index]: !s[index] }))}
                      className="mt-0.5 w-4 h-4 rounded accent-white flex-shrink-0"
                    />
                    <span className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                      {t('pricing.setup_note_optional', { setup: localizedPrice(plan.setup, lang) })}
                    </span>
                  </label>
                </div>
              )}

              <div className="flex-grow"></div>

              <a
                href={plan.href}
                {...(plan.isDemo ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all transform hover:scale-[1.02] text-[15px] ${
                  plan.highlighted
                    ? 'bg-white text-brand-600 hover:bg-brand-50 shadow-md'
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-5">
          <p className="inline-block bg-brand-50 border border-brand-100 text-brand-800 rounded-2xl px-6 py-4 font-medium max-w-2xl mx-auto">
            {t('pricing.setup_recommendation')}
          </p>
          <p className="text-ink-600 text-lg max-w-2xl mx-auto">
            {t('pricing.after_order_note')}
          </p>
        </div>

        {/* Additional prices */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-ink-900 mb-8 text-center">{t('pricing.additionalPrices.title')}</h3>
          <div className="bg-white rounded-2xl border border-ink-200 overflow-hidden shadow-sm">
            <button
              onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
              className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-ink-50 transition-colors"
            >
              <h4 className="text-xl font-semibold text-ink-900">{t('pricing.additionalPrices.toggle_label')}</h4>
              <ChevronDown className={`w-6 h-6 text-ink-600 transition-transform duration-300 ${isAdditionalOpen ? 'rotate-180' : ''}`} />
            </button>

            {isAdditionalOpen && (
              <div className="border-t border-ink-200">
                <div className="p-8 md:p-10 space-y-8">
                  <div className="pb-8 border-b border-ink-200">
                    <h4 className="text-xl font-semibold text-ink-900 mb-3">{t('pricing.additionalPrices.setup.title')}</h4>
                    <p className="text-ink-700 text-lg">
                      {t('pricing.additionalPrices.setup.value')} <span className="text-ink-600 text-base">{t('pricing.additionalPrices.setup.note')}</span>
                    </p>
                  </div>
                  <div className="pb-8 border-b border-ink-200">
                    <h4 className="text-lg font-semibold text-ink-900 mb-2">
                      {t('pricing.additionalPrices.maintenance.title')} <span className="text-brand-600 text-sm font-medium">{t('pricing.additionalPrices.maintenance.optional_label')}</span>
                    </h4>
                    <p className="text-ink-600 mb-2 text-sm leading-relaxed">
                      {t('pricing.additionalPrices.maintenance.description')}
                    </p>
                    <p className="text-ink-900 font-semibold text-base">{t('pricing.additionalPrices.maintenance.price')}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-ink-900 mb-4">{t('pricing.additionalPrices.hourly.title')}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-ink-700">{t('pricing.additionalPrices.hourly.prompting_label')}</span>
                        <span className="text-ink-900 font-semibold">{t('pricing.additionalPrices.hourly.prompting_price')}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ink-700">{t('pricing.additionalPrices.hourly.development_label')}</span>
                        <span className="text-ink-900 font-semibold">{t('pricing.additionalPrices.hourly.development_price')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function WidgetPage({ onNavigate }: WidgetPageProps) {
  const { t } = useTranslation('widgetPage');

  const faqs = t('faqs', { returnObjects: true }) as Faq[];

  const whatIsChips = t('whatIs.chips', { returnObjects: true }) as string[];
  const whatIsChipIcons = [Mic, MessageSquare, Calendar, Globe];
  const whatIsChipItems = whatIsChips.map((label, i) => ({ label, icon: whatIsChipIcons[i] }));

  const howItWorksStepsText = t('howItWorks.steps', { returnObjects: true }) as StepItem[];
  const howItWorksMeta = [
    { step: '01', icon: Zap },
    { step: '02', icon: Mic },
    { step: '03', icon: Calendar },
  ];
  const howItWorksSteps = howItWorksStepsText.map((item, i) => ({ ...item, ...howItWorksMeta[i] }));

  const featureItemsText = t('features.items', { returnObjects: true }) as TitleDescription[];
  const featureIcons = [Mic, Calendar, Clock, MessageSquare, Shield, Globe, Zap, Star, PhoneCall];
  const featureItems = featureItemsText.map((item, i) => ({ ...item, icon: featureIcons[i] }));

  const useCaseItems = t('useCases.items', { returnObjects: true }) as LabelDesc[];
  const roiStats = t('useCases.roi.stats', { returnObjects: true }) as StatItem[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/widget"
      />
      <Navigation onNavigate={onNavigate} transparent />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pb-28 bg-ink-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:32px_32px]"></div>
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-brand-600/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-accent-300 px-4 py-2 rounded-full text-sm font-semibold border border-white/10">
                  <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                  {t('hero.badge')}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {t('hero.title_line1')}{' '}
                  <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-accent-300 bg-clip-text text-transparent">{t('hero.title_line2')}</span>
                </h1>
                <p className="text-xl text-ink-200 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center gap-2 bg-accent-400 text-ink-950 px-8 py-4 rounded-xl hover:bg-accent-300 transition-all font-bold shadow-lg shadow-accent-500/20 transform hover:scale-[1.02]"
                  >
                    {t('hero.cta_demo')}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="https://buy.stripe.com/7sY3cu2H14JB00k4IX4AU04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    {t('hero.cta_buy')}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm text-ink-300">
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent-400" /> {t('hero.trust_no_binding')}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent-400" /> {t('hero.trust_5min')}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent-400" /> {t('hero.trust_gdpr')}</span>
                </div>
              </div>

              <div className="relative flex items-center justify-center py-8 lg:py-0">
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-brand-400/20"></div>
                  <div className="absolute inset-10 rounded-full border border-brand-400/25 animate-pulse"></div>
                  <div className="absolute inset-20 rounded-full border border-accent-400/25"></div>
                  <div className="w-28 h-28 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center shadow-2xl shadow-brand-500/40">
                    <Mic className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 sm:right-6 w-52 sm:w-60 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/ai-voice-widget.webp"
                    alt={t('hero.image_alt')}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -top-2 left-0 sm:-left-4 bg-white rounded-2xl shadow-xl p-4 border border-ink-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <PhoneCall className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-900">{t('hero.booking_badge_title')}</p>
                      <p className="text-xs text-ink-500">{t('hero.booking_badge_sub')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-brand-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {(t('stats', { returnObjects: true }) as StatItem[]).map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-brand-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is a voice widget */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-ink-100 to-brand-50 rounded-3xl blur-2xl opacity-70"></div>
                <img
                  src="/ai-widget-website.webp"
                  alt={t('whatIs.image_alt')}
                  className="relative w-full rounded-3xl shadow-2xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
                  {t('whatIs.title')}
                </h2>
                <p className="text-lg text-ink-600 leading-relaxed">
                  {t('whatIs.para1_pre')}<strong>{t('whatIs.para1_strong')}</strong>{t('whatIs.para1_post')}
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  {t('whatIs.para2_pre')}<strong>{t('whatIs.para2_strong')}</strong>{t('whatIs.para2_post')}
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  {t('whatIs.para3')}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {whatIsChipItems.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 bg-ink-50 rounded-xl p-4 border border-ink-100">
                      <div className="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <span className="font-semibold text-ink-800 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-ink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900">
                {t('howItWorks.title')}
              </h2>
              <p className="text-xl text-ink-600 max-w-3xl mx-auto">
                {t('howItWorks.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksSteps.map(({ step, icon: Icon, title, description }) => (
                <div key={step} className="relative bg-white rounded-3xl p-8 shadow-md border border-ink-100 hover:shadow-lg transition-shadow">
                  <div className="text-6xl font-bold text-ink-100 mb-4 leading-none">{step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">{title}</h3>
                  <p className="text-ink-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900">
                {t('features.title')}
              </h2>
              <p className="text-xl text-ink-600 max-w-3xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureItems.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group bg-white border border-ink-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all">
                  <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{title}</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 md:py-28 bg-ink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900">
                {t('useCases.title')}
              </h2>
              <p className="text-xl text-ink-600 max-w-3xl mx-auto">
                {t('useCases.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCaseItems.map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-ink-100 hover:border-brand-200 hover:shadow-md transition-all">
                  <div className="font-bold text-ink-900 mb-1">{label}</div>
                  <div className="text-xs text-ink-500">{desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-ink-200 shadow-md max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-ink-900 mb-4 text-center">
                {t('useCases.roi.title')}
              </h3>
              <p className="text-ink-600 text-center mb-8 leading-relaxed">
                {t('useCases.roi.desc_pre')}<strong>{t('useCases.roi.desc_strong')}</strong>{t('useCases.roi.desc_post')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {roiStats.map((stat, i) => (
                  <div key={i} className="bg-ink-50 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-brand-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-ink-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-ink-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900">
                {t('faqSection.title')}
              </h2>
              <p className="text-xl text-ink-600">
                {t('faqSection.subtitle')}
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* AI phone assistant – separate product line, kept apart from the widget offer above */}
        <PhoneAssistantSection />

        {/* CTA */}
        <section className="py-20 md:py-28 bg-ink-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-3xl overflow-hidden shadow-2xl">
              <div className="px-8 md:px-16 py-16 md:py-20 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {t('ctaFinal.title')}
                </h2>
                <p className="text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed">
                  {t('ctaFinal.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-xl hover:bg-brand-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {t('ctaFinal.cta_intro')}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="https://buy.stripe.com/7sY3cu2H14JB00k4IX4AU04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-500/30 text-white border border-white/30 px-8 py-4 rounded-xl hover:bg-brand-500/50 transition-all font-semibold"
                  >
                    {t('ctaFinal.cta_order')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default WidgetPage;
