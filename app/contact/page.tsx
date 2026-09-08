import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';
import Reveal from '@/components/animations/Reveal';
import { business } from '@/lib/data/business';

export const metadata: Metadata = {
  title: 'Contact | SLV Catering',
  description: 'Enquire about catering for your wedding, reception, corporate event or family function in Bengaluru.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <section className="bg-[rgb(var(--charcoal))] py-28 sm:py-36 lg:py-44">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-7">
                <Reveal as="span" className="text-xs font-medium uppercase tracking-[0.4em] text-[rgb(var(--gold))]">
                  Enquire
                </Reveal>
                <Reveal as="h1" className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-white text-balance">
                  Let&apos;s create something memorable.
                </Reveal>
                <Reveal as="p" delay={2} className="max-w-md text-pretty text-lg text-white/70">
                  Tell us about your occasion. We&apos;ll craft a menu and a plan that fits your day, your guests and your budget.
                </Reveal>

                <Reveal delay={3} as="div" className="mt-4 flex flex-col gap-5">
                  <a href={business.phoneHref} className="group flex items-center gap-3 text-white/80 transition-colors hover:text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-sm">☎</span>
                    <span>{business.phone}</span>
                  </a>
                  <a href={`mailto:${business.email}`} className="group flex items-center gap-3 text-white/80 transition-colors hover:text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-sm">@</span>
                    <span>{business.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-sm">◎</span>
                    <span>{business.city}, {business.region}</span>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={2} as="div" className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <form className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-white/60">Name</label>
                      <input id="name" name="name" type="text" required className="border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[rgb(var(--gold))] focus:outline-none" placeholder="Your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-white/60">Phone</label>
                      <input id="phone" name="phone" type="tel" required className="border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[rgb(var(--gold))] focus:outline-none" placeholder="+91 ..." />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-white/60">Email</label>
                    <input id="email" name="email" type="email" className="border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[rgb(var(--gold))] focus:outline-none" placeholder="you@email.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="event" className="text-xs font-medium uppercase tracking-wider text-white/60">Event type</label>
                    <select id="event" name="event" className="border-b border-white/20 bg-transparent py-2 text-white focus:border-[rgb(var(--gold))] focus:outline-none">
                      <option className="bg-[rgb(var(--charcoal))]" value="">Select...</option>
                      <option className="bg-[rgb(var(--charcoal))]" value="wedding">Wedding / Reception</option>
                      <option className="bg-[rgb(var(--charcoal))]" value="family">Family Function</option>
                      <option className="bg-[rgb(var(--charcoal))]" value="corporate">Corporate Event</option>
                      <option className="bg-[rgb(var(--charcoal))]" value="festival">Community Festival</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-white/60">Message</label>
                    <textarea id="message" name="message" rows={3} className="resize-none border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[rgb(var(--gold))] focus:outline-none" placeholder="Tell us about your occasion..." />
                  </div>
                  <button type="submit" className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-[rgb(var(--gold))] px-7 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03]">
                    Send Enquiry
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
