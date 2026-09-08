'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '@/lib/data/business';
import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-[rgb(var(--background))]/80 backdrop-blur-xl border-b border-[rgb(var(--border))]/60 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-3" aria-label="SLV Catering home">

            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="SLV Catering"
                width={280}
                height={280}
                className="object-contain"
              />


            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {business.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-[rgb(var(--foreground))]/80 hover:text-[rgb(var(--foreground))]' : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[rgb(var(--gold))] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-[rgb(var(--gold))] px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Enquire Now
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[rgb(var(--charcoal))] md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/logo.png"
              alt="SLV Catering"
              width={140}
              height={60}
              className="h-10 w-auto object-contain"
            />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-2 px-6 pt-8">
            {business.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 font-serif text-3xl text-white/90 transition-all hover:translate-x-2 hover:text-white"
                style={{ animation: `fadeUp 0.5s ${i * 0.06}s both` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[rgb(var(--gold))] px-6 py-4 text-base font-medium text-white"
            >
              Enquire Now →
            </Link>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </>
  );
}
