export type Language = 'es' | 'en';

export interface Statistics {
  label: string;
  value: string;
}

export interface TechItem {
  name: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface GalleryItem {
  url: string;
  caption?: string;
}

export interface FlowStepItem {
  step: string;
  title: string;
  desc: string;
  image: string;
  image2?: string;
}

export interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  category: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  heroImage?: string;
  stats?: Statistics[];
  challenge?: {
    title: string;
    text: string;
    points?: string[];
  };
  solution?: {
    title: string;
    text: string;
    points?: string[];
  };
  techStack?: TechItem[];
  features?: FeatureItem[];
  gallery?: GalleryItem[];
  philosophy?: {
    title: string;
    items: { title: string; text: string; }[];
  };
  compatibility?: {
    title: string;
    models: string[];
    protocols: { name: string; description: string; }[];
  };
  // Extended content fields
  overview?: {
    title: string;
    paragraphs: string[];
  };
  flowSteps?: FlowStepItem[];
  flowTitle?: string;
  // Torneitos-specific structured fields
  features_structured?: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: { title: string; description: string; }[];
  };
  techStack_structured?: {
    sectionTitle: string;
    sectionDesc: string;
    frontend?: { label: string; items: { key: string; value: string; }[]; };
    backend?: { label: string; items: { key: string; value: string; }[]; };
  };
  // Dilegno-specific
  origin?: {
    spanSection: string;
    title: string;
    paragraph: string;
    problem: { title: string; desc: string; };
    mission: { title: string; desc: string; };
  };
  impact?: {
    sectionTitle: string;
    title: string;
    items: {
      category: string;
      before: string;
      afterTitle: string;
      afterDesc: string;
      badge: string;
    }[];
  };
  comparisons_structured?: {
    sectionTitle: string;
    sectionSubtitle: string;
    sectionDesc: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      before: { label: string; points: string[]; };
      after: { label: string; points: string[]; };
    }[];
  };
  comparisons?: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      before: { image: string; label: string; points: string[]; };
      after: { image: string; label: string; points: string[]; };
    }[];
  };
  techStack_dilegno?: {
    sectionTitle: string;
    title: string;
    sectionDesc: string;
  };
  // ImpoStar-specific
  problemSection?: {
    title: string;
    intro: string;
    points: string[];
  };
  solutionSection?: {
    title: string;
    intro: string;
    points: string[];
  };
  designSystem?: {
    sectionTitle: string;
    intro: string;
    techniques: { title: string; desc: string; }[];
  };
  techStack_impostar?: {
    sectionTitle: string;
    sectionDesc: string;
    items: { name: string; desc: string; }[];
  };
  // Impostor Futbolero-specific
  problemLabel?: string;
  solutionLabel?: string;
  solutionCards?: { title: string; desc: string; }[];
  flowSection?: {
    sectionLabel?: string;
    sectionTitle: string;
    sectionSubtitle: string;
    steps: { step: string; title: string; desc: string; image?: string; image2?: string; }[];
  };
  logic?: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    blocks: { title: string; desc: string; }[];
    security: {
      title: string;
      items: { title: string; desc: string; }[];
    };
  };
  techStack_impostor?: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  // RC Commander-specific
  featuresSection?: {
    sectionTitle: string;
    sectionSubtitle: string;
    features?: { title: string; desc: string; }[];
    cards?: {
      title: string;
      desc: string;
      image?: string;
      alt?: string;
    }[];
    openSource?: {
      badge: string;
      title: string;
      desc: string;
    };
  };
  compatibilitySection?: {
    sectionSubtitle: string;
    modelsTitle: string;
    protocolsTitle: string;
  };
  branding?: {
    sectionTitle: string;
    sectionIntro: string;
    logo: { title: string; desc: string; downloadBtn: string; };
    colors: { sectionTitle: string; };
    ai: { sectionTitle: string; desc: string; };
  };
  install?: {
    sectionTitle: string;
    sectionSubtitle: string;
    developer: { title: string; desc: string; clickHint: string; };
    user: { title: string; desc: string; downloadBtn: string; requirement: string; };
  };
  techStack_rc?: {
    sectionTitle: string;
  };
  // Rincon Casero-specific
  // Rincon Casero-specific
  impactSection?: {
    sectionTitle: string;
    impacts: { value: string; label: string; desc: string; }[];
  };
  performanceSection?: {
    title: string;
    desc: string;
    imageAlt?: string;
  };
  techStack_rincon?: {
    sectionTitle: string;
    items: { name: string; desc: string; }[];
  };
  openSourceSection?: {
    sectionTitle: string;
    p1: string;
    p2: string;
    repoBtn: string;
  };
  identity?: {
    sectionTitle: string;
    intro: string;
    displayFont: { label: string; name: string; desc: string; };
    bodyFont: { label: string; name: string; desc: string; };
    inkscapeNote: string;
  };
  bonus?: {
    badge: string;
    title: string;
    paragraphs: string[];
    cards: { title: string; desc: string; }[];
  };
}

export interface ProjectSummary {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface ProjectData {
  summary: ProjectSummary;
  detail: ProjectDetail;
}

export interface HomeTranslation {
  nav: {
    work: string;
    services: string;
    identity: string;
    inquire: string;
  };
  hero: {
    subtitle: string;
    title: string | string[];
    description: string;
  };
  works: {
    title: string;
    subtitle: string;
    explore: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      items: string[];
    }[];
  };
  quote: {
    text: string;
    tags: string[];
  };
  contact: {
    title: string | string[];
    role: string;
    availability: string;
    formTitle: string;
    name: string;
    email: string;
    details: string;
    send: string;
    time: string;
    direct: string;
    emailValue: string;
    githubLabel: string;
    githubValue: string;
  };
  common: {
    back: string;
    prev: string;
    next: string;
    dragHint: string;
    expandTitle: string;
    legacyLabel: string;
    modernLabel: string;
  };
  footer: {
    rights: string;
  };
  manifesto: {
    command: string;
    title: string;
    body: string[];
    badges: { label: string; icon: 'check' | 'lock' | 'responsive' | 'a11y' }[];
  };
}
