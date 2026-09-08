import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';
import Reveal from '@/components/animations/Reveal';
import { business } from '@/lib/data/business';

export const metadata: Metadata = {
  title: 'About | SLV Catering',
  description: 'Over a decade of traditional South Indian, North Indian and Udupi-style catering in Bengaluru. Fresh on-site preparation, no artificial flavours.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <section className="relative flex min-h-[60vh] items-center bg-[rgb(var(--charcoal))] py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/8818667/pexels-photo-8818667.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Traditional Indian meal"
              className="h-full w-full object-cover opacity-30"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[rgb(var(--charcoal))]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <Reveal as="span" className="text-xs font-medium uppercase tracking-[0.4em] text-[rgb(var(--gold))]">
              About Us
            </Reveal>
            <Reveal as="h1" className="mt-5 font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-white text-balance">
              More than catering.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-6 max-w-2xl text-pretty text-lg text-white/70">
              {business.about}
            </Reveal>
          </div>
        </section>

        <section className="bg-[rgb(var(--background))] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <Reveal as="div" className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">Vision</span>
              <p className="font-serif text-2xl leading-relaxed text-[rgb(var(--foreground))] text-pretty">{business.vision}</p>
            </Reveal>
            <Reveal as="div" delay={2} className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">Mission</span>
              <p className="font-serif text-2xl leading-relaxed text-[rgb(var(--foreground))] text-pretty">{business.mission}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[rgb(var(--ivory))] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal as="h2" className="mb-14 font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-tight text-balance">
              Why families choose us.
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-sm border border-[rgb(var(--border))] bg-[rgb(var(--border))] sm:grid-cols-2 lg:grid-cols-3">
              {business.whyChoose.map((item, i) => (
                <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3} as="div" className="bg-[rgb(var(--cream))] p-8">
                  <h3 className="font-serif text-xl text-[rgb(var(--foreground))]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
