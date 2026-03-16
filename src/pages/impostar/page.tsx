
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ProjectHeader } from '../../components/ProjectHeader';

import { ProjectHero } from '../../components/ProjectHero';
import StarGrid from './components/StarGrid';
import { impoStar } from '@/i18n/es/projects/impostar';
import { ImpostarProblemSolution } from './components/ImpostarProblemSolution';
import { ImpostarFlow } from './components/ImpostarFlow';
import { ImpostarDesignSystem } from './components/ImpostarDesignSystem';
import { ImpostarTechStack } from './components/ImpostarTechStack';
import { ImpostarFooterNav } from './components/ImpostarFooterNav';

export default function ImpostarPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-p-impostar-surface text-p-impostar-text selection:bg-p-impostar-primary selection:text-white font-sans overflow-x-clip">

      {/* Navbar - Custom implementation for this page */}
      <ProjectHeader
        projectSlug="impostar"
        title="05 — ImpoStar"
      />

      <main>
        <ProjectHero
          title={<>Impo<span className="text-p-impostar-primary">Star</span></>}
          subtitle={impoStar.detail.subtitle}
          category={impoStar.detail.category}
          tags={impoStar.detail.tags}
          heroImage="/images/impostar/hero.webp"
          heroImageAlt="ImpoStar Interface"
          viewTransitionName="impostar-hero"
          background={
            <>
              <StarGrid />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-p-impostar-primary/10 blur-[120px] rounded-full pointer-events-none" />
            </>
          }
          theme={{
            categoryClassName: "border-p-impostar-primary/30 bg-p-impostar-primary/10 text-p-impostar-primary",
            titleClassName: "text-4xl sm:text-6xl md:text-8xl font-serif mb-6 leading-[0.9] text-p-impostar-text",
            tagClassName: "text-p-impostar-gray hover:border-p-impostar-primary/50 hover:text-p-impostar-primary",
            imageClassName: "-right-10 md:-right-40"
          }}
        />
        <ImpostarProblemSolution />
        <ImpostarFlow />
        <ImpostarDesignSystem />
        <ImpostarTechStack />
      </main>
      <ImpostarFooterNav />

    </div>
  );
}
