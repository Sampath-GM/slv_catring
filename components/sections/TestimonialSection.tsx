import Reveal from '@/components/animations/Reveal';
import { business } from '@/lib/data/business';

export default function TestimonialSection() {
  return (
    <section className="bg-[rgb(var(--ivory))] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-5">
          <Reveal as="span" className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">
            Kind Words
          </Reveal>
          <Reveal as="h2" className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Trusted by families across Bengaluru.
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {business.testimonials.map((t, i) => (
            <Reveal key={t.author} delay={((i % 3) + 1) as 1 | 2 | 3} as="figure" className="flex flex-col gap-6 rounded-sm border border-[rgb(var(--border))] bg-[rgb(var(--cream))] p-8">
              <blockquote className="font-serif text-xl leading-relaxed text-[rgb(var(--foreground))] text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-[rgb(var(--border))] pt-5">
                <div className="text-sm font-medium text-[rgb(var(--foreground))]">{t.author}</div>
                <div className="text-xs text-[rgb(var(--muted-foreground))]">{t.event}</div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
