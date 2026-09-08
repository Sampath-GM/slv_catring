import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';
import Gallery from '@/components/sections/Gallery';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Gallery | SLV Catering',
  description: 'Moments from our tables - food, events and celebrations catered by SLV Catering in Bengaluru.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <section className="bg-[rgb(var(--charcoal))] py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-[rgb(var(--gold))]">Gallery</span>
            <h1 className="mt-5 font-serif text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.02] tracking-tight text-white text-balance">
              Moments from our tables.
            </h1>
          </div>
        </section>
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
