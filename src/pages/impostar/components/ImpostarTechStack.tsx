import { impoStar } from '@/i18n/es/projects/impostar';

export function ImpostarTechStack() {
  const { techStack_impostar } = impoStar.detail;

  if (!techStack_impostar) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-p-impostar-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif bg-linear-to-br from-blue-400 to-blue-800 bg-clip-text text-transparent mb-6 pb-2">{techStack_impostar.sectionTitle}</h2>
        <p className="text-p-impostar-gray mb-16 max-w-2xl mx-auto">
          {techStack_impostar.sectionDesc}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-sm">
          {techStack_impostar.items.map((tech) => (
            <div key={tech.name} className="bg-[#1c1c1e] p-8 md:p-12 hover:bg-[#2c2c2e] transition-colors group">
              <h3 className="font-serif text-xl font-medium text-p-impostar-text mb-2 group-hover:text-p-impostar-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-p-impostar-gray text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

