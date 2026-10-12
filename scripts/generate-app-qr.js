import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import QRCode from 'qrcode';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BACKEND_PATH = path.join(__dirname, '../src/utils/backend.ts');
const OUTPUT_PATH = path.join(__dirname, '../public/app-qr.svg');

// QR code for the app section (AppQrSection): scanning it opens the AIbooking
// app's login on the phone with the install steps showing (?app=1). The URL is
// read from src/utils/backend.ts so the two never drift apart.
const backend = fs.readFileSync(BACKEND_PATH, 'utf8');
const backendUrl = backend.match(/BACKEND_URL = '([^']+)'/)?.[1];
if (!backendUrl) throw new Error('BACKEND_URL not found in src/utils/backend.ts');

const svg = await QRCode.toString(`${backendUrl}/login?app=1`, {
  type: 'svg', errorCorrectionLevel: 'M', margin: 1, color: { dark: '#0f172a', light: '#ffffff' },
});
fs.writeFileSync(OUTPUT_PATH, svg);
console.log(`✓ app-qr.svg → ${backendUrl}/login?app=1`);
