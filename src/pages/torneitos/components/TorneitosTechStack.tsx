import { Database, Monitor } from 'lucide-react';
import { Terminal, TerminalTreeLine, TerminalPrompt } from '@/components/ui/terminal';
import { torneitos } from '@/i18n/es/projects/torneitos';

export function TorneitosTechStack() {
  const techStack = torneitos.detail.techStack_structured;

  if (!techStack) return null;

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="md:col-span-1">
          <h2 className="text-5xl md:text-6xl font-serif mb-12 italic">{techStack.sectionTitle}</h2>
          <p className="text-lg text-white/60 mb-12 font-light leading-relaxed">
            {techStack.sectionDesc}
          </p>

          <div className="space-y-10">
            {techStack.frontend && (
              <div>
                <h3 className="text-lg font-mono text-brand-accent-green mb-4 flex items-center gap-3">
                  <Monitor className="w-6 h-6" /> {techStack.frontend.label}
                </h3>
                <ul className="space-y-3 text-white/50 text-sm font-mono pl-8 border-l border-white/10">
                  {techStack.frontend.items.map((item, i) => (
                    <li key={i}><span className="text-white">{item.key}</span> {item.value}</li>
                  ))}
                </ul>
              </div>
            )}
            {techStack.backend && (
              <div>
                <h3 className="text-lg font-mono text-purple-400 mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6" /> {techStack.backend.label}
                </h3>
                <ul className="space-y-3 text-white/50 text-sm font-mono pl-8 border-l border-white/10">
                  {techStack.backend.items.map((item, i) => (
                    <li key={i}><span className="text-white">{item.key}</span> {item.value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-1">
          <Terminal title="torneitos/structure">
            <div className="mb-8">
              <p className="text-white/30 mb-2">// Backend: MVC + Dependency Injection</p>
              <div className="text-purple-400">
                <span className="text-white">torneitos-backend/</span>
                <TerminalTreeLine text="controllers/" dots={1} comment="Business Logic" />
                <TerminalTreeLine text="models/" dots={6} comment="Data Access Layer" />
                <TerminalTreeLine text="routes/" dots={6} comment="Endpoint Definitions" />
                <TerminalTreeLine text="schemas/" dots={5} comment="Zod Validations" />
                <TerminalTreeLine text="utils/" dots={7} comment="Helpers" isLast />
              </div>
            </div>

            <div>
              <p className="text-white/30 mb-2">// Frontend: Modular Structure</p>
              <div className="text-brand-accent-green">
                <span className="text-white">src/</span>
                <TerminalTreeLine text="pages/" dots={7} comment="Views/Routes" />
                <TerminalTreeLine text="components/" dots={2} comment="Reusable Components" />
                <TerminalTreeLine text="hooks/" dots={7} comment="State Logic" />
                <TerminalTreeLine text="services/" dots={4} comment="API Integration" isLast />
              </div>
              <TerminalPrompt />
            </div>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
