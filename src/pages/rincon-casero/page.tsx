


import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ProjectHeader } from '../../components/ProjectHeader';

import { ProjectHero } from '../../components/ProjectHero';
import DotGrid from './components/DotGrid';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';
import { RinconProblemSolution } from './components/RinconProblemSolution';
import { RinconFlow } from './components/RinconFlow';
import { RinconFeatures } from './components/RinconFeatures';
import { RinconPerformance } from './components/RinconPerformance';
import { RinconDesignSystem } from './components/RinconDesignSystem';
import { RinconTechStack } from './components/RinconTechStack';
import { RinconBusinessImpact } from './components/RinconBusinessImpact';
import { RinconBonus } from './components/RinconBonus';
import { RinconOpenSource } from './components/RinconOpenSource';
import { RinconFooterNav } from './components/RinconFooterNav';

export default function RinconCaseroPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-p-rincon-primary-foreground selection:text-[#1a1a1a] font-sans overflow-x-clip">

      {/* Top Bar */}
      <ProjectHeader
        projectSlug="rincon-casero"
        title="01 — Rincón Casero"
      />

      <main>
        <ProjectHero
          title={<>Rincón <br /> <span className="text-p-rincon-primary-foreground">Casero</span></>}
          subtitle={rinconCasero.detail.subtitle}
          category={rinconCasero.detail.category}
          tags={rinconCasero.detail.tags}
          heroImage={rinconCasero.detail.heroImage || ''}
          heroImageAlt="Rincón Casero Interface"
          viewTransitionName="rincon-hero"
          background={<DotGrid />}
          theme={{
            categoryClassName: "border-p-rincon-primary-foreground/30 bg-p-rincon-primary-foreground/10 text-p-rincon-primary-foreground",
            titleClassName: "text-4xl sm:text-6xl md:text-8xl font-serif mb-6 leading-[0.9] text-[#f5f5f5]",
            tagClassName: "text-white/60 hover:border-p-rincon-primary-foreground/50 hover:text-p-rincon-primary-foreground"
          }}
        />
        <RinconProblemSolution />
        <RinconFeatures />
        <RinconFlow />
        <RinconDesignSystem />
        <RinconBusinessImpact />
        <RinconPerformance />
        <RinconTechStack />
        <RinconBonus />
        <RinconOpenSource />
      </main>
      <RinconFooterNav />

    </div>
  );
}
