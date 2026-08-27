import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  PhoneIncoming, PhoneOutgoing, PhoneCall, Mic, Users, Calendar, MessageSquare,
  FileText, Headphones, Shield, CheckCircle, ArrowRight, ChevronDown, User,
  Sparkles, Clock, LayoutDashboard,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { localizedPrice } from '../utils/currency';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath, localizedUrl } from '../utils/localePaths';
import { createBreadcrumbSchema, createFAQSchema } from '../utils/structuredData';
import ClinicDashboardMock from '../components/ClinicDashboardMock';
import type { NavigatePage } from '../types/navigation';

// Danish-worded canonical path; SEO turns it into per-language hreflang URLs.
const PAGE_PATH = '/ind-og-udgaaende-opkald';

interface InboundOutboundPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface Faq { question: string; answer: string }
interface TitleDescription { title: string; description: string }
interface ComparisonItem { feature: string; inbound: boolean; outbound: boolean }
interface ChatLine { role: 'ai' | 'customer'; time: string; text: string }
interface ResultItem { label: string; value: string }

type Direction = 'inbound' | 'outbound';

function FAQItem({ question, answer }: Faq) {
  return (
    <details className="group border border-ink-200 rounded-2xl overflow-hidden bg-white">
      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-ink-50 transition-colors list-none">
        <span className="text-lg font-semibold text-ink-900">{question}</span>
        <ChevronDown className="w-5 h-5 text-ink-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
      </summary>
      <div className="px-6 pb-6 text-ink-600 leading-relaxed">{answer}</div>
    </details>
  );
}

// Decorative "live audio" bars. Heights are fixed rather than random so the
// component renders identically on every paint.
const WAVE_HEIGHTS = [40, 70, 100, 55, 85, 35, 65, 95, 45, 75, 30, 60, 90, 50, 80];

function Waveform({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[3px] h-6 ${className}`} aria-hidden="true">
      {WAVE_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-brand-400/70 animate-pulse"
          style={{ height: `${h}%`, animationDelay: `${i * 90}ms`, animationDuration: '1.4s' }}
        />
      ))}
    </div>
  );
}

// Compact call card used in the hero — a still frame of a call in progress.
function HeroCallCard() {
  const { t } = useTranslation('inboundOutboundPage');
  const actions = t('hero.card.actions', { returnObjects: true }) as string[];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-brand-500/20 rounded-[2rem] blur-2xl" aria-hidden="true" />
      <div className="relative bg-ink-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
              {t('hero.card.status')}
            </span>
          </div>
          <span className="text-sm font-mono text-ink-400">{t('hero.card.timer')}</span>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
            <PhoneIncoming className="w-5 h-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-white font-semibold truncate">Aibooking AI Voice</div>
            <div className="text-xs text-ink-400 truncate">{t('hero.card.direction')}</div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Mic className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-[11px] uppercase tracking-wider text-ink-400 font-semibold">
              {t('hero.card.transcriptLabel')}
            </span>
          </div>
          <p className="text-sm text-brand-50 leading-relaxed">{t('hero.card.line')}</p>
          <Waveform className="mt-4" />
        </div>

        <div className="flex flex-wrap gap-2">
          {actions.map((action, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 bg-green-500/15 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full border border-green-500/20"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// The worked example: a full call transcript plus what the AI settled during it.
function CallExample({ direction }: { direction: Direction }) {
  const { t } = useTranslation('inboundOutboundPage');
  const base = `example.${direction}`;

  const chat = t(`${base}.chat`, { returnObjects: true }) as ChatLine[];
  const outcomes = t(`${base}.outcomes`, { returnObjects: true }) as string[];
  const results = t(`${base}.results`, { returnObjects: true }) as ResultItem[];
  const DirectionIcon = direction === 'inbound' ? PhoneIncoming : PhoneOutgoing;

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Transcript */}
      <div className="lg:col-span-3">
        <div className="bg-ink-900 rounded-3xl border border-ink-700 shadow-2xl overflow-hidden h-full flex flex-col">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-ink-800 bg-ink-950/60">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
              <DirectionIcon className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold text-sm truncate">{t(`${base}.caller`)}</div>
              <div className="text-[11px] text-ink-400 truncate">{t(`${base}.meta`)}</div>
            </div>
            <Waveform className="hidden sm:flex" />
          </div>

          <div className="p-5 space-y-4 flex-1">
            {chat.map((line, i) => {
              const isAi = line.role === 'ai';
              return (
                <div key={i} className={`flex gap-3 ${isAi ? '' : 'flex-row-reverse'}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isAi ? 'bg-brand-600' : 'bg-ink-700'
                    }`}
                  >
                    {isAi ? (
                      <Sparkles className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-ink-300" />
                    )}
                  </div>
                  <div className={`max-w-[82%] ${isAi ? '' : 'text-right'}`}>
                    <div
                      className={`flex items-center gap-2 mb-1 text-[10px] uppercase tracking-wider text-ink-400 ${
                        isAi ? '' : 'justify-end'
                      }`}
                    >
                      <span className="font-semibold">
                        {isAi ? t('example.chatLabels.ai') : t('example.chatLabels.customer')}
                      </span>
                      <span className="font-mono normal-case tracking-normal">{line.time}</span>
                    </div>
                    <div
                      className={`inline-block px-4 py-3 rounded-2xl text-sm leading-relaxed text-left ${
                        isAi
                          ? 'bg-brand-600 text-white rounded-tl-sm'
                          : 'bg-ink-800 text-ink-100 border border-ink-700 rounded-tr-sm'
                      }`}
                    >
                      {line.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Context, outcomes and result */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-accent-400" />
            <span className="text-[11px] uppercase tracking-wider text-accent-400 font-semibold">
              {t(`${base}.situationLabel`)}
            </span>
          </div>
          <p className="text-ink-300 leading-relaxed text-sm">{t(`${base}.situation`)}</p>
        </div>

        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6">
          <h3 className="text-white font-semibold mb-4">{t(`${base}.outcomesLabel`)}</h3>
          <ul className="space-y-3">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink-300 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-6 shadow-xl">
          <h3 className="text-white font-semibold mb-4">{t(`${base}.resultsLabel`)}</h3>
          <dl className="space-y-3">
            {results.map((result, i) => (
              <div key={i} className="flex items-baseline justify-between gap-4 border-b border-white/15 last:border-0 pb-3 last:pb-0">
                <dt className="text-brand-100 text-xs uppercase tracking-wider flex-shrink-0">{result.label}</dt>
                <dd className="text-white font-semibold text-sm text-right">{result.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function InboundOutboundPage({ onNavigate }: InboundOutboundPageProps) {
  const { t, i18n } = useTranslation('inboundOutboundPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');
  const [direction, setDirection] = useState<Direction>('inbound');

  const faqs = t('faq', { returnObjects: true }) as Faq[];
  const features = t('features.items', { returnObjects: true }) as TitleDescription[];
  const useCases = t('useCases.items', { returnObjects: true }) as TitleDescription[];
  const steps = t('howItWorks.steps', { returnObjects: true }) as TitleDescription[];
  const comparison = t('comparison.items', { returnObjects: true }) as ComparisonItem[];

  const featureIcons = [
    PhoneIncoming, PhoneOutgoing, Mic, Users, Calendar,
    MessageSquare, FileText, Headphones, Shield,
  ];

  const heroStats = [
    { key: 'answer', icon: Clock },
    { key: 'availability', icon: PhoneCall },
    { key: 'saving', icon: Sparkles },
  ] as const;

  const plans = [
    { key: 'demo', price: 0, highlight: false },
    { key: 'starter', price: 1500, highlight: false },
    { key: 'professional', price: 2499, highlight: true },
    { key: 'enterprise', price: 5999, highlight: false },
  ] as const;

  // Service + FAQ + breadcrumb in one graph, so the page can win both a rich
  // FAQ result and a breadcrumb trail for the product name.
  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${localizedUrl(lang, PAGE_PATH)}#service`,
        name: 'Inbound-Outbound AI Voice',
        serviceType: t('hero.titleAccent'),
        description: t('seo.description'),
        url: localizedUrl(lang, PAGE_PATH),
        provider: {
          '@type': 'Organization',
          name: 'Aibooking.dk',
          url: 'https://www.aibooking.dk',
        },
        areaServed: 'DK',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'DKK',
          lowPrice: '1500',
          highPrice: '5999',
          offerCount: '4',
        },
      },
      createFAQSchema(faqs),
      createBreadcrumbSchema([
        { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
        { name: t('breadcrumb.current'), url: localizedUrl(lang, PAGE_PATH) },
      ]),
    ],
  }), [t, faqs, lang]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, PAGE_PATH)}
        path={PAGE_PATH}
        structuredData={structuredData}
      />
      <Navigation onNavigate={onNavigate} transparent={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ink-950 via-brand-950 to-ink-900 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-500/15 text-brand-200 px-4 py-2 rounded-full text-sm font-semibold mb-7 border border-brand-500/30">
                <PhoneIncoming className="w-4 h-4" />
                <PhoneOutgoing className="w-4 h-4" />
                <span>{t('hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.08] tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl sm:text-2xl text-brand-200 font-light mb-6 leading-snug">
                {t('hero.titleAccent')}
              </p>

              <p className="text-lg text-ink-300 leading-relaxed mb-9 max-w-xl">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl hover:bg-brand-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  {t('hero.cta_demo')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#eksempel"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold backdrop-blur-sm"
                >
                  <Headphones className="w-5 h-5" />
                  {t('hero.cta_example')}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {heroStats.map(({ key, icon: Icon }) => (
                  <div key={key} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                    <Icon className="w-5 h-5 text-brand-400 mb-2" />
                    <div className="text-2xl font-bold text-white mb-0.5">{t(`hero.stats.${key}.value`)}</div>
                    <div className="text-xs text-ink-400 leading-snug">{t(`hero.stats.${key}.label`)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-4">
              <HeroCallCard />
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
                {t('whatIs.title')}
              </h2>
              <div className="space-y-4 text-ink-600 leading-relaxed text-lg">
                <p>{t('whatIs.para1')}</p>
                <p>{t('whatIs.para2')}</p>
                <p>{t('whatIs.para3')}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-7 text-white shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <PhoneIncoming className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">{t('whatIs.inbound.title')}</h3>
                <p className="text-sm text-brand-50/90 leading-relaxed">{t('whatIs.inbound.desc')}</p>
              </div>
              <div className="bg-gradient-to-br from-ink-800 to-ink-950 rounded-3xl p-7 text-white shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center mb-5">
                  <PhoneOutgoing className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-bold text-xl mb-3">{t('whatIs.outbound.title')}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{t('whatIs.outbound.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section id="eksempel" className="py-20 md:py-28 bg-ink-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-500/15 text-brand-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-brand-500/25">
              <Headphones className="w-3.5 h-3.5" />
              {t('example.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              {t('example.title')}
            </h2>
            <p className="text-lg text-ink-400 max-w-3xl mx-auto leading-relaxed">
              {t('example.subtitle')}
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-ink-900 border border-ink-800 rounded-2xl p-1.5 gap-1.5">
              {(['inbound', 'outbound'] as const).map((dir) => {
                const Icon = dir === 'inbound' ? PhoneIncoming : PhoneOutgoing;
                const active = direction === dir;
                return (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => setDirection(dir)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'bg-brand-600 text-white shadow-lg'
                        : 'text-ink-400 hover:text-white hover:bg-ink-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {t(`example.tabs.${dir}`)}
                  </button>
                );
              })}
            </div>
          </div>

          <CallExample key={direction} direction={direction} />
        </div>
      </section>

      {/* Dashboard example */}
      <section id="dashboard" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-brand-100">
              <LayoutDashboard className="w-3.5 h-3.5" />
              {t('dashboard.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('dashboard.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {t('dashboard.subtitle')}
            </p>
          </div>

          <ClinicDashboardMock />

          <p className="text-center text-sm text-ink-400 mt-6">{t('clinicDashboard:note')}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-3">{step.title}</h3>
                <p className="text-ink-600 leading-relaxed text-[15px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('features.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = featureIcons[i] ?? Sparkles;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-ink-200/70 hover:shadow-lg hover:border-brand-200 transition-all"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2.5">{feature.title}</h3>
                  <p className="text-ink-600 leading-relaxed text-[15px]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('useCases.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto">{t('useCases.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-ink-50 to-brand-50/60 rounded-2xl p-7 border border-ink-200/70"
              >
                <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2.5">{useCase.title}</h3>
                <p className="text-ink-600 leading-relaxed text-[15px]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('comparison.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto">{t('comparison.subtitle')}</p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-lg">
            <table className="w-full bg-white min-w-[520px]">
              <thead className="bg-gradient-to-r from-brand-700 to-brand-600 text-white">
                <tr>
                  <th scope="col" className="px-6 py-5 text-left font-semibold">{t('comparison.feature')}</th>
                  <th scope="col" className="px-6 py-5 font-semibold w-40">
                    <span className="flex items-center justify-center gap-2">
                      <PhoneIncoming className="w-4 h-4" />
                      {t('comparison.inbound')}
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-5 font-semibold w-40">
                    <span className="flex items-center justify-center gap-2">
                      <PhoneOutgoing className="w-4 h-4" />
                      {t('comparison.outbound')}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200">
                {comparison.map((item, i) => (
                  <tr key={i} className="hover:bg-brand-50/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-ink-800">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.inbound ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="block w-4 h-0.5 bg-ink-300 mx-auto rounded-full" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.outbound ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="block w-4 h-0.5 bg-ink-300 mx-auto rounded-full" />
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
      <section id="priser" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto">{t('pricing.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className={`rounded-3xl p-7 transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-2xl lg:-mt-4 lg:pb-11'
                    : 'bg-white border border-ink-200 shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 inline-block">
                    {t('pricing.mostPopular')}
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-ink-900'}`}>
                  {t(`pricing.${plan.key}.name`)}
                </h3>
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-ink-900'}`}>
                    {plan.price === 0 ? t('pricing.free') : localizedPrice(plan.price, lang)}
                  </span>
                  {plan.price > 0 && (
                    <span className={plan.highlight ? 'text-brand-100' : 'text-ink-600'}>
                      {t('pricing.perMonth')}
                    </span>
                  )}
                </div>
                <div className={`text-sm mb-7 ${plan.highlight ? 'text-brand-100' : 'text-ink-600'}`}>
                  {t(`pricing.${plan.key}.label`)}
                </div>
                <a
                  href={contactHref}
                  className={`block text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-white text-brand-700 hover:bg-brand-50'
                      : 'bg-brand-600 text-white hover:bg-brand-700'
                  }`}
                >
                  {t('pricing.cta')}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-ink-400 mt-10 max-w-2xl mx-auto">
            {t('pricing.note')}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5 tracking-tight">
              {t('faqTitle')}
            </h2>
            <p className="text-lg text-ink-600">{t('faqSubtitle')}</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl hover:bg-brand-50 transition-all font-semibold shadow-lg"
            >
              {t('cta.primary')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#priser"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/25 px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold backdrop-blur-sm"
            >
              {t('cta.secondary')}
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default InboundOutboundPage;
