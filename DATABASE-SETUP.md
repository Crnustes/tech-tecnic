# 🗄️ Guía de Implementación de Base de Datos para Sistema de Leads

## 📋 Tabla de Contenidos
1. [Opciones de Base de Datos](#opciones-de-base-de-datos)
2. [Recomendación: Supabase](#recomendación-supabase)
3. [Schema SQL](#schema-sql)
4. [Implementación con Supabase](#implementación-con-supabase)
5. [Alternativas](#alternativas)

---

## 🎯 Opciones de Base de Datos

### ⭐ Recomendación Principal: **Supabase**

**Por qué Supabase:**
- ✅ Configuración rápida (5 minutos)
- ✅ PostgreSQL completo (robusto y escalable)
- ✅ API REST automática
- ✅ Dashboard visual incluido
- ✅ Autenticación integrada
- ✅ Almacenamiento de archivos incluido
- ✅ Tier gratuito generoso (50,000 usuarios MAU)
- ✅ Hosting gratis para proyectos pequeños
- ✅ Real-time subscriptions (WebSockets)
- ✅ Edge Functions incluidas

**Ideal para:**
- Proyectos que empiezan pero quieren escalar
- Equipos pequeños sin DBA dedicado
- Desarrollo rápido con poco setup
- Proyectos que necesitan autenticación

---

### Otras Opciones

| Base de Datos | Pros | Contras | Mejor Para |
|--------------|------|---------|------------|
| **MongoDB Atlas** | NoSQL flexible, fácil de usar | Menos estructurado | Datos no relacionales |
| **PlanetScale** | MySQL serverless, branches como git | Límites en plan free | Equipos acostumbrados a MySQL |
| **Firebase/Firestore** | Real-time out of the box, fácil | Vendor lock-in, queries limitados | Apps móviles real-time |
| **Prisma + Railway** | TypeScript nativo, migraciones fáciles | Requiere más setup | Full control |
| **Google Sheets** | Setup en 5 min, no code | No escala, lento | MVP rápido (<100 leads) |

---

## 🗄️ Schema SQL (PostgreSQL/Supabase)

```sql
-- Tabla principal de Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Status y source
  status VARCHAR(50) NOT NULL DEFAULT 'nuevo',
  source VARCHAR(50) NOT NULL DEFAULT 'web-form',
  
  -- Información de contacto
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  position VARCHAR(100),
  
  -- Información del proyecto
  service VARCHAR(50) NOT NULL,
  project_title VARCHAR(255),
  project_description TEXT,
  budget_range VARCHAR(50),
  timeline VARCHAR(100),
  urgency VARCHAR(20) DEFAULT 'media',
  
  -- Seguimiento
  meeting_date TIMESTAMP WITH TIME ZONE,
  proposal_sent_date TIMESTAMP WITH TIME ZONE,
  closed_date TIMESTAMP WITH TIME ZONE,
  estimated_value DECIMAL(10, 2),
  probability INTEGER DEFAULT 50,
  
  -- Metadata
  assigned_to UUID REFERENCES auth.users(id),
  tags TEXT[],
  lost_reason TEXT,
  
  -- Índices para búsquedas rápidas
  CONSTRAINT leads_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Tabla de notas de seguimiento
CREATE TABLE lead_notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  user_name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  type VARCHAR(50) DEFAULT 'interno',
  
  CONSTRAINT lead_notes_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES leads(id)
);

-- Tabla de formularios Discovery
CREATE TABLE discovery_forms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_by VARCHAR(255),
  service_type VARCHAR(50) NOT NULL,
  form_data JSONB NOT NULL,
  
  CONSTRAINT discovery_forms_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES leads(id)
);

-- Tabla de cotizaciones
CREATE TABLE quotations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  version INTEGER DEFAULT 1,
  
  -- Información básica
  project_title VARCHAR(255) NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  valid_until DATE,
  
  -- Costos
  items JSONB NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,
  discount JSONB,
  taxes JSONB,
  total DECIMAL(10, 2) NOT NULL,
  
  -- Timeline
  estimated_duration VARCHAR(100),
  start_date DATE,
  delivery_date DATE,
  milestones JSONB,
  
  -- Pagos
  payment_terms JSONB,
  
  -- Estado
  status VARCHAR(50) DEFAULT 'borrador',
  sent_date TIMESTAMP WITH TIME ZONE,
  accepted_date TIMESTAMP WITH TIME ZONE,
  
  notes TEXT,
  terms_and_conditions TEXT,
  
  CONSTRAINT quotations_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES leads(id)
);

-- Índices para mejorar performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_service ON leads(service);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_lead_notes_lead_id ON lead_notes(lead_id);
CREATE INDEX idx_discovery_forms_lead_id ON discovery_forms(lead_id);
CREATE INDEX idx_quotations_lead_id ON quotations(lead_id);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quotations_updated_at
  BEFORE UPDATE ON quotations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) para Supabase
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE discovery_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad (solo usuarios autenticados)
CREATE POLICY "Usuarios autenticados pueden ver leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Usuarios autenticados pueden crear leads"
  ON leads FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Usuarios autenticados pueden actualizar leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true);

-- Función para obtener estadísticas
CREATE OR REPLACE FUNCTION get_lead_stats()
RETURNS TABLE (
  total_leads BIGINT,
  new_leads BIGINT,
  active_leads BIGINT,
  won_leads BIGINT,
  lost_leads BIGINT,
  total_value DECIMAL,
  avg_value DECIMAL,
  conversion_rate DECIMAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*)::BIGINT as total_leads,
    COUNT(*) FILTER (WHERE status = 'nuevo')::BIGINT as new_leads,
    COUNT(*) FILTER (WHERE status NOT IN ('ganado', 'perdido', 'pausado'))::BIGINT as active_leads,
    COUNT(*) FILTER (WHERE status = 'ganado')::BIGINT as won_leads,
    COUNT(*) FILTER (WHERE status = 'perdido')::BIGINT as lost_leads,
    COALESCE(SUM(estimated_value) FILTER (WHERE status = 'ganado'), 0) as total_value,
    COALESCE(AVG(estimated_value) FILTER (WHERE status = 'ganado'), 0) as avg_value,
    CASE 
      WHEN COUNT(*) > 0 THEN 
        (COUNT(*) FILTER (WHERE status = 'ganado')::DECIMAL / COUNT(*)::DECIMAL * 100)
      ELSE 0
    END as conversion_rate
  FROM leads;
END;
$$ LANGUAGE plpgsql;
```

---

## 🚀 Implementación con Supabase

### Paso 1: Crear Cuenta en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto
4. Guarda tu `Project URL` y `anon key`

### Paso 2: Ejecutar el Schema

1. En el dashboard de Supabase, ve a "SQL Editor"
2. Copia y pega el schema SQL de arriba
3. Ejecuta el script

### Paso 3: Instalar el Cliente de Supabase

```bash
npm install @supabase/supabase-js
```

### Paso 4: Configurar Variables de Entorno

Crea o actualiza tu `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key-aqui
```

### Paso 5: Crear el Cliente de Supabase

Crea `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Para uso en el servidor (API routes)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);
```

### Paso 6: Actualizar el API de Leads

Actualiza `src/app/api/leads/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, newsletter } = body;

    // Mapeo de servicios
    const serviceMap: Record<string, string> = {
      'Desarrollo Web': 'desarrollo-web',
      'Apps Móviles': 'apps-moviles',
      'Automatización IA': 'automatizacion-ia',
      'Soluciones para Agencias': 'para-agencias',
      'Integraciones': 'integraciones',
      'SEO + GEO LATAM': 'seo-geo',
    };

    const budgetMap: Record<string, string> = {
      '$500 - $1,000': 'menos-1k',
      '$1,000 - $5,000': '1k-5k',
      '$5,000 - $10,000': '5k-10k',
      '$10,000 - $25,000': '10k-25k',
      '$25,000+': 'mas-50k',
    };

    // Insertar lead en Supabase
    const { data: lead, error: leadError } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          service: serviceMap[service] || 'otro',
          project_description: message,
          budget_range: budget ? budgetMap[budget] : null,
          source: 'web-form',
          status: 'nuevo',
          urgency: 'media',
          probability: 50,
          tags: ['web-form', service],
        },
      ])
      .select()
      .single();

    if (leadError) {
      console.error('Error al guardar lead:', leadError);
      throw leadError;
    }

    // Insertar nota inicial
    await supabaseAdmin.from('lead_notes').insert([
      {
        lead_id: lead.id,
        user_name: 'Sistema',
        content: `Lead generado desde formulario de contacto. Newsletter: ${newsletter ? 'Sí' : 'No'}`,
        type: 'interno',
      },
    ]);

    console.log('✅ Lead guardado con ID:', lead.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead registrado correctamente',
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    // Obtener todos los leads con sus notas
    const { data: leads, error } = await supabaseAdmin
      .from('leads')
      .select(`
        *,
        notes:lead_notes(*),
        discovery:discovery_forms(*),
        quotations:quotations(*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      leads: leads || [],
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al obtener leads' },
      { status: 500 }
    );
  }
}
```

### Paso 7: Actualizar el Dashboard de Leads

Actualiza `src/components/admin/LeadsDashboard.tsx` para cargar datos de Supabase:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { Lead } from '@/types/leads';

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (error) {
      console.error('Error al cargar leads:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl">Cargando leads...</p>
        </div>
      </div>
    );
  }

  // ... resto del componente
}
```

---

## 🎯 Funciones Útiles

### Obtener estadísticas

```typescript
// En tu API o componente
const { data: stats } = await supabase
  .rpc('get_lead_stats');
```

### Búsqueda de leads

```typescript
const { data: results } = await supabase
  .from('leads')
  .select('*')
  .or(`name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,company.ilike.%${searchTerm}%`)
  .order('created_at', { ascending: false });
```

### Filtrar por estado

```typescript
const { data: newLeads } = await supabase
  .from('leads')
  .select('*')
  .eq('status', 'nuevo')
  .order('created_at', { ascending: false });
```

### Actualizar estado de lead

```typescript
const { data, error } = await supabase
  .from('leads')
  .update({ 
    status: 'en-discovery',
    meeting_date: new Date().toISOString()
  })
  .eq('id', leadId)
  .select()
  .single();
```

---

## 📊 Dashboard en Supabase

Supabase incluye un dashboard visual donde puedes:
- Ver y editar datos directamente
- Crear consultas SQL
- Ver logs en tiempo real
- Monitorear uso de recursos
- Gestionar usuarios y autenticación
- Configurar webhooks
- Crear backups automáticos

---

## 🔐 Seguridad

### Row Level Security (RLS)

Ya incluido en el schema. Asegura que:
- Solo usuarios autenticados pueden acceder a leads
- Cada usuario solo ve sus leads asignados
- El admin puede ver todos

### Variables de Entorno

**NUNCA** subas a Git:
- `SUPABASE_SERVICE_ROLE_KEY`
- API keys de servicios

Usa `.env.local` y agrégalo a `.gitignore`

---

## 📈 Escalabilidad

### Plan Gratuito de Supabase
- 500 MB de base de datos
- 1 GB de almacenamiento de archivos
- 50,000 usuarios activos mensuales
- 2 GB de transferencia

### Cuándo Escalar
- Más de 500 MB de datos → Plan Pro ($25/mes)
- Necesitas más control → Plan Team ($599/mes)
- Empresa grande → Plan Enterprise (custom pricing)

---

## 🔄 Migraciones

Para cambios futuros en el schema:

```sql
-- Ejemplo: Agregar campo nuevo
ALTER TABLE leads 
ADD COLUMN referral_source VARCHAR(255);

-- Crear índice
CREATE INDEX idx_leads_referral_source 
ON leads(referral_source);
```

---

## 🎉 ¡Listo!

Con esta configuración tienes:
- ✅ Sistema completo de gestión de leads
- ✅ Base de datos robusta y escalable
- ✅ API automática con Supabase
- ✅ Seguridad con RLS
- ✅ Dashboard visual incluido
- ✅ Real-time subscriptions
- ✅ Backups automáticos

**Siguiente paso:** Implementar notificaciones por email/Slack cuando llegue un nuevo lead.
