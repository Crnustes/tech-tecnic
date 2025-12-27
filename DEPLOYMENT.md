# Tech Tecnic - Deployment Guide

Guía completa para desplegar el sitio a producción en Vercel.

---

## 📋 Pre-requisitos

- [ ] Node.js 18+ instalado
- [ ] Cuenta en Vercel (https://vercel.com)
- [ ] Cuenta en Resend (https://resend.com) para emails
- [ ] Google Analytics configurado (opcional pero recomendado)
- [ ] Dominio personalizado (opcional)

---

## 🚀 Pasos de Deployment

### 1. Preparación Local

```bash
# 1. Instalar dependencias
npm install

# 2. Crear build de producción
npm run build

# 3. Verificar que no hay errores
npm run start

# 4. Abrir http://localhost:3000 y verificar todo funciona
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env.production` con:

```env
# REQUERIDO: URL del sitio
NEXT_PUBLIC_SITE_URL=https://tudominio.com

# REQUERIDO: Email API (Resend)
RESEND_API_KEY=re_tu_api_key_aqui
CONTACT_EMAIL_TO=contacto@tudominio.com
CONTACT_EMAIL_FROM=noreply@tudominio.com

# RECOMENDADO: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# OPCIONAL: Rate limiting
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW=60000

# OPCIONAL: WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```

### 3. Deploy a Vercel (Opción A: Interfaz Web)

1. **Conectar repositorio:**
   - Ve a https://vercel.com/new
   - Conecta tu cuenta de GitHub/GitLab/Bitbucket
   - Selecciona el repositorio `tech-tecnic`

2. **Configurar proyecto:**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variables de entorno:**
   - Settings → Environment Variables
   - Agrega todas las variables del archivo `.env.production`
   - Asegúrate de seleccionar los 3 entornos: Production, Preview, Development

4. **Deploy:**
   - Click "Deploy"
   - Espera 2-3 minutos
   - ¡Sitio live en `https://tu-proyecto.vercel.app`!

### 4. Deploy a Vercel (Opción B: CLI)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy a producción
vercel --prod

# 4. Seguir las instrucciones en pantalla
```

### 5. Configurar Dominio Personalizado

1. **En Vercel:**
   - Settings → Domains
   - Add Domain: `tudominio.com`
   - Vercel te dará los DNS records necesarios

2. **En tu registrador de dominios (GoDaddy, Namecheap, etc):**
   
   **Opción A: Usar Vercel DNS (Recomendado)**
   ```
   Cambiar nameservers a:
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   **Opción B: Configurar records manualmente**
   ```
   Tipo A:
   @ → 76.76.21.21

   Tipo CNAME:
   www → cname.vercel-dns.com
   ```

3. **Verificar:**
   - La propagación DNS toma 1-48 horas
   - Verificar en: https://www.whatsmydns.net

4. **SSL/HTTPS:**
   - Vercel automáticamente genera certificado SSL
   - Tu sitio estará disponible en `https://tudominio.com`

---

## ✅ Post-Deployment Checklist

### Verificación Técnica
- [ ] Sitio accesible en el dominio
- [ ] HTTPS funcionando (candado verde)
- [ ] Formulario de contacto envía emails
- [ ] WhatsApp button abre chat correctamente
- [ ] Todas las imágenes se cargan
- [ ] No hay errores en consola del navegador
- [ ] Animaciones funcionan correctamente
- [ ] Responsive en móvil, tablet, desktop

### SEO y Analytics
- [ ] Google Analytics recibiendo datos
- [ ] Google Search Console verificado
- [ ] Sitemap enviado: `https://tudominio.com/sitemap.xml`
- [ ] Robots.txt accesible: `https://tudominio.com/robots.txt`
- [ ] Meta tags verificados con https://metatags.io
- [ ] Open Graph funcionando (compartir en Facebook)
- [ ] Twitter Cards funcionando (compartir en Twitter/X)

### Performance
- [ ] Lighthouse Score: 90+ (https://pagespeed.web.dev)
- [ ] Core Web Vitals: Verdes
- [ ] Images optimizadas y lazy loading
- [ ] Fonts cargando correctamente

### Seguridad
- [ ] Security headers activos (verificar con https://securityheaders.com)
- [ ] No hay warnings en la consola
- [ ] API rate limiting funcionando
- [ ] Variables de entorno protegidas (no visibles en código fuente)

---

## 📊 Configurar Google Analytics

### 1. Crear Propiedad GA4

1. Ve a https://analytics.google.com
2. Admin → Create Property
3. Nombre: "Tech Tecnic"
4. Zona horaria: America/Bogota (o tu zona)
5. Moneda: COP (peso colombiano)
6. Create → Get Measurement ID
7. Copia el ID: `G-XXXXXXXXXX`

### 2. Agregar a Vercel

```bash
# Variable de entorno en Vercel:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Verificar que funciona

1. Abre tu sitio en navegador
2. Abre DevTools → Network
3. Busca request a `google-analytics.com/g/collect`
4. En GA4: Realtime → Overview (deberías verte como usuario activo)

---

## 📧 Configurar Emails (Resend)

### 1. Crear cuenta Resend

1. Ve a https://resend.com
2. Sign up (gratis hasta 100 emails/día)
3. Verifica tu email

### 2. Agregar y verificar dominio

1. Domains → Add Domain
2. Ingresa tu dominio: `tudominio.com`
3. Agrega los DNS records en tu registrador:
   ```
   Tipo TXT:
   @ → v=spf1 include:resend.com ~all
   
   Tipo TXT:
   resend._domainkey → [valor que te da Resend]
   ```
4. Espera verificación (10 min - 24 horas)

### 3. Crear API Key

1. API Keys → Create API Key
2. Nombre: "Tech Tecnic Production"
3. Permissions: Sending access
4. Copia el key: `re_xxxxxxxxxxxx`

### 4. Agregar a Vercel

```bash
# Variables de entorno en Vercel:
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=contacto@tudominio.com
CONTACT_EMAIL_FROM=noreply@tudominio.com
```

### 5. Probar

1. Ve a tu sitio → Página de contacto
2. Llena el formulario
3. Envía
4. Deberías recibir email en `contacto@tudominio.com`
5. Verifica en Resend Dashboard → Logs

---

## 🔄 Actualizar Sitio (CI/CD Automático)

Vercel hace auto-deploy cada vez que haces push:

```bash
# 1. Hacer cambios locales
# 2. Commitear
git add .
git commit -m "Actualización de contenido"

# 3. Push a main/master
git push origin main

# 4. Vercel automáticamente:
#    - Detecta el push
#    - Hace build
#    - Deploy a producción
#    - Disponible en 2-3 minutos
```

### Ver progreso del deploy:
1. Ve a Vercel Dashboard
2. Selecciona tu proyecto
3. Deployments → Ver logs en tiempo real

---

## 🐛 Troubleshooting

### Build falla en Vercel

**Error: "Module not found"**
```bash
# Solución: Verificar dependencias
npm install
npm run build
# Si funciona local, commitear package-lock.json
git add package-lock.json
git commit -m "Fix dependencies"
git push
```

**Error: "Environment variable not found"**
```bash
# Solución: Verificar variables en Vercel
# Settings → Environment Variables
# Asegúrate que estén en "Production" environment
# Redeploy después de agregar
```

### Emails no llegan

1. Verificar Resend API key correcta
2. Verificar dominio verificado en Resend
3. Revisar spam/promociones
4. Verificar logs en Resend Dashboard
5. Probar con curl:
```bash
curl -X POST https://tudominio.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

### Google Analytics no registra visitas

1. Verificar `NEXT_PUBLIC_GA_ID` correcto
2. Abrir DevTools → Network → Buscar `google-analytics.com`
3. Verificar que no hay ad-blockers
4. Esperar 24 horas (GA4 puede tardar en actualizar)

### Dominio no resuelve

1. Verificar DNS propagation: https://www.whatsmydns.net
2. Esperar hasta 48 horas para propagación completa
3. Verificar nameservers o A records correctos
4. Limpiar caché DNS local:
```bash
# Windows
ipconfig /flushdns

# Mac
sudo dscacheutil -flushcache

# Linux
sudo systemd-resolve --flush-caches
```

---

## 📱 Monitoreo Post-Launch

### Herramientas Recomendadas

1. **Uptime Monitoring:**
   - UptimeRobot (https://uptimerobot.com) - Gratis
   - Pingdom

2. **Error Tracking:**
   - Sentry (https://sentry.io) - Gratis hasta 5K errores/mes
   - LogRocket

3. **Analytics:**
   - Google Analytics 4 (configurado)
   - Microsoft Clarity (gratis, mapas de calor)

4. **SEO Monitoring:**
   - Google Search Console (esencial)
   - Ahrefs o SEMrush (de pago)

---

## 🎯 Métricas de Éxito (Primer Mes)

- **Tráfico:** 500+ visitantes
- **Bounce Rate:** < 60%
- **Avg. Session:** > 2 minutos
- **Form Submissions:** 2-5% de visitantes
- **Lighthouse Score:** 90+ en todas las métricas
- **Indexación:** 100% de páginas en Google

---

**¿Necesitas ayuda?**
- Documentación Vercel: https://vercel.com/docs
- Documentación Next.js: https://nextjs.org/docs
- Support: contacto@techtecnic.com
