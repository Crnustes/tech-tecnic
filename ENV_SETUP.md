# Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para configuración sensible y específica del entorno.

## Archivos de Entorno

- `.env.local` - Desarrollo local (no commitear)
- `.env.production` - Producción (configurar en Vercel)

## Variables Requeridas

### Google Analytics
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
Obtener en: https://analytics.google.com

### Sitio
```env
NEXT_PUBLIC_SITE_URL=https://techtecnic.com
```
URL completa del sitio en producción

### Email de Contacto (Resend.com)
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=contacto@techtecnic.com
CONTACT_EMAIL_FROM=noreply@techtecnic.com
```
Obtener API key en: https://resend.com

### Rate Limiting (API)
```env
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW=60000
```
- MAX: Número de requests permitidos
- WINDOW: Ventana de tiempo en milisegundos

### WhatsApp
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```
Número en formato internacional sin "+" ni espacios

## Configuración en Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable con su valor
4. Selecciona entornos: Production, Preview, Development
5. Guarda y redeploy

## Seguridad

⚠️ **NUNCA** commitear archivos `.env.local` o `.env.production`
✅ Están incluidos en `.gitignore`
✅ Usa variables `NEXT_PUBLIC_*` solo para datos que pueden ser públicos
✅ Datos sensibles (API keys) NUNCA deben tener prefijo `NEXT_PUBLIC_`

## Verificar Configuración

```bash
# En desarrollo, verificar que las variables se carguen
npm run dev

# En consola del navegador, verificar públicas:
console.log(process.env.NEXT_PUBLIC_SITE_URL)

# Variables privadas NO aparecerán en el cliente (correcto)
console.log(process.env.RESEND_API_KEY) // undefined en cliente
```

## Ejemplo .env.local

```env
# Copia este contenido a .env.local y completa con tus valores

# Sitio
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (opcional en dev)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (Resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=tu@email.com
CONTACT_EMAIL_FROM=noreply@tudominio.com

# Rate Limiting
RATE_LIMIT_MAX=10
RATE_LIMIT_WINDOW=60000

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```
