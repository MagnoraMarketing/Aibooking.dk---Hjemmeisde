import { useTranslation } from 'react-i18next';
import { Sparkles, Target, Zap } from 'lucide-react';

function IndustrySEO() {
  const { t } = useTranslation('industriesPage');

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {t('seoContent.title')}
            </h2>
            <p className="text-xl text-ink-600 leading-relaxed">
              {t('seoContent.intro')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-ink-700 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <Sparkles className="w-7 h-7 text-brand-600 mr-3" />
                {t('seoContent.whatIs.title')}
              </h3>
              <p>
                {t('seoContent.whatIs.paragraph1')}
              </p>
              <p>
                {t('seoContent.whatIs.paragraph2')}
              </p>
            </div>

            <div className="bg-brand-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <Target className="w-7 h-7 text-brand-600 mr-3" />
                {t('seoContent.solutions.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-ink-900 mb-2">{t('seoContent.solutions.healthcare.title')}</h4>
                  <p className="text-ink-700">
                    {t('seoContent.solutions.healthcare.text')}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-ink-900 mb-2">{t('seoContent.solutions.craftsman.title')}</h4>
                  <p className="text-ink-700">
                    {t('seoContent.solutions.craftsman.text')}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-ink-900 mb-2">{t('seoContent.solutions.office.title')}</h4>
                  <p className="text-ink-700">
                    {t('seoContent.solutions.office.text')}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-ink-900 mb-2">{t('seoContent.solutions.ecommerce.title')}</h4>
                  <p className="text-ink-700">
                    {t('seoContent.solutions.ecommerce.text')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4 flex items-center">
                <Zap className="w-7 h-7 text-brand-600 mr-3" />
                {t('seoContent.features.title')}
              </h3>
              <p>
                {t('seoContent.features.paragraph1')}
              </p>
              <p>
                {t('seoContent.features.paragraph2')}
              </p>
            </div>

            <div className="bg-ink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ink-900 mb-4">
                {t('seoContent.whyChoose.title')}
              </h3>
              <ul className="space-y-3">
                {(t('seoContent.whyChoose.points', { returnObjects: true }) as string[]).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-ink-900 mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-8">
              <p className="text-xl text-ink-700 mb-6">
                {t('seoContent.closing.paragraph1')}
              </p>
              <p className="text-lg font-semibold text-brand-600">
                {t('seoContent.closing.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySEO;
