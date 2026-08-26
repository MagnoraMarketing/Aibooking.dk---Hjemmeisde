import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';
import {
  Phone, MessageSquare, Mail, MessageCircle, ArrowRight, PhoneCall,
  Users, PhoneForwarded, PackagePlus, CheckCircle2,
} from 'lucide-react';

interface TrialPageProps {
  onNavigate: (page: 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog' | 'trial') => void;
}

interface TitleDesc { title: string; desc: string }

const SIGNUP_URL = 'https://aibooking-backendnew.vercel.app/signup';

function TrialPage({ onNavigate }: TrialPageProps) {
  const { t, i18n } = useTranslation('trialPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://www.aibooking.dk/' },
    { name: t('breadcrumb.trial'), url: 'https://www.aibooking.dk/proeveperiode' },
  ]);

  const steps = t('steps.items', { returnObjects: true }) as TitleDesc[];
  const stepIcons = [Users, PhoneForwarded, PhoneCall, PackagePlus];

  const inclusions = [
    { icon: Phone, label: t('inclusions.voice_label'), value: t('inclusions.voice_value') },
    { icon: MessageSquare, label: t('inclusions.sms_label'), value: t('inclusions.sms_value') },
    { icon: Mail, label: t('inclusions.email_label'), value: t('inclusions.email_value') },
    { icon: MessageCircle, label: t('inclusions.whatsapp_label'), value: t('inclusions.whatsapp_value') },
  ];

  const upgradePoints = t('upgrade.points', { returnObjects: true }) as string[];
  const faqItems = t('faq.items', { returnObjects: true }) as TitleDesc[];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical="https://www.aibooking.dk/proeveperiode"
        path="/proeveperiode"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ink-50 via-white to-brand-50/40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <PhoneCall className="w-4 h-4" />
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {t('hero.cta_signup')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-ink-300 text-ink-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-brand-600 hover:text-brand-600 transition-all"
            >
              {t('hero.cta_contact')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
              {t('steps.title')}
            </h2>
            <p className="text-lg text-ink-600 max-w-2xl mx-auto">
              {t('steps.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={index} className="bg-ink-50/70 border border-ink-200 rounded-2xl p-6 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ink-950 via-brand-950 to-ink-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {t('inclusions.title')}
            </h2>
            <p className="text-lg text-ink-300 max-w-2xl mx-auto">
              {t('inclusions.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-300" />
                  </div>
                  <div className="text-white font-bold mb-1">{item.label}</div>
                  <div className="text-sm text-ink-300">{item.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-3xl p-10 md:p-14">
            <div className="flex items-center gap-3 mb-5">
              <PackagePlus className="w-8 h-8 text-brand-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900">{t('upgrade.title')}</h2>
            </div>
            <p className="text-lg text-ink-600 mb-8 leading-relaxed">
              {t('upgrade.description')}
            </p>
            <ul className="space-y-3 mb-8">
              {upgradePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-ink-700">{point}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              {t('upgrade.pricing_link')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ink-50/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-10 text-center tracking-tight">
            {t('faq.title')}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-ink-200 rounded-2xl p-6">
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-ink-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            {t('finalCta.title')}
          </h2>
          <p className="text-lg text-brand-100 mb-10 leading-relaxed">
            {t('finalCta.subtitle')}
          </p>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl transform hover:scale-105"
          >
            {t('finalCta.cta_signup')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default TrialPage;
