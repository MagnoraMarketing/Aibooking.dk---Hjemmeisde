// Blog posts in the site languages beyond Danish and English, one file per
// language and topic cluster (mirroring src/content/blogPosts). Every published
// post needs an entry in each language; scripts/generate-sitemap.js fails the
// build if one is missing.
import type { BlogTranslations } from './types';
import { receptionistEs } from './es/receptionist';
import { voiceEs } from './es/voice';
import { automationEs } from './es/automation';
import { widgetEs } from './es/widget';
import { webshopEs } from './es/webshop';
import { receptionistDe } from './de/receptionist';
import { voiceDe } from './de/voice';
import { automationDe } from './de/automation';
import { widgetDe } from './de/widget';
import { webshopDe } from './de/webshop';
import { receptionistFr } from './fr/receptionist';
import { voiceFr } from './fr/voice';
import { automationFr } from './fr/automation';
import { widgetFr } from './fr/widget';
import { webshopFr } from './fr/webshop';

export type TranslatedBlogLanguage = 'es' | 'de' | 'fr';

export const blogTranslations: Record<TranslatedBlogLanguage, BlogTranslations> = {
  es: { ...receptionistEs, ...voiceEs, ...automationEs, ...widgetEs, ...webshopEs },
  de: { ...receptionistDe, ...voiceDe, ...automationDe, ...widgetDe, ...webshopDe },
  fr: { ...receptionistFr, ...voiceFr, ...automationFr, ...widgetFr, ...webshopFr },
};
