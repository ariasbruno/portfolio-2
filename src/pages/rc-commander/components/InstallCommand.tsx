import { useState } from 'react';
import { Terminal, Copy, Check, Download } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { rcCommander } from '@/i18n/es/projects/rc-commander';

export const InstallCommand = () => {
  const { install } = rcCommander.detail;
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/ariasbruno/rc-commander.git";

  if (!install) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6e0000]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{install.sectionTitle}</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {install.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Developer Section */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-white/10 transition-colors">
            <h3 className="font-serif text-xl font-bold text-white mb-2">{install.developer.title}</h3>
            <p className="text-white/50 text-sm mb-8">
              {install.developer.desc}
            </p>

            <div className="mt-auto w-full">
              <div
                onClick={copyToClipboard}
                data-cursor-type="copy"
                className="bg-[#111] rounded-xl p-3 md:p-4 flex items-center justify-between cursor-none border border-white/5 hover:border-[#6e0000]/50 transition-all group overflow-hidden w-full"
              >
                <div className="flex items-center gap-2 md:gap-3 overflow-hidden min-w-0 pr-2">
                  <Terminal className="w-4 h-4 md:w-5 md:h-5 text-[#ef4444] shrink-0" />
                  <code className="font-mono text-xs md:text-sm text-gray-300 truncate block">
                    {command}
                  </code>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors pl-2 border-l border-white/10 shrink-0">
                  {copied ? <Check className="w-4 h-4 text-[#ef4444]" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>
              <p className="mt-4 text-xs text-center text-gray-600">{install.developer.clickHint}</p>
            </div>
          </div>

          {/* User Section */}
          <div className="bg-[#0a0a0a] relative border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-white/10 transition-colors overflow-hidden">
            {/* Subtle glow behind the button */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ef4444]/10 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="font-serif text-xl font-bold text-white mb-2">{install.user.title}</h3>
            <p className="text-white/50 text-sm mb-8">
              {install.user.desc}
            </p>

            <div className="mt-auto flex justify-center">
              <Link
                href="https://github.com/ariasbruno/rc-commander/releases/latest"
                isExternal
                data-cursor-type="download"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#ef4444] hover:bg-red-600 text-white hover:text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/20 cursor-none"
              >
                <Download className="w-5 h-5" />
                {install.user.downloadBtn}
              </Link>
            </div>
            <p className="mt-4 text-xs text-center text-gray-600">{install.user.requirement}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
