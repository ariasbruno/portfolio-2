import { Sparkles, Zap, CheckCircle } from 'lucide-react';
import { dilegno } from '@/i18n/es/projects/dilegno';
import { translations } from '@/i18n/translations';

export function DilegnoImpact() {
  const t = translations;
  const impact = dilegno.detail.impact;
  const icons = [Sparkles, Zap, CheckCircle];

  if (!impact) return null;

  return (
    <section className="py-20 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#333_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.1]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-p-dilegno-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-p-dilegno-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            {impact.sectionTitle}
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-white">{impact.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {impact.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group relative p-8 bg-white/5 rounded-xl border border-white/10 hover:border-p-dilegno-primary/30 transition-all duration-500 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                  <Icon className="w-10 h-10 text-gray-400 group-hover:text-p-dilegno-primary transition-colors" strokeWidth={1.5} />
                  <span className="text-xs font-mono text-gray-500">{item.category}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase text-red-500/80 font-bold mb-1">{t.common.legacyLabel}</p>
                    <p className="text-gray-400 text-sm">{item.before}</p>
                  </div>
                  <div className="h-px w-full bg-white/10"></div>
                  <div>
                    <p className="text-xs uppercase text-green-500/80 font-bold mb-1">{t.common.modernLabel}</p>
                    <p className="text-white text-lg font-medium">{item.afterTitle}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.afterDesc}</p>
                    <div className="mt-3 inline-block px-2 py-1 rounded bg-p-dilegno-primary/10 text-p-dilegno-primary text-xs font-bold border border-p-dilegno-primary/20">
                      {item.badge}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
