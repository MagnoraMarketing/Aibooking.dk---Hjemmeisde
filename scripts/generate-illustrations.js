// Generates the localized product illustrations in public/images/illustrations/.
// Each illustration exists once per site language ("<name>-<lang>.svg"), so the
// text inside the image always matches the language the visitor has chosen.
// They are drawn as SVG (no photos, no real customer data — all names are
// fictional) and used on /ai-receptionist and in blog posts.
//
// Run with: node scripts/generate-illustrations.js
// Re-run after changing the texts below; output is deterministic.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/images/illustrations');
const LANGS = ['da', 'en', 'es', 'de', 'fr'];

const FONT = "Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const C = {
  ink: '#0f172a', ink2: '#334155', ink3: '#64748b', line: '#e2e8f0', bg: '#f1f5f9',
  brand: '#2563eb', brandDark: '#1e3a8a', brandSoft: '#dbeafe', orange: '#ea580c',
  green: '#15803d', greenSoft: '#dcfce7', red: '#b91c1c', redSoft: '#fee2e2',
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Greedy word wrap by an estimated character width.
function wrap(text, width, size) {
  const max = Math.max(8, Math.floor(width / (size * 0.53)));
  // Keep French spaced punctuation (« ? », « : ») on the line of the word before it.
  const words = String(text).replace(/ ([?!:;»])/g, '\u00a0$1').split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > max && line) { lines.push(line); line = w; } else { line = (line + ' ' + w).trim(); }
  }
  if (line) lines.push(line);
  return lines;
}

function text(x, y, s, { size = 18, weight = 400, fill = C.ink, anchor = 'start' } = {}) {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(s)}</text>`;
}

function para(x, y, s, width, opts = {}) {
  const size = opts.size || 18;
  const lh = opts.lineHeight || size * 1.4;
  const lines = wrap(s, width, size);
  return { svg: lines.map((l, i) => text(x, y + i * lh, l, opts)).join(''), height: lines.length * lh };
}

// Chat bubble; returns svg and its height.
function bubble(x, y, maxW, s, { mine = false, size = 17, label } = {}) {
  const lines = wrap(s, maxW - 36, size);
  const lh = size * 1.38;
  const w = Math.min(maxW, Math.max(...lines.map((l) => l.length)) * size * 0.53 + 36);
  const h = lines.length * lh + 24 + (label ? 20 : 0);
  const bx = mine ? x + maxW - w : x;
  const fill = mine ? C.brand : '#ffffff';
  const color = mine ? '#ffffff' : C.ink;
  let out = `<rect x="${bx}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" ${mine ? '' : `stroke="${C.line}"`}/>`;
  let ty = y + 18 + size * 0.8;
  if (label) { out += text(bx + 18, y + 24, label, { size: 12, weight: 600, fill: mine ? '#bfdbfe' : C.ink3 }); ty += 20; }
  out += lines.map((l, i) => text(bx + 18, ty + i * lh, l, { size, fill: color })).join('');
  return { svg: out, height: h };
}

function chip(x, y, label, { fill = C.greenSoft, color = C.green, size = 15 } = {}) {
  const w = label.length * size * 0.56 + 28;
  return `<rect x="${x}" y="${y}" width="${w}" height="${size + 16}" rx="${(size + 16) / 2}" fill="${fill}"/>` + text(x + 14, y + size + 3, label, { size, weight: 600, fill: color });
}

function frame(w, h, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(title)}">
<title>${esc(title)}</title>
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f8fafc"/><stop offset="1" stop-color="#e2e8f0"/></linearGradient>
<filter id="sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.14"/></filter>
</defs>
<rect width="${w}" height="${h}" fill="url(#bg)"/>
${body}
</svg>
`;
}

// ---------------------------------------------------------------------------
// 1. Website with the AI Voice Widget
// ---------------------------------------------------------------------------
const WIDGET = {
  da: { title: 'AI Voice Widget på en hjemmeside, der booker en tid', url: 'salon-nordlys.dk', site: 'Salon Nordlys', tagline: 'Klip, farve og styling i hjertet af byen', nav: ['Behandlinger', 'Priser', 'Kontakt'], widget: 'AI-receptionist', online: 'Online', customer: 'Har I en tid til dameklip på lørdag?', ai: 'Ja, lørdag kl. 11.30 er ledig. Dameklip koster 495 kr. Skal jeg booke den?', customer2: 'Ja tak!', booked: '✓ Booket: lør. kl. 11.30', modes: ['Chat', 'Diktér', 'Tal'] },
  en: { title: 'AI Voice Widget on a website booking an appointment', url: 'northlight-salon.com', site: 'Northlight Salon', tagline: 'Cuts, colour and styling in the heart of town', nav: ['Treatments', 'Prices', 'Contact'], widget: 'AI receptionist', online: 'Online', customer: 'Do you have a slot for a women’s cut on Saturday?', ai: 'Yes, Saturday at 11:30 is free. A women’s cut is £45. Shall I book it?', customer2: 'Yes please!', booked: '✓ Booked: Sat 11:30', modes: ['Chat', 'Dictate', 'Talk'] },
  es: { title: 'AI Voice Widget en una web reservando una cita', url: 'peluqueria-aurora.es', site: 'Peluquería Aurora', tagline: 'Corte, color y peinado en pleno centro', nav: ['Servicios', 'Precios', 'Contacto'], widget: 'Recepcionista IA', online: 'En línea', customer: '¿Tenéis hueco para un corte de mujer el sábado?', ai: 'Sí, el sábado a las 11:30 está libre. El corte de mujer cuesta 35 €. ¿Te lo reservo?', customer2: '¡Sí, gracias!', booked: '✓ Reservado: sáb. 11:30', modes: ['Chat', 'Dictar', 'Hablar'] },
  de: { title: 'AI Voice Widget auf einer Website bucht einen Termin', url: 'salon-nordlicht.de', site: 'Salon Nordlicht', tagline: 'Schnitt, Farbe und Styling mitten in der Stadt', nav: ['Leistungen', 'Preise', 'Kontakt'], widget: 'KI-Rezeption', online: 'Online', customer: 'Haben Sie am Samstag einen Termin für einen Damenhaarschnitt?', ai: 'Ja, Samstag um 11:30 Uhr ist frei. Ein Damenhaarschnitt kostet 49 €. Soll ich ihn buchen?', customer2: 'Ja, gern!', booked: '✓ Gebucht: Sa. 11:30 Uhr', modes: ['Chat', 'Diktat', 'Sprechen'] },
  fr: { title: 'AI Voice Widget sur un site web qui réserve un rendez-vous', url: 'salon-aurore.fr', site: 'Salon Aurore', tagline: 'Coupe, couleur et coiffage en centre-ville', nav: ['Prestations', 'Tarifs', 'Contact'], widget: 'Réceptionniste IA', online: 'En ligne', customer: 'Avez-vous un créneau pour une coupe femme samedi ?', ai: 'Oui, samedi à 11 h 30 est libre. La coupe femme est à 42 €. Je la réserve ?', customer2: 'Oui, merci !', booked: '✓ Réservé : sam. 11 h 30', modes: ['Chat', 'Dicter', 'Parler'] },
};

function widgetChat(t) {
  const W = 1200, H = 720;
  let b = '';
  // Browser window
  b += `<g filter="url(#sh)"><rect x="50" y="60" width="760" height="600" rx="22" fill="#ffffff"/></g>`;
  b += `<rect x="50" y="60" width="760" height="54" rx="22" fill="#f8fafc"/><rect x="50" y="92" width="760" height="22" fill="#f8fafc"/>`;
  b += ['#f87171', '#fbbf24', '#34d399'].map((c, i) => `<circle cx="${82 + i * 22}" cy="87" r="7" fill="${c}"/>`).join('');
  b += `<rect x="170" y="73" width="420" height="28" rx="14" fill="#ffffff" stroke="${C.line}"/>` + text(190, 93, t.url, { size: 15, fill: C.ink3 });
  // Site header and hero
  b += text(84, 154, t.site, { size: 22, weight: 700 });
  b += t.nav.map((n, i) => text(430 + i * 120, 154, n, { size: 15, fill: C.ink2 })).join('');
  b += `<rect x="84" y="180" width="692" height="230" rx="16" fill="${C.brandDark}"/>`;
  b += para(116, 250, t.site, 600, { size: 40, weight: 700, fill: '#ffffff' }).svg;
  b += para(116, 296, t.tagline, 420, { size: 19, fill: '#bfdbfe' }).svg;
  b += `<rect x="116" y="340" width="150" height="42" rx="10" fill="${C.brand}"/>`;
  b += [0, 1, 2].map((i) => `<rect x="${84 + i * 236}" y="436" width="220" height="190" rx="14" fill="#f1f5f9"/><rect x="${104 + i * 236}" y="560" width="150" height="12" rx="6" fill="#cbd5e1"/><rect x="${104 + i * 236}" y="584" width="110" height="12" rx="6" fill="#e2e8f0"/>`).join('');
  // Widget panel
  const px = 640, py = 110, pw = 500, ph = 560;
  b += `<g filter="url(#sh)"><rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="26" fill="#ffffff"/></g>`;
  b += `<path d="M${px} ${py + 26} a26 26 0 0 1 26 -26 h${pw - 52} a26 26 0 0 1 26 26 v52 h-${pw} z" fill="${C.brand}"/>`;
  b += text(px + 28, py + 50, t.widget, { size: 21, weight: 700, fill: '#ffffff' });
  b += `<circle cx="${px + pw - 110}" cy="${py + 43}" r="6" fill="#4ade80"/>` + text(px + pw - 96, py + 49, t.online, { size: 15, fill: '#dbeafe' });
  // Mode tabs
  b += t.modes.map((m, i) => { const x = px + 28 + i * 150; const active = i === 2; return `<rect x="${x}" y="${py + 96}" width="136" height="36" rx="18" fill="${active ? C.brandSoft : '#f1f5f9'}"/>` + text(x + 68, py + 120, m, { size: 15, weight: 600, fill: active ? C.brand : C.ink3, anchor: 'middle' }); }).join('');
  let y = py + 156;
  const c1 = bubble(px + 28, y, pw - 56, t.customer, { mine: true }); b += c1.svg; y += c1.height + 12;
  const a1 = bubble(px + 28, y, pw - 76, t.ai); b += a1.svg; y += a1.height + 12;
  const c2 = bubble(px + 28, y, pw - 56, t.customer2, { mine: true }); b += c2.svg; y += c2.height + 16;
  b += chip(px + 28, y, t.booked);
  // Mic + waveform
  const my = py + ph - 62;
  b += `<circle cx="${px + pw / 2}" cy="${my}" r="34" fill="${C.brand}"/><rect x="${px + pw / 2 - 8}" y="${my - 18}" width="16" height="26" rx="8" fill="#ffffff"/><path d="M${px + pw / 2 - 14} ${my} a14 14 0 0 0 28 0 M${px + pw / 2} ${my + 14} v8" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  const bars = [10, 22, 34, 18, 28, 12, 24, 16];
  b += bars.map((hh, i) => `<rect x="${px + 60 + i * 14}" y="${my - hh / 2}" width="6" height="${hh}" rx="3" fill="#93c5fd"/>`).join('');
  b += bars.map((hh, i) => `<rect x="${px + pw - 66 - i * 14}" y="${my - hh / 2}" width="6" height="${hh}" rx="3" fill="#93c5fd"/>`).join('');
  return frame(W, H, b, t.title);
}

// ---------------------------------------------------------------------------
// 2. Call summary in the dashboard (variants per industry)
// ---------------------------------------------------------------------------
const CALL = {
  salon: {
    da: { title: 'Indgående opkald kl. 20.08 i dashboardet med optagelse, resumé, booking og transskription', heading: 'Indgående opkald', meta: 'Tirsdag kl. 20.08 · 2:09 · +45 10 20 35 16', status: '✓ Booket', recording: 'Optagelse', summaryLabel: 'Resumé', summary: 'Kasper ringede efter lukketid for at booke en klipning. AI’en fandt en ledig tid og bookede den. Bekræftelse sendt på e-mail.', bookingLabel: 'Booking i samtalen', booking: 'Torsdag kl. 14.00 · Herreklip · Kasper Møller', transcript: 'Transskription', agent: 'Agent', customer: 'Kunde', lines: ['Hej, du har ringet til Salon Nordlys. Jeg er salonens digitale assistent. Hvad kan jeg hjælpe med?', 'Hej, det er Kasper. Jeg vil gerne booke en klipning.', 'Torsdag har vi ledigt kl. 14.00 og 15.30. Hvad passer bedst?', 'Kl. 14.00, tak.'] },
    en: { title: 'Inbound call at 8:08 PM in the dashboard with recording, summary, booking and transcript', heading: 'Inbound call', meta: 'Tuesday 8:08 PM · 2:09 · +44 7700 900123', status: '✓ Booked', recording: 'Recording', summaryLabel: 'Summary', summary: 'James called after closing time to book a haircut. The AI found a free slot and booked it. Confirmation sent by email.', bookingLabel: 'Booking in the call', booking: 'Thursday 2:00 PM · Men’s cut · James Carter', transcript: 'Transcript', agent: 'Agent', customer: 'Caller', lines: ['Hi, you’ve reached Northlight Salon. I’m the salon’s digital assistant. How can I help?', 'Hi, it’s James. I’d like to book a haircut.', 'On Thursday we have 2:00 and 3:30 PM free. Which suits you best?', '2:00 PM, please.'] },
    es: { title: 'Llamada entrante a las 20:08 en el panel con grabación, resumen, reserva y transcripción', heading: 'Llamada entrante', meta: 'Martes 20:08 · 2:09 · +34 612 345 678', status: '✓ Reservado', recording: 'Grabación', summaryLabel: 'Resumen', summary: 'Javier llamó después del cierre para reservar un corte. La IA encontró un hueco libre y lo reservó. Confirmación enviada por correo.', bookingLabel: 'Reserva en la llamada', booking: 'Jueves 14:00 · Corte de caballero · Javier Ruiz', transcript: 'Transcripción', agent: 'Agente', customer: 'Cliente', lines: ['Hola, has llamado a Peluquería Aurora. Soy la asistente digital de la peluquería. ¿En qué te puedo ayudar?', 'Hola, soy Javier. Quería reservar un corte.', 'El jueves tenemos libre a las 14:00 y a las 15:30. ¿Qué te viene mejor?', 'A las 14:00, por favor.'] },
    de: { title: 'Eingehender Anruf um 20:08 Uhr im Dashboard mit Aufzeichnung, Zusammenfassung, Buchung und Transkript', heading: 'Eingehender Anruf', meta: 'Dienstag 20:08 Uhr · 2:09 · +49 151 23456789', status: '✓ Gebucht', recording: 'Aufzeichnung', summaryLabel: 'Zusammenfassung', summary: 'Lukas rief nach Ladenschluss an, um einen Haarschnitt zu buchen. Die KI fand einen freien Termin und buchte ihn. Bestätigung per E-Mail versendet.', bookingLabel: 'Buchung im Gespräch', booking: 'Donnerstag 14:00 Uhr · Herrenschnitt · Lukas Becker', transcript: 'Transkript', agent: 'Agent', customer: 'Anrufer', lines: ['Hallo, Sie sind mit Salon Nordlicht verbunden. Ich bin die digitale Assistentin des Salons. Wie kann ich helfen?', 'Hallo, hier ist Lukas. Ich möchte einen Haarschnitt buchen.', 'Am Donnerstag sind 14:00 und 15:30 Uhr frei. Was passt Ihnen besser?', '14:00 Uhr, bitte.'] },
    fr: { title: 'Appel entrant à 20 h 08 dans le tableau de bord avec enregistrement, résumé, réservation et transcription', heading: 'Appel entrant', meta: 'Mardi 20 h 08 · 2:09 · +33 6 12 34 56 78', status: '✓ Réservé', recording: 'Enregistrement', summaryLabel: 'Résumé', summary: 'Thomas a appelé après la fermeture pour réserver une coupe. L’IA a trouvé un créneau libre et l’a réservé. Confirmation envoyée par e-mail.', bookingLabel: 'Réservation pendant l’appel', booking: 'Jeudi 14 h · Coupe homme · Thomas Martin', transcript: 'Transcription', agent: 'Agent', customer: 'Client', lines: ['Bonjour, vous êtes bien au Salon Aurore. Je suis l’assistante numérique du salon. Que puis-je faire pour vous ?', 'Bonjour, c’est Thomas. Je voudrais réserver une coupe.', 'Jeudi, nous avons 14 h et 15 h 30 de libres. Qu’est-ce qui vous convient ?', '14 h, s’il vous plaît.'] },
  },
  webshop: {
    da: { title: 'Opkald til en webshop om ordrestatus, besvaret af AI', heading: 'Indgående opkald · Webshop', meta: 'Søndag kl. 10.42 · 1:38 · +45 22 41 18 90', status: '✓ Besvaret', recording: 'Optagelse', summaryLabel: 'Resumé', summary: 'Mette spurgte til ordre 10482. AI’en slog ordren op: afsendt fredag med GLS og forventet levering mandag. Mette spurgte også om returret og fik svar ud fra webshoppens politik.', bookingLabel: 'Opslag i samtalen', booking: 'Ordre #10482 · Afsendt · Levering mandag', transcript: 'Transskription', agent: 'Agent', customer: 'Kunde', lines: ['Hej, du taler med webshoppens digitale assistent. Hvad kan jeg hjælpe med?', 'Hvor er min pakke? Ordrenummeret er 10482.', 'Den blev sendt fredag med GLS og ventes leveret mandag.', 'Super, og hvor længe har jeg returret?'] },
    en: { title: 'Call to an online store about order status, answered by AI', heading: 'Inbound call · Online store', meta: 'Sunday 10:42 AM · 1:38 · +44 7700 900456', status: '✓ Answered', recording: 'Recording', summaryLabel: 'Summary', summary: 'Emma asked about order 10482. The AI looked it up: shipped on Friday with DPD, expected delivery Monday. Emma also asked about returns and got an answer from the store’s policy.', bookingLabel: 'Lookup in the call', booking: 'Order #10482 · Shipped · Delivery Monday', transcript: 'Transcript', agent: 'Agent', customer: 'Caller', lines: ['Hi, you’re speaking with the store’s digital assistant. How can I help?', 'Where is my parcel? The order number is 10482.', 'It was shipped on Friday with DPD and should arrive on Monday.', 'Great, and how long do I have to return it?'] },
    es: { title: 'Llamada a una tienda online sobre el estado de un pedido, atendida por IA', heading: 'Llamada entrante · Tienda online', meta: 'Domingo 10:42 · 1:38 · +34 622 418 190', status: '✓ Atendida', recording: 'Grabación', summaryLabel: 'Resumen', summary: 'Marta preguntó por el pedido 10482. La IA lo consultó: enviado el viernes con SEUR y entrega prevista el lunes. Marta preguntó también por las devoluciones y recibió la respuesta según la política de la tienda.', bookingLabel: 'Consulta en la llamada', booking: 'Pedido #10482 · Enviado · Entrega el lunes', transcript: 'Transcripción', agent: 'Agente', customer: 'Cliente', lines: ['Hola, hablas con la asistente digital de la tienda. ¿En qué te ayudo?', '¿Dónde está mi paquete? El número de pedido es 10482.', 'Se envió el viernes con SEUR y la entrega está prevista el lunes.', 'Genial, ¿y cuánto tiempo tengo para devolverlo?'] },
    de: { title: 'Anruf bei einem Onlineshop zum Bestellstatus, von der KI beantwortet', heading: 'Eingehender Anruf · Onlineshop', meta: 'Sonntag 10:42 Uhr · 1:38 · +49 160 2241890', status: '✓ Beantwortet', recording: 'Aufzeichnung', summaryLabel: 'Zusammenfassung', summary: 'Anna fragte nach Bestellung 10482. Die KI sah nach: am Freitag mit DHL versandt, Zustellung voraussichtlich Montag. Anna fragte auch nach dem Rückgaberecht und bekam die Antwort aus den Shop-Richtlinien.', bookingLabel: 'Abfrage im Gespräch', booking: 'Bestellung #10482 · Versandt · Zustellung Montag', transcript: 'Transkript', agent: 'Agent', customer: 'Anruferin', lines: ['Hallo, Sie sprechen mit der digitalen Assistentin des Shops. Wie kann ich helfen?', 'Wo ist mein Paket? Die Bestellnummer ist 10482.', 'Es wurde am Freitag mit DHL versandt und kommt voraussichtlich am Montag an.', 'Super. Und wie lange kann ich es zurückschicken?'] },
    fr: { title: 'Appel à une boutique en ligne sur le suivi de commande, traité par l’IA', heading: 'Appel entrant · Boutique en ligne', meta: 'Dimanche 10 h 42 · 1:38 · +33 6 22 41 18 90', status: '✓ Traité', recording: 'Enregistrement', summaryLabel: 'Résumé', summary: 'Léa a demandé où en était la commande 10482. L’IA l’a consultée : expédiée vendredi par Colissimo, livraison prévue lundi. Léa a aussi demandé le délai de retour et a eu la réponse selon les conditions de la boutique.', bookingLabel: 'Consultation pendant l’appel', booking: 'Commande #10482 · Expédiée · Livraison lundi', transcript: 'Transcription', agent: 'Agent', customer: 'Cliente', lines: ['Bonjour, vous parlez avec l’assistante numérique de la boutique. Que puis-je faire pour vous ?', 'Où est mon colis ? Le numéro de commande est 10482.', 'Il est parti vendredi par Colissimo et devrait arriver lundi.', 'Parfait. Et j’ai combien de temps pour le retourner ?'] },
  },
  office: {
    da: { title: 'Opkald til et advokatkontor, hvor AI booker et møde og tager en besked', heading: 'Indgående opkald · Kontor', meta: 'Torsdag kl. 12.05 · 2:31 · +45 31 77 52 04', status: '✓ Møde booket', recording: 'Optagelse', summaryLabel: 'Resumé', summary: 'Ny henvendelse om et boligkøb. AI’en bookede et indledende møde med advokat Hansen og noterede, at klienten ønsker at få gennemgået købsaftalen inden fredag.', bookingLabel: 'Booking i samtalen', booking: 'Mandag kl. 09.00 · Indledende møde · Jonas Holm', transcript: 'Transskription', agent: 'Agent', customer: 'Kunde', lines: ['Goddag, du har ringet til Hansen & Co. Jeg er kontorets digitale assistent. Hvad drejer det sig om?', 'Vi skal købe hus og vil gerne have en advokat til at se på købsaftalen.', 'Advokat Hansen har tid mandag kl. 9.00. Må jeg booke et indledende møde?', 'Ja, det passer fint.'] },
    en: { title: 'Call to a law firm where the AI books a meeting and takes a message', heading: 'Inbound call · Office', meta: 'Thursday 12:05 PM · 2:31 · +44 7700 900789', status: '✓ Meeting booked', recording: 'Recording', summaryLabel: 'Summary', summary: 'New enquiry about a house purchase. The AI booked an initial meeting with Ms Hansen and noted that the client wants the purchase agreement reviewed before Friday.', bookingLabel: 'Booking in the call', booking: 'Monday 9:00 AM · Initial meeting · Oliver Brown', transcript: 'Transcript', agent: 'Agent', customer: 'Caller', lines: ['Good afternoon, you’ve reached Hansen & Co. I’m the firm’s digital assistant. What is it regarding?', 'We’re buying a house and would like a solicitor to review the contract.', 'Ms Hansen is free on Monday at 9:00. Shall I book an initial meeting?', 'Yes, that works.'] },
    es: { title: 'Llamada a un despacho de abogados donde la IA agenda una reunión y toma nota', heading: 'Llamada entrante · Despacho', meta: 'Jueves 12:05 · 2:31 · +34 631 775 204', status: '✓ Reunión agendada', recording: 'Grabación', summaryLabel: 'Resumen', summary: 'Nueva consulta sobre la compra de una vivienda. La IA agendó una primera reunión con la abogada García y anotó que el cliente quiere revisar el contrato de arras antes del viernes.', bookingLabel: 'Reserva en la llamada', booking: 'Lunes 9:00 · Primera reunión · Pablo Moreno', transcript: 'Transcripción', agent: 'Agente', customer: 'Cliente', lines: ['Buenos días, ha llamado a García Abogados. Soy la asistente digital del despacho. ¿En qué puedo ayudarle?', 'Vamos a comprar un piso y queremos que un abogado revise el contrato de arras.', 'La abogada García tiene hueco el lunes a las 9:00. ¿Le agendo una primera reunión?', 'Sí, perfecto.'] },
    de: { title: 'Anruf bei einer Kanzlei: Die KI vereinbart einen Termin und nimmt eine Notiz auf', heading: 'Eingehender Anruf · Kanzlei', meta: 'Donnerstag 12:05 Uhr · 2:31 · +49 171 7752040', status: '✓ Termin vereinbart', recording: 'Aufzeichnung', summaryLabel: 'Zusammenfassung', summary: 'Neue Anfrage zu einem Hauskauf. Die KI vereinbarte ein Erstgespräch mit Rechtsanwältin Hansen und notierte, dass der Mandant den Kaufvertrag vor Freitag prüfen lassen möchte.', bookingLabel: 'Buchung im Gespräch', booking: 'Montag 9:00 Uhr · Erstgespräch · Jonas Wagner', transcript: 'Transkript', agent: 'Agent', customer: 'Anrufer', lines: ['Guten Tag, Kanzlei Hansen & Partner. Ich bin die digitale Assistentin der Kanzlei. Worum geht es?', 'Wir kaufen ein Haus und möchten den Kaufvertrag prüfen lassen.', 'Frau Hansen hat am Montag um 9:00 Uhr Zeit. Soll ich ein Erstgespräch eintragen?', 'Ja, das passt.'] },
    fr: { title: 'Appel à un cabinet d’avocats où l’IA fixe un rendez-vous et prend un message', heading: 'Appel entrant · Cabinet', meta: 'Jeudi 12 h 05 · 2:31 · +33 6 31 77 52 04', status: '✓ RDV fixé', recording: 'Enregistrement', summaryLabel: 'Résumé', summary: 'Nouvelle demande concernant un achat immobilier. L’IA a fixé un premier rendez-vous avec Maître Hansen et noté que le client souhaite faire relire le compromis de vente avant vendredi.', bookingLabel: 'Réservation pendant l’appel', booking: 'Lundi 9 h · Premier rendez-vous · Hugo Bernard', transcript: 'Transcription', agent: 'Agent', customer: 'Client', lines: ['Bonjour, cabinet Hansen & Associés. Je suis l’assistante numérique du cabinet. C’est à quel sujet ?', 'Nous achetons une maison et voudrions faire relire le compromis de vente.', 'Maître Hansen est disponible lundi à 9 h. Je vous fixe un premier rendez-vous ?', 'Oui, très bien.'] },
  },
};

function callSummary(t) {
  const W = 1200, H = 760;
  let b = `<g filter="url(#sh)"><rect x="40" y="40" width="1120" height="680" rx="24" fill="#ffffff"/></g>`;
  // Header
  b += `<circle cx="96" cy="100" r="26" fill="${C.brandSoft}"/><path d="M86 88h7l3 7-4 2.5a12 12 0 0 0 6.5 6.5L101 100l7 3v7a3 3 0 0 1-3 3C93 113 83 103 83 91a3 3 0 0 1 3-3z" fill="none" stroke="${C.brand}" stroke-width="2.4" stroke-linejoin="round"/>`;
  b += text(138, 96, t.heading, { size: 24, weight: 700 });
  b += text(138, 124, t.meta, { size: 16, fill: C.ink3 });
  b += chip(1130 - (t.status.length * 15 * 0.56 + 28), 82, t.status);
  b += `<line x1="40" y1="156" x2="1160" y2="156" stroke="${C.line}"/>`;
  // Left column
  const lx = 76, lw = 440;
  b += text(lx, 200, t.recording.toUpperCase(), { size: 13, weight: 700, fill: C.ink3 });
  b += `<rect x="${lx}" y="216" width="${lw}" height="56" rx="28" fill="#f1f5f9"/><path d="M${lx + 26} 232 l18 12 l-18 12z" fill="${C.ink}"/>`;
  b += `<rect x="${lx + 64}" y="242" width="${lw - 100}" height="5" rx="2.5" fill="#cbd5e1"/><rect x="${lx + 64}" y="242" width="${(lw - 100) * 0.38}" height="5" rx="2.5" fill="${C.brand}"/>`;
  b += text(lx, 318, t.summaryLabel.toUpperCase(), { size: 13, weight: 700, fill: C.ink3 });
  const s = para(lx, 346, t.summary, lw, { size: 18, fill: C.ink2, lineHeight: 27 });
  b += s.svg;
  const by = 346 + s.height + 24;
  b += text(lx, by, t.bookingLabel.toUpperCase(), { size: 13, weight: 700, fill: C.ink3 });
  const bp = para(lx + 20, by + 44, t.booking, lw - 40, { size: 16, weight: 600, fill: C.green, lineHeight: 22 });
  b += `<rect x="${lx}" y="${by + 16}" width="${lw}" height="${bp.height + 26}" rx="12" fill="${C.greenSoft}" stroke="#bbf7d0"/>` + bp.svg;
  // Right column: transcript
  const rx = 560, rw = 560;
  b += `<rect x="${rx - 10}" y="176" width="${rw + 20}" height="520" rx="16" fill="#f8fafc"/>`;
  b += text(rx + 12, 210, t.transcript.toUpperCase(), { size: 13, weight: 700, fill: C.ink3 });
  let y = 228;
  t.lines.forEach((line, i) => {
    const mine = i % 2 === 1;
    const r = bubble(rx + 12, y, rw - 70, line, { mine, size: 16, label: mine ? t.customer : t.agent });
    // shift customer bubbles to the right edge
    b += mine ? `<g transform="translate(46 0)">${r.svg}</g>` : r.svg;
    y += r.height + 12;
  });
  return frame(W, H, b, t.title);
}

// ---------------------------------------------------------------------------
// 3. Booking list from all channels
// ---------------------------------------------------------------------------
const BOOKINGS = {
  salon: {
    da: { title: 'Bookinger fra telefon og hjemmeside samlet i ét dashboard', heading: 'Bookinger fra alle kanaler', phone: 'Telefon', web: 'Hjemmeside', cols: ['Kanal', 'Handling', 'Tidspunkt', 'Navn', 'Status'], done: '✓ Gennemført', rows: [['web', 'Booking', 'Lør. 11.30', 'Sofie Madsen'], ['phone', 'Flytning', 'Fre. 15.00', 'Sofie Madsen'], ['phone', 'Booking', 'Tor. 14.00', 'Kasper Møller'], ['web', 'Booking', 'Fre. 10.00', 'Jonas Kristensen'], ['phone', 'Aflysning', 'Ons. 16.00', 'Lars Pedersen'], ['web', 'Booking', 'Tir. 13.00', 'Ida Poulsen']] },
    en: { title: 'Bookings from phone and website in one dashboard', heading: 'Bookings from every channel', phone: 'Phone', web: 'Website', cols: ['Channel', 'Action', 'Time', 'Name', 'Status'], done: '✓ Completed', rows: [['web', 'Booking', 'Sat 11:30', 'Sophie Taylor'], ['phone', 'Moved', 'Fri 3:00 PM', 'Sophie Taylor'], ['phone', 'Booking', 'Thu 2:00 PM', 'James Carter'], ['web', 'Booking', 'Fri 10:00', 'Daniel Hughes'], ['phone', 'Cancelled', 'Wed 4:00 PM', 'Mark Wilson'], ['web', 'Booking', 'Tue 1:00 PM', 'Grace Evans']] },
    es: { title: 'Reservas del teléfono y de la web en un mismo panel', heading: 'Reservas de todos los canales', phone: 'Teléfono', web: 'Web', cols: ['Canal', 'Acción', 'Hora', 'Nombre', 'Estado'], done: '✓ Completada', rows: [['web', 'Reserva', 'Sáb. 11:30', 'Lucía Gómez'], ['phone', 'Cambio', 'Vie. 15:00', 'Lucía Gómez'], ['phone', 'Reserva', 'Jue. 14:00', 'Javier Ruiz'], ['web', 'Reserva', 'Vie. 10:00', 'Carmen López'], ['phone', 'Cancelación', 'Mié. 16:00', 'Sergio Díaz'], ['web', 'Reserva', 'Mar. 13:00', 'Elena Torres']] },
    de: { title: 'Buchungen von Telefon und Website in einem Dashboard', heading: 'Buchungen aus allen Kanälen', phone: 'Telefon', web: 'Website', cols: ['Kanal', 'Aktion', 'Termin', 'Name', 'Status'], done: '✓ Erledigt', rows: [['web', 'Buchung', 'Sa. 11:30', 'Sophie Schmidt'], ['phone', 'Verschoben', 'Fr. 15:00', 'Sophie Schmidt'], ['phone', 'Buchung', 'Do. 14:00', 'Lukas Becker'], ['web', 'Buchung', 'Fr. 10:00', 'Mia Fischer'], ['phone', 'Absage', 'Mi. 16:00', 'Jan Weber'], ['web', 'Buchung', 'Di. 13:00', 'Lea Hoffmann']] },
    fr: { title: 'Réservations du téléphone et du site dans un seul tableau de bord', heading: 'Réservations de tous les canaux', phone: 'Téléphone', web: 'Site web', cols: ['Canal', 'Action', 'Créneau', 'Nom', 'Statut'], done: '✓ Effectuée', rows: [['web', 'Réservation', 'Sam. 11 h 30', 'Camille Petit'], ['phone', 'Déplacement', 'Ven. 15 h', 'Camille Petit'], ['phone', 'Réservation', 'Jeu. 14 h', 'Thomas Martin'], ['web', 'Réservation', 'Ven. 10 h', 'Julie Moreau'], ['phone', 'Annulation', 'Mer. 16 h', 'Nicolas Roux'], ['web', 'Réservation', 'Mar. 13 h', 'Manon Girard']] },
  },
  clinic: {
    da: { title: 'Klinikkens bookinger, flytninger og afbud fra telefon og hjemmeside', heading: 'Tandklinik · bookinger i dag', phone: 'Telefon', web: 'Hjemmeside', cols: ['Kanal', 'Handling', 'Tidspunkt', 'Behandling', 'Status'], done: '✓ I kalenderen', rows: [['phone', 'Booking', 'Man. 08.30', 'Tandrens'], ['phone', 'Afbud', 'Tir. 10.00', 'Undersøgelse'], ['web', 'Booking', 'Tir. 10.00', 'Undersøgelse'], ['phone', 'Flytning', 'Ons. 14.15', 'Fyldning'], ['web', 'Booking', 'Tor. 09.00', 'Tandrens'], ['phone', 'Booking', 'Fre. 11.30', 'Konsultation']] },
    en: { title: 'The clinic’s bookings, moves and cancellations from phone and website', heading: 'Dental practice · today’s bookings', phone: 'Phone', web: 'Website', cols: ['Channel', 'Action', 'Time', 'Treatment', 'Status'], done: '✓ In calendar', rows: [['phone', 'Booking', 'Mon 8:30', 'Hygiene'], ['phone', 'Cancelled', 'Tue 10:00', 'Check-up'], ['web', 'Booking', 'Tue 10:00', 'Check-up'], ['phone', 'Moved', 'Wed 2:15 PM', 'Filling'], ['web', 'Booking', 'Thu 9:00', 'Hygiene'], ['phone', 'Booking', 'Fri 11:30', 'Consultation']] },
    es: { title: 'Citas, cambios y anulaciones de la clínica desde el teléfono y la web', heading: 'Clínica dental · citas de hoy', phone: 'Teléfono', web: 'Web', cols: ['Canal', 'Acción', 'Hora', 'Tratamiento', 'Estado'], done: '✓ En agenda', rows: [['phone', 'Cita', 'Lun. 8:30', 'Limpieza'], ['phone', 'Anulación', 'Mar. 10:00', 'Revisión'], ['web', 'Cita', 'Mar. 10:00', 'Revisión'], ['phone', 'Cambio', 'Mié. 14:15', 'Empaste'], ['web', 'Cita', 'Jue. 9:00', 'Limpieza'], ['phone', 'Cita', 'Vie. 11:30', 'Consulta']] },
    de: { title: 'Termine, Verschiebungen und Absagen der Praxis per Telefon und Website', heading: 'Zahnarztpraxis · Termine heute', phone: 'Telefon', web: 'Website', cols: ['Kanal', 'Aktion', 'Termin', 'Behandlung', 'Status'], done: '✓ Im Kalender', rows: [['phone', 'Termin', 'Mo. 8:30', 'Prophylaxe'], ['phone', 'Absage', 'Di. 10:00', 'Kontrolle'], ['web', 'Termin', 'Di. 10:00', 'Kontrolle'], ['phone', 'Verschoben', 'Mi. 14:15', 'Füllung'], ['web', 'Termin', 'Do. 9:00', 'Prophylaxe'], ['phone', 'Termin', 'Fr. 11:30', 'Beratung']] },
    fr: { title: 'Rendez-vous, déplacements et annulations du cabinet par téléphone et site', heading: 'Cabinet dentaire · rendez-vous du jour', phone: 'Téléphone', web: 'Site web', cols: ['Canal', 'Action', 'Créneau', 'Soin', 'Statut'], done: '✓ Dans l’agenda', rows: [['phone', 'RDV', 'Lun. 8 h 30', 'Détartrage'], ['phone', 'Annulation', 'Mar. 10 h', 'Contrôle'], ['web', 'RDV', 'Mar. 10 h', 'Contrôle'], ['phone', 'Déplacement', 'Mer. 14 h 15', 'Plombage'], ['web', 'RDV', 'Jeu. 9 h', 'Détartrage'], ['phone', 'RDV', 'Ven. 11 h 30', 'Consultation']] },
  },
};

function bookings(t) {
  const W = 1200, H = 720;
  let b = `<g filter="url(#sh)"><rect x="40" y="40" width="1120" height="640" rx="24" fill="#ffffff"/></g>`;
  b += text(84, 108, t.heading, { size: 26, weight: 700 });
  b += `<circle cx="${1116 - 300}" cy="101" r="7" fill="${C.brand}"/>` + text(1116 - 286, 107, t.phone, { size: 16, fill: C.ink2 });
  b += `<circle cx="${1116 - 150}" cy="101" r="7" fill="${C.orange}"/>` + text(1116 - 136, 107, t.web, { size: 16, fill: C.ink2 });
  const xs = [84, 300, 500, 690, 920];
  b += `<line x1="84" y1="150" x2="1116" y2="150" stroke="${C.line}"/>`;
  b += t.cols.map((c, i) => text(xs[i], 184, c, { size: 15, weight: 600, fill: C.ink3 })).join('');
  t.rows.forEach((r, i) => {
    const y = 236 + i * 70;
    if (i % 2 === 0) b += `<rect x="64" y="${y - 38}" width="1072" height="64" rx="12" fill="#f8fafc"/>`;
    const isPhone = r[0] === 'phone';
    b += `<circle cx="${xs[0] + 7}" cy="${y - 6}" r="7" fill="${isPhone ? C.brand : C.orange}"/>` + text(xs[0] + 24, y, isPhone ? t.phone : t.web, { size: 18, fill: C.ink });
    const cancel = /Aflys|Cancel|Anula|Absage|Annul|Afbud/.test(r[1]);
    b += text(xs[1], y, r[1], { size: 18, weight: 600, fill: cancel ? C.red : C.ink });
    b += text(xs[2], y, r[2], { size: 18, fill: C.ink2 });
    b += text(xs[3], y, r[3], { size: 18, fill: C.ink2 });
    b += chip(xs[4], y - 24, t.done, { size: 14 });
  });
  return frame(W, H, b, t.title);
}

// ---------------------------------------------------------------------------
// 4. Phone with notifications (tradespeople)
// ---------------------------------------------------------------------------
const PHONE = {
  craftsman: {
    da: { title: 'Mobilen viser nye opgaver, som AI-telefonpasningen har taget imod, mens håndværkeren arbejder', time: '07.45', app: 'Aibooking', today: 'I dag', cards: [{ tag: 'Haster', title: 'Vandskade i køkken', text: 'Rosenvej 12, Aarhus. Kunden har lukket for vandet. Ring tilbage hurtigst muligt.', urgent: true }, { tag: 'Booking', title: 'Besigtigelse tirsdag kl. 8.00', text: 'Nyt badeværelse, Søndergade 4. Billeder sendt på e-mail.' }, { tag: 'Besked', title: 'Ønsker tilbud på varmepumpe', text: 'Hus på 140 m², ønsker opkald efter kl. 16.' }], side: ['Opgave', 'Adresse', 'Hvor meget det haster'], sideTitle: 'AI’en har spurgt om:' },
    en: { title: 'The phone shows new jobs taken by AI phone answering while the tradesperson works', time: '7:45', app: 'Aibooking', today: 'Today', cards: [{ tag: 'Urgent', title: 'Water leak in kitchen', text: '12 Rose Lane, Leeds. The customer has shut off the water. Call back as soon as possible.', urgent: true }, { tag: 'Booking', title: 'Site visit Tuesday 8:00 AM', text: 'New bathroom, 4 High Street. Photos sent by email.' }, { tag: 'Message', title: 'Wants a quote for a heat pump', text: '140 m² house, prefers a call after 4 PM.' }], side: ['The job', 'The address', 'How urgent it is'], sideTitle: 'The AI has asked about:' },
    es: { title: 'El móvil muestra nuevos trabajos recibidos por la atención telefónica con IA mientras el profesional trabaja', time: '7:45', app: 'Aibooking', today: 'Hoy', cards: [{ tag: 'Urgente', title: 'Fuga de agua en la cocina', text: 'Calle Rosales 12, Valencia. El cliente ha cerrado la llave de paso. Devolver la llamada cuanto antes.', urgent: true }, { tag: 'Cita', title: 'Visita el martes a las 8:00', text: 'Baño nuevo, calle Mayor 4. Fotos enviadas por correo.' }, { tag: 'Mensaje', title: 'Pide presupuesto de aerotermia', text: 'Casa de 140 m², prefiere que le llamen después de las 16:00.' }], side: ['El trabajo', 'La dirección', 'La urgencia'], sideTitle: 'La IA ha preguntado por:' },
    de: { title: 'Das Handy zeigt neue Aufträge, die der KI-Telefonservice angenommen hat, während der Handwerker arbeitet', time: '7:45', app: 'Aibooking', today: 'Heute', cards: [{ tag: 'Dringend', title: 'Wasserschaden in der Küche', text: 'Rosenweg 12, Köln. Der Kunde hat das Wasser abgestellt. Bitte schnellstmöglich zurückrufen.', urgent: true }, { tag: 'Termin', title: 'Besichtigung Dienstag 8:00 Uhr', text: 'Neues Bad, Hauptstraße 4. Fotos per E-Mail geschickt.' }, { tag: 'Nachricht', title: 'Angebot für Wärmepumpe gewünscht', text: 'Haus mit 140 m², Rückruf bitte nach 16 Uhr.' }], side: ['Den Auftrag', 'Die Adresse', 'Die Dringlichkeit'], sideTitle: 'Die KI hat gefragt nach:' },
    fr: { title: 'Le téléphone affiche les nouvelles demandes prises par la permanence téléphonique IA pendant que l’artisan travaille', time: '7:45', app: 'Aibooking', today: 'Aujourd’hui', cards: [{ tag: 'Urgent', title: 'Fuite d’eau dans la cuisine', text: '12 rue des Roses, Lyon. Le client a coupé l’eau. Rappeler au plus vite.', urgent: true }, { tag: 'RDV', title: 'Visite mardi à 8 h', text: 'Nouvelle salle de bains, 4 Grande Rue. Photos envoyées par e-mail.' }, { tag: 'Message', title: 'Devis pour une pompe à chaleur', text: 'Maison de 140 m², préfère être rappelé après 16 h.' }], side: ['L’intervention', 'L’adresse', 'Le degré d’urgence'], sideTitle: 'L’IA a demandé :' },
  },
};

function phoneNotifications(t) {
  const W = 1200, H = 760;
  let b = '';
  const px = 140, py = 30, pw = 420, ph = 700;
  b += `<g filter="url(#sh)"><rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="56" fill="${C.ink}"/></g>`;
  b += `<rect x="${px + 14}" y="${py + 14}" width="${pw - 28}" height="${ph - 28}" rx="44" fill="#eef2ff"/>`;
  b += `<rect x="${px + pw / 2 - 60}" y="${py + 26}" width="120" height="28" rx="14" fill="${C.ink}"/>`;
  b += text(px + 50, py + 48, t.time, { size: 17, weight: 600 });
  b += text(px + pw / 2, py + 110, t.time, { size: 64, weight: 300, anchor: 'middle', fill: C.ink });
  b += text(px + pw / 2, py + 144, t.today, { size: 18, anchor: 'middle', fill: C.ink3 });
  let y = py + 168;
  t.cards.forEach((c) => {
    const p = para(px + 44, y + 92, c.text, pw - 92, { size: 15, fill: C.ink2, lineHeight: 21 });
    const h = 104 + p.height;
    b += `<rect x="${px + 26}" y="${y}" width="${pw - 52}" height="${h}" rx="20" fill="#ffffff" ${c.urgent ? `stroke="#fca5a5" stroke-width="2"` : ''}/>`;
    b += `<rect x="${px + 44}" y="${y + 16}" width="22" height="22" rx="6" fill="${C.brand}"/>` + text(px + 76, y + 33, t.app, { size: 14, weight: 600, fill: C.ink3 });
    b += chip(px + pw - 52 - (c.tag.length * 13 * 0.56 + 28) - 14, y + 12, c.tag, c.urgent ? { fill: C.redSoft, color: C.red, size: 13 } : { fill: C.brandSoft, color: C.brand, size: 13 });
    b += text(px + 44, y + 64, c.title, { size: 18, weight: 700 });
    b += p.svg;
    y += h + 14;
  });
  // Side panel
  const sx = 660, sy = 200;
  b += `<g filter="url(#sh)"><rect x="${sx}" y="${sy}" width="440" height="320" rx="24" fill="#ffffff"/></g>`;
  b += text(sx + 36, sy + 60, t.sideTitle, { size: 22, weight: 700 });
  t.side.forEach((s, i) => {
    const yy = sy + 120 + i * 62;
    b += `<circle cx="${sx + 52}" cy="${yy - 7}" r="16" fill="${C.greenSoft}"/><path d="M${sx + 44} ${yy - 7} l6 6 l11 -12" stroke="${C.green}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    b += text(sx + 84, yy, s, { size: 20, fill: C.ink2 });
  });
  return frame(W, H, b, t.title);
}


// ---------------------------------------------------------------------------
// 5. Voice widget on a phone (localized counterpart of /ai-voice-widget.webp)
// ---------------------------------------------------------------------------
const VOICE = {
  da: { title: 'AI Voice Widget på mobilen: kunden beder om en tid, og AI’en svarer', online: 'Online', customer: 'Book en tid', ai: 'Selvfølgelig, hvornår passer det dig?', label: 'AI' },
  en: { title: 'AI Voice Widget on a phone: the customer asks for an appointment and the AI replies', online: 'Online', customer: 'Book an appointment', ai: 'Of course — when suits you?', label: 'AI' },
  es: { title: 'AI Voice Widget en el móvil: el cliente pide una cita y la IA responde', online: 'En línea', customer: 'Reservar una cita', ai: 'Claro, ¿cuándo te viene bien?', label: 'IA' },
  de: { title: 'AI Voice Widget auf dem Handy: Der Kunde möchte einen Termin, die KI antwortet', online: 'Online', customer: 'Termin buchen', ai: 'Gern, wann passt es Ihnen?', label: 'KI' },
  fr: { title: 'AI Voice Widget sur mobile : le client demande un rendez-vous et l’IA répond', online: 'En ligne', customer: 'Prendre rendez-vous', ai: 'Bien sûr, quand cela vous arrange-t-il ?', label: 'IA', sep: '\u00a0: ' },
};

function voiceWidget(t) {
  const W = 1200, H = 720;
  let b = '';
  b += `<g transform="rotate(-18 600 360)"><rect x="330" y="-160" width="560" height="1100" rx="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="6"/></g>`;
  const cx = 300, cy = 140, cw = 640, ch = 440;
  b += `<g filter="url(#sh)"><rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="40" fill="#ffffff"/></g>`;
  b += `<circle cx="${cx + cw - 150}" cy="${cy + 44}" r="7" fill="#22c55e"/>` + text(cx + cw - 134, cy + 51, t.online, { size: 20, fill: C.ink2 });
  const mx = cx + cw / 2 - 40, my = cy + 160;
  b += `<circle cx="${mx}" cy="${my}" r="74" fill="${C.brandSoft}"/><circle cx="${mx}" cy="${my}" r="50" fill="#bfdbfe"/>`;
  b += `<rect x="${mx - 14}" y="${my - 34}" width="28" height="46" rx="14" fill="${C.brand}"/><path d="M${mx - 24} ${my} a24 24 0 0 0 48 0 M${mx} ${my + 24} v14 M${mx - 14} ${my + 38} h28" stroke="${C.brand}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  const bars = [14, 30, 44, 26, 38, 18, 34, 22, 12];
  b += bars.map((hh, i) => `<rect x="${cx + 40 + i * 14}" y="${my + 30 - hh / 2}" width="6" height="${hh}" rx="3" fill="#60a5fa"/>`).join('');
  b += bars.map((hh, i) => `<rect x="${cx + cw - 70 - i * 14}" y="${my - 40 - hh / 2}" width="6" height="${hh}" rx="3" fill="#60a5fa"/>`).join('');
  const c = bubble(cx + 230, cy + 240, cw - 270, t.customer, { mine: true, size: 22 });
  b += c.svg;
  const lines = wrap(`${t.label}${t.sep ?? ': '}${t.ai}`, cw - 230, 22);
  const bh = lines.length * 30 + 28;
  const by = cy + 250 + c.height;
  b += `<rect x="${cx + 170}" y="${by}" width="${cw - 200}" height="${bh}" rx="22" fill="${C.brand}"/>`;
  b += lines.map((l, i) => text(cx + 192, by + 38 + i * 30, l, { size: 22, fill: '#ffffff', weight: i === 0 ? 500 : 400 })).join('');
  return frame(W, H, b, t.title);
}

// ---------------------------------------------------------------------------
fs.mkdirSync(OUT, { recursive: true });
const jobs = [
  ['widget-chat', WIDGET, widgetChat],
  ['call-salon', CALL.salon, callSummary],
  ['call-webshop', CALL.webshop, callSummary],
  ['call-office', CALL.office, callSummary],
  ['bookings-salon', BOOKINGS.salon, bookings],
  ['bookings-clinic', BOOKINGS.clinic, bookings],
  ['phone-craftsman', PHONE.craftsman, phoneNotifications],
  ['voice-widget', VOICE, voiceWidget],
];
let n = 0;
for (const [name, texts, draw] of jobs) {
  for (const lang of LANGS) {
    fs.writeFileSync(path.join(OUT, `${name}-${lang}.svg`), draw(texts[lang]));
    n++;
  }
}
console.log(`Generated ${n} localized illustrations in public/images/illustrations/`);
