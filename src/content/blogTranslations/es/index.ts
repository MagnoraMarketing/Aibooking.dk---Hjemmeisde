import type { BlogTranslations } from '../types';
import { receptionistEs } from './receptionist';
import { voiceEs } from './voice';
import { automationEs } from './automation';
import { widgetEs } from './widget';
import { webshopEs } from './webshop';

const translations: BlogTranslations = { ...receptionistEs, ...voiceEs, ...automationEs, ...widgetEs, ...webshopEs };

export default translations;
