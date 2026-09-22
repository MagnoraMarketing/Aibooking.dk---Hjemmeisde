import { useTranslation } from 'react-i18next';
import PageHero from '../PageHero';
import { Zap, Clock, CheckCircle } from 'lucide-react';

interface FeatureItem { title: string; description: string }

function IntegrationHero() {
  const { t } = useTranslation('integrationsPage');

  const featuresText = t('hero.features', { returnObjects: true }) as FeatureItem[];
  const featureIcons = [Clock, Zap, CheckCircle];
  const features = featuresText.map((item, i) => ({ ...item, icon: featureIcons[i] }));

  return (
    <>
      <PageHero badge={t('hero.badge')} title={t('hero.title_line1')} highlight={t('hero.title_line2')} subtitle={t('hero.subtitle')} />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-ink-50 p-6 rounded-2xl border border-ink-100 text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{feature.title}</h3>
                  <p className="text-ink-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default IntegrationHero;
