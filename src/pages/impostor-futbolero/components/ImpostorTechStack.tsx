import { impostorFutbolero } from '@/i18n/es/projects/impostor-futbolero';
import { FormattedText } from '@/components/ui/formatted-text';

export function ImpostorTechStack() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">{impostorFutbolero.detail.techStack_impostor?.sectionTitle}</h2>
          <p className="text-white/60">{impostorFutbolero.detail.techStack_impostor?.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impostorFutbolero.detail.techStack?.map((tech: { name: string; description: string }) => (
            <div key={tech.name} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
              <h3 className="font-serif text-lg font-medium text-white mb-2">{tech.name}</h3>
              <FormattedText
                text={tech.description}
                className="text-sm text-white/60 leading-relaxed block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
