import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard } from 'lucide-react';
import AgencyDashboardMock, { type DashboardVariant } from './AgencyDashboardMock';

interface DashboardShowcaseProps {
  variant: DashboardVariant;
  // Extra examples the visitor can switch to (e.g. the webshop/Shopify
  // dashboard on the homepage); the tabs only render when this is given.
  alternatives?: Array<'frisor' | 'ecommerce'>;
  className?: string;
}

// Wraps the dashboard mock-up with the heading used everywhere it's shown —
// the homepage (a generic hairdresser example) and each industry page (that
// industry's own fictional example) — so the section reads the same way
// across the site.
function DashboardShowcase({ variant, alternatives, className = 'py-20 md:py-28 bg-white' }: DashboardShowcaseProps) {
  const { t } = useTranslation('agencyDashboard');
  const [active, setActive] = useState<DashboardVariant>(variant);
  const tabs = alternatives ? [variant, ...alternatives] : [];

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">
            <LayoutDashboard className="w-4 h-4" />
            {t('sectionHeading.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
            {t('sectionHeading.title')}
          </h2>
          <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {t('sectionHeading.subtitle')}
          </p>
        </div>

        {tabs.length > 1 && (
          <div className="flex justify-center mb-6">
            <div role="tablist" aria-label={t('showcaseTabs.label')} className="inline-flex flex-wrap justify-center gap-1 bg-white border border-ink-200 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active === tab}
                  onClick={() => setActive(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active === tab ? 'bg-brand-600 text-white' : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  {t(`showcaseTabs.${tab}`)}
                </button>
              ))}
            </div>
          </div>
        )}

        <AgencyDashboardMock variant={active} />
      </div>
    </section>
  );
}

export default DashboardShowcase;
