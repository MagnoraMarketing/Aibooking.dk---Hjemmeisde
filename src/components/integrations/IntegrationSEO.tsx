import { useTranslation } from 'react-i18next';
import { Sparkles, Target, Zap, ShoppingCart, Calendar, Layers } from 'lucide-react';

function IntegrationSEO() {
  const { t } = useTranslation('integrationsPage');

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('integrationSEO.title')}
            </h2>
            <p className="text-xl text-ink-600 leading-relaxed">
              {t('integrationSEO.intro')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-ink-700 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <ShoppingCart className="w-7 h-7 text-brand-600 mr-3" />
                {t('integrationSEO.shopify.title')}
              </h3>
              <p>{t('integrationSEO.shopify.paragraph1')}</p>
              <p>{t('integrationSEO.shopify.paragraph2')}</p>
            </div>

            <div className="bg-brand-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <Target className="w-7 h-7 text-brand-600 mr-3" />
                {t('integrationSEO.solutions.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <ShoppingCart className="w-6 h-6 text-brand-600 mb-2" />
                  <h4 className="font-bold text-ink-900 mb-2">{t('integrationSEO.solutions.shopify.title')}</h4>
                  <p className="text-ink-700">{t('integrationSEO.solutions.shopify.text')}</p>
                </div>
                <div>
                  <Calendar className="w-6 h-6 text-brand-600 mb-2" />
                  <h4 className="font-bold text-ink-900 mb-2">{t('integrationSEO.solutions.booking.title')}</h4>
                  <p className="text-ink-700">{t('integrationSEO.solutions.booking.text')}</p>
                </div>
                <div>
                  <Layers className="w-6 h-6 text-brand-600 mb-2" />
                  <h4 className="font-bold text-ink-900 mb-2">{t('integrationSEO.solutions.combined.title')}</h4>
                  <p className="text-ink-700">{t('integrationSEO.solutions.combined.text')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <Sparkles className="w-7 h-7 text-brand-600 mr-3" />
                {t('integrationSEO.howItWorks.title')}
              </h3>
              <p>{t('integrationSEO.howItWorks.paragraph1')}</p>
              <p>{t('integrationSEO.howItWorks.paragraph2')}</p>
            </div>

            <div className="bg-ink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <Zap className="w-7 h-7 text-brand-600 mr-3" />
                {t('integrationSEO.whyChoose.title')}
              </h3>
              <ul className="space-y-3">
                {(t('integrationSEO.whyChoose.points', { returnObjects: true }) as string[]).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-ink-900 mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-8">
              <p className="text-xl text-ink-700 mb-6">{t('integrationSEO.closing.paragraph1')}</p>
              <p className="text-lg font-semibold text-brand-600">{t('integrationSEO.closing.paragraph2')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationSEO;
