import { Phone, Calendar, BarChart3, MessageSquare, Users, Clock, Zap, Shield, LayoutDashboard, Headphones, Mic, Settings, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TitleDescription {
  title: string;
  description: string;
}

function Features() {
  const { t } = useTranslation();

  const featureIcons = [Phone, Calendar, MessageSquare, BarChart3, Users, Clock, Zap, Shield];
  const featureItems = t('features.items', { returnObjects: true }) as TitleDescription[];
  const features = featureItems.map((item, i) => ({ ...item, icon: featureIcons[i] }));

  const dashboardIcons = [Users, Calendar, Headphones, Mic, Settings, FileText];
  const dashboardItemsText = t('features.dashboard.items', { returnObjects: true }) as TitleDescription[];
  const dashboardItems = dashboardItemsText.map((item, i) => ({ ...item, icon: dashboardIcons[i] }));

  const industryBullets = t('features.industry.bullets', { returnObjects: true }) as string[];
  const industryStats = t('features.industry.stats', { returnObjects: true }) as { label: string; value: string }[];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-ink-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-5 py-2.5 rounded-full mb-8 border border-brand-100">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">{t('features.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t('features.title_line1')}<br />{t('features.title_line2')}
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
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
                {feature.title}
              </h3>
              <p className="text-ink-600 text-[15px] leading-relaxed">
                {feature.description}
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
                <span className="text-sm font-bold tracking-wide">{t('features.dashboard.badge')}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                {t('features.dashboard.title')}
              </h3>
              <p className="text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
                {t('features.dashboard.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {dashboardItems.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-brand-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-500/20 to-brand-600/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-400/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{t('features.dashboard.cta.title')}</h4>
                  <p className="text-brand-200 text-lg">
                    {t('features.dashboard.cta.description')}
                  </p>
                </div>
                <a
                  href="https://cal.com/magnora-marketing-30zqdm/intro-møde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] whitespace-nowrap inline-block"
                >
                  {t('features.dashboard.cta.button')}
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
                {t('features.industry.title')}
              </h3>
              <p className="text-brand-100 mb-8 leading-relaxed text-lg">
                {t('features.industry.description')}
              </p>
              <ul className="space-y-4">
                {industryBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-brand-50 text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="space-y-6">
                {industryStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between ${index < industryStats.length - 1 ? 'pb-5 border-b border-white/20' : ''}`}
                  >
                    <span className="text-brand-100 text-lg">{stat.label}</span>
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
