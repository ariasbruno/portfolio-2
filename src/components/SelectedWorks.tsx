import { useState } from 'react';
import { Link } from './ui/link';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Translation } from '../i18n/translations';
import { Title } from './ui/title';
import { FormattedText } from './ui/formatted-text';

interface SelectedWorksProps {
  content: Translation['works'];
  initialProject?: string;
}

const SelectedWorks = ({ content, initialProject }: SelectedWorksProps) => {
  const projects = content.projects;
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialProject) {
      const index = projects.findIndex((p: { slug: string }) => p.slug === initialProject);
      return index >= 0 ? index : 0;
    }
    return 0;
  });

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev: number) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev: number) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 w-full relative">
      {/* Background Elements */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] rainbow-glow rotate-[-25deg] scale-150" />
      </div>

      <div className="max-w-container mx-auto w-full">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 relative z-10">
          <div>
            <Title
              title={content.title}
              subtitle={content.subtitle}
            />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <Button
              onClick={prevSlide}
              variant="icon"
              size="icon"
              aria-label="Previous project"
              className="cursor-none w-10 h-10 sm:w-12 sm:h-12"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="icon"
              size="icon"
              aria-label="Next project"
              className="cursor-none w-10 h-10 sm:w-12 sm:h-12"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative min-h-[600px] md:h-[700px] w-full bg-[#050505] border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-center">
          {/* Card background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
          </div>

          {/* Slide content — CSS opacity transition on key change */}
          <div
            key={currentIndex}
            className={`relative z-10 w-full h-full p-8 md:p-16 lg:p-24 grid md:grid-cols-12 gap-8 md:gap-0 items-center overflow-hidden ${direction === 'next' ? 'animate-project-slide-in-right' : 'animate-project-slide-in-left'
              }`}
          >
            {/* Background Project Number */}
            <div className="absolute -bottom-10 -left-10 text-[20rem] md:text-[35rem] font-serif font-black italic tracking-tighter leading-none pointer-events-none select-none z-0 text-white opacity-[0.03]">
              {String(currentIndex + 1).padStart(2, '0')}
            </div>

            {/* Content Column */}
            <div className="md:col-span-12 lg:col-span-5 order-2 lg:order-1 relative z-10 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-purple-500" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-purple-400 uppercase">
                    {projects[currentIndex].category}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-serif mb-8 text-white leading-[0.85] tracking-tight">
                  {projects[currentIndex].title.split(' ').map((word: string, i: number) => (
                    <span key={`${projects[currentIndex].slug}-title-word-${i}`} className={i === 1 ? "italic font-extralight block opacity-80" : "block font-bold"}>
                      {word}
                    </span>
                  ))}
                </h3>

                <FormattedText
                  text={projects[currentIndex].description}
                  className="text-brand-accent/60 text-base sm:text-lg leading-relaxed mb-10 max-w-sm block"
                />

                <div className="flex gap-2 sm:gap-3 mb-12 flex-wrap">
                  {projects[currentIndex].tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-brand-accent/50 bg-white/5 font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/work/${projects[currentIndex].slug}`}
                  viewTransition
                  variant="ghost"
                  data-cursor-type="redirect"
                  className="group inline-flex items-center gap-4 cursor-none text-sm sm:text-base font-bold uppercase tracking-widest"
                >
                  {content.explore}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform animate-svg-on-hover" />
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="md:col-span-12 lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end relative z-10">
              <RouterLink
                to={`/work/${projects[currentIndex].slug}`}
                viewTransition
                data-cursor-disabled="true"
                className="block w-full h-full cursor-none no-underline hover:no-underline"
              >
                {projects[currentIndex].image && (
                  <div className="relative group/img">
                    <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-[60px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      width="800"
                      height="600"
                      loading={currentIndex === 0 ? "eager" : "lazy"}
                      fetchPriority={currentIndex === 0 ? "high" : "auto"}
                      decoding={currentIndex === 0 ? "sync" : "async"}
                      className="w-full max-w-[320px] sm:max-w-md md:max-w-2xl h-auto aspect-4/3 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:group-hover/img:scale-[1.02] transition-transform duration-700"
                      style={
                        projects[currentIndex].slug === 'torneitos'
                          ? { viewTransitionName: 'torneitos-hero' }
                          : projects[currentIndex].slug === 'rincon-casero'
                            ? { viewTransitionName: 'rincon-hero' }
                            : projects[currentIndex].slug === 'impostor-futbolero'
                              ? { viewTransitionName: 'impostor-hero' }
                              : projects[currentIndex].slug === 'dilegno'
                                ? { viewTransitionName: 'dilegno-hero' }
                                : projects[currentIndex].slug === 'impostar'
                                  ? { viewTransitionName: 'impostar-hero' }
                                  : projects[currentIndex].slug === 'rc-commander'
                                    ? { viewTransitionName: 'rc-commander-hero' }
                                    : undefined
                      }
                    />
                  </div>
                )}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
