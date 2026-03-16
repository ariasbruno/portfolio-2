import { Terminal, TerminalPrompt } from '@/components/ui/terminal';
import { dilegno } from '@/i18n/es/projects/dilegno';
import { FormattedText } from '@/components/ui/formatted-text';

export function DilegnoTechStack() {
  const techStack = dilegno.detail.techStack_dilegno;

  if (!techStack) return null;

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#333_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.05]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Terminal title="stack.config.ts">
              {/* Terminal content remains technical/hardcoded as per plan notes if preferred, but usually tech names are fine */}
              <div className="text-gray-300">
                <div className="mb-4 text-xs md:text-sm">
                  <span className="text-purple-400">const</span> <span className="text-yellow-200">techStack</span> = {'{'}
                </div>
                <div className="pl-6 space-y-2 text-xs md:text-sm">
                  <div>
                    <span className="text-blue-300">core:</span> <span className="text-green-400">"Next.js 16 (App Router)"</span>,
                  </div>
                  <div>
                    <span className="text-blue-300">ui_base:</span> <span className="text-green-400">"React 19 + Radix UI"</span>,
                  </div>
                  <div>
                    <span className="text-blue-300">styling:</span> <span className="text-green-400">"Tailwind CSS 4.0"</span>,
                  </div>
                  <div>
                    <span className="text-blue-300">quality:</span> <span className="text-green-400">"Biome + TypeScript 5"</span>,
                  </div>
                  <div>
                    <span className="text-blue-300">icons:</span> <span className="text-green-400">"Lucide React"</span>,
                  </div>
                  <div>
                    <span className="text-blue-300">analytics:</span> <span className="text-green-400">"Vercel Speed Insights"</span>
                  </div>
                </div>
                <div className="mt-4 text-xs md:text-sm">
                  {'}'};
                </div>
                <TerminalPrompt />
              </div>
            </Terminal>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-p-dilegno-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              {techStack.sectionTitle}
            </span>
            <h2 className="font-serif text-4xl text-white mb-6">
              {techStack.title}
            </h2>
            <div className="text-gray-400 leading-relaxed space-y-8 font-light">
              <FormattedText text={techStack.sectionDesc} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
