import { useRef, useState, useCallback } from 'react';
import { Palette, Bot, Download } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { rcCommander } from '@/i18n/es/projects/rc-commander';
import { FormattedText } from '@/components/ui/formatted-text';

const RCCommanderLogoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <g fill="none" fillRule="evenodd">
      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path fill="currentColor" fillRule="nonzero" d="M13 4a2 2 0 0 1 2 2h4.268A2 2 0 0 1 23 7a2 2 0 0 1-3.732 1h-3.392a8 8 0 0 1 4.062 6H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 1.917-1.998a6.01 6.01 0 0 0-3.569-4.525A2 2 0 0 1 13 10h-2c-.52 0-.993-.198-1.348-.523a6.01 6.01 0 0 0-3.57 4.525A2 2 0 0 1 8 16v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.062a8 8 0 0 1 4.062-6H4.732a2 2 0 1 1 0-2H9a2 2 0 0 1 2-2zm7 12h-2v2h2zM6 16H4v2h2zm7-10h-2v2h2z" />
    </g>
  </svg>
);

export const RCCommanderBranding = () => {
  const { branding } = rcCommander.detail;
  const sectionRef = useRef<HTMLElement>(null);
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

  const colors = [
    { name: 'Ferrari Red', hex: '#6e0000', class: 'bg-[#6e0000]' },
    { name: 'Rosso Corsa', hex: '#ef4444', class: 'bg-[#ef4444]' },
    { name: 'Asphalt Black', hex: '#111111', class: 'bg-[#111111]' },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 px-6 md:px-12 bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6e0000]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            {branding?.sectionTitle}
          </h2>
          <div className="text-white/50 max-w-2xl text-lg">
            <FormattedText text={branding?.sectionIntro || ''} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="md:col-span-5 relative rounded-2xl group cursor-default"
          >
            {/* Glow border layer */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
              style={{
                opacity,
                background: `radial-gradient(600px circle at ${positions[0]?.x ?? 0}px ${positions[0]?.y ?? 0}px, rgba(239, 68, 68, 0.5), transparent 40%)`,
              }}
            />

            {/* Inner content */}
            <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#6e0000]/10 rounded-lg text-[#ef4444]">
                    <RCCommanderLogoIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{branding?.logo.title}</h3>
                </div>
                <p className="text-white/40 text-sm mb-8">{branding?.logo.desc}</p>
              </div>

              <div className="flex-1 flex items-center justify-center bg-black/20 rounded-xl mb-6 border border-white/5 border-dashed overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/ariasbruno/rc-commander/main/assets/brand/logo.svg"
                  alt="RC Commander Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex gap-3">
                <Link
                  href="https://github.com/ariasbruno/rc-commander/tree/main/assets/brand"
                  isExternal
                  data-cursor-type="download"
                  className="flex z-10 items-center gap-2 px-4 py-2 bg-[#ef4444] hover:bg-red-600 hover:text-white text-white rounded-lg text-sm font-medium transition-colors w-fit cursor-none"
                >
                  <Download className="w-4 h-4" />
                  {branding?.logo.downloadBtn}
                </Link>
              </div>
            </div>
          </div>

          {/* Colors & AI Section */}
          <div className="md:col-span-7 flex flex-col gap-8">
            {/* Color Palette */}
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="relative rounded-2xl group cursor-default"
            >
              {/* Glow border layer */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
                style={{
                  opacity,
                  background: `radial-gradient(600px circle at ${positions[1]?.x ?? 0}px ${positions[1]?.y ?? 0}px, rgba(239, 68, 68, 0.5), transparent 40%)`,
                }}
              />

              {/* Inner content */}
              <div className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-[#6e0000]/10 rounded-lg text-[#ef4444]">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{branding?.colors.sectionTitle}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {colors.map((color, index) => (
                    <div key={index} className="space-y-3">
                      <div className={`h-24 rounded-xl ${color.class} border border-white/10 shadow-lg`} />
                      <div>
                        <p className="text-white font-medium">{color.name}</p>
                        <p className="text-white/40 font-mono text-xs">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Generation */}
            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              className="relative rounded-2xl group cursor-default flex-1"
            >
              {/* Glow border layer */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
                style={{
                  opacity,
                  background: `radial-gradient(600px circle at ${positions[2]?.x ?? 0}px ${positions[2]?.y ?? 0}px, rgba(239, 68, 68, 0.5), transparent 40%)`,
                }}
              />

              {/* Inner content */}
              <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-[#6e0000]/10 rounded-lg text-[#ef4444]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{branding?.ai.sectionTitle}</h3>
                </div>

                <div className="text-white/60 mb-6 text-sm leading-relaxed">
                  <FormattedText text={branding?.ai.desc || ''} />
                </div>

                <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-[#ef4444] border border-[#ef4444]/20 overflow-x-auto whitespace-pre-wrap selection-bg-[#ef4444]/30 selection-text-white">
                  "Product shot of a [Red Ferrari F1-75] RC car toy, studio lighting, matte black background, highly detailed, 8k..."
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
