import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicePageLayout({ title, image, description, points = [] }) {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Epoxy Floors
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {description}
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Заявете оферта
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <img
              src={image}
              alt={title}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">Подходящо решение за Вашия обект</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p>
          </div>
        </div>

        <aside className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Предимства</h2>
          <p className="mt-3 text-muted-foreground">
            Изпълняваме системи, съобразени с натоварването, експлоатацията и
            спецификите на средата.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm leading-7 text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
