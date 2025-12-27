/**
 * Cursor personalizado tech con efectos avanzados
 * Diseño moderno con partículas y trail effect
 */

'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const trailTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Crear trail particles
      if (Math.random() > 0.7) {
        const newTrail = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
        };
        setTrails(prev => [...prev, newTrail]);
        
        // Limpiar trail después de un tiempo
        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== newTrail.id));
        }, 800);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (trailTimeoutRef.current) clearTimeout(trailTimeoutRef.current);
    };
  }, []);

  return (
    <div className="hidden md:block">
      {/* Trail particles */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className="fixed w-1 h-1 bg-t_primary rounded-full pointer-events-none z-[9997]"
            initial={{ opacity: 0.6, scale: 1, x: trail.x, y: trail.y }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Cursor principal con diseño tech */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Punto central */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 0 : 1,
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-t_primary to-t_accent rounded-full" />
        </motion.div>

        {/* Anillo exterior con gradiente */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 2 : 1,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 border-2 border-t_primary/40 rounded-full" />
        </motion.div>

        {/* Círculo tech cuando hover */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 border border-t_accent/30 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border border-t_primary/20 rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Puntos decorativos rotando */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14"
          animate={{
            rotate: 360,
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 0.3 },
          }}
        >
          {[0, 90, 180, 270].map((angle) => (
            <motion.div
              key={angle}
              className="absolute w-1 h-1 bg-t_accent rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${angle}deg) translateY(-28px)`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: angle / 360,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Efecto de onda al hacer click */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 -translate-x-1/2 -translate-y-1/2 border-2 border-t_primary rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
