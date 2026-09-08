import Reveal from '@/components/animations/Reveal';
import { business } from '@/lib/data/business';

export default function StorySection() {
  return (
    <section className="relative bg-[rgb(var(--background))] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src="https://images.pexels.com/photos/8818667/pexels-photo-8818667.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Traditional Indian meal served with care"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-7">
          <Reveal as="span" className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">
            Our Story
          </Reveal>
          <Reveal as="h2" className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-balance">
            More than catering.
          </Reveal>
          <Reveal as="p" delay={2} className="text-pretty text-lg leading-relaxed text-[rgb(var(--muted-foreground))]">
            {business.story}
          </Reveal>
          <Reveal as="p" delay={3} className="text-pretty text-base leading-relaxed text-[rgb(var(--muted-foreground))]">
            {business.about}
          </Reveal>

          <Reveal delay={4} as="div" className="mt-2 grid grid-cols-3 gap-6 border-t border-[rgb(var(--border))] pt-7">
            {[
              { k: '20+', v: 'Years serving Bengaluru' },
              { k: '3', v: 'Regional cuisines' },
              { k: '0', v: 'Artificial flavours or MSG' },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-3xl text-[rgb(var(--foreground))]">{s.k}</div>
                <div className="mt-1 text-xs leading-snug text-[rgb(var(--muted-foreground))]">{s.v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
