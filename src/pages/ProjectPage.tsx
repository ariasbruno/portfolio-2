import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../i18n/translations';
import { projects } from '../i18n'; // using the specific index file where projects is defined to avoid full translation barrel import
import { ArrowUpRight } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { ProjectHeader } from '../components/ProjectHeader';
import { FormattedText } from '../components/ui/formatted-text';

export default function ProjectPage() {
  useScrollToTop();
  const { slug } = useParams();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link to="/" data-cursor-type="link" className="text-brand-gray hover:text-white transition-colors cursor-none">Return Home</Link>
        </div>
      </div>
    );
  }

  // Find next project for navigation
  const currentLangProjects = projects;
  const currentIndex = currentLangProjects.findIndex(p => p.detail.id === project.id);
  const nextProject = currentLangProjects[(currentIndex + 1) % currentLangProjects.length].detail;

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <ProjectHeader
        projectSlug={project.slug}
        backText="Back to Works"
      />

      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24 pt-32">
        <div className="max-w-[var(--spacing-container)] mx-auto w-full">
          <div className="animate-hero-blur-in" style={{ animationDuration: '0.8s' }}>
            <span className="inline-block border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif italic mb-6 leading-[0.9]">
              {project.title}
            </h1>
            <FormattedText
              text={project.subtitle || ''}
              className="text-xl md:text-2xl text-white/60 max-w-2xl block"
            />
          </div>
        </div>

        {/* Background Image Gradient Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
          {/* Placeholder for actual hero image if available, using gradient for now */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-30" />
        </div>
      </header>

      <main className="max-w-[var(--spacing-container)] mx-auto px-6 md:px-12">

        {/* Intro Stats */}
        {project.stats && project.stats.length > 0 && (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10 mb-24">
            {project.stats.map((stat: { value: string; label: string }) => (
              <div key={stat.label}>
                <h3 className="text-4xl md:text-5xl font-serif mb-2">{stat.value}</h3>
                <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </section>
        )}

        {/* Challenge & Solution */}
        {project.challenge && project.solution && (
          <section className="grid md:grid-cols-2 gap-24 mb-32">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">01. The Challenge</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{project.challenge.title}</h2>
              <FormattedText
                text={project.challenge.text}
                className="text-white/70 leading-relaxed text-lg block"
              />
            </div>
            <div className="md:pt-24">
              <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">02. The Solution</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{project.solution.title}</h2>
              <FormattedText
                text={project.solution.text}
                className="text-white/70 leading-relaxed text-lg block"
              />
            </div>
          </section>
        )}

        {/* Digital Craftsmanship / Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Digital Craftsmanship</h2>
              <p className="text-white/60">Built with precision using modern technologies</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {project.techStack.map((tech: { name: string; description: string }) => (
                <div key={tech.name} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="font-serif text-xl font-medium mb-3">{tech.name}</h3>
                  <FormattedText
                    text={tech.description}
                    className="text-white/60 text-sm leading-relaxed block"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <section className="mb-32 space-y-24 md:space-y-32">
            {project.features.map((feature: { title: string; imageUrl: string; description: string }, i: number) => (
              <div key={feature.title} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-4/3 rounded-sm overflow-hidden bg-white/5 border border-white/10 group">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">Feature 0{i + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6 italic">{feature.title}</h3>
                  <FormattedText
                    text={feature.description}
                    className="text-white/70 leading-relaxed text-lg max-w-md block"
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-32 space-y-8">
            {project.gallery.map((item: { url: string; caption?: string }, i: number) => (
              <figure key={item.url} className="relative group overflow-hidden">
                <div className="aspect-video bg-white/5 w-full">
                  <img
                    loading="lazy"
                    src={item.url}
                    alt={item.caption || `Gallery image ${i + 1}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                {item.caption && (
                  <figcaption className="mt-4 text-xs uppercase tracking-widest text-white/40 text-center">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </section>
        )}

      </main>

      {/* Next Project Footer */}
      <footer className="border-t border-white/10 relative overflow-hidden group">
        <Link to={`/work/${nextProject.slug}`} data-cursor-type="next" className="block py-32 px-6 md:px-12 text-center relative z-10 cursor-none">
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">Next Case Study</span>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-serif italic mb-8 group-hover:scale-105 transition-transform duration-700">
            {nextProject.title}
          </h2>
          <div className="inline-flex items-center gap-2 border-b border-white/30 pb-1 group-hover:border-white transition-colors">
            Explore Project <ArrowUpRight className="w-4 h-4" />
          </div>
        </Link>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </footer>
    </div>
  );
}
