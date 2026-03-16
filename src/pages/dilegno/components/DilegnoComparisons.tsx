import { useRef, useState, useEffect } from 'react';
import { ComparisonSlider } from './ComparisonSlider';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dilegno } from '@/i18n/es/projects/dilegno';
import { FormattedText } from '@/components/ui/formatted-text';

export function DilegnoComparisons() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const data = dilegno.detail.comparisons_structured;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (expandedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedId]);

  if (!data) return null;

  const expandedItem = data.items.find(c => c.id === expandedId);

  // Original images mapping
  const images: Record<string, { before: string; after: string }> = {
    home: { before: '/images/dilegno/comparativa/antes/home.webp', after: '/images/dilegno/comparativa/despues/home.webp' },
    navegacion: { before: '/images/dilegno/comparativa/antes/nav.webp', after: '/images/dilegno/comparativa/despues/nav.webp' },
    'quienes-somos': { before: '/images/dilegno/comparativa/antes/about.webp', after: '/images/dilegno/comparativa/despues/about.webp' },
    catalogo: { before: '/images/dilegno/comparativa/antes/products.webp', after: '/images/dilegno/comparativa/despues/products.webp' },
    servicios: { before: '/images/dilegno/comparativa/antes/services.webp', after: '/images/dilegno/comparativa/despues/services.webp' },
    contacto: { before: '/images/dilegno/comparativa/antes/contact.webp', after: '/images/dilegno/comparativa/despues/contact.webp' },
    trabajo: { before: '/images/dilegno/comparativa/antes/job.webp', after: '/images/dilegno/comparativa/despues/job.webp' },
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
      {/* Background pattern (Square Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="max-w-3xl">
          <span className="text-p-dilegno-primary text-xs font-bold tracking-widest uppercase mb-4 block">Transformación Total</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            <FormattedText italicStyle='text-p-dilegno-primary' text={data.sectionSubtitle} />
          </h2>
          <p className="text-lg text-gray-400">
            {data.sectionDesc}
          </p>
        </div>

        <div className="hidden md:flex gap-4">
          <Button
            onClick={() => scroll('left')}
            variant="icon"
            size="icon"
            className="hover:bg-p-dilegno-primary hover:text-black hover:border-p-dilegno-primary cursor-none"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => scroll('right')}
            variant="icon"
            size="icon"
            className="hover:bg-p-dilegno-primary hover:text-black hover:border-p-dilegno-primary cursor-none"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.items.map((item, index) => (
            <div key={item.id} className="min-w-[90vw] md:min-w-[95vw] lg:min-w-[1000px] snap-center">
              <div className="flex flex-col gap-8 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl h-full backdrop-blur-sm">

                {/* Slider (Top) */}
                <div className="w-full">
                  <ComparisonSlider
                    beforeImage={images[item.id]?.before || ''}
                    afterImage={images[item.id]?.after || ''}
                    beforeLabel={item.before.label}
                    afterLabel={item.after.label}
                    className="w-full shadow-2xl shadow-black/50 aspect-video md:aspect-21/9"
                    onExpand={() => setExpandedId(item.id)}
                  />
                </div>

                {/* Text Content (Bottom) */}
                <div className="w-full max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded bg-p-dilegno-primary/10 text-p-dilegno-primary text-[10px] font-mono uppercase tracking-widest border border-p-dilegno-primary/20">
                      Cambio {index + 1} / {data.items.length}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-p-dilegno-primary font-medium italic mb-6">
                    {item.subtitle}
                  </p>
                  <div className="text-gray-400 mb-0 leading-relaxed text-sm md:text-base">
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2">
                        <li className="font-bold text-red-500 border-b border-red-500 pb-1 mb-2">{item.before.label}</li>
                        {item.before.points.map((pt, j) => (
                          <li key={j} className="text-sm">
                            <FormattedText text={pt} />
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        <li className="font-bold text-p-dilegno-primary border-b border-p-dilegno-primary pb-1 mb-2">{item.after.label}</li>
                        {item.after.points.map((pt, j) => (
                          <li key={j} className="text-sm">
                            <FormattedText text={pt} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal View */}
      {expandedId && expandedItem && (
        <div className="fixed inset-0 z-100 bg-black flex flex-col animate-in fade-in duration-300">
          <div className="p-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
            <div>
              <h4 className="text-white font-serif">{expandedItem.title}</h4>
              <p className="text-p-dilegno-primary text-xs">{expandedItem.subtitle}</p>
            </div>
            <Button
              onClick={() => setExpandedId(null)}
              variant="icon"
              size="icon"
              className="hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex-1 relative overflow-y-auto flex px-4 pb-20 pt-4 md:pt-12 no-scrollbar">
            <div className="w-full max-w-7xl mx-auto h-max relative">
              <ComparisonSlider
                beforeImage={images[expandedId]?.before || ''}
                afterImage={images[expandedId]?.after || ''}
                beforeLabel={expandedItem.before.label}
                afterLabel={expandedItem.after.label}
                className="w-full h-auto shadow-2xl"
                isExpandedMode={true}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
