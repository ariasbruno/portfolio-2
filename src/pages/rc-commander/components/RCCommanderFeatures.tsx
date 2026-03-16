import { useRef, useState, useCallback } from 'react';
import { Globe, Repeat, ShieldCheck } from 'lucide-react';
import { rcCommander } from '@/i18n/es/projects/rc-commander';
import { FormattedText } from '@/components/ui/formatted-text';

export const RCCommanderFeatures = () => {
  const { featuresSection } = rcCommander.detail;
  const sectionRef = useRef<HTMLElement>(null);
  // ... rest of the component initialization

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      setPositions((prev) => {
        const next = [...prev];
        next[i] = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        return next;
      });
    });
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{featuresSection?.sectionTitle}</h2>
          <p className="text-white/50 max-w-2xl mx-auto">{featuresSection?.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Control Universal (Span 7) */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="md:col-span-7 relative rounded-3xl group cursor-default min-h-[400px] animate-hero-blur-in"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Glow border layer */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500"
              style={{
                opacity,
                background: `radial-gradient(600px circle at ${positions[0].x}px ${positions[0].y}px, rgba(239, 68, 68, 0.5), transparent 40%)`,
              }}
            />

            {/* Inner content */}
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-end p-8 md:p-10">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10" />
              <img
                src={featuresSection?.cards?.[0].image}
                alt={featuresSection?.cards?.[0].alt}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />

              <div className="relative z-20">
                <div className="mb-4 p-3 bg-[#6e0000] w-fit rounded-xl text-white shadow-lg shadow-[#6e0000]/30">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">{featuresSection?.cards?.[0].title}</h3>
                <div className="text-white/70 max-w-md text-lg">
                  <FormattedText text={featuresSection?.cards?.[0].desc || ''} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Replay Studio (Span 5) */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="md:col-span-5 relative rounded-3xl group cursor-default min-h-[400px] animate-hero-blur-in"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Glow border layer */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500"
              style={{
                opacity,
                background: `radial-gradient(600px circle at ${positions[1].x}px ${positions[1].y}px, rgba(239, 68, 68, 0.5), transparent 40%)`,
              }}
            />

            {/* Inner content */}
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-end p-8 md:p-10">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/90 z-10" />
              <img
                src={featuresSection?.cards?.[1].image}
                alt={featuresSection?.cards?.[1].alt}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />

              <div className="relative z-20">
                <div className="mb-4 p-3 bg-white/10 backdrop-blur-md border border-white/10 w-fit rounded-xl text-white">
                  <Repeat className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">{featuresSection?.cards?.[1].title}</h3>
                <div className="text-white/70 text-lg">
                  <FormattedText text={featuresSection?.cards?.[1].desc || ''} />
                </div>
              </div>
            </div>
          </div>


          {/* Card 3: Open Source (Full Width) */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className="md:col-span-12 relative rounded-3xl group cursor-default animate-hero-blur-in"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Glow border layer */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500"
              style={{
                opacity,
                background: `radial-gradient(600px circle at ${positions[2].x}px ${positions[2].y}px, rgba(239, 68, 68, 0.5), transparent 40%)`,
              }}
            />

            {/* Inner content */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6e0000]/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="flex-1 text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6e0000]/10 border border-[#6e0000]/20 text-[#ef4444] mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">{featuresSection?.openSource?.badge}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuresSection?.openSource?.title}
                </h3>
                <div className="text-white/60 text-lg max-w-2xl leading-relaxed">
                  <FormattedText text={featuresSection?.openSource?.desc || ''} />
                </div>
              </div>

              {/* Visual Element for Open Source - Code Snippet or Icon Graph */}
              <div className="relative z-10 w-full md:w-auto flex justify-center">
                <div className="grid grid-cols-2 gap-4 opacity-50 font-mono text-xs text-[#ef4444]">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-white/30 mb-2">// Bluetooth.ts</span>
                    connectToDevice(id);
                  </div>
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5 translate-y-4">
                    <span className="block text-white/30 mb-2">// Macro.ts</span>
                    replayAction(sequence);
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
