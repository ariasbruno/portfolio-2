import { ProjectHeader } from '../../components/ProjectHeader';
import { useScrollToTop } from '../../hooks/useScrollToTop';

import { ProjectHero } from '../../components/ProjectHero';
import { RadarGrid } from './components/RadarGrid';
import { rcCommander } from '@/i18n/es/projects/rc-commander';
import { RCCommanderOverview } from './components/RCCommanderOverview';
import { RCCommanderFeatures } from './components/RCCommanderFeatures';
import { RCCommanderCompatibility } from './components/RCCommanderCompatibility';
import { RCCommanderBranding } from './components/RCCommanderBranding';
import { RCCommanderTechStack } from './components/RCCommanderTechStack';
import { InstallCommand } from './components/InstallCommand';
import { RCCommanderFooterNav } from './components/RCCommanderFooterNav';

export default function RCCommanderPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ef4444] selection:text-white font-sans overflow-x-clip">
      <ProjectHeader
        projectSlug="rc-commander"
        title="06 — RC Commander"
      />

      <main>
        <ProjectHero
          title={<>RC <span className="text-[#ef4444] block drop-shadow-lg shadow-[#ef4444]/20">Commander</span></>}
          subtitle={rcCommander.detail.subtitle}
          category={rcCommander.detail.category}
          tags={rcCommander.detail.tags}
          heroImage="/images/rc-commander/hero.webp"
          heroImageAlt="RC Commander Interface"
          viewTransitionName="rc-commander-hero"
          background={
            <>
              <RadarGrid />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6e0000]/20 blur-[100px] rounded-full pointer-events-none" />
            </>
          }
          theme={{
            categoryClassName: "border-[#6e0000]/50 bg-[#6e0000]/10 backdrop-blur-md",
            titleClassName: "font-serif text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter",
          }}
        />
        <RCCommanderOverview />
        <RCCommanderFeatures />
        <RCCommanderCompatibility />
        <RCCommanderBranding />
        <RCCommanderTechStack />
        <InstallCommand />
        <RCCommanderFooterNav />
      </main>
    </div>
  );
}
