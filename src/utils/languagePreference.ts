// The visitor's preferred site language (from the browser) and whether they
// turned down <LanguageSuggestion>. Browser-only: call from effects and handlers.
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../i18n/config';

export const DISMISSED_KEY = 'languageSuggestionDismissed';

/** The site language the browser prefers; English for languages the site doesn't have. */
export function preferredLanguage(): SupportedLanguage {
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const code of browserLanguages) {
    const base = code?.toLowerCase().split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(base as SupportedLanguage)) return base as SupportedLanguage;
  }
  return 'en';
}

/** Call when the visitor picks a language themselves: their choice wins, so stop suggesting. */
export function rememberLanguageChoice() {
  try {
    localStorage.setItem(DISMISSED_KEY, preferredLanguage());
  } catch {
    // Private mode: nothing to remember.
  }
}

export function readDismissed(): string | null {
  try {
    return localStorage.getItem(DISMISSED_KEY);
  } catch {
    return null;
  }
}
