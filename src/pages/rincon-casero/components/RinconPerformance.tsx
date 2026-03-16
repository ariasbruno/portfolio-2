
import { useRef, useState, useCallback } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from '@/components/ui/link';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';
import { FormattedText } from '@/components/ui/formatted-text';

export function RinconPerformance() {
  const { performanceSection } = rinconCasero.detail;
  const cardRef = useRef<HTMLDivElement>(null);
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);



  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  if (!performanceSection) return null;

  return (
    <section
      className="py-12 md:py-24 px-6 md:px-12 bg-[#1a1a1a] relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="order-2 md:order-1 space-y-8">


            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f5f5f5] leading-tight">
              <FormattedText accentColor='text-p-rincon-primary-foreground' text={performanceSection.title} />
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              {performanceSection.desc}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center order-1 md:order-2 gap-4">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl group cursor-default"
            >
              {/* Glow border layer */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10"
                style={{
                  opacity,
                  background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(230, 199, 134, 0.15), transparent 60%)`,
                }}
              />

              <div
                ref={revealRef}
                className="relative rounded-2xl bg-white/2 p-2 border border-white/10 shadow-2xl overflow-hidden"
              >
                <img
                  src="/images/rincon-casero/speed-insights.webp"
                  alt="Rendimiento en Lighthouse"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent opacity-20 pointer-events-none rounded-xl" />
              </div>
            </div>
            <Link
              href="https://pagespeed.web.dev/analysis/https-rinconcasero-com-ar/93h2hsuar2?form_factor=desktop"
              isExternal
              data-cursor-type="external"
              className="text-xs text-p-rincon-primary-foreground mt-4 cursor-none"
            >
              PageSpeed Insights
              <ArrowUpRightIcon className="w-4 h-4 animate-svg-on-hover" />

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
