import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealTextProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function RevealText({ children, direction = 'up', delay = 0 }: RevealTextProps) {
  const [ref, isVisible] = useIntersectionObserver();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: getTransform(),
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)',
        transitionDelay: `${delay}ms`,
        ...(isVisible && {
          opacity: 1,
          transform: 'translate(0)',
        }),
      }}
    >
      {children}
    </div>
  );
}