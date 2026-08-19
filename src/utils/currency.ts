import type { SupportedLanguage } from '../i18n/config';

// DKK is pegged to EUR under ERM II at a fixed central rate of 7.46038,
// which is stable enough to use as a static display-conversion rate.
const DKK_TO_EUR_RATE = 7.46;

const INTL_LOCALE: Record<SupportedLanguage, string> = {
  da: 'da-DK',
  en: 'en-GB',
  pt: 'pt-PT',
  fr: 'fr-FR',
};

export function dkkToEur(dkkAmount: number): number {
  return Math.round(dkkAmount / DKK_TO_EUR_RATE);
}

// Danish visitors see the real DKK amount; every other supported language
// sees the EUR-converted amount, formatted with that locale's grouping.
export function localizedPrice(dkkAmount: number, lang: SupportedLanguage): string {
  const amount = lang === 'da' ? dkkAmount : dkkToEur(dkkAmount);
  return new Intl.NumberFormat(INTL_LOCALE[lang]).format(amount);
}
