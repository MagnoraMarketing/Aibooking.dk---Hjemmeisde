// Shared logic for the price estimate: the front-page quote starter, the
// industry-page calculators and the /prisberegner page all describe a
// visitor's needs the same way and reach the same recommendation. Prices are
// only shown on /prisberegner after the visitor has asked for a quote.
import type { NavigatePage } from '../types/navigation';
import {
  SETUP_PRICES_DKK,
  VOICE_PLAN_MINUTES,
  VOICE_PLAN_PRICES_DKK,
  WIDGET_PLAN_MINUTES,
  WIDGET_PLAN_PRICE_DKK,
} from './pricing';

export const ESTIMATE_INDUSTRIES = ['salon', 'healthcare', 'craftsman', 'office', 'ecommerce', 'restaurant'] as const;
export type EstimateIndustry = (typeof ESTIMATE_INDUSTRIES)[number];

export const ESTIMATE_CAPABILITIES = ['booking', 'webshop', 'delivery'] as const;
export type EstimateCapability = (typeof ESTIMATE_CAPABILITIES)[number];

export const PHONE_MINUTES = { min: 0, max: 2000, step: 25, default: 150 } as const;
export const WIDGET_MINUTES = { min: 0, max: 3000, step: 25 } as const;

// What each industry most often needs, used to preselect the capabilities.
export const DEFAULT_CAPABILITIES: Record<EstimateIndustry, EstimateCapability[]> = {
  salon: ['booking'],
  healthcare: ['booking'],
  craftsman: ['booking'],
  office: ['booking'],
  ecommerce: ['webshop'],
  restaurant: ['booking', 'delivery'],
};

// The industry page each choice belongs to, for "read more" links.
export const INDUSTRY_PAGE: Record<EstimateIndustry, NavigatePage> = {
  salon: 'salon',
  healthcare: 'healthcare',
  craftsman: 'craftsman',
  office: 'office',
  ecommerce: 'ecommerce',
  restaurant: 'restaurant',
};

export interface EstimateChoices {
  industry: EstimateIndustry;
  phoneMinutes: number;
  capabilities: EstimateCapability[];
  /** Widget talk time; null means "use our estimate". */
  widgetMinutes: number | null;
}

export const DEFAULT_CHOICES: EstimateChoices = {
  industry: 'salon',
  phoneMinutes: PHONE_MINUTES.default,
  capabilities: DEFAULT_CAPABILITIES.salon,
  widgetMinutes: null,
};

function clampToStep(value: number, min: number, max: number, step: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value / step) * step));
}

/**
 * Website widget talk time, estimated from the phone volume: visitors who
 * would otherwise call ask the widget instead, and webshop questions and
 * delivery orders add conversations of their own.
 */
export function estimateWidgetMinutes(phoneMinutes: number, capabilities: EstimateCapability[]): number {
  let minutes = Math.max(50, phoneMinutes * 0.6);
  if (capabilities.includes('webshop')) minutes *= 1.5;
  if (capabilities.includes('delivery')) minutes *= 1.25;
  return clampToStep(minutes, 50, WIDGET_MINUTES.max, WIDGET_MINUTES.step);
}

export function widgetMinutesFor(choices: EstimateChoices): number {
  return choices.widgetMinutes ?? estimateWidgetMinutes(choices.phoneMinutes, choices.capabilities);
}

// Index 0 of the plan arrays is the free trial, not a paid package.
const VOICE_PLANS = [1, 2, 3].map((i) => ({
  name: ['', 'Starter', 'Professional', 'Enterprise'][i],
  minutes: VOICE_PLAN_MINUTES[i],
  price: VOICE_PLAN_PRICES_DKK[i],
  setup: SETUP_PRICES_DKK[i],
}));

export interface PriceBreakdown {
  /** Null when the visitor doesn't want phone answering. */
  voicePlan: { name: string; minutes: number; price: number; setup: number } | null;
  /** Above the largest package: priced individually. */
  exceedsLargest: boolean;
  widgetPacks: number;
  widgetMinutesIncluded: number;
  widgetPrice: number;
  monthlyTotal: number;
  /** Optional one-time setup, priced like the matched package. */
  setupPrice: number;
}

export function calculatePrice(choices: EstimateChoices): PriceBreakdown {
  const widgetMinutes = widgetMinutesFor(choices);
  const voicePlan =
    choices.phoneMinutes > 0
      ? VOICE_PLANS.find((p) => choices.phoneMinutes <= p.minutes) ?? VOICE_PLANS[VOICE_PLANS.length - 1]
      : null;
  const exceedsLargest = choices.phoneMinutes > VOICE_PLANS[VOICE_PLANS.length - 1].minutes;
  const widgetPacks = widgetMinutes > 0 ? Math.ceil(widgetMinutes / WIDGET_PLAN_MINUTES) : 0;
  const widgetPrice = widgetPacks * WIDGET_PLAN_PRICE_DKK;
  return {
    voicePlan,
    exceedsLargest,
    widgetPacks,
    widgetMinutesIncluded: widgetPacks * WIDGET_PLAN_MINUTES,
    widgetPrice,
    monthlyTotal: (voicePlan?.price ?? 0) + widgetPrice,
    setupPrice: voicePlan?.setup ?? (widgetPacks > 0 ? WIDGET_PLAN_PRICE_DKK : 0),
  };
}

/** Rough activity figures for the example dashboard. */
export function estimateActivity(choices: EstimateChoices) {
  const widgetMinutes = widgetMinutesFor(choices);
  const calls = Math.round(choices.phoneMinutes / 2.5);
  const widgetConversations = Math.round(widgetMinutes / 1.5);
  const price = calculatePrice(choices);
  const includedMinutes = (price.voicePlan?.minutes ?? 0) + price.widgetMinutesIncluded;
  return {
    calls,
    widgetConversations,
    widgetMinutes,
    conversations: calls + widgetConversations,
    widgets: Math.max(1, choices.capabilities.length),
    minutesUsed: choices.phoneMinutes + widgetMinutes,
    minutesLeft: Math.max(0, includedMinutes - choices.phoneMinutes - widgetMinutes),
    hoursSaved: (choices.phoneMinutes + widgetMinutes) / 60,
  };
}

// The choices travel to /prisberegner in the query string, so a link from the
// front page or an industry page opens the estimate the visitor just made.
export function choicesToQuery(choices: EstimateChoices): string {
  const params = new URLSearchParams();
  params.set('branche', choices.industry);
  params.set('telefon', String(choices.phoneMinutes));
  params.set('funktioner', choices.capabilities.join(','));
  if (choices.widgetMinutes !== null) params.set('widget', String(choices.widgetMinutes));
  return `?${params.toString()}`;
}

export function choicesFromQuery(search: string): EstimateChoices {
  const params = new URLSearchParams(search);
  const rawIndustry = params.get('branche');
  const industry = (ESTIMATE_INDUSTRIES as readonly string[]).includes(rawIndustry ?? '')
    ? (rawIndustry as EstimateIndustry)
    : DEFAULT_CHOICES.industry;
  const rawPhone = params.get('telefon');
  const phoneMinutes =
    rawPhone === null
      ? PHONE_MINUTES.default
      : clampToStep(Number(rawPhone), PHONE_MINUTES.min, PHONE_MINUTES.max, PHONE_MINUTES.step);
  const rawCapabilities = params.get('funktioner');
  const capabilities =
    rawCapabilities === null
      ? DEFAULT_CAPABILITIES[industry]
      : rawCapabilities
          .split(',')
          .filter((c): c is EstimateCapability => (ESTIMATE_CAPABILITIES as readonly string[]).includes(c));
  const rawWidget = params.get('widget');
  const widgetMinutes =
    rawWidget === null ? null : clampToStep(Number(rawWidget), WIDGET_MINUTES.min, WIDGET_MINUTES.max, WIDGET_MINUTES.step);
  return { industry, phoneMinutes, capabilities, widgetMinutes };
}
