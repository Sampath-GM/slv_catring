import Reveal from '@/components/animations/Reveal';
import { business } from '@/lib/data/business';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--charcoal))] py-28 sm:py-36 lg:py-44">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/28976231/pexels-photo-28976231.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Charcuterie board at an event"
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--charcoal))]/80 via-[rgb(var(--charcoal))]/70 to-[rgb(var(--charcoal))]/85" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <Reveal as="span" className="text-xs font-medium uppercase tracking-[0.4em] text-[rgb(var(--gold))]">
          Enquire
        </Reveal>
        <Reveal as="h2" className="font-serif text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight text-white text-balance">
          Let&apos;s create something memorable.
        </Reveal>
        <Reveal as="p" delay={2} className="max-w-xl text-pretty text-base text-white/70 sm:text-lg">
          Tell us about your occasion. We&apos;ll craft a menu and a plan that fits your day, your guests and your budget.
        </Reveal>
        <Reveal delay={3} as="div" className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--gold))] px-7 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03]"
          >
            Call {business.phone}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            {business.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
