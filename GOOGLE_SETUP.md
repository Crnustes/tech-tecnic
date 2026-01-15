# 🚀 Guía de Configuración Google (GTM, Analytics, Search Console, Ads)

## ✅ PASO 1: Google Tag Manager (GTM)

### 1.1 Crear cuenta GTM
1. Ve a [tagmanager.google.com](https://tagmanager.google.com)
2. **Crear cuenta** → Nombre: "Tech Tecnic"
3. **Crear contenedor** → Nombre: "www.techtecnic.com" → Web
4. Copia el **ID del contenedor** (ej: `GTM-XXXXXXX`)

### 1.2 Configurar en Vercel
1. Ve a tu proyecto en Vercel → **Settings** → **Environment Variables**
2. Añade:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
3. **Save** y **Redeploy**

### 1.3 Verificar GTM funciona
1. Instala **Google Tag Assistant** (extensión Chrome)
2. Abre tu sitio: www.techtecnic.com
3. Acepta las cookies en el banner
4. Verifica que GTM aparezca como "Working"

---

## ✅ PASO 2: Google Analytics 4 (GA4)

### 2.1 Crear propiedad GA4
1. Ve a [analytics.google.com](https://analytics.google.com)
2. **Admin** → **Crear propiedad**
3. Nombre: "Tech Tecnic"
4. Zona horaria: Colombia (GMT-5)
5. Moneda: COP
6. Selecciona **Web** → No crear Universal Analytics
7. **Crear flujo de datos web**:
   - URL: `www.techtecnic.com`
   - Nombre: "Tech Tecnic Website"
8. Copia el **ID de medición** (ej: `G-XXXXXXXXXX`)

### 2.2 Conectar GA4 con GTM
1. En GTM → **Etiquetas** → **Nueva**
2. Configuración:
   - **Tipo**: Google Analytics: configuración de GA4
   - **ID de medición**: `G-XXXXXXXXXX`
3. Activador: **All Pages**
4. **Guardar**

### 2.3 Configurar eventos de conversión en GTM

#### Evento: Envío de formulario de contacto
1. GTM → **Etiquetas** → **Nueva**
2. Configuración:
   - **Tipo**: Google Analytics: evento de GA4
   - **ID de medición**: `G-XXXXXXXXXX`
   - **Nombre del evento**: `form_submit`
   - **Parámetros**:
     ```
     event_category: Contact
     event_action: submit_contact_form
     ```
3. Activador: **Personalizado**
   - **Tipo**: Evento personalizado
   - **Nombre del evento**: `form_submit`
4. **Guardar**

#### Evento: Click en WhatsApp
1. GTM → **Etiquetas** → **Nueva**
2. Configuración:
   - **Tipo**: Google Analytics: evento de GA4
   - **ID de medición**: `G-XXXXXXXXXX`
   - **Nombre del evento**: `whatsapp_click`
3. Activador: **Personalizado**
   - **Tipo**: Evento personalizado
   - **Nombre del evento**: `whatsapp_click`
4. **Guardar**

#### Evento: Click en botón de cotización
1. GTM → **Etiquetas** → **Nueva**
2. Configuración:
   - **Tipo**: Google Analytics: evento de GA4
   - **Nombre del evento**: `quote_click`
3. Activador: **Personalizado**
   - **Tipo**: Evento personalizado
   - **Nombre del evento**: `pricing_button_click`
4. **Guardar**

### 2.4 Publicar cambios en GTM
1. GTM → **Enviar** (arriba derecha)
2. **Nombre de la versión**: "Configuración inicial GA4"
3. **Publicar**

### 2.5 Marcar eventos como conversiones en GA4
1. GA4 → **Admin** → **Eventos**
2. Marca como conversión:
   - ✅ `form_submit`
   - ✅ `whatsapp_click`
   - ✅ `quote_click`

---

## ✅ PASO 3: Google Search Console

### 3.1 Verificar propiedad
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. **Agregar propiedad** → Prefijo de URL: `https://www.techtecnic.com`
3. Método de verificación recomendado: **Etiqueta HTML**
4. Copia el código de verificación

### 3.2 Añadir código de verificación en Next.js
**OPCIÓN A: Via metadata** (más fácil)
1. Edita `src/app/layout.tsx`
2. En el objeto `metadata`, añade:
   ```typescript
   verification: {
     google: 'TU_CODIGO_DE_VERIFICACION_AQUI',
   },
   ```

**OPCIÓN B: Via GTM**
1. GTM → **Etiquetas** → **Nueva**
2. **HTML personalizado**
3. Pega el código `<meta name="google-site-verification" ...>`
4. Activador: **All Pages**
5. **Publicar**

### 3.3 Enviar sitemap
1. Search Console → **Sitemaps**
2. Añadir sitemap: `https://www.techtecnic.com/sitemap.xml`
3. **Enviar**
4. Espera 24-48h para indexación

---

## ✅ PASO 4: Preparar para Google Ads

### 4.1 Crear cuenta Google Ads
1. Ve a [ads.google.com](https://ads.google.com)
2. **Crear cuenta**
3. Configura facturación (Colombia)

### 4.2 Vincular GA4 con Google Ads
1. GA4 → **Admin** → **Vínculos de productos**
2. **Vincular Google Ads**
3. Selecciona tu cuenta de Ads
4. **Vincular**

### 4.3 Importar conversiones de GA4 a Google Ads
1. Google Ads → **Herramientas** → **Conversiones**
2. **Nueva conversión** → **Importar** → **Google Analytics 4**
3. Selecciona:
   - ✅ `form_submit`
   - ✅ `whatsapp_click`
   - ✅ `quote_click`
4. **Importar y continuar**

### 4.4 Configurar etiqueta de remarketing
1. Google Ads → **Herramientas** → **Audience Manager**
2. **Orígenes de audiencia**
3. **Configurar etiqueta de Google Ads**
4. **Usar Google Tag Manager**
5. En GTM:
   - **Nueva etiqueta** → **Remarketing de Google Ads**
   - **ID de conversión**: (copia del panel de Ads)
   - Activador: **All Pages**
   - **Publicar**

---

## ✅ PASO 5: Testing Final

### 5.1 Verificar que todo funciona
Usa **Google Tag Assistant** o **GA4 DebugView**:

1. Abre tu sitio en incógnito
2. Acepta cookies
3. Realiza estas acciones:
   - ✅ Navega por el sitio → Debe registrar `page_view`
   - ✅ Haz clic en WhatsApp → Debe registrar `whatsapp_click`
   - ✅ Envía formulario de contacto → Debe registrar `form_submit`
   - ✅ Haz clic en botón de cotización → Debe registrar `quote_click`

4. Verifica en GA4 DebugView (tiempo real):
   - GA4 → **Informes** → **Tiempo real**
   - Deberías ver los eventos apareciendo

### 5.2 Checklist de validación
- [ ] GTM carga correctamente (Tag Assistant)
- [ ] GA4 recibe eventos (DebugView)
- [ ] Search Console muestra sitemap enviado
- [ ] Conversiones aparecen en Google Ads
- [ ] Remarketing funciona (prueba después de 24h)

---

## 📊 MÉTRICAS CLAVE PARA GOOGLE ADS

### Conversiones principales
1. **Formulario de contacto** → Valor: $50 USD (lead cualificado)
2. **Click en WhatsApp** → Valor: $30 USD (contacto directo)
3. **Solicitud de cotización** → Valor: $40 USD (interés alto)

### Objetivos de campaña
- **CPA objetivo**: $20-40 USD por conversión
- **ROAS objetivo**: 300% (por cada $1 invertido, $3 de retorno)
- **Presupuesto inicial**: $10-20 USD/día

---

## 🎯 PRÓXIMOS PASOS

1. ✅ Implementar estas configuraciones
2. ✅ Dejar correr 1-2 semanas para recopilar datos
3. ✅ Crear campañas de Google Ads optimizadas
4. ✅ Monitorear y ajustar según performance

---

**¿Preguntas?** Sigue cada paso cuidadosamente. La configuración correcta de tracking es CRÍTICA para no desperdiciar dinero en Google Ads.
