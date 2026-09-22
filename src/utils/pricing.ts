// Single source of truth for the package prices and included talk time. Every
// pricing table, calculator and structured-data block on the site reads from
// here, so a price change is a one-line change rather than a hunt through the
// pages that happen to quote it.

/** Monthly subscription prices in DKK, in the order the plans are listed. */
export const VOICE_PLAN_PRICES_DKK = [0, 999, 2499, 5999] as const;

/**
 * Included talk-time minutes per month, matching VOICE_PLAN_PRICES_DKK.
 * The first entry (price 0) is the free trial, not a real minute pool — see
 * TRIAL_MINUTES/TRIAL_DAYS below, which this mirrors for display.
 */
export const VOICE_PLAN_MINUTES = [10, 150, 600, 2000] as const;

/** The free trial every new signup gets before choosing a paid plan. */
export const TRIAL_DAYS = 7;
export const TRIAL_MINUTES = 10;

/** The website voice widget: one subscription, one pack of talk time. */
export const WIDGET_PLAN_PRICE_DKK = 999;
export const WIDGET_PLAN_MINUTES = 150;

/**
 * Setup/onboarding is an OPTIONAL one-time add-on, priced the same as the
 * chosen plan's monthly subscription (so Starter's setup is 999 kr,
 * Professional's is 2 499 kr, Enterprise's is 5 999 kr) rather than a flat
 * fee — matching VOICE_PLAN_PRICES_DKK index-for-index. It is never
 * included automatically and is never billed again on renewal.
 */
export const SETUP_PRICES_DKK = VOICE_PLAN_PRICES_DKK;
