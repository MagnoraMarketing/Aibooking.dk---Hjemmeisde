import { Phone, Calendar, Bell, CheckCircle, MessageSquare, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';

interface ReceptionistShowcaseProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function ReceptionistShowcase({ onNavigate }: ReceptionistShowcaseProps) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const contactHref = buildLocalizedPath(lang, '/kontakt');
  return (
    <section id="video" className="relative py-32 bg-gradient-to-br from-ink-900 via-brand-900 to-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-brand-400/30">
              <Zap className="w-4 h-4" />
              <span>{t('receptionistShowcase.badge')}</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              {t('receptionistShowcase.title_line1')}
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              {t('receptionistShowcase.title_line2')}
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              {t('receptionistShowcase.title_line3')}
            </h2>

            <p className="text-xl text-brand-100 mb-10 leading-relaxed max-w-xl">
              {t('receptionistShowcase.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={contactHref}
                className="group bg-white text-ink-900 px-8 py-4 rounded-xl hover:bg-brand-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>{t('receptionistShowcase.cta_primary')}</span>
              </a>
              <button
                onClick={() => onNavigate('demo')}
                className="group bg-brand-500/20 text-white px-8 py-4 rounded-xl hover:bg-brand-500/30 transition-all duration-300 font-semibold border border-brand-400/40 hover:border-brand-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{t('receptionistShowcase.cta_secondary')}</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>{t('receptionistShowcase.demo_badge')}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-ink-800/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-brand-300 mb-1">{t('receptionistShowcase.chat_label')}</p>
                      <p className="text-white text-sm leading-relaxed">
                        {t('receptionistShowcase.chat_message')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-xs text-green-300">{t('receptionistShowcase.card_call_answered_label')}</span>
                    </div>
                    <p className="text-white text-sm font-medium">{t('receptionistShowcase.card_call_answered_value')}</p>
                  </div>

                  <div className="bg-brand-500/20 backdrop-blur-sm rounded-xl p-4 border border-brand-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-brand-400" />
                      <span className="text-xs text-brand-300">{t('receptionistShowcase.card_rebooked_label')}</span>
                    </div>
                    <p className="text-white text-sm font-medium">{t('receptionistShowcase.card_rebooked_value')}</p>
                  </div>

                  <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bell className="w-5 h-5 text-orange-400" />
                      <span className="text-xs text-orange-300">{t('receptionistShowcase.card_notification_label')}</span>
                    </div>
                    <p className="text-white text-sm font-medium">{t('receptionistShowcase.card_notification_value')}</p>
                  </div>

                  <div className="bg-ink-500/20 backdrop-blur-sm rounded-xl p-4 border border-ink-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Phone className="w-5 h-5 text-ink-300" />
                      <span className="text-xs text-ink-300">{t('receptionistShowcase.card_conversation_label')}</span>
                    </div>
                    <p className="text-white text-sm font-medium">{t('receptionistShowcase.card_conversation_value')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-ink-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-ink-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-ink-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-ink-400 mb-1">{t('receptionistShowcase.summary_label')}</p>
                    <p className="text-white text-sm">
                      {t('receptionistShowcase.summary_text')}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="flex-1 bg-ink-700 rounded-full h-1 overflow-hidden">
                    <div className="bg-brand-500 h-full w-3/4"></div>
                  </div>
                  <span className="text-xs text-ink-400">2:34</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReceptionistShowcase;
