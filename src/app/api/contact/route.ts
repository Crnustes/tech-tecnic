import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Personalización del correo
    const emailHTML = `
      <div style="font-family:Arial, sans-serif; color:#111; padding:20px;">
        <h2 style="color:#00A3CE;">Nuevo mensaje desde Tech Tecnic 💻</h2>
        <p>Has recibido un nuevo mensaje desde tu página web:</p>

        <p><strong>👤 Nombre:</strong> ${name}</p>
        <p><strong>📧 Correo:</strong> ${email}</p>
        <p><strong>💬 Mensaje:</strong></p>
        <blockquote style="background:#f9f9f9; padding:10px; border-left:4px solid #00A3CE;">
          ${message}
        </blockquote>

        <hr style="margin:20px 0;" />
        <p style="font-size:13px; color:#555;">
          Este mensaje fue enviado desde el formulario de contacto en 
          <a href="https://techtecnic.com" style="color:#00A3CE;">techtecnic.com</a>
        </p>
      </div>
    `

    await resend.emails.send({
      from: 'Tech Tecnic <contacto@techtecnic.com>',
      to: ['cristiannustesm@gmail.com', 'contacto@techtecnic.com'],
      subject: `📩 Nuevo mensaje de ${name}`,
      html: emailHTML,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error al enviar correo:', error)
    return NextResponse.json({ success: false, error })
  }
}
