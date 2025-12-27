# 📧 Templates de Email para Sistema de Leads

## 📋 Tabla de Contenidos
1. [Email Automático - Nuevo Lead](#1-email-automático---nuevo-lead)
2. [Email Post-Reunión](#2-email-post-reunión)
3. [Email con Cotización](#3-email-con-cotización)
4. [Email de Seguimiento](#4-email-de-seguimiento)
5. [Email de Cierre Ganado](#5-email-de-cierre-ganado)
6. [Email de Cliente No Interesado](#6-email-de-cliente-no-interesado)
7. [Implementación con Resend](#implementación-con-resend)

---

## 1. Email Automático - Nuevo Lead
**Para:** Equipo interno  
**Cuándo:** Inmediatamente después de que un lead llena el formulario  
**Objetivo:** Notificar al equipo de un nuevo contacto

### HTML Template

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header con gradiente -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🎯 Nuevo Lead Recibido
              </h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">
                Contacto desde formulario web
              </p>
            </td>
          </tr>

          <!-- Contenido -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Información del Lead -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #667eea; margin-bottom: 10px;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</p>
                    <p style="margin: 5px 0 0 0; color: #111827; font-size: 18px; font-weight: 600;">{{NOMBRE}}</p>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #667eea;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">
                      <a href="mailto:{{EMAIL}}" style="color: #667eea; text-decoration: none;">{{EMAIL}}</a>
                    </p>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #667eea;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono</p>
                    <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">
                      <a href="tel:{{TELEFONO}}" style="color: #667eea; text-decoration: none;">{{TELEFONO}}</a>
                    </p>
                  </td>
                </tr>
                {{IF_EMPRESA}}
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #667eea;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Empresa</p>
                    <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">{{EMPRESA}}</p>
                  </td>
                </tr>
                {{END_IF_EMPRESA}}
              </table>

              <!-- Detalles del Proyecto -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding-bottom: 15px;">
                    <h2 style="color: #111827; font-size: 20px; margin: 0;">📋 Detalles del Proyecto</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%">
                          <p style="margin: 0; color: #92400e; font-size: 12px;">Servicio</p>
                          <p style="margin: 5px 0 0 0; color: #78350f; font-size: 16px; font-weight: 600;">{{SERVICIO}}</p>
                        </td>
                        <td width="50%">
                          <p style="margin: 0; color: #92400e; font-size: 12px;">Presupuesto</p>
                          <p style="margin: 5px 0 0 0; color: #78350f; font-size: 16px; font-weight: 600;">{{PRESUPUESTO}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background-color: #f9fafb; border-radius: 8px;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</p>
                    <p style="margin: 10px 0 0 0; color: #374151; font-size: 14px; line-height: 1.6;">{{MENSAJE}}</p>
                  </td>
                </tr>
              </table>

              <!-- Call to Action -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 30px 0;">
                    <a href="{{URL_ADMIN}}/admin/leads" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);">
                      Ver en CRM →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Acciones Rápidas -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">Acciones Rápidas</p>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 0 5px;">
                          <a href="mailto:{{EMAIL}}" style="display: inline-block; background-color: #f3f4f6; color: #374151; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px;">
                            📧 Enviar Email
                          </a>
                        </td>
                        <td style="padding: 0 5px;">
                          <a href="tel:{{TELEFONO}}" style="display: inline-block; background-color: #f3f4f6; color: #374151; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px;">
                            📱 Llamar
                          </a>
                        </td>
                        <td style="padding: 0 5px;">
                          <a href="https://wa.me/{{TELEFONO_SIN_FORMATO}}" style="display: inline-block; background-color: #10b981; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px;">
                            💬 WhatsApp
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #111827; padding: 30px; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                Tech-Tecnic - Sistema de Gestión de Leads<br>
                Lead recibido el {{FECHA}} a las {{HORA}}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 2. Email Post-Reunión
**Para:** Cliente  
**Cuándo:** Mismo día de la reunión  
**Objetivo:** Agradecer y confirmar próximos pasos

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                ¡Gracias por tu tiempo! 🤝
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px;">
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
                Hola {{NOMBRE}},
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Fue un placer conocerte/conversar contigo hoy sobre <strong>{{PROYECTO}}</strong>.
              </p>

              <!-- Resumen -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; background-color: #f9fafb; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <h2 style="color: #111827; font-size: 18px; margin: 0 0 15px 0;">📝 Resumen de lo conversado</h2>
                    <ul style="color: #374151; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li><strong>Objetivo:</strong> {{OBJETIVO}}</li>
                      <li><strong>Tipo de proyecto:</strong> {{TIPO_PROYECTO}}</li>
                      <li><strong>Timeline deseado:</strong> {{TIMELINE}}</li>
                      <li><strong>Presupuesto aproximado:</strong> {{PRESUPUESTO}}</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Próximos Pasos -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; background-color: #fef3c7; border-radius: 8px; padding: 20px; border-left: 4px solid #f59e0b;">
                <tr>
                  <td>
                    <h2 style="color: #78350f; font-size: 18px; margin: 0 0 15px 0;">🎯 Próximos pasos</h2>
                    <ol style="color: #92400e; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li>Te enviaremos una propuesta detallada en <strong>24-48 horas</strong></li>
                      <li>Programaremos una llamada de seguimiento para <strong>{{FECHA_SEGUIMIENTO}}</strong></li>
                    </ol>
                  </td>
                </tr>
              </table>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                ¿Te quedó alguna duda? Estoy disponible por WhatsApp al <a href="https://wa.me/{{TELEFONO_AGENTE}}" style="color: #667eea; text-decoration: none; font-weight: 600;">{{TELEFONO_AGENTE_FORMATEADO}}</a> o respondiendo este email.
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
                Saludos,<br>
                <strong>{{NOMBRE_AGENTE}}</strong><br>
                <span style="color: #6b7280; font-size: 14px;">Tech-Tecnic - Mejor Agencia de Desarrollo LATAM</span>
              </p>

            </td>
          </tr>

          <tr>
            <td style="background-color: #111827; padding: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0 0 10px 0;">
                Tech-Tecnic | Desarrollo Web & IA en Latinoamérica
              </p>
              <a href="{{URL_WEB}}" style="color: #667eea; text-decoration: none; font-size: 12px;">{{URL_WEB}}</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 3. Email con Cotización
**Para:** Cliente  
**Cuándo:** 24-48 horas después de la reunión  
**Objetivo:** Enviar propuesta formal

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                💰 Tu Propuesta está Lista
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px;">
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
                Hola {{NOMBRE}},
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Adjunto encontrarás nuestra propuesta detallada para <strong>{{PROYECTO}}</strong>.
              </p>

              <!-- Incluye -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; background-color: #ecfdf5; border-radius: 8px; padding: 20px; border-left: 4px solid #10b981;">
                <tr>
                  <td>
                    <h2 style="color: #065f46; font-size: 18px; margin: 0 0 15px 0;">✅ La propuesta incluye</h2>
                    <ul style="color: #047857; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li>Alcance completo del proyecto</li>
                      <li>Timeline detallado con hitos</li>
                      <li>Inversión y formas de pago</li>
                      <li>Proceso de trabajo</li>
                      <li>Garantías y soporte</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Resumen Ejecutivo -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="padding-bottom: 15px;">
                    <h2 style="color: #111827; font-size: 20px; margin: 0;">📊 Resumen Ejecutivo</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" cellpadding="15" cellspacing="0">
                      <tr>
                        <td width="50%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px;">Inversión</p>
                          <p style="margin: 5px 0 0 0; color: #10b981; font-size: 24px; font-weight: 700;">${{PRECIO_USD}} USD</p>
                        </td>
                        <td width="10"></td>
                        <td width="50%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px;">Timeline</p>
                          <p style="margin: 5px 0 0 0; color: #111827; font-size: 24px; font-weight: 700;">{{SEMANAS}} semanas</p>
                        </td>
                      </tr>
                      <tr><td colspan="3" style="height: 10px;"></td></tr>
                      <tr>
                        <td width="50%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px;">Fecha de inicio</p>
                          <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 600;">{{FECHA_INICIO}}</p>
                        </td>
                        <td width="10"></td>
                        <td width="50%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px;">Entrega estimada</p>
                          <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 600;">{{FECHA_ENTREGA}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                ¿Cuándo podemos agendar una llamada para revisar la propuesta?
              </p>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="{{LINK_CALENDARIO}}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);">
                      📅 Agendar Llamada
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Proyectos Similares -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                <tr>
                  <td>
                    <h3 style="color: #111827; font-size: 16px; margin: 0 0 15px 0;">🎨 Proyectos similares que hemos realizado:</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      {{FOR_EACH_PROYECTO}}
                      <tr>
                        <td style="padding: 10px 0;">
                          <a href="{{PROYECTO_URL}}" style="color: #667eea; text-decoration: none; font-size: 15px; font-weight: 500;">
                            → {{PROYECTO_NOMBRE}}
                          </a>
                        </td>
                      </tr>
                      {{END_FOR_EACH}}
                    </table>
                  </td>
                </tr>
              </table>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
                Quedo atento,<br>
                <strong>{{NOMBRE_AGENTE}}</strong>
              </p>

            </td>
          </tr>

          <tr>
            <td style="background-color: #111827; padding: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0 0 10px 0;">
                Tech-Tecnic | Desarrollo Web & IA en Latinoamérica
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 4. Email de Seguimiento
**Para:** Cliente  
**Cuándo:** 3-5 días después de enviar propuesta  
**Objetivo:** Recordar y responder dudas

```plaintext
Asunto: ¿Alguna duda sobre la propuesta? | {{PROYECTO}}

Hola {{NOMBRE}},

Espero estés muy bien. Te escribo para darle seguimiento a la propuesta que te envié el {{FECHA_PROPUESTA}} para {{PROYECTO}}.

¿Tuviste oportunidad de revisarla?

Estoy disponible para:
✓ Aclarar cualquier duda
✓ Ajustar el alcance si es necesario
✓ Explorar opciones de pago flexibles
✓ Agendar una llamada rápida

¿Te parece si conversamos {{DIA_PROPUESTO}} a las {{HORA_PROPUESTA}}?

También puedes responder este email o escribirme por WhatsApp al {{TELEFONO}}.

Saludos,
{{NOMBRE_AGENTE}}
Tech-Tecnic
```

---

## 5. Email de Cierre Ganado
**Para:** Cliente  
**Cuándo:** Después de que acepta la propuesta  
**Objetivo:** Celebrar y explicar siguientes pasos

```html
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 50px; text-align: center;">
              <div style="font-size: 60px; margin-bottom: 20px;">🎉</div>
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">
                ¡Bienvenido a Tech-Tecnic!
              </h1>
              <p style="color: #fef3c7; margin: 10px 0 0 0; font-size: 18px;">
                Estamos emocionados de trabajar contigo
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px;">
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
                Hola {{NOMBRE}},
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                ¡Excelentes noticias! Estamos listos para comenzar con <strong>{{PROYECTO}}</strong>.
              </p>

              <!-- Próximos Pasos -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 12px; padding: 30px;">
                    <h2 style="color: #1e40af; font-size: 20px; margin: 0 0 20px 0;">🚀 Siguientes pasos</h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="40" valign="top">
                          <div style="background-color: #3b82f6; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">1</div>
                        </td>
                        <td style="padding-bottom: 20px;">
                          <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">Firma del contrato</p>
                          <p style="margin: 5px 0 0 0; color: #3b82f6; font-size: 14px;">Te enviaremos el contrato para firma electrónica</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="40" valign="top">
                          <div style="background-color: #3b82f6; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">2</div>
                        </td>
                        <td style="padding-bottom: 20px;">
                          <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">Primer pago ({{PORCENTAJE_INICIAL}}%)</p>
                          <p style="margin: 5px 0 0 0; color: #3b82f6; font-size: 14px;">${{MONTO_INICIAL}} USD - Te enviaremos el link de pago</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="40" valign="top">
                          <div style="background-color: #3b82f6; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">3</div>
                        </td>
                        <td style="padding-bottom: 20px;">
                          <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">Kick-off meeting</p>
                          <p style="margin: 5px 0 0 0; color: #3b82f6; font-size: 14px;">{{FECHA_KICKOFF}} - Conocerás al equipo y revisaremos el plan</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="40" valign="top">
                          <div style="background-color: #3b82f6; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">4</div>
                        </td>
                        <td>
                          <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">¡Arrancamos!</p>
                          <p style="margin: 5px 0 0 0; color: #3b82f6; font-size: 14px;">Inicio del desarrollo: {{FECHA_INICIO}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Tu Account Manager -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; background-color: #f9fafb; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <h3 style="color: #111827; font-size: 18px; margin: 0 0 15px 0;">👤 Tu Account Manager</h3>
                    <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0;">
                      <strong>{{NOMBRE_AGENTE}}</strong> será tu punto de contacto principal.<br>
                      📧 {{EMAIL_AGENTE}}<br>
                      📱 {{TELEFONO_AGENTE}}<br>
                      💬 WhatsApp disponible 24/7
                    </p>
                  </td>
                </tr>
              </table>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Estamos muy emocionados de trabajar contigo y hacer realidad este proyecto. ¡Será increíble! 🚀
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
                ¡Bienvenido al equipo!<br>
                <strong>{{NOMBRE_AGENTE}}</strong>
              </p>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 6. Email de Cliente No Interesado
**Para:** Cliente  
**Cuándo:** Cuando rechaza o no responde  
**Objetivo:** Mantener la puerta abierta

```plaintext
Asunto: Sin problema, {{NOMBRE}} - Aquí estaremos cuando nos necesites

Hola {{NOMBRE}},

Entiendo que en este momento no es el timing adecuado para avanzar con {{PROYECTO}}, y está perfecto.

Solo quería dejarte mi contacto por si en el futuro:
• Cambian las prioridades
• Se libera presupuesto
• Necesitan ayuda con cualquier proyecto digital

Estaré encantado de ayudarte.

Mientras tanto, te dejo algunos recursos útiles:
📘 [Blog] - Tips de desarrollo web
📊 [Guía] - Cómo preparar un proyecto de app móvil
🎯 [Checklist] - SEO para tu negocio

¡Mucho éxito con todo!

{{NOMBRE_AGENTE}}
Tech-Tecnic
{{EMAIL}} | {{TELEFONO}}
```

---

## Implementación con Resend

### Instalación

```bash
npm install resend
```

### Configuración

```typescript
// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(lead: any) {
  await resend.emails.send({
    from: 'leads@tech-tecnic.com',
    to: 'ventas@tech-tecnic.com',
    subject: `🎯 Nuevo Lead: ${lead.name} - ${lead.service}`,
    html: `
      <!-- Pegar aquí el HTML del template 1 -->
      <!-- Reemplazar {{VARIABLES}} con los valores reales -->
    `,
  });
}

export async function sendPostMeetingEmail(lead: any) {
  await resend.emails.send({
    from: 'hola@tech-tecnic.com',
    to: lead.email,
    subject: `Gracias por la reunión - Próximos pasos | Tech-Tecnic`,
    html: `
      <!-- Template 2 -->
    `,
  });
}

export async function sendQuotation(lead: any, quotation: any) {
  await resend.emails.send({
    from: 'hola@tech-tecnic.com',
    to: lead.email,
    subject: `Tu Propuesta para ${quotation.projectTitle} | Tech-Tecnic`,
    html: `
      <!-- Template 3 -->
    `,
    attachments: [
      {
        filename: 'propuesta.pdf',
        content: quotation.pdfBuffer,
      },
    ],
  });
}
```

### Uso en API

```typescript
// src/app/api/leads/route.ts
import { sendLeadNotification } from '@/lib/email';

export async function POST(request: Request) {
  // ... guardar lead en DB ...
  
  // Enviar notificación
  await sendLeadNotification(lead);
  
  return NextResponse.json({ success: true });
}
```

---

¡Templates listos para usar! 🎉
