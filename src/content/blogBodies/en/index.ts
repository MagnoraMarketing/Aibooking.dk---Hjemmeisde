// All English article texts, one chunk (see ../index.ts).
import automation from './automation';
import receptionist from './receptionist';
import voice from './voice';
import webshop from './webshop';
import widget from './widget';

export default { ...automation, ...receptionist, ...voice, ...webshop, ...widget };
