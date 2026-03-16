import { ProjectFlow, type FlowStep, type ProjectFlowTheme } from '@/components/ProjectFlow';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';

export function RinconFlow() {
  const { flowSection } = rinconCasero.detail;

  if (!flowSection) return null;

  const theme: ProjectFlowTheme = {
    sectionBgClass: "bg-[#1a1a1a]",
    titleTextClass: "text-[#f5f5f5]",
    descTextClass: "text-white/50",
    accentColor: "var(--color-p-rincon-primary-foreground)",
    activeCircleBg: "#2a2215",
    inactiveCircleBg: "#080808",
    circleShadowColor: "#1a1a1a",
    progressGradientClass: "bg-linear-to-t from-p-rincon-primary-foreground via-p-rincon-primary-foreground to-transparent"
  };

  const titleNode = (
    <span className="text-[#f5f5f5]">{flowSection.sectionTitle}</span>
  );

  const subtitleNode = (
    <span className="text-p-rincon-primary-foreground/60">
      {flowSection.sectionSubtitle}
    </span>
  );

  const steps: FlowStep[] = flowSection.steps.map(s => ({
    ...s,
    image: s.image || ''
  }));

  return (
    <ProjectFlow
      steps={steps}
      titleNode={titleNode}
      subtitleNode={subtitleNode}
      theme={theme}
    />
  );
}
