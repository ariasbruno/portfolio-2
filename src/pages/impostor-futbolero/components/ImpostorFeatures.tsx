import { impostorFutbolero } from '@/i18n/es/projects/impostor-futbolero';
import { FormattedText } from '@/components/ui/formatted-text';
import { Zap, Lock, MessageSquare, Clock, Smartphone, Code } from 'lucide-react';

export function ImpostorFeatures() {
  const icons = [Zap, Lock, Clock, MessageSquare, Smartphone, Code]; // Mapping icons to features manually for now

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-[var(--spacing-container)] mx-auto">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">{impostorFutbolero.detail.features_structured?.sectionTitle}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{impostorFutbolero.detail.features_structured?.sectionSubtitle}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impostorFutbolero.detail.features && impostorFutbolero.detail.features.map((feature, i) => {
            // Fallback icons if map is larger than icons array
            const Icon = icons[i % icons.length];
            return (
              <div key={feature.title} className="p-8 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <FormattedText
                  text={feature.description}
                  className="text-white/60 leading-relaxed block"
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
