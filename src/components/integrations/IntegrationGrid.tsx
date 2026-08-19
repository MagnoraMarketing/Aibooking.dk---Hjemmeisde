import { useTranslation } from 'react-i18next';
import { Calendar, Mail, MessageSquare, ShoppingBag, FileText, Zap, Video, Share2 } from 'lucide-react';

interface IntegrationItem { name: string; description: string; category: string }
interface ClinicPoint { strong: string; text: string }

function IntegrationGrid() {
  const { t } = useTranslation('integrationsPage');

  const integrationsText = t('gridSection.integrations', { returnObjects: true }) as IntegrationItem[];
  const integrationIcons = [Calendar, Mail, MessageSquare, MessageSquare, ShoppingBag, FileText, FileText, Zap, Video, Video, MessageSquare, MessageSquare, Share2, Share2, Share2];
  const integrationPopular = [true, true, true, false, true, false, true, true, true, false, false, false, false, true, true];
  const integrations = integrationsText.map((item, i) => ({ ...item, icon: integrationIcons[i], popular: integrationPopular[i] }));

  const clinicPoints = t('gridSection.clinicHighlight.points', { returnObjects: true }) as ClinicPoint[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('gridSection.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t('gridSection.subtitle')}
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('gridSection.clinicHighlight.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('gridSection.clinicHighlight.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {clinicPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm"><strong>{point.strong}</strong> {point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 relative group"
              >
                {integration.popular && (
                  <div className="absolute -top-3 -right-3 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t('gridSection.popularBadge')}
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-50 transition-colors">
                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-brand-600 transition-colors" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {integration.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('gridSection.missing.title')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('gridSection.missing.description')}
          </p>
          <a
            href="https://cal.com/magnora-marketing-30zqdm/intro-møde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors font-medium"
          >
            {t('gridSection.missing.button')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntegrationGrid;
