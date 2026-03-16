
import { home, projects } from './index';

export * from './types';

export const translations = {
  ...home,
  works: {
    ...home.works,
    projects: projects.map(p => p.summary)
  }
};

export type Translation = typeof translations;

export const getProjectBySlug = (slug: string) => {
  return projects.find(p => p.detail.slug === slug)?.detail;
};
