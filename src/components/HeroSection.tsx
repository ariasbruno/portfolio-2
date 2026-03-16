import HeroBg from '../assets/logo.svg';
import type { Translation } from '../i18n/translations';
import { FormattedText } from './ui/formatted-text';

interface HeroSectionProps {
  content: Translation['hero'];
}

const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section className="h-dvh flex flex-col justify-center items-center text-center relative overflow-hidden px-4">
      {/* Background SVG - Better scaling for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] h-full max-h-[300px] sm:max-h-[500px] md:max-h-[700px] lg:max-h-[800px] p-4 sm:p-8 opacity-60 sm:opacity-80 pointer-events-none flex items-center justify-center rotate-45">
        <img src={HeroBg} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] mb-4 text-brand-accent/60 animate-hero-blur-in"
          style={{ animationDuration: '0.8s' }}
        >
          {content.subtitle}
        </p>
        <FormattedText
          text={content.title}
          as="h1"
          className="text-6xl md:text-8xl lg:text-9xl font-serif mb-6 leading-[1.1] sm:leading-tight animate-hero-blur-in"
          style={{ animationDuration: '0.8s', animationDelay: '0.15s' }}
        />
        <FormattedText
          text={content.description}
          className="max-w-xs sm:max-w-md mx-auto text-xs sm:text-sm text-brand-accent/60 leading-relaxed px-2 animate-hero-blur-in"
          style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
