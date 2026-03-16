import React from 'react';
import { Menu, X } from 'lucide-react';
import { translations } from '../i18n/translations';
import { Button } from './ui/button';

const scrollTo = (id: string, onDone?: () => void) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  onDone?.();
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = translations;

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-white selection:text-black relative overflow-hidden">
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-40" />

      <header className="fixed top-0 left-0 right-0 z-50 md:mix-blend-difference bg-brand-dark/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none pointer-events-none transition-all duration-300">
        <div className="max-w-container mx-auto w-full px-6 py-6 md:px-12 flex justify-between items-center relative">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-cursor-disabled="true" className="text-2xl font-serif font-bold tracking-tight pointer-events-auto text-white">Bruno Arias</button>

          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5 items-center gap-8 text-sm font-medium tracking-wide">
            <button onClick={() => scrollTo('work')} data-cursor-type="link" className="hover:opacity-70 transition-opacity cursor-none pointer-events-auto uppercase text-white">{t.nav.work}</button>
            <button onClick={() => scrollTo('services')} data-cursor-type="link" className="hover:opacity-70 transition-opacity cursor-none pointer-events-auto uppercase text-white">{t.nav.services}</button>
            <button onClick={() => scrollTo('identity')} data-cursor-type="link" className="hover:opacity-70 transition-opacity cursor-none pointer-events-auto uppercase text-white">{t.nav.identity}</button>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="outline"
              size="outline"
              className="cursor-none pointer-events-auto"
              onClick={() => scrollTo('contact')}
            >
              {t.nav.inquire}
            </Button>
          </div>

          <button
            className="md:hidden cursor-none pointer-events-auto text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark z-40 flex flex-col justify-center items-center gap-8 text-2xl font-serif">
          <button onClick={() => scrollTo('work', () => setIsMenuOpen(false))} data-cursor-type="link" className="cursor-none">{t.nav.work}</button>
          <button onClick={() => scrollTo('services', () => setIsMenuOpen(false))} data-cursor-type="link" className="cursor-none">{t.nav.services}</button>
          <button onClick={() => scrollTo('identity', () => setIsMenuOpen(false))} data-cursor-type="link" className="cursor-none">{t.nav.identity}</button>
          <button onClick={() => scrollTo('contact', () => setIsMenuOpen(false))} data-cursor-type="link" className="cursor-none">{t.nav.inquire}</button>
        </div>
      )}

      <main className="relative z-10">
        {children}
      </main>

    </div>
  );
};

export default Layout;
