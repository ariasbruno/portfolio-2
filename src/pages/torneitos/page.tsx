import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ProjectHeader } from '../../components/ProjectHeader';
import { ProjectHero } from '../../components/ProjectHero';
import DotGrid from './components/DotGrid';
import { torneitos } from '@/i18n/es/projects/torneitos';
import TorneitosOverview from './components/TorneitosOverview';
import { TorneitosFlow } from './components/TorneitosFlow';
import { TorneitosFeatures } from './components/TorneitosFeatures';
import { TorneitosTechStack } from './components/TorneitosTechStack';
import { TorneitosFooterNav } from './components/TorneitosFooterNav';

export default function TorneitosPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-accent-green selection:text-black font-sans overflow-x-clip"
    // style={{
    //   backgroundImage: 'radial-gradient(#252525 1px, transparent 1px)',
    //   backgroundSize: '14px 14px'
    // }}
    >

      {/* Top Bar */}
      <ProjectHeader
        projectSlug="torneitos"
        title="02 — Torneitos"
      />

      <ProjectHero
        title={torneitos.detail.title}
        subtitle={torneitos.detail.subtitle}
        tags={torneitos.detail.tags}
        heroImage="/images/torneitos/hero.webp"
        heroImageAlt="Torneitos Desktop Interface"
        viewTransitionName="torneitos-hero"
        background={<DotGrid />}
        theme={{
          titleClassName: "text-5xl sm:text-7xl md:text-9xl font-serif mb-6 leading-[0.9]",
          subtitleClassName: "text-xl md:text-2xl text-white/60 font-serif italic mb-10 max-w-xl",
          tagClassName: "hover:border-white/30 hover:text-white"
        }}
      />
      <TorneitosOverview />
      <TorneitosFlow />
      <TorneitosFeatures />
      <TorneitosTechStack />
      <TorneitosFooterNav />

    </div>
  );
}
