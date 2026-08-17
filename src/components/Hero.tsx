import { Phone, Calendar, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function Hero({ onNavigate }: HeroProps) {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-blue-700 px-5 py-2.5 rounded-full mb-10 border border-blue-200/50 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.15] tracking-tight">
            {t('hero.title_line1')}<br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">{t('hero.title_line2')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 mb-20">
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>{t('hero.cta')}</span>
              <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#video"
              className="group w-full sm:w-auto bg-white/90 backdrop-blur-sm text-slate-700 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white transition-all border border-slate-200 hover:border-blue-300 shadow-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{t('hero.secondary')}</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:border-blue-300/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-md shadow-blue-500/20">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('hero.feature1.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">{t('hero.feature1.description')}</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:border-blue-300/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-md shadow-blue-500/20">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('hero.feature2.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">{t('hero.feature2.description')}</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:border-blue-300/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-md shadow-blue-500/20">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('hero.feature3.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">{t('hero.feature3.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
