import Reveal from '@/components/animations/Reveal';
import { business } from '@/lib/data/business';

export default function ServiceShowcase() {
  return (
    <section className="bg-[rgb(var(--background))] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <Reveal as="span" className="text-xs font-medium uppercase tracking-[0.35em] text-[rgb(var(--gold))]">
              What We Do
            </Reveal>
            <Reveal as="h2" className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-balance">
              Catering for every occasion.
            </Reveal>
          </div>
          <Reveal as="p" delay={2} className="max-w-md text-pretty text-base leading-relaxed text-[rgb(var(--muted-foreground))]">
            From wedding mornings to corporate afternoons, every event receives the same fresh on-site preparation and attentive service.
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {business.services.map((service, i) => (
            <Reveal key={service.title} delay={((i % 2) + 1) as 1 | 2} as="div" className="group relative overflow-hidden rounded-sm border border-[rgb(var(--border))] bg-[rgb(var(--cream))]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-pretty text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">{service.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs text-[rgb(var(--muted-foreground))]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
