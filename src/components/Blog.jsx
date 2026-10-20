import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/content';

export default function Blog() {
  return (
    <section id="blog" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Featured Blog
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
              Young Tech Achievers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Insights, stories and tips for raising the next generation of
              creators.
            </p>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:border-brand-400 hover:text-brand-700"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <a
              key={post.title}
              href={post.href}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-900/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
