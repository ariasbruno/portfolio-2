import { useScrollReveal } from '@/hooks/useScrollReveal';
import { impoStar } from '@/i18n/es/projects/impostar';
import { FormattedText } from '@/components/ui/formatted-text';

export function ImpostarProblemSolution() {
  const leftRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left' });
  const rightRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right', delay: 150 });
  const { problemSection, solutionSection } = impoStar.detail;

  if (!problemSection || !solutionSection) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-p-impostar-surface text-p-impostar-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* El Problema */}
          <div ref={leftRef} className="space-y-8">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-8 border border-red-500/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif bg-linear-to-br from-red-400 to-red-800 bg-clip-text text-transparent pb-2">{problemSection.title}</h2>
            <div className="space-y-6 text-lg text-p-impostar-gray leading-relaxed">
              <p>
                <FormattedText text={problemSection.intro} />
              </p>
              <ul className="space-y-4 pt-4">
                {problemSection.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* La Solución */}
          <div ref={rightRef} className="space-y-8">
            <div className="w-16 h-16 bg-p-impostar-primary/10 rounded-2xl flex items-center justify-center text-p-impostar-primary mb-8 border border-p-impostar-primary/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif bg-linear-to-br from-blue-400 to-blue-800 bg-clip-text text-transparent pb-2">{solutionSection.title}</h2>
            <div className="space-y-6 text-lg text-p-impostar-gray leading-relaxed">
              <p>
                <FormattedText text={solutionSection.intro} />
              </p>
              <ul className="space-y-4 pt-4">
                {solutionSection.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-p-impostar-primary mt-2 shrink-0" />
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
