import { impostorFutbolero } from '@/i18n/es/projects/impostor-futbolero';

export function ImpostorLogic() {
  const { logic } = impostorFutbolero.detail;

  if (!logic) return null;

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
      {/* Subtle grid background if needed, or just clean */}
      <div className="absolute inset-0 bg-white/2 bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20"></div>

      <div className="max-w-container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">{logic.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{logic.sectionTitle}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{logic.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Logic Blocks */}
          <div className="space-y-6">
            {logic.blocks.map((block, idx) => (
              <div key={idx} className="p-6 bg-white/5 border-l-2 border-white/20 rounded-r-sm hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-serif mb-2">{block.title}</h3>
                <p className="text-white/60 text-sm">{block.desc}</p>
              </div>
            ))}
          </div>

          {/* Security & Firestore */}
          <div className="bg-white/5 rounded-sm p-8 border border-white/10">
            <h3 className="text-2xl font-serif mb-6">{logic.security.title}</h3>
            <ul className="space-y-4">
              {logic.security.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h4 className="font-serif text-white font-medium">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

