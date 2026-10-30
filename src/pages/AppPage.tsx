import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import AppQrSection from '../components/AppQrSection';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { appFAQs } from '../content/faq';
import { createBreadcrumbSchema } from '../utils/structuredData';
import type { SupportedLanguage } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';
import {
  CheckCircle2, Smartphone, Monitor, Apple, Chrome, ArrowRight,
  PhoneMissed, Clock, LayoutDashboard, Headphones,
} from 'lucide-react';
import type { NavigatePage } from '../types/navigation';
import { LOGIN_URL, SIGNUP_URL } from '../utils/backend';
import PageLink from '../components/PageLink';

interface AppPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface TitleDesc { title: string; desc: string }
interface Screen { title: string; desc: string; points: string[]; alt: string }
interface PhoneShot { caption: string; alt: string }

// Real screenshots of the customer app (app.aibooking.dk), taken with a
// fictional demo salon. Desktop shots are 1280×800/960, phone shots 585×1266.
const DESKTOP_SHOTS = [
  { src: '/images/app/desktop-overview.webp', width: 1280, height: 960 },
  { src: '/images/app/desktop-call.webp', width: 1280, height: 800 },
  { src: '/images/app/desktop-bookings.webp', width: 1280, height: 800 },
];
const PHONE_SHOTS = [
  '/images/app/mobile-overview.webp',
  '/images/app/mobile-stats.webp',
  '/images/app/mobile-menu.webp',
];

function AppPage({ onNavigate }: AppPageProps) {
  const { t, i18n } = useTranslation('appPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
    { name: t('breadcrumb.app'), url: localizedUrl(lang, '/app') },
  ]);

  const benefits = t('benefits.items', { returnObjects: true }) as TitleDesc[];
  const benefitIcons = [PhoneMissed, Clock, LayoutDashboard, Headphones];
  const phoneShots = t('phones.items', { returnObjects: true }) as PhoneShot[];
  const screens = t('screens.items', { returnObjects: true }) as Screen[];
  const installSteps = t('install.items', { returnObjects: true }) as (TitleDesc & { steps: string[] })[];
  const installIcons = [Apple, Chrome, Monitor];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, '/app')}
        path="/app"
        ogImage="https://www.aibooking.dk/images/app/app-og.jpg"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} transparent />

      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        primaryCta={{ label: t('hero.cta_signup'), href: SIGNUP_URL }}
        secondaryCta={{ label: t('hero.cta_login'), href: LOGIN_URL }}
      />

      {/* Three phone screenshots: the app as it looks in the pocket */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100 mb-4">
              <Smartphone className="w-4 h-4" />
              {t('phones.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('phones.title')}</h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">{t('phones.subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 max-w-4xl mx-auto">
            {phoneShots.map((shot, index) => (
              <figure key={index} className="text-center">
                <div className="mx-auto max-w-[260px] rounded-[2.25rem] bg-ink-900 p-2 shadow-2xl shadow-ink-900/20">
                  <img
                    src={PHONE_SHOTS[index]}
                    alt={shot.alt}
                    width={585}
                    height={1266}
                    loading="lazy"
                    className="w-full h-auto rounded-[1.75rem] bg-white"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-ink-600 leading-relaxed">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters: the selling points in plain words */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ink-50/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('benefits.title')}</h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">{t('benefits.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={index} className="bg-white border border-ink-200 rounded-2xl p-7 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900 mb-2">{item.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Desktop screenshots, alternating with what each screen is for */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100 mb-4">
              <Monitor className="w-4 h-4" />
              {t('screens.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('screens.title')}</h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">{t('screens.subtitle')}</p>
          </div>
          <div className="space-y-20">
            {screens.map((screen, index) => {
              const shot = DESKTOP_SHOTS[index];
              return (
                <div key={index} className="grid lg:grid-cols-5 gap-10 items-center">
                  <div className={`min-w-0 lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4 tracking-tight">{screen.title}</h3>
                    <p className="text-ink-600 leading-relaxed mb-6">{screen.desc}</p>
                    <ul className="space-y-3">
                      {screen.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                          <span className="text-ink-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <figure className={`min-w-0 lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl border border-ink-200 bg-ink-100 shadow-xl overflow-hidden">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-ink-100 border-b border-ink-200">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <span className="ml-3 text-xs text-ink-500 truncate">app.aibooking.dk/dashboard</span>
                      </div>
                      <img
                        src={shot.src}
                        alt={screen.alt}
                        width={shot.width}
                        height={shot.height}
                        loading="lazy"
                        className="w-full h-auto bg-white"
                      />
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
          <p className="mt-12 text-center text-sm text-ink-500">{t('screens.demo_note')}</p>
        </div>
      </section>

      {/* How to put the app on the home screen / desktop */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ink-950 via-brand-950 to-ink-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{t('install.title')}</h2>
            <p className="text-lg text-ink-300 mb-10 leading-relaxed">{t('install.subtitle')}</p>
            <div className="grid md:grid-cols-3 gap-5">
              {installSteps.map((item, index) => {
                const Icon = installIcons[index];
                return (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <Icon className="w-7 h-7 text-brand-300 mb-4" />
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-300 mb-3">{item.desc}</p>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-ink-200">
                      {item.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
          <figure className="text-center">
            <div className="mx-auto max-w-[240px] rounded-[2.25rem] bg-black p-2 shadow-2xl">
              <img
                src="/images/app/mobile-login-app.webp"
                alt={t('install.image_alt')}
                width={585}
                height={1266}
                loading="lazy"
                className="w-full h-auto rounded-[1.75rem] bg-white"
              />
            </div>
            <figcaption className="mt-4 text-sm text-ink-300">{t('install.image_caption')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">{t('related.title')}</h2>
          <p className="text-lg text-ink-600 mb-8 leading-relaxed">{t('related.text')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PageLink page="inbound-outbound"
              onClick={() => onNavigate('inbound-outbound')}
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              {t('related.link_phone')}
              <ArrowRight className="w-4 h-4" />
            </PageLink>
            <PageLink page="widget"
              onClick={() => onNavigate('widget')}
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              {t('related.link_widget')}
              <ArrowRight className="w-4 h-4" />
            </PageLink>
            <PageLink page="trial"
              onClick={() => onNavigate('trial')}
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              {t('related.link_trial')}
              <ArrowRight className="w-4 h-4" />
            </PageLink>
          </div>
        </div>
      </section>

      <FAQ items={appFAQs} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">{t('finalCta.title')}</h2>
          <p className="text-lg text-brand-100 mb-10 leading-relaxed">{t('finalCta.subtitle')}</p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl"
          >
            {t('finalCta.cta')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <AppQrSection showMoreLink={false} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default AppPage;
