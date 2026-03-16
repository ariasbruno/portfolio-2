import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle, Lock, LayoutTemplate, Accessibility } from 'lucide-react';
import { FormattedText } from './ui/formatted-text';
interface ManifestoContent {
  command: string;
  title: string;
  body: string[];
  badges: { label: string; icon: 'check' | 'lock' | 'responsive' | 'a11y' }[];
}

interface ManifestoProps {
  content: ManifestoContent;
}

const iconMap = {
  check: CheckCircle,
  lock: Lock,
  responsive: LayoutTemplate,
  a11y: Accessibility,
};

const Manifesto = ({ content }: ManifestoProps) => {
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  return (
    <section id='identity' className="py-24 px-6 md:px-12 flex items-center justify-center relative z-20">
      {/* Background Elements */}
      <div className="absolute top-[-20%] right-[-20%] w-[140%] h-[140%] z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] rainbow-glow rotate-15 scale-125" />
      </div>
      <div className="absolute bottom-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-emerald-500/5 rounded-full blur-[100px] md:blur-[140px] pointer-events-none translate-x-1/4 translate-y-1/4 z-0" />
      <div className="absolute top-0 left-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-cyan-500/5 rounded-full blur-[80px] md:blur-[110px] pointer-events-none -translate-x-1/4 -translate-y-1/4 z-0" />
      <div
        ref={revealRef}
        className="relative z-10 w-full max-w-2xl rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
      >
        {/* Terminal title bar */}
        <div className="bg-[#1c1c1c] px-4 py-3 flex items-center gap-2 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center text-xs text-white/30 font-mono">
            bruno@mint:~/manifesto
          </span>
        </div>

        {/* Terminal body */}
        <div className="bg-[#111111] px-8 py-8 font-mono text-sm leading-relaxed">
          {/* Command line */}
          <p className="text-white/50 mb-6 flex items-center gap-2">
            <span className="text-brand-accent-green">→</span>
            <span className="text-white/40">~ {content.command}</span>
          </p>

          {/* Title */}
          <FormattedText
            text={content.title}
            as="h2"
            className="font-serif italic text-white text-3xl md:text-4xl mb-6 font-normal"
          />

          {/* Body paragraphs */}
          {content.body.map((para) => (
            <FormattedText
              key={para.slice(0, 30)}
              text={para}
              className="text-white/60 mb-4 leading-relaxed font-mono text-[13px] block"
            />
          ))}

          {/* Divider */}
          <div className="border-t border-white/10 my-6" />

          {/* Badges */}
          <div className="grid grid-cols-2 gap-4">
            {content.badges.map((badge) => {
              const Icon = iconMap[badge.icon];
              return (
                <div key={badge.label} className="flex items-center gap-2 text-white/50 text-xs">
                  <Icon size={14} className="text-white/30 shrink-0" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
