// Hook para manejar posición de scroll y efectos

import { useState, useEffect, useCallback } from 'react';

export interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down';
  isScrolling: boolean;
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'down',
    isScrolling: false
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    const currentX = window.scrollX;
    const direction = currentY > lastScrollY ? 'down' : 'up';

    setScrollPosition({
      x: currentX,
      y: currentY,
      direction,
      isScrolling
    });

    setLastScrollY(currentY);
    setIsScrolling(true);
  }, [lastScrollY, isScrolling]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const onScroll = () => {
      handleScroll();
      
      // Clear timeout to detect when scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  return scrollPosition;
};

// Hook para detectar si un elemento está visible
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options]);

  return isIntersecting;
};
