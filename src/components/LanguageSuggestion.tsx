import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, X } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { splitLocalizedPath, buildLocalizedPath } from '../utils/localePaths';
import { currentPathname } from '../utils/currentPath';
import { preferredLanguage, readDismissed, DISMISSED_KEY } from '../utils/languagePreference';

// Shown in the language being suggested, since that is the one the visitor reads.
const COPY: Record<SupportedLanguage, { text: string; action: string; dismiss: string }> = {
  da: { text: 'Denne side findes også på dansk.', action: 'Skift til dansk', dismiss: 'Luk' },
  en: { text: 'This page is also available in English.', action: 'Switch to English', dismiss: 'Close' },
  es: { text: 'Esta página también está disponible en español.', action: 'Ver en español', dismiss: 'Cerrar' },
  de: { text: 'Diese Seite gibt es auch auf Deutsch.', action: 'Auf Deutsch lesen', dismiss: 'Schließen' },
  fr: { text: 'Cette page existe aussi en français.', action: 'Lire en français', dismiss: 'Fermer' },
};

/**
 * Offers the visitor's browser language when the page is shown in another
 * one. The URL always decides the language: Google advises against redirecting
 * by browser language, and a link someone shares must open the page it names.
 */
export default function LanguageSuggestion() {
  const { i18n } = useTranslation();
  const [suggested, setSuggested] = useState<SupportedLanguage | null>(null);

  useEffect(() => {
    const update = () => {
      const { lang } = splitLocalizedPath(window.location.pathname);
      const preferred = preferredLanguage();
      if (preferred === lang || readDismissed() === preferred) {
        setSuggested(null);
        return;
      }
      setSuggested(preferred);
    };
    update();
    // In-app navigation and the language menu change the URL without a reload.
    i18n.on('languageChanged', update);
    window.addEventListener('popstate', update);
    return () => {
      i18n.off('languageChanged', update);
      window.removeEventListener('popstate', update);
    };
  }, [i18n]);

  if (!suggested) return null;
  const copy = COPY[suggested];
  // Re-rendered with App on every in-app navigation, so this follows the URL.
  const href = buildLocalizedPath(suggested, splitLocalizedPath(currentPathname()).path);

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISSED_KEY, suggested);
    } catch {
      // Private mode: it just shows again on the next page.
    }
    setSuggested(null);
  };

  return (
    <div
      role="region"
      aria-label={copy.text}
      lang={suggested}
      className="fixed top-20 left-4 right-4 sm:left-auto sm:right-6 sm:w-[360px] z-[60] flex items-start gap-3 bg-white rounded-2xl shadow-2xl border border-ink-200/70 p-4"
    >
      <Globe className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-ink-800">{copy.text}</p>
        <a
          href={href}
          hrefLang={suggested}
          className="mt-2 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          {copy.action} →
        </a>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label={copy.dismiss}
        className="p-1 -m-1 rounded-lg text-ink-400 hover:text-ink-700 hover:bg-ink-100"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
