import { tracks } from '@/data/content';

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Our Curriculum
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            A track for every age
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Three carefully designed learning tracks that grow with your child.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tracks.map((track, i) => (
            <div
              key={track.name}
              className="reveal group relative overflow-hidden rounded-3xl bg-brand-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={track.image}
                  alt={track.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800">
                  {track.age}
                </span>
              </div>
              <div className="relative p-7">
                <h3 className="font-display text-2xl font-bold text-white">
                  {track.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">
                  {track.blurb}
                </p>
                <div className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white transition-transform group-hover:scale-110">
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
