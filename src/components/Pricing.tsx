import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PricingPlanText {
  name: string;
  description: string;
  minutes: string;
  features: string[];
}

function Pricing() {
  const { t } = useTranslation();
  const [isAdditionalPricesOpen, setIsAdditionalPricesOpen] = useState(false);

  const plansText = t('pricing.plans', { returnObjects: true }) as PricingPlanText[];
  const planMeta = [
    { price: '0', setup: '0', highlighted: false, isDemo: true, href: 'https://cal.com/magnora-marketing-30zqdm/onboarding-7-dage-prøve-periode' },
    { price: '999', setup: '1.998', highlighted: false, isDemo: false, href: 'https://buy.stripe.com/7sY5kC1CX5NF6oI3ET4AU00' },
    { price: '2.499', setup: '4.998', highlighted: true, isDemo: false, href: 'https://buy.stripe.com/9B628q3L5b7Z3cwgrF4AU01' },
    { price: '5.999', setup: '11.998', highlighted: false, isDemo: false, href: 'https://buy.stripe.com/7sYeVcgxRa3VcN64IX4AU02' },
  ];
  const plans = plansText.map((plan, i) => ({ ...plan, ...planMeta[i] }));

  return (
    <section id="priser" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-ink-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-5 py-2.5 rounded-full mb-8 border border-brand-100">
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">{t('pricing.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 text-white shadow-xl scale-105 border border-brand-500/50'
                  : 'bg-white border border-ink-200/80 hover:border-brand-300/60 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-ink-900 px-5 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                    {t('pricing.most_popular_badge')}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.price === "0" ? (
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                      {t('pricing.free_label')}
                    </span>
                  ) : (
                    <>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`ml-2 ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                        {t('pricing.currency_suffix')}
                      </span>
                    </>
                  )}
                </div>
                <div className={`mt-2 text-sm ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                  {plan.minutes}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-brand-500' : 'bg-brand-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-brand-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-brand-50' : 'text-ink-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.setup !== "0" && (
                <div className={`mb-6 pt-6 border-t ${plan.highlighted ? 'border-brand-500' : 'border-ink-200'}`}>
                  <p className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-ink-600'}`}>
                    {t('pricing.setup_note', { setup: plan.setup })}
                  </p>
                </div>
              )}

              <div className="flex-grow"></div>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all transform hover:scale-[1.02] text-[15px] ${
                  plan.highlighted
                    ? 'bg-white text-brand-600 hover:bg-brand-50 shadow-md'
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
                }`}
              >
                {index === 0 ? t('pricing.cta_demo') : t('pricing.cta_order')}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-ink-600 text-lg max-w-2xl mx-auto">
            {t('pricing.after_order_note')}
          </p>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-ink-900 mb-12 text-center">
            {t('pricing.additionalPrices.title')}
          </h3>

          <div className="bg-white rounded-2xl border border-ink-200 overflow-hidden shadow-sm">
            <button
              onClick={() => setIsAdditionalPricesOpen(!isAdditionalPricesOpen)}
              className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-ink-50 transition-colors"
            >
              <h4 className="text-xl font-semibold text-ink-900">
                {t('pricing.additionalPrices.toggle_label')}
              </h4>
              <ChevronDown
                className={`w-6 h-6 text-ink-600 transition-transform duration-300 ${isAdditionalPricesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isAdditionalPricesOpen && (
              <div className="border-t border-ink-200">
                <div className="p-8 md:p-10 space-y-8">
                  <div className="pb-8 border-b border-ink-200">
                    <h4 className="text-xl font-semibold text-ink-900 mb-3">
                      {t('pricing.additionalPrices.setup.title')}
                    </h4>
                    <p className="text-ink-700 text-lg">
                      {t('pricing.additionalPrices.setup.value')} <span className="text-ink-600 text-base">{t('pricing.additionalPrices.setup.note')}</span>
                    </p>
                  </div>

                  <div className="pb-8 border-b border-ink-200">
                    <h4 className="text-lg font-semibold text-ink-900 mb-2">
                      {t('pricing.additionalPrices.maintenance.title')} <span className="text-brand-600 text-sm font-medium">{t('pricing.additionalPrices.maintenance.optional_label')}</span>
                    </h4>
                    <p className="text-ink-600 mb-2 text-sm leading-relaxed">
                      {t('pricing.additionalPrices.maintenance.description')}
                    </p>
                    <p className="text-ink-900 font-semibold text-base">
                      {t('pricing.additionalPrices.maintenance.price')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-ink-900 mb-4">
                      {t('pricing.additionalPrices.hourly.title')}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-ink-700">{t('pricing.additionalPrices.hourly.prompting_label')}</span>
                        <span className="text-ink-900 font-semibold">{t('pricing.additionalPrices.hourly.prompting_price')}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ink-700">{t('pricing.additionalPrices.hourly.development_label')}</span>
                        <span className="text-ink-900 font-semibold">{t('pricing.additionalPrices.hourly.development_price')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
