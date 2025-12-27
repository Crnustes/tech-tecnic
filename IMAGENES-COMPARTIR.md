# 🔗 Configuración para Compartir en Redes Sociales

## Imágenes Necesarias

### 1. Imagen Principal del Sitio
**Archivo**: `/public/og-image.jpg` o `/public/og-image.webp`
- **Tamaño**: 1200 × 630 px (ratio 1.91:1)
- **Formato**: JPG o WebP
- **Peso máximo**: 1 MB
- **Contenido sugerido**: Logo de Tech Tecnic + Slogan "Desarrollo Web, IA y Automatización" + Diseño tech moderno con gradientes cyan

### 2. Imágenes de Posts del Blog
**Ubicación**: `/public/images/blog/`
**Tamaño**: 1200 × 630 px cada una

Ya tienes configurados estos nombres (solo cambia .webp por lo que necesites para compartir):
1. `ia-revolucion-desarrollo-web-2024.webp` (1200×630)
2. `seo-local-google-my-business-bogota.webp` (1200×630)
3. `automatizacion-procesos-reduce-costos.webp` (1200×630)
4. `nextjs-14-nuevas-caracteristicas.webp` (1200×630)
5. `apps-moviles-vs-web-responsive.webp` (1200×630)
6. `ecommerce-colombia-tendencias-2025.webp` (1200×630)
7. `mantenimiento-web-preventivo.webp` (1200×630)
8. `react-server-components-futuro-desarrollo-web.webp` (1200×630)
9. `chatgpt-para-desarrolladores-guia-completa.webp` (1200×630)
10. `core-web-vitals-guia-completa-optimizacion.webp` (1200×630)
11. `automatizacion-marketing-zapier.webp` (1200×630)
12. `pwa-apps-web-progresivas-guia-completa.webp` (1200×630)
13. `tailwind-css-por-que-lo-amamos.webp` (1200×630)

## Cómo se verá al compartir

### Twitter/X
- ✅ Imagen grande (1200×630)
- ✅ Título del post
- ✅ Descripción corta
- ✅ URL

### Facebook/LinkedIn
- ✅ Imagen destacada
- ✅ Título
- ✅ Descripción
- ✅ Nombre del sitio

### WhatsApp
- ✅ Vista previa con imagen
- ✅ Título y descripción

## Herramientas para Crear las Imágenes

### Opción 1: Canva (Recomendado)
1. Crear diseño → Tamaño personalizado → 1200 × 630 px
2. Plantilla: "Facebook Post" o "Twitter Header"
3. Elementos: Logo + Título del post + Fondo tech

### Opción 2: Figma
1. Frame de 1200 × 630 px
2. Diseño con gradientes cyan/tech
3. Exportar como JPG o WebP

### Opción 3: Photoshop
- Canvas: 1200 × 630 px, 72 DPI
- Color mode: RGB

## Recomendaciones de Diseño

### Para og-image.jpg (imagen principal)
```
+----------------------------------+
|                                  |
|    [Logo Tech Tecnic]           |
|                                  |
|  Desarrollo Web, IA y           |
|  Automatización en LATAM        |
|                                  |
|  [Gradiente tech cyan/dark]     |
+----------------------------------+
```

### Para posts del blog
```
+----------------------------------+
|  Tech Tecnic                     |
|                                  |
|  [TÍTULO DEL POST]              |
|  Grande y legible               |
|                                  |
|  Categoría: [SEO/IA/Dev]        |
|  [Icono relacionado]            |
+----------------------------------+
```

## Validar las imágenes

### Herramientas de validación:
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/

### Pasos:
1. Sube las imágenes a `/public/og-image.jpg` y `/public/images/blog/`
2. Haz deploy del sitio
3. Valida cada URL en las herramientas anteriores
4. Si no aparece, espera 24h o usa "Scrape Again" / "Refresh"

## Estado Actual

- ✅ Metadatos Open Graph configurados
- ✅ Twitter Cards configurados
- ✅ URLs canónicas definidas
- ❌ Imagen principal del sitio (og-image.jpg) - **PENDIENTE**
- ❌ Imágenes de posts del blog (1200×630) - **PENDIENTE**

## Próximos Pasos

1. Crear `/public/og-image.jpg` (1200×630)
2. Crear imágenes de blog (1200×630) con los nombres listados arriba
3. Subir al sitio
4. Validar en Facebook/Twitter/LinkedIn
5. Compartir y verificar que se vea correctamente

---

**Nota**: Las imágenes pueden ser en formato JPG o WebP. El código ya está configurado para usarlas automáticamente.
