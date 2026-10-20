import { Target, Eye, Users, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
              About Us
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
              Building Africa's future{' '}
              <span className="gradient-text">innovators & problem solvers</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Rubies Technologies is an initiative that trains kids and teenagers
              to develop digital skills. We cultivate the next generation of tech
              leaders, fueling innovation and nurturing young minds — empowering
              them to create meaningful solutions for a better world.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We have presently reached over{' '}
              <span className="font-bold text-brand-700">4,000 kids</span> across
              Nigeria and beyond, with personalized, hands-on tech training
              tailored to each child's pace, interests and schedule.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Users, label: '4,000+ kids reached' },
                { icon: Globe2, label: 'Online worldwide' },
                { icon: Target, label: 'Project-based' },
                { icon: Eye, label: 'Ages 5–19' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-brand-100 bg-white/70 p-4 text-center backdrop-blur"
                >
                  <Icon className="mx-auto h-6 w-6 text-brand-600" />
                  <p className="mt-2 text-xs font-semibold text-slate-700">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative [transition-delay:120ms]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-400/30 to-accent-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-brand-900/20">
              <img
                src="https://images.pexels.com/photos/5621951/pexels-photo-5621951.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="Kids learning together"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
