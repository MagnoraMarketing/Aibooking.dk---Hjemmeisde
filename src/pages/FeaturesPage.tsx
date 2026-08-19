import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { featuresFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import {
  Phone, Calendar, MessageSquare, Clock, Shield, CheckCircle, Zap,
  Users, Settings, TrendingUp, DollarSign, PhoneIncoming,
  PhoneOutgoing, Bot, Globe, ArrowRight, Mic, Radio, Volume2,
  MousePointer, LayoutDashboard, LineChart, FileText, RefreshCw, Activity
} from 'lucide-react';

type PageType = 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog' | 'blog-category' | 'blog-post';

interface FeaturesPageProps {
  onNavigate: (page: PageType) => void;
}

interface TitleDescription { title: string; description: string }
interface LabelDesc { label: string; desc: string }
interface TitleDesc { title: string; desc: string }
interface AdditionalFeature { title: string; description: string; benefits: string[] }
interface StatItem { value: string; label: string }

function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const { t } = useTranslation('featuresPage');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.features'), url: 'https://www.aibooking.dk/funktioner' },
  ]);

  const mainBenefitsText = t('mainBenefits', { returnObjects: true }) as TitleDescription[];
  const mainBenefitIcons = [Clock, DollarSign, Users, TrendingUp];
  const mainBenefitColors = ['from-brand-600 to-brand-500', 'from-green-600 to-green-500', 'from-cyan-600 to-cyan-500', 'from-ink-700 to-ink-600'];
  const mainBenefits = mainBenefitsText.map((item, i) => ({ ...item, icon: mainBenefitIcons[i], color: mainBenefitColors[i] }));

  const dashboardFeaturesText = t('dashboardFeatures', { returnObjects: true }) as LabelDesc[];
  const dashboardFeatureIcons = [Activity, FileText, LineChart, Volume2, RefreshCw, LayoutDashboard];
  const dashboardFeatures = dashboardFeaturesText.map((item, i) => ({ ...item, icon: dashboardFeatureIcons[i] }));

  const voiceInFeatures = t('voiceInFeatures', { returnObjects: true }) as string[];
  const voiceOutFeatures = t('voiceOutFeatures', { returnObjects: true }) as string[];

  const widgetBenefitsText = t('widgetBenefits', { returnObjects: true }) as TitleDesc[];
  const widgetBenefitIcons = [Globe, Bot, MessageSquare, Zap, Calendar, TrendingUp];
  const widgetBenefits = widgetBenefitsText.map((item, i) => ({ ...item, icon: widgetBenefitIcons[i] }));

  const voiceWidgetFeatures = t('voiceWidgetFeatures', { returnObjects: true }) as string[];
  const statsBand = t('statsBand', { returnObjects: true }) as StatItem[];

  const additionalFeaturesText = t('additionalFeatures', { returnObjects: true }) as AdditionalFeature[];
  const additionalFeatureIcons = [Calendar, MessageSquare, Shield, Settings];
  const additionalFeatures = additionalFeaturesText.map((item, i) => ({ ...item, icon: additionalFeatureIcons[i] }));

  const mockDays = t('dashboardMock.days', { returnObjects: true }) as string[];
  const mockCalls = [
    { time: '14:32', caller: t('dashboardMock.unknown_caller'), outcome: t('dashboardMock.outcome_booked'), color: 'bg-green-500', badge: 'bg-green-900 text-green-300' },
    { time: '14:18', caller: '+45 22 xx xx xx', outcome: t('dashboardMock.outcome_info'), color: 'bg-brand-500', badge: 'bg-brand-900 text-brand-300' },
    { time: '13:55', caller: '+45 50 xx xx xx', outcome: t('dashboardMock.outcome_booked'), color: 'bg-green-500', badge: 'bg-green-900 text-green-300' },
    { time: '13:40', caller: '+45 31 xx xx xx', outcome: t('dashboardMock.outcome_forwarded'), color: 'bg-yellow-500', badge: 'bg-yellow-900 text-yellow-300' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/funktioner"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-50 via-white to-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6 leading-tight">
              {t('hero.title_line1')}<br />
              <span className="text-brand-600">{t('hero.title_line2')}</span>
            </h1>
            <p className="text-xl text-ink-600 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-ink-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-2">{benefit.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-24 bg-white" id="dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-ink-100 text-ink-700 px-4 py-2 rounded-full mb-6">
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-sm font-semibold">{t('dashboard.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight">
                {t('dashboard.title_line1')}<br />
                <span className="text-brand-600">{t('dashboard.title_line2')}</span>
              </h2>
              <p className="text-lg text-ink-600 mb-8 leading-relaxed">
                {t('dashboard.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {dashboardFeatures.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="flex items-start space-x-3 bg-ink-50 rounded-2xl p-4 border border-ink-100">
                      <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink-900 text-sm">{feat.label}</div>
                        <div className="text-ink-500 text-xs mt-0.5">{feat.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                href="https://cal.com/magnora-marketing-30zqdm/intro-møde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>{t('dashboard.cta')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Dashboard Mock Visual */}
            <div className="relative">
              <div className="bg-ink-900 rounded-3xl shadow-2xl overflow-hidden border border-ink-700">
                <div className="bg-ink-800 px-6 py-4 flex items-center space-x-3 border-b border-ink-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-ink-700 rounded-lg px-4 py-1.5 text-xs text-ink-400 ml-4">
                    {t('dashboardMock.url_label')}
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-ink-800 rounded-2xl p-4 border border-ink-700">
                      <div className="text-xs text-ink-400 mb-1">{t('dashboardMock.calls_today_label')}</div>
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-xs text-green-400 mt-1">{t('dashboardMock.calls_today_change')}</div>
                    </div>
                    <div className="bg-ink-800 rounded-2xl p-4 border border-ink-700">
                      <div className="text-xs text-ink-400 mb-1">{t('dashboardMock.bookings_label')}</div>
                      <div className="text-2xl font-bold text-white">31</div>
                      <div className="text-xs text-green-400 mt-1">{t('dashboardMock.bookings_conv')}</div>
                    </div>
                    <div className="bg-ink-800 rounded-2xl p-4 border border-ink-700">
                      <div className="text-xs text-ink-400 mb-1">{t('dashboardMock.response_time_label')}</div>
                      <div className="text-2xl font-bold text-white">1.2s</div>
                      <div className="text-xs text-brand-400 mt-1">{t('dashboardMock.response_time_avg')}</div>
                    </div>
                  </div>
                  <div className="bg-ink-800 rounded-2xl p-4 border border-ink-700 mb-4">
                    <div className="text-xs text-ink-400 mb-3 font-semibold uppercase tracking-wider">{t('dashboardMock.recent_calls_label')}</div>
                    <div className="space-y-3">
                      {mockCalls.map((call, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${call.color}`}></div>
                            <span className="text-xs text-ink-400">{call.time}</span>
                            <span className="text-sm text-ink-300">{call.caller}</span>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${call.badge}`}>
                            {call.outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-ink-800 rounded-2xl p-4 border border-ink-700">
                    <div className="text-xs text-ink-400 mb-3 font-semibold uppercase tracking-wider">{t('dashboardMock.weekly_activity_label')}</div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 65, 55, 80, 70, 90, 75].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                          <div
                            className="w-full bg-brand-600 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                            style={{ height: `${h}%` }}
                          ></div>
                          <div className="text-ink-500 text-xs">{mockDays[i]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                {t('dashboardMock.live_data')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Calls Section */}
      <section className="py-24 bg-gradient-to-br from-ink-50 to-brand-50" id="voice-opkald">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full mb-6">
              <Mic className="w-4 h-4" />
              <span className="text-sm font-semibold">{t('voiceSection.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('voiceSection.title_line1')}<br />
              <span className="text-brand-600">{t('voiceSection.title_line2')}</span>
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              {t('voiceSection.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Indgående */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-ink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-50 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <PhoneIncoming className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink-900">{t('incoming.title')}</h3>
                    <p className="text-ink-500 text-sm">{t('incoming.subtitle')}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-6 mb-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Radio className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs text-brand-200 mb-1">{t('incoming.live_label')}</div>
                      <div className="bg-white/10 rounded-2xl px-4 py-3 text-sm mb-2">
                        {t('incoming.msg1')}
                      </div>
                      <div className="bg-white/20 rounded-2xl px-4 py-3 text-sm w-fit">
                        {t('incoming.msg2')}
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {voiceInFeatures.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                      <span className="text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Udgående */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-ink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <PhoneOutgoing className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink-900">{t('outgoing.title')}</h3>
                    <p className="text-ink-500 text-sm">{t('outgoing.subtitle')}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 mb-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs text-green-200 mb-1">{t('outgoing.live_label')}</div>
                      <div className="bg-white/20 rounded-2xl px-4 py-3 text-sm mb-2 w-fit">
                        {t('outgoing.msg')}
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-200">{t('outgoing.confirmed_label')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {voiceOutFeatures.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-ink-600 mb-6 text-lg">{t('voiceCta.text')}</p>
            <a
              href="https://cal.com/magnora-marketing-30zqdm/intro-møde"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-ink-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-ink-800 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>{t('voiceCta.button')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* AI Widget Section */}
      <section className="py-24 bg-white" id="ai-widget">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-6">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-semibold">{t('widgetSection.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('widgetSection.title_line1')}<br />
              <span className="text-cyan-600">{t('widgetSection.title_line2')}</span>
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {t('widgetSection.subtitle')}
            </p>
          </div>

          {/* Chat widget image + benefits */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-ink-200">
                <img
                  src="/ai-widget-website.webp"
                  alt="AI Chat Widget integreret på hjemmeside - Aibooking.dk"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-ink-100 flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <MousePointer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-ink-900 text-sm">{t('widgetIntro.badge_plug_play')}</div>
                  <div className="text-ink-500 text-xs">{t('widgetIntro.badge_active_5min')}</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-ink-900 mb-4">
                {t('widgetIntro.title')}
              </h3>
              <p className="text-ink-600 mb-8 leading-relaxed">
                {t('widgetIntro.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {widgetBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={i} className="flex items-start space-x-3 bg-ink-50 rounded-2xl p-4 border border-ink-100 hover:border-cyan-200 hover:bg-cyan-50 transition-colors">
                      <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink-900 text-sm">{benefit.title}</div>
                        <div className="text-ink-500 text-xs mt-0.5">{benefit.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('widget')}
                  className="inline-flex items-center justify-center space-x-2 bg-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <span>{t('widgetButtons.see_plans')}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://cal.com/magnora-marketing-30zqdm/intro-møde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-ink-300 text-ink-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all"
                >
                  <span>{t('widgetButtons.book_demo')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Voice widget image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-ink-200">
                <img
                  src="/ai-voice-widget.webp"
                  alt="AI Voice Widget til hjemmeside - Aibooking.dk"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-ink-100 flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-ink-900 text-sm">{t('voiceWidget.badge_active')}</div>
                  <div className="text-ink-500 text-xs">{t('voiceWidget.badge_active_desc')}</div>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full mb-6">
                <Volume2 className="w-4 h-4" />
                <span className="text-sm font-semibold">{t('voiceWidget.badge')}</span>
              </div>
              <h3 className="text-3xl font-bold text-ink-900 mb-4">
                {t('voiceWidget.title')}
              </h3>
              <p className="text-ink-600 mb-6 leading-relaxed">
                {t('voiceWidget.description')}
              </p>
              <ul className="space-y-3 mb-8">
                {voiceWidgetFeatures.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span className="text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('widget')}
                className="inline-flex items-center space-x-2 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>{t('voiceWidgetButton')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-16 bg-gradient-to-r from-ink-900 to-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsBand.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-ink-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-ink-50" id="alle-funktioner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('additionalTitle.title')}
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              {t('additionalTitle.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 md:p-10 border border-ink-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ink-900 mb-2">{feature.title}</h3>
                      <p className="text-ink-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-ink-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-12 shadow-2xl text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('ctaSection.title')}
              </h2>
              <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t('ctaSection.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://cal.com/magnora-marketing-30zqdm/intro-møde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl inline-block"
                >
                  {t('ctaSection.button_demo')}
                </a>
                <button
                  onClick={() => onNavigate('widget')}
                  className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  {t('ctaSection.button_widget')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={featuresFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default FeaturesPage;
