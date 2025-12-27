# 🎨 Componentes de Animación - Tech Tecnic

Sistema completo de animaciones y efectos visuales para una experiencia profesional y moderna.

## 📦 Componentes Disponibles

### 1. **FadeIn**
Animación de entrada con fade desde diferentes direcciones.

```tsx
import { FadeIn } from '@/components/animations';

<FadeIn direction="up" delay={0.2}>
  <div>Contenido animado</div>
</FadeIn>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' (default: 'up')
- `delay`: número en segundos (default: 0)
- `duration`: número en segundos (default: 0.5)

### 2. **Stagger**
Anima elementos de una lista con delay escalonado.

```tsx
import { Stagger, itemVariants } from '@/components/animations';
import { motion } from 'framer-motion';

<Stagger staggerDelay={0.1}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</Stagger>
```

**Props:**
- `staggerDelay`: delay entre elementos (default: 0.1)

### 3. **AnimatedCard**
Card con efectos de hover profesionales (glow, elevación, brillo).

```tsx
import { AnimatedCard } from '@/components/animations';

<AnimatedCard delay={0.2} glowColor="rgba(59, 130, 246, 0.5)">
  <div className="p-6">
    <h3>Título</h3>
    <p>Contenido de la card</p>
  </div>
</AnimatedCard>
```

**Props:**
- `delay`: delay de entrada (default: 0)
- `glowColor`: color del efecto glow en hover

### 4. **AnimatedButton**
Botón con ripple effect y animaciones suaves.

```tsx
import { AnimatedButton } from '@/components/animations';
import { ArrowRight } from 'lucide-react';

<AnimatedButton
  href="/contacto"
  variant="primary"
  size="lg"
  icon={<ArrowRight />}
>
  Click aquí
</AnimatedButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `icon`: ReactNode (icono opcional)
- `iconPosition`: 'left' | 'right' (default: 'right')

### 5. **Counter**
Número animado que cuenta desde 0 hasta el valor objetivo.

```tsx
import { Counter } from '@/components/animations';

<Counter end={100} suffix="+" duration={2} />
```

**Props:**
- `end`: número objetivo
- `duration`: duración en segundos (default: 2)
- `suffix`: texto después del número
- `prefix`: texto antes del número

### 6. **Parallax**
Efecto parallax en scroll para crear profundidad.

```tsx
import { Parallax } from '@/components/animations';

<Parallax offset={50}>
  <img src="/image.jpg" alt="parallax" />
</Parallax>
```

**Props:**
- `offset`: cantidad de movimiento en píxeles (default: 50)

### 7. **Typewriter**
Efecto de texto escribiéndose letra por letra.

```tsx
import { Typewriter } from '@/components/animations';

<Typewriter text="Bienvenido a Tech Tecnic" delay={0.5} />
```

**Props:**
- `text`: texto a animar
- `delay`: delay antes de iniciar (default: 0)

## 🎯 Componentes de UI Global

### ScrollProgress
Barra de progreso de lectura en la parte superior.

```tsx
// Ya incluido en layout.tsx
import ScrollProgress from '@/components/ScrollProgress';
```

### ScrollToTop
Botón flotante para volver arriba (aparece al hacer scroll).

```tsx
// Ya incluido en layout.tsx
import ScrollToTop from '@/components/ScrollToTop';
```

### AnimatedBackground
Fondo animado con gradientes en movimiento.

```tsx
// Ya incluido en layout.tsx
import AnimatedBackground from '@/components/AnimatedBackground';
```

### CustomCursor (Opcional)
Cursor personalizado con efecto de seguimiento.

```tsx
// Agregar en layout.tsx si se desea
import CustomCursor from '@/components/CustomCursor';

// En el body:
<CustomCursor />
```

## 🎨 Mejores Prácticas

1. **Performance**: Usa `viewport={{ once: true }}` para que las animaciones solo se ejecuten una vez
2. **Delays**: Escala los delays para crear jerarquía visual (0, 0.1, 0.2...)
3. **Duration**: Mantén las duraciones entre 0.3s - 0.8s para mejor UX
4. **Easing**: Usa `[0.25, 0.1, 0.25, 1]` para animaciones naturales

## 🚀 Ejemplos de Uso

### Sección con Cards Animadas

```tsx
import { FadeIn, AnimatedCard } from '@/components/animations';

<section>
  <FadeIn direction="up">
    <h2>Nuestros Servicios</h2>
  </FadeIn>
  
  <div className="grid md:grid-cols-3 gap-6">
    {services.map((service, i) => (
      <AnimatedCard key={service.id} delay={i * 0.1}>
        <div className="p-6">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </AnimatedCard>
    ))}
  </div>
</section>
```

### Stats con Contadores

```tsx
import { Counter } from '@/components/animations';

<div className="grid grid-cols-3 gap-8">
  <div>
    <Counter end={50} suffix="+" />
    <p>Proyectos</p>
  </div>
  <div>
    <Counter end={98} suffix="%" />
    <p>Satisfacción</p>
  </div>
  <div>
    <Counter end={24} suffix="/7" />
    <p>Soporte</p>
  </div>
</div>
```

## 🎭 Configuración

Todos los componentes usan:
- **Framer Motion** para animaciones
- **Intersection Observer** para detección de viewport
- **Tailwind CSS** para estilos

## 📱 Responsive

Todos los componentes son completamente responsive y se adaptan a diferentes tamaños de pantalla automáticamente.

## ⚡ Optimización

- Animaciones con GPU acceleration
- Lazy loading con Intersection Observer
- Debouncing en efectos de scroll
- Cancelación de animaciones al desmontar
