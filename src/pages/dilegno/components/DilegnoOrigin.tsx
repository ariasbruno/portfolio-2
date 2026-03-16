import DilegnoHeroLogo from './DilegnoHeroLogo';
import { dilegno } from '@/i18n/es/projects/dilegno';
import { FormattedText } from '@/components/ui/formatted-text';

export function DilegnoOrigin() {
  const origin = dilegno.detail.origin;

  if (!origin) return null;

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#333_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.1]"></div>
        <DilegnoHeroLogo xPercent={28} yPercent={90} color="#fdb913" className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none scale-150 origin-bottom-left transform" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-p-dilegno-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <span className="text-p-dilegno-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              {origin.spanSection}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              <FormattedText italicStyle='text-p-dilegno-primary' text={origin.title} />
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-lg text-gray-400 leading-relaxed">
              {origin.paragraph}
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-red-500/50 pl-4 hover:translate-x-1.5 transition-transform duration-300">
                <h4 className="font-serif text-sm font-bold text-white uppercase mb-1">{origin.problem.title}</h4>
                <p className="text-sm text-gray-500">{origin.problem.desc}</p>
              </div>
              <div className="border-l-2 border-p-dilegno-primary/50 pl-4 hover:translate-x-1.5 transition-transform duration-300">
                <h4 className="font-serif text-sm font-bold text-white uppercase mb-1">{origin.mission.title}</h4>
                <p className="text-sm text-gray-500">{origin.mission.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
