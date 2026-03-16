import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, ArrowUpRightIcon } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';
import { FormattedText } from '@/components/ui/formatted-text';

export function RinconOpenSource() {
  const { openSourceSection } = rinconCasero.detail;
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });

  if (!openSourceSection) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={revealRef}
          className="bg-white/2 border border-white/10 p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-p-rincon-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 p-32 bg-p-rincon-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <h2 className="text-3xl font-serif text-white mb-6">{openSourceSection.sectionTitle}</h2>
          <div className="space-y-6 text-white/60 leading-relaxed font-light mb-10 text-center">
            <p>
              {openSourceSection.p1}
            </p>
            <div className="block">
              <FormattedText text={openSourceSection.p2} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/ariasbruno/rincon-casero"
              isExternal
              data-cursor-type="button-round-external"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:text-black rounded-full font-medium hover:bg-white/90 transition-colors cursor-none"
            >
              <Github className="w-5 h-5" />
              {openSourceSection.repoBtn}
            </Link>
            <Link
              href="https://rinconcasero.com.ar"
              isExternal
              data-cursor-type="button-round-external"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors cursor-none"
            >
              rinconcasero.com.ar
              <ArrowUpRightIcon className="w-4 h-4 animate-svg-on-hover" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
