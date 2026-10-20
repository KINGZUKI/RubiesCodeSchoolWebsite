import { HeartHandshake, GraduationCap, HandCoins, ArrowRight } from 'lucide-react';

const options = [
  {
    icon: HandCoins,
    title: 'Sponsor a Child',
    description:
      'Give a young learner access to coding education they otherwise could not afford. Your sponsorship covers their full learning journey.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: GraduationCap,
    title: 'Become a Tutor',
    description:
      'Join a community of passionate educators helping kids and teens discover the power of technology. Share your skills and shape the future.',
    accent: 'from-accent-500 to-accent-700',
  },
  {
    icon: HeartHandshake,
    title: 'Volunteer',
    description:
      'Volunteers and tutors help us reach more kids. Lend your time and talent to make tech education accessible to every child.',
    accent: 'from-fuchsia-500 to-brand-600',
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="relative bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Get Involved
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Empower the next generation together
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Together, we can make a difference. There are many ways to be part of
            the movement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {options.map((opt, i) => (
            <div
              key={opt.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100 to-accent-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${opt.accent} text-white shadow-lg shadow-brand-500/30`}
                >
                  <opt.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                  {opt.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {opt.description}
                </p>
                <a
                  href="#get-involved"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
