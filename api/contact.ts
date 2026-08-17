import type { VercelRequest, VercelResponse } from '@vercel/node';

const VALID_INDUSTRIES = ['klinikker', 'haandvaerker', 'kontor', 'webshop'];

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  industry: string;
  callDate: string;
  message?: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === 'string' && b.name.trim().length > 0 &&
    typeof b.email === 'string' && b.email.includes('@') &&
    typeof b.phone === 'string' && b.phone.trim().length > 0 &&
    typeof b.industry === 'string' && VALID_INDUSTRIES.includes(b.industry) &&
    typeof b.callDate === 'string' && b.callDate.trim().length > 0
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isValidPayload(req.body)) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const { name, email, phone, industry, callDate, message } = req.body as ContactPayload;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error('Contact form is not configured: missing RESEND_API_KEY, CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM');
    return res.status(500).json({ error: 'Contact form is not configured' });
  }

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
        subject: `Ny henvendelse fra ${name} (${industry})`,
        text: [
          `Navn: ${name}`,
          `Email: ${email}`,
          `Telefon: ${phone}`,
          `Branche: ${industry}`,
          `Ønsket opkaldsdato: ${callDate}`,
          `Besked: ${message || '-'}`,
        ].join('\n'),
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
