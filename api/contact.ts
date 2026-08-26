import type { VercelRequest, VercelResponse } from '@vercel/node';

const VALID_INDUSTRIES = ['klinikker', 'haandvaerker', 'kontor', 'webshop'];
const VALID_INQUIRY_TYPES = ['ai-solutions', 'widget', 'inbound-outbound', 'reception', 'other'];
const INQUIRY_TYPE_LABELS: Record<string, string> = {
  'ai-solutions': 'Samarbejde om AI-løsninger',
  widget: 'AI-widget',
  'inbound-outbound': 'Ind-/udgående opkald (telefonassistent)',
  reception: 'AI-reception',
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

  if (!isValidPayload(req.body)) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const { name, email, phone, industry, inquiryType, callDate, preferredDate, message } = req.body as ContactPayload;

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_EMAIL_TO || 'mail@aibooking.dk')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || to.length === 0 || !from) {
    console.error('Contact form is not configured: missing RESEND_API_KEY, CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM');
    return res.status(500).json({ error: 'Contact form is not configured' });
  }

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

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        text: lines.join('\n'),
      }),
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
