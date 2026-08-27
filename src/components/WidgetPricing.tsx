import { Check, ArrowRight, Sparkles, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { localizedPrice } from '../utils/currency';
import type { SupportedLanguage } from '../i18n/config';

const WIDGET_PLAN_PRICE_DKK = 999;

interface WidgetFeature {
  bold: string;
  rest: string;
}

function WidgetPricing() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const features = t('widgetPricing.features', { returnObjects: true }) as WidgetFeature[];
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ink-50 via-white to-brand-50/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-ink-100/60 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-50 to-brand-100/80 text-brand-700 px-5 py-2.5 rounded-full mb-8 border border-brand-200/50 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">{t('widgetPricing.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t('widgetPricing.title')}
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {t('widgetPricing.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-ink-900 via-brand-900 to-ink-900 rounded-3xl border border-brand-500/20 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:28px_28px]"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>

            <div className="p-8 md:p-12 lg:p-16 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-accent-300 border border-white/10 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                      <Mic className="w-3.5 h-3.5" />
                      {t('widgetPricing.plan_badge')}
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="text-6xl md:text-7xl font-bold text-white">{localizedPrice(WIDGET_PLAN_PRICE_DKK, lang)}</span>
                      <span className="text-2xl text-ink-300 ml-3">{t('widgetPricing.price_period')}</span>
                    </div>
                    <p className="text-ink-200 text-lg">
                      {t('widgetPricing.price_note1')}
                    </p>
                    {/* The extra 50 minutes are a limited campaign, so say so
                        right next to the number rather than in the small print. */}
                    <p className="inline-flex items-center gap-2 mt-3 bg-accent-400/15 text-accent-300 border border-accent-400/30 rounded-full px-4 py-1.5 text-sm font-semibold">
                      {t('widgetPricing.campaign_note')}
                    </p>
                    <p className="text-sm text-ink-400 mt-3">
                      {t('widgetPricing.price_note2')}
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-brand-300" />
                        </div>
                        <span className="text-ink-200 leading-relaxed">
                          {feature.bold && <span className="font-semibold text-white">{feature.bold}</span>}
                          {feature.rest}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://aibooking.dk/widget"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-ink-950 bg-accent-400 rounded-xl hover:bg-accent-300 transition-all shadow-lg shadow-accent-500/20 hover:scale-105 group"
                  >
                    {t('widgetPricing.cta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-ink-950 to-ink-900 rounded-2xl p-8 border border-white/10 shadow-lg">
                    <div className="bg-white rounded-xl p-6 shadow-md mb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink-900">{t('widgetPricing.demo_widget_label')}</div>
                          <div className="text-xs text-ink-500">{t('widgetPricing.demo_widget_status')}</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-brand-50 rounded-lg p-3 border border-brand-100">
                          <p className="text-sm text-ink-700">
                            <span className="font-semibold">{t('widgetPricing.demo_ai_label')}</span> {t('widgetPricing.demo_msg1')}
                          </p>
                        </div>
                        <div className="bg-ink-100 rounded-lg p-3 ml-8 border border-ink-200">
                          <p className="text-sm text-ink-700">
                            <span className="font-semibold">{t('widgetPricing.demo_customer_label')}</span> {t('widgetPricing.demo_msg2')}
                          </p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-3 border border-brand-100">
                          <p className="text-sm text-ink-700">
                            <span className="font-semibold">{t('widgetPricing.demo_ai_label')}</span> {t('widgetPricing.demo_msg3')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-ink-300 font-medium">
                        {t('widgetPricing.demo_footer')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-50 to-ink-50 rounded-2xl p-8 max-w-3xl mx-auto border border-brand-100/50 shadow-sm">
            <p className="text-lg text-ink-700 leading-relaxed">
              <span className="font-semibold text-ink-900">{t('widgetPricing.perfect_for_label')}</span> {t('widgetPricing.perfect_for_text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WidgetPricing;
