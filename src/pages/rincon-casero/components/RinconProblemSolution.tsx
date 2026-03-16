import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';
import { FormattedText } from '@/components/ui/formatted-text';

export function RinconProblemSolution() {
  const leftRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left' });
  const rightRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right', delay: 150 });
  const { challenge, solution } = rinconCasero.detail;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">

          {/* Problem */}
          <div ref={leftRef}>
            <h2 className="text-3xl font-serif text-white/40 mb-8 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-900/50" />
              {challenge?.title}
            </h2>
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed">
                <FormattedText text={challenge?.text || ''} />
              </p>
              <ul className="space-y-4">
                {challenge?.points?.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/40 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-900/40 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div ref={rightRef} className="relative">
            <div className="absolute -inset-6 bg-p-rincon-primary-foreground/5 rounded-3xl -z-10 blur-2xl" />

            <h2 className="text-3xl font-serif text-p-rincon-primary-foreground mb-8 flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              {solution?.title}
            </h2>
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                <FormattedText text={solution?.text || ''} />
              </p>
              <ul className="space-y-4">
                {solution?.points?.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-p-rincon-primary-foreground mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
