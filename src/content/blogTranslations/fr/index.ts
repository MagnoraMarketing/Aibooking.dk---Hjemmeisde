import type { BlogTranslations } from '../types';
import { receptionistFr } from './receptionist';
import { voiceFr } from './voice';
import { automationFr } from './automation';
import { widgetFr } from './widget';
import { webshopFr } from './webshop';

const translations: BlogTranslations = { ...receptionistFr, ...voiceFr, ...automationFr, ...widgetFr, ...webshopFr };

export default translations;
