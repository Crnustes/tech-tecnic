import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, newsletter } = body;

    // Validación básica
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Nombre, email, servicio y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Log detallado del contacto (en producción esto se guarda en DB o se envía por email)
    const contactData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || 'No proporcionado',
      company: company || 'No proporcionado',
      service,
      budget: budget || 'No especificado',
      message,
      newsletter: newsletter ? 'Sí' : 'No',
    };

    console.log('═══════════════════════════════════════');
    console.log('📧 NUEVO CONTACTO RECIBIDO');
    console.log('═══════════════════════════════════════');
    console.log('📅 Fecha:', contactData.timestamp);
    console.log('👤 Nombre:', contactData.name);
    console.log('📧 Email:', contactData.email);
    console.log('📱 Teléfono:', contactData.phone);
    console.log('🏢 Empresa:', contactData.company);
    console.log('🎯 Servicio:', contactData.service);
    console.log('💰 Presupuesto:', contactData.budget);
    console.log('💌 Mensaje:', contactData.message);
    console.log('📬 Newsletter:', contactData.newsletter);
    console.log('═══════════════════════════════════════');

    // Guardar en el sistema de leads
    try {
      const leadResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          service,
          budget,
          message,
          newsletter,
        }),
      });

      if (leadResponse.ok) {
        const leadData = await leadResponse.json();
        console.log('✅ Lead guardado con ID:', leadData.leadId);
      } else {
        console.warn('⚠️ No se pudo guardar el lead, pero el contacto fue registrado');
      }
    } catch (leadError) {
      console.error('⚠️ Error al guardar lead:', leadError);
      // No fallar el proceso si hay error con leads
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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
        data: {
          name,
          email,
          service
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}