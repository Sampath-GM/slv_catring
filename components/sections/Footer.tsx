import Link from 'next/link';
import { business } from '@/lib/data/business';

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--background))] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-[rgb(var(--border))] pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--gold))] text-[11px] font-medium tracking-wider text-[rgb(var(--gold))]">
                SLV
              </span>
              <span className="font-serif text-xl">SLV Catering</span>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {business.fullName}. Traditional South Indian, North Indian and Udupi-style catering - fresh, on-site, and made with care across Bengaluru.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-[rgb(var(--muted-foreground))]">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {business.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[rgb(var(--foreground))]/80 transition-colors hover:text-[rgb(var(--gold))]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-[rgb(var(--muted-foreground))]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-[rgb(var(--foreground))]/80">
              <li>{business.city}, {business.region}</li>
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-[rgb(var(--gold))]">{business.phone}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-[rgb(var(--gold))]">{business.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[rgb(var(--muted-foreground))] sm:flex-row">
          <p>© {new Date().getFullYear()} SLV Catering. All rights reserved.</p>
          <p>{business.city} · {business.region}</p>
        </div>
      </div>
    </footer>
  );
}
