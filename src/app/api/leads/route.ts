import { NextResponse } from 'next/server';
import { Lead, LeadStatus, LeadSource, ServiceType, BudgetRange } from '@/types/leads';

// Esta función guardará el lead en tu base de datos
// Por ahora solo muestra un ejemplo de cómo estructurar los datos

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, newsletter } = body;

    // Validación básica
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Nombre, email y servicio son requeridos' },
        { status: 400 }
      );
    }

    // Mapear el servicio al tipo correcto
    const serviceMap: Record<string, ServiceType> = {
      'Desarrollo Web': 'desarrollo-web',
      'Apps Móviles': 'apps-moviles',
      'Automatización IA': 'automatizacion-ia',
      'Soluciones para Agencias': 'para-agencias',
      'Integraciones': 'integraciones',
      'SEO + GEO LATAM': 'seo-geo',
      'Mantenimiento': 'mantenimiento',
    };

    // Mapear el presupuesto al rango correcto
    const budgetMap: Record<string, BudgetRange> = {
      '$500 - $1,000': 'menos-1k',
      '$1,000 - $5,000': '1k-5k',
      '$5,000 - $10,000': '5k-10k',
      '$10,000 - $25,000': '10k-25k',
      '$25,000+': 'mas-50k',
    };

    // Crear el objeto Lead con estructura completa
    const lead: Omit<Lead, 'id'> = {
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'nuevo' as LeadStatus,
      source: 'web-form' as LeadSource,
      
      // Información de contacto
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      
      // Información del proyecto
      service: serviceMap[service] || 'otro',
      projectDescription: message,
      budgetRange: budget ? budgetMap[budget] : undefined,
      urgency: 'media',
      
      // Seguimiento inicial
      notes: [{
        id: `note-${Date.now()}`,
        leadId: '', // Se asignará al guardar
        userId: 'system',
        userName: 'Sistema',
        content: `Lead generado desde formulario de contacto. Newsletter: ${newsletter ? 'Sí' : 'No'}`,
        createdAt: new Date(),
        type: 'interno'
      }],
      
      // Metadata
      tags: ['web-form', service],
      probability: 50, // Lead nuevo tiene 50% de probabilidad por defecto
    };

    console.log('═══════════════════════════════════════');
    console.log('🎯 NUEVO LEAD GENERADO');
    console.log('═══════════════════════════════════════');
    console.log('Lead Data:', JSON.stringify(lead, null, 2));
    console.log('═══════════════════════════════════════');

    // AQUÍ ES DONDE GUARDARÍAS EN TU BASE DE DATOS:
    // 
    // Opciones de base de datos:
    // 
    // 1. Supabase (Recomendado - Fácil de usar):
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert([lead])
    //   .select()
    // 
    // 2. MongoDB:
    // const client = await MongoClient.connect(process.env.MONGODB_URI);
    // const db = client.db();
    // const result = await db.collection('leads').insertOne(lead);
    // 
    // 3. PostgreSQL con Prisma:
    // const newLead = await prisma.lead.create({
    //   data: lead
    // });
    // 
    // 4. Firebase/Firestore:
    // const docRef = await addDoc(collection(db, 'leads'), lead);
    //
    // 5. Google Sheets (para empezar rápido):
    // const response = await fetch('https://script.google.com/...', {
    //   method: 'POST',
    //   body: JSON.stringify(lead)
    // });

    // Enviar notificación al equipo
    // Aquí podrías integrar:
    // - Email con Resend
    // - Slack notification
    // - WhatsApp Business API
    // - Telegram Bot
    // - Discord Webhook

    // Por ejemplo con Resend (email):
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'leads@tech-tecnic.com',
    //   to: 'ventas@tech-tecnic.com',
    //   subject: `🎯 Nuevo Lead: ${name} - ${service}`,
    //   html: `
    //     <h2>Nuevo Lead Recibido</h2>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Servicio:</strong> ${service}</p>
    //     <p><strong>Presupuesto:</strong> ${budget || 'No especificado'}</p>
    //     <p><strong>Mensaje:</strong> ${message}</p>
    //     <a href="https://tu-dominio.com/admin/leads">Ver en CRM</a>
    //   `
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead registrado correctamente. Te contactaremos pronto.',
        leadId: `lead-${Date.now()}`, // En producción sería el ID de la base de datos
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('❌ Error al procesar el lead:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}

// GET: Obtener todos los leads (protegido con auth)
export async function GET(request: Request) {
  try {
    // AQUÍ DEBERÍAS VALIDAR LA AUTENTICACIÓN
    // const session = await getServerSession();
    // if (!session) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    // }

    // Obtener leads de la base de datos
    // const leads = await db.leads.findMany();

    // Por ahora devolvemos un array vacío
    return NextResponse.json({
      success: true,
      leads: [],
      message: 'Implementa la conexión a tu base de datos aquí'
    });

  } catch (error) {
    console.error('❌ Error al obtener leads:', error);
    return NextResponse.json(
      { error: 'Error al obtener los leads' },
      { status: 500 }
    );
  }
}
