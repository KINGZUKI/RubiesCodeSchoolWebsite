import { Sparkles, Shield, Heart, ArrowRight } from 'lucide-react';
import { reasons } from '@/data/content';

const iconMap = {
  sparkles: Sparkles,
  shield: Shield,
  heart: Heart,
};

export default function Features() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why you should consider us
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Education that goes{' '}
            <span className="gradient-text">beyond coding</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            We build confidence, keep parents involved, and personalise every
            child's learning journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = iconMap[reason.icon];
            return (
              <div
                key={reason.title}
                className="reveal group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100 to-accent-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline value statement */}
        <div className="reveal mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 p-10 text-center text-white shadow-2xl shadow-brand-500/30 lg:p-14">
          <h3 className="mx-auto max-w-3xl font-display text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl text-balance">
            We're building Africa's future innovators and problem solvers —
            cultivating the next generation of tech leaders.
          </h3>
          <a
            href="#programs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5"
          >
            Join the movement
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
