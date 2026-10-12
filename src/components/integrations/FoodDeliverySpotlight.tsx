import { useTranslation } from 'react-i18next';
import { Truck, CheckCircle2 } from 'lucide-react';
import { SIGNUP_URL } from '../../utils/backend';

// Food delivery highlighted on the integrations page: the agent orders a
// Just Eat or Uber Direct courier for a restaurant, café or shop — the same
// option the customer dashboard puts under Integrationer → Levering.
function FoodDeliverySpotlight() {
  const { t } = useTranslation('integrationsPage');
  const points = t('foodDelivery.points', { returnObjects: true }) as string[];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-8 sm:p-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
              <Truck className="w-4 h-4" />
              {t('foodDelivery.badge')}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{t('foodDelivery.title')}</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{t('foodDelivery.description')}</p>
            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-orange-600 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-4">
            <div className="flex gap-3">
              <span className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-lg font-bold text-[#ff8000] shadow-sm">Just Eat</span>
              <span className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-lg font-bold text-gray-900 shadow-sm">Uber Direct</span>
            </div>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              {t('foodDelivery.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodDeliverySpotlight;
