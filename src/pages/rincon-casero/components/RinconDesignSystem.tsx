import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';
import Logo from './Logo';

export function RinconDesignSystem() {
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });

  const colors = [
    { name: 'Terracota', hex: '#872b1b', class: 'bg-p-rincon-primary' },
    { name: 'Crema Dorada', hex: '#e6c786', class: 'bg-p-rincon-primary-foreground' },
    { name: 'Verde Oscuro', hex: '#162a1b', class: 'bg-p-rincon-secondary' },
  ];

  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-p-rincon-secondary text-p-rincon-primary-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" precedence="default" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" precedence="default" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap"
        // @ts-ignore - precedence is a React 19 attribute for hoisting
        precedence="default"
      />
      <div className="absolute top-0 left-0 h-full w-full hero-pattern-dark"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Typography */}
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-p-rincon-primary-foreground">{rinconCasero.detail.identity?.sectionTitle}</h2>
            <p className="text-p-rincon-primary-foreground/70 text-lg max-w-md">
              {rinconCasero.detail.identity?.intro}
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-p-rincon-primary-foreground/20 pl-6">
              <span className="block text-xs uppercase tracking-widest text-p-rincon-primary-foreground/50 mb-2">Display Font</span>
              <p className="text-5xl md:text-6xl font-paytone leading-none">Paytone One</p>
              <p className="text-sm text-p-rincon-primary-foreground/50 mt-2">Usada para títulos y marcas. Gruesa y amigable.</p>
            </div>

            <div className="border-l-2 border-p-rincon-primary-foreground/20 pl-6">
              <span className="block text-xs uppercase tracking-widest text-p-rincon-primary-foreground/50 mb-2">Body Font</span>
              <p className="text-2xl font-sans">Inter / Sans-Serif</p>
              <p className="text-sm text-p-rincon-primary-foreground/50 mt-2">Neutra y legible para UI y textos largos.</p>

            </div>
            <p className="text-p-rincon-primary-foreground/40 text-sm mt-4 font-mono">
              Logotipo y patrón diseñados con <span className="font-extrabold text-p-rincon-primary-foreground/60">Inkscape</span>.
            </p>
          </div>
        </div>



        {/* Colors & Logo */}
        <div className="flex flex-col h-full justify-center">
          <div
            ref={revealRef}
            className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden flex items-center justify-center p-8 md:p-12"
          >
            <Logo className="w-full h-full max-w-[280px] md:max-w-[320px] drop-shadow-2xl drop-shadow-black/50" />
          </div>

          <div className="grid grid-cols-3 gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-2xl">
            {colors.map((color, i) => (
              <div
                key={color.name}
                style={{ transitionDelay: `${i * 100}ms` }}
                data-cursor-type={copiedColor === color.hex ? "default" : "copy"}
                onClick={() => handleCopy(color.hex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCopy(color.hex);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group aspect-square relative rounded-xl overflow-hidden shadow-lg cursor-none"
              >
                <div className={`absolute inset-0 ${color.class}`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="text-center p-2">
                    {copiedColor === color.hex ? (
                      <p className="text-white font-bold text-xs md:text-sm">¡Copiado!</p>
                    ) : (
                      <>
                        <p className="text-white font-bold text-xs md:text-sm">{color.name}</p>
                        <p className="text-white/80 text-[10px] font-mono mt-1 uppercase">{color.hex}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
