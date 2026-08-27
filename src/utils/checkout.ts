// Stripe payment links for the voice packages. Collected here so the same link
// is used every place a package is offered (homepage pricing, widget page), and
// so swapping a link out is a one-line change.
export const STRIPE_CHECKOUT = {
  /** 7-day trial of the voice assistant. */
  trial: 'https://buy.stripe.com/6oU14m6Xh2Bt7sM1wL4AU05',
  starter: 'https://buy.stripe.com/14A00iepJ1xp9AU2AP4AU06',
  professional: 'https://buy.stripe.com/eVq28qdlF5NFcN62AP4AU08',
  enterprise: 'https://buy.stripe.com/eVq28q81lfoffZidft4AU07',
  /** The website voice widget, sold separately from the phone packages. */
  widget: 'https://buy.stripe.com/cNi6oGa9t6RJ8wQgrF4AU0a',
} as const;
