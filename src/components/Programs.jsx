import { ArrowUpRight } from 'lucide-react';
import { programs } from '@/data/content';

export default function Programs() {
  return (
    <section id="programs" className="relative bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Programs & Events
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Ongoing and upcoming programs
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            From self-paced courses to live competitions — there's a path for
            every young coder.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-60 mix-blend-multiply`}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
                <a
                  href="#programs"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
