import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import StorySection from '@/components/sections/StorySection';
import FoodShowcase from '@/components/sections/FoodShowcase';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import EventShowcase from '@/components/sections/EventShowcase';
import Gallery from '@/components/sections/Gallery';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <StorySection />
          <FoodShowcase />
          <ServiceShowcase />
          <EventShowcase />
          <Gallery />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
