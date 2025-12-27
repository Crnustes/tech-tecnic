/**
 * Card animada con hover effects profesionales
 * Incluye efectos de brillo, elevación y micro-interacciones
 */

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.5)',
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative group ${className}`}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-t_primary to-t_accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Card content */}
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-t_primary/50 h-full">
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        {children}
      </div>
    </motion.div>
  );
}
