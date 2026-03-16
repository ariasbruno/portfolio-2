import { Clock, Briefcase, Percent } from 'lucide-react';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';

export function RinconBusinessImpact() {
  const { impactSection } = rinconCasero.detail;

  if (!impactSection) return null;

  const impactIcons = [
    <Clock className="w-8 h-8 text-p-rincon-primary-foreground" />,
    <Percent className="w-8 h-8 text-p-rincon-primary-foreground" />,
    <Briefcase className="w-8 h-8 text-p-rincon-primary-foreground" />,
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f5f5]">{impactSection.sectionTitle}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {impactSection.impacts.map((item, idx) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-p-rincon-primary-foreground/10 flex items-center justify-center mb-6">
                {impactIcons[idx]}
              </div>
              <div className="text-6xl font-serif text-p-rincon-primary-foreground mb-2">{item.value}</div>
              <h3 className="font-serif text-xl font-medium text-white/90 mb-4">{item.label}</h3>
              <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
