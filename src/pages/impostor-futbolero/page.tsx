import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ProjectHeader } from '../../components/ProjectHeader';

import { ProjectHero } from '../../components/ProjectHero';
import { FormattedText } from '@/components/ui/formatted-text';
import { impostorFutbolero } from '@/i18n/es/projects/impostor-futbolero';
import QuestionGrid from './components/QuestionGrid';
import { ImpostorProblem } from './components/ImpostorProblem';
import { ImpostorFlow } from './components/ImpostorFlow';
import { ImpostorFeatures } from './components/ImpostorFeatures';
import { ImpostorLogic } from './components/ImpostorLogic';
import { ImpostorTechStack } from './components/ImpostorTechStack';
import { ImpostorFooterNav } from './components/ImpostorFooterNav';

export default function ImpostorFutboleroPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-white selection:text-black font-sans overflow-x-clip">

      {/* Top Bar */}
      <ProjectHeader
        projectSlug="impostor-futbolero"
        title="03  — Impostor Futbolero"
      />

      <main>
        <ProjectHero
          title={<>EL <span className="italic">IMPOSTOR</span> <br /> <span className="text-white/60">FUTBOLERO</span></>}
          subtitle={
            <FormattedText
              text={impostorFutbolero.detail.subtitle || ''}
              className="text-xl md:text-2xl text-white/60 font-sans font-light mb-10 max-w-xl leading-relaxed block"
            />
          }
          category={impostorFutbolero.detail.category}
          stats={impostorFutbolero.detail.stats}
          heroImage="/images/el-impostor/hero.webp"
          heroImageAlt="El Impostor Futbolero Interface"
          viewTransitionName="impostor-hero"
          background={<QuestionGrid />}
          theme={{
            sectionClassName: "min-h-[90vh] pb-24 pt-32 bg-brand-dark",
            titleClassName: "text-5xl md:text-8xl",
            subtitleClassName: "text-xl md:text-2xl text-white/50 font-sans font-light mb-10 max-w-xl leading-relaxed block",
            imageClassName: "right-0 md:-right-20 w-[100%] md:w-[110%] z-10",
            categoryClassName: "border-[#13ae4c]/30 bg-[#13ae4c]/10 text-[#13ae4c]",
            tagClassName: "hover:border-[#13ae4c]/50 hover:text-[#13ae4c]"
          }}
        />
        <ImpostorProblem />
        <ImpostorFlow />
        <ImpostorFeatures />
        <ImpostorLogic />
        <ImpostorTechStack />
      </main>
      <ImpostorFooterNav />

    </div>
  );
}
