'use client';

import { useScrollReveal } from '../utils/UseScrollReveal';
import { motion } from 'framer-motion';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const ScrollRevealSection = ({
  children,
  id,
  className = '',
}: ScrollRevealSectionProps) => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollRevealSection;
