import type { SupportedLanguage } from '../i18n/config';

// DKK is pegged to EUR under ERM II at a fixed central rate of 7.46038,
// which is stable enough to use as a static display-conversion rate.
const DKK_TO_EUR_RATE = 7.46;

const INTL_LOCALE: Record<SupportedLanguage, string> = {
  da: 'da-DK',
  en: 'en-GB',
  pt: 'pt-PT',
  fr: 'fr-FR',
  es: 'es-ES',
};

export function dkkToEur(dkkAmount: number): number {
  return Math.round(dkkAmount / DKK_TO_EUR_RATE);
}

// Danish visitors see the real DKK amount; every other supported language sees
// the EUR-converted amount. Exposed on its own so callers that add several
// prices together can sum the rounded display values — summing in DKK first
// and converting afterwards can be a unit off from the figures on screen.
export function displayAmount(dkkAmount: number, lang: SupportedLanguage): number {
  return lang === 'da' ? dkkAmount : dkkToEur(dkkAmount);
}

export function formatAmount(amount: number, lang: SupportedLanguage): string {
  return new Intl.NumberFormat(INTL_LOCALE[lang]).format(amount);
}

// Formatted price for a DKK amount, in the visitor's currency and grouping.
export function localizedPrice(dkkAmount: number, lang: SupportedLanguage): string {
  return formatAmount(displayAmount(dkkAmount, lang), lang);
}
