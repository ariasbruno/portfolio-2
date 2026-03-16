import { useState, useRef, useEffect } from 'react';
import { Car, Cpu, CheckCircle2 } from 'lucide-react';
import { rcCommander } from '@/i18n/es/projects/rc-commander';
import { FormattedText } from '@/components/ui/formatted-text';

export const RCCommanderCompatibility = () => {
  const { compatibility, compatibilitySection } = rcCommander.detail;
  // ... rest of the component initialization


  // -- Glow effect logic --
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [opacity, setOpacity] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPositions = cardRefs.current.map((card) => {
        if (!card) return { x: 0, y: 0 };
        const rect = card.getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      });
      setPositions(newPositions);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);
  // -------------------------

  if (!compatibility) return null;

  return (
    <section
      className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6e0000]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            {compatibility.title}
          </h2>
          <div className="text-white/50 max-w-2xl mx-auto">
            <FormattedText text={compatibilitySection?.sectionSubtitle || ''} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Models List */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="relative rounded-2xl group cursor-default"
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
            <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#6e0000]/10 rounded-lg text-[#ef4444]">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">{compatibilitySection?.modelsTitle}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {compatibility.models.map((model, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white/80 animate-hero-blur-in"
                    style={{ animationDelay: `${index * 50}ms`, animationDuration: '0.4s' }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ef4444] shrink-0" />
                    <span className="text-sm">{model}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Protocols List */}
          <div className="space-y-6">
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="relative rounded-2xl group cursor-default h-full"
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
              <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#6e0000]/10 rounded-lg text-[#ef4444]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">{compatibilitySection?.protocolsTitle}</h3>
                </div>

                <div className="space-y-6">
                  {compatibility.protocols.map((protocol, index) => (
                    <div key={index} className="group">
                      <h4 className="font-serif text-[#ef4444] font-bold mb-2 group-hover:text-red-400 transition-colors">
                        {protocol.name}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {protocol.description}
                      </p>
                      {index < compatibility.protocols.length - 1 && (
                        <div className="h-px bg-white/5 w-full mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

