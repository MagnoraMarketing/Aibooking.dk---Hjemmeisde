import { useTranslation } from 'react-i18next';
import { CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { INDUSTRY_THEMES, IndustryKey } from './industryTheme';

interface ChatLine { role: 'customer' | 'ai'; text: string }

interface IndustryScenarioProps {
  industry: IndustryKey;
}

/**
 * A worked example of the AI receptionist handling a real enquiry, shown at the
 * top of each industry page so visitors grasp the product before reading on.
 * The narrative half doubles as the page's industry-specific SEO copy.
 */
function IndustryScenario({ industry }: IndustryScenarioProps) {
  const { t } = useTranslation();
  const theme = INDUSTRY_THEMES[industry];
  const base = `industryTools.scenario.${industry}`;

  const chat = t(`${base}.chat`, { returnObjects: true }) as ChatLine[];
  const outcomes = t(`${base}.outcomes`, { returnObjects: true }) as string[];
  const results = t(`${base}.results`, { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* min-w-0 on the columns: grid items default to min-width:auto, so a
            long unbreakable compound word pushed the track wider than the
            viewport and gave the page a horizontal scrollbar on mobile. */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Narrative – also the industry-specific SEO copy for this page */}
          <div className="min-w-0">
            <div className={`inline-flex items-center gap-2 ${theme.chip} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
              <Sparkles className="w-4 h-4" />
              {t('industryTools.scenario.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-5 tracking-tight">
              {t(`${base}.title`)}
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-6">
              {t(`${base}.intro`)}
            </p>

            <div className={`${theme.softBg} border ${theme.softBorder} rounded-2xl p-5 mb-8`}>
              <p className="text-ink-800 leading-relaxed">
                <span className="font-semibold">{t('industryTools.scenario.situationLabel')} </span>
                {t(`${base}.situation`)}
              </p>
            </div>

            <ul className="space-y-3">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 ${theme.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-ink-700 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: the conversation as it actually plays out */}
          <div className="relative min-w-0">
            <div className="bg-ink-900 rounded-3xl shadow-2xl border border-ink-700 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-ink-800 bg-ink-950/50">
                <div className={`w-9 h-9 rounded-xl ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <PhoneCall className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white text-sm font-semibold truncate">
                    {t(`${base}.callLabel`)}
                  </div>
                  <div className="text-ink-400 text-[11px]">{t('industryTools.scenario.aiHandling')}</div>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-green-400 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {t('industryTools.scenario.live')}
                </span>
              </div>

              <div className="p-5 space-y-3">
                {chat.map((line, i) => (
                  <div key={i} className={`flex ${line.role === 'ai' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        line.role === 'ai'
                          ? `${theme.bubble} text-white rounded-br-md`
                          : 'bg-ink-800 text-ink-200 rounded-bl-md'
                      }`}
                    >
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-ink-800 bg-ink-950/50 px-5 py-4">
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold mb-3">
                  {t('industryTools.scenario.resultsLabel')}
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.map((result, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-ink-800 border border-ink-700 text-ink-200 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IndustryScenario;
