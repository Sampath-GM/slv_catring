'use client';

import { useEffect, useRef, useState } from 'react';
import { business } from '@/lib/data/business';

export default function FoodShowcase() {
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

      const stages = gsap.utils.toArray<HTMLElement>('.food-stage');
      const images = gsap.utils.toArray<HTMLElement>('.food-img');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${root.current!.offsetHeight * 3}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self: { progress: number }) => {
            const idx = Math.min(stages.length - 1, Math.floor(self.progress * stages.length));
            setActive(idx);
          },
        },
      });

      images.forEach((img, i) => {
        if (i === 0) return;
        tl.to(img, { opacity: 1, duration: 1 }, i);
      });

      cleanup = () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-[rgb(var(--charcoal))]">
      {business.foodStages.map((stage, i) => (
        <div
          key={stage.index}
          className="food-img absolute inset-0"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <img
            src={business.gallery[i % business.gallery.length].src}
            alt={business.gallery[i % business.gallery.length].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.4em] text-white/50">
              The Art of Great Food
            </span>
            <div className="space-y-1">
              {business.foodStages.map((stage, i) => (
                <div
                  key={stage.index}
                  className={`food-stage transition-all duration-700 ${
                    active === i ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-lg text-[rgb(var(--gold))]/80">{stage.index}</span>
                    <h3 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-none tracking-tight text-white">
                      {stage.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-3 max-w-md pl-10 text-pretty text-sm leading-relaxed transition-all duration-700 sm:text-base ${
                      active === i ? 'translate-y-0 text-white/70 opacity-100' : 'translate-y-2 text-white/40 opacity-0'
                    }`}
                  >
                    {stage.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
