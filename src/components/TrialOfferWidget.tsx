import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Minus, PhoneCall, Clock, ArrowRight, Phone, MessageSquare, Mail, MessageCircle } from 'lucide-react';
import { STRIPE_CHECKOUT } from '../utils/checkout';

const STATE_KEY = 'aibooking_trial_offer_state';
const SHOW_AFTER_MS = 15000;

type WidgetState = 'hidden' | 'expanded' | 'minimized';

function TrialOfferWidget() {
  const { t } = useTranslation();
  const [state, setState] = useState<WidgetState>('hidden');

  useEffect(() => {
    const saved = sessionStorage.getItem(STATE_KEY);
    if (saved === 'minimized' || saved === 'expanded') {
      setState(saved);
      return;
    }

    const timer = setTimeout(() => setState('expanded'), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleMinimize = () => {
    setState('minimized');
    sessionStorage.setItem(STATE_KEY, 'minimized');
  };

  const handleExpand = () => {
    setState('expanded');
    sessionStorage.setItem(STATE_KEY, 'expanded');
  };

  if (state === 'hidden') return null;

  if (state === 'minimized') {
    return (
      <button
        onClick={handleExpand}
        aria-label={t('trialOfferWidget.expand_aria')}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-brand-600 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:bg-brand-700 hover:scale-105 transition-all"
      >
        <Clock className="w-4 h-4" />
        <span className="text-sm font-semibold">{t('trialOfferWidget.minimized_label')}</span>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 left-6 z-50 w-[min(360px,calc(100vw-3rem))]"
      role="dialog"
      aria-label={t('trialOfferWidget.dialog_aria')}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl border border-brand-100 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={handleMinimize}
          aria-label={t('trialOfferWidget.close_aria')}
          className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 px-5 pt-5 pb-4 relative">
          <div className="inline-flex items-center gap-1.5 bg-accent-400 text-ink-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" />
            {t('trialOfferWidget.badge')}
          </div>
          <h3 className="text-white text-xl font-bold leading-snug">
            {t('trialOfferWidget.title')}
          </h3>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-ink-700 text-sm leading-relaxed">
            {t('trialOfferWidget.description')}
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-start gap-2 bg-ink-50 rounded-lg px-3 py-2">
              <Phone className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-ink-900">{t('trialOfferWidget.voice_label')}</div>
                <div className="text-[11px] text-ink-500">{t('trialOfferWidget.voice_value')}</div>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-ink-50 rounded-lg px-3 py-2">
              <MessageSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-ink-900">{t('trialOfferWidget.sms_label')}</div>
                <div className="text-[11px] text-ink-500">{t('trialOfferWidget.sms_value')}</div>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-ink-50 rounded-lg px-3 py-2">
              <Mail className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-ink-900">{t('trialOfferWidget.email_label')}</div>
                <div className="text-[11px] text-ink-500">{t('trialOfferWidget.email_value')}</div>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-ink-50 rounded-lg px-3 py-2">
              <MessageCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-ink-900">{t('trialOfferWidget.whatsapp_label')}</div>
                <div className="text-[11px] text-ink-500">{t('trialOfferWidget.whatsapp_value')}</div>
              </div>
            </div>
          </div>

          <a
            href={STRIPE_CHECKOUT.trial}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMinimize}
            className="flex items-center justify-center gap-2 w-full bg-brand-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            <PhoneCall className="w-4 h-4" />
            {t('trialOfferWidget.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrialOfferWidget;
