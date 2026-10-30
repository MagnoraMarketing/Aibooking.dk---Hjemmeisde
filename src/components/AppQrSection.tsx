import { ArrowRight, CheckCircle2, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { APP_URL } from '../utils/backend';
import { useLocalizedHref } from '../utils/pagePaths';

// "Styr AIbooking fra mobilen": a QR code (generated at build time by
// scripts/generate-app-qr.js) that opens the customer app on the phone. On a
// phone the visitor is already there, so it becomes a button instead.
// Links to the /app page with screenshots, except on that page itself.
function AppQrSection({ showMoreLink = true }: { showMoreLink?: boolean }) {
  const { t } = useTranslation();
  const localizedHref = useLocalizedHref();
  const points = [t('appQr.point_login'), t('appQr.point_overview'), t('appQr.point_devices')];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ink-50">
      <div className="max-w-5xl mx-auto bg-white border border-ink-100 rounded-3xl shadow-sm p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 mb-3">
            <Smartphone className="w-4 h-4" />
            {t('appQr.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-3 tracking-tight">{t('appQr.title')}</h2>
          <p className="text-ink-600 leading-relaxed mb-5">{t('appQr.subtitle')}</p>
          <ul className="space-y-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-600 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          {showMoreLink && (
            <a
              href={localizedHref('/app')}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              {t('appQr.more_link')}
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
          <a
            href={APP_URL}
            className="md:hidden mt-6 inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors font-semibold text-sm"
          >
            <Smartphone className="w-4 h-4" />
            {t('appQr.button')}
          </a>
        </div>
        <div className="hidden md:flex flex-col items-center gap-3 flex-shrink-0">
          <img
            src="/app-qr.svg"
            alt={t('appQr.qr_alt')}
            width={168}
            height={168}
            loading="lazy"
            className="w-[168px] h-[168px] rounded-2xl border border-ink-100 bg-white p-2"
          />
          <p className="text-xs text-ink-400 text-center max-w-[11rem]">{t('appQr.scan_hint')}</p>
        </div>
      </div>
    </section>
  );
}

export default AppQrSection;
