import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, ArrowRight } from 'lucide-react';
import { SIGNUP_URL } from '../utils/backend';

const MIN_HOURS = 1;
const MAX_HOURS = 40;
// The AI receptionist typically takes over the large majority of calls,
// messages and bookings — matches the "spar 85%" claim used elsewhere on
// the site (see HomePage's SEO description).
const SAVINGS_RATE = 0.85;
const WEEKS_PER_MONTH = 4.33;

/**
 * Lets a visitor enter their own weekly phone hours instead of being told a
 * fixed number — usage varies a lot from one business to the next.
 */
function SavingsCalculator() {
  const { t, i18n } = useTranslation();
  const [hours, setHours] = useState(10);

  const format = useMemo(
    () => new Intl.NumberFormat(i18n.resolvedLanguage || i18n.language, { maximumFractionDigits: 1 }),
    [i18n.resolvedLanguage, i18n.language]
  );

  const hoursSavedWeek = hours * SAVINGS_RATE;
  const hoursSavedMonth = hoursSavedWeek * WEEKS_PER_MONTH;

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

          <div className="bg-ink-900 rounded-2xl p-7 md:p-8">
            <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-3">
              {t('savingsCalculator.resultLabel')}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
              {t('savingsCalculator.hoursSavedWeek', { hours: format.format(hoursSavedWeek) })}
            </div>
            <div className="text-ink-300 mb-6">
              {t('savingsCalculator.hoursSavedMonth', { hours: format.format(hoursSavedMonth) })}
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
