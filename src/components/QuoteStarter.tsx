import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calculator, Check } from 'lucide-react';
import { CAPABILITY_ICONS, INDUSTRY_ICONS } from './estimateIcons';
import {
  DEFAULT_CAPABILITIES,
  ESTIMATE_CAPABILITIES,
  ESTIMATE_INDUSTRIES,
  PHONE_MINUTES,
  choicesToQuery,
  type EstimateCapability,
  type EstimateIndustry,
} from '../utils/estimate';
import { useLocalizedHref, PAGE_PATHS } from '../utils/pagePaths';

interface QuoteStarterProps {
  /** On an industry page the industry is already known, so step 1 is skipped. */
  industry?: EstimateIndustry;
  id?: string;
  className?: string;
}

/**
 * The first step of a quote: the visitor picks industry, phone volume and
 * what the AI should handle, and "Se pris" opens /prisberegner with those
 * choices, where the estimate, an example dashboard and the quote form are.
 */
function QuoteStarter({ industry: fixedIndustry, id = 'priser', className = 'bg-ink-50 border-y border-ink-200' }: QuoteStarterProps) {
  const { t } = useTranslation('priceEstimate');
  const href = useLocalizedHref();
  const [industry, setIndustry] = useState<EstimateIndustry | null>(fixedIndustry ?? null);
  const [phoneMinutes, setPhoneMinutes] = useState<number>(PHONE_MINUTES.default);
  const [capabilities, setCapabilities] = useState<EstimateCapability[]>(
    fixedIndustry ? DEFAULT_CAPABILITIES[fixedIndustry] : []
  );

  const chooseIndustry = (next: EstimateIndustry) => {
    setIndustry(next);
    setCapabilities(DEFAULT_CAPABILITIES[next]);
  };
  const toggleCapability = (capability: EstimateCapability) =>
    setCapabilities((current) =>
      current.includes(capability) ? current.filter((c) => c !== capability) : [...current, capability]
    );

  const target = `${href(PAGE_PATHS.quote)}${choicesToQuery({
    industry: industry ?? 'salon',
    phoneMinutes,
    capabilities,
    widgetMinutes: null,
  })}`;
  const ready = industry !== null;
  let step = 0;
  const stepBadge = () => {
    step += 1;
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-600 text-white text-xs font-bold flex-shrink-0">
        {step}
      </span>
    );
  };

  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-24 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100 mb-5">
            <Calculator className="w-4 h-4" />
            {t('starter.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">{t('starter.title')}</h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed">{t('starter.subtitle')}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-ink-200 p-6 md:p-10 space-y-10">
          {fixedIndustry ? null : (
            <div>
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink-900 mb-4">
                {stepBadge()}
                {t('starter.industryTitle')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {ESTIMATE_INDUSTRIES.map((key) => {
                  const Icon = INDUSTRY_ICONS[key];
                  const active = industry === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => chooseIndustry(key)}
                      aria-pressed={active}
                      className={`flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all ${
                        active ? 'border-brand-600 ring-2 ring-brand-600/20 bg-brand-50' : 'border-ink-200 hover:border-ink-300'
                      }`}
                    >
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${active ? 'bg-brand-600' : 'bg-ink-100'}`}>
                        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-ink-600'}`} />
                      </span>
                      <span className="font-semibold text-ink-900 text-sm leading-tight">{t(`industries.${key}`)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <h3 className="flex items-center gap-3 text-lg font-bold text-ink-900 mb-4">
              {stepBadge()}
              <label htmlFor={`${id}-phone-minutes`}>{t('starter.minutesTitle')}</label>
            </h3>
            <div className="flex items-baseline justify-end mb-2">
              <span className="text-2xl font-bold text-brand-600 whitespace-nowrap">
                {phoneMinutes === 0 ? t('minutes.none') : t('minutes.perMonth', { minutes: phoneMinutes })}
              </span>
            </div>
            <input
              id={`${id}-phone-minutes`}
              type="range"
              min={PHONE_MINUTES.min}
              max={PHONE_MINUTES.max}
              step={PHONE_MINUTES.step}
              value={phoneMinutes}
              onChange={(e) => setPhoneMinutes(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-200 accent-brand-600"
            />
            <div className="flex justify-between text-xs text-ink-500 mt-2">
              <span>{t('minutes.none')}</span>
              <span>{t('minutes.max', { minutes: PHONE_MINUTES.max })}</span>
            </div>
            <p className="text-sm text-ink-600 mt-3 leading-relaxed">{t('starter.minutesHint')}</p>
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-lg font-bold text-ink-900 mb-1">
              {stepBadge()}
              {t('starter.capabilitiesTitle')}
            </h3>
            <p className="text-sm text-ink-600 mb-4 ml-10">{t('starter.capabilitiesHint')}</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {ESTIMATE_CAPABILITIES.map((key) => {
                const Icon = CAPABILITY_ICONS[key];
                const active = capabilities.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleCapability(key)}
                    aria-pressed={active}
                    className={`relative rounded-2xl border-2 p-4 text-left transition-all ${
                      active ? 'border-brand-600 ring-2 ring-brand-600/20 bg-brand-50' : 'border-ink-200 hover:border-ink-300'
                    }`}
                  >
                    {active && (
                      <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                    )}
                    <span className="flex items-center gap-2.5 mb-1.5">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${active ? 'bg-brand-600' : 'bg-ink-100'}`}>
                        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-ink-600'}`} />
                      </span>
                      <span className="font-bold text-ink-900">{t(`capabilities.${key}.title`)}</span>
                    </span>
                    <span className="block text-xs text-ink-600 leading-relaxed">{t(`capabilities.${key}.desc`)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            {fixedIndustry && (
              <p className="text-sm text-ink-600">{t('starter.industryFixed', { industry: t(`industries.${fixedIndustry}`) })}</p>
            )}
            <a
              href={ready ? target : undefined}
              aria-disabled={!ready}
              onClick={(e) => {
                if (!ready) e.preventDefault();
              }}
              className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                ready ? 'bg-brand-600 hover:bg-brand-700 text-white' : 'bg-ink-200 text-ink-500 cursor-not-allowed shadow-none'
              }`}
            >
              {t('starter.cta')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-ink-500 text-center">
              {ready ? t('starter.ctaNote') : t('starter.chooseIndustryFirst')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteStarter;
