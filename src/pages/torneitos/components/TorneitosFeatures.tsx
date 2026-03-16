import { useRef, useState, useCallback } from 'react';
import { LayoutGrid, Users2, Zap } from 'lucide-react';
import { torneitos } from '@/i18n/es/projects/torneitos';
import { FormattedText } from '@/components/ui/formatted-text';

export function TorneitosFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featuresData = torneitos.detail.features_structured;
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

  const icons = [
    <LayoutGrid key="0" className="w-6 h-6 text-white" />,
    <Users2 key="1" className="w-6 h-6 text-white" />,
    <Zap key="2" className="w-6 h-6 text-white" />,
  ];

  if (!featuresData) return null;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 px-6 md:px-12 bg-zinc-950 relative"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">{featuresData.sectionTitle}</h2>
          <p className="text-white/40 text-lg font-light">{featuresData.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuresData.items.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative rounded-sm cursor-default"
            >
              {/* Glow border layer — follows cursor even from outside */}
              <div
                className="pointer-events-none absolute -inset-px rounded-sm transition-opacity duration-500"
                style={{
                  opacity,
                  background: `radial-gradient(400px circle at ${positions[i].x}px ${positions[i].y}px, rgba(190, 242, 100, 0.55), transparent 60%)`,
                }}
              />
              {/* Inner content */}
              <div className="relative rounded-sm bg-brand-dark p-8 h-full border border-white/10">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                  <div className="text-white transition-colors duration-300">
                    {icons[i]}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  <FormattedText text={feature.description} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
