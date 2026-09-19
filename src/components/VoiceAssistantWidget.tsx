import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mic, PhoneOff, Loader2, X, MessageCircle } from 'lucide-react';
import { useVapiCall } from '../hooks/useVapiCall';
import { VAPI_SITE_ASSISTANT_ID } from '../utils/vapi';

const STATE_KEY = 'aibooking_voice_widget_closed';

// Site-wide floating counterpart to the live demo on /widget: lets a visitor
// on any page ask the AI a question by voice, which is also the simplest way
// for them to experience what the product sounds like on their own site.
function VoiceAssistantWidget() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(() => sessionStorage.getItem(STATE_KEY) === '1');
  const vapiCall = useVapiCall(VAPI_SITE_ASSISTANT_ID);

  const handleClose = () => {
    setIsOpen(false);
    setIsClosed(true);
    vapiCall.stop();
    sessionStorage.setItem(STATE_KEY, '1');
  };

  if (isClosed) return null;

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label={t('voiceAssistantWidget.open_aria')}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-ink-900 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-ink-800 hover:scale-105 transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-400" />
        </span>
        <MessageCircle className="w-4 h-4" />
        <span className="text-sm font-semibold">{t('voiceAssistantWidget.launcher_label')}</span>
      </button>
    );
  }

  const stateLabel =
    vapiCall.state === 'connecting'
      ? t('voiceAssistantWidget.state_connecting')
      : vapiCall.state === 'active'
      ? t('voiceAssistantWidget.state_active')
      : vapiCall.state === 'error'
      ? t('voiceAssistantWidget.state_error')
      : t('voiceAssistantWidget.state_idle');

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[min(340px,calc(100vw-3rem))]"
      role="dialog"
      aria-label={t('voiceAssistantWidget.dialog_aria')}
    >
      <div className="relative bg-ink-950 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/25 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={handleClose}
          aria-label={t('voiceAssistantWidget.close_aria')}
          className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative px-5 pt-5 pb-6 text-center">
          <h3 className="text-white text-lg font-bold mb-1.5">{t('voiceAssistantWidget.title')}</h3>
          <p className="text-ink-300 text-sm leading-relaxed mb-6">{t('voiceAssistantWidget.subtitle')}</p>

          <button
            type="button"
            onClick={vapiCall.state === 'active' ? vapiCall.stop : vapiCall.start}
            disabled={vapiCall.state === 'connecting'}
            aria-label={vapiCall.state === 'active' ? t('voiceAssistantWidget.stop_aria') : t('voiceAssistantWidget.start_aria')}
            className="relative mx-auto w-24 h-24 flex items-center justify-center disabled:cursor-wait"
          >
            <span className={`absolute inset-0 rounded-full border transition-colors ${vapiCall.state === 'active' ? 'border-accent-400/40' : 'border-brand-400/20'}`} />
            <span className={`absolute inset-3 rounded-full border animate-pulse transition-colors ${vapiCall.isAssistantSpeaking ? 'border-accent-400/60' : 'border-brand-400/25'}`} />
            <span
              className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center shadow-lg transition-transform ${
                vapiCall.isAssistantSpeaking ? 'scale-110' : ''
              } ${vapiCall.state === 'active' ? 'from-accent-400 to-accent-600' : 'from-brand-500 to-brand-700'}`}
            >
              {vapiCall.state === 'connecting' ? (
                <Loader2 className="w-7 h-7 text-white animate-spin" />
              ) : vapiCall.state === 'active' ? (
                <PhoneOff className="w-7 h-7 text-white" />
              ) : (
                <Mic className="w-7 h-7 text-white" />
              )}
            </span>
          </button>

          <p className={`mt-4 text-sm font-semibold ${vapiCall.state === 'error' ? 'text-red-300' : 'text-ink-200'}`}>
            {stateLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VoiceAssistantWidget;
