'use client';

import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { business } from '@/lib/data/business';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => setLightbox((p) => (p === null ? p : (p + 1) % business.gallery.length)), []);
  const prev = useCallback(() => setLightbox((p) => (p === null ? p : (p - 1 + business.gallery.length) % business.gallery.length)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, close, next, prev]);

  return (
    <section className="bg-[rgb(var(--background))] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">Gallery</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Moments from our tables.
          </h2>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[280px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[300px]">
          {business.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-sm ${img.span}`}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <img
            src={business.gallery[lightbox].src}
            alt={business.gallery[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      )}
    </section>
  );
}
