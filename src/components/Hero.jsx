import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-600 via-brand-700 to-brand-800 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-500/30 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
            Number #1 coding school for kids & teens
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Unleash your child's{' '}
            <span className="bg-gradient-to-r from-accent-300 to-brand-200 bg-clip-text text-transparent">creativity with tech</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            We empower kids and teens to become confident creators, problem
            solvers and future tech leaders — through fun, hands-on coding
            education tailored to every child.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-involved"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-xl shadow-brand-900/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Sparkles className="h-4 w-4 text-accent-500" />
              Get a free trial class
            </a>
            <a
              href="#programs"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <Stat value="8+" label="Years empowering kids" />
            <div className="h-10 w-px bg-white/20" />
            <Stat value="5–19" label="Ages we teach" />
            <div className="h-10 w-px bg-white/20" />
            <Stat value="4,000+" label="Kids reached" />
          </div>
        </div>

        {/* Hero image */}
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent-400/30 via-brand-300/30 to-fuchsia-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white/20 bg-white shadow-2xl shadow-black/30">
              <img
                src="https://images.pexels.com/photos/5745576/pexels-photo-5745576.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="Child learning to code"
                className="h-[420px] w-full object-cover sm:h-[480px]"
                loading="eager"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-12 animate-float rounded-2xl bg-white p-3 shadow-xl shadow-black/20">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint-400/20 text-mint-500">
                  <Star className="h-4 w-4 fill-mint-500 text-mint-500" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Scratch</p>
                  <p className="text-[10px] text-slate-500">Block coding</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-16 animate-float-slow rounded-2xl bg-white p-3 shadow-xl shadow-black/20">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600 font-bold text-sm">
                  Py
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Python</p>
                  <p className="text-[10px] text-slate-500">Real skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-2xl font-extrabold text-white">{value}</p>
      <p className="text-xs font-medium text-brand-200">{label}</p>
    </div>
  );
}
