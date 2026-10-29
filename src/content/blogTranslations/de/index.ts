import type { BlogTranslations } from '../types';
import { receptionistDe } from './receptionist';
import { voiceDe } from './voice';
import { automationDe } from './automation';
import { widgetDe } from './widget';
import { webshopDe } from './webshop';

const translations: BlogTranslations = { ...receptionistDe, ...voiceDe, ...automationDe, ...widgetDe, ...webshopDe };

export default translations;
