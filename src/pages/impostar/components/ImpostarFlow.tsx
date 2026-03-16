import { ProjectFlow, type ProjectFlowTheme } from '@/components/ProjectFlow';
import { impoStar } from '@/i18n/es/projects/impostar';

const theme: ProjectFlowTheme = {
  sectionBgClass: "bg-p-impostar-surface text-p-impostar-text",
  titleTextClass: "text-p-impostar-text",
  descTextClass: "text-p-impostar-gray",
  accentColor: "#0A84FF",
  activeCircleBg: "#021a33",
  inactiveCircleBg: "#1c1c1e",
  circleShadowColor: "#000000",
  progressGradientClass: "bg-gradient-to-t from-p-impostar-primary via-p-impostar-primary to-transparent"
};

export function ImpostarFlow() {
  const steps = impoStar.detail.flowSteps || [];

  const titleNode = (
    <span className="bg-linear-to-br from-blue-400 to-blue-800 bg-clip-text text-transparent pb-2">
      {impoStar.detail.flowTitle}
    </span>
  );

  const subtitleNode = (
    <span className="text-white/60">
      {impoStar.detail.flowSection?.sectionSubtitle}
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

