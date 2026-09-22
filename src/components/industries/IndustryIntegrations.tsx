import { useTranslation } from 'react-i18next';
import { CalendarClock } from 'lucide-react';
import { INDUSTRY_THEMES, IndustryKey } from './industryTheme';

interface IndustryIntegrationsProps {
  industry: IndustryKey;
}

interface IntegrationItem { name: string; description: string }

/** Most-used booking calendar integrations for this industry, shown under its list of practices/trades/business types. */
function IndustryIntegrations({ industry }: IndustryIntegrationsProps) {
  const { t } = useTranslation();
  const theme = INDUSTRY_THEMES[industry];

  const title = t(`industryTools.integrations.${industry}.title`);
  const subtitle = t(`industryTools.integrations.${industry}.subtitle`);
  const items = t(`industryTools.integrations.${industry}.items`, { returnObjects: true }) as IntegrationItem[];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-ink-200 mb-16">
      <div className={`inline-flex items-center gap-2 ${theme.chip} px-4 py-2 rounded-full text-sm font-semibold mb-5`}>
        <CalendarClock className="w-4 h-4" />
        {t('industryTools.integrations.badge')}
      </div>
      <h2 className="text-3xl font-bold text-ink-900 mb-4">{title}</h2>
      <p className="text-lg text-ink-600 leading-relaxed mb-8 max-w-3xl">{subtitle}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3 bg-ink-50 rounded-xl p-4 border border-ink-100">
            <div className={`w-9 h-9 ${theme.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <CalendarClock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-ink-900 text-sm mb-0.5">{item.name}</h3>
              <p className="text-ink-600 text-xs leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustryIntegrations;
