import { useTranslation } from 'react-i18next';
import { ArrowRight, PhoneForwarded, Clock, CheckCircle2 } from 'lucide-react';
import type { SupportedLanguage } from '../../i18n/config';
import { buildLocalizedPath } from '../../utils/localePaths';
import { INDUSTRY_THEMES, IndustryKey, SIGNUP_URL } from './industryTheme';

interface IndustryTrialBannerProps {
  industry: IndustryKey;
}

/** 7-day / 75-minute trial call-to-action, repeated on every industry page. */
function IndustryTrialBanner({ industry }: IndustryTrialBannerProps) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const trialHref = buildLocalizedPath(lang, '/proeveperiode');
  const theme = INDUSTRY_THEMES[industry];

  const points = t('industryTools.trial.points', { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ink-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 grid md:grid-cols-5 gap-8 items-center">

            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 px-3.5 py-1.5 rounded-full text-xs font-bold mb-5">
                <Clock className="w-3.5 h-3.5" />
                {t('industryTools.trial.badge')}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                {t('industryTools.trial.title')}
              </h2>
              <p className="text-ink-300 leading-relaxed mb-6">
                {t('industryTools.trial.text')}
              </p>
              <ul className="space-y-2.5">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-ink-200 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center mb-2">
                <PhoneForwarded className="w-7 h-7 text-white mx-auto mb-3" />
                <div className="text-3xl font-bold text-white leading-none mb-1">
                  {t('industryTools.trial.minutesValue')}
                </div>
                <div className="text-xs text-ink-400">{t('industryTools.trial.minutesLabel')}</div>
              </div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full ${theme.solidBtn} text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg`}
              >
                {t('industryTools.trial.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={trialHref}
                className="flex items-center justify-center w-full bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/20 transition-all"
              >
                {t('industryTools.trial.secondary')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryTrialBanner;
