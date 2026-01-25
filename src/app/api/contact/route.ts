import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const {
      name,
      email,
      message,
      phone,
      service,
      locale,
      company,
    } = body as Record<string, string>;

    const honeypot = typeof company === 'string' ? company.trim() : '';
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const cleanName = typeof name === 'string' ? name.trim() : '';
    const cleanEmail = typeof email === 'string' ? email.trim() : '';
    const cleanMessage = typeof message === 'string' ? message.trim() : '';
    const cleanPhone = typeof phone === 'string' ? phone.trim() : '';
    const cleanService = typeof service === 'string' ? service.trim() : '';
    const safeLocale = locale === 'en' ? 'en' : 'es';

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (cleanName.length > MAX_NAME_LENGTH || cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: 'Message too long' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM;
    const toEmail = process.env.CONTACT_EMAIL || process.env.RESEND_TO;

    if (!resendApiKey || !fromEmail || !toEmail) {
      console.error('Missing Resend configuration');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const subject =
      safeLocale === 'en'
        ? `New contact from ${cleanName}`
        : `Nuevo contacto de ${cleanName}`;

    const details = [
      { label: safeLocale === 'en' ? 'Name' : 'Nombre', value: cleanName },
      { label: safeLocale === 'en' ? 'Email' : 'Email', value: cleanEmail },
      cleanPhone ? { label: safeLocale === 'en' ? 'Phone' : 'Telefono', value: cleanPhone } : null,
      cleanService ? { label: safeLocale === 'en' ? 'Service' : 'Servicio', value: cleanService } : null,
    ].filter(Boolean) as { label: string; value: string }[];

    const html = `
      <h2>${safeLocale === 'en' ? 'New contact message' : 'Nuevo mensaje de contacto'}</h2>
      ${details
        .map((item) => `<p><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}</p>`)
        .join('')}
      <p><strong>${safeLocale === 'en' ? 'Message' : 'Mensaje'}:</strong></p>
      <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br />')}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: cleanEmail,
      subject,
      html,
    });

    return NextResponse.json({ success: true, message: 'Sent' }, { status: 200 });
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
