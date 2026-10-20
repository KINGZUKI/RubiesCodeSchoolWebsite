import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { navLinks, quickLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      {/* CTA band */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-accent-500 via-accent-400 to-brand-400 p-8 text-center text-white shadow-2xl lg:flex-row lg:p-10 lg:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Get a free trial class
              </h3>
              <p className="mt-2 max-w-xl text-white/90">
                A free one-hour session that introduces kids and teens to the
                power of coding. No credit card, no pressure — just pure
                discovery.
              </p>
            </div>
            <a
              href="#get-involved"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5"
            >
              Book your free trial
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center">
              <img
                src="/rubies-logo.png"
                alt="Rubies Technologies"
                className="h-9 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-brand-300">
              Tech education for kids and teens. Building Africa's future
              innovators and problem solvers.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brand-200 transition-colors hover:bg-accent-500 hover:text-white"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-300 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-300 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-brand-300">
                <Mail className="h-4 w-4 text-accent-400" />
                <a href="mailto:info@rubiestech.org" className="transition-colors hover:text-white">
                  info@rubiestech.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-300">
                <Phone className="h-4 w-4 text-accent-400" />
                <a href="tel:+2347015016330" className="transition-colors hover:text-white">
                  +234 701 501 6330
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-300">
                <MapPin className="h-4 w-4 text-accent-400" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-center text-xs text-brand-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Rubies Technologies. All rights reserved.</p>
          <p>Building Africa's future innovators, one young coder at a time.</p>
        </div>
      </div>
    </footer>
  );
}
