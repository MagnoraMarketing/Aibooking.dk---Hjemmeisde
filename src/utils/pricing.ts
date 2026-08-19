import { SupportedLanguage } from '../i18n/config';

// Denmark uses the krone, pegged to the euro under ERM II at ~7.46 DKK/EUR.
// All prices are authored in DKK; non-Danish UI languages show an
// approximate EUR conversion rather than a second set of authored prices.
const DKK_PER_EUR = 7.46;

export function dkkToEur(amountDKK: number): number {
  return Math.round(amountDKK / DKK_PER_EUR);
}

/**
 * Format a whole-amount DKK price for display: Danish UI shows native DKK
 * ("999 kr"), every other language shows an approximate EUR conversion
 * ("€134").
 */
export function formatPrice(amountDKK: number, lang: SupportedLanguage): string {
  if (lang === 'da') {
    return `${amountDKK.toLocaleString('da-DK')} kr`;
  }
  return `€${dkkToEur(amountDKK).toLocaleString('en-US')}`;
}

/**
 * Format a per-minute DKK rate (e.g. 4.995) for display, same DKK/EUR split
 * as formatPrice but keeping two decimal places since per-minute rates are
 * sub-integer.
 */
export function formatPricePerMinute(amountDKK: number, lang: SupportedLanguage): string {
  if (lang === 'da') {
    return `${amountDKK.toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  }
  const eur = amountDKK / DKK_PER_EUR;
  return `€${eur.toFixed(2)}`;
}
