
import { rcCommander } from '@/i18n/es/projects/rc-commander';

export const RCCommanderTechStack = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-16">{rcCommander.detail.techStack_rc?.sectionTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {rcCommander.detail?.techStack?.map((tech: { name: string; description?: string }, index: number) => (
            <div key={index} className="bg-black p-8 md:p-12 hover:bg-white/5 transition-colors group flex flex-col items-center justify-center">
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#ef4444] transition-colors">
                {tech.name}
              </h3>
              <p className="text-white/40 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
