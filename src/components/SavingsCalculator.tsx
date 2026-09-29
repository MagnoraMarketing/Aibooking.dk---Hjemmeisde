import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { SIGNUP_URL } from '../utils/backend';

const MIN_HOURS = 1;
const MAX_HOURS = 40;
// The AI receptionist typically takes over the large majority of calls,
// messages and bookings — matches the "spar 85%" claim used elsewhere on
// the site (see HomePage's SEO description).
const SAVINGS_RATE = 0.85;
const WEEKS_PER_MONTH = 4.33;
const DEFAULT_HOURLY_WAGE = 300;

/**
 * Lets a visitor enter their own weekly phone hours and hourly wage instead
 * of being told fixed numbers — both vary a lot from one business to the next.
 */
function SavingsCalculator() {
  const { t, i18n } = useTranslation();
  const [hours, setHours] = useState(10);
  const [wage, setWage] = useState(DEFAULT_HOURLY_WAGE);

  const format = useMemo(
    () => new Intl.NumberFormat(i18n.resolvedLanguage || i18n.language, { maximumFractionDigits: 1 }),
    [i18n.resolvedLanguage, i18n.language]
  );
  const moneyFormat = useMemo(
    () => new Intl.NumberFormat(i18n.resolvedLanguage || i18n.language, { maximumFractionDigits: 0 }),
    [i18n.resolvedLanguage, i18n.language]
  );

  const hoursSavedWeek = hours * SAVINGS_RATE;
  const hoursSavedMonth = hoursSavedWeek * WEEKS_PER_MONTH;
  const moneySavedWeek = hoursSavedWeek * wage;
  const moneySavedMonth = hoursSavedMonth * wage;

  return (
    <section id="spar-tid" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-5 py-2.5 rounded-full mb-6 border border-brand-100">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">{t('savingsCalculator.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
            {t('savingsCalculator.title')}
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed">
            {t('savingsCalculator.subtitle')}
          </p>
        </div>

        <div className="bg-ink-50 rounded-3xl border border-ink-200 p-7 md:p-10">
          <div className="flex items-baseline justify-between mb-3 gap-4">
            <label htmlFor="phone-hours-slider" className="text-sm font-bold text-ink-900">
              {t('savingsCalculator.inputLabel')}
            </label>
            <span className="text-2xl font-bold text-brand-600 whitespace-nowrap">
              {hours} {t('savingsCalculator.hoursUnit')}
            </span>
          </div>
          <input
            id="phone-hours-slider"
            type="range"
            min={MIN_HOURS}
            max={MAX_HOURS}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-200 accent-brand-600"
          />
          <div className="flex justify-between text-xs text-ink-500 mt-2 mb-8">
            <span>{MIN_HOURS} {t('savingsCalculator.hoursUnit')}</span>
            <span>{MAX_HOURS}+ {t('savingsCalculator.hoursUnit')}</span>
          </div>

          <div className="mb-8">
            <label htmlFor="hourly-wage-input" className="text-sm font-bold text-ink-900 block mb-3">
              {t('savingsCalculator.wageInputLabel')}
            </label>
            <div className="relative max-w-xs">
              <input
                id="hourly-wage-input"
                type="number"
                inputMode="numeric"
                min={0}
                step={10}
                value={wage}
                onChange={(e) => setWage(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-lg font-bold text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-ink-500">
                {t('savingsCalculator.wageUnit')}
              </span>
            </div>
          </div>

          <div className="bg-ink-900 rounded-2xl p-7 md:p-8">
            <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-3">
              {t('savingsCalculator.resultLabel')}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
              {t('savingsCalculator.moneySavedWeek', { amount: moneyFormat.format(moneySavedWeek) })}
            </div>
            <div className="text-ink-300 mb-3">
              {t('savingsCalculator.moneySavedMonth', { amount: moneyFormat.format(moneySavedMonth) })}
            </div>
            <div className="text-sm text-ink-400 mb-6">
              {t('savingsCalculator.hoursSavedWeek', { hours: format.format(hoursSavedWeek) })}
              {' · '}
              {t('savingsCalculator.hoursSavedMonth', { hours: format.format(hoursSavedMonth) })}
            </div>

            <div className="flex items-start gap-2.5 bg-brand-500/10 border border-brand-400/30 rounded-xl px-4 py-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-brand-100 font-semibold">{t('savingsCalculator.billingNote')}</span>
            </div>

            <p className="text-xs text-ink-500 mb-6 leading-relaxed">{t('savingsCalculator.note')}</p>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-accent-400 text-ink-950 px-8 py-3.5 rounded-xl font-bold hover:bg-accent-300 transition-all"
            >
              {t('savingsCalculator.cta')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingsCalculator;
