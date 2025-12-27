/**
 * Texto con efecto glitch tech
 * Añade un efecto visual cyberpunk a textos importantes
 */

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  glitchOnHover?: boolean;
}

export default function GlitchText({ 
  children, 
  className = '', 
  glitchOnHover = true 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    if (!glitchOnHover) return;
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 400);
  };

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={triggerGlitch}
    >
      {/* Texto principal */}
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -1, 1, 0],
          textShadow: [
            '0 0 0 transparent',
            '2px 0 #00d9ff',
            '-2px 0 #00fff9',
            '2px 0 #00d9ff',
            '-2px 0 #00fff9',
            '0 0 0 transparent',
          ],
        } : {}}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.span>

      {/* Capa de glitch roja */}
      <motion.span
        className="absolute top-0 left-0 text-red-500 -z-10"
        animate={isGlitching ? {
          opacity: [0, 0.7, 0, 0.7, 0],
          x: [0, -3, 3, -2, 0],
          clipPath: [
            'inset(0 0 0 0)',
            'inset(20% 0 60% 0)',
            'inset(60% 0 20% 0)',
            'inset(40% 0 40% 0)',
            'inset(0 0 0 0)',
          ],
        } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        {children}
      </motion.span>

      {/* Capa de glitch cyan */}
      <motion.span
        className="absolute top-0 left-0 text-cyan-500 -z-10"
        animate={isGlitching ? {
          opacity: [0, 0.7, 0, 0.7, 0],
          x: [0, 3, -3, 2, 0],
          clipPath: [
            'inset(0 0 0 0)',
            'inset(40% 0 40% 0)',
            'inset(10% 0 70% 0)',
            'inset(70% 0 10% 0)',
            'inset(0 0 0 0)',
          ],
        } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </div>
  );
}
