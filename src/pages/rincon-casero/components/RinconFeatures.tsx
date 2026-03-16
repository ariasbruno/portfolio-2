import { useRef, useState, useCallback } from 'react';
import { UtensilsCrossed, ShoppingCart, MessageCircle, Zap } from 'lucide-react';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';
import { FormattedText } from '@/components/ui/formatted-text';

export function RinconFeatures() {
  const { featuresSection } = rinconCasero.detail;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
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

  if (!featuresSection || !featuresSection.features) return null;

  const featureIcons = [
    <UtensilsCrossed key="utensils" className="w-6 h-6 text-p-rincon-primary-foreground" />,
    <ShoppingCart key="cart" className="w-6 h-6 text-p-rincon-primary-foreground" />,
    <MessageCircle key="message" className="w-6 h-6 text-p-rincon-primary-foreground" />,
    <Zap key="zap" className="w-6 h-6 text-p-rincon-primary-foreground" />,
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 px-6 md:px-12 bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#f5f5f5]">{featuresSection.sectionTitle}</h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
            {featuresSection.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuresSection.features.map((feature, idx) => (
            <div
              key={feature.title}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="relative rounded-xl cursor-default group"
            >
              {/* Glow border layer */}
              <div
                className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-500"
                style={{
                  opacity,
                  background: `radial-gradient(400px circle at ${positions[idx]?.x || 0}px ${positions[idx]?.y || 0}px, rgba(230, 199, 134, 0.4), transparent 60%)`,
                }}
              />

              {/* Card Content */}
              <div className="relative rounded-xl bg-[#1c1c1c] p-8 h-full border border-white/5 transition-colors duration-300">
                <div className="w-12 h-12 bg-p-rincon-primary-foreground/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {featureIcons[idx]}
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 text-[#f5f5f5]">{feature.title}</h3>
                <div className="text-white/50 leading-relaxed text-sm">
                  <FormattedText text={feature.desc} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
