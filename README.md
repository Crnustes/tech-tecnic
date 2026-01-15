#  Tech Tecnic - Web Agency Site

Plataforma moderna y escalable de agencia web construida con **Next.js 16**, **TypeScript 5** y **Tailwind CSS**. Diseñada para presentar servicios profesionales con enfoque en rendimiento, accesibilidad y cumplimiento legal.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

##  Tabla de Contenidos

- [Características](#características)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Servicios Modulares](#servicios-modulares)
- [Compliance](#compliance-y-seguridad)
- [Deployment](#deployment)

---

##  Características

###  Core Features
- **8 Servicios Landing Pages** - Responsivas y SEO optimizadas
- **Cookie Consent Manager** - Gestión completa de consentimiento
- **GTM Integration** - Google Tag Manager con bloqueo condicional
- **Legal Compliance** - 5 páginas de conformidad legal
- **Responsive Design** - Mobile-first con todos los breakpoints
- **Dark UI** - Tema moderno con gradientes

###  Seguridad & Compliance
-  Ley 1581/2012 (Protección de Datos - Colombia)
-  Decreto 1377/2013 (Habeas Data)
-  GDPR principles
-  Consentimiento explícito para analytics
-  Cookies HttpOnly + SameSite=Lax

---

##  Instalación

\\\ash
git clone https://github.com/tu-org/webtechtecnic.git
cd webtechtecnic
npm install
npm run dev
\\\

---

##  Configuración

\\\env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_ENABLE_DESARROLLO_WEB=true
NEXT_PUBLIC_ENABLE_SEO_GEO=true
NEXT_PUBLIC_ENABLE_AUTOMATIZACIONES=true
NEXT_PUBLIC_ENABLE_INTEGRACIONES=true
NEXT_PUBLIC_ENABLE_MANTENIMIENTO=true
NEXT_PUBLIC_ENABLE_APPS_MOVILES=true
NEXT_PUBLIC_ENABLE_AUTOMATIZACION_IA=true
NEXT_PUBLIC_ENABLE_CHATBOT_WP_IA=true
NEXT_PUBLIC_CONTACT_EMAIL=contacto@webtechtecnic.com
\\\

---

##  Servicios Modulares

Sistema de feature toggles para activar/desactivar servicios dinámicamente desde \.env.local\

---

##  Compliance

5 páginas legales completamente implementadas con cumplimiento colombiano y GDPR

---

##  Scripts

\\\ash
npm run dev      # Desarrollo
npm run build    # Build
npm run start    # Producción
\\\

---

##  Deployment

### Deploy en Vercel (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/webtechtecnic.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) y haz login con GitHub
   - Click en **"Add New Project"**
   - Selecciona tu repositorio `webtechtecnic`
   - Vercel detecta Next.js automáticamente

3. **Configura variables de entorno en Vercel:**
   - En el dashboard del proyecto → **Settings** → **Environment Variables**
   - Añade:
     ```
     RESEND_API_KEY=tu_clave_resend
     CONTACT_EMAIL=info@tudominio.com
     NEXT_PUBLIC_SITE_URL=https://tudominio.com
     NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
     ```

4. **Deploy:**
   - Click **"Deploy"**
   - ¡Listo! Tu sitio estará en línea en ~2 minutos

5. **Dominio personalizado:**
   - En Vercel: **Settings** → **Domains**
   - Añade tu dominio de Hostinger
   - Configura los DNS en Hostinger según las instrucciones

---

**Hecho con  por Tech Tecnic**
