export type IndustryKey = 'healthcare' | 'craftsman' | 'office' | 'ecommerce';

export interface IndustryTheme {
  chip: string;
  iconBg: string;
  text: string;
  softBg: string;
  softBorder: string;
  solidBtn: string;
  selectedBorder: string;
  bubble: string;
  bar: string;
  accent: string;
}

// Class names are spelled out in full rather than composed at runtime so
// Tailwind's static extraction keeps them in the build.
export const INDUSTRY_THEMES: Record<IndustryKey, IndustryTheme> = {
  healthcare: {
    chip: 'bg-green-100 text-green-700',
    iconBg: 'bg-green-600',
    text: 'text-green-600',
    softBg: 'bg-green-50',
    softBorder: 'border-green-200',
    solidBtn: 'bg-green-600 hover:bg-green-700',
    selectedBorder: 'border-green-600 ring-2 ring-green-600/20',
    bubble: 'bg-green-600',
    bar: 'bg-green-600',
    accent: 'accent-green-600',
  },
  craftsman: {
    chip: 'bg-orange-100 text-orange-700',
    iconBg: 'bg-orange-600',
    text: 'text-orange-600',
    softBg: 'bg-orange-50',
    softBorder: 'border-orange-200',
    solidBtn: 'bg-orange-600 hover:bg-orange-700',
    selectedBorder: 'border-orange-600 ring-2 ring-orange-600/20',
    bubble: 'bg-orange-600',
    bar: 'bg-orange-600',
    accent: 'accent-orange-600',
  },
  office: {
    chip: 'bg-brand-100 text-brand-700',
    iconBg: 'bg-brand-600',
    text: 'text-brand-600',
    softBg: 'bg-brand-50',
    softBorder: 'border-brand-200',
    solidBtn: 'bg-brand-600 hover:bg-brand-700',
    selectedBorder: 'border-brand-600 ring-2 ring-brand-600/20',
    bubble: 'bg-brand-600',
    bar: 'bg-brand-600',
    accent: 'accent-brand-600',
  },
  ecommerce: {
    chip: 'bg-brand-100 text-brand-700',
    iconBg: 'bg-brand-600',
    text: 'text-brand-600',
    softBg: 'bg-brand-50',
    softBorder: 'border-brand-200',
    solidBtn: 'bg-brand-600 hover:bg-brand-700',
    selectedBorder: 'border-brand-600 ring-2 ring-brand-600/20',
    bubble: 'bg-brand-600',
    bar: 'bg-brand-600',
    accent: 'accent-brand-600',
  },
};

export const SIGNUP_URL = 'https://aibooking-backendnew.vercel.app/signup';
