# Tech Tecnic 

## Servicios modulares y escalables

Este proyecto ahora usa un catálogo centralizado de servicios con banderas de activación.

- Catálogo: `src/config/servicesCatalog.ts`
- Banderas (feature toggles): `src/config/features.ts`
- Menú dinámico: `src/config/servicios.ts` (deriva del catálogo)
- Home/Servicios: `src/components/Services.tsx` y `src/app/servicios/page.tsx` consumen el catálogo
- Landing de ejemplo: `src/app/servicios/chatbot-wp-ia/page.tsx`

### Activar/Desactivar servicios

Usa variables de entorno públicas (`.env.local`) para controlar disponibilidad:

```
NEXT_PUBLIC_ENABLE_CHATBOT_WP_IA=true
NEXT_PUBLIC_ENABLE_DASHBOARD=false
NEXT_PUBLIC_ENABLE_TRIAL=true
```

### Flujo para agregar un nuevo servicio

1. Agrega un objeto en `servicesCatalog.ts` con `id`, `title`, `slug`, `features`, `icon`, `color`, `enabled`, `showInMenu`.
2. Crea o reutiliza una landing en `src/app/servicios/<slug>/page.tsx`.
3. (Opcional) imágenes en `public/images` y precio en `servicesCatalog.ts`.
4. Ajusta `.env.local` para activar o desactivar.

### Comandos

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run start
```
