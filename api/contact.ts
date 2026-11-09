import type { VercelRequest, VercelResponse } from '@vercel/node';

const VALID_INDUSTRIES = ['klinikker', 'haandvaerker', 'kontor', 'webshop'];
const VALID_INQUIRY_TYPES = ['ai-solutions', 'widget', 'inbound-outbound', 'reception', 'reseller', 'other'];
const INQUIRY_TYPE_LABELS: Record<string, string> = {
  'ai-solutions': 'Samarbejde om AI-løsninger',
  widget: 'AI-widget',
  'inbound-outbound': 'Ind-/udgående opkald (telefonassistent)',
  reception: 'AI-reception',
  reseller: 'Forhandler / videresalg af vores produkter',
  other: 'Andet',
};

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  industry?: string;
  inquiryType?: string;
  callDate?: string;
  preferredDate?: string;
  message?: string;
}

// A quote request from the price calculator (/prisberegner): the visitor's
// estimate plus who they are. Labels are Danish because the email goes to us.
const QUOTE_INDUSTRY_LABELS: Record<string, string> = {
  salon: 'Frisør / skønhed',
  healthcare: 'Klinik / sundhed',
  craftsman: 'Håndværker',
  office: 'Kontor / rådgivning',
  ecommerce: 'Webshop',
  restaurant: 'Restaurant / takeaway',
};
const QUOTE_CAPABILITY_LABELS: Record<string, string> = {
  booking: 'Booking',
  webshop: 'Webshop',
  delivery: 'Madlevering',
};

interface QuotePayload {
  kind: 'quote';
  company: string;
  email: string;
  phone: string;
  industry: string;
  capabilities: string[];
  phoneMinutes: number;
  widgetMinutes: number;
  wantsTrial: boolean;
  wantsSetupHelp: boolean;
  estimate?: string;
  language?: string;
  page?: string;
}

const isNonEmptyString = (v: unknown, max = 200): v is string =>
  typeof v === 'string' && v.trim().length > 0 && v.length <= max;
const isMinutes = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 100000;

function isValidQuote(body: unknown): body is QuotePayload {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  return (
    b.kind === 'quote' &&
    isNonEmptyString(b.company) &&
    isNonEmptyString(b.email) && (b.email as string).includes('@') &&
    isNonEmptyString(b.phone, 40) &&
    typeof b.industry === 'string' && b.industry in QUOTE_INDUSTRY_LABELS &&
    Array.isArray(b.capabilities) &&
    b.capabilities.every((c) => typeof c === 'string' && c in QUOTE_CAPABILITY_LABELS) &&
    isMinutes(b.phoneMinutes) &&
    isMinutes(b.widgetMinutes) &&
    typeof b.wantsTrial === 'boolean' &&
    typeof b.wantsSetupHelp === 'boolean' &&
    (b.estimate === undefined || (typeof b.estimate === 'string' && b.estimate.length <= 1000)) &&
    (b.language === undefined || (typeof b.language === 'string' && b.language.length <= 5)) &&
    (b.page === undefined || (typeof b.page === 'string' && b.page.length <= 500))
  );
}

function quoteEmail(q: QuotePayload): { subject: string; text: string; replyTo: string } {
  const yesNo = (v: boolean) => (v ? 'JA' : 'Nej');
  const lines = [
    'Nyt tilbudsønske fra prisberegneren på aibooking.dk',
    '',
    `Firma: ${q.company.trim()}`,
    `Email: ${q.email.trim()}`,
    `Telefon: ${q.phone.trim()}`,
    '',
    `Branche: ${QUOTE_INDUSTRY_LABELS[q.industry]}`,
    `Skal håndtere: ${q.capabilities.map((c) => QUOTE_CAPABILITY_LABELS[c]).join(', ') || '-'}`,
    `Forventet taletid, indgående opkald: ${q.phoneMinutes} min./md.`,
    `Forventet taletid, widget på hjemmesiden: ${q.widgetMinutes} min./md.`,
    '',
    `Vil prøve gratis i 7 dage: ${yesNo(q.wantsTrial)}`,
    `Ønsker gratis hjælp til opsætning i de 7 dage: ${yesNo(q.wantsSetupHelp)}`,
  ];
  if (q.estimate) lines.push('', `Beregnet pris vist til kunden: ${q.estimate}`);
  if (q.language) lines.push(`Sprog: ${q.language}`);
  if (q.page) lines.push(`Side: ${q.page}`);
  const flags = [q.wantsTrial ? '7 dages prøve' : '', q.wantsSetupHelp ? 'opsætningshjælp' : ''].filter(Boolean);
  return {
    subject: `Tilbudsønske: ${q.company.trim()} (${QUOTE_INDUSTRY_LABELS[q.industry]})${flags.length ? ` – ${flags.join(' + ')}` : ''}`,
    text: lines.join('\n'),
    replyTo: q.email.trim(),
  };
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;

  const hasRequiredFields =
    typeof b.name === 'string' && b.name.trim().length > 0 &&
    typeof b.email === 'string' && b.email.includes('@');
  if (!hasRequiredFields) return false;

  if (b.industry !== undefined && !VALID_INDUSTRIES.includes(b.industry as string)) return false;
  if (b.inquiryType !== undefined && !VALID_INQUIRY_TYPES.includes(b.inquiryType as string)) return false;
  if (b.phone !== undefined && typeof b.phone !== 'string') return false;
  if (b.callDate !== undefined && typeof b.callDate !== 'string') return false;
  if (b.preferredDate !== undefined && typeof b.preferredDate !== 'string') return false;
  if (b.message !== undefined && typeof b.message !== 'string') return false;

  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const isQuote = isValidQuote(req.body);
  if (!isQuote && !isValidPayload(req.body)) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_EMAIL_TO || 'mail@aibooking.dk')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);
  // Resend's own sandbox sender works out of the box with no domain
  // verification, so CONTACT_EMAIL_FROM is optional — RESEND_API_KEY is the
  // only variable that must be set for the form to work.
  const from = process.env.CONTACT_EMAIL_FROM || 'Aibooking.dk <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('Contact form is not configured: missing RESEND_API_KEY');
    return res.status(500).json({ error: 'Contact form is not configured' });
  }

  let subject: string;
  let text: string;
  let replyTo: string;
  if (isQuote) {
    ({ subject, text, replyTo } = quoteEmail(req.body as QuotePayload));
  } else {
    ({ subject, text, replyTo } = contactEmail(req.body as ContactPayload));
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, reply_to: replyTo, subject, text }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error:', errorText);
      return res.status(502).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error submitting contact form:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}

function contactEmail(payload: ContactPayload): { subject: string; text: string; replyTo: string } {
  const { name, email, phone, industry, inquiryType, callDate, preferredDate, message } = payload;
  const subject = industry
    ? `Ny henvendelse fra ${name} (${industry})`
    : inquiryType
    ? `Ny henvendelse fra ${name} (${INQUIRY_TYPE_LABELS[inquiryType] || inquiryType})`
    : `Ny henvendelse fra ${name} via kontaktformular`;

  const lines = [`Navn: ${name}`, `Email: ${email}`];
  if (phone) lines.push(`Telefon: ${phone}`);
  if (industry) lines.push(`Branche: ${industry}`);
  if (inquiryType) lines.push(`Type af henvendelse: ${INQUIRY_TYPE_LABELS[inquiryType] || inquiryType}`);
  if (callDate) lines.push(`Ønsket opkaldsdato: ${callDate}`);
  if (preferredDate) lines.push(`Ønsket tidspunkt for kontakt: ${preferredDate}`);
  lines.push(`Besked: ${message || '-'}`);

  return { subject, text: lines.join('\n'), replyTo: email };
}
