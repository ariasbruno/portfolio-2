import { impostorFutbolero } from '@/i18n/es/projects/impostor-futbolero';

export function ImpostorFlow() {
  const { flowSection } = impostorFutbolero.detail;

  if (!flowSection) return null;

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-dark border-t border-white/10">
      <div className="max-w-container mx-auto">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">{flowSection.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{flowSection.sectionTitle}</h2>
          <p className="text-white/60 max-w-2xl text-lg">{flowSection.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10" />

          {flowSection.steps.map((step) => (
            <div key={step.step} className="relative group">
              <div className="w-24 h-24 rounded-full bg-brand-dark border border-white/20 flex items-center justify-center mb-8 relative z-10 group-hover:bg-white group-hover:text-brand-dark transition-all duration-500">
                <span className="text-2xl font-serif">{step.step}</span>
              </div>
              <h3 className="text-xl font-serif mb-4">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

