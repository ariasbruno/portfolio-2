import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { translations } from '@/i18n/translations';

interface ProjectLink {
  title: string;
  href: string;
  subtitle?: string;
  disabled?: boolean;
}

interface ProjectFooterNavProps {
  prevProject?: ProjectLink;
  nextProject?: ProjectLink;
  accentColor?: string; // e.g. "group-hover:text-yellow-500"
  className?: string;
}

export function ProjectFooterNav({
  prevProject,
  nextProject,
  accentColor = "group-hover:text-white",
  className = ""
}: ProjectFooterNavProps) {
  return (
    <footer className={`w-full bg-[#1a1a1a] border-t border-white/5 ${className}`}>
      <div className="max-w-container mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {/* Previous Project */}
          {prevProject ? (
            <Link
              to={prevProject.href}
              data-cursor-type="prev"
              className="group relative block p-12 md:p-24 overflow-hidden cursor-none"
            >
              <div className="absolute inset-0 bg-white/1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 will-change-transform" />
              <div className="relative z-10">
                <span className={`block text-xs font-mono text-white/40 uppercase tracking-widest mb-4 transition-colors ${accentColor}`}>
                  <ArrowLeft className="w-3 h-3 inline mr-2" />
                  {prevProject.subtitle || translations.common.prev}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif text-white/80 group-hover:text-white transition-colors">
                  {prevProject.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block bg-[#1a1a1a]" /> // Spacer if no prev project
          )}

          {/* Next Project */}
          {nextProject ? (
            <Link
              to={nextProject.href}
              data-cursor-type="next"
              className="group relative block p-12 md:p-24 overflow-hidden text-right cursor-none"
            >
              <div className="absolute inset-0 bg-white/1 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 will-change-transform" />
              <div className="relative z-10">
                <span className={`block text-xs font-mono text-white/40 uppercase tracking-widest mb-4 transition-colors ${accentColor}`}>
                  {nextProject.subtitle || translations.common.next}
                  <ArrowRight className="w-3 h-3 inline ml-2" />
                </span>
                <h3 className="text-2xl md:text-4xl font-serif text-white/80 group-hover:text-white transition-colors">
                  {nextProject.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block bg-[#1a1a1a]" /> // Spacer
          )}
        </div>
      </div>
    </footer>
  );
}
