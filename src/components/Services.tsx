import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Translation } from '../i18n/translations';
import { Title } from './ui/title';
import { FormattedText } from './ui/formatted-text';

interface ServicesProps {
  content: Translation['services'];
}

const Services = ({ content }: ServicesProps) => {
  const [activeService, setActiveService] = useState<string>("01");

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? "" : id);
  };

  return (
    <section id="services" className="min-h-screen bg-brand-dark relative z-20">
      <div className="max-w-container mx-auto w-full py-24 px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        {/* Left Column: Title */}
        <div className="w-full md:w-1/3 sticky top-32">
          <Title title={content.title} subtitle={content.subtitle} />
        </div>

        {/* Right Column: Accordion List */}
        <div className="w-full md:w-2/3">
          <div className="border-t border-white/10">
            {content.items.map((service: { id: string; title: string; subtitle: string; description: string; items: string[] }) => (
              <div key={service.id} className="border-b border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleService(service.id)}
                  data-cursor-type={activeService === service.id ? "collapse" : "expand"}
                  className="w-full py-8 flex items-center justify-between group text-left cursor-none"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-mono text-white/40">{service.id}</span>
                    <h3 className={`text-2xl md:text-4xl font-serif italic transition-colors duration-300 ${activeService === service.id ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-white/40 group-hover:text-white transition-colors duration-300">
                    {activeService === service.id ? (
                      <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    ) : (
                      <Plus size={24} />
                    )}
                  </div>
                </button>

                <div
                  className={`accordion-body ${activeService === service.id ? 'is-open' : ''}`}
                >
                  <div>
                    <div className="pb-12 pt-4 px-2 sm:px-4 md:px-0 md:pl-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      {/* Content */}
                      <div>
                        <h4 className="text-xl font-serif text-white mb-6 font-medium">{service.subtitle}</h4>
                        <FormattedText
                          text={service.description}
                          className="text-white/60 leading-relaxed mb-8 text-sm md:text-base"
                        />

                        <ul className="space-y-3">
                          {service.items.map((item: string) => (
                            <li key={item} className="flex items-center gap-3 text-xs tracking-wider text-blue-400 font-medium">
                              <span className="w-1 h-1 bg-blue-500 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual Content */}
                      <div className="relative aspect-square flex items-center justify-center overflow-hidden">
                        {(() => {
                          const images: Record<string, string> = {
                            "01": "/development.webp",
                            "02": "/autonomy.webp",
                            "03": "/infrastructure.webp",
                            "04": "/identity.webp",
                          };
                          const imgSrc = images[service.id];

                          if (imgSrc) {
                            return (
                              <img
                                src={imgSrc}
                                alt={service.title}
                                className="w-full h-full object-contain transition-all duration-700"
                              />
                            );
                          }

                          return (
                            <div className="w-1/2 h-1/2 border border-white/10 rounded-full flex items-center justify-center">
                              <div className="w-2/3 h-2/3 border border-blue-500/30 rounded-full" />
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
