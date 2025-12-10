import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con servicios de email:
    
    // OPCIÓN 1: Resend (recomendado)
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Tech Tecnic <onboarding@resend.dev>',
    //   to: 'contacto@techtecnic.com',
    //   subject: `Nuevo contacto de ${name}`,
    //   html: `
    //     <h2>Nuevo mensaje de contacto</h2>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // OPCIÓN 2: SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'contacto@techtecnic.com',
    //   from: 'noreply@techtecnic.com',
    //   subject: `Nuevo contacto de ${name}`,
    //   html: `...`,
    // });

    // OPCIÓN 3: Nodemailer
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: 'noreply@techtecnic.com',
    //   to: 'contacto@techtecnic.com',
    //   subject: `Nuevo contacto de ${name}`,
    //   html: `...`,
    // });

    // Por ahora solo logging (para desarrollo)
    console.log('Nuevo contacto recibido:', { name, email, message });

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}