# 🔐 Guía de Acceso al Panel Admin

## 🌐 URLs del Sistema

### En Desarrollo (Local)
```
Panel Principal:     http://localhost:3001/admin
Dashboard de Leads:  http://localhost:3001/admin/leads
Blog Admin:          http://localhost:3001/admin/blog
```

### En Producción
```
Panel Principal:     https://tu-dominio.com/admin
Dashboard de Leads:  https://tu-dominio.com/admin/leads
Blog Admin:          https://tu-dominio.com/admin/blog
```

---

## 📱 Durante una Reunión con Cliente

### Opción 1: Laptop/Tablet (Recomendado)
```
1. Tener el navegador abierto antes de la reunión
2. Ir a: http://localhost:3001/admin/leads
3. Durante la llamada, llenar el formulario Discovery en tiempo real
4. El cliente no ve tu pantalla (solo audio/video)
```

### Opción 2: Segunda Pantalla
```
1. Pantalla 1: Zoom/Meet con el cliente
2. Pantalla 2: Admin panel con formulario
3. Llenar mientras conversas
```

### Opción 3: Mobile/Tablet
```
1. Unirte a la reunión desde el teléfono/tablet
2. Usar laptop/desktop para llenar formulario
3. O viceversa
```

---

## 🎯 Flujo Durante la Reunión

### ANTES de la reunión (5 minutos)
1. Abrir navegador
2. Ir a `http://localhost:3001/admin/leads`
3. Buscar el lead del cliente
4. Hacer click en "Ver detalles"
5. Revisar la información del formulario inicial
6. Tener el protocolo abierto: `PROTOCOLO-PRIMERA-REUNION.md`

### DURANTE la reunión (45-60 min)
```
Minuto 0-5:   Introducción (sin llenar nada)
Minuto 5-15:  Descubrimiento → Tomar notas mentales
Minuto 15-30: Requerimientos → LLENAR FORMULARIO DISCOVERY
Minuto 30-45: Presupuesto/Timeline → Agregar notas
Minuto 45-60: Próximos pasos → Actualizar estado del lead
```

### Cómo llenar el formulario en vivo:

**Opción A - Durante la reunión:**
```javascript
// En el dashboard de leads
1. Click en el lead
2. Click en "Llenar Formulario Discovery"
3. Ir llenando mientras el cliente responde
4. Guardar al final
```

**Opción B - Después de la reunión:**
```javascript
// Mejor si quieres enfocarte 100% en el cliente
1. Durante reunión: Solo tomar notas en papel/app de notas
2. Después de colgar: Llenar formulario con toda la info
3. Más natural, menos distracciones
```

### DESPUÉS de la reunión (10 minutos)
1. Completar campos faltantes del discovery
2. Agregar notas adicionales
3. Cambiar estado del lead a "En Discovery"
4. Enviar email de seguimiento

---

## 🖥️ Acceso Rápido desde Cualquier Lugar

### Bookmark estas URLs:
```
👉 Admin:  http://localhost:3001/admin
👉 Leads:  http://localhost:3001/admin/leads
```

### Atajos de Teclado (próximamente):
```
Ctrl/Cmd + K       → Búsqueda rápida
Ctrl/Cmd + N       → Nuevo lead
Ctrl/Cmd + S       → Guardar formulario
Esc                → Cerrar modal
```

---

## 🔒 Seguridad Actual

### ⚠️ IMPORTANTE: Sin Autenticación

Actualmente **NO HAY LOGIN**. Cualquiera con la URL puede acceder.

**Para desarrollo local**: OK (solo tú tienes acceso)
**Para producción**: ❌ NECESITAS AUTENTICACIÓN

### Opciones de Seguridad:

#### 1. NextAuth (Recomendado - Fácil)
```bash
npm install next-auth
```

#### 2. Supabase Auth (Si usas Supabase)
```bash
# Ya incluido si instalaste @supabase/supabase-js
```

#### 3. Simple Password (Rápido para empezar)
```typescript
// middleware.ts
const ADMIN_PASSWORD = 'tu-password-seguro';
```

#### 4. IP Whitelist (Solo tu oficina/casa)
```typescript
// middleware.ts
const ALLOWED_IPS = ['tu-ip-aqui'];
```

---

## 🚀 Setup Rápido para Producción

### Paso 1: Proteger con Password Simple (10 min)

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Solo proteger rutas /admin/*
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // Verificar si ya está autenticado
    const isAuthenticated = request.cookies.get('admin-auth');
    
    if (!isAuthenticated) {
      // Redirigir a login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
```

### Paso 2: Crear Página de Login

```typescript
// src/app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      router.push('/admin');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          🔐 Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
          />
          {error && (
            <p className="text-red-600 text-sm mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
```

### Paso 3: API de Auth

```typescript
// src/app/api/admin/auth/route.ts
import { NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'cambiar-en-produccion';

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    
    // Establecer cookie de autenticación
    response.cookies.set('admin-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 horas
    });

    return response;
  }

  return NextResponse.json(
    { error: 'Contraseña incorrecta' },
    { status: 401 }
  );
}
```

### Paso 4: Variable de Entorno

```bash
# .env.local
ADMIN_PASSWORD=tu-password-super-seguro-aqui
```

---

## 📱 Acceso Mobile

### Responsive Design
El dashboard está optimizado para:
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

### Tips para Tablets/iPads:
```
1. Usar en modo landscape (horizontal)
2. Zoom out si es necesario (pinch)
3. Los formularios son scrollables
4. Botones grandes para touch
```

---

## 🎬 Tutorial en Video (Crear después)

### Videos a grabar:
1. ✅ Cómo acceder al dashboard por primera vez
2. ✅ Llenar formulario Discovery durante reunión
3. ✅ Generar cotización desde un lead
4. ✅ Actualizar estados del pipeline
5. ✅ Buscar y filtrar leads

---

## 💡 Tips Profesionales

### Durante la Reunión:
1. **Mute notifications** - No interrupciones
2. **Segundo monitor** - Cliente en uno, admin en otro
3. **Auriculares** - Mejor audio, manos libres
4. **Buena luz** - Si compartes cámara
5. **Internet backup** - Hotspot móvil por si acaso

### Preparación:
1. **Abrir todo antes** - Dashboard, protocolo, calendario
2. **Probar audio/video** - 5 min antes
3. **Cerrar apps innecesarias** - Performance
4. **Tener agua** - Reuniones largas
5. **Baño antes** - Obvio pero importante 😅

### Después:
1. **Guardar inmediatamente** - No perder info
2. **Email mismo día** - Mientras está fresco
3. **Programar seguimiento** - En el calendario
4. **Actualizar notas** - Detalles adicionales

---

## 🔧 Solución de Problemas

### "No puedo acceder a localhost:3001"
```bash
# Verificar que el servidor esté corriendo
npm run dev

# Si está en otro puerto:
http://localhost:3000
```

### "La página no carga"
```bash
# Limpiar cache
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)

# O usar modo incógnito
Ctrl + Shift + N  (Chrome)
```

### "Cambios no se ven"
```bash
# Turbopack cache
# En terminal:
npm run dev
# Debería recargar automáticamente
```

### "Formulario no guarda"
```bash
# Verificar consola del navegador (F12)
# Buscar errores rojos
# Verificar que Supabase esté configurado
```

---

## 📞 Soporte

### Documentación:
- `PROTOCOLO-PRIMERA-REUNION.md` - Proceso completo
- `DATABASE-SETUP.md` - Configuración técnica
- `LEADS-SYSTEM-RESUMEN.md` - Resumen del sistema
- `EMAIL-TEMPLATES.md` - Templates de email

### ¿Dudas Técnicas?
- Revisar la consola del navegador (F12)
- Verificar logs del servidor en terminal
- Revisar documentación de Next.js

---

## ✅ Checklist Antes de Reunión

- [ ] Servidor corriendo (`npm run dev`)
- [ ] Dashboard abierto en navegador
- [ ] Lead del cliente localizado
- [ ] Protocolo abierto para referencia
- [ ] Zoom/Meet listo y testeado
- [ ] Audio/video funcionando
- [ ] Segundo monitor configurado (si aplica)
- [ ] Notificaciones silenciadas
- [ ] Agua/café preparado
- [ ] Baño visitado 😄

---

**¡Listo para tus reuniones! 🚀**
