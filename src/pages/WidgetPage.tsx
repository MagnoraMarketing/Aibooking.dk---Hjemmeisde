import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Zap, Mic, Calendar, Clock, CheckCircle, MessageSquare, PhoneCall, Star, Shield, Globe,
  ChevronDown, ArrowRight, Phone, LayoutDashboard,
  SlidersHorizontal, Headphones, CalendarCheck,
  ShoppingCart, Store, Package, RefreshCw, Sparkles, Users,
  PhoneOff, Loader2,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RelatedGuides from '../components/RelatedGuides';
import AppQrSection from '../components/AppQrSection';
import SEO from '../components/SEO';
import WidgetCapabilitiesSEO from '../components/WidgetCapabilitiesSEO';
import { SIGNUP_URL } from '../utils/backend';
import QuoteStarter from '../components/QuoteStarter';
import { VOICE_DEMO_ASSISTANT_ID } from '../utils/voiceDemo';
import { useVoiceDemoCall } from '../hooks/useVoiceDemoCall';
import type { SupportedLanguage } from '../i18n/config';
import { voiceWidgetImage, websiteWidgetImage } from '../utils/localizedImages';
import { localizedUrl } from '../utils/localePaths';
import { createBreadcrumbSchema, createFAQSchema } from '../utils/structuredData';
import ClinicDashboardMock from '../components/ClinicDashboardMock';
import ShopifyIntegrationMock from '../components/ShopifyIntegrationMock';
import type { NavigatePage } from '../types/navigation';
import PageLink from '../components/PageLink';
import BookingAudioDemo from '../components/BookingAudioDemo';
import PhoneAnsweringSEO from '../components/PhoneAnsweringSEO';

// Danish-worded canonical path; SEO turns it into per-language hreflang URLs.
const PAGE_PATH = '/widget';

interface WidgetPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface Faq { question: string; answer: string }
interface TitleDescription { title: string; description: string }
interface LabelDesc { label: string; desc: string }
interface ChatLine { role: 'ai' | 'customer'; text: string }
interface TitleDesc { title: string; desc: string }
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

function PhoneAssistantSection() {
  const { t } = useTranslation('widgetPage');

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

        <div className="text-center">
          <a
            href="#priser"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg"
          >
            {t('priceEstimate:starter.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WidgetPage({ onNavigate }: WidgetPageProps) {
  const { t, i18n } = useTranslation('widgetPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const voiceCall = useVoiceDemoCall(VOICE_DEMO_ASSISTANT_ID);

  const faqs = t('faqs', { returnObjects: true }) as Faq[];

  // FAQ + breadcrumb in one graph, so the page (the "AI widget til
  // hjemmeside" landing page) can win a rich FAQ result and a breadcrumb
  // trail, same pattern as InboundOutboundPage.
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        createFAQSchema(faqs),
        createBreadcrumbSchema([
          { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
          { name: t('breadcrumb.current'), url: localizedUrl(lang, PAGE_PATH) },
        ]),
      ],
    }),
    [t, faqs, lang]
  );

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

  const platformList = t('platforms.list', { returnObjects: true }) as string[];
  const platformCards = t('platforms.cards', { returnObjects: true }) as TitleDescription[];
  const platformCardIcons = [Calendar, MessageSquare, ShoppingCart];

  const webshopPoints = t('webshop.points', { returnObjects: true }) as LabelDesc[];
  const webshopPointIcons = [Package, RefreshCw, ShoppingCart, Sparkles];
  const webshopChat = t('webshop.chat.lines', { returnObjects: true }) as ChatLine[];

  const shopifyChannelsText = t('shopifyIntegration.channels', { returnObjects: true }) as TitleDescription[];
  const shopifyChannelIcons = [Mic, PhoneCall];
  const shopifyChannels = shopifyChannelsText.map((item, i) => ({ ...item, icon: shopifyChannelIcons[i] }));

  const shopifyPointsText = t('shopifyIntegration.points', { returnObjects: true }) as LabelDesc[];
  const shopifyPointIcons = [Package, RefreshCw, Shield, Clock];
  const shopifyPoints = shopifyPointsText.map((item, i) => ({ ...item, icon: shopifyPointIcons[i] }));

  const websiteExamples = t('realExamples.website.items', { returnObjects: true }) as TitleDesc[];
  const webshopExamples = t('realExamples.webshop.items', { returnObjects: true }) as TitleDesc[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, PAGE_PATH)}
        path={PAGE_PATH}
        structuredData={structuredData}
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
                    type="button"
                    onClick={voiceCall.state === 'active' ? voiceCall.stop : voiceCall.start}
                    disabled={voiceCall.state === 'connecting'}
                    className="inline-flex items-center justify-center gap-2 bg-accent-400 text-ink-950 px-8 py-4 rounded-xl hover:bg-accent-300 transition-all font-bold shadow-lg shadow-accent-500/20 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-wait disabled:hover:scale-100"
                  >
                    {voiceCall.state === 'active' ? (
                      <>
                        <PhoneOff className="w-5 h-5" />
                        {t('hero.cta_demo_end')}
                      </>
                    ) : voiceCall.state === 'connecting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('hero.cta_demo_connecting')}
                      </>
                    ) : (
                      <>
                        {t('hero.cta_demo')}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <a
                    href={SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    {t('hero.cta_buy')}
                  </a>
                </div>
                {voiceCall.state === 'error' && (
                  <p className="text-sm text-red-300">{t('hero.cta_demo_error')}</p>
                )}
                <div className="flex flex-wrap items-center gap-6 text-sm text-ink-300">
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent-400" /> {t('hero.trust_no_binding')}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent-400" /> {t('hero.trust_5min')}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent-400" /> {t('hero.trust_gdpr')}</span>
                </div>
              </div>

              <div className="relative flex items-center justify-center py-8 lg:py-0">
                <button
                  type="button"
                  onClick={voiceCall.state === 'active' ? voiceCall.stop : voiceCall.start}
                  disabled={voiceCall.state === 'connecting'}
                  aria-label={voiceCall.state === 'active' ? t('hero.cta_demo_end') : t('hero.cta_demo')}
                  className="relative w-full max-w-sm aspect-square flex items-center justify-center disabled:cursor-wait"
                >
                  <div className={`absolute inset-0 rounded-full border transition-colors ${voiceCall.state === 'active' ? 'border-accent-400/40' : 'border-brand-400/20'}`}></div>
                  <div className={`absolute inset-10 rounded-full border animate-pulse transition-colors ${voiceCall.isAssistantSpeaking ? 'border-accent-400/60' : 'border-brand-400/25'}`}></div>
                  <div className="absolute inset-20 rounded-full border border-accent-400/25"></div>
                  <div className={`w-28 h-28 bg-gradient-to-br rounded-full flex items-center justify-center shadow-2xl shadow-brand-500/40 transition-transform ${voiceCall.isAssistantSpeaking ? 'scale-110' : ''} ${voiceCall.state === 'active' ? 'from-accent-400 to-accent-600' : 'from-brand-500 to-brand-700'}`}>
                    {voiceCall.state === 'connecting' ? (
                      <Loader2 className="w-12 h-12 text-white animate-spin" />
                    ) : voiceCall.state === 'active' ? (
                      <PhoneOff className="w-12 h-12 text-white" />
                    ) : (
                      <Mic className="w-12 h-12 text-white" />
                    )}
                  </div>
                </button>

                <div className="absolute -bottom-2 -right-2 sm:right-6 w-52 sm:w-60 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={voiceWidgetImage(lang).src}
                    width={voiceWidgetImage(lang).width}
                    height={voiceWidgetImage(lang).height}
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

        {/* Real recorded example call (Danish only), right below the hero */}
        <BookingAudioDemo className="border-t border-white/10" />

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
                  src={websiteWidgetImage(lang).src}
                  width={websiteWidgetImage(lang).width}
                  height={websiteWidgetImage(lang).height}
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

        {/* Platforms the widget embeds into */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">
                <Users className="w-4 h-4" />
                {t('platforms.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                {t('platforms.title')}
              </h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {t('platforms.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-14">
              {platformList.map((platform) => (
                <div key={platform} className="bg-white border border-ink-200 rounded-2xl p-4 text-center hover:border-brand-300 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Store className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="text-sm font-semibold text-ink-800">{platform}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platformCards.map((card, i) => {
                const Icon = platformCardIcons[i] ?? Calendar;
                return (
                  <div key={i} className="bg-white border border-ink-200 rounded-2xl p-6">
                    <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-bold text-ink-900 mb-2">{card.title}</h3>
                    <p className="text-ink-600 text-[15px] leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Webshop widget */}
        <section className="py-20 md:py-28 bg-ink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">
                  <ShoppingCart className="w-4 h-4" />
                  {t('webshop.badge')}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight tracking-tight">
                  {t('webshop.title')}
                </h2>
                <p className="text-lg text-ink-600 leading-relaxed">{t('webshop.para1')}</p>
                <p className="text-lg text-ink-600 leading-relaxed">{t('webshop.para2')}</p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {webshopPoints.map((point, i) => {
                    const Icon = webshopPointIcons[i] ?? Package;
                    return (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-ink-200">
                        <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-brand-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-ink-800 text-sm">{point.label}</div>
                          <div className="text-xs text-ink-600 mt-0.5 leading-snug">{point.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-100 to-ink-100 rounded-3xl blur-2xl opacity-60" aria-hidden="true" />
                <div className="relative bg-white rounded-3xl shadow-2xl border border-ink-100 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-ink-900 truncate">{t('webshop.chat.title')}</div>
                      <div className="flex items-center gap-1.5 text-xs text-ink-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {t('webshop.chat.status')}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {webshopChat.map((line, i) => {
                      const isAi = line.role === 'ai';
                      return (
                        <div
                          key={i}
                          className={`rounded-xl p-3.5 border ${
                            isAi
                              ? 'bg-brand-50 border-brand-100'
                              : 'bg-ink-50 border-ink-200 ml-6'
                          }`}
                        >
                          <div className="text-[11px] uppercase tracking-wider font-semibold mb-1 text-ink-600">
                            {isAi ? t('webshop.chat.aiLabel') : t('webshop.chat.customerLabel')}
                          </div>
                          <p className="text-sm text-ink-800 leading-relaxed">{line.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website vs webshop examples */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                {t('realExamples.title')}
              </h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {t('realExamples.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {([
                { key: 'website', icon: Globe, items: websiteExamples },
                { key: 'webshop', icon: ShoppingCart, items: webshopExamples },
              ] as const).map(({ key, icon: Icon, items }) => (
                <div key={key} className="bg-white rounded-3xl border border-ink-200 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900">{t(`realExamples.${key}.title`)}</h3>
                  </div>
                  <ul className="space-y-4">
                    {items.map((example, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-ink-900">{example.title}: </span>
                          <span className="text-ink-600 text-[15px] leading-relaxed">{example.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price estimate: industry, talk time and what the AI handles */}
        <QuoteStarter />

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

        {/* Shopify integration – ties the widget and the phone assistant
            together, since both channels answer from the same connected store */}
        <section className="py-20 md:py-28 bg-white border-t border-ink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">
                <ShoppingCart className="w-4 h-4" />
                {t('shopifyIntegration.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                {t('shopifyIntegration.title')}
              </h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                {t('shopifyIntegration.subtitle')}
              </p>
              <PageLink page="shopify" onClick={() => onNavigate('shopify')}
                className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800">
                {t('shopifyIntegration.pageLink')}
                <ArrowRight className="w-4 h-4" />
              </PageLink>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-8 max-w-4xl mx-auto">
              {shopifyChannels.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <div key={i} className="flex items-start gap-3 bg-ink-50 border border-ink-200 rounded-2xl p-5">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-ink-200">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-ink-900 text-[15px]">{channel.title}</div>
                      <p className="text-sm text-ink-600 mt-1 leading-relaxed">{channel.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-5xl mx-auto">
              {shopifyPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="bg-white border border-ink-200 rounded-2xl p-5">
                    <Icon className="w-5 h-5 text-brand-600 mb-3" />
                    <div className="font-semibold text-ink-900 text-sm">{point.label}</div>
                    <div className="text-xs text-ink-600 mt-1 leading-relaxed">{point.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Full width: the frame is too detailed to read in a half column. */}
            <div className="max-w-3xl mx-auto">
              <ShopifyIntegrationMock />
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
                  <PageLink page="contact"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-xl hover:bg-brand-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {t('ctaFinal.cta_intro')}
                    <ArrowRight className="w-5 h-5" />
                  </PageLink>
                  <a
                    href={SIGNUP_URL}
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
      <WidgetCapabilitiesSEO />
      <AppQrSection />
      <RelatedGuides slugs={['ai-widget-hjemmeside-komplet-guide', 'ai-widget-vs-kontaktformular', 'ai-til-hjemmeside']} />
      <PhoneAnsweringSEO variant="pages.widget" />
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default WidgetPage;
