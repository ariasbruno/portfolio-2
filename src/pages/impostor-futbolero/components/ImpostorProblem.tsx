import { impostorFutbolero } from '@/i18n/es/projects/impostor-futbolero';
import { FormattedText } from '@/components/ui/formatted-text';

export function ImpostorProblem() {
  const { challenge, solution, solutionCards } = impostorFutbolero.detail;

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-dark relative">
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-24">

        {/* The Problem */}
        <div>
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">01. {challenge?.title}</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            <FormattedText text={challenge?.title || ''} />
          </h2>
          <div className="prose prose-invert text-white/70">
            <FormattedText
              text={challenge?.text || ''}
              className="text-lg leading-relaxed block"
            />
            {challenge?.points && (
              <ul className="space-y-4 mt-8">
                {challenge.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-white/40">•</span>
                    <span><FormattedText text={point} /></span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* The Solution */}
        <div className="md:pt-32">
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">02. {solution?.title}</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            <FormattedText text={solution?.title || ''} />
          </h2>
          <div className="prose prose-invert text-white/70">
            <FormattedText
              text={solution?.text || ''}
              className="text-lg leading-relaxed block"
            />
            {solutionCards && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                {solutionCards.map((card, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="font-serif text-white font-medium mb-2">{card.title}</h3>
                    <p className="text-sm text-white/60">{card.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}


