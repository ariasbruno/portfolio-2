import { ArrowLeft } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { translations } from '@/i18n/translations';

interface ProjectHeaderProps {
  title?: string;
  backText?: string;
  projectSlug: string;
}

export function ProjectHeader({
  title,
  backText,
  projectSlug,
}: ProjectHeaderProps) {
  const homeLink = '/';
  const finalBackText = backText || translations.common.back;

  const baseClasses = "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 pt-6 pb-4 sm:py-4 md:py-6 flex justify-between items-center";
  const transparentClasses = "mix-blend-difference text-white";

  const navClasses = `${baseClasses} ${transparentClasses} pointer-events-none`;

  const linkTextColorClass = 'text-white hover:text-white/80'; // Simplification since mix-blend handles contrast usually

  // If animate is true, we wrap content in a motion.nav, otherwise just nav
  const Content = (
    <>
      <Link
        to={homeLink}
        state={{ scrollTo: 'work', project: projectSlug }}
        viewTransition
        data-cursor-type="button-round"
        className={`group flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest transition-colors ${linkTextColorClass} cursor-none pointer-events-auto`}
      >
        <div data-cursor-target className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors`}>
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="hidden md:inline">{finalBackText}</span>
      </Link>
      {title && (
        <span className={`text-[10px] md:text-xs font-mono tracking-widest uppercase text-current`}>
          {title}
        </span>
      )}
    </>
  );

  return (
    <nav className={navClasses}>
      <div className="max-w-container mx-auto w-full flex justify-between items-center relative">
        {Content}
      </div>
    </nav>
  );
}
