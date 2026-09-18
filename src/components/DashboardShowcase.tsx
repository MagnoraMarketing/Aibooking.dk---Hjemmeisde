import { useTranslation } from 'react-i18next';
import { LayoutDashboard } from 'lucide-react';
import AgencyDashboardMock, { type DashboardVariant } from './AgencyDashboardMock';

interface DashboardShowcaseProps {
  variant: DashboardVariant;
  className?: string;
}

// Wraps the dashboard mock-up with the heading used everywhere it's shown —
// the homepage (a generic hairdresser example) and each industry page (that
// industry's own fictional example) — so the section reads the same way
// across the site.
function DashboardShowcase({ variant, className = 'py-20 md:py-28 bg-white' }: DashboardShowcaseProps) {
  const { t } = useTranslation('agencyDashboard');

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

        <AgencyDashboardMock variant={variant} />
      </div>
    </section>
  );
}

export default DashboardShowcase;
