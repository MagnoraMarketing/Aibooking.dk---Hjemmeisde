import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mic, Clock, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { localizedPrice, displayAmount, formatAmount } from '../../utils/currency';
import type { SupportedLanguage } from '../../i18n/config';
import { INDUSTRY_THEMES, IndustryKey, TRIAL_URL } from './industryTheme';

type Mode = 'voice' | 'widget';

// Same packages and prices as the pricing tables elsewhere on the site.
const VOICE_PLANS = [
  { name: 'Starter', minutes: 200, price: 1500 },
  { name: 'Professional', minutes: 600, price: 2499 },
  { name: 'Enterprise', minutes: 2000, price: 5999 },
];
const WIDGET_PACK_MINUTES = 150;
const WIDGET_PACK_PRICE = 999;

const MIN_MINUTES = 25;
const MAX_MINUTES = 2000;
const STEP_MINUTES = 25;

interface IndustryCalculatorProps {
  industry: IndustryKey;
}

/**
 * Lets a visitor put their own expected call volume in and see which package
 * covers it, what it costs, and how much phone time it hands back to them.
 */
function IndustryCalculator({ industry }: IndustryCalculatorProps) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const theme = INDUSTRY_THEMES[industry];

  const [mode, setMode] = useState<Mode>('voice');
  const [minutes, setMinutes] = useState(200);
  const [withSetup, setWithSetup] = useState(false);

  // Voice: smallest package that covers the volume. Widget: talk time is sold
  // in 150-minute packs that renew as they're used up.
  const packs = Math.max(1, Math.ceil(minutes / WIDGET_PACK_MINUTES));
  const voicePlan = VOICE_PLANS.find((p) => minutes <= p.minutes) ?? VOICE_PLANS[VOICE_PLANS.length - 1];
  const exceedsLargest = minutes > VOICE_PLANS[VOICE_PLANS.length - 1].minutes;

  const planName = mode === 'voice' ? voicePlan.name : t('industryTools.calculator.widgetPlanName');
  const monthlyPrice = mode === 'voice' ? voicePlan.price : packs * WIDGET_PACK_PRICE;
  const includedMinutes = mode === 'voice' ? voicePlan.minutes : packs * WIDGET_PACK_MINUTES;
  // Setup is a one-off add-on priced at one month of the chosen package.
  const setupPrice = monthlyPrice;
  // Summed from the rounded display values so the total matches the two lines
  // above it once the amounts have been converted to the visitor's currency.
  const firstMonthTotal = displayAmount(monthlyPrice, lang) + displayAmount(setupPrice, lang);

  const hoursFreed = new Intl.NumberFormat(lang, { maximumFractionDigits: 1 }).format(minutes / 60);

  const modes: { key: Mode; icon: typeof Phone; title: string; desc: string }[] = [
    {
      key: 'voice',
      icon: Phone,
      title: t('industryTools.calculator.modeVoice'),
      desc: t('industryTools.calculator.modeVoiceDesc'),
    },
    {
      key: 'widget',
      icon: Mic,
      title: t('industryTools.calculator.modeWidget'),
      desc: t('industryTools.calculator.modeWidgetDesc'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-ink-50 border-y border-ink-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 ${theme.chip} px-4 py-2 rounded-full text-sm font-semibold mb-5`}>
            <Clock className="w-4 h-4" />
            {t('industryTools.calculator.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
            {t('industryTools.calculator.title')}
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed">
            {t('industryTools.calculator.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-ink-200 overflow-hidden">
          <div className="grid lg:grid-cols-5">

            {/* Inputs */}
            <div className="lg:col-span-3 p-7 md:p-10 space-y-8">
              <div>
                <div className="text-sm font-bold text-ink-900 mb-3">
                  {t('industryTools.calculator.modeLabel')}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {modes.map(({ key, icon: Icon, title, desc }) => {
                    const active = mode === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setMode(key)}
                        aria-pressed={active}
                        className={`text-left rounded-2xl border-2 p-4 transition-all ${
                          active
                            ? `${theme.selectedBorder} bg-white shadow-sm`
                            : 'border-ink-200 hover:border-ink-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${active ? theme.iconBg : 'bg-ink-100'}`}>
                            <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-ink-600'}`} />
                          </div>
                          <span className="font-bold text-ink-900 text-[15px] leading-tight">{title}</span>
                        </div>
                        <p className="text-xs text-ink-600 leading-relaxed">{desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-3 gap-4">
                  <label htmlFor="minutes-slider" className="text-sm font-bold text-ink-900">
                    {t('industryTools.calculator.minutesLabel')}
                  </label>
                  <span className={`text-2xl font-bold ${theme.text} whitespace-nowrap`}>
                    {minutes} {t('industryTools.calculator.minutesUnit')}
                  </span>
                </div>
                <input
                  id="minutes-slider"
                  type="range"
                  min={MIN_MINUTES}
                  max={MAX_MINUTES}
                  step={STEP_MINUTES}
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  className={`w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-200 ${theme.accent}`}
                />
                <div className="flex justify-between text-xs text-ink-500 mt-2">
                  <span>{MIN_MINUTES} {t('industryTools.calculator.minutesUnit')}</span>
                  <span>{MAX_MINUTES}+ {t('industryTools.calculator.minutesUnit')}</span>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer bg-ink-50 border border-ink-200 rounded-2xl p-4">
                <input
                  type="checkbox"
                  checked={withSetup}
                  onChange={() => setWithSetup((v) => !v)}
                  className="mt-0.5 w-4 h-4 rounded flex-shrink-0"
                />
                <span className="text-sm text-ink-700 leading-relaxed">
                  <span className="font-semibold text-ink-900">
                    {t('industryTools.calculator.setupLabel')}
                  </span>{' '}
                  {t('industryTools.calculator.setupNote', { price: localizedPrice(setupPrice, lang) })}
                </span>
              </label>

              <div className="flex items-start gap-2.5 text-sm text-ink-600">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{t('industryTools.calculator.recommendation')}</p>
              </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-2 bg-ink-900 p-7 md:p-10 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-2">
                {t('industryTools.calculator.recommendedLabel')}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{planName}</div>
              <div className="text-sm text-ink-400 mb-6">
                {t('industryTools.calculator.includedMinutes', { minutes: includedMinutes })}
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold text-white">{localizedPrice(monthlyPrice, lang)}</span>
                <span className="text-lg text-ink-400">{t('pricing.currency_suffix')}</span>
              </div>

              {withSetup && (
                <div className="mt-4 pt-4 border-t border-ink-700 text-sm space-y-1.5">
                  <div className="flex justify-between text-ink-300">
                    <span>{t('industryTools.calculator.setupLine')}</span>
                    <span>{localizedPrice(setupPrice, lang)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white">
                    <span>{t('industryTools.calculator.firstMonthTotal')}</span>
                    <span>{formatAmount(firstMonthTotal, lang)}</span>
                  </div>
                </div>
              )}

              {exceedsLargest && mode === 'voice' && (
                <p className="mt-4 text-xs text-accent-300 leading-relaxed">
                  {t('industryTools.calculator.aboveLargest')}
                </p>
              )}

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {t('industryTools.calculator.timeFreedValue', { hours: hoursFreed })}
                    </div>
                    <p className="text-ink-400 text-xs leading-relaxed mt-0.5">
                      {t('industryTools.calculator.timeFreedText')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {t('industryTools.calculator.alwaysOnTitle')}
                    </div>
                    <p className="text-ink-400 text-xs leading-relaxed mt-0.5">
                      {t('industryTools.calculator.alwaysOnText')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-grow" />

              <a
                href={TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 w-full ${theme.solidBtn} text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg`}
              >
                {t('industryTools.calculator.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-ink-500 mt-3 text-center leading-relaxed">
                {t('industryTools.calculator.note')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryCalculator;
