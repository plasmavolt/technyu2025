'use client'
import styles from './style.module.css'
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MaskSVGProps {
  children: React.ReactNode;
  className?: string;
  customDelay?: number;
  duration?: number;
}

export function MaskSVG({
  children,
  className = '',
  customDelay = 0,
  duration = 0.75
}: MaskSVGProps) {
  const animation: Variants = {
    initial: { y: "120%" },
    enter: {
      y: "0",
      transition: {
        duration: duration,
        ease: [0.65, 0, 0.35, 1] as const,
        delay: customDelay
      }
    }
  }

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={styles.lineMask}>
      <motion.div
        variants={animation}
        initial="initial"
        animate={inView ? "enter" : ""}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
