import { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Top contact bar */}
      <div
        className={`hidden bg-brand-700 text-white transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
          <p className="font-medium">
            Building Africa's future innovators, one young coder at a time.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="tel:+2347015016330"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-200"
            >
              <Phone className="h-3.5 w-3.5" />
              +234 701 501 6330
            </a>
            <a
              href="mailto:info@rubiestech.org"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-200"
            >
              <Mail className="h-3.5 w-3.5" />
              info@rubiestech.org
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-brand-50/90 backdrop-blur-md shadow-sm border-b border-brand-200'
            : 'bg-brand-600'
        }`}
      >
        {/* Logo row — logo stands alone, centered on desktop */}
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 pt-3 lg:px-8">
          <a href="#home" className="flex items-center">
            <img
              src="/rubies-logo.png"
              alt="Rubies Technologies"
              className={`h-9 w-auto transition-[filter] duration-300 ${
                scrolled ? '' : 'invert brightness-0'
              }`}
            />
          </a>
        </div>

        {/* Nav links row — separate from logo, desktop only */}
        <nav
          className={`mx-auto hidden max-w-7xl items-center justify-center gap-1 px-8 lg:flex`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:bg-brand-100 hover:text-brand-700'
                  : 'text-white/90 hover:bg-white/15 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-involved"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-all hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4" />
            Get a free trial class
          </a>
        </nav>

        {/* Mobile row — logo + burger */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pb-3 lg:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className={`rounded-lg p-2 transition-colors ${
              scrolled ? 'text-slate-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <span className="flex-1" />
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
            open ? 'max-h-[460px] border-t border-brand-100' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-100 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Sparkles className="h-4 w-4" />
              Get a free trial class
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
