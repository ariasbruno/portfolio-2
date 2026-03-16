
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';

export function RinconTechStack() {
  const { techStack_rincon } = rinconCasero.detail;

  if (!techStack_rincon) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#f5f5f5] mb-16">{techStack_rincon.sectionTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {techStack_rincon.items.map((tech) => (
            <div key={tech.name} className="bg-[#1a1a1a] p-8 md:p-12 hover:bg-[#222] transition-colors group">
              <h3 className="font-serif text-xl font-medium text-[#f5f5f5] mb-2 group-hover:text-p-rincon-primary-foreground transition-colors">
                {tech.name}
              </h3>
              <p className="text-white/40 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
