import { Phone, Calendar, BarChart3, MessageSquare, Users, Clock, Zap, Shield, LayoutDashboard, Headphones, Mic, Settings, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeaturesProps {
  onNavigate?: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function Features({ onNavigate }: FeaturesProps) {
  const { t } = useTranslation();

  const features = [
    { icon: Phone, key: 'callHandling' },
    { icon: Calendar, key: 'calendarIntegration' },
    { icon: MessageSquare, key: 'naturalConversation' },
    { icon: BarChart3, key: 'analytics' },
    { icon: Users, key: 'customerHistory' },
    { icon: Clock, key: 'reminders' },
    { icon: Zap, key: 'followUp' },
    { icon: Shield, key: 'gdpr' }
  ];

  const dashboardItems = [
    { icon: Users, key: 'unlimitedAgents' },
    { icon: Calendar, key: 'autoBooking' },
    { icon: Headphones, key: 'recording' },
    { icon: Mic, key: 'noiseReduction' },
    { icon: Settings, key: 'training' },
    { icon: FileText, key: 'smartCalendar' }
  ];

  const clinicListKeys = ['complexScenarios', 'integrations', 'tailored'];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-ink-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-5 py-2.5 rounded-full mb-8 border border-brand-100">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">{t('featuresSection.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t('featuresSection.heading_line1')}<br />{t('featuresSection.heading_line2')}
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {t('featuresSection.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl bg-white border border-ink-200/70 hover:border-brand-300/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 shadow-md shadow-brand-500/20">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">
                {t(`featuresSection.items.${feature.key}.title`)}
              </h3>
              <p className="text-ink-600 text-[15px] leading-relaxed">
                {t(`featuresSection.items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-br from-ink-900 via-brand-900 to-ink-900 rounded-3xl p-10 md:p-16 text-white shadow-xl relative overflow-hidden border border-brand-500/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 bg-brand-500/20 backdrop-blur-sm text-brand-200 px-5 py-2.5 rounded-full mb-8 border border-brand-400/30">
                <LayoutDashboard className="w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">{t('featuresSection.dashboard.badge')}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                {t('featuresSection.dashboard.title')}
              </h3>
              <p className="text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
                {t('featuresSection.dashboard.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {dashboardItems.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{t(`featuresSection.dashboard.items.${item.key}.title`)}</h4>
                  <p className="text-brand-200 leading-relaxed">
                    {t(`featuresSection.dashboard.items.${item.key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-500/20 to-brand-600/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-400/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{t('featuresSection.dashboard.cta.title')}</h4>
                  <p className="text-brand-200 text-lg">
                    {t('featuresSection.dashboard.cta.description')}
                  </p>
                </div>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] whitespace-nowrap inline-block"
                >
                  {t('featuresSection.dashboard.cta.button')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/20 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                {t('featuresSection.clinics.title')}
              </h3>
              <p className="text-brand-100 mb-8 leading-relaxed text-lg">
                {t('featuresSection.clinics.description')}
              </p>
              <ul className="space-y-4">
                {clinicListKeys.map((key) => (
                  <li key={key} className="flex items-start space-x-3">
                    <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-brand-50 text-lg">{t(`featuresSection.clinics.list.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-white/20">
                  <span className="text-brand-100 text-lg">{t('featuresSection.clinics.stats.avgSavings.label')}</span>
                  <span className="text-3xl font-bold">{t('featuresSection.clinics.stats.avgSavings.value')}</span>
                </div>
                <div className="flex items-center justify-between pb-5 border-b border-white/20">
                  <span className="text-brand-100 text-lg">{t('featuresSection.clinics.stats.satisfaction.label')}</span>
                  <span className="text-3xl font-bold">{t('featuresSection.clinics.stats.satisfaction.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-100 text-lg">{t('featuresSection.clinics.stats.noShowReduction.label')}</span>
                  <span className="text-3xl font-bold">{t('featuresSection.clinics.stats.noShowReduction.value')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
