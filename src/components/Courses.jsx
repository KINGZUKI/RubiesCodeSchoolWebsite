import {
  Blocks,
  Smartphone,
  Monitor,
  Server,
  PenTool,
  Code,
} from 'lucide-react';
import { courses } from '@/data/content';

const iconMap = {
  blocks: Blocks,
  phone: Smartphone,
  monitor: Monitor,
  server: Server,
  'pen-tool': PenTool,
  code: Code,
};

export default function Courses() {
  return (
    <section id="teach" className="relative bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            What we teach
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Courses that build real skills
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            From block-based coding to Python and product design — a complete
            tech toolkit for young minds.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => {
            const Icon = iconMap[course.icon];
            return (
              <div
                key={course.title}
                className="reveal group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-900/10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${course.color} transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {course.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
