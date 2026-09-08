import Reveal from '@/components/animations/Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <Reveal as="span" className={`text-xs font-medium uppercase tracking-[0.35em] ${light ? 'text-white/60' : 'text-[rgb(var(--gold))]'}`}>
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className={`font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-balance ${light ? 'text-white' : 'text-[rgb(var(--foreground))]'}`}>
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={2} className={`max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-[rgb(var(--muted-foreground))]'}`}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}
