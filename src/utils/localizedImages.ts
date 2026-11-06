import type { SupportedLanguage } from '../i18n/config';

// Product images whose pictures contain text. The original raster images have
// their text baked in (Danish in ai-voice-widget.webp, English in
// ai-widget-website.webp), so they are only shown in that language; every
// other language gets the matching localized SVG from
// scripts/generate-illustrations.js, so the text in the image always follows
// the visitor's chosen language.

export interface LocalizedImage { src: string; alt: string; width: number; height: number }

const VOICE_ALT: Record<SupportedLanguage, string> = {
  da: 'AI Voice Widget til hjemmeside, hvor kunden beder om at booke en tid',
  en: 'AI Voice Widget for websites: the customer asks to book an appointment',
  es: 'AI Voice Widget para webs: el cliente pide reservar una cita',
  de: 'AI Voice Widget für Websites: Der Kunde möchte einen Termin buchen',
  fr: 'AI Voice Widget pour sites web : le client demande un rendez-vous',
};

const WEBSITE_ALT: Record<SupportedLanguage, string> = {
  da: 'AI-widget integreret på en hjemmeside, der booker en tid i samtalen',
  en: 'AI widget built into a website, booking an appointment in the conversation',
  es: 'Widget de IA integrado en una web que reserva una cita durante la conversación',
  de: 'KI-Widget auf einer Website, das im Gespräch einen Termin bucht',
  fr: 'Widget IA intégré à un site web qui réserve un rendez-vous pendant l’échange',
};

/** The voice widget picture (phone with mic and chat bubbles). */
export function voiceWidgetImage(lang: SupportedLanguage): LocalizedImage {
  return lang === 'da'
    ? { src: '/ai-voice-widget.webp', alt: VOICE_ALT.da, width: 1408, height: 768 }
    : { src: `/images/illustrations/voice-widget-${lang}.svg`, alt: VOICE_ALT[lang], width: 1200, height: 720 };
}

/** The widget-on-a-website picture (laptop/browser with the widget panel). */
export function websiteWidgetImage(lang: SupportedLanguage): LocalizedImage {
  return lang === 'en'
    ? { src: '/ai-widget-website.webp', alt: WEBSITE_ALT.en, width: 1408, height: 768 }
    : { src: `/images/illustrations/widget-chat-${lang}.svg`, alt: WEBSITE_ALT[lang], width: 1200, height: 720 };
}
