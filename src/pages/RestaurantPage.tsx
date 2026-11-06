import { useTranslation } from 'react-i18next';
import {
  ArrowRight, Bot, CalendarCheck, CheckCircle, Globe, MessageSquare, Phone,
  ShieldCheck, Truck, User, UtensilsCrossed, Wheat, XCircle,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import RelatedGuides from '../components/RelatedGuides';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import PageLink from '../components/PageLink';
import IndustryTrialBanner from '../components/industries/IndustryTrialBanner';
import { restaurantFAQs } from '../content/faq';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { buildLocalizedPath, localizedUrl } from '../utils/localePaths';
import { SIGNUP_URL } from '../utils/backend';
import type { SupportedLanguage } from '../i18n/config';
import type { NavigatePage } from '../types/navigation';
import PhoneAnsweringSEO from '../components/PhoneAnsweringSEO';

interface RestaurantPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface TitleDescription { title: string; description: string }
interface Channel extends TitleDescription { points: string[] }
interface ExampleLine { who: 'customer' | 'ai'; text: string }
interface Example { title: string; channel: 'widget' | 'phone'; lines: ExampleLine[] }

// Every capability on this page maps to something the agent really does for
// a restaurant: booking a table in the connected calendar, answering menu and
// allergen questions from the knowledge base (menu as PDF or URL), and booking
// a courier with Uber Direct or Just Eat (quote, explicit yes, then book).
// What it does not do (take payment, send orders to the till or kitchen) is
// listed under `limits`, so the page never promises a full ordering system.
const CAPABILITY_ICONS = [CalendarCheck, Wheat, Truck, Globe];

function RestaurantPage({ onNavigate }: RestaurantPageProps) {
  const { t, i18n } = useTranslation('restaurantPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
    { name: t('breadcrumb.industries'), url: localizedUrl(lang, '/brancher') },
    { name: t('breadcrumb.restaurant'), url: localizedUrl(lang, '/restaurant') },
  ]);

  const channels = t('channels.items', { returnObjects: true }) as Channel[];
  const capabilities = t('capabilities.items', { returnObjects: true }) as TitleDescription[];
  const examples = t('examples.items', { returnObjects: true }) as Example[];
  const does = t('limits.does', { returnObjects: true }) as string[];
  const doesNot = t('limits.doesNot', { returnObjects: true }) as string[];
  const steps = t('setup.steps', { returnObjects: true }) as TitleDescription[];
  const businessTypes = t('types.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, '/restaurant')}
        path="/restaurant"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} transparent />

      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        subtitle={t('hero.subtitle')}
        primaryCta={{ label: t('hero.primary'), href: SIGNUP_URL }}
      />

      {/* Two separate channels: the website widget and the phone agent */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('channels.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed">{t('channels.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => {
              const Icon = index === 0 ? Phone : MessageSquare;
              return (
                <div key={index} className="bg-ink-50 border border-ink-200 rounded-3xl p-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-3">{channel.title}</h3>
                  <p className="text-ink-600 leading-relaxed mb-5">{channel.description}</p>
                  <ul className="space-y-2.5">
                    {channel.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-ink-700">
                        <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="text-center text-ink-600 mt-8">
            {t('channels.linkIntro')}{' '}
            <PageLink page="widget" onClick={() => onNavigate('widget')} className="text-brand-700 font-semibold hover:underline">
              {t('channels.widgetLink')}
            </PageLink>
            {' · '}
            <PageLink page="inbound-outbound" onClick={() => onNavigate('inbound-outbound')} className="text-brand-700 font-semibold hover:underline">
              {t('channels.phoneLink')}
            </PageLink>
          </p>
        </div>
      </section>

      {/* What the agent looks up live in the store */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('capabilities.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed">{t('capabilities.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => {
              const Icon = CAPABILITY_ICONS[index % CAPABILITY_ICONS.length];
              return (
                <div key={index} className="bg-white border border-ink-200 rounded-2xl p-6 shadow-sm">
                  <Icon className="w-8 h-8 text-brand-600 mb-4" />
                  <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example conversations (fictional store, real flows) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('examples.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed">{t('examples.subtitle')}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <figure key={index} className="bg-ink-50 border border-ink-200 rounded-3xl p-6 flex flex-col">
                <figcaption className="flex items-center justify-between gap-3 mb-5">
                  <h3 className="font-bold text-ink-900">{example.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-ink-200 text-ink-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {example.channel === 'phone' ? <Phone className="w-3.5 h-3.5" /> : <MessageSquare className="w-3.5 h-3.5" />}
                    {t(`examples.channel.${example.channel}`)}
                  </span>
                </figcaption>
                <div className="space-y-3">
                  {example.lines.map((line, i) => (
                    <div key={i} className={`flex gap-2.5 ${line.who === 'customer' ? 'justify-end' : ''}`}>
                      {line.who === 'ai' && (
                        <span className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Bot className="w-4 h-4" />
                        </span>
                      )}
                      <p className={`text-sm leading-relaxed rounded-2xl px-4 py-2.5 max-w-[85%] ${
                        line.who === 'customer' ? 'bg-ink-900 text-white' : 'bg-white border border-ink-200 text-ink-800'
                      }`}>
                        <span className="sr-only">{t(`examples.who.${line.who}`)}: </span>
                        {line.text}
                      </p>
                      {line.who === 'customer' && (
                        <span className="w-7 h-7 rounded-full bg-ink-200 text-ink-700 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <User className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </figure>
            ))}
          </div>
          <p className="text-sm text-ink-600 text-center max-w-3xl mx-auto mt-6">{t('examples.note')}</p>
        </div>
      </section>

      {/* Honest scope: what it does and what it does not do */}
      <section className="py-20 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('limits.title')}</h2>
            <p className="text-lg text-ink-600 leading-relaxed">{t('limits.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-ink-200">
              <h3 className="text-xl font-bold text-ink-900 mb-5">{t('limits.doesTitle')}</h3>
              <ul className="space-y-3">
                {does.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-ink-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-ink-200">
              <h3 className="text-xl font-bold text-ink-900 mb-5">{t('limits.doesNotTitle')}</h3>
              <ul className="space-y-3">
                {doesNot.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-ink-700">
                    <XCircle className="w-5 h-5 text-ink-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-3xl p-8 border border-ink-200 flex flex-col md:flex-row gap-6 md:items-start">
            <ShieldCheck className="w-10 h-10 text-brand-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">{t('privacy.title')}</h3>
              <p className="text-ink-600 leading-relaxed">{t('privacy.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup, with the dashboard screen it happens on */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-8 tracking-tight">{t('setup.title')}</h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900 mb-1">{step.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0 bg-gradient-to-br from-ink-900 to-brand-900 rounded-3xl p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('types.title')}</h2>
            <div className="grid grid-cols-2 gap-3">
              {businessTypes.map((type, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local delivery add-on and languages */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-8">
            <Truck className="w-10 h-10 text-brand-600 mb-4" />
            <h2 className="text-2xl font-bold text-ink-900 mb-3">{t('delivery.title')}</h2>
            <p className="text-ink-600 leading-relaxed mb-5">{t('delivery.text')}</p>
            <PageLink page="integrations" onClick={() => onNavigate('integrations')}
              className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800">
              {t('delivery.link')}
              <ArrowRight className="w-4 h-4" />
            </PageLink>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-8">
            <Globe className="w-10 h-10 text-brand-600 mb-4" />
            <h2 className="text-2xl font-bold text-ink-900 mb-3">{t('languages.title')}</h2>
            <p className="text-ink-600 leading-relaxed">{t('languages.text')}</p>
          </div>
        </div>
      </section>

      <IndustryTrialBanner industry="salon" />

      <section className="py-20 bg-gradient-to-br from-ink-900 to-brand-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('finalCta.title')}</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">{t('finalCta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SIGNUP_URL}
              className="bg-white text-brand-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-all shadow-2xl inline-block">
              {t('finalCta.primary')}
            </a>
            <a href={contactHref}
              className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all inline-block">
              {t('finalCta.secondary')}
            </a>
          </div>
        </div>
      </section>

      <RelatedGuides slugs={['ai-bestiller-bud-levering-uber-direct-just-eat', 'ai-indgaaende-opkald', 'ai-widget-hjemmeside-komplet-guide']} />
      <PhoneAnsweringSEO variant="pages.restaurant" />
      <FAQ items={restaurantFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default RestaurantPage;
