import { useScrollReveal } from '@/hooks/useScrollReveal';
import { impoStar } from '@/i18n/es/projects/impostar';
import { FormattedText } from '@/components/ui/formatted-text';

export function ImpostarDesignSystem() {
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const { designSystem } = impoStar.detail;

  if (!designSystem) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-p-impostar-surface text-p-impostar-text relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="/images/impostar/patron.webp" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-p-impostar-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Design Philosophy */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-linear-to-br from-blue-400 to-blue-800 bg-clip-text text-transparent pb-2">{designSystem.sectionTitle}</h2>
              <div className="text-p-impostar-gray text-lg max-w-md">
                <FormattedText text={designSystem.intro} />
              </div>
            </div>

            <div className="space-y-8">
              {designSystem.techniques.map((tech, idx) => (
                <div key={idx} className="border-l-2 border-p-impostar-primary/30 pl-6">
                  <p className="text-2xl font-sans text-p-impostar-text">{tech.title}</p>
                  <p className="text-sm text-p-impostar-gray mt-2">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Visual Representation */}
          <div className="flex flex-col h-full justify-center gap-8">
            {/* Pattern Preview */}
            <div
              ref={revealRef}
              className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img src="/images/impostar/ImpoStar-ico.svg" alt="" className='w-full h-full object-contain' />
              </div>
            </div>

            {/* Color Palette */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1c1c1e] p-4 rounded-xl border border-white/10 shadow-sm">
                <div className="w-full h-8 bg-p-impostar-text mb-2 rounded border border-white/10"></div>
                <p className="text-xs text-p-impostar-gray font-mono">#F5F5F7</p>
                <p className="text-[10px] text-p-impostar-gray/50 uppercase">Text Light</p>
              </div>
              <div className="bg-[#1c1c1e] p-4 rounded-xl border border-white/10 shadow-sm">
                <div className="w-full h-8 bg-p-impostar-primary mb-2 rounded"></div>
                <p className="text-xs text-p-impostar-gray font-mono">#0A84FF</p>
                <p className="text-[10px] text-p-impostar-gray/50 uppercase">Primary Blue</p>
              </div>
              <div className="bg-[#1c1c1e] p-4 rounded-xl border border-white/10 shadow-sm">
                <div className="w-full h-8 bg-p-impostar-surface mb-2 rounded border border-white/10"></div>
                <p className="text-xs text-p-impostar-gray font-mono">#000000</p>
                <p className="text-[10px] text-p-impostar-gray/50 uppercase">Surface Dark</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
