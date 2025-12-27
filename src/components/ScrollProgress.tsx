/**
 * Indicador de progreso de scroll
 * Muestra una barra en la parte superior que indica el progreso de lectura
 */

'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-t_primary via-t_accent to-t_primary origin-left z-50"
      style={{ scaleX }}
    />
  );
}
