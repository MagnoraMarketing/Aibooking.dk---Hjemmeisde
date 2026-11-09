import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check, CheckCircle2, Clock, Loader2, Mic, Phone, Package, Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AgencyDashboardMock, { type DashboardVariant } from '../components/AgencyDashboardMock';
import { CAPABILITY_ICONS, INDUSTRY_ICONS } from '../components/estimateIcons';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { localizedUrl } from '../utils/localePaths';
import { localizedPrice } from '../utils/currency';
import { SIGNUP_URL } from '../utils/backend';
import type { SupportedLanguage } from '../i18n/config';
import type { NavigatePage } from '../types/navigation';
import {
  DEFAULT_CAPABILITIES,
  DEFAULT_CHOICES,
  ESTIMATE_CAPABILITIES,
  ESTIMATE_INDUSTRIES,
  PHONE_MINUTES,
  WIDGET_MINUTES,
  calculatePrice,
  choicesFromQuery,
  choicesToQuery,
  estimateActivity,
  widgetMinutesFor,
  type EstimateCapability,
  type EstimateChoices,
  type EstimateIndustry,
} from '../utils/estimate';

const PATH = '/prisberegner';

const DASHBOARD_VARIANT: Record<EstimateIndustry, DashboardVariant> = {
  salon: 'frisor',
  healthcare: 'healthcare',
  craftsman: 'craftsman',
  office: 'office',
  ecommerce: 'ecommerce',
  restaurant: 'restaurant',
};

interface PriceEstimatePageProps {
  onNavigate: (page: NavigatePage) => void;
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

function PriceEstimatePage({ onNavigate }: PriceEstimatePageProps) {
  const { t, i18n } = useTranslation('priceEstimate');
  const { t: tc } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;

  // The prerendered page shows the defaults; the visitor's own choices come
  // from the query string the front page or an industry page linked with.
  const [choices, setChoices] = useState<EstimateChoices>(DEFAULT_CHOICES);
  useEffect(() => {
    if (window.location.search) setChoices(choicesFromQuery(window.location.search));
  }, []);
  // Keep the URL in step, so the estimate can be bookmarked or shared.
  useEffect(() => {
    const next = `${window.location.pathname}${choicesToQuery(choices)}`;
    if (next !== `${window.location.pathname}${window.location.search}`) window.history.replaceState({}, '', next);
  }, [choices]);

  const widgetMinutes = widgetMinutesFor(choices);
  const activity = useMemo(() => estimateActivity(choices), [choices]);
  const price = useMemo(() => calculatePrice(choices), [choices]);
  const number = useMemo(() => new Intl.NumberFormat(lang === 'da' ? 'da-DK' : lang), [lang]);
  const hours = new Intl.NumberFormat(lang === 'da' ? 'da-DK' : lang, { maximumFractionDigits: 1 }).format(activity.hoursSaved);

  const setIndustry = (industry: EstimateIndustry) =>
    setChoices((c) => ({ ...c, industry, capabilities: DEFAULT_CAPABILITIES[industry], widgetMinutes: null }));
  const toggleCapability = (capability: EstimateCapability) =>
    setChoices((c) => ({
      ...c,
      capabilities: c.capabilities.includes(capability)
        ? c.capabilities.filter((x) => x !== capability)
        : [...c.capabilities, capability],
    }));

  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [wantsTrial, setWantsTrial] = useState(true);
  const [wantsSetupHelp, setWantsSetupHelp] = useState(true);
  const [status, setStatus] = useState<FormStatus>('idle');
  // The price shown after sending stays the one that was quoted, even if the
  // sliders move afterwards.
  const [quoted, setQuoted] = useState<{ choices: EstimateChoices; company: string; email: string } | null>(null);

  const money = (dkk: number) => `${localizedPrice(dkk, lang)} ${tc('pricing.currency_suffix')}`;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const quotedPrice = calculatePrice(choices);
    const estimate = [
      quotedPrice.voicePlan ? `${quotedPrice.voicePlan.name} ${money(quotedPrice.voicePlan.price)}` : null,
      quotedPrice.widgetPacks ? `Widget ${quotedPrice.widgetPacks} × pakke ${money(quotedPrice.widgetPrice)}` : null,
      `I alt ${money(quotedPrice.monthlyTotal)}`,
      quotedPrice.exceedsLargest ? 'Over største pakke – skal tilbydes individuelt' : null,
    ]
      .filter(Boolean)
      .join(' · ');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'quote',
          company,
          email,
          phone,
          industry: choices.industry,
          capabilities: choices.capabilities,
          phoneMinutes: choices.phoneMinutes,
          widgetMinutes,
          wantsTrial,
          wantsSetupHelp: wantsTrial && wantsSetupHelp,
          estimate,
          language: lang,
          page: window.location.href,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setQuoted({ choices, company, email });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('page.breadcrumb.home'), url: localizedUrl(lang, '/') },
    { name: t('page.breadcrumb.page'), url: localizedUrl(lang, PATH) },
  ]);

  const summaryCards = [
    {
      icon: Phone,
      label: t('page.summary.calls'),
      value: choices.phoneMinutes === 0 ? t('minutes.none') : t('minutes.perMonth', { minutes: number.format(choices.phoneMinutes) }),
      detail: t('page.summary.callsValue', { count: number.format(activity.calls) }),
    },
    {
      icon: Mic,
      label: t('page.summary.widget'),
      value: t('minutes.perMonth', { minutes: number.format(widgetMinutes) }),
      detail: t('page.summary.widgetValue', { count: number.format(activity.widgetConversations) }),
    },
    {
      icon: Clock,
      label: t('page.summary.hours'),
      value: t('page.summary.hoursValue', { hours }),
      detail: t('page.summary.hoursText'),
    },
    {
      icon: Package,
      label: t('page.summary.package'),
      value: price.voicePlan
        ? t('page.summary.packageVoice', { plan: price.voicePlan.name })
        : price.widgetPacks
          ? t('page.summary.packageWidget', { packs: price.widgetPacks })
          : t('page.summary.packageNone'),
      detail: price.voicePlan && price.widgetPacks ? `+ ${t('page.summary.packageWidget', { packs: price.widgetPacks })}` : '',
    },
  ];

  const inputClass =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500';
  const paragraphs = t('page.explain.paragraphs', { returnObjects: true }) as string[];

  const quotedPrice = quoted ? calculatePrice(quoted.choices) : null;
  // Bring the price into view once it replaces the form.
  const resultRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === 'sent') resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [status]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('page.seo.title')}
        description={t('page.seo.description')}
        keywords={t('page.seo.keywords')}
        canonical={localizedUrl(lang, PATH)}
        path={PATH}
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} transparent />
      <PageHero
        compact
        badge={t('page.hero.badge')}
        title={t('page.hero.title')}
        subtitle={t('page.hero.subtitle')}
        primaryCta={null}
        secondaryCta={null}
        trust={[]}
      />

      <section className="py-12 md:py-16 bg-ink-50 border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-6">
          {/* Choices */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-ink-200 shadow-sm p-6 md:p-8 space-y-7">
            <h2 className="text-xl font-bold text-ink-900">{t('page.controls.title')}</h2>

            <div>
              <div className="text-sm font-bold text-ink-900 mb-3">{t('page.controls.industry')}</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ESTIMATE_INDUSTRIES.map((key) => {
                  const Icon = INDUSTRY_ICONS[key];
                  const active = choices.industry === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setIndustry(key)}
                      aria-pressed={active}
                      className={`flex items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-left text-sm font-semibold transition-all ${
                        active ? 'border-brand-600 bg-brand-50 text-ink-900' : 'border-ink-200 text-ink-700 hover:border-ink-300'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-brand-600' : 'text-ink-500'}`} />
                      <span className="leading-tight">{t(`industries.${key}`)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <label htmlFor="estimate-phone" className="text-sm font-bold text-ink-900">{t('page.controls.phoneMinutes')}</label>
                <span className="text-xl font-bold text-brand-600 whitespace-nowrap">
                  {choices.phoneMinutes === 0 ? t('minutes.none') : t('minutes.perMonth', { minutes: number.format(choices.phoneMinutes) })}
                </span>
              </div>
              <input
                id="estimate-phone"
                type="range"
                min={PHONE_MINUTES.min}
                max={PHONE_MINUTES.max}
                step={PHONE_MINUTES.step}
                value={choices.phoneMinutes}
                onChange={(e) => setChoices((c) => ({ ...c, phoneMinutes: Number(e.target.value) }))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-200 accent-brand-600"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <label htmlFor="estimate-widget" className="text-sm font-bold text-ink-900">{t('page.controls.widgetMinutes')}</label>
                <span className="text-xl font-bold text-brand-600 whitespace-nowrap">
                  {t('minutes.perMonth', { minutes: number.format(widgetMinutes) })}
                </span>
              </div>
              <input
                id="estimate-widget"
                type="range"
                min={WIDGET_MINUTES.min}
                max={WIDGET_MINUTES.max}
                step={WIDGET_MINUTES.step}
                value={widgetMinutes}
                onChange={(e) => setChoices((c) => ({ ...c, widgetMinutes: Number(e.target.value) }))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-200 accent-brand-600"
              />
              <div className="flex items-center justify-between gap-4 mt-2 text-xs text-ink-500">
                <span>{choices.widgetMinutes === null ? t('page.controls.widgetEstimated') : t('page.controls.widgetCustom')}</span>
                {choices.widgetMinutes !== null && (
                  <button
                    type="button"
                    onClick={() => setChoices((c) => ({ ...c, widgetMinutes: null }))}
                    className="font-semibold text-brand-600 hover:text-brand-700"
                  >
                    {t('page.controls.widgetReset')}
                  </button>
                )}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-ink-900 mb-3">{t('page.controls.capabilities')}</div>
              <div className="flex flex-wrap gap-2">
                {ESTIMATE_CAPABILITIES.map((key) => {
                  const Icon = CAPABILITY_ICONS[key];
                  const active = choices.capabilities.includes(key);
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleCapability(key)}
                      aria-pressed={active}
                      className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
                        active ? 'border-brand-600 bg-brand-600 text-white' : 'border-ink-200 text-ink-700 hover:border-ink-300'
                      }`}
                    >
                      {active ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                      {t(`capabilities.${key}.title`)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate */}
          <div className="lg:col-span-2 bg-ink-900 rounded-3xl p-6 md:p-8 flex flex-col">
            <h2 className="text-xl font-bold text-white mb-5">{t('page.summary.title')}</h2>
            <div className="space-y-4">
              {summaryCards.map(({ icon: Icon, label, value, detail }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold">{label}</div>
                    <div className="text-lg font-bold text-white leading-snug">{value}</div>
                    {detail && <div className="text-sm text-ink-400 leading-snug">{detail}</div>}
                  </div>
                </div>
              ))}
            </div>
            {price.exceedsLargest && <p className="mt-5 text-sm text-accent-300 leading-relaxed">{t('page.summary.aboveLargest')}</p>}
            <div className="flex-grow" />
            <a
              href="#tilbud"
              className="mt-7 inline-flex items-center justify-center gap-2 w-full bg-accent-400 text-ink-950 px-6 py-3.5 rounded-xl font-bold hover:bg-accent-300 transition-all"
            >
              {t('page.form.submit')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">{t('page.dashboard.title')}</h2>
            <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">{t('page.dashboard.subtitle')}</p>
          </div>
          <AgencyDashboardMock
            variant={DASHBOARD_VARIANT[choices.industry]}
            overrides={{
              stats: {
                conversations: number.format(activity.conversations),
                widgets: String(activity.widgets),
                minutesUsed: number.format(activity.minutesUsed),
                minutesLeft: number.format(activity.minutesLeft),
              },
              widgetPanel: { agents: '1', conversations: number.format(activity.widgetConversations), minutes: number.format(widgetMinutes) },
              phonePanel: { agents: '1', calls: number.format(activity.calls), minutes: number.format(choices.phoneMinutes) },
              shop: choices.capabilities.includes('webshop') ? 'example' : null,
            }}
          />
        </div>
      </section>

      <section id="tilbud" className="py-16 md:py-20 bg-ink-50 border-y border-ink-200 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'sent' && quoted && quotedPrice ? (
            <div ref={resultRef} className="bg-white rounded-3xl border border-ink-200 shadow-xl p-7 md:p-10 scroll-mt-28" role="status">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900">{t('page.result.title', { company: quoted.company })}</h2>
              </div>
              <p className="text-ink-600 mb-7">{t('page.result.subtitle', { email: quoted.email })}</p>

              <div className="bg-ink-900 rounded-2xl p-6 md:p-8 mb-6">
                <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-2">{t('page.result.monthly')}</div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-5 whitespace-nowrap">{money(quotedPrice.monthlyTotal)}</div>
                <ul className="space-y-2 text-sm text-ink-300">
                  {quotedPrice.voicePlan && (
                    <li className="flex justify-between gap-4">
                      <span>{t('page.result.voiceLine', { plan: quotedPrice.voicePlan.name, minutes: number.format(quotedPrice.voicePlan.minutes) })}</span>
                      <span className="text-white font-semibold whitespace-nowrap">{money(quotedPrice.voicePlan.price)}</span>
                    </li>
                  )}
                  {quotedPrice.widgetPacks > 0 && (
                    <li className="flex justify-between gap-4">
                      <span>{t('page.result.widgetLine', { minutes: number.format(quotedPrice.widgetMinutesIncluded), packs: quotedPrice.widgetPacks })}</span>
                      <span className="text-white font-semibold whitespace-nowrap">{money(quotedPrice.widgetPrice)}</span>
                    </li>
                  )}
                </ul>
                {quotedPrice.exceedsLargest && <p className="mt-4 text-sm text-accent-300">{t('page.summary.aboveLargest')}</p>}
              </div>

              <ul className="space-y-2.5 text-sm text-ink-700 mb-6">
                {quotedPrice.setupPrice > 0 && (
                  <li className="flex gap-2"><Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />{t('page.result.setup', { price: `${localizedPrice(quotedPrice.setupPrice, lang)}` })}</li>
                )}
                {wantsTrial && <li className="flex gap-2"><Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />{t('page.result.trial')}</li>}
                {wantsTrial && wantsSetupHelp && (
                  <li className="flex gap-2"><Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />{t('page.result.setupFree')}</li>
                )}
              </ul>
              <p className="text-xs text-ink-500 mb-6">{t('page.result.note')}</p>
              {wantsTrial && (
                <a
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all"
                >
                  {t('page.result.trialCta')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white rounded-3xl border border-ink-200 shadow-xl p-7 md:p-10 space-y-5">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-2">{t('page.form.title')}</h2>
                <p className="text-ink-600">{t('page.form.subtitle')}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="quote-company" className="block text-sm font-semibold text-ink-900 mb-1.5">{t('page.form.company')}</label>
                  <input id="quote-company" required autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-semibold text-ink-900 mb-1.5">{t('page.form.email')}</label>
                  <input id="quote-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-semibold text-ink-900 mb-1.5">{t('page.form.phone')}</label>
                  <input id="quote-phone" type="tel" required autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
                </div>
              </div>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={wantsTrial} onChange={(e) => setWantsTrial(e.target.checked)} className="mt-1 w-4 h-4 accent-brand-600" />
                  <span className="text-sm text-ink-800 font-medium">{t('page.form.trial')}</span>
                </label>
                <label className={`flex items-start gap-3 ${wantsTrial ? 'cursor-pointer' : 'opacity-50'}`}>
                  <input
                    type="checkbox"
                    checked={wantsTrial && wantsSetupHelp}
                    disabled={!wantsTrial}
                    onChange={(e) => setWantsSetupHelp(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-brand-600"
                  />
                  <span className="text-sm text-ink-800 font-medium">{t('page.form.setupHelp')}</span>
                </label>
              </div>
              {status === 'error' && <p className="text-sm text-red-600" role="alert">{t('page.form.error')}</p>}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-70 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                {status === 'sending' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {status === 'sending' ? t('page.form.sending') : t('page.form.submit')}
              </button>
              <p className="text-xs text-ink-500 text-center">{t('page.form.privacy')}</p>
            </form>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-6">{t('page.explain.title')}</h2>
          <div className="space-y-4 text-ink-700 leading-relaxed">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default PriceEstimatePage;
