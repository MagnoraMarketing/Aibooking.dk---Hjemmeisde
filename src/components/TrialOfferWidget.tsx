import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, PhoneCall, Clock, ArrowRight } from 'lucide-react';

const DISMISSED_KEY = 'aibooking_trial_offer_dismissed';
const SHOW_AFTER_MS = 15000;

function TrialOfferWidget() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY) === '1') return;

    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 w-[min(360px,calc(100vw-3rem))] transition-transform duration-700 ease-out ${
        visible ? 'translate-x-0' : '-translate-x-[150%]'
      }`}
      role="dialog"
      aria-label={t('trialOfferWidget.dialog_aria')}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl border border-brand-100 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={handleDismiss}
          aria-label={t('trialOfferWidget.close_aria')}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-ink-400 hover:text-ink-700 hover:bg-ink-100 transition-colors"
        >
          <X className="w-4 h-4" />
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

          <a
            href="https://aibooking-backendnew.vercel.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sessionStorage.setItem(DISMISSED_KEY, '1')}
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
