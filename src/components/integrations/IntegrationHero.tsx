import { useTranslation } from 'react-i18next';
import { Zap, Clock, CheckCircle } from 'lucide-react';

interface FeatureItem { title: string; description: string }

function IntegrationHero() {
  const { t } = useTranslation('integrationsPage');

  const featuresText = t('hero.features', { returnObjects: true }) as FeatureItem[];
  const featureIcons = [Clock, Zap, CheckCircle];
  const features = featuresText.map((item, i) => ({ ...item, icon: featureIcons[i] }));

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title_line1')}
            <span className="text-brand-600"> {t('hero.title_line2')}</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationHero;
