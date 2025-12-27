# Guía de Imágenes Requeridas - Tech Tecnic

Esta guía lista todas las imágenes que necesitas crear antes del deployment.

---

## 🔴 CRÍTICO - Iconos del Sitio

### Favicon Principal
- **Archivo:** `/public/favicon.ico`
- **Tamaño:** 32×32px (multi-size: 16, 32, 48)
- **Formato:** ICO
- **Contenido:** Logo de Tech Tecnic simplificado
- **Herramienta:** https://realfavicongenerator.net

### Apple Touch Icon
- **Archivo:** `/public/apple-touch-icon.png`
- **Tamaño:** 180×180px
- **Formato:** PNG
- **Contenido:** Logo sobre fondo sólido (no transparente)
- **Uso:** iOS home screen

### Android Chrome Icons
- **Archivos:** 
  - `/public/android-chrome-192x192.png` (192×192px)
  - `/public/android-chrome-512x512.png` (512×512px)
- **Formato:** PNG con transparencia
- **Contenido:** Logo de Tech Tecnic
- **Uso:** PWA, Android home screen

### Microsoft Tile
- **Archivo:** `/public/mstile-150x150.png`
- **Tamaño:** 150×150px
- **Formato:** PNG
- **Contenido:** Logo sobre fondo #6366f1
- **Uso:** Windows Start Menu

---

## 🔴 CRÍTICO - Open Graph Image

### Imagen Principal de Compartir
- **Archivo:** `/public/og-image.jpg`
- **Tamaño:** 1200×630px
- **Formato:** JPG (optimizado, <1MB)
- **Contenido:**
  ```
  - Logo de Tech Tecnic (prominente)
  - Texto: "Desarrollo Web, IA y Automatización"
  - Subtítulo: "Latinoamérica"
  - Fondo: Gradiente azul/morado (#6366f1 → #ec4899)
  - Elementos: Gráficos tech (código, IA, automatización)
  ```
- **Uso:** Facebook, Twitter, WhatsApp, LinkedIn al compartir
- **Herramienta:** Canva (template: https://www.canva.com/templates/EAE7tK6Hy-Y-blue-and-pink-gradient-modern-facebook-post/)

---

## ⚠️ IMPORTANTE - Imágenes de Blog

### Posts Existentes (6/13)
✅ ia-revolucion-desarrollo-web-2024.webp
✅ seo-local-google-my-business-bogota.webp
✅ automatizacion-procesos-reduce-costos.webp
✅ apps-moviles-vs-web-responsive.webp
✅ ecommerce-colombia-tendencias-2025.webp
✅ nextjs-14-nuevas-caracteristicas.webp

### Posts Faltantes (7/13)
❌ mantenimiento-web-preventivo.webp
❌ react-server-components-futuro-desarrollo-web.webp
❌ chatgpt-para-desarrolladores-guia-completa.webp
❌ core-web-vitals-guia-completa-optimizacion.webp
❌ automatizacion-marketing-zapier.webp
❌ pwa-apps-web-progresivas-guia-completa.webp
❌ tailwind-css-por-que-lo-amamos.webp

### Especificaciones de Imágenes de Blog
- **Ubicación:** `/public/images/blog/`
- **Tamaño:** 1200×630px (mismo que OG image)
- **Formato:** WebP (mejor compresión)
- **Peso:** <200KB cada una
- **Contenido sugerido:**
  - Título del post (legible)
  - Ícono o imagen relacionada al tema
  - Logo pequeño de Tech Tecnic
  - Gradiente de marca como fondo
- **Herramienta:** Canva o Figma

---

## 📝 Checklist de Creación

### Paso 1: Diseño de Favicon (30 min)
```
1. Diseñar logo simplificado en 512×512px
2. Exportar en PNG con transparencia
3. Usar https://realfavicongenerator.net para generar:
   - favicon.ico
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - mstile-150x150.png
4. Descargar y colocar en /public/
```

### Paso 2: Diseño de OG Image (45 min)
```
1. Abrir Canva → Buscar "Facebook Post" (1200×630)
2. Diseño sugerido:
   - Fondo: Gradiente tech (usar colores de marca)
   - Centro: Logo grande de Tech Tecnic
   - Arriba: "Tech Tecnic" en font bold
   - Centro: "Desarrollo Web, IA y Automatización"
   - Abajo: "🌎 Latinoamérica"
   - Elementos decorativos: Código binario, chips, redes
3. Exportar como JPG (calidad 90%)
4. Optimizar con https://tinyjpg.com
5. Renombrar a og-image.jpg
6. Colocar en /public/
```

### Paso 3: Imágenes de Blog (2-3 horas)
```
Para cada post faltante:

1. Template base (crear una vez, reutilizar):
   - Tamaño: 1200×630px
   - Fondo: Gradiente de marca
   - Área superior: Para título (400px height)
   - Área inferior: Para imagen/ícono (230px height)
   - Logo esquina inferior derecha (80×80px)

2. Contenido específico por post:
   - mantenimiento-web-preventivo.webp
     → Imagen: Herramientas, engranajes
     → Color: Azul/verde
   
   - react-server-components-futuro-desarrollo-web.webp
     → Imagen: Logo React, servidor
     → Color: Cyan/azul
   
   - chatgpt-para-desarrolladores-guia-completa.webp
     → Imagen: Robot, código, cerebro IA
     → Color: Verde/morado
   
   - core-web-vitals-guia-completa-optimizacion.webp
     → Imagen: Velocímetro, gráficas
     → Color: Verde/amarillo
   
   - automatizacion-marketing-zapier.webp
     → Imagen: Conexiones, workflows
     → Color: Naranja/morado
   
   - pwa-apps-web-progresivas-guia-completa.webp
     → Imagen: Móvil, nube, web
     → Color: Azul/cyan
   
   - tailwind-css-por-que-lo-amamos.webp
     → Imagen: CSS, diseño responsivo
     → Color: Cyan/azul

3. Exportar cada una:
   - Formato: WebP (Canva Pro) o PNG→WebP con https://squoosh.app
   - Calidad: 80-85%
   - Verificar peso <200KB
   - Renombrar según slug del post
   - Colocar en /public/images/blog/
```

---

## 🛠️ Herramientas Recomendadas

### Diseño
- **Canva Pro:** Templates profesionales, exporta WebP
  - https://www.canva.com
- **Figma:** Diseño más avanzado
  - https://www.figma.com
- **Photopea:** Photoshop gratis online
  - https://www.photopea.com

### Generación de Favicons
- **RealFaviconGenerator:** Genera todos los formatos
  - https://realfavicongenerator.net
- **Favicon.io:** Favicon desde texto o emoji
  - https://favicon.io

### Optimización
- **TinyJPG/TinyPNG:** Comprime JPG/PNG sin pérdida visible
  - https://tinyjpg.com
- **Squoosh:** Convierte a WebP/AVIF, excelente compresión
  - https://squoosh.app
- **ImageOptim (Mac):** Optimización por lotes
  - https://imageoptim.com

### Verificación
- **Facebook Debugger:** Verifica OG image
  - https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** Verifica Twitter Cards
  - https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** Verifica compartir LinkedIn
  - https://www.linkedin.com/post-inspector/

---

## ✅ Validación Final

Después de crear todas las imágenes:

### Check Local
```bash
# Verificar que existen
ls public/favicon.ico
ls public/og-image.jpg
ls public/apple-touch-icon.png
ls public/android-chrome-192x192.png
ls public/android-chrome-512x512.png
ls public/images/blog/*.webp

# Verificar tamaños
du -h public/*.{ico,jpg,png}
du -h public/images/blog/*.webp

# Todos deberían ser <1MB, idealmente <200KB cada uno
```

### Check Visual
1. Abrir sitio local: http://localhost:3000
2. Verificar favicon en tab del navegador
3. Abrir DevTools → Application → Manifest
4. Verificar todos los icons cargan correctamente

### Check Compartir
1. Usar Facebook Debugger con tu URL
2. Verificar que og-image.jpg se ve correctamente
3. Probar compartir en WhatsApp (preview debe mostrar imagen)
4. Probar en LinkedIn Post Inspector

---

## 💡 Tips de Diseño

### Colores de Marca
```css
Primary: #6366f1 (Azul índigo)
Accent: #ec4899 (Rosa)
Secondary: #f59e0b (Naranja)
Dark: #0a0b1e (Fondo oscuro)
```

### Fonts Recomendadas
- **Títulos:** Inter Bold/Black
- **Cuerpo:** Inter Regular/Medium
- **Código:** JetBrains Mono, Fira Code

### Elementos Visuales
- Gradientes suaves (no muy saturados)
- Íconos flat style
- Gráficos tech: circuitos, código, redes
- Sin stock photos genéricas (usar ilustraciones)

---

## 📊 Impacto de Buenas Imágenes

Tener imágenes optimizadas de alta calidad impacta directamente en:

✅ **CTR en redes sociales:** +300% más clicks con buena OG image
✅ **Perceived quality:** Sitio se ve 10x más profesional
✅ **Trust:** Usuarios confían más en contenido con imágenes
✅ **SEO:** Google Image Search es fuente de tráfico
✅ **Sharing:** Posts con imágenes se comparten 40x más

**Tiempo total estimado:** 4-6 horas
**ROI:** Invaluable - Primera impresión es crítica

---

¿Necesitas ayuda con diseño? Contrata un diseñador en:
- Fiverr: $15-50 USD por set completo
- Upwork: $30-100 USD por hora
- 99designs: Concurso desde $299 USD
