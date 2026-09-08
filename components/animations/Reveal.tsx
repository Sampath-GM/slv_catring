'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'clip' | 'line';
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: 'div' | 'span' | 'section' | 'li' | 'p' | 'h1' | 'h2' | 'h3' | 'article' | 'figure';
  threshold?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = '',
  variant = 'fade',
  delay,
  as: Tag = 'div',
  threshold = 0.15,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const base =
    variant === 'clip' ? 'clip-reveal' : variant === 'line' ? 'line-mask' : 'reveal';
  const delayClass = delay ? ` reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref as never} className={`${base}${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
