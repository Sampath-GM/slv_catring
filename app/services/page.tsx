import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Services | SLV Catering',
  description: 'Wedding catering, family functions, corporate events and community festival catering across Bengaluru - fresh on-site preparation.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <section className="bg-[rgb(var(--charcoal))] py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-[rgb(var(--gold))]">Services</span>
            <h1 className="mt-5 font-serif text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.02] tracking-tight text-white text-balance">
              Catering for every occasion.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-white/70">
              From wedding mornings to corporate afternoons, every event receives the same fresh on-site preparation and attentive service.
            </p>
          </div>
        </section>
        <ServiceShowcase />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
