# Formulario de Administración del Blog

Este documento explica cómo usar el formulario de creación de artículos del blog en el panel de administración de Tech Tecnic.

## 🔐 Autenticación

El panel de administración está protegido por contraseña para garantizar la seguridad.

### Configuración de Contraseña

1. **Crea un archivo `.env.local`** en la raíz del proyecto
2. **Agrega la variable de entorno**:
   ```
   NEXT_PUBLIC_ADMIN_PASSWORD=tu_contraseña_segura_aqui
   ```
3. **Reinicia el servidor** de desarrollo

**⚠️ Importante**: Nunca uses contraseñas débiles. En producción, usa contraseñas complejas con mayúsculas, minúsculas, números y símbolos.

### Comportamiento de Autenticación

- **Sesión persistente**: La autenticación se mantiene por 24 horas
- **Auto-logout**: Después de 24 horas, deberás volver a ingresar la contraseña
- **Protección de intentos**: Máximo 3 intentos fallidos, luego bloqueo temporal de 30 segundos
- **Navegador seguro**: Las credenciales se almacenan localmente en el navegador

## 🔒 Seguridad

### Medidas Implementadas

- **Autenticación por contraseña**: Solo usuarios autorizados pueden acceder
- **Sesiones temporales**: Las sesiones expiran automáticamente
- **Protección contra fuerza bruta**: Límite de intentos de login
- **Almacenamiento local**: No se envían credenciales al servidor
- **Validación del lado cliente**: Verificación inmediata de contraseñas

### Recomendaciones de Seguridad

1. **Usa contraseñas fuertes**: Combina mayúsculas, minúsculas, números y símbolos
2. **Cambia regularmente**: Actualiza la contraseña periódicamente
3. **No compartas credenciales**: Cada usuario debe tener su propia contraseña
4. **Monitorea accesos**: Revisa logs de acceso si es necesario
5. **Usa HTTPS en producción**: Asegura que el sitio use HTTPS

### Variables de Entorno

```bash
# Archivo .env.local
NEXT_PUBLIC_ADMIN_PASSWORD=MiContraseñaSuperSegura123!
```

## Estructura de Archivos

```
src/
├── app/admin/blog/new/
│   └── page.tsx                 # Página principal del formulario
├── components/admin/
│   ├── AdminBlogClient.tsx      # Componente cliente con autenticación
│   ├── AdminLogin.tsx           # Componente de login
│   └── BlogForm.tsx             # Componente del formulario
├── hooks/
│   └── useAdminAuth.ts          # Hook de autenticación
├── types/
│   └── admin.ts                 # Tipos TypeScript para admin
└── config/
    └── admin.ts                 # Configuración del panel admin
```

## Acceso al Formulario

Para acceder al formulario de creación de artículos, navega a:
```
/admin/blog/new
```

## Campos del Formulario

### Información Básica
- **Título del Artículo**: Título principal del artículo (10-100 caracteres)
- **Slug/URL**: URL amigable generada automáticamente desde el título (solo letras minúsculas, números y guiones)
- **Categoría**: Selecciona una categoría del artículo
- **Tags**: Palabras clave relacionadas con el contenido (mínimo 1, máximo 10)

### Contenido
- **Resumen/Excerpt**: Descripción breve del artículo (50-300 caracteres)
- **Contenido**: Contenido completo del artículo en formato Markdown o HTML (mínimo 500 caracteres)
- **Imagen Destacada**: URL de la imagen principal del artículo (opcional)

### Configuración SEO
- **Título SEO**: Título personalizado para motores de búsqueda (máximo 60 caracteres)
- **Descripción SEO**: Descripción para resultados de búsqueda (máximo 160 caracteres)
- **Keywords SEO**: Palabras clave adicionales para SEO (máximo 10)

### Configuración de Publicación
- **Fecha de Publicación**: Fecha programada para la publicación
- **Estado**: "Borrador" o "Publicado"

## Funcionalidades

### Generación Automática de Slug
El slug se genera automáticamente desde el título, convirtiendo:
- Mayúsculas a minúsculas
- Espacios a guiones
- Caracteres especiales a su equivalente sin acentos
- Caracteres no alfanuméricos se eliminan

### Sistema de Tags
- **Agregar Tags**: Escribe un tag y presiona Enter o el botón "+"
- **Tags Sugeridos**: Lista de tags populares para seleccionar rápidamente
- **Eliminar Tags**: Haz clic en la "X" del tag que deseas remover
- **Validación**: Mínimo 1 tag, máximo 10 tags

### Vista Previa
- **Botón "Vista Previa"**: Muestra cómo se verá el artículo publicado
- **Vista Completa**: Incluye título, categoría, tags, resumen y contenido
- **Volver al Editor**: Regresa al formulario para hacer cambios

### Validación en Tiempo Real
- Mensajes de error específicos para cada campo
- Contadores de caracteres para campos con límites
- Validación de formato (URLs, slugs, etc.)

### Estados de Envío
- **Guardar Borrador**: Guarda el artículo como borrador sin publicarlo
- **Publicar**: Publica el artículo inmediatamente
- **Indicador de Carga**: Muestra progreso durante el envío

## 🚀 Cómo Usar

### Primera Prueba

Para probar el sistema inmediatamente:

1. **Ve a la URL**: `http://localhost:3000/admin/blog/new`
2. **Ingresa la contraseña**: `TechTecnic2024!` (contraseña por defecto)
3. **Accede al formulario**: Deberías ver la interfaz de creación de artículos
4. **Prueba todas las funcionalidades**: Vista previa, validación, tags, etc.

### Cambiar la Contraseña

1. **Edita el archivo** `.env.local`
2. **Cambia el valor** de `NEXT_PUBLIC_ADMIN_PASSWORD`
3. **Reinicia el servidor** de desarrollo
4. **Usa la nueva contraseña** para acceder

### Flujo Completo de Trabajo

1. **Ingresa el Título**: Se genera automáticamente el slug
2. **Selecciona Categoría**: Elige la categoría más apropiada
3. **Agrega Tags**: Selecciona tags sugeridos o crea nuevos
4. **Escribe el Resumen**: Resume el contenido principal
5. **Redacta el Contenido**: Escribe el artículo completo
6. **Configura SEO**: Optimiza para motores de búsqueda
7. **Vista Previa**: Revisa cómo se verá el artículo
8. **Guarda o Publica**: Elige entre borrador o publicación inmediata

## Validaciones Implementadas

- **Título**: 10-100 caracteres
- **Slug**: 3+ caracteres, solo letras minúsculas, números y guiones
- **Categoría**: Obligatoria
- **Tags**: 1-10 tags
- **Resumen**: 50-300 caracteres
- **Contenido**: 500+ caracteres
- **Imagen**: URL válida (opcional)
- **Título SEO**: Máximo 60 caracteres
- **Descripción SEO**: Máximo 160 caracteres

## Tecnologías Utilizadas

- **React Hook Form**: Manejo eficiente del formulario
- **Zod**: Validación de esquemas
- **TypeScript**: Tipado fuerte
- **Tailwind CSS**: Estilos consistentes
- **Lucide React**: Iconos modernos

## Próximas Funcionalidades

- Carga de imágenes directamente al formulario
- Editor de texto enriquecido (Markdown/WYSIWYG)
- Programación de publicaciones
- Vista previa en tiempo real
- Integración con CMS externo
- Historial de versiones

## Configuración y Personalización

### Archivo de Configuración (`src/config/admin.ts`)
Contiene todas las configuraciones del panel de administración:
- Límites de caracteres para campos
- URLs de API
- Flags de funcionalidades activas/desactivas

### Tipos TypeScript (`src/types/admin.ts`)
Define las interfaces y tipos utilizados:
- `BlogPost`: Estructura completa de un artículo
- `BlogFormData`: Datos del formulario
- Constantes para categorías y tags sugeridos

### Personalización
Para modificar límites o agregar nuevas categorías:
1. Edita `src/config/admin.ts` para límites
2. Actualiza `src/types/admin.ts` para nuevas categorías/tags
3. El formulario se actualizará automáticamente