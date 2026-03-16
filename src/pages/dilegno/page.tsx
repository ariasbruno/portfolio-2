import { ProjectHeader } from '../../components/ProjectHeader';
import { useScrollToTop } from '../../hooks/useScrollToTop';

import { ProjectHero } from '../../components/ProjectHero';
import DotGrid from './components/DotGrid';
import { dilegno } from '@/i18n/es/projects/dilegno';
import { DilegnoOrigin } from './components/DilegnoOrigin';
import { DilegnoComparisons } from './components/DilegnoComparisons';
import { DilegnoImpact } from './components/DilegnoImpact';
import { DilegnoTechStack } from './components/DilegnoTechStack';
import { DilegnoFooterNav } from './components/DilegnoFooterNav';

export default function DilegnoPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white selection:bg-p-dilegno-primary selection:text-black font-sans overflow-x-clip">

      {/* Top Bar */}
      <ProjectHeader
        projectSlug="dilegno"
        title="04 — Dilegno"
      />

      <main>
        <ProjectHero
          title={dilegno.detail.title}
          subtitle={dilegno.detail.subtitle}
          category={dilegno.detail.category}
          tags={dilegno.summary.tags}
          heroImage="/images/dilegno/hero.webp"
          heroImageAlt="Dilegno Interface"
          viewTransitionName="dilegno-hero"
          background={<DotGrid />}
          theme={{
            categoryClassName: "border-p-dilegno-primary/30 bg-p-dilegno-primary/10",
            tagClassName: "hover:border-p-dilegno-primary/50 hover:text-p-dilegno-primary",
            subtitleClassName: "text-xl md:text-2xl font-serif italic mb-10 max-w-xl",
            imageClassName: "w-[140%] md:w-[120%] z-10"
          }}
        />
        <DilegnoOrigin />
        <DilegnoComparisons />
        <DilegnoImpact />
        <DilegnoTechStack />
        <DilegnoFooterNav />
      </main>

    </div>
  );
}
