// Single source of truth for the package prices and included talk time. Every
// pricing table, calculator and structured-data block on the site reads from
// here, so a price change is a one-line change rather than a hunt through the
// pages that happen to quote it.

/** Monthly subscription prices in DKK, in the order the plans are listed. */
export const VOICE_PLAN_PRICES_DKK = [0, 999, 2499, 5999] as const;

/** Included talk-time minutes per month, matching VOICE_PLAN_PRICES_DKK. */
export const VOICE_PLAN_MINUTES = [75, 150, 600, 2000] as const;

/** The website voice widget: one subscription, one pack of talk time. */
export const WIDGET_PLAN_PRICE_DKK = 999;
export const WIDGET_PLAN_MINUTES = 150;

/**
 * Optional setup/onboarding is a flat one-off fee — the same amount for every
 * voice package and for the widget, regardless of talk time — and includes 1
 * hour of follow-up support afterwards.
 */
export const SETUP_PRICE_DKK = 999;
