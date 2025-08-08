'use client'; 

import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = <T extends HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current && observerRef.current) {
          observerRef.current.unobserve(ref.current);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};
