import { ProjectFlow, type ProjectFlowTheme } from '@/components/ProjectFlow';
import { torneitos } from '@/i18n/es/projects/torneitos';

const theme: ProjectFlowTheme = {
  sectionBgClass: "",
  titleTextClass: "text-white",
  descTextClass: "text-white/50",
  accentColor: "#bef264",
  activeCircleBg: "#141f0a",
  inactiveCircleBg: "#080808",
  circleShadowColor: "#080808",
  progressGradientClass: "bg-linear-to-t from-lime-400 via-lime-300 to-transparent from-0% via-10%"
};

export function TorneitosFlow() {
  const steps = torneitos.detail.flowSteps || [];
  const titleNode = torneitos.detail.flowTitle;

  const subtitleNode = (
    <span className="text-white/60">
      {torneitos.detail.flowSection?.sectionSubtitle}
    </span>
  );

  return (
    <ProjectFlow
      steps={steps}
      titleNode={titleNode}
      subtitleNode={subtitleNode}
      theme={theme}
    />
  );
}
