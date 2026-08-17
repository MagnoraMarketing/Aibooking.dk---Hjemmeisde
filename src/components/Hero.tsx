import { Phone, Calendar, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function Hero({ onNavigate }: HeroProps) {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:32px_32px]"></div>

      <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-brand-600/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm text-accent-300 px-5 py-2.5 rounded-full mb-10 border border-white/10">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] tracking-tight">
            {t('hero.title_line1')}<br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-accent-300 bg-clip-text text-transparent">{t('hero.title_line2')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-ink-200 mb-14 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 mb-20">
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-accent-400 text-ink-950 px-10 py-4 rounded-xl text-lg font-bold hover:bg-accent-300 transition-all transform hover:scale-[1.02] shadow-lg shadow-accent-500/20 inline-flex items-center justify-center space-x-2"
            >
              <span>{t('hero.cta')}</span>
              <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#video"
              className="group w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all border border-white/15"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{t('hero.secondary')}</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white/[0.04] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-400/40 hover:bg-white/[0.06] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-brand-900/40">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('hero.feature1.title')}</h3>
              <p className="text-ink-300 leading-relaxed text-[15px]">{t('hero.feature1.description')}</p>
            </div>

            <div className="group bg-white/[0.04] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-400/40 hover:bg-white/[0.06] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-brand-900/40">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('hero.feature2.title')}</h3>
              <p className="text-ink-300 leading-relaxed text-[15px]">{t('hero.feature2.description')}</p>
            </div>

            <div className="group bg-white/[0.04] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-400/40 hover:bg-white/[0.06] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-brand-900/40">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('hero.feature3.title')}</h3>
              <p className="text-ink-300 leading-relaxed text-[15px]">{t('hero.feature3.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
