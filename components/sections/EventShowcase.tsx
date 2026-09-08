'use client';

import { useEffect, useRef, useState } from 'react';
import { business } from '@/lib/data/business';

export default function EventShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !root.current) return;

    let active = true;
    let cleanup: (() => void) | undefined;

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapMod, stMod]) => {
      if (!active || !root.current) return;
      const gsap = gsapMod.default ?? gsapMod.gsap ?? gsapMod;
      const ScrollTrigger = stMod.default ?? stMod.ScrollTrigger ?? stMod;
      gsap.registerPlugin(ScrollTrigger);

      const panels = gsap.utils.toArray<HTMLElement>('.event-panel');

      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: panel,
              start: 'top 75%',
              onEnter: () => setActive(i),
              onEnterBack: () => setActive(i),
            },
          }
        );
      });

      cleanup = () => ScrollTrigger.getAll().forEach((st: { kill: () => void }) => st.kill());
    });

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    <section ref={root} className="bg-[rgb(var(--charcoal))] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">Occasions</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-white text-balance">
            Every gathering, told with care.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {business.events.map((event, i) => (
            <div
              key={event.title}
              className={`event-panel grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={business.gallery[(i * 2 + 1) % business.gallery.length].src}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-5 left-5 font-serif text-sm text-white/70">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">
                  Event
                </span>
                <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-white">
                  {event.title}
                </h3>
                <p className="max-w-md text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  {event.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
