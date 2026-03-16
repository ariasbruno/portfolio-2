import { torneitos } from '@/i18n/es/projects/torneitos';
import { FormattedText } from '@/components/ui/formatted-text';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TorneitosOverview() {
  // Reveal hook
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const overview = torneitos.detail.overview;

  if (!overview) return null;

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={revealRef}>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">{overview.title}</h2>
          <div className="text-lg md:text-xl text-white/60 leading-relaxed space-y-8 font-light">
            {overview.paragraphs.map((para, i) => (
              <p key={i}>
                <FormattedText text={para} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
