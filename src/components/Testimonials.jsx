import { Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-900 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-accent-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-400">
            Our Testimonials
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Loved by parents, trusted by families
          </h2>
          <p className="mt-5 text-lg text-brand-200">
            Hear from the parents who've watched their children thrive with us.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="reveal break-inside-avoid rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:bg-white/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Quote className="h-8 w-8 text-brand-400" />
              <blockquote className="mt-4 text-sm leading-relaxed text-brand-100">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-brand-300">Parent</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
