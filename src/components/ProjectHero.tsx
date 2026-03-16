
import React from 'react';
import { cn } from '@/lib/utils';
import type { Statistics } from '@/i18n/types';

interface ProjectHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  category?: string;
  tags?: string[];
  stats?: Statistics[];
  heroImage: string;
  heroImageAlt: string;
  viewTransitionName?: string;
  background?: React.ReactNode;

  // Design customization
  theme?: {
    sectionClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    categoryClassName?: string;
    tagClassName?: string;
    imageContainerClassName?: string;
    imageWrapperClassName?: string;
    imageClassName?: string;
  };
}

export const ProjectHero = ({
  title,
  subtitle,
  category,
  tags,
  stats,
  heroImage,
  heroImageAlt,
  viewTransitionName,
  background,
  theme = {}
}: ProjectHeroProps) => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden",
        theme.sectionClassName
      )}
    >
      {/* Background Layer */}
      {background && (
        <div className="absolute inset-0 overflow-hidden">
          {background}
        </div>
      )}

      <div className={cn(
        "max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10",
        theme.contentClassName
      )}>
        <div className="order-2 md:order-1 animate-hero-blur-in">
          {category && (
            <div className={cn(
              "inline-block px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5",
              theme.categoryClassName
            )}>
              <span className="text-white/60 text-xs font-mono tracking-widest uppercase">
                {category}
              </span>
            </div>
          )}

          <h1 className={cn(
            "text-6xl md:text-8xl font-serif mb-6 leading-[0.9]",
            theme.titleClassName
          )}>
            {title}
          </h1>

          <div className={cn(
            "text-xl md:text-1xl text-white/70 font-light mb-10 max-w-xl leading-relaxed font-serif italic",
            theme.subtitleClassName
          )}>
            {subtitle}
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs text-white/60 transition-all cursor-default",
                    theme.tagClassName
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl md:text-3xl font-serif mb-1">{stat.value}</h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className={cn(
          "relative h-[400px] md:h-[600px] w-full flex items-center justify-center order-1 md:order-2",
          theme.imageContainerClassName
        )}>
          <div className={cn("relative w-full h-full", theme.imageWrapperClassName)}>
            <div className={cn("absolute top-10 md:top-20 -right-10 md:-right-60 w-[120%] md:w-3xl z-10 overflow-hidden", theme.imageClassName)}>
              <img
                src={heroImage}
                alt={heroImageAlt}
                fetchPriority="high"
                className="w-full h-auto drop-shadow-2xl"
                style={viewTransitionName ? { viewTransitionName } : undefined}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
