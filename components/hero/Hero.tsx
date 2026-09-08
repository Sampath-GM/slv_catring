'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !root.current) return;

    let active = true;

    import('gsap').then((Mod) => {
      if (!active || !root.current) return;
      const gsap = Mod.default ?? Mod.gsap ?? Mod;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-bg', { scale: 1.12 }, { scale: 1, duration: 2.2 }, 0)
        .fromTo('.hero-label', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
        .fromTo('.hero-line', { yPercent: 115 }, { yPercent: 0, duration: 1, stagger: 0.12 }, 0.7)
        .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, 1.2)
        .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 1.4)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.8);
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="hero-bg absolute inset-0 will-change-transform">
        <img
          src="/hero.png"
          alt="Elegant wedding venue with lavish floral decor and buffet setup"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="hero-label mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white/70">
          SLV Catering · Bengaluru
        </span>

        <h1 className="font-serif text-white text-balance text-[clamp(2.75rem,9vw,8rem)] font-medium leading-[0.95] tracking-tight">
          <span className="block overflow-hidden"><span className="hero-line block">Crafting</span></span>
          <span className="block overflow-hidden"><span className="hero-line block">Memorable</span></span>
          <span className="block overflow-hidden"><span className="hero-line block">Experiences.</span></span>
        </h1>

        <p className="hero-sub mt-7 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
          Traditional South Indian, North Indian &amp; Udupi-style catering - prepared fresh on-site for weddings, receptions and every celebration that matters.
        </p>

        <div className="hero-cta mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--gold))] px-7 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03]"
          >
            Enquire Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="animate-scroll-hint block h-8 w-px bg-white/50" />
        </div>
      </div>
    </section>
  );
}
