import { useTranslation } from 'react-i18next';
import { KeyRound, ShoppingBag } from 'lucide-react';

// Mock-up of the "Webshop / Shopify" screen from the customer dashboard,
// built in markup rather than as a screenshot so it stays sharp, responsive
// and translated into every site language.
export default function ShopifyIntegrationMock() {
  const { t } = useTranslation('widgetPage');

  const tabs = t('shopifyIntegration.mock.tabs', { returnObjects: true }) as string[];
  const activeTab = t('shopifyIntegration.mock.activeTab');
  const steps = t('shopifyIntegration.mock.steps', { returnObjects: true }) as string[];

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-ink-200 bg-white">
      {/* Browser chrome */}
      <div className="bg-ink-100 px-5 py-3 flex items-center gap-3 border-b border-ink-200">
        <div className="flex gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-[11px] text-ink-400 ml-2 truncate border border-ink-200">
          {t('shopifyIntegration.mock.windowLabel')}
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-white border-b border-ink-200 px-4 sm:px-5 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {tabs.map((tab, i) => (
            <span
              key={i}
              className={`px-3 py-3 text-[13px] font-medium whitespace-nowrap border-b-2 ${
                tab === activeTab
                  ? 'text-brand-700 border-brand-600'
                  : 'text-ink-600 border-transparent'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-ink-50 p-5 sm:p-7 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold tracking-wider text-ink-400 mb-1">
              {t('shopifyIntegration.mock.sectionLabel')}
            </div>
            <p className="text-sm text-ink-600 max-w-md leading-relaxed">
              {t('shopifyIntegration.mock.description')}
            </p>
          </div>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-ink-100 text-ink-500 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-400" />
            {t('shopifyIntegration.mock.statusNotConnected')}
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-ink-200 p-5">
          <label className="text-sm font-semibold text-ink-900 block mb-2">
            {t('shopifyIntegration.mock.urlLabel')}
          </label>
          <input
            disabled
            readOnly
            placeholder={t('shopifyIntegration.mock.urlPlaceholder')}
            className="w-full bg-ink-50 border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-400 placeholder:text-ink-400"
          />
          <p className="text-xs text-ink-500 mt-2 leading-relaxed">
            {t('shopifyIntegration.mock.urlNote')}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-ink-200 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-brand-600 flex-shrink-0" />
            <h4 className="font-semibold text-ink-900 text-sm">
              {t('shopifyIntegration.mock.apiKeyBoxTitle')}
            </h4>
          </div>
          <ol className="space-y-2.5">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-ink-600 leading-relaxed">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-50 text-brand-700 text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div>
            <label className="text-sm font-semibold text-ink-900 block mb-2">
              {t('shopifyIntegration.mock.apiKeyLabel')}
            </label>
            <input
              disabled
              readOnly
              placeholder={t('shopifyIntegration.mock.apiKeyPlaceholder')}
              className="w-full bg-ink-50 border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-400 placeholder:text-ink-400 font-mono"
            />
            <p className="text-xs text-ink-500 mt-2 leading-relaxed">
              {t('shopifyIntegration.mock.apiKeyNote')}
            </p>
          </div>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl opacity-90 cursor-default"
          >
            <ShoppingBag className="w-4 h-4" />
            {t('shopifyIntegration.mock.saveButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
